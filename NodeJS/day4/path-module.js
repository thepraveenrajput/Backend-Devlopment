// !PATH MODULES
const path = require("node:path");
const fs = require("node:fs");

console.log(__filename);
console.log(__dirname);

// !CUSTOM PATHS

const filename = path.join("data", "students", "data.json");
console.log(filename); // *data/students/data.json

const dirname = path.join(__dirname, "data", "students", "data.json");
console.log(dirname); // *gives directory



console.log(path.parse(filename));
console.log(path.resolve(filename));
console.log(path.extname(filename));
console.log(path.basename(filename));
console.log(path.dirname(filename));
