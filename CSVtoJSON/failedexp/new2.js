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
var ostream1 = fs.createWriteStream('barg.json');
var ostream2 = fs.createWriteStream('multig.json');
var rl = readline.createInterface(instream, outstream);

var  i;
//These are the variables for first json inside the array parameters contains salt and second one contains salt 
var countries=[];
var objc={};
var count=["France","United Kingdom","Germany","United States","Australia","Canada","Spain","Netherlands","South Africa"] ;
var salt  =[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
var sugar =[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];


 //These variables are for regions array inside will contain Fat, Protein and Carbohydrate  respectively
/*var regions={};
regions["North Europe"]=[0,0,0];
regions["Central Europe"]=[0,0,0];
regions["South Europe "]=[0,0,0]
*/
rl.on('line', function(line) {  
   
   csvJSON(line, a);
   a++; 

});
rl.on('close', function() {
var namo=JSON.stringify(result);
      //parse data 
      namo = JSON.parse(namo); 


      for(i=0;i<a-1;i++)
      {
        for(var j=0;j<count.length;j++)
        {
           if(namo[i].countries_en == count[j])
         {  
          salt[j]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          sugar[j]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
           
         }
        }
      }
      
      for(var j=0;j<count.length;j++)
      {   var objc={};
        objc["countries"]=count[j];
        objc["salt"]=salt[j];
        objc["sugar"]=sugar[j];
        countries.push(objc);
        
      }
        
       
       /*for(i=0;i<a-1;i++)
       {
        if(namo[i].countries_en == "France")
        {  
          countries["France"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
           countries["France"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }

        else if(namo[i].countries_en == "United Kingdom")
        {
          countries["United Kingdom"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["United Kingdom"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);  
        }
         else if(namo[i].countries_en == "Germany")
        {
          countries["Germany"][0]+=   namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["Germany"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "United States")
        {
          countries["United States"][0]+= namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["United States"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "Australia")
        {
          countries["Australia"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["Australia"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "Canada")
        {
          countries["Canada"][0]+=   namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["Canada"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "Spain")
        {
          countries["Spain"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["Spain"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "Netherlands")
        {
          countries["Netherlands"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["Netherlands"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
         else if(namo[i].countries_en == "South Africa")
        {
          countries["South Africa"][0]+=  namo[i].salt_100g ===""? 0:parseFloat(namo[i].salt_100g);
          countries["South Africa"][1]+= namo[i].sugars_100g ===""? 0:parseFloat(namo[i].sugars_100g);
        }
       }

       for(i=0;i<a-1;i++)
       { 
         if(namo[i].countries_en == "United Kingdom" || namo[i].countries_en == "Denmark" ||namo[i].countries_en == "Sweden"||namo[i].countries_en == "Norway")
            {
              regions["North Europe"][0] += namo[i].fat_100g === ""?0:parseFloat(namo[i].fat_100g)  ;
              regions["North Europe"][1] += namo[i].proteins_100g === ""?0:parseFloat(namo[i].proteins_100g);
              regions["North Europe"][2] += namo[i].carbohydrates_100g === ""?0:parseFloat(namo[i].carbohydrates_100g);
            }
         else if(namo[i].countries_en == "France" ||namo[i].countries_en == "Belgium" || namo[i].countries_en == "Germany" || namo[i].countries_en == "Switzerland" || namo[i].countries_en == "Netherlands")
            {
              regions["Central Europe"][0] += namo[i].fat_100g === ""?0:parseFloat(namo[i].fat_100g)  ; 
              regions["Central Europe"][1] += namo[i].proteins_100g === ""?0:parseFloat(namo[i].proteins_100g);
              regions["Central Europe"][2] += namo[i].carbohydrates_100g === ""?0:parseFloat(namo[i].carbohydrates_100g);
            }
         else if(namo[i].countries_en =="Portugal" || namo[i].countries_en =="Greece" || namo[i].countries_en == "Italy" || namo[i].countries_en == "Spain" || namo[i].countries_en == "Croatia" || namo[i].countries_en == "Albania")
           {
            regions["South Europe "][0] += namo[i].fat_100g === ""?0:parseFloat(namo[i].fat_100g)  ;
            regions["South Europe "][1] += namo[i].proteins_100g === ""?0:parseFloat(namo[i].proteins_100g);
            regions["South Europe "][2] += namo[i].carbohydrates_100g === ""?0:parseFloat(namo[i].carbohydrates_100g);

           }
       }
                                    
*/


    var done=JSON.stringify(countries);  
    ostream1.write(done);
   // done=JSON.stringify(regions);
    //ostream2.write(done);
   
}); 