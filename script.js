document.addEventListener('DOMContentLoaded', function() {
    // Asegurarse de que jQuery está cargado
    if (typeof jQuery === 'undefined') {
        console.error('jQuery no está cargado. Por favor, incluye jQuery antes de este script.');
        return;
    }

    // Datos de ejemplo
    const promoItems = [
        "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
        "Nueva propiedad disponible en el centro de la ciudad",
        "¡Financiamiento disponible! Consulta nuestras opciones"
    ];

    const heroImages = [
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200",
        "/placeholder.svg?height=600&width=1200"
    ];

    const properties = [
        { id: 1, title: "Casa moderna", price: "$250,000", image: "/placeholder.svg?height=200&width=300", type: "venta" },
        { id: 2, title: "Apartamento céntrico", price: "$1,200/mes", image: "/placeholder.svg?height=200&width=300", type: "alquiler" },
        { id: 3, title: "Terreno en la playa", price: "$100,000", image: "/placeholder.svg?height=200&width=300", type: "venta" },
        { id: 4, title: "Oficina ejecutiva", price: "$2,000/mes", image: "/placeholder.svg?height=200&width=300", type: "alquiler" },
        { id: 5, title: "Casa de campo", price: "$180,000", image: "/placeholder.svg?height=200&width=300", type: "venta" },
        { id: 6, title: "Condominio de lujo", price: "$500,000", image: "/placeholder.svg?height=200&width=300", type: "proyecto" }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones", icon: "fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales", icon: "fa-calculator" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler", icon: "fa-key" }
    ];

    // Inicializar el slider de promociones
    const promoSlider = $('.promo-slider');
    promoItems.forEach(item => {
        promoSlider.append(`<div>${item}</div>`);
    });
    promoSlider.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false
    });

    // Inicializar el slider del hero
    const heroSlider = $('.hero-slider');
    heroImages.forEach(image => {
        heroSlider.append(`<div style="background-image: url(${image}); background-size: cover; background-position: center; height: 100%;"></div>`);
    });
    heroSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    // Inicializar el slider de propiedades
    const propertySlider = $('.property-slider');
    properties.forEach(property => {
        propertySlider.append(`
            <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                </div>
            </div>
        `);
    });
    propertySlider.slick({
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

    // Renderizar las tarjetas de servicios
    const serviceGrid = $('#service-grid');
    services.forEach(service => {
        serviceGrid.append(`
            <div class="bg-white p-6 rounded-lg shadow-md">
                <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `);
    });

    // Inicializar el slider de la tienda
    const storeSlider = $('#store-slider');
    properties.forEach(property => {
        storeSlider.append(`
            <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden" data-type="${property.type}">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                    <button class="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
                </div>
            </div>
        `);
    });
    storeSlider.slick({
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

    // Filtrado de propiedades
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        if (filter === 'all') {
            $('.property-card').show();
        } else {
            $('.property-card').hide();
            $(`.property-card[data-type="${filter}"]`).show();
        }
        storeSlider.slick('setPosition');
    });

    // Modal de galería
    $('.view-gallery').on('click', function() {
        const propertyId = $(this).data('id');
        openGallery(propertyId);
    });

    $('#close-modal').on('click', function() {
        $('#gallery-modal').addClass('hidden').removeClass('flex');
    });

    function openGallery(propertyId) {
        const galleryImagesUrls = [
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300"
        ];

        const galleryImages = $('#gallery-images');
        galleryImages.empty();
        galleryImagesUrls.forEach(url => {
            galleryImages.append(`<img src="${url}" class="w-full h-auto">`);
        });

        $('#gallery-modal').removeClass('hidden').addClass('flex');
    }

    // Formulario de contacto
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        this.reset();
    });

    // Instalación de la PWA
    let deferredPrompt;
    const installButton = $('#install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.show();
    });

    installButton.on('click', async function() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        }
    });
});