function botao(){
   document.getElementById("agradece").innerHTML = "Tamo junto, cachorro!"
   // alert("Quem clicou é viado")
}

function redireciona(){
   window.open("http://google.com")
}

function trocarTexto(elemento){
   document.getElementById("mouseOver").innerHTML = "Valeu por passar o mouse"
   // alert("Quem clicou é viado")
}

function voltaTexto(elemento){
   document.getElementById("mouseOver").innerHTML = "Voltamos à programação normal"
   // alert("Quem clicou é viado")
}

function carregar(){
   alert("Página carregada com sucesso!")
}

function change(elemento){
   console.log(elemento.value)
}

/* function soma(n1, n2){
   return n1+n2
}

alert(soma(12, 27))

function setReplace(frase, nome, outro_nome){
   return frase.replace(nome, outro_nome)
}

alert(setReplace("Vai Escócia","Escócia", "Brasil" ))

function validaIdade(idade){
   if (idade >=18){
      validar = true
   } else{
      validar = false
   }
   return validar
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade)) */


/* var data = new Date()
alert(data.getMonth())
alert(data.getDay())
alert(data.getHours())
alert(data.getMinutes()) */


/* var count
for (count = 0; count <= 5; count ++){
   alert(count)
} */


/* var count = 0
while (count <= 5){
   console.log(count)
   count ++
} */


/* var idade = prompt("Qual sua idade?")
if (idade >= 18) {
   alert("Maior de idade!")
} else{
   alert("Menor de idade!")
} */


/* var frutas = [{nome:"morango", cor:"vermelho"}, {nome:"abacate", cor:"verde"}]
console.log(frutas)
alert(frutas[0].nome) */


/* var fruta = {nome:"morango", cor:"vermelho"}
console.log(fruta)
alert(fruta.cor)
console.log(fruta.nome) */


/* var lista = ["banana", "uva", "morango"]
lista.pop()
lista.push("abacate")
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" | ")) */


/* var nome = "William Almeida"
var idade = 33

alert ("Bem vindo " + nome + "! Você tem " + idade + " anos!")
console.log("Página carregada com sucesso! ") */