document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    ];

    const properties = [
        { 
            id: 1, 
            title: "DEPARTAMENTOS EN VENTA NUEVO SAMBORONDON", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "¡Oportunidad única! Hermoso departamento en la exclusiva zona de Nuevo Samborondón. Este espacioso hogar cuenta con 2 habitaciones, 2 baños modernos, cocina abierta, sala y comedor acogedores. Áreas sociales incluyen piscina, gimnasio y salón de eventos. Seguridad 24/7 con conserjería y vigilancia.",
            features: [
                "2 habitaciones con armarios empotrados",
                "2 baños modernos con acabados de alta calidad",
                "Cocina abierta con muebles a medida",
                "Sala y comedor acogedores",
                "Áreas sociales: piscina, gimnasio, salón de eventos",
                "Seguridad 24/7 con conserjería y vigilancia"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752547-33cce5195f64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752421-3ec9c3ec7dfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600566752734-2a0cd53b9f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 2, 
            title: "Casa de Lujo en Samborondón", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "Espectacular casa de lujo en el corazón de Samborondón. Amplios espacios, acabados de primera y vistas impresionantes.",
            gallery: [
                "https://images.unsplash.com/photo-1600607687644-c7f34e88598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687668-0b7b4bf7a00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687710-040798eea3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 3, 
            title: "Oficina Comercial en Centro Empresarial", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "alquiler",
            description: "Moderna oficina comercial en el principal centro empresarial de la ciudad. Ideal para empresas en crecimiento.",
            gallery: [
                "https://images.unsplash.com/photo-1600607687954-e85aa7b46ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687968-d7a205ad5e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687985-a6ad18e3c1d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 4, 
            title: "Penthouse con Vista al Mar", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "Exclusivo penthouse con impresionantes vistas al mar. Terraza privada, acabados de lujo y comodidades de primer nivel.",
            gallery: [
                "https://images.unsplash.com/photo-1600607688960-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688951-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688942-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 5, 
            title: "Terreno para Desarrollo Residencial", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607688930-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "Amplio terreno ideal para desarrollo residencial. Ubicación estratégica con todos los servicios disponibles.",
            gallery: [
                "https://images.unsplash.com/photo-1600607688921-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688912-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688903-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        }
    ];

    const services = [
        { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal completa en transacciones inmobiliarias." },
        { title: "Avalúo de Propiedades", icon: "fas fa-chart-line", description: "Valoración profesional y precisa de bienes inmuebles." },
        { title: "Asesoría Dentro y Fuera de Ecuador", icon: "fas fa-globe-americas", description: "Orientación experta en inversiones nacionales e internacionales." },
        { title: "Gestión de Proyectos", icon: "fas fa-tasks", description: "Administración integral de proyectos inmobiliarios." },
        { title: "Análisis de Mercado", icon: "fas fa-search-dollar", description: "Estudios detallados del mercado inmobiliario actual." },
        { title: "Gestión de Ventas", icon: "fas fa-handshake", description: "Estrategias efectivas para la venta de propiedades." },
        { title: "Venta de Proyectos en Planos", icon: "fas fa-drafting-compass", description: "Comercialización de proyectos inmobiliarios en fase de planificación." },
        { title: "Gestión de Alquileres", icon: "fas fa-home", description: "Administración completa de propiedades en alquiler." }
    ];

    const testimonials = [
        { name: "Juan Pérez", text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre." },
        { name: "María González", text: "Profesionalismo y dedicación en cada paso del proceso de compra." },
        { name: "Carlos Rodríguez", text: "La mejor experiencia en venta de propiedades. Altamente recomendado." }
    ];

    const instagramPosts = [
        { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" }
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
            answer: "El precio se determina considerando factores como la ubicación, tamaño, condición de la propiedad, y precios de propiedades similares en la zona. Ofrecemos servicios de tasación profesional para ayudarle a establecer un precio justo." 
        },
        { 
            question: "¿Cuánto tiempo toma vender una propiedad?", 
            answer: "El tiempo de venta puede variar dependiendo de factores como la ubicación, el precio, y las condiciones del mercado. En promedio, puede tomar entre 3 a 6 meses, pero algunas propiedades se venden más rápido." 
        },
        { 
            question: "¿Ofrecen servicios de administración de propiedades?", 
            answer: "Sí, ofrecemos servicios completos de administración de propiedades, incluyendo búsqueda de inquilinos, cobro de alquileres, mantenimiento y reparaciones." 
        }
    ];

    // Función para crear el slider de imágenes del hero
    function createHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
        heroImages.forEach(image => {
            const slide = document.createElement('div');
            slide.style.backgroundImage = `url(${image})`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
            heroSlider.appendChild(slide);
        });
        
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
        $('.quienes-somos-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Función para crear las tarjetas de propiedades  destacadas
    function createFeaturedProperties() {
        const propertiesSlider = document.querySelector('.propiedades-slider');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesSlider.appendChild(propertyCard);
        });
    }

    // Función para crear las tarjetas de propiedades en la sección "Nuestras Propiedades"
    function createPropertyCards() {
        const propertiesGrid = document.getElementById('properties-grid');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card flex-shrink-0';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesGrid.appendChild(propertyCard);
        });
    }

    // Función para crear las tarjetas de servicios
    function createServiceCards() {
        const serviceGrid = document.getElementById('service-grid');
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <i class="${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            `;
            serviceGrid.appendChild(serviceCard);
        });
    }

    // Función para crear el slider de testimonios
    function createTestimonialsSlider() {
        const testimonialsSlider = document.getElementById('testimonials-slider');
        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'bg-white p-6 rounded-lg shadow-md';
            slide.innerHTML = `
                <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                <p class="font-semibold">- ${testimonial.name}</p>
            `;
            testimonialsSlider.appendChild(slide);
        });
        
        $('#testimonials-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    // Función para crear el slider de Instagram
    function createInstagramSlider() {
        const instagramSlider = document.getElementById('instagram-slider');
        instagramPosts.forEach(post => {
            const slide = document.createElement('div');
            slide.className = 'px-2';
            slide.innerHTML = `
                <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${post.image}" alt="Instagram post" class="w-full h-64 object-cover rounded-lg">
                </a>
            `;
            instagramSlider.appendChild(slide);
        });
        
        $('#instagram-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
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

    // Función para crear las preguntas frecuentes
    function createFAQs() {
        const faqContainer = document.getElementById('faq-container');
        faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <div class="faq-question flex justify-between items-center cursor-pointer">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer mt-2 text-gray-600 hidden">
                    ${faq.answer}
                </div>
            `;
            faqContainer.appendChild(faqItem);

            // Añadir evento de clic para mostrar/ocultar la respuesta
            const question = faqItem.querySelector('.faq-question');
            question.addEventListener('click', () => {
                faqItem.classList.toggle('active');
                const answer = faqItem.querySelector('.faq-answer');
                answer.classList.toggle('hidden');
            });
        });
    }

    // Función para manejar el clic en "Ver Detalles"
    function handleViewDetails() {
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('view-details')) {
                const propertyId = parseInt(e.target.dataset.id);
                const property = properties.find(p => p.id === propertyId);
                showPropertyModal(property);
            }
        });
    }

    // Función para mostrar el modal de la propiedad
    function showPropertyModal(property) {
        const modal = document.getElementById('gallery-modal');
        const galleryImages = document.getElementById('gallery-images');
        const galleryInfo = document.getElementById('gallery-info');
        
        // Limpiar imágenes anteriores
        galleryImages.innerHTML = '';
        
        // Agregar nuevas imágenes
        property.gallery.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = property.title;
            img.className = 'w-1/3 p-2 cursor-pointer';
            img.addEventListener('click', () => showFullImage(image));
            galleryImages.appendChild(img);
        });
        
        // Actualizar información de la propiedad
        galleryInfo.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${property.title}</h3>
            <p class="mb-2"><strong>Precio:</strong> ${property.price}</p>
            <p class="mb-4">${property.description}</p>
            <h4 class="font-bold mb-2">Características:</h4>
            <ul class="list-disc pl-5 mb-4">
                ${property.features ? property.features.map(feature => `<li>${feature}</li>`).join('') : ''}
            </ul>
            <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Contactar Agente</button>
        `;
        
        // Mostrar modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // Función para mostrar imagen completa
    function showFullImage(imageSrc) {
        const fullImageContainer = document.getElementById('full-image-container');
        const fullImage = document.getElementById('full-image');
        
        fullImage.src = imageSrc;
        fullImageContainer.style.display = 'flex';
    }

    // Función para cerrar el modal de la galería
    function closeGalleryModal() {
        const modal = document.getElementById('gallery-modal');
        const closeButton = document.getElementById('close-modal');
        
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
        
        // Cerrar modal al hacer clic fuera de él
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }

    // Función para cerrar la imagen completa
    function closeFullImage() {
        const fullImageContainer = document.getElementById('full-image-container');
        
        fullImageContainer.addEventListener('click', () => {
            fullImageContainer.style.display = 'none';
        });
    }

    // Función para navegar entre imágenes completas
    function navigateFullImages() {
        const prevButton = document.getElementById('prev-image');
        const nextButton = document.getElementById('next-image');
        const fullImage = document.getElementById('full-image');
        
        let currentIndex = 0;
        const images = Array.from(document.querySelectorAll('#gallery-images img'));
        
        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            fullImage.src = images[currentIndex].src;
        });
        
        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            fullImage.src = images[currentIndex].src;
        });
    }

    // Función para crear el slider de YouTube
    function initYouTubeVideos() {
        const youtubeContainer = document.getElementById('youtube-slider');
        if (youtubeContainer) {
            // Configuración de la API de YouTube
            const API_KEY = 'AIzaSyBPsHN1pv1ZCeRipAJL0CY50VD08uC4Q_Y';
            const CHANNEL_ID = 'UCiahlQJxCgPY-tEfjvkab8g';
            const MAX_RESULTS = 10;

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

    // Función para manejar el formulario de contacto
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.setAttribute('action', 'https://formspree.io/f/xvgogpyz');
            form.setAttribute('method', 'POST');
        }
    }

    // Función para el botón "Volver arriba"
    function handleBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Función para manejar el efecto de aparición al hacer scroll
    function handleScrollAnimation() {
        const fadeElems = document.querySelectorAll('.fade-in-section');
        
        const fadeIn = (elem) => {
            var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
            if (distInView < 0) {
                elem.classList.add('is-visible');
            } else {
                elem.classList.remove('is-visible');
            }
        };
        
        fadeElems.forEach(elem => {
            fadeIn(elem);
        });
        
        window.addEventListener('scroll', () => {
            fadeElems.forEach(elem => {
                fadeIn(elem);
            });
        });
    }

    // Función para manejar la instalación de la PWA
    function handleInstallApp() {
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
                        console.log('Usuario aceptó la instalación de la PWA');
                    }
                    deferredPrompt = null;
                });
            }
        });
    }

    // Función para precargar imágenes
    function preloadImages(images) {
        images.forEach(image => {
            const img = new Image();
            img.src = image;
        });
    }

    // Precargar todas las imágenes
    const allImages = [
        ...heroImages,
        ...properties.map(p => p.image),
        ...properties.flatMap(p => p.gallery || []),
        ...instagramPosts.map(p => p.image)
    ];
    preloadImages(allImages);

    // Llamar a todas las funciones de inicialización
    createHeroSlider();
    createQuienesSomosSlider();
    createFeaturedProperties();
    createPropertyCards();
    createServiceCards();
    createTestimonialsSlider();
    createInstagramSlider();
    createFAQs();
    handleViewDetails();
    closeGalleryModal();
    closeFullImage();
    navigateFullImages();
    initYouTubeVideos();
    initContactForm();
    handleBackToTop();
    handleScrollAnimation();
    handleInstallApp();
});