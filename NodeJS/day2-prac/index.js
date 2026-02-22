const fs = require("node:fs");

console.log("Hello world from top level")

setTimeout(()=>{
  console.log("Hello from timer - 1")
},0);

setImmediate(()=>{
  console.log("Hello from set immediate")
})

fs.readFile("./sample.txt","utf-8",()=>{
  console.log("IO Polling")
});

console.log("Hello world from top level - 2")

