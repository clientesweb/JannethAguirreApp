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
    "/img/paisaje-analogico-ciudad-edificios_23-2149661457.jpg",
    "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg",
    "/img/casa-moderna-encantadora-villa-3d-render_1015255-30058.jpg"
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

const properties = [
    {
        image: '/img/property1.jpg',
        title: 'Casa en la Playa',
        price: '$350,000',
        bedrooms: 3,
        bathrooms: 2,
        area: '120 m²'
    },
    {
        image: '/img/property2.jpg',
        title: 'Apartamento Moderno',
        price: '$250,000',
        bedrooms: 2,
        bathrooms: 1,
        area: '85 m²'
    }
    // Agrega más propiedades si es necesario
];

const propertySlider = document.querySelector('.property-slider');

properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card bg-white rounded-lg shadow-md flex-shrink-0 w-72';
    
    const whatsappMessage = `Hola, estoy interesado en la propiedad: ${property.title}, que cuesta ${property.price}. Tiene ${property.bedrooms} habitaciones y ${property.bathrooms} baños.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=1234567890&text=${encodeURIComponent(whatsappMessage)}`; // Reemplaza con el número real

    propertyCard.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${property.title}</h3>
            <p class="text-primary font-bold mb-2">${property.price}</p>
            <div class="flex justify-between text-sm text-gray-600 mb-2">
                <span>${property.bedrooms} Habitaciones</span>
                <span>${property.bathrooms} Baños</span>
                <span>${property.area}</span>
            </div>
            <a href="${whatsappLink}" target="_blank" class="whatsapp-button bg-green-500 text-white rounded-full p-2 inline-block text-center shadow-lg">
                <i class="fab fa-whatsapp"></i>
            </a>
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

const storeSlider = document.getElementById('store-slider');
const filterButtons = document.querySelectorAll('.filter-btn');

function createStoreItem(item) {
    const storeItem = document.createElement('div');
    storeItem.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105';
    
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
    storeSlider.innerHTML = ''; // Limpiar el slider
    const filteredItems = category === 'all' ? storeItems : storeItems.filter(item => item.category === category);
    filteredItems.forEach(item => {
        storeSlider.appendChild(createStoreItem(item));
    });
    
    // Reiniciar el slider después de agregar elementos
    $(storeSlider).slick('unslick'); // Destruir el slider si existe
    $(storeSlider).slick({ // Inicializar el slider
        slidesToShow: 3, // Número de elementos visibles
        slidesToScroll: 1, // Número de elementos a desplazarse
        infinite: true, // Ciclo infinito
        dots: true, // Puntos de navegación
        autoplay: true, // Reproducción automática
        autoplaySpeed: 2000, // Velocidad de reproducción
        responsive: [ // Configuraciones responsivas
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white', 'bg-gray-800', 'text-white'));
        button.classList.add('bg-primary', 'text-white', 'bg-gray-800', 'text-white');
        filterStoreItems(button.dataset.filter);
    });
});

filterStoreItems('all'); // Filtro inicial

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