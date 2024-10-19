document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const promoItems = [
        "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
        "Nueva propiedad disponible en el centro de Quito",
        "¡Financiamiento disponible! Consulta nuestras opciones",
        "Descubre nuestras propiedades de lujo en la costa ecuatoriana"
    ];

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
            description: "Proyecto en pre-construcción con 6 torres y 378 apartamentos, ofrecemos crédito hipotecario para inversionistas latinoamericanos. El Sycamore Club, con 3 pisos, cuenta con gastronomía, deportes, recreación, club de niños, espacio para eventos, gimnasio, spa y salón de belleza. Estrategia exclusiva de alquiler con alto porcentaje de rentabilidad.",
            images: ["/img/orlando1.jpg", "/img/orlando3.jpg", "/img/orlando10.png", "/img/orlando6.png", "/img/orlando7.jpeg", "/img/orlando8.png", "/img/orlando9.png", "/img/orlandoflorida8.jpg", "/img/orlandoflorida9.jpg", "/img/orlandoflorida10.jpg"]
        },
        { 
            id: 2, 
            title: "Departamento vista al rio – Via Samborondon", 
            price: "Consultar", 
            image: "/img/departamentos.jpg", 
            type: "alquiler",
            description: "Últimas unidades disponibles de 2 y 3 habitaciones con balcones, master y áreas sociales con vista al río. Incluyen dormitorio secundario completo, sala, comedor, cocina tipo americana, lavandería, parqueo, piscina, pérgola y malecón. Trabajamos con todas las instituciones financieras y gestionamos su crédito hipotecario. Crédito directo disponible, consulte nuestras opciones de financiamiento.",
            images: ["/img/i1.jpeg", "/img/i2-768x1024.jpeg", "/img/i3.jpeg", "/img/i4-1024x576.jpeg", "/img/i5-1024x682.jpeg", "/img/i6.jpeg", "/img/departamentos7.jpg", "/img/departamentos8.jpg", "/img/departamentos9.jpg", "/img/departamentos10.jpg"]
        },
        { 
            id: 3, 
            title: "Locales comerciales y oficinas – Via Samborondon", 
            price: "Consultar", 
            image: "/img/locales.jpg", 
            type: "venta",
            description: "Proyecto en pre-construcción, estratégicamente ubicado en el nuevo Samborondón, cerca de centros comerciales, iglesias, clínicas, escuelas, universidades, restaurantes y el Parque Bicentenario. Venta directa con plusvalía garantizada por el alto movimiento del sector. Ofrecemos crédito directo a 16 meses sin intereses y apoyo en la gestión de crédito bancario. Al ser un proyecto en planos, facilita la organización financiera. Cuenta con ascensor, excelente precio y ubicación, y oficina de administración.",
            images: ["/img/locales1.jpg", "/img/locales2.jpg", "/img/locales3.jpeg", "/img/locales4.jpg", "/img/localea5.jpg", "/img/locales6.jpg", "/img/locales7.jpg", "/img/locales8.jpg", "/img/locales9.jpg", "/img/locales10.jpg"]
        },
        { 
            id: 4, 
            title: "Oficina ejecutiva en Quito", 
            price: "$2,200/mes", 
            image: "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", 
            type: "alquiler",
            description: "Oficina ejecutiva de lujo en el corazón financiero de Quito. Este espacio de trabajo premium ofrece un ambiente profesional y sofisticado, ideal para empresas que buscan proyectar una imagen de éxito. Con vistas impresionantes de la ciudad, la oficina cuenta con tecnología de punta, salas de conferencias equipadas y áreas comunes elegantes. Ubicada en un edificio de prestigio con seguridad 24/7, esta oficina proporciona el entorno perfecto para impulsar su negocio al siguiente nivel.",
            images: ["/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", "/img/oficina2.jpg", "/img/oficina3.jpg", "/img/oficina4.jpg", "/img/oficina5.jpg", "/img/oficina6.jpg", "/img/oficina7.jpg", "/img/oficina8.jpg", "/img/oficina9.jpg", "/img/oficina10.jpg"]
        }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones inmobiliarias", icon: "fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales de bienes raíces", icon: "fa-calculator" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler de manera eficiente", icon: "fa-key" }
    ];

    const testimonials = [
        { id: 1, name: "Juan Pérez", text: "Janneth Aguirre me ayudó a encontrar la casa de mis sueños. Su profesionalismo y dedicación son incomparables.", image: "img/juan.png" },
        { id: 2, name: "María González", text: "Gracias a Janneth, vender mi propiedad fue un proceso rápido y sin complicaciones. ¡Altamente recomendada!", image: "img/Maria.png" },
        { id: 3, name: "Carlos Rodríguez", text: "La atención al cliente de Janneth Aguirre es excepcional. Siempre está disponible para responder preguntas y ofrecer asesoramiento.", image: "img/carlos.png" }
    ];

    const instagramPosts = [
        { type: 'post', url: 'https://www.instagram.com/p/DBJS7yhM4_P/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/DA08gfysclf/' },
        { type: 'post', url: 'https://www.instagram.com/p/DApTvIhBidr/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE4/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE5/' }
    ];

    const faqs = [
        {
            question: "¿Cómo puedo comenzar a buscar una propiedad?",
            answer: "Puede comenzar explorando nuestro catálogo en línea o contactarnos directamente para una consulta personalizada."
        },
        {
            question: "¿Qué documentos necesito para comprar una propiedad?",
            answer: "Generalmente, necesitará una identificación válida, comprobantes de ingresos, declaraciones de impuestos y, en algunos casos, un historial crediticio. Nuestro equipo le guiará a través del proceso específico según su situación."
        },
        {
            question: "¿Ofrecen opciones de financiamiento?",
            answer: "Sí, trabajamos con varios bancos y entidades financieras para ofrecer opciones de financiamiento. Podemos ayudarle a encontrar la mejor opción según su situación financiera."
        },
        {
            question: "¿Cuánto tiempo toma normalmente el proceso de compra?",
            answer: "El tiempo puede variar dependiendo de varios factores, pero en general, el proceso puede tomar entre 30 y 90 días desde la oferta inicial hasta el cierre de la venta."
        },
        {
            question: "¿Qué servicios ofrecen para propietarios que quieren alquilar su propiedad?",
            answer: "Ofrecemos servicios completos de gestión de alquileres, incluyendo la búsqueda de inquilinos, mantenimiento de la propiedad, cobro de alquileres y manejo de problemas que puedan surgir."
        }
    ];

    // Constantes para YouTube
    const YOUTUBE_CHANNEL_ID = 'UCiahlQJxCgPY-tEfjvkab8g';
    const YOUTUBE_API_KEY = 'AIzaSyBPsHN1pv1ZCeRipAJL0CY50VD08uC4Q_Y';

    // Inicializar componentes
    initSliders();
    renderServices();
    initStore();
    initGallery();
    initTestimonials();
    initInstagram();
    initFAQs();
    initMap();
    initContactForm();
    initScrollEffects();
    initPWA();
    initChatbot();
    loadYouTubeVideos();

    function initSliders() {
        // Inicializar el slider de promociones
        if ($('.promo-slider').length) {
            $('.promo-slider').html(promoItems.map(item => `<div>${item}</div>`).join(''));
            $('.promo-slider').slick({
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: false
            });
        }

        // Inicializar el slider del hero
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

        // Renderizar propiedades destacadas
        const featuredProperties = document.querySelector('#propiedades .grid');
        if (featuredProperties) {
            featuredProperties.innerHTML = properties.slice(0, 4).map(property => `
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

    function renderServices() {
        const serviceGrid = document.getElementById('service-grid');
        if (serviceGrid) {
            serviceGrid.innerHTML = services.map(service => `
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
            `).join('');
        }
    }

    function initStore() {
        const storeSlider = document.getElementById('store-slider');
        if (storeSlider) {
            storeSlider.innerHTML = properties.map(property => `
                <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-64" data-type="${property.type}">
                    <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                        <p class="text-gray-700">${property.price}</p>
                        <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
                    </div>
                </div>
            `).join('');

            // Funcionalidad de filtrado
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    const cards = document.querySelectorAll('.property-card');
                    cards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-type') === filter) {
                            card.style.display = '';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Funcionalidad de búsqueda
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.addEventListener('input', () => {
                    const searchTerm = searchInput.value.toLowerCase();
                    const cards = document.querySelectorAll('.property-card');
                    cards.forEach(card => {
                        const title = card.querySelector('h3').textContent.toLowerCase();
                        if (title.includes(searchTerm)) {
                            card.style.display = '';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            }
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

        if (!modal || !closeModal || !galleryImages || !galleryInfo || !fullImageContainer || !fullImage || !prevImage || !nextImage) {
            console.error('Faltan elementos necesarios para la galería');
            return;
        }

        let currentPropertyId = null;
        let currentImageIndex = 0;

        document.querySelectorAll('.view-gallery, .view-details').forEach(button => {
            button.addEventListener('click', () => {
                const propertyId = button.getAttribute('data-id');
                const property = properties.find(p => p.id === parseInt(propertyId));
                
                if (!property) {
                    console.error('Propiedad no encontrada');
                    return;
                }

                currentPropertyId = property.id;
                currentImageIndex = 0;
                
                // Limpiar imágenes anteriores
                galleryImages.innerHTML = '';
                
                // Agregar imágenes a la galería
                property.images.forEach((image, index) => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = `${property.title} - Imagen ${index + 1}`;
                    img.className = 'w-24 h-24 object-cover rounded cursor-pointer';
                    img.addEventListener('click', () => showFullImage(index));
                    galleryImages.appendChild(img);
                });
                
                // Actualizar información de la propiedad
                galleryInfo.innerHTML = `
                    <h3 class="text-xl font-bold">${property.title}</h3>
                    <p class="text-lg">${property.price}</p>
                    <p>Tipo: ${property.type}</p>
                    <p class="mt-2">${property.description}</p>
                `;
                
                modal.classList.remove('hidden');
                
                modal.classList.add('flex');
            });
        });

        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        // Cerrar el modal si se hace clic fuera de él
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });

        function showFullImage(index) {
            const property = properties.find(p => p.id === currentPropertyId);
            if (!property) return;
            currentImageIndex = index;
            fullImage.src = property.images[index];
            fullImage.alt = `${property.title} - Imagen ${index + 1}`;
            fullImageContainer.style.display = 'flex';
        }

        prevImage.addEventListener('click', () => {
            const property = properties.find(p => p.id === currentPropertyId);
            if (!property) return;
            currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
            showFullImage(currentImageIndex);
        });

        nextImage.addEventListener('click', () => {
            const property = properties.find(p => p.id === currentPropertyId);
            if (!property) return;
            currentImageIndex = (currentImageIndex + 1) % property.images.length;
            showFullImage(currentImageIndex);
        });

        fullImageContainer.addEventListener('click', (e) => {
            if (e.target === fullImageContainer) {
                fullImageContainer.style.display = 'none';
            }
        });
    }

    function initTestimonials() {
        const testimonialsSlider = document.getElementById('testimonials-slider');
        if (testimonialsSlider) {
            testimonialsSlider.innerHTML = testimonials.map(testimonial => `
                <div class="bg-white p-6 rounded-lg shadow-md mx-2">
                    <div class="flex items-center mb-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                        <h3 class="font-bold">${testimonial.name}</h3>
                    </div>
                    <p class="text-gray-600">"${testimonial.text}"</p>
                </div>
            `).join('');

            $(testimonialsSlider).slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                dots: true,
                responsive: [
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

    function initInstagram() {
        const instagramSlider = document.getElementById('instagram-slider');
        if (instagramSlider) {
            instagramSlider.innerHTML = instagramPosts.map(post => `
                <div class="instagram-post mx-2">
                    <blockquote class="instagram-media" data-instgrm-permalink="${post.url}" data-instgrm-version="14">
                        <a href="${post.url}" target="_blank">Ver publicación en Instagram</a>
                    </blockquote>
                </div>
            `).join('');

            // Cargar el script de Instagram
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            // Inicializar el slider de Instagram
            $(instagramSlider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
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
    }

    function initFAQs() {
        const faqContainer = document.getElementById('faq-container');
        if (faqContainer) {
            faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="faq-item mb-4">
                    <button class="faq-question w-full text-left font-semibold py-2 px-4 bg-gray-100 rounded-t-lg" data-index="${index}">
                        ${faq.question}
                        <i class="fas fa-chevron-down float-right"></i>
                    </button>
                    <div class="faq-answer hidden p-4 bg-white border border-gray-200 rounded-b-lg">
                        ${faq.answer}
                    </div>
                </div>
            `).join('');

            // Agregar funcionalidad de acordeón
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('i');
                    answer.classList.toggle('hidden');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });
        }
    }

    function initMap() {
        const mapContainer = document.getElementById('map-container');
        if (mapContainer && typeof google !== 'undefined' && google.maps) {
            const lat = -2.1894128; // Reemplaza con la latitud correcta
            const lng = -79.8890662; // Reemplaza con la longitud correcta

            const map = new google.maps.Map(mapContainer, {
                center: { lat, lng },
                zoom: 15
            });

            new google.maps.Marker({
                position: { lat, lng },
                map: map,
                title: 'Janneth Aguirre Bienes Raíces'
            });
        } else {
            console.error('El contenedor del mapa no existe o la API de Google Maps no está cargada');
        }
    }

    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                try {
                    const response = await fetch('/api/contact', {
                        method: 'POST',
                        body: formData
                    });
                    if (response.ok) {
                        alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
                        form.reset();
                    } else {
                        throw new Error('Error al enviar el mensaje');
                    }
                } catch (error) {
                    alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                    console.error('Error:', error);
                }
            });
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
        }, { threshold: 0.1 });

        fadeElems.forEach(elem => observer.observe(elem));

        // Botón "Volver arriba"
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function initPWA() {
        const installButton = document.getElementById('install-app');
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (installButton) {
                installButton.style.display = 'block';
            }
        });

        if (installButton) {
            installButton.addEventListener('click', () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('Usuario aceptó la instalación de la PWA');
                        }
                        deferredPrompt = null;
                    });
                }
            });
        }
    }

    function initChatbot() {
        const chatbotContainer = document.getElementById('ai-real-estate-expert-chatbot');
        if (chatbotContainer && typeof Chatbot !== 'undefined') {
            const chatbot = new Chatbot({
                container: chatbotContainer,
                apiEndpoint: '/api/chatbot',
                suggestedQueries: [
                    '¿Cuáles son los mejores barrios para invertir?',
                    '¿Cómo puedo financiar una propiedad?',
                    '¿Qué documentos necesito para comprar una casa?'
                ]
            });
            chatbot.init();
        } else {
            console.error('El contenedor del chatbot no existe o la clase Chatbot no está definida');
        }
    }

    async function loadYouTubeVideos() {
        const youtubeSlider = document.getElementById('youtube-slider');
        if (!youtubeSlider) {
            console.error('El contenedor del slider de YouTube no existe');
            return;
        }

        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`);
            const data = await response.json();
            
            youtubeSlider.innerHTML = data.items
                .filter(item => item.id.kind === 'youtube#video')
                .map(item => `
                    <div class="youtube-video">
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <h3 class="text-lg font-semibold mt-2">${item.snippet.title}</h3>
                    </div>
                `).join('');

            // Inicializar el slider de YouTube
            $(youtubeSlider).slick({
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
        } catch (error) {
            console.error('Error al cargar videos de YouTube:', error);
        }
    }
});