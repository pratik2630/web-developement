const fs = require("fs");

// Fileread using Callback function
/*
function callback(err,data) {
    console.log(data)
    
}

fs.readFile("a.txt","utf-8",callback)
*/

// file read using annonymous function
/*
fs.readFile("a.txt","utf-8",function callback(err,data) {
    console.log(data)
    
})
*/


// file read using arrow function
fs.readFile("a.txt","utf-8",(err,data) => {
    console.log(data)
})

//Random number generation
var x = Math.floor(Math.random() * 10000)
console.log(x)

