const path = require("node:path");
const fs = require("node:fs");

// *Define file path: data/students/data.json
const filePath = path.join(__dirname, "data", "students", "data.json");
const dirPath = path.join(__dirname, "data", "students");

// *Function to create directory if it doesn't exist
function createDirectoryIfNotExists() {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log("✓ Directory created:", dirPath);
  } else {
    console.log("✓ Directory already exists:", dirPath);
  }
}

// *Function to write data to JSON file
function writeStudentData(students) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
    console.log("✓ Data written to:", filePath);
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}

// *Function to read data from JSON file
function readStudentData() {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    } else {
      console.log("File does not exist yet");
      return [];
    }
  } catch (error) {
    console.error("Error reading file:", error.message);
    return [];
  }
}

// *Create directory
createDirectoryIfNotExists();

// Sample student data
const students = [
  { id: 1, name: "Praveen Singh", roll: "A001", grade: "A" },
  { id: 2, name: "John Doe", roll: "A002", grade: "B" },
  { id: 3, name: "Jane Smith", roll: "A003", grade: "A+" },
];

// !Write data
writeStudentData(students);

//! Read and display data
const readData = readStudentData();
console.log("✓ Data read from file:");
console.log(readData);
