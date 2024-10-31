document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Función para registrar errores
    function logError(functionName, error) {
        console.error(`Error in ${functionName}:`, error);
    }

    // Función para verificar si un elemento existe
    function elementExists(selector) {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Element not found: ${selector}`);
            return false;
        }
        return true;
    }

    // Función para verificar si una biblioteca está cargada
    function libraryLoaded(libraryName) {
        if (typeof window[libraryName] === 'undefined') {
            console.error(`${libraryName} is not loaded`);
            return false;
        }
        return true;
    }

    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
    ];

    const properties = [
        { 
            id: 1, 
            title: "DEPARTAMENTOS EN VENTA NUEVO SAMBORONDON", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
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
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ]
        },
        // ... (otros objetos de propiedades)
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
        { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" }
    ];

    // Función para crear el slider de imágenes del hero
    function createHeroSlider() {
        try {
            if (!elementExists('.hero-slider')) return;
            if (!libraryLoaded('$')) return;

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
            console.log("Hero slider created successfully");
        } catch (error) {
            logError('createHeroSlider', error);
        }
    }

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
        try {
            if (!elementExists('.quienes-somos-slider')) return;
            if (!libraryLoaded('$')) return;

            const quienesSomosSlider = document.querySelector('.quienes-somos-slider');
            const images = [
                "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ];
            images.forEach(image => {
                const slide = document.createElement('div');
                slide.innerHTML = `<img src="${image}" alt="Equipo" class="w-full h-64 object-cover rounded-lg">`;
                quienesSomosSlider.appendChild(slide);
            });
            
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
            console.log("Quienes Somos slider created successfully");
        } catch (error) {
            logError('createQuienesSomosSlider', error);
        }
    }

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        try {
            if (!elementExists('.propiedades-slider')) return;

            const propertiesContainer = document.querySelector('.propiedades-slider');
            properties.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
                propertyCard.innerHTML = `
                    <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                        <p class="text-gray-700 text-base mb-4">${property.price}</p>
                        <button class="bg-primary text-white px-4 py-2 rounded  hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                    </div>
                `;
                propertiesContainer.appendChild(propertyCard);
            });
            console.log("Featured properties created successfully");
        } catch (error) {
            logError('createFeaturedProperties', error);
        }
    }

    // Función para crear las tarjetas de servicios
    function createServiceCards() {
        try {
            if (!elementExists('.services-container')) return;

            const servicesContainer = document.querySelector('.services-container');
            services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.className = 'bg-white p-6 rounded-lg shadow-md';
                serviceCard.innerHTML = `
                    <i class="${service.icon} text-4xl text-primary mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                `;
                servicesContainer.appendChild(serviceCard);
            });
            console.log("Service cards created successfully");
        } catch (error) {
            logError('createServiceCards', error);
        }
    }

    // Función para crear el slider de testimonios
    function createTestimonialsSlider() {
        try {
            if (!elementExists('.testimonials-slider')) return;
            if (!libraryLoaded('$')) return;

            const testimonialsContainer = document.querySelector('.testimonials-slider');
            testimonials.forEach(testimonial => {
                const slide = document.createElement('div');
                slide.className = 'bg-white p-6 rounded-lg shadow-md';
                slide.innerHTML = `
                    <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                    <p class="font-semibold">${testimonial.name}</p>
                `;
                testimonialsContainer.appendChild(slide);
            });

            $('.testimonials-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
            });
            console.log("Testimonials slider created successfully");
        } catch (error) {
            logError('createTestimonialsSlider', error);
        }
    }

    // Función para crear el slider de Instagram
    function createInstagramSlider() {
        try {
            if (!elementExists('.instagram-slider')) return;
            if (!libraryLoaded('$')) return;

            const instagramContainer = document.querySelector('.instagram-slider');
            instagramPosts.forEach(post => {
                const slide = document.createElement('div');
                slide.className = 'instagram-post';
                slide.innerHTML = `
                    <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${post.image}" alt="Instagram Post" class="w-full h-64 object-cover rounded-lg">
                    </a>
                `;
                instagramContainer.appendChild(slide);
            });

            $('.instagram-slider').slick({
                dots: false,
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
            console.log("Instagram slider created successfully");
        } catch (error) {
            logError('createInstagramSlider', error);
        }
    }

    // ... (resto de las funciones con manejo de errores similar)

    // Función para inicializar todo
    function initializeWebsite() {
        try {
            createHeroSlider();
            createQuienesSomosSlider();
            createFeaturedProperties();
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
            console.log("Website initialized successfully");
        } catch (error) {
            logError('initializeWebsite', error);
        }
    }

    // Llamar a la función de inicialización
    initializeWebsite();
});

console.log("Script loaded successfully!");