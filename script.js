document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "https://source.unsplash.com/random/1600x900?luxury,house",
        "https://source.unsplash.com/random/1600x900?modern,apartment",
        "https://source.unsplash.com/random/1600x900?real,estate"
    ];

    const properties = [
        { 
            id: 1, 
            title: "DEPARTAMENTOS EN VENTA NUEVO SAMBORONDON", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?luxury,apartment", 
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
                "https://source.unsplash.com/random/800x600?apartment,living",
                "https://source.unsplash.com/random/800x600?apartment,bedroom",
                "https://source.unsplash.com/random/800x600?apartment,kitchen",
                "https://source.unsplash.com/random/800x600?apartment,bathroom",
                "https://source.unsplash.com/random/800x600?apartment,pool"
            ]
        },
        { 
            id: 2, 
            title: "Casa de Lujo en Samborondón", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?luxury,house", 
            type: "venta",
            description: "Espectacular casa de lujo en el corazón de Samborondón. Amplios espacios, acabados de primera y vistas impresionantes.",
            gallery: [
                "https://source.unsplash.com/random/800x600?luxury,living",
                "https://source.unsplash.com/random/800x600?luxury,bedroom",
                "https://source.unsplash.com/random/800x600?luxury,kitchen"
            ]
        },
        { 
            id: 3, 
            title: "Oficina Comercial en Centro Empresarial", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?office,modern", 
            type: "alquiler",
            description: "Moderna oficina comercial en el principal centro empresarial de la ciudad. Ideal para empresas en crecimiento.",
            gallery: [
                "https://source.unsplash.com/random/800x600?office,interior",
                "https://source.unsplash.com/random/800x600?office,meeting",
                "https://source.unsplash.com/random/800x600?office,workspace"
            ]
        },
        { 
            id: 4, 
            title: "Penthouse con Vista al Mar", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?penthouse,sea", 
            type: "venta",
            description: "Exclusivo penthouse con impresionantes vistas al mar. Terraza privada, acabados de lujo y comodidades de primer nivel.",
            gallery: [
                "https://source.unsplash.com/random/800x600?penthouse,view",
                "https://source.unsplash.com/random/800x600?penthouse,terrace",
                "https://source.unsplash.com/random/800x600?penthouse,interior"
            ]
        },
        { 
            id: 5, 
            title: "Terreno para Desarrollo Residencial", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?land,residential", 
            type: "venta",
            description: "Amplio terreno ideal para desarrollo residencial. Ubicación estratégica con todos los servicios disponibles.",
            gallery: [
                "https://source.unsplash.com/random/800x600?land,view",
                "https://source.unsplash.com/random/800x600?land,aerial",
                "https://source.unsplash.com/random/800x600?land,nature"
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
        { image: "https://source.unsplash.com/random/600x600?real,estate", link: "#" },
        { image: "https://source.unsplash.com/random/600x600?house", link: "#" },
        { image: "https://source.unsplash.com/random/600x600?apartment", link: "#" },
        { image: "https://source.unsplash.com/random/600x600?condo", link: "#" }
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
        const quienesSomosSlider = document.querySelector('.quienes-somos-slider');
        const images = [
            "https://source.unsplash.com/random/800x600?real,estate,team",
            "https://source.unsplash.com/random/800x600?realtor",
            "https://source.unsplash.com/random/800x600?property,management",
            "https://source.unsplash.com/random/800x600?real,estate,office"
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
    }

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        const propertiesContainer = document.querySelector('.propiedades-slider');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesContainer.appendChild(propertyCard);
        });
    }

    // ... (resto del código sin cambios) ...

    // Llamar a todas las funciones de inicialización
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
});