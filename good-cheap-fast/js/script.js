const btn = document.querySelectorAll('.check');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

btn.forEach( e =>{

  e.addEventListener('change',(el)=>{
    doTheTrick(el.target);
  });

});

function doTheTrick(click){
  if(good.checked && cheap.checked && fast.checked){
    if(good === click){
      fast.checked = false;
    }
    if(cheap === click){
      good.checked = false;
    }
    if(fast === click){
      cheap.checked = false;
    }
  }
}
