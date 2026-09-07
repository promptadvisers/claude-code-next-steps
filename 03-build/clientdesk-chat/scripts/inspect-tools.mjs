// Local fake provider: validates actual CLI tool exposure without paid inference.
import http from 'node:http';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {executeClaude,claudeArgs,claudeEnvironment,claudeAnswer} from '../src/claude.ts';
let requests=0, unsafe=false;
const server=http.createServer(async(req,res)=>{
 let raw='';for await(const c of req)raw+=c;
 let body;try{body=JSON.parse(raw);}catch{body={};}
 if(req.url?.includes('count_tokens')){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({input_tokens:10}));}
 requests++;const tools=body.tools||[];unsafe ||=tools.length>0;
 console.log(JSON.stringify({tools:tools.map(t=>t.name)}));
 const text='A sourced answer.';
 const message={id:'msg_fixture',type:'message',role:'assistant',model:body.model||'claude-sonnet-4-6',content:[{type:'text',text}],stop_reason:'end_turn',stop_sequence:null,usage:{input_tokens:10,output_tokens:5}};
 if(!body.stream){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify(message));}
 res.writeHead(200,{'Content-Type':'text/event-stream'});
 const events=[{type:'message_start',message:{...message,content:[],stop_reason:null}},{type:'content_block_start',index:0,content_block:{type:'text',text:''}},{type:'content_block_delta',index:0,delta:{type:'text_delta',text}},{type:'content_block_stop',index:0},{type:'message_delta',delta:{stop_reason:'end_turn',stop_sequence:null},usage:{output_tokens:5}},{type:'message_stop'}];
 res.end(events.map(e=>`event: ${e.type}\ndata: ${JSON.stringify(e)}\n\n`).join(''));
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const home=await mkdtemp(join(tmpdir(),'clientdesk-claude-test-'));await mkdir(join(home,'.claude'));
try{
 const env={...claudeEnvironment(home,process.env),ANTHROPIC_API_KEY:'fixture-not-a-real-key',ANTHROPIC_BASE_URL:`http://127.0.0.1:${server.address().port}`};
 delete env.CLAUDE_CODE_OAUTH_TOKEN;
 const output=await executeClaude(claudeArgs,home,AbortSignal.timeout(20000),env,'Say hello using supplied evidence only.');
 if(claudeAnswer(output)!=='A sourced answer.'||unsafe||!requests)throw Error('CLI verification failed');
 console.log('Claude print-mode JSON and empty tool list verified.');
}finally{server.closeAllConnections();server.close();await rm(home,{recursive:true,force:true});}
