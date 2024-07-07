const hamburger = document.querySelector('.hamburger input');
const nav = document.querySelector('.nav2');
const slide = document.querySelector('.slide')

hamburger.addEventListener('click', function() {
    nav.classList.toggle('slide');
});