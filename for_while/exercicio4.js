// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("digite um numero"))
let resultado

for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    resultado = numero*multiplicador
    console.log (numero + " x " + multiplicador + " = " + resultado)
}
