var fs = require('fs');
var zlib = require('zlib');

var zip = zlib.createGzip();
var stream = fs.createReadStream('output.txt');
var write = fs.createWriteStream('./output.txt.gz');

stream.pipe(zip).pipe(write);