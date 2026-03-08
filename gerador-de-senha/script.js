const senhaInput = document.getElementById("senha")
const tamanho = document.getElementById("tamanho")
const valorTamanho = document.getElementById("valorTamanho")

const maiusculas = document.getElementById("maiusculas")
const numeros = document.getElementById("numeros")
const simbolos = document.getElementById("simbolos")

const gerar = document.getElementById("gerar")
const copiar = document.getElementById("copiar")

const barra = document.getElementById("barra")
const nivel = document.getElementById("nivel")

valorTamanho.innerText = tamanho.value

tamanho.addEventListener("input",()=>{

valorTamanho.innerText = tamanho.value

})

function gerarSenha(){

let caracteres = "abcdefghijklmnopqrstuvwxyz"

if(maiusculas.checked) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
if(numeros.checked) caracteres += "0123456789"
if(simbolos.checked) caracteres += "!@#$%&*?"

let senha = ""

for(let i=0;i<tamanho.value;i++){

let random = Math.floor(Math.random()*caracteres.length)

senha += caracteres[random]

}

senhaInput.value = senha

avaliarForca(senha)

}

function avaliarForca(senha){

let forca = 0

if(senha.length > 8) forca++
if(senha.length > 12) forca++
if(/[A-Z]/.test(senha)) forca++
if(/[0-9]/.test(senha)) forca++
if(/[^A-Za-z0-9]/.test(senha)) forca++

let porcentagem = (forca/5)*100

barra.style.width = porcentagem + "%"

if(porcentagem < 40){

barra.style.background = "red"
nivel.innerText = "Senha Fraca"

}

else if(porcentagem < 70){

barra.style.background = "orange"
nivel.innerText = "Senha Média"

}

else{

barra.style.background = "limegreen"
nivel.innerText = "Senha Forte"

}

}

gerar.addEventListener("click",gerarSenha)

copiar.addEventListener("click",()=>{

navigator.clipboard.writeText(senhaInput.value)

copiar.innerText="✔"

setTimeout(()=>{

copiar.innerText="📋"

},1500)

})
