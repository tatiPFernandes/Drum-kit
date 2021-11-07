
let buttons = document.querySelectorAll(".drum").length; 

for (let i = 0; i < buttons; i++) { 
  document.querySelectorAll(".drum")[i].addEventListener("click", () => {

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
    
 })
}

document.addEventListener("keypress", (event) => {
  makeSound(event.key);  
   
})



 function makeSound(key) {
  switch (key) {
    case "w":
      let crash  = new Audio('sound/crash.mp3');
      crash.play();
      break;

    case "a": 
      let tom1 = new Audio('sound/tom-1.mp3');
      tom1.play(); 
      break;

    case "s":
      let tom2 = new Audio('sound/tom-2.mp3');
      tom2.play(); 
      break; 

    case "d":
      let kick = new Audio('sound/kick-bass.mp3');
      kick.play();
      break;

    case "j":
      let snare = new Audio('sound/snare.mp3');
      snare.play();
      break;

    case "k":
      let tom3 = new Audio('sound/tom-3.mp3');
      tom3.play();
      break;

     
     default:
       console.log(buttonInnerHTML);
      
  }
}