//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
// Verifique se o nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login foi bem-sucedido ou não.


//prompt -> recebe uma entrada digitada
let username = prompt ("Digite um nome de usuário")
let senha = prompt ("Digite a senha:")

//concatenação (+), ==-> verifica se o valor é igual a outro, === -> verifica se o valor r o tipo dos itens são iguais
if (username == "admin") {
    console.log ("voce é admin");
    
    if (senha === "senha123") {
        console.log("bem vindo ADMIN!");
    }
}





