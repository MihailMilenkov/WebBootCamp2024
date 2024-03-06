const fs = require("fs");

// fs.writeFile("message.txt", "hello from node.js", (err) =>{
//     if (err) throw err;
//     console.log("the file has been saved!");
//     // to run this fil go to its directory and type "node index.js"
// });

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data + " now reading");
  });