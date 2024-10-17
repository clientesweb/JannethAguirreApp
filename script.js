document.addEventListener('DOMContentLoaded', function() {
    // Constantes
    const YOUTUBE_CHANNEL_ID = 'UCiahlQJxCgPY-tEfjvkab8g';
    const YOUTUBE_API_KEY = 'AIzaSyBPsHN1pv1ZCeRipAJL0CY50VD08uC4Q_Y';

    // Datos
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
            title: "Depart. en venta – Orlando Florida – Condo Hotel", 
            price: "Consultar", 
            image: "/img/orlandoflorida.jpg", 
            type: "venta",
            description: "Proyecto en pre-construcción con 6 torres y 378 apartamentos, ofrecemos crédito hipotecario para inversionistas latinoamericanos. El Sycamore Club, con 3 pisos, cuenta con gastronomía, deportes, recreación, club de niños, espacio para eventos, gimnasio, spa y salón de belleza. Estrategia exclusiva de alquiler con alto porcentaje de rentabilidad.",
            images: ["/img/orlando1.jpg", "/img/orlando3.jpg", "/img/orlando10.png", "/img/orlando6.png", "/img/orlando7.jpeg", "/img/orlando8.png", "/img/orlando9.png", "/img/orlandoflorida8.jpg", "/img/orlandoflorida9.jpg", "/img/orlandoflorida10.jpg"]
        },
        { 
            id: 2, 
            title: "Departamento vista al rio – Via Samborondon", 
            price: "Consultar", 
            image: "/img/departamentos.jpg", 
            type: "alquiler",
            description: "Últimas unidades disponibles de 2 y 3 habitaciones con balcones, master y áreas sociales con vista al río. Incluyen dormitorio secundario completo, sala, comedor, cocina tipo americana, lavandería, parqueo, piscina, pérgola y malecón. Trabajamos con todas las instituciones financieras y gestionamos su crédito hipotecario. Crédito directo disponible, consulte nuestras opciones de financiamiento.",
            images: ["/img/i1.jpeg", "/img/i2-768x1024.jpeg", "/img/i3.jpeg", "/img/i4-1024x576.jpeg", "/img/i5-1024x682.jpeg", "/img/i6.jpeg", "/img/departamentos7.jpg", "/img/departamentos8.jpg", "/img/departamentos9.jpg", "/img/departamentos10.jpg"]
        },
        { 
            id: 3, 
            title: "Locales comerciales y oficinas – Via Samborondon", 
            price: "Consultar", 
            image: "/img/locales.jpg", 
            type: "venta",
            description: "Proyecto en pre-construcción, estratégicamente ubicado en el nuevo Samborondón, cerca de centros comerciales, iglesias, clínicas, escuelas, universidades, restaurantes y el Parque Bicentenario. Venta directa con plusvalía garantizada por el alto movimiento del sector. Ofrecemos crédito directo a 16 meses sin intereses y apoyo en la gestión de crédito bancario. Al ser un proyecto en planos, facilita la organización financiera. Cuenta con ascensor, excelente precio y ubicación, y oficina de administración.",
            images: ["/img/locales1.jpg", "/img/locales2.jpg", "/img/locales3.jpeg", "/img/locales4.jpg", "/img/localea5.jpg", "/img/locales6.jpg", "/img/locales7.jpg", "/img/locales8.jpg", "/img/locales9.jpg", "/img/locales10.jpg"]
        },
        { 
            id: 4, 
            title: "Oficina ejecutiva en Quito", 
            price: "$2,200/mes", 
            image: "/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", 
            type: "alquiler",
            description: "Oficina ejecutiva de lujo en el corazón financiero de Quito. Este espacio de trabajo premium ofrece un ambiente profesional y sofisticado, ideal para empresas que buscan proyectar una imagen de éxito. Con vistas impresionantes de la ciudad, la oficina cuenta con tecnología de punta, salas de conferencias equipadas y áreas comunes elegantes. Ubicada en un edificio de prestigio con seguridad 24/7, esta oficina proporciona el entorno perfecto para impulsar su negocio al siguiente nivel.",
            images: ["/img/vista-lujosa-villa-diseno-arquitectonico-moderno_23-2151694026.jpg", "/img/oficina2.jpg", "/img/oficina3.jpg", "/img/oficina4.jpg", "/img/oficina5.jpg", "/img/oficina6.jpg", "/img/oficina7.jpg", "/img/oficina8.jpg", "/img/oficina9.jpg", "/img/oficina10.jpg"]
        },
        { 
            id: 5, 
            title: "Casa de campo en Cuenca", 
            price: "$220,000", 
            image: "/img/pareja-caminando-cabina_23-2147833123.jpg", 
            type: "venta",
            description: "Encantadora casa de campo en las afueras de Cuenca. Perfecta para escapar de la ciudad. Esta propiedad única combina el encanto rústico con comodidades modernas, ofreciendo un refugio tranquilo rodeado de naturaleza. Con amplios espacios verdes, la casa cuenta con detalles arquitectónicos tradicionales y acabados de calidad. Disfrute de impresionantes vistas a las montañas, aire puro y la serenidad del campo, todo a poca distancia de las comodidades de la ciudad de Cuenca. Ideal para quienes buscan un estilo de vida relajado o una segunda residencia de ensueño.",
            images: ["/img/pareja-caminando-cabina_23-2147833123.jpg", "/img/casa-campo2.jpg", "/img/casa-campo3.jpg", "/img/casa-campo4.jpg", "/img/casa-campo5.jpg", "/img/casa-campo6.jpg", "/img/casa-campo7.jpg", "/img/casa-campo8.jpg", "/img/casa-campo9.jpg", "/img/casa-campo10.jpg"]
        },
        { 
            id: 6, 
            title: "Condominio de lujo en Manta", 
            price: "$450,000", 
            image: "/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", 
            type: "proyecto",
            description: "Proyecto de condominio de lujo frente al mar en Manta. Entrega en 2025. Este exclusivo desarrollo ofrece una oportunidad única de vivir el sueño de una vida frente al océano. Con un diseño vanguardista y amenidades de clase mundial, el condominio promete un estilo de vida de resort todo el año. Disfrute de espectaculares puestas de sol desde su balcón privado, relájese en la piscina infinity con vista al mar, y acceda directamente a una hermosa playa. Incluye gimnasio, spa, restaurantes y seguridad las 24 horas. Una inversión perfecta para aquellos que buscan lo mejor en vida costera.",
            images: ["/img/gran-hotel-palmeras-playa-tailandia_1253-929.jpg", "/img/condominio2.jpg", "/img/condominio3.jpg", "/img/condominio4.jpg", "/img/condominio5.jpg", "/img/condominio6.jpg", "/img/condominio7.jpg", "/img/condominio8.jpg", "/img/condominio9.jpg", "/img/condominio10.jpg"]
        }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones inmobiliarias", icon: "fa-gavel" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales de bienes raíces", icon: "fa-calculator" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler de manera eficiente", icon: "fa-key" }
    ];

    const testimonials = [
        { id: 1, name: "Juan Pérez",  text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre.", image: "/img/testimonial1.jpg" },
        { id: 2, name: "María López", text: "Profesionalismo y dedicación en cada paso del proceso de compra.", image: "/img/testimonial2.jpg" },
        { id: 3, name: "Carlos Ruiz", text: "La mejor experiencia en venta de propiedades. Altamente recomendado.", image: "/img/testimonial3.jpg" }
    ];

    const faqs = [
        { question: "¿Cuál es el proceso para comprar una propiedad?", answer: "El proceso generalmente incluye: búsqueda de la propiedad, negociación, firma de contrato, pago y transferencia de título. Nuestro equipo le guiará en cada paso." },
        { question: "¿Ofrecen financiamiento para la compra de propiedades?", answer: "Sí, trabajamos con varias instituciones financieras y podemos ayudarle a encontrar la mejor opción de financiamiento para su situación." },
        { question: "¿Cómo puedo listar mi propiedad para venta o alquiler?", answer: "Puede contactarnos directamente y uno de nuestros agentes le asistirá en el proceso de listado de su propiedad." },
        { question: "¿Qué áreas cubren sus servicios?", answer: "Nuestros servicios cubren principalmente Guayaquil, Quito y otras ciudades importantes de Ecuador, pero también manejamos propiedades en ubicaciones turísticas y zonas rurales." }
    ];

    // Funciones de utilidad
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createPropertyCard(property) {
        return `
            <div class="property-card bg-white shadow-lg rounded-lg overflow-hidden" data-type="${property.type}">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${property.title}</h3>
                    <p class="text-gray-700">${property.price}</p>
                    <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            </div>
        `;
    }

    // Inicializaciones
    function initPromoSlider() {
        $('.promo-slider').html(promoItems.map(item => `<div class="text-center">${item}</div>`).join(''));
        $('.promo-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false
        });
    }

    function initHeroSlider() {
        $('.hero-slider').html(heroImages.map(img => `<div style="background-image: url('${img}');" class="w-full h-full bg-cover bg-center"></div>`).join(''));
        $('.hero-slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });
    }

    function initPropertySlider() {
        $('.property-slider').html(shuffleArray(properties).slice(0, 3).map(createPropertyCard).join(''));
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

    function initServiceGrid() {
        $('#service-grid').html(services.map(service => `
            <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join(''));
    }

    function initStoreSlider() {
        $('#store-slider').html(properties.map(createPropertyCard).join(''));
    }

    function initTestimonialsSlider() {
        $('#testimonials-slider').html(testimonials.map(testimonial => `
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="font-semibold">${testimonial.name}</h3>
                </div>
                <p class="text-gray-600">"${testimonial.text}"</p>
            </div>
        `).join(''));
        $('#testimonials-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: true
        });
    }

    function initFAQs() {
        $('#faq-container').html(faqs.map((faq, index) => `
            <div class="faq-item">
                <div class="faq-question flex justify-between items-center cursor-pointer">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer mt-2 text-gray-600 hidden">
                    ${faq.answer}
                </div>
            </div>
        `).join(''));

        $('.faq-question').on('click', function() {
            $(this).parent().toggleClass('active');
            $(this).find('.faq-icon').toggleClass('rotate-180');
            $(this).next('.faq-answer').slideToggle();
        });
    }

    function initYouTubePlaylist() {
        $.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`, function(data) {
            const videos = data.items.map(item => `
                <div class="youtube-video">
                    <iframe width="280" height="157" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    <h3 class="mt-2 font-semibold">${item.snippet.title}</h3>
                </div>
            `).join('');
            $('#youtube-slider').html(videos);
            $('#youtube-slider').slick({
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
        });
    }

    function initInstagramFeed() {
        // Implementar cuando se tenga acceso a la API de Instagram
    }

    function initMap() {
        const mapContainer = document.getElementById('map-container');
        const lat = parseFloat(mapContainer.dataset.lat);
        const lng = parseFloat(mapContainer.dataset.lng);
        const map = new google.maps.Map(mapContainer, {
            center: { lat, lng },
            zoom: 15
        });
        new google.maps.Marker({
            position: { lat, lng },
            map: map
        });
    }

    // Event Listeners
    function setupEventListeners() {
        // Filtrado de propiedades
        $('.filter-btn').on('click', function() {
            const filter = $(this).data('filter');
            if (filter === 'all') {
                $('.property-card').show();
            } else {
                $('.property-card').hide();
                $(`.property-card[data-type="${filter}"]`).show();
            }
        });

        // Búsqueda de propiedades
        $('#search-input').on('input', function() {
            const searchTerm = $(this).val().toLowerCase();
            $('.property-card').each(function() {
                const title = $(this).find('h3').text().toLowerCase();
                if (title.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });

        // Ver detalles de propiedad
        $(document).on('click', '.view-details', function() {
            const propertyId = $(this).data('id');
            const property = properties.find(p => p.id === propertyId);
            if (property) {
                $('#gallery-images').html(property.images.map(img => `<img src="${img}" alt="${property.title}" class="w-24 h-24 object-cover m-1 cursor-pointer">`).join(''));
                $('#gallery-info').html(`
                    <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                    <p class="mb-2"><strong>Precio:</strong> ${property.price}</p>
                    <p>${property.description}</p>
                `);
                $('#gallery-modal').removeClass('hidden').addClass('flex');
            }
        });

        // Cerrar modal de galería
        $('#close-modal').on('click', function() {
            $('#gallery-modal').removeClass('flex').addClass('hidden');
        });

        // Ver imagen completa
        $('#gallery-images').on('click', 'img', function() {
            const src = $(this).attr('src');
            $('#full-image').attr('src', src);
            $('#full-image-container').removeClass('hidden').addClass('flex');
        });

        // Cerrar imagen completa
        $('#full-image-container').on('click', function(e) {
            if (e.target === this) {
                $(this).removeClass('flex').addClass('hidden');
            }
        });

        // Navegación de imágenes
        let currentImageIndex = 0;
        $('#prev-image, #next-image').on('click', function() {
            const images = $('#gallery-images img');
            if ($(this).attr('id') === 'next-image') {
                currentImageIndex = (currentImageIndex + 1) % images.length;
            } else {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            }
            $('#full-image').attr('src', $(images[currentImageIndex]).attr('src'));
        });

        // Formulario de contacto
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            // Implementar lógica de envío de formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });

        // Botón de volver arriba
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        $('#back-to-top').click(function() {
            $('html, body').animate({scrollTop : 0}, 800);
            return false;
        });

        // Efecto de aparición al hacer scroll
        $(window).scroll(function() {
            $('.fade-in-section').each(function() {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                    $(this).addClass('is-visible');
                }
            });
        });

        // Instalación de la PWA
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            $('#install-app').show();
        });

        $('#install-app').on('click', (e) => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuario aceptó la instalación de la A2HS');
                }
                deferredPrompt = null;
            });
        });
    }

    // Inicialización principal
    function init() {
        initPromoSlider();
        initHeroSlider();
        initPropertySlider();
        initServiceGrid();
        initStoreSlider();
        initTestimonialsSlider();
        initFAQs();
        initYouTubePlaylist();
        initInstagramFeed();
        setupEventListeners();

        // Remover el preloader
        $('.preloader').fadeOut();
    }

    // Cargar el mapa de Google después de que la página esté completamente cargada
    window.addEventListener('load', function() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
        script.defer = true;
        document.head.appendChild(script);
    });

    // Iniciar la aplicación
    init();
});