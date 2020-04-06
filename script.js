let executeHalf = document.getElementById("half-button");
executeHalf.addEventListener("click", halfNumber);

function halfNumber (){
  let inputNumber = document.getElementById("half-input").value;
  let halfInput = inputNumber/2;
  if(inputNumber){
    alert("Half of " + inputNumber + " is " + halfInput)
    console.log("Half of " + inputNumber + " is " + halfInput)
  } else {
    alert("Enter a number.")
  }
}

let executeFortune = document.getElementById("fortune-button")
executeFortune.addEventListener("click", fortune);
//fortunes from http://www.fortunecookiemessage.com/archive.php
let fortunes = ["If you refuse to accept anything but the best, you very often get it.", "A smile is your passport into the hearts of others.", "Change can hurt, but it leads a path to something better.", "Hidden in a valley beside an open stream - this will be the type of place where you will find your dream.", "You learn from your mistakes... You will learn a lot today.", "Land is always on the mind of a flying bird.", "You already know the answer to the questions lingering inside your head.","It is now, and in this world, that we must live.", "If winter comes, can spring be far behind?"]

let yourFortune = document.getElementById("fortune-output")
yourFortune.addEventListener("click",restyle)

function fortune (){
  let inputName = document.getElementById("fortune-input").value;
  let fortuneOutput = fortunes[Math.floor(Math.random() * fortunes.length)];
  if(inputName){
    yourFortune.innerHTML = fortuneOutput;
  } else {
    alert("Enter your name.")
  }
}

function restyle (){
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  let randomFontSize = Math.floor(Math.random() * 100)
  let randomBackground1 = Math.floor(Math.random() * 255);
  let randomBackground2 = Math.floor(Math.random() * 255);
  let randomBackground3 = Math.floor(Math.random() * 255);

  yourFortune.style.color = "rgb(" + randomColor1 +","+ randomColor2 +","+ randomColor3 +")"
  yourFortune.style.fontSize = randomFontSize + "px"
  yourFortune.style.background = "rgb(" + randomBackground1 +","+ randomBackground2 +","+ randomBackground3 +")"

}
