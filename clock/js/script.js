//dark mode end light mode
const btn_mode = document.querySelector('.btn_mode');
const body =document.body;

btn_mode.addEventListener('click',()=>{
  body.classList.toggle('dark-mode');

  if(btn_mode.innerText === "Dark Mode"){
    btn_mode.innerText = "Light Mode";
  }else{
    btn_mode.innerText = "Dark Mode";
  };
});

//time
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const turn = document.getElementById('turn');

function clock(){

  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
 
  hour.innerHTML = h;
  minute.innerHTML = m;

  if(h < 10){
    hour.innerHTML = "0" + h;
  };

  if(m < 10){
    minute.innerHTML = "0" + m;
  };

  //turn
  if(h >= 12){
    turn.innerHTML = "pm";
  }else{
    turn.innerHTML = "am";
  };
  
};

setInterval(clock,1000);

//date
const Weekdays = document.getElementById('Weekdays');
const month = document.getElementById('Month');
const day = document.getElementById('day');

function date(){
  
  let date = new Date();
  let w = date.getDay();
  let m = date.getMonth();
  let d = date.getDate();

  switch (w){
    case 0: Weekdays.innerHTML = "Sunday"; break;
    case 1: Weekdays.innerHTML = "Monday"; break;
    case 2: Weekdays.innerHTML = "Tuesday";break;
    case 3: Weekdays.innerHTML = "Wednesday";break;
    case 4: Weekdays.innerHTML = "Wednesday";break;
    case 5: Weekdays.innerHTML = "Friday";break;
    default: Weekdays.innerHTML = "saturday";break;
  };

  switch (m){
    case 0: month.innerHTML = "Jan";break;
    case 1: month.innerHTML = "Feb";break;
    case 2: month.innerHTML = "Mar";break;
    case 3: month.innerHTML = "Apr";break;
    case 4: month.innerHTML = "May";break;
    case 5: month.innerHTML = "jun";break;
    case 6: month.innerHTML = "jul";break;
    case 7: month.innerHTML = "aug";break;
    case 8: month.innerHTML = "sep";break;
    case 9: month.innerHTML = "oct";break;
    case 10: month.innerHTML = "nov";break;
    default: month.innerHTML = "dec";break;
  };

  day.innerHTML = d;
  if(d < 10){
    day.innerHTML = "0" + d;
  }
};

date();

//pointer
const pointer = document.getElementById('pointer');

function rotate(){

  let date = new Date();
  let s = date.getSeconds();

  let deg = s * 6;

  pointer.style.transform = `rotate(${deg}deg)`;
  
}

setInterval(rotate,1000);