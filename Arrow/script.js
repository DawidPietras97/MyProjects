const arrow = document.querySelector('.fas');
const nav = document.querySelector('nav');

arrow.addEventListener('click', function(){
arrow.classList.toggle("on");
nav.classList.toggle("on");
})