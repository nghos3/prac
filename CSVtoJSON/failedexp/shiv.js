var headers;



var result = [];

// var sugarNetherlands = 0,

//     sugarCanada = 0,

//     sugarFrance = 0,

//     sugarUnitedKingdom = 0,

//     sugarGermany = 0,

//     sugarUnitedStates = 0,

//     sugarAustralia = 0,

//     sugarSpain = 0,

//     sugarSouthAfrica = 0;

// var saltNetherlands = 0,

//     saltCanada = 0,

//     saltFrance = 0,

//     saltUnitedKingdom = 0,

//     saltGermany = 0,

//     saltUnitedStates = 0,

//     saltAustralia = 0,

//     saltSpain = 0,

//     saltSouthAfrica = 0;



var countries = ["Netherlands", "France", "United Kingdom", "Germany", "United States", "Australia", "Canada", "Spain", "South Africa"];

class dataSet {

    contructor(country, salt, sugar) {

        this.country = country;

        this.salt = salt;

        this.sugar = sugar;

    }

}



// class sugar {

//     contructor(sugarNetherlands, sugarFrance, sugarUnitedKingdom, sugarGermany, sugarUnitedStates, sugarAustralia, sugarCanada, sugarSpain, sugarSouthAfrica) {

//         this.sugarNetherlands = sugarNetherlands;

//         this.sugarFrance = sugarFrance;

//         this.sugarUnitedKingdom = sugarUnitedKingdom;

//         this.sugarGermany = sugarGermany;

//         this.sugarUnitedStates = sugarUnitedStates;

//         this.sugarAustralia = sugarAustralia;

//         this.sugarCanada = sugarCanada;

//         this.sugarSpain = sugarSpain;

//         this.sugarSouthAfrica = sugarSouthAfrica;

//     }

// }



// class salt {

//     contructor(saltNetherlands, saltFrance, altUnitedKingdom, saltGermany, saltUnitedStates, saltAustralia, saltCanada, saltSpain, saltSouthAfrica) {

//         this.saltNetherlands = saltNetherlands;

//         this.saltFrance = saltFrance;

//         this.saltUnitedKingdom = saltUnitedKingdom;

//         this.saltGermany = saltGermany;

//         this.saltUnitedStates = saltUnitedStates;

//         this.saltAustralia = saltAustralia;

//         this.saltCanada = saltCanada;

//         this.saltSpain = saltSpain;

//         this.saltSouthAfrica = saltSouthAfrica;

//     }

// }





function csvJSON(csv, a) {

    var lines = csv;





    if (a == 0) {

        headers = lines.split(",");

        countryIndex = headers.indexOf("countries_en");

        saltIndex = headers.indexOf("salt_100g");

        sugarIndex = headers.indexOf("sugars_100g");

    } else {

        

        var obj = {};

        var currentline = lines.split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);



        if(countries.indexOf(currentline[countryIndex])>=0)

        {

            sugarArr[countries.indexOf(currentline[countryIndex])] += parseFloat(currentline[sugarIndex]) || 0 ;

            saltArr[countries.indexOf(currentline[countryIndex])] += parseFloat(currentline[saltIndex]) || 0;

        }





        // for (var j = 0; j < headers.length; j++) {

        //     //console.log(headers[j]);

        //     if (headers[j] == "countries_en") {

        //         //console.log(currentline[j]);

        //         for (var k = j+1; k < headers.length; k++) {

        //             if (headers[k]=="sugars_100g")

        //             {

        //                 if(countries.indexOf(currentline[j]))

        //                     sugarArr[countries.indexOf(currentline[j])] += (parseFloat(currentline[k]) || 0);

        //             }else if(headers[k]=="salt_100g")

        //             {

        //                 if(countries.indexOf(currentline[j]))

        //                     saltArr[countries.indexOf(currentline[j])] += (parseFloat(currentline[k]) || 0);

        //             }



        //         }

        //          j = headers.length - 1;

        //     }

           

        // }

    }

}



var fs = require('fs');

var readline = require('readline');

var stream = require('stream');

var a = 0;

var countryIndex,saltIndex,sugarIndex;

var sugarArr = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

var saltArr = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

var instream = fs.createReadStream('./FoodFacts.csv');

var outstream = new stream;

var ostream = fs.createWriteStream('bargraph.json');

var rl = readline.createInterface(instream, outstream);

//var a = 0;

//var tester = new RegExp('^(.*)(\,THEFT\,)(.*)$');

rl.on('line', function f1(line) {



        // console.log(line);

        csvJSON(line, a);

        a=1;

        

});



rl.on('close', function() {



    console.log(saltArr);

    console.log(sugarArr);

    //console.log("hello");







    // console.log(JSON.stringify(result));

});

