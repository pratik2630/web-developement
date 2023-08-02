const fs = require("fs");

// Fileread using Callback function

function callback(err,data) {
    console.log(data)
    
}

fs.readFile("a.txt","utf-8",callback)

