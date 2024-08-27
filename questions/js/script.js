// const questions = document.querySelector('.questions');
// const res = document.querySelector('.res');
// const btn_circle = document.querySelector('.btn .bxs-x-circle');
// const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');


btn.forEach((e)=>{
  e.addEventListener('click', ()=>{
    e.parentNode.classList.toggle('active');
  });
});



// btn.addEventListener('click', ()=>{
//   questions.classList.add('active');
//   res.classList.add('active');
  
//   btn_circle.classList.add('active');
//   btn.classList.add('active');
// });

// btn_circle.addEventListener('click', ()=>{
//   questions.classList.remove('active');
//   res.classList.remove('active');
  
//   btn.classList.remove('active');
//   btn_circle.classList.remove('active');
// });