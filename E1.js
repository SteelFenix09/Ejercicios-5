const prompt=require("prompt-sync")({sigint:true})

let dias
let horas
let minutos
let segundos

dias = parseInt(prompt("Ingrese los Dias que quiere en Horas, Minutos y Segundos "))

horas = 24*dias ;console.log("Hay ", horas, " Horas  en ",dias, " Dias");
minutos = 60*horas ; console.log("Hay ",minutos, " Minutos en ", dias, " Dias");
segundos = 60*minutos ; console.log("Hay ", segundos, " Segundos  en ", dias, " Dias");