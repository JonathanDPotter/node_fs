const fs = require("fs");

fs.unlink("./HelloWorld.txt", (error) =>
  console.log(error ? error : "Successfully deleted file.")
);
