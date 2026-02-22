//HTTP MODULE

const http = require("node:http");

const server = http.createServer((req, res) => {
   //console.log(req.url);
   if (req.url === "/") {
      res.end("Hello from Home Page");
   }
   else if (req.url === "/about") {
      res.end("Hello from About Page");
   }
   else {
      console.log("No url found");
   }
   //res.end("Hello World");
});

const PORT = 8000;
server.listen(PORT, () => {
   console.log(`Server is running on port  http://localhost:${PORT}`);
});
