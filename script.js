const horas = document.getElementById('Horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('Segundos');

const relogio = setInterval(function time(){
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;

  if (min < 10) hr = '0' + min;

  if (sec < 10) hr = '0' + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
})

