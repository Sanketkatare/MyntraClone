// // let currentSlide = 0;
// // const slides = document.querySelectorAll('.slide'); 

// // function showSlide(index) {
// //     slides.forEach((slide, i) => {
// //         slide.classList.toggle('active', i === index);
// //     });
// // }
// // showSlide(currentSlide);

// // setInterval(() => {
// //     currentSlide = (currentSlide + 1) % slides.length;
// //     showSlide(currentSlide);
// // }, 2000); // Change slide every 3 seconds

// function slideshow() {
//   // clone
//   $('.slider-1').clone().removeClass('slider-1').addClass('slider-2').insertAfter($('.slider'));

//   // set first
//   $('.slider-1').slick({
//     draggable: false,
//     dots: false,
//     infinite: true,
//     responsive: true,
//     asNavFor: '.slider-2',
//     touchThreshold: 20,
//     speed: 1000,
//     fade: true
//   });

//   // set second
//   $('.slider-2').slick({
//     dots: true,
//     infinite: true,
//     responsive: true,
//     asNavFor: '.slider-1',
//     arrows: false,
//     speed: 1000,
//     easing: 'easeInOutQuart'
//   });
// }

// $(function() {
//   slideshow();
//   setTimeout(function() {
//     $('.slider-1 .slick-next').click();
//   }, 1000);
// })