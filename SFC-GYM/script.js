// Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 1500);
});

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide-show img");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
    slides.forEach(slide => slide.classList.remove("slide-active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    slides[slideIndex - 1].classList.add("slide-active");
    dots[slideIndex - 1].classList.add("active");
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto slideshow
window.addEventListener("load", () => {
    showSlides(slideIndex = 1);
    setInterval(nextSlide, 4000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});
