const text = document.querySelector('.text_loading');
const bg = document.querySelector('.background');

let load = 0;
let int = setInterval(loadText, 50);

function loadText(){

  load++;
  if(load > 99){
    clearInterval(int); //limpar o intervalo
  }

  text.innerHTML = load + '%'
  text.style.opacity = scale(load, 0, 100, 1, 0); //ajusta a opacidade
  bg.style.filter = `blur(${scale(load, 0, 100, 200, 0)}px)` //efeito de desfoque blur();
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, inMin, inMax, outMin, outMax){
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}