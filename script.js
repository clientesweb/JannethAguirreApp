document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
    const heroImages = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
    ];

    const properties = [
        { 
            id: 1, 
            title: "DEPARTAMENTOS EN VENTA NUEVO SAMBORONDON", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
            type: "venta",
            description: "¡Oportunidad única! Hermoso departamento en la exclusiva zona de Nuevo Samborondón. Este espacioso hogar cuenta con 2 habitaciones, 2 baños modernos, cocina abierta, sala y comedor acogedores. Áreas sociales incluyen piscina, gimnasio y salón de eventos. Seguridad 24/7 con conserjería y vigilancia.",
            features: [
                "2 habitaciones con armarios empotrados",
                "2 baños modernos con acabados de alta calidad",
                "Cocina abierta con muebles a medida",
                "Sala y comedor acogedores",
                "Áreas sociales: piscina, gimnasio, salón de eventos",
                "Seguridad 24/7 con conserjería y vigilancia"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ]
        },
        { 
            id: 2, 
            title: "Casa de Lujo en Samborondón", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
            type: "venta",
            description: "Espectacular casa de lujo en el corazón de Samborondón. Amplios espacios, acabados de primera y vistas impresionantes.",
            gallery: [
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ]
        },
        { 
            id: 3, 
            title: "Oficina Comercial en Centro Empresarial", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
            type: "alquiler",
            description: "Moderna oficina comercial en el principal centro empresarial de la ciudad. Ideal para empresas en crecimiento.",
            gallery: [
                "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ]
        },
        { 
            id: 4, 
            title: "Penthouse con Vista al Mar", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
            type: "venta",
            description: "Exclusivo penthouse con impresionantes vistas al mar. Terraza privada, acabados de lujo y comodidades de primer nivel.",
            gallery: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687644-a7e0e1e1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            ]
        },
        { 
            id: 5, 
            title: "Terreno para Desarrollo Residencial", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
            type: "venta",
            description: "Amplio terreno ideal para desarrollo residencial. Ubicación estratégica con todos los servicios disponibles.",
            gallery: [
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
        { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" },
        { image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80", link: "#" }
    ];

    // Función para crear el slider de imágenes del hero
    function createHeroSlider() {
        console.log("Creating hero slider...");
        const heroSlider = document.querySelector('.hero-slider');
        if (!heroSlider) {
            console.error('Hero slider element not found');
            return;
        }
        heroImages.forEach(image => {
            const slide = document.createElement('div');
            slide.style.backgroundImage = `url(${image})`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
            heroSlider.appendChild(slide);
        });
        
        if (typeof $.fn.slick === 'function') {
            $('.hero-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 5000
            });
            console.log("Hero slider created successfully.");
        } else {
            console.error('Slick slider not loaded');
        }
    }

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
        console.log("Creating Quienes Somos slider...");
        const quienesSomosSlider = document.querySelector('.quienes-somos-slider');
        if (!quienesSomosSlider) {
            console.error('Quienes Somos slider element not found');
            return;
        }
        const images = [
            "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        ];
        images.forEach(image => {
            const slide = document.createElement('div');
            slide.innerHTML = `<img src="${image}" alt="Equipo" class="w-full h-64 object-cover rounded-lg">`;
            quienesSomosSlider.appendChild(slide);
        });
        
        if (typeof $.fn.slick === 'function') {
            $('.quienes-somos-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            sli

desToScroll: 1
                        }
                    }
                ]
            });
            console.log("Quienes Somos slider created successfully.");
        } else {
            console.error('Slick slider not loaded');
        }
    }

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        console.log("Creating featured properties...");
        const propertiesContainer = document.querySelector('.propiedades-slider');
        if (!propertiesContainer) {
            console.error('Properties container not found');
            return;
        }
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
        
        if (typeof $.fn.slick === 'function') {
            $('.propiedades-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log("Featured properties slider created successfully.");
        } else {
            console.error('Slick slider not loaded');
        }
    }

    // Función para crear las tarjetas de servicios
    function createServiceCards() {
        console.log("Creating service cards...");
        const servicesContainer = document.querySelector('.services-container');
        if (!servicesContainer) {
            console.error('Services container not found');
            return;
        }
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'bg-white p-6 rounded-lg shadow-md';
            serviceCard.innerHTML = `
                <i class="${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            `;
            servicesContainer.appendChild(serviceCard);
        });
        console.log("Service cards created successfully.");
    }

    // Función para crear el slider de testimonios
    function createTestimonialsSlider() {
        console.log("Creating testimonials slider...");
        const testimonialsContainer = document.querySelector('.testimonials-slider');
        if (!testimonialsContainer) {
            console.error('Testimonials container not found');
            return;
        }
        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'bg-white p-6 rounded-lg shadow-md';
            slide.innerHTML = `
                <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                <p class="font-semibold">${testimonial.name}</p>
            `;
            testimonialsContainer.appendChild(slide);
        });

        if (typeof $.fn.slick === 'function') {
            $('.testimonials-slider').slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
            });
            console.log("Testimonials slider created successfully.");
        } else {
            console.error('Slick slider not loaded');
        }
    }

    // Función para crear el slider de Instagram
    function createInstagramSlider() {
        console.log("Creating Instagram slider...");
        const instagramContainer = document.querySelector('.instagram-slider');
        if (!instagramContainer) {
            console.error('Instagram container not found');
            return;
        }
        instagramPosts.forEach(post => {
            const slide = document.createElement('div');
            slide.className = 'instagram-post';
            slide.innerHTML = `
                <a href="${post.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${post.image}" alt="Instagram Post" class="w-full h-64 object-cover rounded-lg">
                </a>
            `;
            instagramContainer.appendChild(slide);
        });

        if (typeof $.fn.slick === 'function') {
            $('.instagram-slider').slick({
                dots: false,
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
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log("Instagram slider created successfully.");
        } else {
            console.error('Slick slider not loaded');
        }
    }

    // Función para crear las preguntas frecuentes
    function createFAQs() {
        console.log("Creating FAQs...");
        const faqContainer = document.querySelector('.faq-container');
        if (!faqContainer) {
            console.error('FAQ container not found');
            return;
        }
        const faqs = [
            { question: "¿Cómo puedo agendar una cita para ver una propiedad?", answer: "Puede agendar una cita llamando a nuestro número de contacto o enviando un correo electrónico. Uno de nuestros agentes se pondrá en contacto con usted para coordinar la visita." },
            { question: "¿Qué documentos necesito para comprar una propiedad?", answer: "Los documentos necesarios pueden variar, pero generalmente se requiere identificación válida, comprobante de ingresos, y en algunos casos, un historial crediticio. Nuestro equipo legal le guiará a través del proceso." },
            { question: "¿Ofrecen financiamiento para la compra de propiedades?", answer: "No ofrecemos financiamiento directo, pero trabajamos con varias instituciones financieras y podemos ayudarle a encontrar la mejor opción de financiamiento para su situación." }
        ];

        faqs.forEach(faq => {
            const faqItem = document.createElement('div');
            faqItem.className = 'mb-4';
            faqItem.innerHTML = `
                <h3 class="font-semibold text-lg mb-2">${faq.question}</h3>
                <p class="text-gray-600">${faq.answer}</p>
            `;
            faqContainer.appendChild(faqItem);
        });
        console.log("FAQs created successfully.");
    }

    // Función para manejar la visualización de detalles de la propiedad
    function handleViewDetails() {
        console.log("Setting up view details functionality...");
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('view-details')) {
                const propertyId = e.target.getAttribute('data-id');
                const property = properties.find(p => p.id === parseInt(propertyId));
                if (property) {
                    showPropertyDetails(property);
                }
            }
        });
        console.log("View details functionality set up successfully.");
    }

    // Función para mostrar los detalles de la propiedad
    function showPropertyDetails(property) {
        console.log("Showing property details...");
        const modal = document.getElementById('gallery-modal');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = `
            <span id="close-modal" class="cursor-pointer text-gray-500 float-right text-2xl">&times;</span>
            <h2 class="text-2xl font-bold mb-4">${property.title}</h2>
            <p class="text-xl mb-4">${property.price}</p>
            <p class="mb-4">${property.description}</p>
            <div class="grid grid-cols-2 gap-4 mb-4">
                ${property.features ? property.features.map(feature => `<p class="flex items-center"><i class="fas fa-check text-primary mr-2"></i>${feature}</p>`).join('') : ''}
            </div>
            <div class="property-gallery grid grid-cols-3 gap-4">
                ${property.gallery.map(img => `<img src="${img}" alt="Property Image" class="w-full h-32 object-cover rounded cursor-pointer">`).join('')}
            </div>
        `;
        modal.style.display = 'flex';

        const closeModal = modal.querySelector('#close-modal');
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        console.log("Property details displayed successfully.");
    }

    // Función para manejar la galería de imágenes
    function handleImageGallery() {
        console.log("Setting up image gallery functionality...");
        const fullImageContainer = document.getElementById('full-image-container');
        const fullImage = document.getElementById('full-image');
        const prevButton = document.getElementById('prev-image');
        const nextButton = document.getElementById('next-image');
        let currentImageIndex = 0;
        let currentGallery = [];

        document.addEventListener('click', function(e) {
            if (e.target.closest('.property-gallery')) {
                const clickedImage = e.target.closest('img');
                if (clickedImage) {
                    const galleryImages = e.target.closest('.property-gallery').querySelectorAll('img');
                    currentGallery = Array.from(galleryImages).map(img => img.src);
                    currentImageIndex = currentGallery.indexOf(clickedImage.src);
                    showFullImage(currentImageIndex);
                }
            }
        });

        function showFullImage(index) {
            fullImage.src = currentGallery[index];
            fullImageContainer.style.display = 'flex';
        }

        prevButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
            showFullImage(currentImageIndex);
        });

        nextButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
            showFullImage(currentImageIndex);
        });

        fullImageContainer.addEventListener('click', function(e) {
            if (e.target === fullImageContainer) {
                fullImageContainer.style.display = 'none';
            }
        });

        console.log("Image gallery functionality set up successfully.");
    }

    // Función para inicializar el formulario de contacto
    function initContactForm() {
        console.log("Initializing contact form...");
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Aquí iría la lógica para enviar el formulario
                alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
                form.reset();
            });
            console.log("Contact form initialized successfully.");
        } else {
            console.error("Contact form not found");
        }
    }

    // Función para manejar el botón "Volver arriba"
    function handleBackToTop() {
        console.log("Setting up back to top functionality...");
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 100) {
                    backToTopButton.classList.remove('hidden');
                } else {
                    backToTopButton.classList.add('hidden');
                }
            });

            backToTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            console.log("Back to top functionality set up successfully.");
        } else {
            console.error("Back to top button not found");
        }
    }

    // Función para manejar las animaciones al hacer scroll
    function handleScrollAnimation() {
        console.log("Setting up scroll animations...");
        const elements = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
        console.log("Scroll animations set up successfully.");
    }

    // Función para manejar la instalación de la PWA
    function handleInstallApp() {
        console.log("Setting up PWA installation...");
        let deferredPrompt;
        const installButton = document.getElementById('install-app');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installButton.classList.remove('hidden');
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
        console.log("PWA installation set up successfully.");
    }

    // Función para inicializar todo
    function initializeWebsite() {
        console.log("Initializing website...");
        try {
            createHeroSlider();
            createQuienesSomosSlider();
            createFeaturedProperties();
            createServiceCards();
            createTestimonialsSlider();
            createInstagramSlider();
            createFAQs();
            handleViewDetails();
            handleImageGallery();
            initContactForm();
            handleBackToTop();
            handleScrollAnimation();
            handleInstallApp();
            console.log("Website initialization complete.");
        } catch (error) {
            console.error("Error during website initialization:", error);
        }
    }

    // Llamar a la función de inicialización
    initializeWebsite();
});

console.log("Script loaded successfully!");