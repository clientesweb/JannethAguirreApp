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
        { id: 1, title: "Departamentos en venta – Orlando Florida – Condo Hotel – Inversion de alta rentabilidad", price: "$350,000", image: "/img/orlandoflorida.jpg", type: "venta" },
        { id: 2, title: "Departamento vista al rio – Via Samborondon", price: "$1,500/mes", image: "/img/departamentos.jpg", type: "alquiler" },
        { id: 3, title: "Locales comerciales y oficinas – Via Samborondon", price: "$120,000", image: "/img/locales.jpg", type: "venta" },
        { id: 4, title: "Oficina ejecutiva en Quito", price: "$2,200/mes", image: "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", type: "alquiler" },
        { id: 5, title: "Casa de campo en Cuenca", price: "$220,000", image: "/img/pareja-caminando-cabina_23-2147833123.jpg", type: "venta" },
        { id: 6, title: "Condominio de lujo en Manta", price: "$450,000", image: "/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", type: "proyecto" }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones inmobiliarias", icon: "fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales de bienes raíces", icon: "fa-calculator" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler de manera eficiente", icon: "fa-key" }
    ];

    const testimonials = [
        { id: 1, name: "Juan Pérez", text: "Janneth Aguirre me ayudó a encontrar la casa de mis sueños. Su profesionalismo y dedicación son incomparables.", image: "/placeholder.svg?height=100&width=100" },
        { id: 2, name: "María González", text: "Gracias a Janneth, vender mi propiedad fue un proceso rápido y sin complicaciones. ¡Altamente recomendada!", image: "/placeholder.svg?height=100&width=100" },
        { id: 3, name: "Carlos Rodríguez", text: "La atención al cliente de Janneth Aguirre es excepcional. Siempre está disponible para responder preguntas y ofrecer asesoramiento.", image: "/placeholder.svg?height=100&width=100" }
    ];

    const instagramPosts = [
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE1/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE2/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE3/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE4/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE5/' }
    ];

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
            dots: true
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
                <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Ver Detalles</button>
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

    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            const property = properties.find(p => p.id === parseInt(propertyId));
            
            // Limpiar imágenes anteriores
            galleryImages.innerHTML = '';
            
            // Agregar imágenes a la galería (aquí usamos la misma imagen varias veces como ejemplo)
            for (let i = 0; i < 5; i++) {
                const img = document.createElement('img');
                img.src = property.image;
                img.alt = `${property.title} - Imagen ${i + 1}`;
                img.className = 'w-32 h-32 object-cover rounded';
                galleryImages.appendChild(img);
            }
            
            // Actualizar información de la propiedad
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold">${property.title}</h3>
                <p class="text-lg">${property.price}</p>
                <p>Tipo: ${property.type}</p>
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
        const div = document.createElement('div');
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
});

// Función para inicializar el chatbot (definida en chatbot.js)
function initChatbot() {
    // La lógica del chatbot se implementará en chatbot.js
    console.log('Chatbot inicializado');
}