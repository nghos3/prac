//var csv is the CSV file with headers
var result =[];
var headers;
var a=0;
function csvJSON(csv,a){
var lines = csv;
   
   if(a == 0)
   headers=lines.split(",");
  else
   {

    var obj = {};
    var currentline=lines.split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);
      
    for(var j=0;j<headers.length;j++){
      // WRITE CONDITION
       if(headers[j]== "salt_100g" || headers[j]== "sugars_100g" || headers[j] == "countries_en" || headers[j] == "carbohydrates_100g" ||headers[j] == "proteins_100g" ||headers[j] == "fat_100g")
      obj[headers[j]] = currentline[j];
      
    }

    result.push(obj);
    //JSON
}
  
  //console.log(JSON.stringify(result));
  }



var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('FoodFacts.csv');
var outstream = new stream;
var ostream = fs.createWriteStream('ans.json');
var rl = readline.createInterface(instream, outstream);


rl.on('line', function(line) {  
   
   csvJSON(line, a);
   a++;
 
 

});
rl.on('close', function() {
var namo=JSON.stringify(result);
    ostream.write(namo);
}); 