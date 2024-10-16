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
        "/img/hero-image-1.jpg",
        "/img/hero-image-2.jpg",
        "/img/hero-image-3.jpg"
    ];

    const properties = [
        { 
            id: 1, 
            title: "Departamentos en venta – Orlando Florida", 
            price: "$350,000", 
            image: "/img/orlandoflorida.jpg", 
            type: "venta",
            description: "Lujosos departamentos en Orlando, Florida. Ideal para inversión con alta rentabilidad.",
            gallery: ["/img/orlandoflorida.jpg", "/img/orlandoflorida-2.jpg", "/img/orlandoflorida-3.jpg"]
        },
        { 
            id: 2, 
            title: "Departamento vista al rio – Via Samborondon", 
            price: "$1,500/mes", 
            image: "/img/departamentos.jpg", 
            type: "alquiler",
            description: "Hermoso departamento con vista al río en la exclusiva zona de Samborondón.",
            gallery: ["/img/departamentos.jpg", "/img/departamentos-2.jpg", "/img/departamentos-3.jpg"]
        },
        // Agrega más propiedades aquí...
    ];

    const services = [
        { title: "Compra y Venta", icon: "fas fa-home", description: "Asesoramiento experto en la compra y venta de propiedades" },
        { title: "Alquiler", icon: "fas fa-key", description: "Gestión de alquileres residenciales y comerciales" },
        { title: "Inversiones", icon: "fas fa-chart-line", description: "Oportunidades de inversión en bienes raíces" },
        // Agrega más servicios aquí...
    ];

    const testimonials = [
        { name: "María González", text: "Excelente servicio. Janneth me ayudó a encontrar la casa de mis sueños.", image: "/img/testimonial-1.jpg" },
        { name: "Juan Pérez", text: "Profesionalismo y dedicación. Recomiendo 100% los servicios de Janneth Aguirre.", image: "/img/testimonial-2.jpg" },
        // Agrega más testimonios aquí...
    ];

    const instagramPosts = [
        { image: "/img/instagram-1.jpg", link: "#", caption: "Nueva propiedad disponible en el centro de Guayaquil" },
        { image: "/img/instagram-2.jpg", link: "#", caption: "Tips para invertir en bienes raíces" },
        // Agrega más posts de Instagram aquí...
    ];

    const youtubeVideos = [
        { id: "VIDEO_ID_1", title: "Consejos para comprar tu primera casa" },
        { id: "VIDEO_ID_2", title: "Tour por una lujosa propiedad en Guayaquil" },
        // Agrega más videos de YouTube aquí...
    ];

    const faqItems = [
        {
            question: "¿Cuál es el proceso para comprar una propiedad?",
            answer: "El proceso generalmente incluye: búsqueda de propiedades, visitas, negociación, oferta formal, due diligence, financiamiento (si es necesario), y cierre de la transacción. Nuestro equipo le guiará en cada paso."
        },
        // Agrega más preguntas frecuentes aquí...
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
    if (promoSlider) {
        promoItems.forEach(item => {
            const promoItem = createElement('div', 'promo-item', item);
            promoSlider.appendChild(promoItem);
        });

        $(promoSlider).slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    // Inicializar el hero slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroImages.forEach(image => {
            lazyLoadImage(image).then(img => {
                const slide = createElement('div', 'hero-slide');
                slide.style.backgroundImage = `url(${img.src})`;
                heroSlider.appendChild(slide);
            });
        });

        $(heroSlider).slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    // Inicializar el slider de propiedades
    const propertySlider = document.querySelector('.property-slider');
    if (propertySlider) {
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
    }

    // Inicializar la sección de servicios
    const serviceGrid = document.getElementById('service-grid');
    if (serviceGrid) {
        services.forEach(service => {
            const serviceCard = createElement('div', 'service-card bg-white shadow-lg rounded-lg p-6 text-center');
            serviceCard.innerHTML = `
                <i class="${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="font-bold text-xl mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            `;
            serviceGrid.appendChild(serviceCard);
        });
    }

    // Inicializar la sección de tienda
    const storeSlider = document.getElementById('store-slider');
    if (storeSlider) {
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
    }

    // Manejador de eventos para el botón "Ver Detalles"
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('view-details')) {
            const propertyId = e.target.getAttribute('data-id');
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
        }
    });

    // Cerrar el modal
    const closeModal = document.getElementById('close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            const modal = document.getElementById('gallery-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    }

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

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
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

        searchInput.addEventListener('input', debouncedSearch);
    }

    // Inicializar el slider de testimonios
    const testimonialSlider = document.getElementById('testimonials-slider');
    if (testimonialSlider) {
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

        $(testimonialSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true
        });
    }

    // Inicializar el slider de Instagram
    const instagramSlider = document.getElementById('instagram-slider');
    if (instagramSlider) {
        instagramPosts.forEach(post => {
            lazyLoadImage(post.image).then(img => {
                const postCard = createElement('div', 'instagram-post bg-white shadow-lg rounded-lg overflow-hidden');
                postCard.innerHTML = `
                    <img src="${img.src}"   alt="${post.caption}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <p class="text-sm text-gray-600">${post.caption}</p>
                        <a href="${post.link}" target="_blank" class="text-primary hover:underline">Ver en Instagram</a>
                    </div>
                `;
                instagramSlider.appendChild(postCard);
            });
        });

        $(instagramSlider).slick({
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
    }

    // Inicializar la sección de YouTube
    const youtubeSlider = document.getElementById('youtube-slider');
    if (youtubeSlider) {
        youtubeVideos.forEach(video => {
            const videoCard = createElement('div', 'youtube-video');
            videoCard.innerHTML = `
                <iframe width="300" height="169" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="mt-2 text-sm text-gray-600">${video.title}</p>
            `;
            youtubeSlider.appendChild(videoCard);
        });
    }

    // Inicializar la sección de FAQ
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
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
        faqContainer.addEventListener('click', function(e) {
            if (e.target.closest('.faq-question')) {
                const question = e.target.closest('.faq-question');
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                answer.classList.toggle('active');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    }

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí iría la lógica para enviar el formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Inicializar el mapa (usando Leaflet como ejemplo)
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        const lat = parseFloat(mapContainer.getAttribute('data-lat'));
        const lng = parseFloat(mapContainer.getAttribute('data-lng'));

        const map = L.map(mapContainer).setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup('Janneth Aguirre Bienes Raíces')
            .openPopup();
    }

    // Botón "Volver arriba"
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
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
    if (installButton) {
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
    }
});