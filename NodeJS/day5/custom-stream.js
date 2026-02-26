// readable 
// writeable
// transform
// pipeline
const {Readable , Writable} = require("node:stream");

const readableStream = new Readable({
   highWaterMark:2,
   read(){ 

   }
})

readableStream.on("data", (chunk)=>{
   //console.log(chunk);
   writeableStream.write(chunk);
});

// !..readableStream is an array....

readableStream.push("Hello World Its Praveen"); //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 49 74 73 20 50 72 61 76 65 65 6e>

//console.log(readableStream.push("HE")); //false

const writeableStream = new Writable({
   write(chunk){
     console.log("writing", chunk); //writing <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 49 74 73 20 50 72 61 76 65 65 6e>
   }
});