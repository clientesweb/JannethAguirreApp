document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display = 'none';
    });

    // Función para cargar imágenes de forma perezosa
    function lazyLoadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    }

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
            title: "Departamentos en venta – Orlando Florida – Condo Hotel – Inversion de alta rentabilidad", 
            price: "$350,000", 
            image: "/img/orlandoflorida.jpg", 
            type: "venta",
            description: "Lujosos departamentos en Orlando, Florida. Ideal para inversión con alta rentabilidad. Ubicados en una zona privilegiada con acceso a atracciones turísticas.",
            gallery: ["/img/orlandoflorida.jpg", "/img/orlandoflorida-2.jpg", "/img/orlandoflorida-3.jpg"]
        },
        { 
            id: 2, 
            title: "Departamento vista al rio – Via Samborondon", 
            price: "$1,500/mes", 
            image: "/img/departamentos.jpg", 
            type: "alquiler",
            description: "Hermoso departamento con vista al río en la exclusiva zona de Samborondón. Amplios espacios y acabados de lujo.",
            gallery: ["/img/departamentos.jpg", "/img/departamentos-2.jpg", "/img/departamentos-3.jpg"]
        },
        { 
            id: 3, 
            title: "Casa en Urb. Castilla", 
            price: "$180,000", 
            image: "/img/casa-urb-castilla.jpg", 
            type: "venta",
            description: "Acogedora casa en la Urbanización Castilla. Perfecta para familias, con amplias áreas verdes y seguridad 24/7.",
            gallery: ["/img/casa-urb-castilla.jpg", "/img/casa-urb-castilla-2.jpg", "/img/casa-urb-castilla-3.jpg"]
        },
        { 
            id: 4, 
            title: "Terreno en Vía a la Costa", 
            price: "$80/m²", 
            image: "/img/terreno-via-costa.jpg", 
            type: "venta",
            description: "Amplio terreno en Vía a la Costa, ideal para proyectos residenciales o comerciales. Excelente ubicación y potencial de desarrollo.",
            gallery: ["/img/terreno-via-costa.jpg", "/img/terreno-via-costa-2.jpg", "/img/terreno-via-costa-3.jpg"]
        },
        { 
            id: 5, 
            title: "Oficina en Torre Empresarial", 
            price: "$800/mes", 
            image: "/img/oficina-torre.jpg", 
            type: "alquiler",
            description: "Moderna oficina en prestigiosa Torre Empresarial. Espacios flexibles y servicios de primera clase para su negocio.",
            gallery: ["/img/oficina-torre.jpg", "/img/oficina-torre-2.jpg", "/img/oficina-torre-3.jpg"]
        },
        { 
            id: 6, 
            title: "Proyecto Residencial 'Los Ceibos'", 
            price: "Desde $120,000", 
            image: "/img/proyecto-los-ceibos.jpg", 
            type: "proyecto",
            description: "Nuevo proyecto residencial 'Los Ceibos'. Departamentos modernos con áreas comunes y excelente ubicación.",
            gallery: ["/img/proyecto-los-ceibos.jpg", "/img/proyecto-los-ceibos-2.jpg", "/img/proyecto-los-ceibos-3.jpg"]
        }
    ];

    const services = [
        { title: "Compra y Venta", icon: "fas fa-home", description: "Asesoramiento experto en la compra y venta de propiedades" },
        { title: "Alquiler", icon: "fas fa-key", description: "Gestión de alquileres residenciales y comerciales" },
        { title: "Inversiones", icon: "fas fa-chart-line", description: "Oportunidades de inversión en bienes raíces" },
        { title: "Tasaciones", icon: "fas fa-calculator", description: "Valoración profesional de propiedades" },
        { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal en transacciones inmobiliarias" },
        { title: "Proyectos", icon: "fas fa-building", description: "Desarrollo y gestión de proyectos inmobiliarios" }
    ];

    const testimonials = [
        { name: "María González", text: "Excelente servicio. Janneth me ayudó a encontrar la casa de mis sueños.", image: "/img/testimonial-1.jpg" },
        { name: "Juan Pérez", text: "Profesionalismo y dedicación. Recomiendo 100% los servicios de Janneth Aguirre.", image: "/img/testimonial-2.jpg" },
        { name: "Ana Rodríguez", text: "Gracias a Janneth, vender mi propiedad fue un proceso rápido y sin complicaciones.", image: "/img/testimonial-3.jpg" }
    ];

    const instagramPosts = [
        { image: "/img/instagram-1.jpg", link: "#", caption: "Nueva propiedad disponible en el centro de Guayaquil" },
        { image: "/img/instagram-2.jpg", link: "#", caption: "Tips para invertir en bienes raíces" },
        { image: "/img/instagram-3.jpg", link: "#", caption: "Conoce nuestro equipo de asesores inmobiliarios" }
    ];

    const youtubeVideos = [
        { id: "VIDEO_ID_1", title: "Consejos para comprar tu primera casa" },
        { id: "VIDEO_ID_2", title: "Tour por una lujosa propiedad en Guayaquil" },
        { id: "VIDEO_ID_3", title: "Inversiones inmobiliarias: Lo que debes saber" }
    ];

    const faqItems = [
        {
            question: "¿Cuál es el proceso para comprar una propiedad?",
            answer: "El proceso generalmente incluye: búsqueda de propiedades, visitas, negociación, oferta formal, due diligence, financiamiento (si es necesario), y cierre de la transacción. Nuestro equipo le guiará en cada paso."
        },
        {
            question: "¿Qué documentos necesito para vender mi propiedad?",
            answer: "Generalmente necesitará: título de propiedad, certificado de gravámenes, impuestos al día, planos aprobados, y cédula de identidad. Podemos ayudarle a recopilar toda la documentación necesaria."
        },
        {
            question: "¿Ofrecen servicios de administración de propiedades?",
            answer: "Sí, ofrecemos servicios completos de administración de propiedades, incluyendo búsqueda de inquilinos, cobro de rentas, mantenimiento y más."
        },
        {
            question: "¿Cómo determinan el precio de una propiedad?",
            answer: "Utilizamos una combinación de análisis de mercado, comparables recientes, características únicas de la propiedad y tendencias del mercado para determinar un precio justo y competitivo."
        }
    ];

    // Función para crear elementos HTML
    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
    }

    // Inicializar el slider de promociones
    const promoSlider = document.querySelector('.promo-slider');
    promoItems.forEach(item => {
        const promoItem = createElement('div', 'promo-item', item);
        promoSlider.appendChild(promoItem);
    });

    $('.promo-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Inicializar el hero slider
    const heroSlider = document.querySelector('.hero-slider');
    heroImages.forEach(image => {
        lazyLoadImage(image).then(img => {
            const slide = createElement('div', 'hero-slide');
            slide.style.backgroundImage = `url(${img.src})`;
            heroSlider.appendChild(slide);
        });
    });

    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Inicializar el slider de propiedades
    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        lazyLoadImage(property.image).then(img => {
            const propertyCard = createElement('div', 'property-card bg-white shadow-lg rounded-lg overflow-hidden');
            propertyCard.innerHTML = `
                <img src="${img.src}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                </div>
            `;
            propertySlider.appendChild(propertyCard);
        });
    });

    $('.property-slider').slick({
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Inicializar la sección de servicios
    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const serviceCard = createElement('div', 'service-card bg-white shadow-lg rounded-lg p-6 text-center');
        serviceCard.innerHTML = `
            <i class="${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="font-bold text-xl mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        `;
        serviceGrid.appendChild(serviceCard);
    });

    // Inicializar la sección de tienda
    const storeSlider = document.getElementById('store-slider');
    properties.forEach(property => {
        lazyLoadImage(property.image).then(img => {
            const propertyCard = createElement('div', 'property-card bg-white shadow-lg rounded-lg overflow-hidden');
            propertyCard.innerHTML = `
                <img src="${img.src}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700 mb-2">${property.price}</p>
                    <p class="text-sm text-gray-600 mb-4">${property.description}</p>
                    <button class="view-details bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors w-full mb-2" data-id="${property.id}">Ver Detalles</button>
                    <a href="https://wa.me/593987167782?text=Hola, estoy interesado en la propiedad: ${encodeURIComponent(property.title)}. ¿Podrías darme más información?" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full inline-block text-center">
                        <i class="fab fa-whatsapp mr-2"></i> Contactar por WhatsApp
                    </a>
                </div>
            `;
            storeSlider.appendChild(propertyCard);
        });
    });

    // Manejador de eventos para el botón "Ver Detalles"
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-id');
            const property = properties.find(p => p.id == propertyId);
            
            const modal = document.getElementById('gallery-modal');
            const galleryImages = document.getElementById('gallery-images');
            const galleryInfo = document.getElementById('gallery-info');
            
            // Limpiar el contenido anterior
            galleryImages.innerHTML = '';
            galleryInfo.innerHTML = '';
            
            // Agregar imágenes a la galería
            property.gallery.forEach(img => {
                lazyLoadImage(img).then(loadedImg => {
                    const imgElement = document.createElement('img');
                    imgElement.src = loadedImg.src;
                    imgElement.alt = property.title;
                    imgElement.className = 'w-full h-64 object-cover rounded';
                    galleryImages.appendChild(imgElement);
                });
            });
            
            
            // Agregar información de la propiedad
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                <p class="mb-2"><strong>Precio:</strong> ${property.price}</p>
                <p class="mb-2"><strong>Tipo:</strong> ${property.type}</p>
                <p>${property.description}</p>
            `;
            
            // Mostrar el modal
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    // Cerrar el modal
    document.getElementById('close-modal').addEventListener('click', function() {
        const modal = document.getElementById('gallery-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    // Filtrado de propiedades
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            const propertyCards = document.querySelectorAll('.property-card');
            
            propertyCards.forEach(card => {
                if (filter === 'all' || card.querySelector('img').alt.toLowerCase().includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Búsqueda de propiedades
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedSearch = debounce(function() {
        const searchTerm = this.value.toLowerCase();
        const propertyCards = document.querySelectorAll('.property-card');
        
        propertyCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }, 300);

    document.getElementById('search-input').addEventListener('input', debouncedSearch);

    // Inicializar el slider de testimonios
    const testimonialSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        lazyLoadImage(testimonial.image).then(img => {
            const testimonialCard = createElement('div', 'testimonial-card bg-white shadow-lg rounded-lg p-6 text-center');
            testimonialCard.innerHTML = `
                <img src="${img.src}" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4">
                <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                <h4 class="font-bold">${testimonial.name}</h4>
            `;
            testimonialSlider.appendChild(testimonialCard);
        });
    });

    $('#testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });

    // Inicializar el slider de Instagram
    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        lazyLoadImage(post.image).then(img => {
            const postCard = createElement('div', 'instagram-post bg-white shadow-lg rounded-lg overflow-hidden');
            postCard.innerHTML = `
                <img src="${img.src}" alt="${post.caption}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <p class="text-sm text-gray-600">${post.caption}</p>
                    <a href="${post.link}" target="_blank" class="text-primary hover:underline">Ver en Instagram</a>
                </div>
            `;
            instagramSlider.appendChild(postCard);
        });
    });

    $('#instagram-slider').slick({
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Inicializar la sección de YouTube
    const youtubeSlider = document.getElementById('youtube-slider');
    youtubeVideos.forEach(video => {
        const videoCard = createElement('div', 'youtube-video');
        videoCard.innerHTML = `
            <iframe width="300" height="169" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="mt-2 text-sm text-gray-600">${video.title}</p>
        `;
        youtubeSlider.appendChild(videoCard);
    });

    // Inicializar la sección de FAQ
    const faqContainer = document.getElementById('faq-container');
    faqItems.forEach((item, index) => {
        const faqItem = createElement('div', 'faq-item');
        faqItem.innerHTML = `
            <div class="faq-question" data-index="${index}">
                <h3 class="text-lg font-semibold">${item.question}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });

    // Manejar clics en las preguntas del FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            answer.classList.toggle('active');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Manejar el envío del formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });

    // Inicializar el mapa (usando Leaflet como ejemplo)
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
});