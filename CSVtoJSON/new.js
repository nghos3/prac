 var result = [];
 var headers;
 var a = 0;

 function csvJSON(csv, a) {
     var lines = csv;

     if (a == 0)
         headers = lines.split(",");
     else {

         var obj = {};
         var currentline = lines.split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);

         for (var j = 0; j < headers.length; j++) {
             // WRITE CONDITION
             if (headers[j] == "salt_100g" || headers[j] == "sugars_100g" || headers[j] == "countries_en" || headers[j] == "carbohydrates_100g" || headers[j] == "proteins_100g" || headers[j] == "fat_100g")
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

 var i;
 //These are the variables for first json inside the array parameters contains salt and second one contains salt 
 var countries = [];

 var count = ["France", "United Kingdom", "Germany", "United States", "Australia", "Canada", "Spain", "Netherlands", "South Africa"];
 var salt = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
 var sugar = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];


 //These variables are for regions array inside will contain Fat, Protein and Carbohydrate  respectively
 var regions = [];
 var reg = ["North Europe", "Central Europe", "South Europe "];

 var carb = [0.0, 0.0, 0.0];
 var pro = [0.0, 0.0, 0.0];
 var fat = [0.0, 0.0, 0.0];

 rl.on('line', function(line) {

     csvJSON(line, a);
     a++;

 });
 rl.on('close', function() {
     var namo = JSON.stringify(result);
     //parse data 
     namo = JSON.parse(namo);


     for (i = 0; i < a - 1; i++) {
         for (var j = 0; j < count.length; j++) {
             if (namo[i].countries_en == count[j]) {
                 salt[j] += namo[i].salt_100g === "" ? 0 : parseFloat(namo[i].salt_100g);
                 sugar[j] += namo[i].sugars_100g === "" ? 0 : parseFloat(namo[i].sugars_100g);

             }
         }
     }

     for (var j = 0; j < count.length; j++) {
         var objc = {};
         objc["countries"] = count[j];
         objc["salt_sug"] = salt[j];
         objc["salt_sug"] = sugar[j];
         countries.push(objc);

     }



     for (i = 0; i < a - 1; i++) {
         var j;
         if (namo[i].countries_en == "United Kingdom" || namo[i].countries_en == "Denmark" || namo[i].countries_en == "Sweden" || namo[i].countries_en == "Norway") {
             j = 0;
             carb[j] += namo[i].carbohydrates_100g === "" ? 0 : parseFloat(namo[i].carbohydrates_100g);
             pro[j] += namo[i].proteins_100g === "" ? 0 : parseFloat(namo[i].proteins_100g);
             fat[j] += namo[i].fat_100g === "" ? 0 : parseFloat(namo[i].fat_100g);

         } else if (namo[i].countries_en == "France" || namo[i].countries_en == "Belgium" || namo[i].countries_en == "Germany" || namo[i].countries_en == "Switzerland" || namo[i].countries_en == "Netherlands") {
             j = 1;
             carb[j] += namo[i].carbohydrates_100g === "" ? 0 : parseFloat(namo[i].carbohydrates_100g);
             pro[j] += namo[i].proteins_100g === "" ? 0 : parseFloat(namo[i].proteins_100g);
             fat[j] += namo[i].fat_100g === "" ? 0 : parseFloat(namo[i].fat_100g);

         } else if (namo[i].countries_en == "Portugal" || namo[i].countries_en == "Greece" || namo[i].countries_en == "Italy" || namo[i].countries_en == "Spain" || namo[i].countries_en == "Croatia" || namo[i].countries_en == "Albania") {
             j = 2;
             carb[j] += namo[i].carbohydrates_100g === "" ? 0 : parseFloat(namo[i].carbohydrates_100g);
             pro[j] += namo[i].proteins_100g === "" ? 0 : parseFloat(namo[i].proteins_100g);
             fat[j] += namo[i].fat_100g === "" ? 0 : parseFloat(namo[i].fat_100g);

         }
     }


     for (var j = 0; j < reg.length; j++) {
         var objc = {};
         objc["region"] = reg[j];
         objc["fat"] = fat[j];
         objc["protein"] = pro[j];
         objc["carbohydrates"] = carb[j];
         regions.push(objc);
     }

     var done = JSON.stringify(countries);
     ostream1.write(done);
     done = JSON.stringify(regions);
     ostream2.write(done);

 });