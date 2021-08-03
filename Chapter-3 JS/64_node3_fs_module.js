   const fs = require("fs");
   let text = fs.readFileSync("txt/dele.txt", "utf-8");  // to read the content of the file
   console.log("this is..")
   console.log(text);                           

   text = text.replace("dhiraj", "suchit");
   console.log(text);                           

    console.log("Creating a new file using this function.");
    fs.writeFileSync("txt/dap.txt", text);  //create a new file ads