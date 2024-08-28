let slides = document.querySelectorAll('.slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', () => {
    slideNext();
    updateDots();
});

prev.addEventListener('click', () => {
    slidePrev();
    updateDots();
});

function slideNext() {
    slides[counter].classList.remove('active');
    if (counter >= slides.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slides[counter].classList.add('active');
}

function slidePrev() {
    slides[counter].classList.remove('active');
    if (counter == 0) {
        counter = slides.length - 1;
    } else {
        counter--;
    }
    slides[counter].classList.add('active');
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}
