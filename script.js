document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display =  'none';
    });

    // Promociones
    const promos = [
        "¡Oferta especial! 10% de descuento en propiedades seleccionadas",
        "Nueva propiedad disponible en Guayaquil. ¡No te la pierdas!",
        "Financiamiento disponible. ¡Consulta nuestras opciones!",
        "¡Visita virtual disponible para todas nuestras propiedades!"
    ];

    const promoSlider = document.querySelector('.promo-slider');
    promos.forEach(promo => {
        const div = document.createElement('div');
        div.textContent = promo;
        promoSlider.appendChild(div);
    });

    $('.promo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true
    });

    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroImages = [
        '/img/hero-image-1.jpg',
        '/img/hero-image-2.jpg',
        '/img/hero-image-3.jpg'
    ];

    heroImages.forEach(image => {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(${image})`;
        heroSlider.appendChild(div);
    });

    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true
    });

    // Propiedades
    const properties = [
        { id: 1, title: "Departamentos en venta – Orlando Florida", price: "$350,000", image: "/img/orlandoflorida.jpg", type: "venta" },
        { id: 2, title: "Departamento vista al rio – Via Samborondon", price: "$1,500/mes", image: "/img/departamentos.jpg", type: "alquiler" },
        { id: 3, title: "Locales comerciales y oficinas – Via Samborondon", price: "$120,000", image: "/img/locales.jpg", type: "venta" },
        // Agrega más propiedades aquí
    ];

    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 text-base mb-4">${property.price}</p>
                <button class="view-gallery bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors" data-id="${property.id}">Ver Detalles</button>
            </div>
        `;
        propertySlider.appendChild(div);
    });

    $('.property-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
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

    // Servicios
    const services = [
        { title: "Compra de Propiedades", description: "Te ayudamos a encontrar la propiedad perfecta para ti.", icon: "fas fa-home" },
        { title: "Venta de Propiedades", description: "Vendemos tu propiedad al mejor precio del mercado.", icon: "fas fa-dollar-sign" },
        { title: "Alquiler de Propiedades", description: "Encuentra la propiedad ideal para alquilar.", icon: "fas fa-key" },
        { title: "Asesoría Legal", description: "Te brindamos asesoría legal en todo el proceso.", icon: "fas fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasamos tu propiedad al valor real del mercado.", icon: "fas fa-chart-line" },
        { title: "Gestión de Propiedades", description: "Nos encargamos de la gestión completa de tu propiedad.", icon: "fas fa-tasks" }
    ];

    const serviceGrid = document.getElementById('service-grid');
    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md text-center';
        div.innerHTML = `
            <i class="${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        `;
        serviceGrid.appendChild(div);
    });

    // Tienda de Propiedades
    const storeSlider = document.getElementById('store-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.setAttribute('data-type', property.type);
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 text-base mb-4">${property.price}</p>
                <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">${property.type}</span>
            </div>
        `;
        storeSlider.appendChild(div);
    });

    // Filtrado de propiedades
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const propertyCards = document.querySelectorAll('.property-card');
            
            propertyCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

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
    });

    // Modal de galería
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const viewGalleryButtons = document.querySelectorAll('.view-gallery');

    viewGalleryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const propertyId = button.getAttribute('data-id');
            const property = properties.find(p => p.id === parseInt(propertyId));
            
            const galleryImages = document.getElementById('gallery-images');
            const galleryInfo = document.getElementById('gallery-info');
            
            galleryImages.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const img = document.createElement('img');
                img.src = property.image;
                img.alt = `${property.title} - Imagen ${i + 1}`;
                img.className = 'w-32 h-32 object-cover rounded';
                galleryImages.appendChild(img);
            }
            
            galleryInfo.innerHTML = `
                <h3 class="text-xl font-bold">${property.title}</h3>
                <p class="text-lg">${property.price}</p>
                <p>Tipo: ${property.type}</p>
                <p class="mt-4">${property.description || 'Descripción no disponible.'}</p>
                <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Contactar agente</button>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    });

    // YouTube Playlist
    const youtubeVideos = [
        { id: 'VIDEO_ID_1', title: 'Título del Video 1' },
        { id: 'VIDEO_ID_2', title: 'Título del Video 2' },
        { id: 'VIDEO_ID_3', title: 'Título del Video 3' },
    ];

    const youtubeSlider = document.getElementById('youtube-slider');
    youtubeVideos.forEach(video => {
        const div = document.createElement('div');
        div.className = 'youtube-video';
        div.innerHTML = `
            <iframe width="300" height="169" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h3 class="mt-2 text-lg font-semibold">${video.title}</h3>
        `;
        youtubeSlider.appendChild(div);
    });

    // Testimonios
    const testimonials = [
        { name: "Juan Pérez", text: "Excelente servicio. Encontré mi casa ideal gracias a Janneth Aguirre." },
        { name: "María González", text: "Profesionalismo y dedicación en cada paso del proceso de compra." },
        { name: "Carlos Rodríguez", text: "Vendí mi propiedad en tiempo récord. ¡Altamente recomendado!" },
    ];

    const testimonialSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-lg shadow-md';
        div.innerHTML = `
            <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
            <p class="font-bold">- ${testimonial.name}</p>
        `;
        testimonialSlider.appendChild(div);
    });

    $('#testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });

    // Instagram Feed
    const instagramPosts = [
        { image: '/img/instagram-1.jpg', link: '#', caption: 'Nueva propiedad disponible' },
        { image: '/img/instagram-2.jpg', link: '#', caption: 'Visita nuestras oficinas' },
        { image: '/img/instagram-3.jpg', link: '#', caption: 'Cliente satisfecho con su nueva casa' },
    ];

    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'instagram-post';
        div.innerHTML = `
            <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                <img src="${post.image}" alt="${post.caption}" class="w-full h-64 object-cover rounded-lg">
                <p class="mt-2 text-sm text-gray-600">${post.caption}</p>
            </a>
        `;
        instagramSlider.appendChild(div);
    });

    $('#instagram-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
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

    // FAQ Section
    const faqItems = [
        { question: "¿Cómo puedo comprar una propiedad?", answer: "Para comprar una propiedad, primero debe contactarnos para programar una visita. Luego, nuestros agentes le guiarán a través del proceso de oferta y cierre." },
        { question: "¿Ofrecen financiamiento?", answer: "No ofrecemos financiamiento directo, pero podemos recomendarle instituciones financieras confiables que pueden ayudarle con préstamos hipotecarios." },
        { question: "¿Cuánto tiempo toma el proceso de compra?", answer: "El tiempo puede variar, pero generalmente el proceso de compra toma entre 30 y 60 días desde la oferta aceptada hasta el cierre." },
        { question: "¿Qué documentos necesito para vender mi propiedad?", answer: "Los documentos principales incluyen el título de propiedad, certificado de gravámenes, impuestos al día, y cédula de identidad. Nuestro equipo le guiará sobre cualquier documento adicional necesario." },
        { question: "¿Realizan tasaciones de propiedades?", answer: "Sí, ofrecemos servicios de tasación profesional para determinar el valor de mercado de su propiedad." }
    ];

    const faqContainer = document.getElementById('faq-container');
    faqItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <div class="faq-question" onclick="toggleFAQ(${index})">
                ${item.question}
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                ${item.answer}
            </div>
        `;
        faqContainer.appendChild(div);
    });

    // Función para alternar las respuestas del FAQ
    window.toggleFAQ = function(index) {
        const faqItems = document.querySelectorAll('.faq-item');
        const answer = faqItems[index].querySelector('.faq-answer');
        const icon = faqItems[index].querySelector('i');
        answer.classList.toggle('active');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    };

    // Mapa
    function initMap() {
        const mapContainer = document.getElementById('map-container');
        const lat = parseFloat(mapContainer.getAttribute('data-lat'));
        const lng = parseFloat(mapContainer.getAttribute('data-lng'));
        const map = new google.maps.Map(mapContainer, {
            center: { lat, lng },
            zoom: 15
        });
        new google.maps.Marker({
            position: { lat, lng },
            map: map
        });
    }

    // Cargar el script de Google Maps de forma asíncrona
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Gracias por contactarnos. Te responderemos pronto.');
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

    // Instalación de la PWA
    let deferredPrompt;
    const installButton = document.getElementById('install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
    });

    installButton.addEventListener('click', (e) => {
        installButton.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuario aceptó la instalación de la PWA');
            } else {
                console.log('Usuario rechazó la instalación de la PWA');
            }
            deferredPrompt = null;
        });
    });

    // Mejorar la funcionalidad de breadcrumbs
    function updateBreadcrumbs() {
        const breadcrumbList = document.querySelector('.breadcrumbs ol');
        const currentSection = document.querySelector('section:target') || document.querySelector('section');
        
        // Limpiar breadcrumbs existentes excepto el inicio
        while (breadcrumbList.children.length > 1) {
            breadcrumbList.removeChild(breadcrumbList.lastChild);
        }

        // Agregar la sección actual a los breadcrumbs
        const li = document.createElement('li');
        li.setAttribute('itemprop', 'itemListElement');
        li.setAttribute('itemscope', '');
        li.setAttribute('itemtype', 'https://schema.org/ListItem');
        li.innerHTML = `
            <span itemprop="name">${currentSection.querySelector('h2').textContent}</span>
            <meta itemprop="position" content="2" />
        `;
        breadcrumbList.appendChild(li);
    }

    // Llamar a updateBreadcrumbs al cargar la página y cuando cambie el hash
    updateBreadcrumbs();
    window.addEventListener('hashchange', updateBreadcrumbs);
});