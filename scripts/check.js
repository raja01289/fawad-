const fs=require('fs');
const files=['index.html','shop.html','product.html','cart.html','checkout.html','admin.html','styles.css','app.js','data.js','vercel.json','404.html'];
for(const f of files){if(!fs.existsSync(f)) throw new Error('Missing '+f)}
for(const f of files.filter(x=>x.endsWith('.html')||x.endsWith('.js')||x.endsWith('.css')||x==='vercel.json')){if(!fs.readFileSync(f,'utf8').trim()) throw new Error('Empty '+f)}
console.log('FAWAD SPORTS build check passed: '+files.length+' required files present.');
