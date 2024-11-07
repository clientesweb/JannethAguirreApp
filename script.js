// Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
const heroImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
];

const properties = [
    { 
        id: 1, 
        title: "DEPARTAMENTOS EN VENTA", 
        price: "NUEVO SAMBORONDON", 
        image: "img/nuevosamborombon.png", 
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
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1600566752547-33cce5195f64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1600566752421-3ec9c3ec7dfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
            "https://images.unsplash.com/photo-1600566752734-2a0cd53b9f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
        ]
    },
    // ... (otros objetos de propiedades)
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
    { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
    { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
    { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" }
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

const investReasons = {
    samborondon: [
        "Samborondón, el corazón económico de la región, donde la inversión y el progreso se unen.",
        "Descubre Samborondón, el destino más próspero para invertir en Ecuador, con crecimiento sostenible y estabilidad.",
        "Samborondón, ciudad innovadora y emprendedora, impulsa tus negocios con infraestructura y tecnología de vanguardia.",
        "Invierte en Samborondón y aprovecha su ubicación estratégica",
        "Samborondón, líder en desarrollo urbano y calidad de vida, ofrece oportunidades ilimitadas para compradores e inversores.",
        "La economía en crecimiento y la inversión constante convierten a Samborondón en un polo de atracción para empresarios.",
        "Samborondón, ciudad de oportunidades, donde la inversión en bienes raíces, comercio y servicios florece.",
        "El clima y la geografía de Samborondón ofrecen un entorno ideal para vivir, trabajar e invertir.",
        "Samborondón, un lugar donde  la innovación y la tecnología se unen para impulsar el crecimiento económico.",
        "Invierte en Samborondón y sé parte de una comunidad próspera y en constante  crecimiento, con un futuro brillante."
    ],
    // ... (otras razones de inversión)
};

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar preloader
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible');
        }, 2000);
    });

    // Inicializar sliders
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });

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
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#testimonials-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
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

    // Inicializar efectos de scroll
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const fadeIn = (elem) => {
        const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
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

    // Manejar botón "Volver arriba"
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

    // Mejorar responsividad
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.contentBoxSize) {
                const width = entry.contentBoxSize[0].inlineSize;
                if (width < 768) {
                    document.body.classList.add('mobile');
                    document.body.classList.remove('desktop');
                } else {
                    document.body.classList.add('desktop');
                    document.body.classList.remove('mobile');
                }
            }
        }
    });

    resizeObserver.observe(document.body);

    // Inicializar chatbot
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');

    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
    });

    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatbotInput.value.trim();
        if (message) {
            addChatMessage('user', message);
            chatbotInput.value = '';
            // Simular respuesta del chatbot
            setTimeout(() => {
                addChatMessage('bot', 'Gracias por su mensaje. Un agente se pondrá en contacto con usted pronto.');
            }, 1000);
        }
    });

    function addChatMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('mb-4', sender === 'user' ? 'text-right' : 'text-left');
        messageElement.innerHTML = `
            <span class="inline-block p-2 rounded-lg ${sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200'}">
                ${text}
            </span>
        `;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Inicializar galería modal
    const galleryModal = document.getElementById('gallery-modal');
    const galleryContent = document.getElementById('gallery-content');
    const closeGalleryModal = document.getElementById('close-gallery-modal');

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-property-id');
            const property = properties.find(p => p.id === parseInt(propertyId));
            if (property) {
                showGalleryModal(property);
            }
        });
    });

    closeGalleryModal.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
    });

    function showGalleryModal(property) {
        galleryContent.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${property.title}</h2>
            <div class="mb-4">
                ${property.gallery.map(image => `<img src="${image}" alt="${property.title}" class="w-full h-auto mb-2">`).join('')}
            </div>
            <p class="mb-4">${property.description}</p>
            <h3 class="font-bold mb-2">Características:</h3>
            <ul class="list-disc list-inside mb-4">
                ${property.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p class="font-bold">Precio: ${property.price}</p>
        `;
        galleryModal.classList.remove('hidden');
    }

    // Inicializar FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            answer.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
});