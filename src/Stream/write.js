var fs = require('fs');
var data = 'data to write';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
    console.log('cabei de escrever');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('app end');