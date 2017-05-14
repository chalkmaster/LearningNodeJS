var fs = require('fs');
var zipper = require('zlib');

// fs.createReadStream('input.txt')
//     .pipe(zipper.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

console.log('zipped');

fs.createReadStream('input.txt.gz')
    .pipe(zipper.createGunzip())
    .pipe(fs.createWriteStream('unzippedtext.txt'));

console.log('unzipped');

console.log('end');