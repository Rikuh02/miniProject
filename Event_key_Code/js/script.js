const insert = document.getElementById('container');

window.addEventListener('keydown', (evt) => {
  insert.innerHTML = `
  
    <div class="key">
      <div class="text">${evt.key ===' ' ? 'space' : evt.key}</div>
       <label>Key</label>
    </div>
  
    <div class="key">
      <div class="text">${evt.keyCode}</div>
      <label>KeyCode</label>
    </div>
 
    <div class="key">
      <div class="text">${evt.code}</div>
      <label>Code</label>
    </div>
    
  `;

});