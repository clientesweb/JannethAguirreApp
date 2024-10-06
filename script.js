document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const promoItems = [
        "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
        "Nueva propiedad disponible en el centro de la ciudad",
        "¡Financiamiento disponible! Consulta nuestras opciones"
    ];

    const heroImages = [
        "/img/paisaje-analogico-ciudad-edificios_23-2149661457.jpg",
        "/img/casa-moderna-encantadora-villa-3d-render_1015255-30058.jpg",
        "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg"
    ];

    const properties = [
        { id: 1, title: "Casa moderna", price: "$250,000", image: "/img/clase-media-contemporanea-hermosa-casa-moderna_1096167-115673.jpg", type: "venta" },
        { id: 2, title: "Apartamento céntrico", price: "$1,200/mes", image: "/img/elegante-diseno-interiores-sala-estar-mesa-sofa-accesorios-creativos_741910-16017.jpg", type: "alquiler" },
        { id: 3, title: "Terreno en la playa", price: "$100,000", image: "/img/concepto-playa-quitasol_23-2147796212.jpg", type: "venta" },
        { id: 4, title: "Oficina ejecutiva", price: "$2,000/mes", image: "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", type: "alquiler" },
        { id: 5, title: "Casa de campo", price: "$180,000", image: "/img/pareja-caminando-cabina_23-2147833123.jpg", type: "venta" },
        { id: 6, title: "Condominio de lujo", price: "$500,000", image: "/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", type: "proyecto" }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones", icon: "fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales", icon: "fa-calculator" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler", icon: "fa-key" }
    ];

    const instagramPosts = [
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE1/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE2/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE3/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE4/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE5/' }
    ];

    // Inicializar el slider de promociones
    const promoSlider = document.querySelector('.promo-slider');
    promoItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        promoSlider.appendChild(div);
    });
    
    if (typeof $.fn.slick === 'function') {
        $('.promo-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false
        });
    }

    // Inicializar el slider del hero
    const heroSlider = document.querySelector('.hero-slider');
    heroImages.forEach(image => {
        const div = document.createElement('div');
        div.className = 'w-full h-full';
        div.innerHTML = `<img src="${image}" alt="Hero image" class="w-full h-full object-cover">`;
        heroSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            speed: 1000
        });
    }

    // Función para crear el botón de WhatsApp
    function createWhatsAppButton(property) {
        const message = encodeURIComponent(`Hola, estoy interesado en la propiedad "${property.title}" con precio ${property.price}. ¿Podrían darme más información?`);
        return `<a href="https://wa.me/1234567890?text=${message}" class="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp mr-2"></i>Consultar por WhatsApp
        </a>`;
    }

    // Inicializar el slider de propiedades destacadas
    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 mb-2">${property.price}</p>
                ${createWhatsAppButton(property)}
            </div>
        `;
        propertySlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.property-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    // Renderizar las tarjetas de servicios
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md';
        div.innerHTML = `
            <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceGrid.appendChild(div);
    });

    // Inicializar el slider de la tienda
    const storeSlider = document.getElementById('store-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.dataset.type = property.type;
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 mb-2">${property.price}</p>
                ${createWhatsAppButton(property)}
                <button class="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
            </div>
        `;
        storeSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('#store-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    // Filtrado de propiedades
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const propertyCards = document.querySelectorAll('.property-card');
            propertyCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            if (typeof $.fn.slick === 'function') {
                $('#store-slider').slick('setPosition');
            }
        });
    });

    // Modal de galería
    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.dataset.id;
            openGallery(propertyId);
        });
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('gallery-modal').classList.add('hidden');
        document.getElementById('gallery-modal').classList.remove('flex');
    });

    function openGallery(propertyId) {
        const galleryImagesUrls = [
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300"
        ];

        const galleryImages = document.getElementById('gallery-images');
        galleryImages.innerHTML = '';
        galleryImagesUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.className = 'w-full h-auto';
            galleryImages.appendChild(img);
        });

        document.getElementById('gallery-modal').classList.remove('hidden');
        document.getElementById('gallery-modal').classList.add('flex');
    }

    // Formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        this.reset();
    });

    // Instalación de la PWA
    let deferredPrompt;
    const installButton = document.getElementById('install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
    });

    installButton.addEventListener('click', async function() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        }
    });

    // Inicializar el slider de Instagram
    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'instagram-item';
        div.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${post.url}" data-instgrm-version="14">
                <div style="padding:16px;">
                    <a href="${post.url}" target="_blank">Ver esta publicación en Instagram</a>
                </div>
            </blockquote>
        `;
        instagramSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('#instagram-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    // Cargar el script de Instagram
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//www.instagram.com/embed.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'instagram-embed-sdk'));

    // Hacer el menú inferior responsivo
    function adjustBottomNav() {
        const bottomNav = document.querySelector('nav.fixed.bottom-0');
        if (window.innerWidth < 640) {
            bottomNav.classList.add('text-xs');
            bottomNav.querySelectorAll('i').forEach(icon => {
                icon.classList.remove('mb-1');
                icon.classList.add('text-lg');
            });
            bottomNav.querySelectorAll('span').forEach(span => {
                span.classList.add('hidden');
            });
        } else {
            bottomNav.classList.remove('text-xs');
            bottomNav.querySelectorAll('i').forEach(icon => {
                icon.classList.add('mb-1');
                icon.classList.remove('text-lg');
            });
            bottomNav.querySelectorAll('span').forEach(span => {
                span.classList.remove('hidden');
            });
        }
    }

    adjustBottomNav();
    window.addEventListener('resize', adjustBottomNav);

    // AI Chat
    const openChatButton = document.getElementById('open-chat');
    const aiChat =  document.getElementById('ai-chat');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendMessageButton = document.getElementById('send-message');

    openChatButton.addEventListener('click', () => {
        aiChat.classList.toggle('hidden');
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
            // Aquí iría la lógica para enviar el mensaje a la IA y recibir una respuesta
            // Por ahora, simularemos una respuesta después de un breve retraso
            setTimeout(() => {
                const aiResponse = getAIResponse(message);
                addMessageToChat('IA', aiResponse);
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

    function getAIResponse(message) {
        // Aquí iría la lógica real para obtener una respuesta de la IA
        // Por ahora, usaremos respuestas predefinidas basadas en palabras clave
        const lowercaseMessage = message.toLowerCase();
        if (lowercaseMessage.includes('precio') || lowercaseMessage.includes('costo')) {
            return "Los precios de nuestras propiedades varían según la ubicación y características. ¿Hay alguna propiedad específica que te interese?";
        } else if (lowercaseMessage.includes('ubicación') || lowercaseMessage.includes('zona')) {
            return "Tenemos propiedades en diversas zonas de la ciudad. ¿Tienes alguna preferencia de ubicación?";
        } else if (lowercaseMessage.includes('visita') || lowercaseMessage.includes('ver')) {
            return "¡Claro! Podemos programar una visita a la propiedad que te interese. ¿Qué día te vendría bien?";
        } else {
            return "Gracias por tu interés. ¿Puedes ser más específico sobre qué información necesitas? Estaré encantado de ayudarte.";
        }
    }
});

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}