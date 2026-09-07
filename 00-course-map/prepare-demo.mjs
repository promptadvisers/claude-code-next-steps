import fs from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const date=process.argv[2]||new Intl.DateTimeFormat('en-CA',{timeZone:'America/Toronto',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||new Date(date+'T12:00:00Z').toISOString().slice(0,10)!==date)throw Error('Use a real YYYY-MM-DD date');
const offset=n=>{const d=new Date(date+'T14:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString();};
for(const [file,field,n] of [['meeting.json','held_at',-3],['event.json','starts_at',3]]){const url=new URL('01-planning/sample-data/'+file,root);const record=JSON.parse(await fs.readFile(url,'utf8'));record[field]=offset(n);await fs.writeFile(url,JSON.stringify(record,null,2)+'\n');}
await fs.writeFile(new URL('00-course-map/DEMO_CONTEXT.md',root),'# Demo context\n\nBrief date: '+date+'\n\nUse this real year-month-day value for /client-brief. Sample files use relative dates around this date. Existing browser seeds keep their own dates; inspect the visible record rather than expecting this script to reset private data.\n');
console.log('Prepared fictional files and brief date: '+date);
