var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('FoodFacts.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var a = 0;
var result = [];
var headers=[];
rl.on('line', function(line) 
{
    
    if(a==0)
    	headers=line.split(",");
    else
    {
    	var obj = {};
	  	var currentline=line.split(",");

	  	for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  	}

		result.push(obj);
	}
    a++;
});

rl.on('close', function() {
  	var result1 = JSON.stringify(result);
  	console.log(result1);

});

