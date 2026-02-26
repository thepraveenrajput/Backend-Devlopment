const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  //! 1.Downloading files in a (bad way )
  // fs.readFile("./sample.txt" , "utf-8" , (err , data)=>{
  //   if(err){
  //     console.log(err);
  //     res.end();
  // }else{
  //  res.end(data);
  // }
  // })

  //* 2. Downloading files in (good way)
  //* STREAM */

  const readStream = fs.createReadStream("./sample.txt", "utf-8");
  readStream.on("data", (chunk) => {
    res.write(chunk);
  });

  readStream.on("end", () => {
    res.end();
  });

  // *3. Copy file from sample.txt to output.txt (bad approach to good approach)
  // ! bad way: read entire file into memory and write out

  // fs.readFile("./sample.txt", "utf-8", (err, data) => {
  //   if (err) {
  //     console.error(err);
  //     res.end();
  //     return;
  //   }
  //   fs.writeFile("./output.txt", data, (err) => {
  //     if (err) console.error(err);
  //     res.end("File copied (bad way)");
  //   });
  // });

  // * good way: stream from sample to output or use pipe
  const source = fs.createReadStream("./sample.txt");
  const dest = fs.createWriteStream("./output.txt");
  source.pipe(dest);
  dest.on("finish", () => {
    res.end("File copied (good way)");
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
