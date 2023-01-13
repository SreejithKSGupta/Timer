let startTime;
let elapsedTime = 0;
let timerInterval;


function onstart(){   
  document.getElementById("pauseButton").style.display ="none";
  document.getElementById("playButton").style.display ="block";
  document.getElementById("resetButton").style.display ="block";
}

function start() {
  var eltime=localStorage.getItem("ELAPSEDTIME");
  startTime = Date.now() -eltime;
  timerInterval = setInterval(printTime, 1000);
  document.getElementById("pauseButton").style.display ="block";
  document.getElementById("playButton").style.display ="none";
  document.getElementById("resetButton").style.display ="block";

}


function printTime() {
  elapsedTime = Date.now() - startTime;
  localStorage.setItem("ELAPSEDTIME", elapsedTime);
  print(timeToString(elapsedTime));
}

function pause() { 
  clearInterval(timerInterval);
  document.getElementById("pauseButton").style.display ="none";
  document.getElementById("playButton").style.display ="block";
  document.getElementById("resetButton").style.display ="block";
}

function reset() {
  clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    localStorage.setItem("ELAPSEDTIME", 0);
    localStorage.setItem("refTIME", 0);
    console.log(localStorage.getItem("ELAPSEDTIME"));
    fixopacity();
    localStorage.setItem("reftime", 0);
  
document.getElementById("pauseButton").style.display ="none";
document.getElementById("playButton").style.display ="block";
document.getElementById("resetButton").style.display ="none";
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedhr = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  reward( formattedhr);
  return `<div style="color:rgb(0, 241, 32); font-size:120%">${formattedhr}</div>
         :<div style="color:violet;font-size:110%">${formattedMM}</div>
         :<div style="color:yellow;font-size:100%">${formattedSS}</div>`;
}


function reward( formattedhr){
  if (formattedhr > 0) {
    document.getElementById("tr1").style.opacity = "1";
  }
  if (formattedhr> 1) {
    document.getElementById("tr2").style.opacity = "1";
  }
  if (formattedhr> 2) {
    document.getElementById("tr3").style.opacity = "1";
  }
  if (formattedhr > 3) {
    document.getElementById("tr4").style.opacity = "1";
  }
  if (formattedhr > 4) {
    document.getElementById("tr5").style.opacity = "1";
  }
  if (formattedhr > 5) {
    document.getElementById("tr6").style.opacity = "1";
  }
}

function fixopacity(){
  document.querySelectorAll(".trimg").forEach((item) => {
    item.style.opacity = "0.5";
  });
}
