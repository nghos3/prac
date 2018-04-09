


var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('FoodFacts.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {  
console.log(line);
});
rl.on('close', function() {
});