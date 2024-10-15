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

    const youtubeVideos = [
        { id: 'dQw4w9WgXcQ', title: 'Video 1' },
        { id: 'dQw4w9WgXcQ', title: 'Video 2' },
        { id: 'dQw4w9WgXcQ', title: 'Video 3' },
        { id: 'dQw4w9WgXcQ', title: 'Video 4' },
        { id: 'dQw4w9WgXcQ', title: 'Video 5' }
    ];

    // Inicializar Swiper para el slider de promociones
    new Swiper('.promo-slider', {
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    // Inicializar Swiper para el hero slider
    new Swiper('.hero-slider', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Poblar el hero slider
    const heroSliderWrapper = document.querySelector('.hero-slider .swiper-wrapper');
    heroImages.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="${image}" alt="Hero image ${index + 1}" class="w-full h-full object-cover">
        `;
        heroSliderWrapper.appendChild(slide);
    });

    // Inicializar Swiper para el slider de propiedades
    new Swiper('.property-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Poblar el slider de propiedades
    const propertySliderWrapper = document.querySelector('.property-slider .swiper-wrapper');
    properties.forEach(property => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden property-card">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                    <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Ver Detalles</button>
                </div>
            </div>
        `;
        propertySliderWrapper.appendChild(slide);
    });

    // Poblar la sección de servicios
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'bg-white p-6 rounded-lg shadow-md';
        serviceCard.innerHTML = `
            <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        `;
        serviceGrid.appendChild(serviceCard);
    });

    // Inicializar Swiper para el slider de la tienda
    const storeSlider = new Swiper('#store-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Poblar el slider de la tienda
    const storeSliderWrapper = document.querySelector('#store-slider .swiper-wrapper');
    properties.forEach(property => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden property-card" data-type="${property.type}">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                    <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-property-id="${property.id}">Ver Galería</button>
                </div>
            </div>
        `;
        storeSliderWrapper.appendChild(slide);
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
        storeSlider.update();
    }

    // Búsqueda de propiedades
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        storeSlider.update();
    });

    // Modal de galería
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const galleryImages = document.getElementById('gallery-images');
    const galleryInfo = document.getElementById('gallery-info');

    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-property-id');
            const property = properties.find(p => p.id === parseInt(propertyId));
            
            // Limpiar imágenes anteriores
            galleryImages.innerHTML = '';
            
            // Agregar imágenes a la galería (aquí usamos la misma imagen varias veces como ejemplo)
            for (let i = 0; i < 5; i++) {
                const img = document.createElement('img');
                img.src = property.image;
                img.alt = `${property.title} - Imagen ${i + 1}`;
                img.className = 'w-40 h-40 object-cover rounded';
                galleryImages.appendChild(img);
            }
            
            // Actualizar información de la propiedad
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                <p class="text-gray-700 mb-2">${property.price}</p>
                <p class="text-gray-600">Tipo: ${property.type}</p>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    });

    // Inicializar Swiper para el slider de YouTube
    new Swiper('.youtube-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Poblar el slider de YouTube
    const youtubeSliderWrapper = document.querySelector('.youtube-slider .swiper-wrapper');
    youtubeVideos.forEach(video => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.youtube.com/embed/${video.id}"
                    title="${video.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <h3 class="mt-2 text-lg font-semibold">${video.title}</h3>
        `;
        youtubeSliderWrapper.appendChild(slide);
    });

    // Inicializar Swiper para el slider de testimonios
    new Swiper('#testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Poblar el slider de testimonios
    const testimonialsSliderWrapper = document.querySelector('#testimonials-slider .swiper-wrapper');
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="font-bold">${testimonial.name}</h3>
                </div>
                <p class="text-gray-600">"${testimonial.text}"</p>
            </div>
        `;
        testimonialsSliderWrapper.appendChild(slide);
    });

    // Inicializar el mapa (ejemplo con Leaflet)
    const mapContainer = document.getElementById('map-container');
    const lat = parseFloat(mapContainer.getAttribute('data-lat'));
    const lng = parseFloat(mapContainer.getAttribute('data-lng'));

    const map = L.map(mapContainer).setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup('Janneth Aguirre Bienes Raíces')
        .openPopup();

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario, por ejemplo, usando fetch para una API
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Botón "Volver arriba"
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

    // Efecto de aparición al hacer scroll
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    fadeElems.forEach(elem => observer.observe(elem));

    // Manejar la instalación de la PWA
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