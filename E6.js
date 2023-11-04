const prompt = require("prompt-sync")({ sigint: true })


function fibonacci(n) {
    let a = 0, b = 1
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b]
    }
}

let num = parseInt(prompt("Ingrese un numero "))
console.log("Los primero " + num + " numeros de Fibonacci son: ");
fibonacci(num)