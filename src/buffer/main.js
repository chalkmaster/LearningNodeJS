var buf = new Buffer(256);

var len = buf.write("Teste abce");

console.log(len);

var data = buf.toString(undefined, 4,10);
console.log(data);

var alphabet = new Buffer(26);

for (var i = 0; i < 26; i++)
    alphabet[i] = i + 97;

console.log(alphabet.toString());

console.log(alphabet.toJSON());

var buf1 = new Buffer('chalk');
var buf2 = new Buffer(' master');

var buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString());

console.log('app end');