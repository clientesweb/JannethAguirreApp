// Hero slider images
const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
];

// Properties data
const properties = [
    { id: 1, title: 'Casa Moderna', price: '$500,000', image: '/images/property1.jpg', beds: 3, baths: 2, area: 200 },
    { id: 2, title: 'Apartamento Céntrico', price: '$1,500 /mes', image: '/images/property2.jpg', beds: 2, baths: 1, area: 80 },
    { id: 3, title: 'Terreno con Vista', price: '$200,000', image: '/images/property3.jpg', area: 500 },
    { id: 4, title: 'Casa de Lujo', price: '$1,200,000', image: '/images/property4.jpg', beds: 5, baths: 4, area: 400 },
];

// Services data
const services = [
    { id: 1, title: 'Compra de Propiedades', description: 'Te ayudamos a encontrar la casa de tus sueños.', icon: 'fa-home' },
    { id: 2, title: 'Venta de Propiedades', description: 'Vendemos tu propiedad al mejor precio del mercado.', icon: 'fa-dollar-sign' },
    { id: 3, title: 'Inversiones Inmobiliarias', description: 'Asesoramos en las mejores oportunidades de inversión.', icon: 'fa-chart-line' },
    { id: 4, title: 'Asesoría Legal', description: 'Ofrecemos apoyo legal en todas tus transacciones.', icon: 'fa-gavel' },
];

// Hero Slider
function initHeroSlider() {
    const heroSlider = document.querySelector('.hero-slider');
    let currentSlide = 0;

    heroImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Hero image ${index + 1}`;
        img.className = index === 0 ? 'active' : '';
        heroSlider.appendChild(img);
    });

    setInterval(() => {
        const slides = heroSlider.querySelectorAll('img');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Property Slider
function initPropertySlider() {
    const propertySlider = document.querySelector('.property-slider');
    let currentIndex = 0;

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'property-slider-container';

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="price">${property.price}</p>
                <div class="property-details">
                    ${property.beds ? `<span><i class="fas fa-bed"></i> ${property.beds}</span>` : ''}
                    ${property.baths ? `<span><i class="fas fa-bath"></i> ${property.baths}</span>` : ''}
                    <span><i class="fas fa-vector-square"></i> ${property.area} m²</span>
                </div>
            </div>
        `;
        sliderContainer.appendChild(propertyCard);
    });

    propertySlider.appendChild(sliderContainer);

    const controls = document.createElement('div');
    controls.className = 'slider-controls';
    controls.innerHTML = `
        <button class="slider-control prev"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-control next"><i class="fas fa-chevron-right"></i></button>
    `;
    propertySlider.appendChild(controls);

    const prevButton = controls.querySelector('.prev');
    const nextButton = controls.querySelector('.next');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + properties.length) % properties.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % properties.length;
        updateSlider();
    });

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Populate service cards
function populateServices() {
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <i class="fas ${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceGrid.appendChild(serviceCard);
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Active nav item on scroll
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.bottom-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Contact form submission
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        const formData = new FormData(contactForm);
        console.log('Form data:', Object.fromEntries(formData));
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// PWA installation
function initPWAInstall() {
    let deferredPrompt;
    const installButton = document.getElementById('install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
    });

    installButton.addEventListener('click', () => {
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
}

// Service worker registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration.scope);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        });
    }
}

// Initialize all functions
function init() {
    initHeroSlider();
    initPropertySlider();
    populateServices();
    initSmoothScroll();
    initActiveNavOnScroll();
    initContactForm();
    initPWAInstall();
    registerServiceWorker();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);