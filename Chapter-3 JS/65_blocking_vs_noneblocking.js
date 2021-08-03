// Asynchronous or non-blocking

//- > line by line exicution not guarented 
// ->  Callback fire

const fs = require("fs");
let text = fs.readFile("txt/dele.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});

console.log("THis is a message");