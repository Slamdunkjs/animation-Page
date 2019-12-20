const body = document.querySelector("body")

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

body.style.height = `${window.innerHeight}px`;
body.style.width = `${window.innerWidth}px`;

setInterval(function(){
  let fon = randomInteger(1, 4)
  body.style.background = `url('../img/fon${fon}.png')`
},28800)
