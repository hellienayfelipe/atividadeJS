let nome = prompt("Qual seu nome?")
let idade =parseInt(prompt("Quantos anos você tem?"))

if (idade < 18){
    alert("Você ainda não pode fazer as aulas de direção")
}else if(idade > 18){
    alert("Olá " + nome + " seja bem vindo(a) a nossa escola! Ja fez sua matricula?")
}