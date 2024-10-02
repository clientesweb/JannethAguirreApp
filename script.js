// Promo Banner
const promos = [
    "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
    "Nuevas propiedades disponibles en zonas exclusivas",
    "Financiamiento disponible, ¡consúltanos!"
];
let currentPromo = 0;
const promoSlider = document.querySelector('.promo-slider');

function updatePromo() {
    promoSlider.innerHTML = `<p class="text-center">${promos[currentPromo]}</p>`;
    currentPromo = (currentPromo + 1) % promos.length;
}

setInterval(updatePromo, 5000);
updatePromo(); // Initial update

// Hero Slider
const heroImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200"
];
let currentImage = 0;
const heroSlider = document.querySelector('.hero-slider');

function createImageElement(src, index) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Hero image ${index + 1}`;
    img.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
    return img;
}

heroImages.forEach((src, index) => {
    heroSlider.appendChild(createImageElement(src, index));
});

function updateHeroSlider() {
    const images = heroSlider.querySelectorAll('img');
    images.forEach((img, index) => {
        img.style.opacity = index === currentImage ? '1' : '0';
    });
    currentImage = (currentImage + 1) % heroImages.length;
}

setInterval(updateHeroSlider, 5000);

// Property Slider
const properties = [
    { image: "/placeholder.svg?height=200&width=300", title: "Casa Moderna", price: "$250,000", bedrooms: 3, bathrooms: 2, area: "150m²" },
    { image: "/placeholder.svg?height=200&width=300", title: "Apartamento Céntrico", price: "$150,000", bedrooms: 2, bathrooms: 1, area: "80m²" },
    { image: "/placeholder.svg?height=200&width=300", title: "Villa de Lujo", price: "$500,000", bedrooms: 5, bathrooms: 4, area: "300m²" },
];

const propertySlider = document.querySelector('.property-slider');

properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-72 mr-4';
    propertyCard.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${property.title}</h3>
            <p class="text-primary font-bold mb-2">${property.price}</p>
            <div class="flex justify-between text-sm text-gray-600">
                <span>${property.bedrooms} Habitaciones</span>
                <span>${property.bathrooms} Baños</span>
                <span>${property.area}</span>
            </div>
        </div>
    `;
    propertySlider.appendChild(propertyCard);
});

// Services
const services = [
    { icon: 'fa-home', title: 'Compra y Venta', description: 'Asesoramiento experto en transacciones inmobiliarias.' },
    { icon: 'fa-key', title: 'Alquiler', description: 'Gestión completa de alquileres residenciales y comerciales.' },
    { icon: 'fa-chart-line', title: 'Inversiones', description: 'Oportunidades de inversión en el mercado inmobiliario.' },
];

const serviceGrid = document.getElementById('service-grid');

services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'bg-white p-6 rounded-lg shadow-md text-center';
    serviceCard.innerHTML = `
        <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
        <h3 class="font-bold text-xl mb-2">${service.title}</h3>
        <p>${service.description}</p>
    `;
    serviceGrid.appendChild(serviceCard);
});

// Store
const storeItems = [
    { image: "/placeholder.svg?height=200&width=300", title: "Casa Familiar", price: "$300,000", category: "venta" },
    { image: "/placeholder.svg?height=200&width=300", title: "Apartamento Estudio", price: "$800/mes", category: "alquiler" },
    { image: "/placeholder.svg?height=200&width=300", title: "Condominio Nuevo", price: "Desde $200,000", category: "proyecto" },
];

const storeGrid = document.getElementById('store-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function createStoreItem(item) {
    const storeItem = document.createElement('div');
    storeItem.className = 'bg-white rounded-lg shadow-md overflow-hidden';
    storeItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${item.title}</h3>
            <p class="text-primary font-bold">${item.price}</p>
        </div>
    `;
    return storeItem;
}

function filterStoreItems(category) {
    storeGrid.innerHTML = '';
    const filteredItems = category === 'all' ? storeItems : storeItems.filter(item => item.category === category);
    filteredItems.forEach(item => {
        storeGrid.appendChild(createStoreItem(item));
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
        button.classList.add('bg-primary', 'text-white');
        filterStoreItems(button.dataset.filter);
    });
});

filterStoreItems('all'); // Initial filter

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Mensaje enviado. Gracias por contactarnos!');
    contactForm.reset();
});

// Install App Button
const installButton = document.getElementById('install-app');
let deferredPrompt;

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
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
});