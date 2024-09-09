const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter',()=>{
  container.classList.add('left_hover');
})

left.addEventListener('mouseleave',()=>{
  container.classList.remove('left_hover');
})

right.addEventListener('mouseenter',()=>{
  container.classList.add('right_hover');
})

right.addEventListener('mouseleave',()=>{
  container.classList.remove('right_hover');
})