const btn = document.querySelector('i');
const search = document.querySelector('.text');

btn.addEventListener('click',()=>{
  search.classList.toggle('active');
})