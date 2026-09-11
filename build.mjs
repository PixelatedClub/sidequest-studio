import {readFile,writeFile} from 'node:fs/promises';
const read=name=>readFile(new URL('src/'+name,import.meta.url),'utf8');
const [template,css,playerCSS,core,player,editor]=await Promise.all(['template.html','studio.css','player.css','model.js','player.js','editor.js'].map(read));
let html=template.replace('/* STUDIO_CSS */',()=>css).replace('/* PLAYER_CSS */',()=>playerCSS).replace('/* CORE_JS */',()=>core).replace('/* PLAYER_JS */',()=>player).replace('/* EDITOR_JS */',()=>`const PLAYER_CSS=${JSON.stringify(playerCSS)};\n${editor}`);
await writeFile(new URL('Sidequest Studio.html',import.meta.url),html);
console.log('Built Sidequest Studio.html — no server or dependencies required.');
