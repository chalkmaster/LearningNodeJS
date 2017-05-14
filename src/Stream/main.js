var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('input.text');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk){
    data += chunk;
});

readStream.on('end', function(){
    console.log(data);
});

readStream.on('error', function(err){
    console.log(err.stack);
});

console.log('app end');