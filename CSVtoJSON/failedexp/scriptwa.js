/*function csvJSON(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);
  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}*/
/*var fs = require("fs");
var data = fs.readFileSync('Indicators.csv');
var lines = data.toString().split("\n");
console.log(lines);
/*var arrayOne= stringData.split('\r\n');
var header=arrayOne[0].split(',');
console.log(header);
var noOfRow=arrayOne.length;
var noOfCol=header.length;*/
var fs = require('fs');
//var fw = require('fs');
var readline = require('readline');
var stream = require('stream');
var instream = fs.createReadStream('./Indicators.csv');
var ostream = fs.createWriteStream('ans.json');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
 ostream.write("["+"\n");
var a = 0;
var head;
var list = ["Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Cyprus",
           "Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon",
           "Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar",
           "Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand",
           "Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"]
cnt = 0;
ans = [];
rl.on('line', function(line) {
  str = line.toString();
  if(a==0)
  { 
    head = str.split(',');
  }
  else{
    p = 0;
    var spl = str.split(',');
    for(i=0;i<list.length;i++){
      if(spl[0]==list[i]){
        p = 1;
        break ;
      }
    }
    
   /* headobj=head.split(',');
    console.log(headobj[2]);*/
    //console.log(spl[2]);
    var one;
    var pos = spl[2].search(/^"Life expectancy at birth/);
    if(pos!=-1 && p==1){
       /*console.log(cnt++);*/
      /* ostream.write("{"+str+"}"+"\n");*/
    one=str.split(',');
    console.log(cnt++);
    ostream.write("{"+'"CountryName"'+":"+'"'+one[0]+'"'+","+"\n"+'"CountryCode"'+":"+'"'+one[1]+'"'+","+"\n"+'"IndicatorName"'+":"+one[2]+one[3]+","+"\n"+'"IndicatorCode"'+":"+'"'+one[4]+'"'+","+"\n"+'"Year"'+":"+one[5]+","+"\n"+'"Value"'+":"+one[6]+"\n"+"}"+","+"\n");
    }
    
    
    
  }
  //console.log(cnt++);
  a++;
  
});
rl.on('close', function() {
  ostream.write("]"); 
});