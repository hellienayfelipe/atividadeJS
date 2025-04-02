let num1 = parseFloat(prompt("Escolha um numero:"))
let num2 = parseFloat(prompt("Escolha outro numero:"))
let operacao =prompt('Escolha uma Operação Matematica: \n Adição \n Subtração \n Multiplicação \n Divisão')

if (operacao == "+"){
    alert(num1 + num2)
}else if(operacao == "-"){
    alert(num1 - num2)
}else if (operacao == "*"){
    alert(num1 * num2)
}else if(operacao == "/"){
    alert(num1 / num2)
}
else{
    alert("Digite uma operação para continuar para obter o resultado!")
}


  

