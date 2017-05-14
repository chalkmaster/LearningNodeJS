var fs = require("fs");

var textData = fs.readFileSync("input.txt");
console.log(textData.toString());
console.log("endData");