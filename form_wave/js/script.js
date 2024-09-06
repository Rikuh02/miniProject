const text = document.querySelectorAll('.container-input label');

text.forEach((label) =>{
  label.innerHTML = label.innerText
  .split('') //que divide o texto do label em um array de caracteres.
  .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)
  .join('') // Junta novamente os caracteres em uma string HTML
})