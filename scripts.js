"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Bolo_1 = require("./Bolo");
var prompt = PromptSync();
var tamanho = Number(prompt('digite o tamanho do bolo'));
var sabor = prompt('digite o sabor do bolo');
var formato = prompt('digite o formato do bolo');
var recheio = prompt('digite o recheio do bolo');
var cobertura = prompt('digite a cobertura do bolo');
var valor = Number(prompt('digite o valor do bolo'));
var fatias = Number(prompt('digite a quantidade de fatias do bolo'));
var bolo = new Bolo_1.Bolo({
    tamanho: tamanho,
    cobertura: cobertura,
    formato: formato,
    recheio: recheio,
    sabor: sabor,
    valor: valor
});
bolo.Fatiar(fatias);
console.log("bolo de ".concat(sabor, " com ").concat(recheio, ": r$").concat(valor));
