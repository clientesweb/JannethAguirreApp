// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Hero slider functionality
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(n) {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (n + heroSlides.length) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}

setInterval(() => showSlide(currentSlide + 1), 5000);

// Property slider functionality
const propertySlider = document.querySelector('.property-slider');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

prevSlide.addEventListener('click', () => {
    propertySlider.scrollBy({ left: -300, behavior: 'smooth' });
});

nextSlide.addEventListener('click', () => {
    propertySlider.scrollBy({ left: 300, behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the email to your server for newsletter subscription
    alert('Gracias por suscribirte a nuestro boletín.');
    newsletterForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// PWA installation
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker not registered', err));
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-app').style.display = 'block';
});

document.getElementById('install-app').addEventListener('click', (e) => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
});

// Animate on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);