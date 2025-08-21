// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide'); 

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.toggle('active', i === index);
//     });
// }
// showSlide(currentSlide);

// setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }, 2000); // Change slide every 3 seconds

let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}
showSlide(currentSlide);

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 3 seconds