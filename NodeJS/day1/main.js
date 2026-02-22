// console.log("Hello, World!");

//alert("Welcome to Node.js!");

//console.log(window); // This will throw an error in Node.js

//globalThis , global , window()
// console.log(global);

// const fs = require("node:fs");
// const data =fs.readFileSync("./notes.md", "utf-8");
// console.log(data);

//Module wrapping
(function (exports, require, module, __filename, __dirname) {
    const fs = require("node:fs");
    const data =fs.readFileSync("./notes.md", "utf-8");
    console.log(data);
});

exports.module = {a:1};