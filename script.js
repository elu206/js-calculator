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
let fortunes = ["if you refuse to accept anything but the best, you very often get it.", "a smile is your passport into the hearts of others.", "change can hurt, but it leads a path to something better.", "hidden in a valley beside an open stream - this will be the type of place where you will find your dream.", "you learn from your mistakes.  You will learn a lot today.", "land is always on the mind of a flying bird.", "you already know the answer to the questions lingering inside your head.","it is now, and in this world, that we must live.", "if winter comes, can spring be far behind?", "the love of your life is stepping into your planet this summer.", "love can last a lifetime, if you want it to.", "a short stranger will soon enter your life with blessings to share.", "a journey of a thousand miles begins with a single step.", "welcome the change coming into your life.", "conquer your fears or they will conquer you.", "when you look down, all you see is dirt, so keep looking up.", "the world may be your oyster, but that doesn't mean you'll get its pearl.", "every day is a new day. But tomorrow is never promised.","it never pays to kick a skunk.", "a wish is what makes life happen when you dream of rose petals.", "love can turn a cottage into a golden palace.", "no distance is too far, if two hearts are tied together.","if you never expect anything you can never be disappointed."]

let yourFortune = document.getElementById("fortune-output")
yourFortune.addEventListener("click",restyle)

function fortune (){
  let inputName = document.getElementById("fortune-input").value;
  let fortuneOutput = fortunes[Math.floor(Math.random() * fortunes.length)];
  if(inputName){
    yourFortune.innerHTML = inputName + ", " + fortuneOutput;
  } else {
    alert("Enter your name.")
  }
}

function restyle (){
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  let randomFontSize = 10 + Math.floor(Math.random() * 100)
  let randomBackground1 = Math.floor(Math.random() * 255);
  let randomBackground2 = Math.floor(Math.random() * 255);
  let randomBackground3 = Math.floor(Math.random() * 255);

  yourFortune.style.color = "rgb(" + randomColor1 +","+ randomColor2 +","+ randomColor3 +")"
  yourFortune.style.fontSize = randomFontSize + "px"
  yourFortune.style.background = "rgb(" + randomBackground1 +","+ randomBackground2 +","+ randomBackground3 +")"

}
