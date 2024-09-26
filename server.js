const http = require("http");
const fs = require("fs");

const server = http.createServer((res, req) => {
  let path = "./view/";
  switch (path) {
    case "./":
      path += "index.html";
      break;
    case "./about":
      path += "About.html";
      break;
    default:
      path += "404.html";
      break;
  }
  // Hey
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log("There is an error: ", err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {});
