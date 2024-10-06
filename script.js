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
    const propertySlider = document.querySelector('.property-slider');
    const properties = [
        { image: '/img/property1.jpg', title: 'Casa Moderna', price: '$250,000', bedrooms: 3, bathrooms: 2, area: '200m²' },
        { image: '/img/property2.jpg', title: 'Apartamento de Lujo', price: '$180,000', bedrooms: 2, bathrooms: 2, area: '120m²' },
        { image: '/img/property3.jpg', title: 'Casa de Campo', price: '$320,000', bedrooms: 4, bathrooms: 3, area: '300m²' },
        { image: '/img/property4.jpg', title: 'Penthouse', price: '$400,000', bedrooms: 3, bathrooms: 3, area: '250m²' }
    ];

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p class="price">${property.price}</p>
                <div class="property-details">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} hab</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} baños</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.area}</span>
                </div>
                <a href="#contacto" class="contact-button">Contactar</a>
            </div>
        `;
        propertySlider.appendChild(propertyCard);
    });

    // Services
    const serviceGrid = document.getElementById('service-grid');
    const services = [
        { icon: 'fas fa-home', title: 'Compra y Venta', description: 'Asesoría en compra y venta de propiedades' },
        { icon: 'fas fa-key', title: 'Alquiler', description: 'Gestión de alquileres y arrendamientos' },
        { icon: 'fas fa-chart-line', title: 'Inversiones', description: 'Asesoría en inversiones inmobiliarias' },
        { icon: 'fas fa-building', title: 'Administración', description: 'Administración de propiedades' },
        { icon: 'fas fa-search', title: 'Tasaciones', description: 'Tasaciones y valoraciones de inmuebles' },
        { icon: 'fas fa-file-contract', title: 'Legal', description: 'Asesoría legal inmobiliaria' }
    ];

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
    const storeSlider = document.getElementById('store-slider');
    const storeItems = [
        { image: '/img/store1.jpg', title: 'Casa Familiar', price: '$280,000', category: 'venta' },
        { image: '/img/store2.jpg', title: 'Apartamento Céntrico', price: '$1,200/mes', category: 'alquiler' },
        { image: '/img/store3.jpg', title: 'Terreno Urbano', price: '$150,000', category: 'venta' },
        { image: '/img/store4.jpg', title: 'Oficina Moderna', price: '$1,500/mes', category: 'alquiler' },
        { image: '/img/store5.jpg', title: 'Casa de Playa', price: '$350,000', category: 'venta' },
        { image: '/img/store6.jpg', title: 'Proyecto Residencial', price: 'Desde $200,000', category: 'proyecto' }
    ];

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
                <button class="view-gallery">Ver Galería</button>
            </div>
        `;
        storeSlider.appendChild(storeItem);
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            const items = storeSlider.querySelectorAll('.store-item');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery Modal
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const galleryImages = document.getElementById('gallery-images');

    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', () => {
            const storeItem = button.closest('.store-item');
            const mainImage = storeItem.querySelector('img').src;
            
            // Clear previous images
            galleryImages.innerHTML = '';
            
            // Add main image and some variations (you can replace these with actual gallery images)
            [mainImage, '/img/gallery1.jpg', '/img/gallery2.jpg', '/img/gallery3.jpg'].forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Gallery Image';
                img.className = 'w-1/2 p-2';
                galleryImages.appendChild(img);
            });
            
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Instagram Feed
    const instagramSlider = document.getElementById('instagram-slider');
    const instagramPosts = [
        { image: '/img/instagram1.jpg', likes: 120, comments: 15 },
        { image: '/img/instagram2.jpg', likes: 85, comments: 8 },
        { image: '/img/instagram3.jpg', likes: 200, comments: 25 },
        { image: '/img/instagram4.jpg', likes: 150, comments: 18 }
    ];

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

    // Initialize sliders
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

    $('#service-grid').slick({
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

    $('#store-slider').slick({
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

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // PWA Installation
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
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });

    
    // Chat Widget
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    console.log('Chat elements:', { chatToggle, chatContainer, chatClose, chatForm, chatInput, chatMessages });

    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            console.log('Chat toggle clicked');
            chatContainer.classList.toggle('hidden');
            if (!chatContainer.classList.contains('hidden')) {
                chatInput.focus();
            }
        });
    } else {
        console.error('Chat toggle button not found');
    }

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            console.log('Chat close clicked');
            chatContainer.classList.add('hidden');
        });
    } else {
        console.error('Chat close button not found');
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Chat form submitted');
            if (chatInput.value.trim() !== '') {
                addMessage('user', chatInput.value);
                processUserMessage(chatInput.value);
                chatInput.value = '';
            }
        });
    } else {
        console.error('Chat form not found');
    }

    function addMessage(sender, message) {
        console.log('Adding message:', { sender, message });
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processUserMessage(message) {
        console.log('Processing user message:', message);
        // Simular procesamiento de IA
        setTimeout(() => {
            let response;
            message = message.toLowerCase();

            if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas tardes')) {
                response = "¡Hola! Soy el asistente virtual de Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy con tus consultas inmobiliarias?";
            } else if (message.includes('comprar') || message.includes('vender')) {
                response = "Excelente, ¿estás interesado en comprar o vender una propiedad? Puedo ayudarte con información sobre el mercado actual y nuestros servicios. ¿Tienes alguna zona o tipo de propiedad en mente?";
            } else if (message.includes('alquilar') || message.includes('rentar')) {
                response = "Tenemos varias opciones de alquiler disponibles. ¿Buscas algo en particular, como un apartamento o una casa? ¿Tienes preferencias de ubicación o presupuesto?";
            } else if (message.includes('precio') || message.includes('costo')) {
                response = "Los precios varían según la ubicación y el tipo de propiedad. ¿Podrías darme más detalles sobre qué tipo de propiedad te interesa y en qué zona? Así podré proporcionarte información más precisa.";
            } else if (message.includes('cita') || message.includes('visita')) {
                response = "¡Claro! Estaré encantado de ayudarte a programar una cita para que veas algunas propiedades. ¿Qué días y horarios te vendrían mejor? También, ¿hay alguna propiedad específica que te gustaría visitar?";
            } else if (message.includes('gracias')) {
                response = "¡De nada! Ha sido un placer ayudarte. Si tienes más preguntas en el futuro sobre bienes raíces o nuestros servicios, no dudes en volver a contactarnos. ¡Que tengas un excelente día!";
            } else {
                response = "Gracias por tu mensaje. Para poder ayudarte mejor con tus necesidades inmobiliarias, ¿podrías darme más detalles sobre lo que estás buscando? Por ejemplo, ¿buscas comprar, vender, o alquilar? ¿Tienes alguna zona o tipo de propiedad en mente?";
            }

            addMessage('bot', response);
        }, 1000);
    }

    // Mensaje de bienvenida
    setTimeout(() => {
        addMessage('bot', '¡Hola! Soy el asistente virtual de Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy con tus consultas inmobiliarias?');
    }, 1000);
});