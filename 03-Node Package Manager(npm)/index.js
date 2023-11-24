// Common JS(CJS) import
// var generateName = require('sillyname');

// ECMA Script Module(ESM)
import generateName from "sillyname";

import superheroes from "superheroes";

var sillyName = generateName();

// string-format using `${}`
console.log(`My silly-name is ${sillyName}.`);

var superHeroName = superheroes.random();

console.log(`My super-hero name is ${superHeroName}`);