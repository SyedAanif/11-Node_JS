// import native modules as constants
const fs = require("fs"); // Comon Java Script(CJS) // type: commonjs
// OR 
// import * as fs from 'node:fs'; // ECMA Script Module(ESM) // package.json cpnfiguration "type": module

// write to a file
// file-name, data, callback
fs.writeFile("message.txt", "Hello from NodeJS! Native Module", (err) => {
    if (err) {
        throw err;
    }
    console.log('The file has been saved!');
  });


// Read a file
// use encoding else raw format
fs.readFile("message.txt", 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 