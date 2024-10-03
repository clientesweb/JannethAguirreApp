document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
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
    const promoSlider = document.querySelector('.promo-slider');
    promoItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        promoSlider.appendChild(div);
    });
    $(promoSlider).slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false
    });

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
    $(heroSlider).slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    // Inicializar el slider de propiedades
    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700">${property.price}</p>
            </div>
        `;
        propertySlider.appendChild(div);
    });
    $(propertySlider).slick({
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
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md';
        div.innerHTML = `
            <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p>${service.description}</p>
        `;
        serviceGrid.appendChild(div);
    });

    // Inicializar el slider de la tienda
    const storeSlider = document.getElementById('store-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.setAttribute('data-type', property.type);
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700">${property.price}</p>
                <button class="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
            </div>
        `;
        storeSlider.appendChild(div);
    });
    $(storeSlider).slick({
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
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterProperties(filter);
        });
    });

    function filterProperties(filter) {
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-type') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        $(storeSlider).slick('setPosition');
    }

    // Modal de galería
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const galleryImages = document.getElementById('gallery-images');

    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            openGallery(propertyId);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    function openGallery(propertyId) {
        // En una aplicación real, aquí cargarías las imágenes de la galería desde una API
        const galleryImagesUrls = [
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300"
        ];

        galleryImages.innerHTML = '';
        galleryImagesUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.className = 'w-full h-auto';
            galleryImages.appendChild(img);
        });

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí irían la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
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
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        }
    });
});