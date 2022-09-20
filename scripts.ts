import PromptSync = require('prompt-sync');
import { Bolo } from  "./Bolo";

const prompt = PromptSync();

const tamanho = Number(prompt('digite o tamanho do bolo'))
const sabor = prompt('digite o sabor do bolo')
const formato = prompt('digite o formato do bolo')
const recheio = prompt('digite o recheio do bolo')
const cobertura = prompt('digite a cobertura do bolo')
const valor =Number(prompt('digite o valor do bolo'))
const fatias = Number(prompt('digite a quantidade de fatias do bolo'))

const bolo = new Bolo({
tamanho,
cobertura,
formato,
recheio,
sabor,
valor

});
bolo.Fatiar(fatias);

console.log(`bolo de ${sabor} com ${recheio}: r$${valor}`);