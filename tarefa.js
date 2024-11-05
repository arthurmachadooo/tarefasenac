//  ex1
//  let forma = document.getElementById('forma')
// forma.addEventListener('click',function(){
//     if(forma.style.backgroundColor == 'red'){
//         forma.style.backgroundColor = 'black'
//     } else {
//         forma.style.backgroundColor = 'red'
//     }

// })
 
// let forma2 = document.getElementById('forma2')
// forma2.addEventListener('click',function(){
//     if(forma2.style.backgroundColor == 'blue'){
//         forma2.style.backgroundColor = 'gray'
//     } else {
//         forma2.style.backgroundColor = 'blue'
//     }
// })
// let forma3 = document.getElementById('forma3')
// forma3.addEventListener('click',function(){
//     if(forma3.style.backgroundColor == 'green'){
//         forma3.style.backgroundColor = 'purple'
//     } else {
//         forma3.style.backgroundColor = 'green'
//     }
// })

//ex2
// let clicar = document.getElementById('clicar')
// let contador = document.getElementById('contador')
// let zerrar = document.getElementById('excluir')
 
// let contagem = 0
 
// clicar.addEventListener('click',function(){
//     contagem = contagem + 1
//     contador.innerText = contagem
// })
// zerrar.addEventListener('click',function(){
//    contagem = 0
//    contador.innerText = contagem
// }) 

//ex3
// let mensagem = document.getElementById('mensagem')
// let exibir = document.getElementById('exibir')
// let ocultar = document.getElementById('ocultar')
// mensagem.style.display = 'none'
 

// exibir.addEventListener('click', function(){
//     mensagem.style.display = 'inline'
// })
// ocultar.addEventListener('click', function(){
//     mensagem.style.display = 'none'
// })

//ex4
// let botao = document.getElementById("botao")
// let texto = document.getElementById("texto")
 
// botao.addEventListener('click',function(){
//     let textoNovo= prompt("Me diga uma frase nova: ")
//     texto.innerText = textoNovo
// })

// ex5
// let texto = document.getElementById('texto')
// document.addEventListener('keydown', function(event){
//     texto.innerText = `Você digitou a tecla: ${event.key}`
// })

//let votar = document.getElementById("votar")
// let imagemG = document.getElementById("generico")
 
// document.addEventListener("click",function(){
//     let pergunta = Number(prompt("Em qual canidato você quer votar: \n(6)Bruna \n(21)otto\n(8)Arthur \n(24) Bruno"))
//    switch (pergunta) {
//         case 6:
//             let confirmar1 = prompt("Você deseja confirmar seu voto no candidato bruna: (S/N)")
//             if (confirmar1 == 'S'){
//                 alert("Você votou no candidato bruna")  
//                 imagemG.setAttribute('src', '/Imagens/bruna.jpeg') 
//             }
//             else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//         }
//         break
//         case 24:
//         let confirmar2 = prompt("Você deseja confirmar seu voto no candidato bruno: (S/N)")
//         if(confirmar2 == 'S'){
//             alert("Você votou no candidato bruno")
//             imagemG.setAttribute('src', '/Imagens/bruno.jpeg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 8:
//         let confirmar3 = prompt("Você deseja confirmar seu voto no candidato arthur: (S/N)")
//         if(confirmar3 == 'S'){
//             alert("Você votou no candidato Arthur")
//             imagemG.setAttribute('src', '/Imagens/arthur.jpeg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 21:
//         let confirmar4 = prompt("Você deseja confirmar seu voto no candidato otto: (S/N)")
//         if(confirmar4 == 'S'){
//             alert("Você votou no candidato otto")
//             imagemG.setAttribute('src', '/Imagens/otto.jpeg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 1:
//                 alert("Você descobriu o candidato secreto ")
//         let confirmar5 = prompt("Você deseja confirmar seu voto no candidato secreto otto anão: (S/N)")
//         if(confirmar5 == 'S'){
//             alert("Você votou no candidato secreto  otto anão")
//             imagemG.setAttribute('src', '/Imagens/otto anao.jpeg') 
//         }    
//         else{
//             alert("Reinicie e escolha outro candidato")    
//             }
//             break
 
//    }

// })
