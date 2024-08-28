// Sticky Navbar
window.addEventListener('scroll', () => {
     const navbar = document.getElementById('navbar');
     if (window.scrollY > 0) {
         navbar.classList.add('sticky');
     } else {
         navbar.classList.remove('sticky');
     }
 });let currentIndex = 0;
 const items = document.querySelectorAll('.carousel-item');
 const totalItems = items.length;
 const itemsPerSlide = 3; // Number of items per slide
 
 function showSlide(index) {
   // Adjust the current index to stay within bounds
   if (index >= Math.ceil(totalItems / itemsPerSlide)) {
     currentIndex = 0;
   } else if (index < 0) {
     currentIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
   } else {
     currentIndex = index;
   }
 
   // Calculate the offset to slide items correctly
   const offset = -(currentIndex * 100);
   document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
   updateDots();
 }
 
 function nextSlide() {
   showSlide(currentIndex + 1);
 }
 
 function prevSlide() {
   showSlide(currentIndex - 1);
 }
 
 function currentSlide(index) {
   showSlide(index);
 }
 
 function updateDots() {
   const dots = document.querySelectorAll('.dot');
   dots.forEach(dot => dot.classList.remove('active'));
   dots[currentIndex].classList.add('active');
 }
 
 document.addEventListener('DOMContentLoaded', function () {
   showSlide(currentIndex);
   updateDots();
 });
 