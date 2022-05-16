const fs = require('fs');

const dir = '../_data/'; 
const outfile = './src/assets/chaindata.json';
var output = [];

fs.readdirSync(dir).forEach((file) => {
  if(file == '_template.json') { return; }
  
  var read = fs.readFileSync(dir + file);
  output.push(JSON.parse(read));
  // console.log(file);
})
//console.log(JSON.stringify(output));
 
fs.writeFileSync(outfile, JSON.stringify(output));