const resultado = document.getElementById("resultado")

function inserir(valor){

resultado.value += valor

}

function limpar(){

resultado.value = ""

}

function apagar(){

resultado.value = resultado.value.slice(0,-1)

}

function calcular(){

try{

resultado.value = eval(resultado.value)

}

catch{

resultado.value = "Erro"

}

}

/* suporte ao teclado */

document.addEventListener("keydown",function(e){

const teclas="0123456789+-*/().%"

if(teclas.includes(e.key)){

resultado.value += e.key

}

if(e.key==="Enter"){

calcular()

}

if(e.key==="Backspace"){

apagar()

}

if(e.key==="Escape"){

limpar()

}

})
