// Initialize Swiper for hero slider
const heroSwiper = new Swiper('.hero-slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize Swiper for property slider
const propertySwiper = new Swiper('.property-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

// Properties data
const properties = [
    { id: 1, title: 'Casa en Venta', price: '$500,000', image: '/images/property1.jpg', beds: 3, baths: 2, area: 200 },
    { id: 2, title: 'Apartamento en Renta', price: '$1,500 /mes', image: '/images/property2.jpg', beds: 2, baths: 1, area: 80 },
    { id: 3, title: 'Terreno en Venta', price: '$200,000', image: '/images/property3.jpg', area: 500 },
    { id: 4, title: 'Casa de Lujo', price: '$1,200,000', image: '/images/property4.jpg', beds: 5, baths: 4, area: 400 },
];

// Services data
const services = [
    { id: 1, title: 'Compra de Propiedades', description: 'Te ayudamos a encontrar la casa de tus sueños.' },
    { id: 2, title: 'Venta de Propiedades', description: 'Vendemos tu propiedad al mejor precio del mercado.' },
    { id: 3, title: 'Inversiones Inmobiliarias', description: 'Asesoramos en las mejores oportunidades de inversión.' },
    { id: 4, title: 'Asesoría Legal', description: 'Ofrecemos apoyo legal en todas tus transacciones.' },
];

// Populate property cards
const propertyWrapper = document.getElementById('property-wrapper');
properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'swiper-slide';
    propertyCard.innerHTML = `
        <div class="property-card">
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="price">${property.price}</p>
                <div class="property-details">
                    ${property.beds ? `<span>${property.beds} Habitaciones</span>` : ''}
                    ${property.baths ? `<span>${property.baths} Baños</span>` : ''}
                    <span>${property.area} m²</span>
                </div>
            </div>
        </div>
    `;
    propertyWrapper.appendChild(propertyCard);
});

// Populate service cards
const serviceGrid = document.getElementById('service-grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <i class="fas fa-home"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    serviceGrid.appendChild(serviceCard);
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});

// PWA installation
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

// Service worker registration
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
