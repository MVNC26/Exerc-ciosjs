//Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas 
//e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de 
//REPROVADO para média inferior a 5,0.

let nota1 = parseFloat(prompt("digite a primeira nota"))
let nota2 = parseFloat(prompt("digite a segunda nota"))
let nota3 = parseFloat(prompt("digite a terceira nota"))
let nota4 = parseFloat(prompt("digite a quarta nota"))

let resultado = (nota1 + nota2 + nota3 + nota4) / 4

console.log (resultado)

if (resultado >= 7) {
    console.log ("APROVADO")    
}
else if (resultado >= 5.0 && resultado <7.0) {
    console.log ("RECUPERAÇÃO")
}
else {
console.log ("REPROVADO")
}
