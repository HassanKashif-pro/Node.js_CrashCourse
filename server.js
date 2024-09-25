const http = require("http");

const server = http.createServer(() => {
  console.log("Request Made");
});

server.listen(3000, "localhost", () => {});
