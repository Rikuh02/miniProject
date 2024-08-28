const item = document.querySelectorAll('.container-item ');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

var index = 0;
var max = item.length - 1;
var min = 0;

function updateButtons() {
  previous.disabled = index <= min;
  next.disabled = index >= max;

  if(index <= min){
    previous.classList.add('button_disabled');
  }

  if(index >= max){
    next.classList.add('button_disabled');
  }
}

function itens() {
  item.forEach((e, i) => {
    if (i <= index) {
      e.classList.add('active_cicle');
    } else {
      e.classList.remove('active_cicle');
    }
  });
}

previous.addEventListener('click', () => {
  if (index > min) {
    index--;
    itens()
    updateButtons()
  }
});

next.addEventListener('click', () => {
  if (index < max) {
    index++;
    itens()
    updateButtons()
  }
});

updateButtons();