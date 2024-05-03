//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
//Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let n1= parseInt(prompt("Digite um número"))
let n2= parseInt(prompt("Digite um número"))
let n3= parseInt(prompt("Digite um número"))

if (n1<n2 && n2<n3) {
    console.log ("A ordem dos números é crescente")
} else {
    console.log("A ordem dos números não é crescente!")
}