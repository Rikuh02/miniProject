const conts = document.querySelectorAll('.cont');

conts.forEach(cont => {
  cont.innerText = '0'

  const update = () =>{
    
    const target = +cont.getAttribute('dataTarget');//captura um atributo em uma tag
    const a = +cont.innerText; 
    
    let increment = target / 200; //dividi o valor do atributo por 200
  
    if (a < target) {
      cont.innerText = `${Math.ceil(a + increment)}`;
      setTimeout(update, 1);
    }else {
      cont.innerText = target;
    } 
    
  }
  update();
});