const { Transform } = require("node:stream");
const fs = require("node:fs");
const http = require("node:http");

const server = http.createServer((req, res) => {
  //! TRANSFORM
  // * bad way
  const sampleFileStream = fs.createReadStream("./transform.txt");
  const outputFileStream = fs.createWriteStream("./output.txt");

  //!bad way
  // sampleFileStream.on("data" , (chunk)=>{
  //     const modified = chunk.toString().toUpperCase().replaceAll(/Praveen/gi , "SIGMA")
  //     outputFileStream.write(modified);
  // });

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const modified = chunk
        .toString()
        .toUpperCase()
        .replaceAll(/Praveen/gi, "SIGMA");
      callback(null, modified);
    },
  });

  sampleFileStream.pipe(transformStream).pipe(outputFileStream).on("finish",()=>{
   console.log("File transformed ✅ ");
  })
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
