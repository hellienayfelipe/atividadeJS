function fnSaudacao(){
let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
alert("Seja Bem Vindo(a) " + nomeCompleto + " ao meu site!")
}



function fnTrocarDeCorDeFundo(){
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
}

function fnMostrarHoraAtual(){
    const agora = new Date()
    const horas = agora.getHours()
    const minutos = agora.getMinutes()
    const segundos = agora.getSeconds()
    alert(`HORA ATUAL: ${horas}: ${minutos}: ${segundos}` )
}



function fnTrocarTitulo(){
    document.getElementById("titulo01").innerText=prompt("fd")

}

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL -"
    document.getElementById("menu2").innerText = "SERVIÇOS -"
    document.getElementById("menu3").innerText = "CONTATO"
}


function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME -"
    document.getElementById("menu2").innerText = "SERVICES -"
    document.getElementById("menu3").innerText = "CONTACT"
}

function fnIdiomaArabe(){
    document.getElementById("menu1").innerText = "الاولي -"
    document.getElementById("menu2").innerText = "خدمات -"
    document.getElementById("menu3").innerText = "الاتصال -"
}

function fnIdiomaRusso(){
    document.getElementById("menu1").innerText = "НАЧАЛЬНЫЙ -"
    document.getElementById("menu2").innerText = "УСЛУГИ -"
    document.getElementById("menu3").innerText = "КОНТАКТ"
}