let segundos = 0;
let intervalo = null;

const display = document.getElementById("display");
const iniciar = document.getElementById("iniciar");
const  pausar = document.getElementById("pausar");
const resetar = document.getElementById("resetar");

iniciar.addEventListener("click", inicio)
pausar.addEventListener("click", pausa)
resetar.addEventListener("click", reseta)

function inicio(){
    if(intervalo) return;

    intervalo = setInterval(()=>{
        segundos++;
        atualizaDisplay();

    },1000);

}

function pausa(){
    clearInterval(intervalo);
    intervalo = null


}

function reseta(){
    pausa();
    segundos = 0;
    atualizaDisplay();

    
}

function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais/60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2,'0')}: ${String(segundos).padStart(2,'0')}`

}

function atualizaDisplay(){
    display.textContent = formatarTempo(segundos);
}