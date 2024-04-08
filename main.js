const botoes=document.querySelectorAll(".botao")
 const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){

        for(let j=0;j>botoes.length;j++){
        botões[j].classList.classList.remove("ativo");
        botões[j].classList.classList.remove("ativo"); 
    }

      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
}
}

const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1 =new Date("2024-10-05T00:00:00");
let temṕoAtual= new Date();

contadores[0].textContent=tempoObjetivo1- temṕoAtual; 
