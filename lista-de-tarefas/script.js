let lista = document.getElementById("lista")

document.getElementById("tarefa").addEventListener("keydown", function(event){

if(event.key === "Enter"){
adicionar()
}

})

window.onload = function(){

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => {
criarTarefa(tarefa.texto, tarefa.concluida)
})

atualizarContador()
atualizarProgresso()

}

function adicionar(){

let input = document.getElementById("tarefa")
let texto = input.value

if(texto === "") return

criarTarefa(texto,false)

salvar()

input.value = ""

}

function criarTarefa(texto, concluida){

let li = document.createElement("li")

li.innerHTML = `
<label class="tarefa-item">
<input type="checkbox" onchange="concluir(this)" ${concluida ? "checked" : ""}>
<span class="${concluida ? "concluida" : ""}">${texto}</span>
</label>

<button class="remover" onclick="remover(this)">
<i class="fa-solid fa-trash"></i>
</button>
`

lista.appendChild(li)

atualizarContador()
atualizarProgresso()

}

function concluir(checkbox){

let texto = checkbox.nextElementSibling

texto.classList.toggle("concluida")

if(checkbox.checked){
soltarConfete()
}

salvar()
atualizarProgresso()

}

function remover(botao){

botao.parentElement.remove()

salvar()
atualizarContador()
atualizarProgresso()

}

function salvar(){

let tarefas = []

document.querySelectorAll("#lista li").forEach(li => {

let texto = li.querySelector("span").innerText
let concluida = li.querySelector("input").checked

tarefas.push({texto, concluida})

})

localStorage.setItem("tarefas", JSON.stringify(tarefas))

}

function atualizarContador(){

let total = lista.children.length

document.getElementById("contador").innerText = "Tarefas: " + total

}

function atualizarProgresso(){

let tarefas = document.querySelectorAll("#lista li")
let concluidas = document.querySelectorAll("#lista input:checked")

let porcentagem = 0

if(tarefas.length > 0){
porcentagem = (concluidas.length / tarefas.length) * 100
}

document.getElementById("progresso").style.width = porcentagem + "%"

}

function limparTudo(){

lista.innerHTML = ""

localStorage.removeItem("tarefas")

atualizarContador()
atualizarProgresso()

}

function soltarConfete(){

confetti({
particleCount: 120,
spread: 70,
origin: { y: 1 },
startVelocity: 40
})

}
