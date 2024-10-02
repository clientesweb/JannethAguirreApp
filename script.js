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

// Populate property cards
const propertyGrid = document.getElementById('property-grid');
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
    propertyGrid.appendChild(propertyCard);
});

// Populate service cards
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active nav item on scroll
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