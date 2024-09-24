const prev = document.getElementById('prev');
const next = document.getElementById('next');
const img = document.querySelectorAll('.container-img img');
const container = document.querySelector('.container-img');

let index = 0;
let interval = setInterval(run,2000);

function run(){
    index++;
    charge();
}

function charge(){
    if(index < 0){
        index = img.length - 1;
    }else  if(index > img.length - 1){
        index = 0;
    }
    container.style.transform = `translateX(${-index * 350}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

prev.addEventListener('click', ()=>{
    index--;
    charge();
    resetInterval();
});

next.addEventListener('click', ()=>{
    index++;
    charge();
    resetInterval();
});

