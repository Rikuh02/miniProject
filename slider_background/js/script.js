const left = document.getElementById('left');
const right = document.getElementById('right');
const slides = document.querySelectorAll('.slide');
const body = document.body;

let slide_active = 0;

left.addEventListener('click',()=>{
   slide_active--;

  if(slide_active < 0){
    slide_active =  slides.length - 1;
  };
  setBg();
  active();
});


right.addEventListener('click',()=>{
   slide_active++; 

  if(slide_active > slides.length - 1){
    slide_active = 0;
  };
  setBg();
  active();
});

setBg();

function setBg(){
  body.style.backgroundImage = slides[slide_active].style.backgroundImage;
};

function active(){
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[slide_active].classList.add('active');
};