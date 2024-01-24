const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//variavel pra pegar as horas, minutos e segundos
const relogio = setInterval(function time(){
    let dateToday = new Date(); //pega a data atual
    let hr = dateToday.getHours(); //pega a hora da data atual
    let min = dateToday.getMinutes(); //pega os minutos da data atual
    let s = dateToday.getSeconds(); //pega os segundos da data atual

    //para acrescentar o 0 antes dos numeros menores que 10
    if (hr < 10) hr = "0" + hr;

    if (min < 10) min = "0" + min;

    if (s < 10) s = "0" + s;


    //coloca o tempo exato nos textos dos spans do html
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})