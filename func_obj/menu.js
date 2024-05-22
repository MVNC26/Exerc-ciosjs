// Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.
// O usuário deverá digitar 0 para sair do menu. 

let rep = true 

 while (rep) {
    let menu = parseInt (prompt("Digite 0 para sair\n\n1. Dizer se o número é par ou ímar\n2.dizer se a ordem dos números é crescente\n3.dizer se o aluno esta Aprovado, Reprovado ou de Recuperação\n4.exibir tabua\n5. Dizer se é maior de idade\n6. DIgite o número 0"))

    if (isNaN (menu)) {
        console.log ("Digite apenas números")
        continue
    }

    switch (menu) {
        case 0:
            console.log("Você escolheu sair!")
            rep = false
            break

        case 1: 
            ex1()
            break
        
        case 2:
            ex2()
            break

        case 3:
            ex3()  
            break

        case 4:
            ex4()  
            break

        case 5:
            ex5()  
            break

        case 6:
            ex6()  
            break

        default:
            console.log("valor inserido incorreto")
            break
    }
 }

 function ex1 () {

     let n = parseInt(prompt("digite um número!"))
      if (n%2 == 0) {
         console.log ("o número "+ n + " é par")
      }
      else{
         console.log ("o número "+ n + " é ímpar")
      }
 }

 function ex2 () {
    
     let n1= parseInt(prompt("Digite um número"))
     let n2= parseInt(prompt("Digite um número"))
     let n3= parseInt(prompt("Digite um número"))
     
     if (n1<n2 && n2<n3) {
         console.log ("A ordem dos números é crescente")
     } else {
         console.log("A ordem dos números não é crescente!")
     }
 }

 function ex3() {

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
 }


 function ex4() {
     
     let numero = parseInt(prompt("digite um numero"))
     let resultado
     
     for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
         resultado = numero*multiplicador
         console.log (numero + " x " + multiplicador + " = " + resultado)
     }
 }


 function ex5() {
     while (true) {
         let idade = prompt("qual a sua idade?")
         if ( idade >=18) {
             console.log ("você é maior de idade !!")  
             break  
         }
     }
 }


 function ex6() {
     while (true) {
         let numero = prompt("digite um numero?")
         if ( numero == 0) {
             console.log ("você digitou 0 !!")  
             break  
         }
     }
    
 }
