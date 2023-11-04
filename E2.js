const prompt=require("prompt-sync")({sigint:true})

let Fahrenheit
let Celcios
let Kelvin
let Rankine
var srt = '5/9'
var operando= srt.split('/')
var resultado = parseFloat(operando[0])/parseFloat(operando[1])

Fahrenheit = parseInt(prompt("Ingrese los grados en Fahrenheit "))

Celcios = (Fahrenheit-32)*resultado
Kelvin = (Fahrenheit-32)*resultado+273.15
Rankine = Fahrenheit + 459.67

console.log(`Grados Celcios ${Celcios}`);
console.log(`Grados Fahrenheit ${Kelvin}`);
console.log(`Grados Rankine ${Rankine}`);