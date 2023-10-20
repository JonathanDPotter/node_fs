const fs = require("fs");

fs.readFile("./HelloWorld.txt", (error, data) =>
  console.log(error ? error : data.toString())
);
