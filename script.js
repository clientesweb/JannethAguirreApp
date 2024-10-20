// Función para inicializar los sliders
function initSliders() {
    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

    $('#youtube-slider, #instagram-slider, #testimonials-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}

// Función para cargar las propiedades destacadas
function loadFeaturedProperties() {
    const featuredProperties = [
        { id: 1, title: "Casa de lujo en la playa", price: "$500,000", image: "https://via.placeholder.com/300x200.png?text=Casa+de+lujo" },
        { id: 2, title: "Apartamento céntrico", price: "$250,000", image: "https://via.placeholder.com/300x200.png?text=Apartamento+céntrico" },
        { id: 3, title: "Villa con piscina", price: "$750,000", image: "https://via.placeholder.com/300x200.png?text=Villa+con+piscina" },
        { id: 4, title: "Oficina moderna", price: "$300,000", image: "https://via.placeholder.com/300x200.png?text=Oficina+moderna" },
        { id: 5, title: "Terreno con vista al mar", price: "$200,000", image: "https://via.placeholder.com/300x200.png?text=Terreno" },
        { id: 6, title: "Casa de campo", price: "$400,000", image: "https://via.placeholder.com/300x200.png?text=Casa+de+campo" },
        { id: 7, title: "Penthouse de lujo", price: "$1,000,000", image: "https://via.placeholder.com/300x200.png?text=Penthouse" },
    ];

    const container = document.querySelector('#propiedades .grid');
    featuredProperties.forEach(property => {
        const propertyCard = `
            <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">${property.title}</h3>
                    <p class="text-gray-600">${property.price}</p>
                    <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors" onclick="openGallery(${property.id})">Ver más</button>
                </div>
            </div>
        `;
        container.innerHTML += propertyCard;
    });
}

// Función para cargar los servicios
function loadServices() {
    const services = [
        { icon: 'fa-home', title: 'Venta de Propiedades', description: 'Encuentre su hogar ideal con nuestra amplia selección de propiedades.' },
        { icon: 'fa-key', title: 'Alquiler de Propiedades', description: 'Ofrecemos opciones de alquiler para todos los presupuestos y necesidades.' },
        { icon: 'fa-chart-line', title: 'Inversiones Inmobiliarias', description: 'Asesoramos en las mejores oportunidades de inversión en el mercado.' },
        { icon: 'fa-building', title: 'Administración de Propiedades', description: 'Gestionamos su propiedad para maximizar su rentabilidad.' },
        { icon: 'fa-search', title: 'Búsqueda Personalizada', description: 'Encontramos la propiedad perfecta que se ajuste a sus requerimientos.' },
        { icon: 'fa-handshake', title: 'Asesoría Legal', description: 'Brindamos apoyo legal en todas las transacciones inmobiliarias.' }
    ];

    const container = document.getElementById('service-grid');
    services.forEach(service => {
        const serviceCard = `
            <div class="service-card">
                <i class="fas ${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        container.innerHTML += serviceCard;
    });
}

// Función para cargar los videos de YouTube
function loadYouTubeVideos() {
    const youtubeVideos = [
        { id: 'VIDEO_ID_1', title: 'Tour por casa de lujo' },
        { id: 'VIDEO_ID_2', title: 'Consejos para comprar tu primera casa' },
        { id: 'VIDEO_ID_3', title: 'Inversiones inmobiliarias en Ecuador' },
        { id: 'VIDEO_ID_4', title: 'Cómo elegir la mejor ubicación' },
        { id: 'VIDEO_ID_5', title: 'Tendencias en diseño de interiores 2024' }
    ];

    const container = document.getElementById('youtube-slider');
    youtubeVideos.forEach(video => {
        const videoElement = `
            <div class="youtube-video">
                <iframe width="300" height="169" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3 class="mt-2 text-lg font-semibold">${video.title}</h3>
            </div>
        `;
        container.innerHTML += videoElement;
    });
}

// Función para cargar los posts de Instagram
function loadInstagramPosts() {
    const instagramPosts = [
        { image: 'https://via.placeholder.com/300x300.png?text=Instagram+Post+1', caption: 'Hermosa vista desde nuestro último proyecto' },
        { image: 'https://via.placeholder.com/300x300.png?text=Instagram+Post+2', caption: 'Diseño moderno en nuestro nuevo apartamento' },
        { image: 'https://via.placeholder.com/300x300.png?text=Instagram+Post+3', caption: 'Celebrando la entrega de llaves con nuestros clientes' },
        { image: 'https://via.placeholder.com/300x300.png?text=Instagram+Post+4', caption: 'Explorando nuevas áreas para desarrollo inmobiliario' },
        { image: 'https://via.placeholder.com/300x300.png?text=Instagram+Post+5', caption: 'Tips para decorar tu nuevo hogar' }
    ];

    const container = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const postElement = `
            <div class="instagram-post">
                <img src="${post.image}" alt="Instagram post" class="w-full h-64 object-cover">
                <p class="mt-2 text-sm">${post.caption}</p>
            </div>
        `;
        container.innerHTML += postElement;
    });
}

// Función para cargar los testimonios
function loadTestimonials() {
    const testimonials = [
        { name: 'Juan Pérez', image: 'https://via.placeholder.com/60x60.png?text=JP', text: 'Excelente servicio, encontramos nuestra casa ideal gracias a Janneth Aguirre.' },
        { name: 'María González', image: 'https://via.placeholder.com/60x60.png?text=MG', text: 'Profesionalismo y dedicación en cada paso del proceso de compra.' },
        { name: 'Carlos Rodríguez', image: 'https://via.placeholder.com/60x60.png?text=CR', text: 'Asesoramiento experto que hizo la diferencia en nuestra inversión inmobiliaria.' },
        { name: 'Ana Martínez', image: 'https://via.placeholder.com/60x60.png?text=AM', text: 'Atención personalizada y un conocimiento profundo del mercado.' },
        { name: 'Luis Morales', image: 'https://via.placeholder.com/60x60.png?text=LM', text: 'Rapidez y eficiencia en la venta de nuestra propiedad. ¡Muy recomendados!' }
    ];

    const container = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const testimonialElement = `
            <div class="testimonial">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="rounded-full">
                <p>"${testimonial.text}"</p>
                <h4>${testimonial.name}</h4>
            </div>
        `;
        container.innerHTML += testimonialElement;
    });
}

// Función para cargar las FAQs
function loadFAQs() {
    const faqs = [
        { question: '¿Cuál es el proceso para comprar una propiedad?', answer: 'El proceso generalmente incluye: búsqueda de la propiedad, negociación, firma de contrato, pago y transferencia de título. Nuestro equipo le guiará en cada paso.' },
        { question: '¿Qué documentos necesito para vender mi propiedad?', answer: 'Necesitará el título de propiedad, certificado de gravámenes, pago de impuestos al día, y cédula de identidad. Nosotros le ayudaremos a reunir toda la documentación necesaria.' },
        { question: '¿Ofrecen financiamiento para la compra de propiedades?', answer: 'No ofrecemos financiamiento directo, pero trabajamos con varias instituciones financieras y podemos ayudarle a encontrar la mejor opción de crédito para su situación.' },
        { question: '¿Cuánto tiempo toma normalmente vender una propiedad?', answer: 'El tiempo de venta puede variar dependiendo de factores como la ubicación, el precio y las condiciones del mercado. En promedio, puede tomar entre 3 a 6 meses.' },
        { question: '¿Qué áreas de Ecuador cubren sus servicios?', answer: 'Nuestros servicios cubren principalmente Guayaquil y sus alrededores, pero también tenemos propiedades y ofrecemos servicios en otras ciudades importantes de Ecuador.' }
    ];

    const container = document.getElementById('faq-container');
    faqs.forEach((faq, index) => {
        const faqElement = `
            <div class="faq-item" id="faq-${index}">
                <div class="faq-question" onclick="toggleFAQ(${index})">
                    ${faq.question}
                    <i class="fas fa-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            </div>
        `;
        container.innerHTML += faqElement;
    });
}

// Función para alternar la visibilidad de las respuestas de las FAQs
function toggleFAQ(index) {
    const faqItem = document.getElementById(`faq-${index}`);
    faqItem.classList.toggle('active');
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario, por ejemplo, usando fetch para una API
        alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
        form.reset();
    });
}

// Función para el efecto de aparición al hacer scroll
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Función para el botón "Volver arriba"
function handleBackToTopButton() {
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

// Función para manejar la galería de imágenes
function handleImageGallery() {
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const fullImageContainer = document.getElementById('full-image-container');
    const fullImage = document.getElementById('full-image');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');
    let currentImageIndex = 0;
    let images = [];

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        fullImageContainer.style.display = 'none';
    });

    window.openGallery = (propertyId) => {
        // Aquí deberías cargar las imágenes reales de la propiedad
        images = [
            'https://via.placeholder.com/800x600.png?text=Imagen+1',
            'https://via.placeholder.com/800x600.png?text=Imagen+2',
            'https://via.placeholder.com/800x600.png?text=Imagen+3',
            'https://via.placeholder.com/800x600.png?text=Imagen+4',
        ];

        const galleryImages = document.getElementById('gallery-images');
        galleryImages.innerHTML = '';
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Imagen ${index + 1}`;
            img.onclick = () => showFullImage(index);
            galleryImages.appendChild(img);
        });

        document.getElementById('gallery-info').textContent = `Propiedad ID: ${propertyId}`;
        modal.style.display = 'flex';
    };

    function showFullImage(index) {
        currentImageIndex = index;
        fullImage.src = images[index];
        fullImageContainer.style.display = 'flex';
    }

    prevImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showFullImage(currentImageIndex);
    });

    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showFullImage(currentImageIndex);
    });
}

