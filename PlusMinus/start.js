

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');



let textSize = 16; 



function textIncrease() {

 textSize++;
 text.style.fontSize = textSize + "px";
}

function textDecrease(){
    textSize--;
    text.style.fontSize = textSize + "px";

}

btnDecrease.addEventListener('click', textDecrease)
btnIncrease.addEventListener('click', textIncrease)