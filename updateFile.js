const fs = require("fs");

fs.appendFile("./HelloWorld.txt", "\nI like writing JavaScript.", (error) =>
  console.log(error ? error : "Successfully appended to file.")
);