// Función para manejar el filtrado y búsqueda en la tienda
function handleStoreFiltering() {
    const properties = [
        { id: 1, title: "Casa de lujo en la playa", price: 500000, type: "casa", location: "playa" },
        { id: 2, title: "Apartamento céntrico", price: 250000, type: "apartamento", location: "ciudad" },
        { id: 3, title: "Villa con piscina", price: 750000, type: "casa", location: "suburbio" },
        { id: 4, title: "Oficina moderna", price: 300000, type: "oficina", location: "ciudad" },
        { id: 5, title: "Terreno con vista al mar", price: 200000, type: "terreno", location: "playa" },
        { id: 6, title: "Casa de campo", price: 400000, type: "casa", location: "campo" },
        { id: 7, title: "Penthouse de lujo", price: 1000000, type: "apartamento", location: "ciudad" },
    ];

    const filterButtons = document.getElementById('filter-buttons');
    const storeSlider = document.getElementById('store-slider');
    const searchInput = document.getElementById('search-input');

    // Crear botones de filtro
    const types = [...new Set(properties.map(p => p.type))];
    types.forEach(type => {
        const button = document.createElement('button');
        button.textContent = type.charAt(0).toUpperCase() + type.slice(1);
        button.addEventListener('click', () => filterProperties(type));
        filterButtons.appendChild(button);
    });

    // Función para filtrar propiedades
    function filterProperties(type) {
        const filteredProperties = type ? properties.filter(p => p.type === type) : properties;
        renderProperties(filteredProperties);
        
        // Actualizar estilos de los botones
        document.querySelectorAll('#filter-buttons button').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.toLowerCase() === type);
        });
    }

    // Función para renderizar propiedades
    function renderProperties(props) {
        storeSlider.innerHTML = '';
        props.forEach(property => {
            const propertyCard = `
                <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/300x200.png?text=${property.title}" alt="${property.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-semibold mb-2">${property.title}</h3>
                        <p class="text-gray-600">$${property.price.toLocaleString()}</p>
                        <p class="text-gray-500">${property.location}</p>
                        <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors" onclick="openGallery(${property.id})">Ver más</button>
                    </div>
                </div>
            `;
            storeSlider.innerHTML += propertyCard;
        });
    }

    // Manejar la búsqueda
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProperties = properties.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.type.toLowerCase().includes(searchTerm) ||
            p.location.toLowerCase().includes(searchTerm)
        );
        renderProperties(filteredProperties);
    });

    // Inicializar con todas las propiedades
    renderProperties(properties);
}

// Función para manejar la instalación de la PWA
function handlePWAInstallation() {
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
        installButton.style.display = 'none';
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    loadFeaturedProperties();
    loadServices();
    loadYouTubeVideos();
    loadInstagramPosts();
    loadTestimonials();
    loadFAQs();
    handleContactForm();
    handleScrollAnimation();
    handleBackToTopButton();
    handleImageGallery();
    handleStoreFiltering();
    handlePWAInstallation();
});

// Lazy loading de imágenes
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        let active = false;

        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});