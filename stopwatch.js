const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;


function start(){
  if(!isrunning){
    starttime = Date.now() - elapsedtime;// computer thinks epic and it is in the milliseconds ;
    //The setInterval() method repeats a block of code at every given timing event.
    //function - a function containing a block of code
    //milliseconds - the time interval between the execution of the function
    timer =setInterval(update,10);
    isrunning =true;
  }



}

function stop(){
  if(isrunning){
 clearInterval(timer);
 elapsedtime =Date.now()
  -starttime;
  isrunning =false;
  }

}
function reset(){
  

clearInterval(timer);
   starttime = 0;
   elapsedtime = 0;
   isrunning = false;
   display.textContent ="00:00:00:00";
  


}
function update(){
 const currenttime =Date.now();
elapsedtime = currenttime - starttime;

let hours = Math.floor( elapsedtime /(1000 * 60 * 60));
let minutes =Math.floor( elapsedtime /(1000 * 60)%60);
let seconds =Math.floor( elapsedtime /1000 % 60);
let milliseconds = Math.floor(elapsedtime%1000 /10);

hours =String(hours).padStart(2,"0");
minutes =String(minutes).padStart(2,"0");
seconds =String(seconds).padStart(2,"0");
milliseconds =String(milliseconds).padStart(2,"0");

display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}`;



}



