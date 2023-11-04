const prompt = require("prompt-sync")({ sigint: true })

let entrada
let salida
let trabajo
let sueldo
let normal
let extra

console.log("Ingrese la hora en 24 Horas");
entrada = parseInt(prompt("Ingrese la hora que entra a trabajar "))
salida = parseInt(prompt("Ingrese la hora de salida "))

trabajo = (salida - entrada)

let sueldoAntes=0
let sueldoDes=0

if (salida <= 22) {
     sueldoAntes = trabajo * 75

} else if (salida > 22) {
    normal = 22 - entrada
    extra = salida - 22
    sueldoAntes = normal * 75
    sueldoDes = extra * 85

}
sueldo = sueldoAntes + sueldoDes

console.log(`El sueldo total es de $${sueldo} pesos`);