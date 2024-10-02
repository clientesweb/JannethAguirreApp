// Promo data
const promos = [
    "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
    "Nuevo proyecto residencial: Apartamentos de lujo desde $200,000",
    "Asesoría gratuita para inversiones inmobiliarias este mes"
];

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
    { id: 5, title: 'Loft Industrial', price: '$350,000', image: '/images/property5.jpg', beds: 1, baths: 1, area: 120 },
    { id: 6, title: 'Casa de Campo', price: '$600,000', image: '/images/property6.jpg', beds: 4, baths: 3, area: 300 },
];

// Services data
const services = [
    { id: 1, title: 'Compra de Propiedades', description: 'Te ayudamos a encontrar la casa de tus sueños.', icon: 'fa-home' },
    { id: 2, title: 'Venta de Propiedades', description: 'Vendemos tu propiedad al mejor precio del mercado.', icon: 'fa-dollar-sign' },
    { id: 3, title: 'Inversiones Inmobiliarias', description: 'Asesoramos en las mejores oportunidades de inversión.', icon: 'fa-chart-line' },
    { id: 4, title: 'Asesoría Legal', description: 'Ofrecemos apoyo legal en todas tus transacciones.', icon: 'fa-gavel' },
];

// Store items data
const storeItems = [
    { id: 1, title: 'Casa en la Playa', price: '$800,000', image: '/images/store1.jpg', category: 'venta' },
    { id: 2, title: 'Apartamento Amoblado', price: '$2,000 /mes', image: '/images/store2.jpg', category: 'alquiler' },
    { id: 3, title: 'Proyecto Residencial', price: 'Desde $150,000', image: '/images/store3.jpg', category: 'proyecto' },
    { id: 4, title: 'Oficina Comercial', price: '$3,500 /mes', image: '/images/store4.jpg', category: 'alquiler' },
    { id: 5, title: 'Terreno Industrial', price: '$1,200,000', image: '/images/store5.jpg', category: 'venta' },
    { id: 6, title: 'Condominio de Lujo', price: 'Desde $500,000', image: '/images/store6.jpg', category: 'proyecto' },
];

// Promo Banner
function initPromoBanner() {
    const promoSlider = document.querySelector('.promo-slider');
    promos.forEach(promo => {
        const promoItem = document.createElement('div');
        promoItem.className = 'promo-item';
        promoItem.textContent = promo;
        promoSlider.appendChild(promoItem);
    });
    // Clone the first set of items to create a seamless loop
    promos.forEach(promo => {
        const promoItem = document.createElement('div');
        promoItem.className = 'promo-item';
        promoItem.textContent = promo;
        promoSlider.appendChild(promoItem);
    });
}

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
                <a href="#" class="contact-button" data-property="${property.id}">Contactar</a>
            </div>
        `;
        sliderContainer.appendChild(propertyCard);
    });

    propertySlider.appendChild(sliderContainer);

    // Add event listeners for contact buttons
    const contactButtons = sliderContainer.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const propertyId = button.dataset.property;
            const property = properties.find(p => p.id === parseInt(propertyId));
            if (property) {
                const message = encodeURIComponent(`Hola, estoy interesado en la propiedad "${property.title}" con precio ${property.price}. ¿Podría darme más información?`);
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
            }
        });
    });
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

// Populate store items
function populateStoreItems() {
    const storeGrid = document.getElementById('store-grid');
    storeItems.forEach(item => {
        const storeItem = document.createElement('div');
        storeItem.className = 'store-item';
        storeItem.dataset.category = item.category;
        storeItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="store-item-info">
                <h3>${item.title}</h3>
                <p class="price">${item.price}</p>
                <p class="category">${item.category}</p>
                <a href="#" class="contact-button" data-item="${item.id}">Contactar</a>
            </div>
        `;
        storeGrid.appendChild(storeItem);
    });

    // Add event listeners for contact buttons
    const contactButtons = storeGrid.querySelectorAll('.contact-button');
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = button.dataset.item;
            const item = storeItems.find(i => i.id === parseInt(itemId));
            if (item) {
                const message = encodeURIComponent(`Hola, estoy interesado en el item "${item.title}" con precio ${item.price}. ¿Podría darme más información?`);
                window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
            }
        });
    });
}

// Store filter functionality
function initStoreFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const storeItems = document.querySelectorAll('.store-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            storeItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
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
    initPromoBanner();
    initHeroSlider();
    initPropertySlider();
    populateServices();
    populateStoreItems();
    initStoreFilter();
    initSmoothScroll();
    initActiveNavOnScroll();
    initContactForm();
    initPWAInstall();
    registerServiceWorker();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);