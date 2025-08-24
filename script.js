let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let intervalId;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}
showSlide(currentSlide);

function startSlider() {
    intervalId = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
}

function stopSlider() {
    clearInterval(intervalId);
}

slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);

startSlider();