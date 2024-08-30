const cards = document.querySelectorAll('.cards');

cards.forEach((e)=>{
  
  e.addEventListener('click', ()=>{
    
    cards.forEach((ele)=>{ele.classList.remove('active')});
    
    e.classList.toggle('active');
    
  });
  
});