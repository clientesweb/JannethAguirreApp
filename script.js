document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "/img/hero-image-1.jpg",
        "/img/hero-image-2.jpg",
        "/img/hero-image-3.jpg"
    ];

    const properties = [
        { 
            id: 1, 
            title: "DEPARTAMENTOS EN VENTA NUEVO SAMBORONDON", 
            price: "Consultar", 
            image: "/img/property-1.jpg", 
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
                "/img/property-1-1.jpg",
                "/img/property-1-2.jpg",
                "/img/property-1-3.jpg",
                "/img/property-1-4.jpg",
                "/img/property-1-5.jpg"
            ]
        },
        { 
            id: 2, 
            title: "Casa de Lujo en Samborondón", 
            price: "Consultar", 
            image: "/img/property-2.jpg", 
            type: "venta",
            description: "Espectacular casa de lujo en el corazón de Samborondón. Amplios espacios, acabados de primera y vistas impresionantes.",
            gallery: [
                "/img/property-2-1.jpg",
                "/img/property-2-2.jpg",
                "/img/property-2-3.jpg"
            ]
        },
        { 
            id: 3, 
            title: "Oficina Comercial en Centro Empresarial", 
            price: "Consultar", 
            image: "/img/property-3.jpg", 
            type: "alquiler",
            description: "Moderna oficina comercial en el principal centro empresarial de la ciudad. Ideal para empresas en crecimiento.",
            gallery: [
                "/img/property-3-1.jpg",
                "/img/property-3-2.jpg",
                "/img/property-3-3.jpg"
            ]
        },
        { 
            id: 4, 
            title: "Penthouse con Vista al Mar", 
            price: "Consultar", 
            image: "/img/property-4.jpg", 
            type: "venta",
            description: "Exclusivo penthouse con impresionantes vistas al mar. Terraza privada,

 acabados de lujo y comodidades de primer nivel.",
            gallery: [
                "/img/property-4-1.jpg",
                "/img/property-4-2.jpg",
                "/img/property-4-3.jpg"
            ]
        },
        { 
            id: 5, 
            title: "Terreno para Desarrollo Residencial", 
            price: "Consultar", 
            image: "/img/property-5.jpg", 
            type: "venta",
            description: "Amplio terreno ideal para desarrollo residencial. Ubicación estratégica con todos los servicios disponibles.",
            gallery: [
                "/img/property-5-1.jpg",
                "/img/property-5-2.jpg",
                "/img/property-5-3.jpg"
            ]
        }
    ];

    // ... (resto del código sin cambios) ...

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

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
        const quienesSomosSlider = document.querySelector('.quienes-somos-slider');
        const images = [
            "/img/team-1.jpg",
            "/img/team-2.jpg",
            "/img/team-3.jpg",
            "/img/team-4.jpg"
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