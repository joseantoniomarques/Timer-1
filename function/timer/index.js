let seconds = 0;
let timer;

function relogio(segundos) {
    const data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' // timeZone: 'UTC'
    })
}

function iniciaRelogio() {
    timer = setInterval(function() {
        seconds++
        document.getElementById('timer').innerHTML = relogio(seconds)
    }, 1000)
}

function iniciar() {
    clearInterval(timer);
    iniciaRelogio();
}
function pausar() {
    clearInterval(timer);
}
function zerar() {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = '00:00:00';
    seconds= 0;
}

function ano(){
    const mes = new Date()

    const date = mes.toLocaleDateString('pt-BR', {
        hour12: false
    })

    return document.getElementById('date').innerHTML = date
}
console.log(ano())