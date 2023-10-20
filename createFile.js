const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello, World!", (error) =>
  console.log(error ? error : "Successfully created file.")
);
