const http = require("http");
const fs = require("fs");
const { router } = require("./router");
const { logger } = require("./logger");

http
  .createServer((req, res) => {
    const chunks = [];
    const { url, method } = req;

    req
      .on("error", (error) => {
        res.writeHead(500, { "Content-Type": "application/json" });
        logger(500, method, url);
        res.write(JSON.stringify(error));
      })
      .on("data", (chunk) => chunks.push(chunk))
      .on("end", () => {
        const body = Buffer.concat(chunks).toString();

        const { status, contentType, content } = router(url, method, body);
        logger(status, method, url);
        res.writeHead(status, { "Content-Type": contentType });

        contentType === "text/html"
          ? fs.readFile(`./static/${content}.html`, (err, data) => {
              err && console.log(err);
              res.write(data);
              res.end();
            })
          : res.end(content);
      });
  })
  .listen(3000, () => console.log("Server listening on localhost:3000"));
