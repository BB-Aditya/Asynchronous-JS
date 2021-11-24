const fs = require("fs");
const { resolve } = require("path");
const superAgent = require("superagent");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("File not read!");
      else resolve(data);
    });
  });
};

const test = async () => {
  try {
    const data = await readFilePromise("./dog.txt");
    console.log("File read");
    console.log(`Data is:${data.toString()}`);
  } catch (err) {
    throw err;
  }
  return "Ready";
};

(async () => {
  try {
    console.log("HI from top level");
    console.log(await test());
    console.log("HEllo again");
  } catch (err) {
    console.log(err);
  }
})();

Promise.all();

// test().then((x)=>{
//   console.log(x);
// }).catch((err)=>{
//   console.log("ERRor");
// });
// console.log("Hello again");
