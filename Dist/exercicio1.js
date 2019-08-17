"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var thalyta = new pessoa_1.Pessoa(1.74, 68);
console.log(thalyta.imc());
console.log(thalyta.classificacao());
