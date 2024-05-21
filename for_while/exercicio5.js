// Imprimir os primeiros 10 números da sequência de Fibonacci.

let a = 0
let b = 1
let c 

for (let conta = 0; conta < 10; conta ++){
    console.log (a)
    c = a+b
    a = b
    b = c 
}