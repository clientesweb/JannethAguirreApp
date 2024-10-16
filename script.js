document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display = 'none';
    });

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
            price: "$120,000", 
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
        },
        { 
            id: 5, 
            title: "Casa de campo en Cuenca", 
            price: "$220,000", 
            image: "/img/pareja-caminando-cabina_23-2147833123.jpg", 
            type: "venta",
            description: "Encantadora casa de campo en las afueras de Cuenca. Perfecta para escapar de la ciudad. Esta propiedad única combina el encanto rústico con comodidades modernas, ofreciendo un refugio tranquilo rodeado de naturaleza. Con amplios espacios verdes, la casa cuenta con detalles arquitectónicos tradicionales y acabados de calidad. Disfrute de impresionantes vistas a las montañas, aire puro y la serenidad del campo, todo a poca distancia de las comodidades de la ciudad de Cuenca. Ideal para quienes buscan un estilo de vida relajado o una segunda residencia de ensueño.",
            images: ["/img/pareja-caminando-cabina_23-2147833123.jpg", "/img/casa-campo2.jpg", "/img/casa-campo3.jpg", "/img/casa-campo4.jpg", "/img/casa-campo5.jpg", "/img/casa-campo6.jpg", "/img/casa-campo7.jpg", "/img/casa-campo8.jpg", "/img/casa-campo9.jpg", "/img/casa-campo10.jpg"]
        },
        { 
            id: 6, 
            title: "Condominio de lujo en Manta", 
            price: "$450,000", 
            image: "/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", 
            type: "proyecto",
            description: "Proyecto de condominio de lujo frente al mar en Manta. Entrega en 2025. Este exclusivo desarrollo ofrece una oportunidad única de vivir el sueño de una vida frente al océano. Con un diseño vanguardista y amenidades de clase mundial, el condominio promete un estilo de vida de resort todo el año. Disfrute de espectaculares puestas de sol desde su balcón privado, relájese en la piscina infinity con vista al mar, y acceda directamente a una hermosa playa. Incluye gimnasio, spa, restaurantes y seguridad las 24 horas. Una inversión perfecta para aquellos que buscan lo mejor en vida costera.",
            images: ["/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", "/img/condominio2.jpg", "/img/condominio3.jpg", "/img/condominio4.jpg", "/img/condominio5.jpg", "/img/condominio6.jpg", "/img/condominio7.jpg", "/img/condominio8.jpg", "/img/condominio9.jpg", "/img/condominio10.jpg"]
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
            answer: "Generalmente, necesitará una identificación válida, comprobante de ingresos y, en algunos casos, un historial crediticio."
        },
        {
            question: "¿Ofrecen opciones de financiamiento?",
            answer: "Sí, trabajamos con varios bancos y entidades financieras para ofrecer opciones de financiamiento a nuestros clientes."
        },
        {
            question: "¿Cuánto tiempo toma normalmente el proceso de compra?",
            answer: "El proceso puede variar, pero generalmente toma entre 30 y 90 días desde la oferta inicial hasta el cierre."
        },
        {
            question: "¿Qué servicios post-venta ofrecen?",
            answer: "Ofrecemos asesoría legal, gestión de documentación y apoyo en trámites relacionados con la propiedad después de la compra."
        }
    ];

    // Constantes para YouTube
    const YOUTUBE_CHANNEL_ID = 'UCiahlQJxCgPY-tEfjvkab8g';
    const YOUTUBE_API_KEY = 'AIzaSyBPsHN1pv1ZCeRipAJL0CY50VD08uC4Q_Y';

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
        div.style.backgroundImage = `url(${image})`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.style.height = '100%';
        heroSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear'
        });
    }

    // Inicializar el slider de propiedades
    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden mx-2';
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700">${property.price}</p>
                <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
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

    // Renderizar las tarjetas de servicios
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md';
        div.innerHTML = `
            <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        `;
        serviceGrid.appendChild(div);
    });

    // Inicializar el slider de la tienda
    const storeSlider = document.getElementById('store-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-64';
        div.setAttribute('data-type', property.type);
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700">${property.price}</p>
                <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
            </div>
        `;
        storeSlider.appendChild(div);
    });

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

    // Funcionalidad de galería modal
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const galleryImages = document.getElementById('gallery-images');
    const galleryInfo = document.getElementById('gallery-info');
    const fullImageContainer = document.getElementById('full-image-container');
    const fullImage = document.getElementById('full-image');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');

    let currentPropertyId = null;
    let currentImageIndex = 0;

    document.querySelectorAll('.view-gallery, .view-details').forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            const property = properties.find(p => p.id === parseInt(propertyId));
            
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
        currentImageIndex = index;
        fullImage.src = property.images[index];
        fullImage.alt = `${property.title} - Imagen ${index + 1}`;
        fullImageContainer.style.display = 'flex';
    }

    prevImage.addEventListener('click', () => {
        const property = properties.find(p => p.id === currentPropertyId);
        currentImageIndex = (currentImageIndex - 1 + property.images.length) % property.images.length;
        showFullImage(currentImageIndex);
    });

    nextImage.addEventListener('click', () => {
        const property = properties.find(p => p.id === currentPropertyId);
        currentImageIndex = (currentImageIndex + 1) % property.images.length;
        showFullImage(currentImageIndex);
    });

    fullImageContainer.addEventListener('click', (e) => {
        if (e.target === fullImageContainer) {
            fullImageContainer.style.display = 'none';
        }
    });

    // Inicializar el slider de testimonios
    const testimonialsSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md mx-2';
        div.innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                <h3 class="font-bold">${testimonial.name}</h3>
            </div>
            <p class="text-gray-600">"${testimonial.text}"</p>
        `;
        testimonialsSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.testimonials-slider').slick({
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

    // Inicializar el slider de Instagram
    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const div =  document.createElement('div');
        div.className = 'instagram-post mx-2';
        div.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${post.url}">
                <div style="padding:16px;">
                    <a href="${post.url}" target="_blank">Ver esta publicación en Instagram</a>
                </div>
            </blockquote>
        `;
        instagramSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.instagram-slider').slick({
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

    // Cargar el script de Instagram
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Inicializar el mapa
    const mapContainer = document.getElementById('map-container');
    const loadMap = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
        script.onload = () => {
            const map = new google.maps.Map(mapContainer, {
                center: { lat: parseFloat(mapContainer.dataset.lat), lng: parseFloat(mapContainer.dataset.lng) },
                zoom: 15
            });
            new google.maps.Marker({
                position: { lat: parseFloat(mapContainer.dataset.lat), lng: parseFloat(mapContainer.dataset.lng) },
                map: map,
                title: 'Janneth Aguirre Bienes Raíces'
            });
        };
        document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadMap();
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '100px' }
    );

    observer.observe(mapContainer);

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            console.error('Error:', error);
        }
    });

    // Efecto de aparición al hacer scroll
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => fadeObserver.observe(elem));

    // Botón "Volver arriba"
    const backToTopButton = document.getElementById('back-to-top');
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

    // Instalación de la PWA
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
            if (outcome === 'accepted') {
                console.log('Usuario aceptó la instalación de la PWA');
            }
            deferredPrompt = null;
        }
    });

    // Inicializar el chatbot
    initChatbot();

    // Cargar videos de YouTube
    async function loadYouTubeVideos() {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`);
            const data = await response.json();
            const youtubeSlider = document.getElementById('youtube-slider');
            
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.medium.url;
                
                const videoElement = document.createElement('div');
                videoElement.className = 'youtube-video';
                videoElement.innerHTML = `
                    <iframe width="280" height="157" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3 class="text-sm font-semibold mt-2">${title}</h3>
                `;
                
                youtubeSlider.appendChild(videoElement);
            });

            // Inicializar el slider de YouTube
            if (typeof $.fn.slick === 'function') {
                $('.youtube-slider').slick({
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
        } catch (error) {
            console.error('Error al cargar videos de YouTube:', error);
        }
    }

    loadYouTubeVideos();

    // Inicializar la sección de FAQs
    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${faq.question}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);

        const question = faqItem.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });
    });
});

// Función para inicializar el chatbot (definida en chatbot.js)
function initChatbot() {
    // La lógica del chatbot se implementará en chatbot.js
    console.log('Chatbot inicializado');
}