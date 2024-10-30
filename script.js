document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "https://source.unsplash.com/random/1600x900?real,estate",
        "https://source.unsplash.com/random/1600x900?house",
        "https://source.unsplash.com/random/1600x900?apartment"
    ];

    const properties = [
        { 
            id: 1, 
            title: "Guayaquil Samborondon", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?house", 
            type: "venta",
            description: "Hermosa propiedad en Samborondon",
            gallery: [
                "https://source.unsplash.com/random/800x600?house,interior",
                "https://source.unsplash.com/random/800x600?house,exterior",
                "https://source.unsplash.com/random/800x600?house,garden"
            ]
        },
        { 
            id: 2, 
            title: "Isla Mocoli", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?apartment", 
            type: "venta",
            description: "Departamentos en planos - Departamentos listos de estreno",
            gallery: [
                "https://source.unsplash.com/random/800x600?apartment,living",
                "https://source.unsplash.com/random/800x600?apartment,bedroom",
                "https://source.unsplash.com/random/800x600?apartment,kitchen"
            ]
        },
        { 
            id: 3, 
            title: "Departamentos en planos y de estreno en el nuevo Samborondón", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?condo", 
            type: "venta",
            description: "Modernos departamentos en el corazón de Samborondón",
            gallery: [
                "https://source.unsplash.com/random/800x600?condo,view",
                "https://source.unsplash.com/random/800x600?condo,pool",
                "https://source.unsplash.com/random/800x600?condo,gym"
            ]
        },
        { 
            id: 4, 
            title: "Locales Comerciales en nuevo Samborondón", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?commercial", 
            type: "alquiler",
            description: "Espacios comerciales ideales para tu negocio",
            gallery: [
                "https://source.unsplash.com/random/800x600?commercial,office",
                "https://source.unsplash.com/random/800x600?commercial,retail",
                "https://source.unsplash.com/random/800x600?commercial,restaurant"
            ]
        },
        { 
            id: 5, 
            title: "Terrenos Urbanizados residenciales", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?land", 
            type: "venta",
            description: "Terrenos listos para construir tu hogar soñado",
            gallery: [
                "https://source.unsplash.com/random/800x600?land,residential",
                "https://source.unsplash.com/random/800x600?land,plot",
                "https://source.unsplash.com/random/800x600?land,development"
            ]
        },
        { 
            id: 6, 
            title: "Terrenos industriales", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?industrial", 
            type: "venta",
            description: "Amplios terrenos para proyectos industriales",
            gallery: [
                "https://source.unsplash.com/random/800x600?industrial,warehouse",
                "https://source.unsplash.com/random/800x600?industrial,factory",
                "https://source.unsplash.com/random/800x600?industrial,logistics"
            ]
        },
        { 
            id: 7, 
            title: "Terrenos Comerciales", 
            price: "Consultar", 
            image: "https://source.unsplash.com/random/800x600?commercial,land", 
            type: "venta",
            description: "Excelente ubicación para desarrollos comerciales",
            gallery: [
                "https://source.unsplash.com/random/800x600?commercial,development",
                "https://source.unsplash.com/random/800x600?commercial,construction",
                "https://source.unsplash.com/random/800x600?commercial,project"
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
        const heroImages = [
            "https://source.unsplash.com/random/1600x900?real,estate",
            "https://source.unsplash.com/random/1600x900?house",
            "https://source.unsplash.com/random/1600x900?apartment"
        ];
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

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        const propertiesContainer = document.querySelector('#propiedades .grid');
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
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
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
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
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

    // Función para crear el slider de la tienda
    function createStoreSlider() {
        const storeSlider = document.getElementById('store-slider');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3  class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <p class="text-gray-600 mb-4">${property.description}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            storeSlider.appendChild(propertyCard);
        });
    }

    // Función para crear los botones de filtro
    function createFilterButtons() {
        const filterButtons = document.getElementById('filter-buttons');
        const types = ['todos', 'venta', 'alquiler'];
        types.forEach(type => {
            const button = document.createElement('button');
            button.className = 'px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors';
            button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            button.addEventListener('click', () => filterProperties(type));
            filterButtons.appendChild(button);
        });
    }

    // Función para filtrar propiedades
    function filterProperties(type) {
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            const propertyType = properties.find(p => p.id === parseInt(card.querySelector('.view-details').dataset.id)).type;
            if (type === 'todos' || propertyType === type) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Función para buscar propiedades
    function searchProperties() {
        const searchInput = document.getElementById('search-input');
        const propertyCards = document.querySelectorAll('.property-card');
        
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            propertyCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Función para manejar el clic en "Ver Detalles"
    function handleViewDetails() {
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('view-details')) {
                const propertyId = parseInt(e.target.dataset.id);
                const property = properties.find(p => p.id === propertyId);
                showGalleryModal(property);
            }
        });
    }

    // Función para mostrar el modal de la galería
    function showGalleryModal(property) {
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
            <p>${property.description}</p>
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

    // Nueva función para manejar el hover en las tarjetas de invertir-samborondon
    function initInvertirSamborondon() {
        const cards = document.querySelectorAll('#invertir-samborondon .bg-white');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }


    // Llamar a todas las funciones de inicialización
    createHeroSlider();
    createFeaturedProperties();
    createServiceCards();
    createTestimonialsSlider();
    createInstagramSlider();
    createFAQs();
    createStoreSlider();
    createFilterButtons();
    searchProperties();
    handleViewDetails();
    closeGalleryModal();
    closeFullImage();
    navigateFullImages();
    initYouTubeVideos();
    initContactForm();
    handleBackToTop();
    handleScrollAnimation();
    handleInstallApp();
    initInvertirSamborondon();
});