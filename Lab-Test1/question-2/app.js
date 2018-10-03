var fs = require('fs');
const stream = fs.createReadStream('data.txt');
const file = fs.createWriteStream('./output.txt');

var writeData = function() {

    stream.on("data", function(data){
        console.log(data);
        console.log(data.toString());
        file.write(data);
        file.write(data.toString(), function(err) {file.end('\nWrite');}); 
    });

    // file.end('\nWrite is completed');
}

writeData();

