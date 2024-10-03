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

    const heroSlider = $('.hero-slider');
    heroImages.forEach(image => {
        heroSlider.append(`
            <div class="w-full h-full">
                <img src="${image}" alt="Hero image" class="w-full h-full object-cover">
            </div>
        `);
    });

    heroSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        speed: 1000
    });
});

    // Función para crear el botón de WhatsApp
    function createWhatsAppButton(property) {
        const message = encodeURIComponent(`Hola, estoy interesado en la propiedad "${property.title}" con precio ${property.price}. ¿Podrían darme más información?`);
        return `<a href="https://wa.me/1234567890?text=${message}" class="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp mr-2"></i>Consultar por WhatsApp
        </a>`;
    }

    // Inicializar el slider de propiedades destacadas
    const propertySlider = $('.property-slider');
    properties.forEach(property => {
        propertySlider.append(`
            <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700 mb-2">${property.price}</p>
                    ${createWhatsAppButton(property)}
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
                    <p class="text-gray-700 mb-2">${property.price}</p>
                    ${createWhatsAppButton(property)}
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

    // Inicializar el slider de Instagram
    const instagramSlider = $('#instagram-slider');
    instagramPosts.forEach(post => {
        instagramSlider.append(`
            <div class="instagram-item">
                <blockquote class="instagram-media" data-instgrm-permalink="${post.url}" data-instgrm-version="14">
                    <div style="padding:16px;">
                        <a href="${post.url}" target="_blank">Ver esta publicación en Instagram</a>
                    </div>
                </blockquote>
            </div>
        `);
    });
    instagramSlider.slick({
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
        const bottomNav = $('nav.fixed.bottom-0');
        if (window.innerWidth < 640) {
            bottomNav.addClass('text-xs');
            bottomNav.find('i').removeClass('mb-1').addClass('text-lg');
            bottomNav.find('span').addClass('hidden');
        } else {
            bottomNav.removeClass('text-xs');
            bottomNav.find('i').addClass('mb-1').removeClass('text-lg');
            bottomNav.find('span').removeClass('hidden');
        }
    }

    adjustBottomNav();
    $(window).on('resize', adjustBottomNav);
});