
//For adding the modules of node js
var fs = require("fs");
var readline = require('readline');
var stream = require('stream');
//For reading the csv file
var instream = fs.createReadStream('country_details.csv');
//Creating stream for saving into object after reading
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var obj = [];//Array for All Objects
var populationObject = [];
var gdpObject = [];
var ppObject = [];




var headers=[];
var headerCounter = 0;

rl.on('line', function(line)//Adding event handler to line
{
   
   if(headerCounter==0){
       headers=line.split(",");
       headerCounter=1;
   }
   else
   {

   	var currentline = line.split(',');
    console.log(currentline);

   	if(!(currentline[0] == 'European Union' || currentline[0] == 'World')){


        var tempValueForPopulation = {};
        var tempValueForGdp = {};
        var tempValueForPp = {};

        


        for(var val=0;val<headers.length;val++)
        {
          if(headers[val] == 'Country')
          {
            tempValueForPp[headers[val]] = currentline[val];
            tempValueForPopulation[headers[val]] = currentline[val];
            tempValueForGdp[headers[val]] = currentline[val];
          }
          

          if(headers[val] == "GDP2013")
            tempValueForGdp[headers[val]] = currentline[val];
          if(headers[val] == "Population2013")
            tempValueForPopulation[headers[val]] = currentline[val];
          if(headers[val] == 'PPP2013')
            tempValueForPp[headers[val]] = currentline[val];

          

        }

        populationObject.push(tempValueForPopulation);
        gdpObject.push(tempValueForGdp);
        ppObject.push(tempValueForPp);
        	
      	}  	
        	

    }
    populationObject.sort(function(a, b){
    			return b.Population2013 - a.Population2013;
			});
    gdpObject.sort(function(a, b){
    			return b.GDP2013 - a.GDP2013;
			});
    ppObject.sort(function(a, b){
    			return b.PPP2013 - a.PPP2013;
			});
   
});






rl.on('close', function() { 
     //console.log(res);
     fs.writeFile('population.json',JSON.stringify(populationObject),'utf8',function(err){
     	console.log(err);
     });
     fs.writeFile('gdp.json',JSON.stringify(gdpObject),'utf8',function(err){
     	console.log(err);
     });
     fs.writeFile('pp.json',JSON.stringify(ppObject),'utf8',function(err){
     	console.log(err);
     });
});
