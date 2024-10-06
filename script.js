// Service Worker Registration
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

// Install button functionality
let deferredPrompt;
const installButton = document.getElementById('install-app');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';
});

installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    }
    installButton.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
});

// Promo Slider
const promoItems = [
    "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
    "Nueva propiedad disponible en el centro de la ciudad",
    "Asesoramiento gratuito para inversores inmobiliarios"
];

const promoSlider = document.querySelector('.promo-slider');
promoItems.forEach(item => {
    const promoItem = document.createElement('div');
    promoItem.classList.add('promo-item');
    promoItem.textContent = item;
    promoSlider.appendChild(promoItem);
});

// Hero Slider
const heroSlider = document.querySelector('.hero-slider');
const heroImages = [
    '/img/hero1.jpg',
    '/img/hero2.jpg',
    '/img/hero3.jpg'
];

heroImages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Hero Image ${index + 1}`;
    img.classList.add(index === 0 ? 'active' : '');
    heroSlider.appendChild(img);
});

let currentSlide = 0;
function nextSlide() {
    const slides = heroSlider.querySelectorAll('img');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Property Slider
const properties = [
    { image: '/img/property1.jpg', title: 'Casa moderna', price: '$250,000', bedrooms: 3, bathrooms: 2, area: '150 m²' },
    { image: '/img/property2.jpg', title: 'Apartamento céntrico', price: '$180,000', bedrooms: 2, bathrooms: 1, area: '80 m²' },
    { image: '/img/property3.jpg', title: 'Villa con piscina', price: '$500,000', bedrooms: 5, bathrooms: 4, area: '300 m²' },
    { image: '/img/property4.jpg', title: 'Loft industrial', price: '$200,000', bedrooms: 1, bathrooms: 1, area: '100 m²' }
];

const propertySlider = document.querySelector('.property-slider');
properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.classList.add('property-card');
    propertyCard.innerHTML = `
        <img src="${property.image}" alt="${property.title}">
        <div class="property-info">
            <h3>${property.title}</h3>
            <p class="price">${property.price}</p>
            <div class="property-details">
                <span>${property.bedrooms} habitaciones</span>
                <span>${property.bathrooms} baños</span>
                <span>${property.area}</span>
            </div>
            <a href="#contacto" class="contact-button">Contactar</a>
        </div>
    `;
    propertySlider.appendChild(propertyCard);
});

// Services
const services = [
    { icon: 'fas fa-home', title: 'Compra y Venta', description: 'Asesoramiento experto en transacciones inmobiliarias' },
    { icon: 'fas fa-key', title: 'Alquiler', description: 'Gestión integral de alquileres residenciales y comerciales' },
    { icon: 'fas fa-chart-line', title: 'Inversiones', description: 'Análisis de mercado y oportunidades de inversión' },
    { icon: 'fas fa-tools', title: 'Reformas', description: 'Servicios de renovación y mejora de propiedades' },
    { icon: 'fas fa-file-contract', title: 'Asesoría Legal', description: 'Asistencia en contratos y trámites legales' },
    { icon: 'fas fa-search-location', title: 'Tasaciones', description: 'Valoraciones precisas de propiedades' }
];

const serviceGrid = document.getElementById('service-grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.innerHTML = `
        <i class="${service.icon}"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    serviceGrid.appendChild(serviceCard);
});

// Store
const storeItems = [
    { image: '/img/store1.jpg', title: 'Casa de lujo', price: '$1,000,000', category: 'venta' },
    { image: '/img/store2.jpg', title: 'Apartamento céntrico', price: '$800/mes', category: 'alquiler' },
    { image: '/img/store3.jpg', title: 'Terreno urbanizable', price: '$150,000', category: 'venta' },
    { image: '/img/store4.jpg', title: 'Local comercial', price: '$1,200/mes', category: 'alquiler' },
    { image: '/img/store5.jpg', title: 'Edificio de oficinas', price: '$5,000,000', category: 'venta' },
    { image: '/img/store6.jpg', title: 'Proyecto residencial', price: 'Desde $200,000', category: 'proyecto' }
];

const storeSlider = document.getElementById('store-slider');
storeItems.forEach(item => {
    const storeItem = document.createElement('div');
    storeItem.classList.add('store-item');
    storeItem.dataset.category = item.category;
    storeItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="store-item-info">
            <h3>${item.title}</h3>
            <p class="price">${item.price}</p>
            <p class="category">${item.category}</p>
            <a href="#contacto" class="contact-button">Más información</a>
        </div>
    `;
    storeSlider.appendChild(storeItem);
});

// Store Filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const storeItems = document.querySelectorAll('.store-item');
        storeItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Instagram Feed
const instagramPosts = [
    { image: '/img/instagram1.jpg', likes: 120, comments: 15 },
    { image: '/img/instagram2.jpg', likes: 95, comments: 8 },
    { image: '/img/instagram3.jpg', likes: 200, comments: 32 },
    { image: '/img/instagram4.jpg', likes: 150, comments: 20 }
];

const instagramSlider = document.getElementById('instagram-slider');
instagramPosts.forEach(post => {
    const instagramPost = document.createElement('div');
    instagramPost.classList.add('instagram-post');
    instagramPost.innerHTML = `
        <img src="${post.image}" alt="Instagram Post">
        <div class="instagram-info">
            <span><i class="fas fa-heart"></i> ${post.likes}</span>
            <span><i class="fas fa-comment"></i> ${post.comments}</span>
        </div>
    `;
    instagramSlider.appendChild(instagramPost);
});

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    // Here you would typically send the form data to your server
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});

// Slick Slider Initialization
$(document).ready(function(){
    $('.property-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#instagram-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// AI Chat Functionality
const openChatButton = document.getElementById('open-chat');
const aiChat = document.getElementById('ai-chat');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendMessageButton = document.getElementById('send-message');

openChatButton.addEventListener('click', () => {
    aiChat.style.display = aiChat.style.display === 'none' ? 'block' : 'none';
});

sendMessageButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessageToChat('Usuario', message);
        // Here you would typically send the message to your AI service and get a response
        // For now, we'll just simulate a response
        setTimeout(() => {
            const aiResponse = "Gracias por tu mensaje. Un agente se pondrá en contacto contigo pronto.";
            addMessageToChat('AI', aiResponse);
        }, 1000);
        userInput.value = '';
    }
}

function addMessageToChat(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        let active = false;

        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});