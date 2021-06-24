var numberofbuttons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberofbuttons; i++){


document.querySelectorAll("button")[i].addEventListener("click", function (){
  var buttoninnerHTML = this.innerHTML;
    maakeSound(buttoninnerHTML);
    btnanimation(buttoninnerHTML);
   });
}

document.addEventListener("keypress", function(event){
  maakeSound(event.key);
  btnanimation(event.key);
});

function maakeSound(key) {
  switch (key){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;

      case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

      case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

      case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;

      case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

      case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

      default: console.log(buttoninnerHTML)




}
}
  function btnanimation(currentkey){
      var activebutton  = document.querySelector("."+ currentkey);
      activebutton.classList.add("pressed")
      setTimeout(function(){
        activebutton.classList.remove("pressed");
      },100)
  }





