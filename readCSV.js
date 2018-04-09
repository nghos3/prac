const fs = require('fs');
let filePath = "/home/nirmalya/com/FoodFacts.csv";
let csvData = fs.readFileSync(filePath, 'utf8'); //the encoding is needed to interpret the data
console.log(csvData)


