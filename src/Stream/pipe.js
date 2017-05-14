var fs = require('fs');

var reader = fs.createReadStream('input.text');
var writer = fs.createWriteStream('pipeOutput.txt');

reader.pipe(writer);

console.log('end');