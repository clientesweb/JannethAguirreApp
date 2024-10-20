document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "/img/casa-moderna-encantadora-villa-3d-render_1015255-30058.jpg",
        "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg",
        "/img/paisaje-analogico-ciudad-edificios_23-2149661457.jpg"
    ];

    const properties = [
        { 
            id: 1, 
            title: "Depart. en venta – Orlando Florida – Condo Hotel", 
            price: "Consultar", 
            image: "/img/orlandoflorida.jpg", 
            type: "venta",
            description: "Proyecto en pre-construcción con 6 torres y 378 apartamentos, ofrecemos crédito hipotecario para inversionistas latinoamericanos. El Sycamore Club,  es un proyecto de apartamentos de lujo en Orlando, Florida, ubicado a 10 minutos de Disney World y Universal Studios.",
            gallery: [
                "/img/orlandoflorida.jpg",
                "/img/orlandoflorida2.jpg",
                "/img/orlandoflorida3.jpg"
            ]
        },
        { 
            id: 2, 
            title: "Departamento en venta – Samborondón", 
            price: "$250,000", 
            image: "/img/samborondon.jpg", 
            type: "venta",
            description: "Hermoso departamento en Samborondón, con vista al río. 3 dormitorios, 2 baños, sala, comedor, cocina y área de lavandería.",
            gallery: [
                "/img/samborondon.jpg",
                "/img/samborondon2.jpg",
                "/img/samborondon3.jpg"
            ]
        },
        { 
            id: 3, 
            title: "Casa en venta – Guayaquil", 
            price: "$180,000", 
            image: "/img/guayaquil.jpg", 
            type: "venta",
            description: "Casa de dos plantas en Guayaquil, con 4 dormitorios, 3 baños, sala, comedor, cocina, patio y garaje para 2 vehículos.",
            gallery: [
                "/img/guayaquil.jpg",
                "/img/guayaquil2.jpg",
                "/img/guayaquil3.jpg"
            ]
        },
        { 
            id: 4, 
            title: "Departamento en alquiler – Quito", 
            price: "$800/mes", 
            image: "/img/quito.jpg", 
            type: "alquiler",
            description: "Moderno departamento en el centro de Quito, amoblado, con 2 dormitorios, 1 baño, sala, comedor y cocina.",
            gallery: [
                "/img/quito.jpg",
                "/img/quito2.jpg",
                "/img/quito3.jpg"
            ]
        },
        { 
            id: 5, 
            title: "Casa en alquiler – Cuenca", 
            price: "$1,000/mes", 
            image: "/img/cuenca.jpg", 
            type: "alquiler",
            description: "Hermosa casa en Cuenca, con 3 dormitorios, 2.5 baños, sala, comedor, cocina, jardín y garaje.",
            gallery: [
                "/img/cuenca.jpg",
                "/img/cuenca2.jpg",
                "/img/cuenca3.jpg"
            ]
        },
        { 
            id: 6, 
            title: "Terreno en venta – Manta", 
            price: "$120,000", 
            image: "/img/manta.jpg", 
            type: "venta",
            description: "Amplio terreno en Manta, ideal para desarrollo residencial o comercial. 1000 m2 con todos los servicios básicos.",
            gallery: [
                "/img/manta.jpg",
                "/img/manta2.jpg",
                "/img/manta3.jpg"
            ]
        },
        { 
            id: 7, 
            title: "Oficina en alquiler – Guayaquil", 
            price: "$1,500/mes", 
            image: "/img/oficina_guayaquil.jpg", 
            type: "alquiler",
            description: "Moderna oficina en el centro empresarial de Guayaquil. 100 m2, totalmente equipada y con excelente ubicación.",
            gallery: [
                "/img/oficina_guayaquil.jpg",
                "/img/oficina_guayaquil2.jpg",
                "/img/oficina_guayaquil3.jpg"
            ]
        }
    ];

    const services = [
        { title: "Compra y Venta", icon: "fas fa-home", description: "Asesoramiento experto en la compra y venta de propiedades." },
        { title: "Alquiler", icon: "fas fa-key", description: "Gestión de alquileres a corto y largo plazo." },
        { title: "Inversiones", icon: "fas fa-chart-line", description: "Oportunidades de inversión en bienes raíces." },
        { title: "Tasaciones", icon: "fas fa-calculator", description: "Valoración profesional de propiedades." },
        { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal en transacciones inmobiliarias." },
        { title: "Remodelaciones", icon: "fas fa-hammer", description: "Servicios de remodelación y mejora de propiedades." }
    ];

    const testimonials = [
        { name: "Juan Pérez", text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre." },
        { name: "María González", text: "Profesionalismo y dedicación en cada paso del proceso de compra." },
        { name: "Carlos Rodríguez", text: "La mejor experiencia en venta de propiedades. Altamente recomendado." }
    ];

    const instagramPosts = [
        { image: "/img/instagram1.jpg", link: "#" },
        { image: "/img/instagram2.jpg", link: "#" },
        { image: "/img/instagram3.jpg", link: "#" },
        { image: "/img/instagram4.jpg", link: "#" }
    ];

    const faqs = [
        { 
            question: "¿Cuál es el proceso para comprar una propiedad?", 
            answer: "El proceso generalmente incluye: búsqueda de la propiedad, negociación del precio, firma de un contrato de compraventa, obtención de financiamiento si es necesario, y cierre de la transacción. Nuestro equipo le guiará en cada paso." 
        },
        { 
            question: "¿Qué documentos necesito para vender mi propiedad?", 
            answer: "Generalmente necesitará: título de propiedad, certificado de gravámenes, pago de impuestos al día, y cédula de identidad. Podemos ayudarle a reunir toda la documentación necesaria." 
        },
        { 
            question: "¿Cómo determino el precio de venta de mi propiedad?", 
            answer: "El precio se determina considerando factores como la ubicación, tamaño, condición de la propiedad, y precios de propiedades similares en la zona. Ofrecemos servicios de tasación profesional para ayudarle a determinar un precio justo." 
        },
        { 
            question: "¿Cuánto tiempo toma vender una propiedad?", 
            answer: "El tiempo de venta puede variar dependiendo de factores como la ubicación, el precio, y las condiciones del mercado. En promedio, puede tomar entre 3 a 6 meses, pero algunas propiedades se venden más rápido." 
        },
        { 
            question: "¿Qué servicios ofrecen para propietarios que quieren alquilar?", 
            answer: "Ofrecemos servicios completos de gestión de alquileres, incluyendo: búsqueda de inquilinos, verificación de antecedentes, preparación de contratos, cobro de alquileres, y mantenimiento de la propiedad." 
        }
    ];

    // Inicialización de componentes
    initSliders();
    renderServices();
    initFeaturedProperties();
    initGallery();
    initTestimonials();
    initInstagram();
    initFAQs();
    initContactForm();
    initScrollEffects();
    initPWA();
    initChatbot();
    initYouTubeVideos();
    initPropertyStore();

    function initSliders() {
        // Hero slider
        if ($('.hero-slider').length) {
            $('.hero-slider').html(heroImages.map(img => `<div style="background-image: url('${img}')"></div>`).join(''));
            $('.hero-slider').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                dots: true,
                fade: true,
                cssEase: 'linear'
            });
        }
    }

    function renderServices() {
        const serviceGrid = document.getElementById('service-grid');
        if (serviceGrid) {
            serviceGrid.innerHTML = services.map(service => `
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <i class="${service.icon} text-4xl text-primary mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            `).join('');
        }
    }

    function initFeaturedProperties() {
        const featuredContainer = document.querySelector('#propiedades .grid');
        if (featuredContainer) {
            featuredContainer.innerHTML = properties.map(property => `
                <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                        <p class="text-gray-700">${property.price}</p>
                        <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
                    </div>
                </div>
            `).join('');
        }
    }

    function initGallery() {
        const modal = document.getElementById('gallery-modal');
        const closeModal = document.getElementById('close-modal');
        const galleryImages = document.getElementById('gallery-images');
        const galleryInfo = document.getElementById('gallery-info');
        const fullImageContainer = document.getElementById('full-image-container');
        const fullImage = document.getElementById('full-image');
        const prevImage = document.getElementById('prev-image');
        const nextImage = document.getElementById('next-image');

        let currentProperty = null;
        let currentImageIndex = 0;

        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-gallery')) {
                const propertyId = parseInt(e.target.getAttribute('data-id'));
                currentProperty = properties.find(p => p.id === propertyId);
                if (currentProperty) {
                    openGallery(currentProperty);
                }
            }
        });

        function openGallery(property) {
            galleryImages.innerHTML = property.gallery.map((img, index) => `
                <img src="${img}" alt="${property.title}" onclick="showFullImage(${index})">
            `).join('');
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                <p class="mb-2">${property.price}</p>
                <p>${property.description}</p>
            `;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        window.showFullImage = function(index) {
            currentImageIndex = index;
            fullImage.src = currentProperty.gallery[index];
            fullImageContainer.style.display = 'flex';
        }

        fullImageContainer.addEventListener('click', function(e) {
            if (e.target === fullImageContainer) {
                fullImageContainer.style.display = 'none';
            }
        });

        prevImage.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + currentProperty.gallery.length) % currentProperty.gallery.length;
            fullImage.src = currentProperty.gallery[currentImageIndex];
        });

        nextImage.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % currentProperty.gallery.length;
            fullImage.src = currentProperty.gallery[currentImageIndex];
        });
    }

    function initTestimonials() {
        const testimonialsSlider = document.getElementById('testimonials-slider');
        if (testimonialsSlider) {
            testimonialsSlider.innerHTML = testimonials.map(testimonial => `
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <p class="mb-4">"${testimonial.text}"</p>
                    <p class="font-bold">- ${testimonial.name}</p>
                </div>
            `).join('');
            
            $(testimonialsSlider).slick({
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000
            });
        }
    }

    function initInstagram() {
        const instagramSlider = document.getElementById('instagram-slider');
        if (instagramSlider) {
            instagramSlider.innerHTML = instagramPosts.map(post => `
                <div>
                    <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${post.image}" alt="Instagram post" class="w-full h-64 object-cover rounded-lg">
                    </a>
                </div>
            `).join('');
            
            $(instagramSlider).slick({
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint:  1024,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
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
    }

    function initFAQs() {
        const faqContainer = document.getElementById('faq-container');
        if (faqContainer) {
            faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(${index})">
                        ${faq.question}
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        ${faq.answer}
                    </div>
                </div>
            `).join('');
        }
    }

    window.toggleFAQ = function(index) {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems[index].classList.toggle('active');
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.setAttribute('action', 'https://formspree.io/f/your_formspree_id');
            form.setAttribute('method', 'POST');
        }
    }

    function initScrollEffects() {
        const fadeElems = document.querySelectorAll('.fade-in-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        });

        fadeElems.forEach(elem => observer.observe(elem));

        // Botón "Volver arriba"
        const backToTopButton = document.getElementById("back-to-top");
        
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.onclick = function() {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
        };
    }

    function initPWA() {
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
        });

        window.addEventListener('appinstalled', () => {
            console.log('PWA was installed');
        });
    }

    function initChatbot() {
        const chatbotContainer = document.getElementById('ai-real-estate-expert-chatbot');
        if (chatbotContainer) {
            chatbotContainer.innerHTML = `
                <button id="open-chatbot" class="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl">
                    <i class="fas fa-comments"></i>
                </button>
                <div id="chatbot-window" class="hidden fixed bottom-28 right-4 bg-white rounded-lg shadow-lg p-4 w-80">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-bold">Chatbot Inmobiliario</h3>
                        <button id="close-chatbot" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div id="chatbot-messages" class="h-60 overflow-y-auto mb-4"></div>
                    <form id="chatbot-form" class="flex">
                        <input type="text" id="chatbot-input" class="flex-grow border rounded-l px-2 py-1" placeholder="Escribe tu pregunta...">
                        <button type="submit" class="bg-primary text-white px-4 py-1 rounded-r">Enviar</button>
                    </form>
                </div>
            `;

            const openButton = document.getElementById('open-chatbot');
            const closeButton = document.getElementById('close-chatbot');
            const chatbotWindow = document.getElementById('chatbot-window');

            openButton.addEventListener('click', () => {
                chatbotWindow.classList.remove('hidden');
                openButton.classList.add('hidden');
            });

            closeButton.addEventListener('click', () => {
                chatbotWindow.classList.add('hidden');
                openButton.classList.remove('hidden');
            });

            const chatbotForm = document.getElementById('chatbot-form');
            const chatbotInput = document.getElementById('chatbot-input');
            const chatbotMessages = document.getElementById('chatbot-messages');

            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = chatbotInput.value.trim();
                if (message) {
                    addMessage('user', message);
                    chatbotInput.value = '';
                    // Aquí iría la lógica para procesar la pregunta y obtener una respuesta
                    setTimeout(() => {
                        addMessage('bot', 'Lo siento, aún estoy aprendiendo. Por favor, contacta con un agente para obtener información más precisa.');
                    }, 1000);
                }
            });

            function addMessage(sender, text) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('mb-2', 'p-2', 'rounded', sender === 'user' ? 'bg-primary' : 'bg-gray-200', sender === 'user' ? 'text-white' : 'text-gray-800', sender === 'user' ? 'ml-auto' : 'mr-auto');
                messageElement.style.maxWidth = '80%';
                messageElement.textContent = text;
                chatbotMessages.appendChild(messageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }
    }


    function initYouTubeVideos() {
        const youtubeContainer = document.getElementById('youtube-slider');
        if (youtubeContainer) {
            // Configuración de la API de YouTube
            const API_KEY = 'TU_API_KEY_DE_YOUTUBE';
            const CHANNEL_ID = 'TU_ID_DE_CANAL_DE_YOUTUBE';
            const MAX_RESULTS = 5;

            // Hacer la solicitud a la API de YouTube
            fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`)
                .then(response => response.json())
                .then(data => {
                    const videos = data.items;
                    youtubeContainer.innerHTML = `
                        <div class="flex overflow-x-auto space-x-4 pb-4">
                            ${videos.map(video => `
                                <div class="flex-shrink-0 w-80">
                                    <iframe width="320" height="180" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                    <h3 class="text-lg font-semibold mt-2">${video.snippet.title}</h3>
                                </div>
                            `).join('')}
                        </div>
                    `;
                })
                .catch(error => console.error('Error fetching YouTube videos:', error));
        }
    }


    function initPropertyStore() {
        const storeSlider = document.getElementById('store-slider');
        const searchInput = document.getElementById('search-input');
        const filterButtons = document.getElementById('filter-buttons');

        if (storeSlider && searchInput && filterButtons) {
            // Renderizar todas las propiedades inicialmente
            renderProperties(properties);

            // Agregar botones de filtro
            filterButtons.innerHTML = `
                <button class="filter-btn active" data-type="all">Todos</button>
                <button class="filter-btn" data-type="venta">Venta</button>
                <button class="filter-btn" data-type="alquiler">Alquiler</button>
            `;

            // Evento de búsqueda
            searchInput.addEventListener('input', filterProperties);

            // Evento de filtrado
            filterButtons.addEventListener('click', (e) => {
                if (e.target.classList.contains('filter-btn')) {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    filterProperties();
                }
            });

            function renderProperties(propertiesToRender) {
                storeSlider.innerHTML = propertiesToRender.map(property => `
                    <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-64 mx-2" data-type="${property.type}">
                        <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                            <p class="text-gray-700">${property.price}</p>
                            <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
                        </div>
                    </div>
                `).join('');

                // Inicializar o actualizar el slider
                if ($('#store-slider').hasClass('slick-initialized')) {
                    $('#store-slider').slick('unslick');
                }
                $('#store-slider').slick({
                    dots: false,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }

            function filterProperties() {
                const searchTerm = searchInput.value.toLowerCase();
                const activeFilter = document.querySelector('.filter-btn.active').dataset.type;

                const filteredProperties = properties.filter(property => {
                    const matchesSearch = property.title.toLowerCase().includes(searchTerm) || 
                                          property.description.toLowerCase().includes(searchTerm);
                    const matchesType = activeFilter === 'all' || property.type === activeFilter;
                    return matchesSearch && matchesType;
                });

                renderProperties(filteredProperties);
            }
        }
    }
});