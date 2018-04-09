 // function readTextFile(file) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4) {
//             if (rawFile.status === 200 || rawFile.status == 0) {
//                 var allText = rawFile.responseText;
//                 console.log(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// const fs = require('fs');
// let filePath = "./FoodFacts.csv";
// let csvData = fs.readFileSync(filePath, 'utf8'); //the encoding is needed to interpret the data
// //console.log(csvData);
// csvJSON(csvData);

var headers;

var result = [];

function csvJSON(csv, a) {

    var lines = csv;


    if (a == 0) {
        headers = lines.split(",");
        //console.log(lines.length);

    }
    // for(var i=0;i<headers.length;i++)
    // {
    //   if(headers[i]=="salt_100g")
    //       console.log(headers[i]);

    // 
    else {
        //console.log(lines.length);
       // console.log(lines);


        var obj = {};
        var currentline = lines.split(",");

        for (var j = 0; j < headers.length; j++) {
            // if(headers[j]=="sugars_100g")
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

         console.log(JSON.stringify(result));
    }

    //return result; //JavaScript object
    //return JSON.stringify(result); //JSON
}

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var a = 0;
var instream = fs.createReadStream('./FoodFacts.csv');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
//var a = 0;
//var tester = new RegExp('^(.*)(\,THEFT\,)(.*)$');
rl.on('line', function f1(line) {
    if (a < 3) {
        //console.log(line);  
        csvJSON(line, a);
        a++;
    }
    
});

rl.on('close', function() {

});


// var fs = require('fs');
// var es = require('event-stream');

// var lineNr = 0;

// var s = fs.createReadStream('./FoodFacts.csv')
//     .pipe(es.split())
//     .pipe(es.mapSync(function(line){

//         // pause the readstream
//         s.pause();

//         lineNr += 1;

//         // process line here and call s.resume() when rdy
//         // function below was for logging memory usage
//         logMemoryUsage(lineNr);

//         // resume the readstream, possibly from a callback
//         s.resume();
//     })
//     .on('error', function(err){
//         console.log('Error while reading file.', err);
//     })
//     .on('end', function(){
//         console.log('Read entire file.')
//     })
// );
