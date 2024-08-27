const draw = document.querySelector('.draw');

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const num = document.querySelector('#num');

const color = document.querySelector('#color');
const clear = document.querySelector('#clear');

const ctx = draw.getContext('2d');

let size = 10;
let pressed = false;
let isColor = 'black';
let x;
let y;

draw.addEventListener('mousedown', (e)=>{
  pressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

draw.addEventListener('mouseup', (e)=>{
  pressed = false;

  x = undefined;
  y = undefined;
});

draw.addEventListener('mousemove', (e)=>{
  if(pressed == true){
    
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  };
});

function drawCircle(x, y){
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = isColor;
  ctx.fill();
};

function drawLine(x1, y1, x2, y2){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = isColor;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

function lineSize(){
  num.innerHTML = size;
}

add.addEventListener('click',()=>{
  size += 5;
  
  if(size > 50){
    size = 50;
  };
  
  lineSize();
});

sub.addEventListener('click',()=>{
  size -= 5;
  
  if(size < 5){
    size = 5;
  };
  
  lineSize();
});

color.addEventListener('change', (e)=> isColor = e.target.value);

clear.addEventListener('click', () => ctx.clearRect(0,0, draw.width, draw.height));