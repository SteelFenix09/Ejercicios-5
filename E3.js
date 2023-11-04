const prompt = require("prompt-sync")({ sigint: true })

let tonelada
let costo
let primeros
let restante

tonelada = parseInt(prompt("Ingresa la cantidad de toneladas que transporta "))

if (tonelada <= 10) {
    costo = tonelada * 850
} else {
    primeros = 10 * 850
    restante = (tonelada - 10) * 500
    costo = primeros + restante

}

console.log(`La tarifa de Villahermosa a Emiliano Zapata es de ${costo}`);