console.log("Hellienay Felipe")
console.log(18)
console.warn("atenção")
console.error("um erro")
/*
3 formas de criar variaveis
var 
let --> vamos usar essa
const
*/
let nome = "Hellienay"
let idade = 18
let telefone = null
console.log(nome, idade)
nome = "Hellienay Felipe"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)
//alert("Seja Bem Vindo(a) " + nomeCompleto)
//document.write("seja bem vindo(a)" + nomeCompleto)
let cor = prompt("Informe uma cor: \n 1 azul \n 2 vermelho \n 3 preto \n 4 roxo \n 5 ciano \n 6 verde ")
let corDeFundo = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "purple"
}else if(cor == "5"){
    corDeFundo = "cyan"
}else if(cor == "6"){
    corDeFundo = "green"        
}else{
    corDeFundo = "yellow"
}



document.body.style.backgroundColor = corDeFundo