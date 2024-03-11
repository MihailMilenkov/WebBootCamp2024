//var generateStupidName = require("sillyname"); first way without "type" in the json

import generateStupidName from "sillyname"; // 2nd way with "type" in the json

var sillyName = generateStupidName();
//console.log(sillyName);

import superheroes from "superheroes";
//const superheroes = require('superheroes');
 
var superHeroName = superheroes.random();
 
console.log("I AM " + superHeroName);