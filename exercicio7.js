//Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para 
//loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
//Valor total da compra até R$ 100,00: sem desconto.
//Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
//Valor total da compra acima de R$ 200,00: desconto de 20%.
//Exiba o valor final da compra com o desconto aplicado.

let valortotal = parseFloat(prompt("qual o valor final da compra?")) 
let desconto = 0

if (valortotal > 100.00 && valortotal <= 200.00) {
    desconto = valortotal * 0.10
} else if ( valortotal > 200.00 ) {
    desconto = valortotal * 0.20 
} 
console.log ("O valor final é de " + (valortotal-desconto) + " reais")


// let valortotal = parseFloat(prompt("qual o valor final da compra?")) 
// let desconto = 0

// if (valortotal  <= 100.00) {
//     console.log ("Esse valor não possui desconto")
// } else if ( valortotal > 100.00 && valortotal <= 200.00 ) {
//     desconto = valortotal * 0.10
//     console.log ("O valor final é de " + (valortotal-desconto) + " reais")
// } else if (valortotal > 200.00) {
//     desconto = valortotal * 0.20
//     console.log ("o valo final é de " + (valortotal-desconto) + " reais" ) 
// }
