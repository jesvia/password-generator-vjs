const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
 "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
 "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let p1 = document.querySelector(".password1");
let p2 = document.querySelector(".password2");
let n = characters.length
let k =  Math.floor(Math.random() * n)
let m =  Math.floor(Math.random() * n)
let alive = false
function start(){
    for (var i = 0; i < 15; i++) {
        p1.textContent += characters[Math.floor(Math.random() * n)];
        p2.textContent += characters[Math.floor(Math.random() * n)];
      }
}
function generate(){
    // if(!alive){
    //   alive = true;
    //   }
    p1.textContent = "";
    p2.textContent = "";
    start();
      console.log("im clicked")
}


