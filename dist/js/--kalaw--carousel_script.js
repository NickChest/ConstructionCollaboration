const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let counter = 0;

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

setInterval(() => {
  slideNext();
  updateDots();
}, 5000)

// CAROUSEL TWO
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.second-slide');
    const nextButton = document.querySelector('.second-next');
    const prevButton = document.querySelector('.second-prev');
    let currentIndex = 0;
  
    function showSlide(index, direction) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit-left', 'exit-right', 'enter-right', 'enter-left');
        if (i === index) {
          slide.classList.add('active');
          if (direction === 'prev') {
            slide.classList.add('enter-left');
          } else {
            slide.classList.add('enter-right');
          }
        } else if (i === currentIndex) {
          if (direction === 'next') {
            slide.classList.add('exit-left');
          } else if (direction === 'prev') {
            slide.classList.add('exit-right');
          }
        }
      });
      currentIndex = index;
    }
  
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex, 'next');
    });
  
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex, 'prev');
    });
  
    showSlide(currentIndex);

    // setInterval(() => {
    //     const nextIndex = (currentIndex + 1) % slides.length;
    //     showSlide(nextIndex, 'next')
    // }, 5000);
  });


  // THIRD CAROUSEL
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.third-slide');
    const nextButton = document.querySelector('.third-next');
    const prevButton = document.querySelector('.third-prev');
    let currentIndex = 0;
  
    function showSlide(index, direction) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exit-top', 'exit-bot', 'enter-bot', 'enter-top');
        if (i === index) {
          slide.classList.add('active');
          if (direction === 'prev') {
            slide.classList.add('enter-top');
          } else {
            slide.classList.add('enter-bot');
          }
        } else if (i === currentIndex) {
          if (direction === 'next') {
            slide.classList.add('exit-top');
          } else if (direction === 'prev') {
            slide.classList.add('exit-bot');
          }
        }
      });
      currentIndex = index;
    }
  
    nextButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex, 'next');
    });
  
    prevButton.addEventListener('click', () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex, 'prev');
    });
  
    showSlide(currentIndex);

    // setInterval(() => {
    //   const nextIndex = (currentIndex + 1) % slides.length;
    //   showSlide(nextIndex, 'next')
    // }, 5000);
  });
  
  