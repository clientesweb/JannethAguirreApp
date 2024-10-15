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
        div.className = 'w-full h-full';
        div.innerHTML = `<img src="${image}" alt="Hero image" class="w-full h-full object-cover">`;
        heroSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            speed: 1000
        });
    }

    // Función para crear el botón de WhatsApp
    function createWhatsAppButton(property) {
        const message = encodeURIComponent(`Hola, estoy interesado en la propiedad "${property.title}" con precio ${property.price}. ¿Podrían darme más información?`);
        return `<a href="https://wa.me/593987167782?text=${message}" class="bg-green-500 text-white px-4 py-2 rounded mt-2 inline-block" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp mr-2"></i>Consultar por WhatsApp
        </a>`;
    }

    // Inicializar el slider de propiedades destacadas
    const propertySlider = document.querySelector('.property-slider');
    properties.forEach(property => {
        const div = document.createElement('div');
        div.className = 'property-card bg-white shadow-lg rounded-lg overflow-hidden';
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 mb-2">${property.price}</p>
                ${createWhatsAppButton(property)}
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
    }

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
        div.dataset.type = property.type;
        div.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                <p class="text-gray-700 mb-2">${property.price}</p>
                ${createWhatsAppButton(property)}
                <button class="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-gallery" data-id="${property.id}">Ver Galería</button>
            </div>
        `;
        storeSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('#store-slider').slick({
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
    }

    // Filtrado de propiedades
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const propertyCards = document.querySelectorAll('.property-card');
            propertyCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            if (typeof $.fn.slick === 'function') {
                $('#store-slider').slick('setPosition');
            }
        });
    });

    // Modal de galería mejorado
    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.dataset.id;
            openGallery(propertyId);
        });
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('gallery-modal').classList.add('hidden');
        document.getElementById('gallery-modal').classList.remove('flex');
    });

    function openGallery(propertyId) {
        const property = properties.find(p => p.id === parseInt(propertyId));
        const galleryImagesUrls = [
            property.image,
            "/placeholder.svg?height=200&width=300",
            "/placeholder.svg?height=200&width=300"
        ];

        const galleryModal = document.getElementById('gallery-modal');
        const galleryImages = document.getElementById('gallery-images');
        const galleryInfo = document.getElementById('gallery-info');

        galleryImages.innerHTML = '';
        galleryImagesUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.className = 'w-full h-auto';
            galleryImages.appendChild(img);
        });

        galleryInfo.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">${property.title}</h2>
            <p class="text-xl mb-4">${property.price}</p>
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `;

        galleryModal.classList.remove('hidden');
        galleryModal.classList.add('flex');

        if (typeof $.fn.slick === 'function') {
            $('#gallery-images').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true
            });
        }
    }

    // Formulario de contacto
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        this.reset();
    });

    // YouTube Channel Videos
    const youtubeChannelId = 'UCiahlQJxCgPY-tEfjvkab8g';
    const youtubeApiKey = 'AIzaSyBPsHN1pv1ZCeRipAJL0CY50VD08uC4Q_Y';
    const youtubeSlider = document.getElementById('youtube-slider');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=5&type=video`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnailUrl = item.snippet.thumbnails.medium.url;

                const div = document.createElement('div');
                div.className = 'youtube-video';
                div.innerHTML = `
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <p class="mt-2 text-center">${title}</p>
                `;
                youtubeSlider.appendChild(div);
            });

            if (typeof $.fn.slick === 'function') {
                $('.youtube-slider').slick({
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
            }
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));

    // Testimonials
    const testimonialSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial-card bg-white shadow-lg rounded-lg p-6';
        div.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4">
            <p class="text-gray-600 mb-4 italic">"${testimonial.text}"</p>
            <p class="font-semibold text-center">${testimonial.name}</p>
        `;
        testimonialSlider.appendChild(div);
    });

    if (typeof $.fn.slick === 'function') {
        $('.testimonials-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true
        });
    }

    // Instagram Feed
    const instagramSlider = document.getElementById('instagram-slider');

    instagramPosts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'instagram-post';
        div.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${post.url}" data-instgrm-version="14">
                <a href="${post.url}" target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
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
    }

    // Cargar el script de Instagram
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(instagramScript);

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
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
        }
    });

    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
    });

    // Chatbot initialization
    AIRealEstateExpertChatbot.toggleChatbot();

    // Efecto de aparición al hacer scroll
    const faders = document.querySelectorAll('.fade-in-section');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Menú inferior responsivo
    const bottomNav = document.querySelector('.bottom-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            bottomNav.style.transform = 'translateY(100%)';
        } else {
            bottomNav.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
});