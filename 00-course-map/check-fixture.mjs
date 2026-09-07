import {fileURLToPath} from 'node:url';import fs from 'node:fs';import path from 'node:path';
export function validateRecord(r){
 for(const k of ['source_id','title','status'])if(typeof r[k]!=='string'||!r[k].trim())throw Error(k+' must be nonempty');
 const date=r.held_at||r.starts_at;if(typeof date!=='string'||!Number.isFinite(Date.parse(date)))throw Error('A real meeting or event time is required');
 if(r.held_at){if(!['manual','fireflies'].includes(r.source))throw Error('Unsupported meeting source');if(!['available','unavailable'].includes(r.status))throw Error('Invalid meeting status');if(r.status==='available'&&(typeof r.summary!=='string'||!r.summary.trim()))throw Error('Available meetings need a summary');}
 else {if(!['active','canceled'].includes(r.status))throw Error('Invalid event status');try{new Intl.DateTimeFormat('en',{timeZone:r.timezone}).format();}catch{throw Error('Use a valid timezone');}if(!r.timezone)throw Error('Timezone required');}
}
if(process.argv[1]&&path.resolve(process.argv[1])===path.resolve(fileURLToPath(import.meta.url))){
 let text='';for await(const chunk of process.stdin)text+=chunk;
 try{const event=JSON.parse(text);const root=path.resolve(process.env.CLAUDE_PROJECT_DIR||process.cwd());const target=path.resolve(root,event.tool_input?.file_path||'');const base=path.join(root,'01-planning/sample-data')+path.sep;
 if(target.startsWith(base)&&target.endsWith('.json')){const real=fs.realpathSync(target);if(!real.startsWith(fs.realpathSync(base)+path.sep))throw Error('Sample path escapes its folder');validateRecord(JSON.parse(fs.readFileSync(real,'utf8')));console.log('Sample record checked');}}
 catch(e){console.error('Sample check: '+e.message);process.exitCode=2;}
}
