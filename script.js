document.addEventListener('DOMContentLoaded', function() {
    // Promo Slider
    const promoSlider = document.querySelector('.promo-slider');
    const promoItems = [
        'Nuevas propiedades disponibles',
        'Ofertas especiales en apartamentos',
        'Financiamiento disponible',
        'Asesoría gratuita'
    ];

    promoItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'promo-item';
        div.textContent = item;
        promoSlider.appendChild(div);
    });

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroImages = [
        '/img/hero1.jpg',
        '/img/hero2.jpg',
        '/img/hero3.jpg'
    ];

    heroImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Hero Image ${index + 1}`;
        img.className = index === 0 ? 'active' : '';
        heroSlider.appendChild(img);
    });

    let currentSlide = 0;
    setInterval(() => {
        const slides = heroSlider.querySelectorAll('img');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    // Property Slider
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

    // Services
    const services = [
        { icon: 'fas fa-home', title: 'Compra y Venta', description: 'Asesoría en compra y venta de propiedades' },
        { icon: 'fas fa-key', title: 'Alquiler', description: 'Gestión de alquileres y arrendamientos' },
        { icon: 'fas fa-chart-line', title: 'Inversiones', description: 'Asesoría en inversiones inmobiliarias' },
        { icon: 'fas fa-tools', title: 'Mantenimiento', description: 'Servicios de mantenimiento y reparación' },
        { icon: 'fas fa-file-contract', title: 'Legal', description: 'Asesoría legal en transacciones inmobiliarias' },
        { icon: 'fas fa-search-dollar', title: 'Valuación', description: 'Servicios de tasación y valuación de propiedades' }
    ];

    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceGrid.appendChild(serviceCard);
    });

    // Store
    const storeItems = [
        { name: 'Casa Moderna', price: '$250,000', category: 'venta', image: '/img/property1.jpg' },
        { name: 'Apartamento Céntrico', price: '$1,200/mes', category: 'alquiler', image: '/img/property2.jpg' },
        { name: 'Terreno en la Playa', price: '$100,000', category: 'venta', image: '/img/property3.jpg' },
        { name: 'Oficina Ejecutiva', price: '$2,000/mes', category: 'alquiler', image: '/img/property4.jpg' },
        { name: 'Casa de Campo', price: '$180,000', category: 'venta', image: '/img/property5.jpg' },
        { name: 'Proyecto Residencial', price: 'Desde $150,000', category: 'proyecto', image: '/img/property6.jpg' }
    ];

    const storeSlider = document.getElementById('store-slider');
    storeItems.forEach(item => {
        const storeItem = document.createElement('div');
        storeItem.className = 'store-item';
        storeItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="store-item-info">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <p class="category">${item.category}</p>
                <button class="contact-button">Contactar</button>
            </div>
        `;
        storeSlider.appendChild(storeItem);
    });

    // Store Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterStoreItems(filter);
        });
    });

    function filterStoreItems(filter) {
        const items = document.querySelectorAll('.store-item');
        items.forEach(item => {
            const category = item.querySelector('.category').textContent;
            if (filter === 'all' || filter === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Instagram Feed
    const instagramPosts = [
        { image: '/img/instagram1.jpg', likes: 120, comments: 15 },
        { image: '/img/instagram2.jpg', likes: 95, comments: 8 },
        { image: '/img/instagram3.jpg', likes: 200, comments: 32 },
        { image: '/img/instagram4.jpg', likes: 150, comments: 20 }
    ];

    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'instagram-post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="Instagram Post">
            <div class="instagram-post-info">
                <span><i class="fas fa-heart"></i> ${post.likes}</span>
                <span><i class="fas fa-comment"></i> ${post.comments}</span>
            </div>
        `;
        instagramSlider.appendChild(postElement);
    });

    $('.instagram-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por contactarnos. Te responderemos pronto.');
        contactForm.reset();
    });

    // Chat Widget
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage('user', message);
            chatInput.value = '';
            // Simular respuesta del AI después de 1 segundo
            setTimeout(() => {
                const aiResponse = getAIResponse(message);
                addMessage('ai', aiResponse);
            }, 1000);
        }
    });

    function addMessage(sender, content) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message`;
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getAIResponse(message) {
        // Simulación de respuestas del AI basadas en palabras clave
        const lowercaseMessage = message.toLowerCase();
        if (lowercaseMessage.includes('casa') || lowercaseMessage.includes('apartamento')) {
            return "Tenemos una amplia variedad de propiedades disponibles. ¿Busca algo específico en cuanto a ubicación o presupuesto?";
        } else if (lowercaseMessage.includes('precio') || lowercaseMessage.includes('costo')) {
            return "Los precios varían según la ubicación y las características de la propiedad. ¿Tiene un rango de presupuesto en mente?";
        } else if (lowercaseMessage.includes('ubicación') || lowercaseMessage.includes('zona')) {
            return "Contamos con propiedades en diversas zonas de la ciudad. ¿Hay alguna área en particular que le interese?";
        } else if (lowercaseMessage.includes('vender') || lowercaseMessage.includes('venta')) {
            return "Ofrecemos servicios de venta de propiedades. ¿Le gustaría programar una evaluación gratuita de su propiedad?";
        } else if (lowercaseMessage.includes('alquilar') || lowercaseMessage.includes('renta')) {
            return "Tenemos opciones de alquiler a corto y largo plazo. ¿Qué tipo de propiedad está buscando rentar?";
        } else {
            return "Gracias por su mensaje. ¿En qué más puedo ayudarle con respecto a bienes raíces?";
        }
    }

    // Agregar botones de preguntas rápidas
    const quickQuestions = document.querySelectorAll('.quick-question');
    quickQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.textContent.trim();
            addMessage('user', question);
            setTimeout(() => {
                const aiResponse = getAIResponse(question);
                addMessage('ai', aiResponse);
            }, 1000);
        });
    });
});

// Service Worker para PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Lógica para la instalación de la PWA
let deferredPrompt;
const installButton = document.getElementById('install-app');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'block';
});

installButton.addEventListener('click', (e) => {
    installButton.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
    });
});