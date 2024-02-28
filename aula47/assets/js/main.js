const relogio = document.querySelector(".relogio");
const inciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });


}


inciar.addEventListener('click', function(event) {
    relogio.innerHTML += mostraHora();
    setInterval(function () { console.log(mostraHora()); }, 1000);
    alert('Cliquei no pausar.');
});

pausar.addEventListener('click', function(event) {
    alert('Cliquei no pausar.');
});

zerar.addEventListener('click', function(event) {
    alert('Cliquei no zerar.');
});
