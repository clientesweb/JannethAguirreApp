document.addEventListener('DOMContentLoaded', function() {
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
        { 
            id: 2, 
            title: "DEPARTAMENTOS EN VENTA", 
            price: "ISLA MOCOLI", 
            image: "img/isla.png", 
            type: "venta",
            description: "Ubicados en una de las zonas más prestigiosas y exclusiva  de la ciudad, estos departamentos ofrecen una combinación perfecta de estilo, comodidad y privacidad.Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli.",
            features: [
                "3 habitaciones amplias y bien iluminadas",
                "3,5  baños completos",
                "Vistas impresionantes a la  Isla y de la ciudad",
                "Área de lavado y secado",
                "Seguridad 24/7, Gimnasio, Piscina",
                "Estacionamiento privado y de visitas"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687644-c7f34e88598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687668-0b7b4bf7a00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687710-040798eea3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 3, 
            title: "LOCALES COMERCIALES", 
            price: "Consultar", 
            image: "img/localescomerciales.png", 
            type: "alquiler",
            description: "Oportunidad única de invertir en locales comerciales en Nuevo Samborondon  Estos locales ofrecen una combinación perfecta de ubicación, visibilidad y potencial de crecimiento.Nuestros locales comerciales están diseñados para satisfacer las necesidades de los empresarios más exigentes. Ofrecemos:",
            features: [
                "Locales de diferentes tamaños y diseños para adaptarse a sus necesidades específicas.",
                "Ventanas y fachadas amplias para maximizar la visibilidad.",
                "Acceso fácil para clientes y empleados.",
                "Instalaciones modernas y bien mantenidas."
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687954-e85aa7b46ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687968-d7a205ad5e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687985-a6ad18e3c1d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 4, 
            title: "CASAS PERSONALIZADAS", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "Nuestra empresa cuenta con un equipo de expertos en construcción y diseño que trabajan juntos para crear casas personalizadas que se adaptan a las necesidades y gustos de cada cliente.Nuestro objetivo es hacer que su sueño de tener una casa perfecta se convierta en realidad.",
            features: [
                "Diseño personalizado: trabajamos con usted para crear un diseño que se adapte a su estilo de vida y preferencias.",
                "Materiales de alta calidad: utilizamos materiales de alta calidad para garantizar la durabilidad y eficiencia energética de su casa.",
                "Construcción rápida y eficiente: nuestra experiencia y tecnología nos permiten construir casas de manera rápida y eficiente sin comprometer la calidad.",
                "Atención al detalle: nos enfocamos en los detalles para asegurarnos de que su casa sea perfecta.",
                "No pierda la oportunidad de tener la casa de sus sueños. ¡Contáctenos hoy mismo para obtener más información y programar una reunión!"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688960-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688951-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688942-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 5, 
            title: "DEPARTAMENTOS EN CUENCA", 
            price: "Consultar", 
            image: "img/departamentoscuenca.png", 
            type: "venta",
            description: "Oportunidad única de invertir en un departamento en Cuenca, ideal para Airbnb.",
            features: [
                "2  Y 3 habitaciones amplias y bien iluminadas",
                "2  Y 3  baños completos",
                "Salón-comedor con cocina integrada",
                "con vistas impresionantes a la ciudad",
                "Áreas sociales: piscina, gimnasio, salón de eventos",
                "Seguridad 24/7 con conserjería y vigilancia"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688921-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688912-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688903-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
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
        usa: [
            "Estados Unidos ofrece un mercado inmobiliario estable y diversificado para inversores internacionales.",
            "Benefíciate de un sistema legal robusto que protege los derechos de propiedad de los inversores extranjeros.",
            "Accede a oportunidades de inversión en ciudades de rápido crecimiento y mercados emergentes en todo el país.",
            "Aprovecha las tasas de interés históricamente bajas para financiar tus inversiones inmobiliarias.",
            "Diversifica tu portafolio con propiedades en una de las economías más grandes y estables del mundo.",
            "Explora opciones de inversión en sectores de alto rendimiento como tecnología, salud y educación.",
            "Benefíciate de la apreciación a largo plazo del mercado inmobiliario estadounidense.",
            "Accede a un mercado de alquileres robusto, especialmente en áreas metropolitanas y destinos turísticos.",
            "Aprovecha las oportunidades en el mercado de propiedades comerciales y de uso mixto en crecimiento.",
            "Invierte en un país con una infraestructura de clase mundial y una economía impulsada por la innovación."
        ],
        panama: [
            "Panamá, el corazón de América, donde la inversión y el progreso se unen en un solo ritmo.",
            "Descubre el potencial de Panamá, el hub de inversión más dinámico de América Latina.",
            "Panamá, donde la estrategia y la innovación se encuentran en el centro de la inversión internacional.",
            "Invierte en Panamá y aprovecha su posición geográfica única, conectando América del Norte y del Sur.",
            "Panamá, el destino perfecto para inversores que buscan crecimiento y estabilidad en América.",
            "El Canal de Panamá, un símbolo de progreso y conexión global, impulse su inversión en este hub clave.",
            "Panamá, donde la inversión en infraestructura y tecnología impulsa el crecimiento económico sostenible.",
            "Unirse a la comunidad de inversores en Panamá, donde la innovación y el emprendimiento florecen.",
            "Panamá, el lugar donde la inversión y la diversificación se unen para crear oportunidades ilimitadas.",
            "Panamá, el futuro de la inversión en América, donde la visión y la acción se unen para crear un mañana próspero."
        ]
    };

    // Función para crear el slider de imágenes del hero
    function createHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
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

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
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
    }

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        const propertiesSlider = document.querySelector('.propiedades-slider');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesSlider.appendChild(propertyCard);
        });
    }

    // Función para crear las tarjetas de propiedades en la sección "Nuestras Propiedades"
    function createPropertyCards() {
        const propertiesGrid = document.getElementById('properties-grid');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card flex-shrink-0';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesGrid.appendChild(propertyCard);
        });

        // Inicializar el slider después de crear las tarjetas
        initializePropertySlider();
    }

    // Función para inicializar el slider de propiedades
    function initializePropertySlider() {
        const slider = document.querySelector('.properties-slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
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
            autoplaySpeed: 5000
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

    // Función para crear el acordeón de razones para invertir
    function createInvestReasons() {
        const samborondonContainer = document.getElementById('invest-samborondon');
        const usaContainer = document.getElementById('invest-usa');
        const panamaContainer = document.getElementById('invest-panama');

        function createAccordion(container, title, reasons, flagUrl) {
            const accordionHeader = document.createElement('div');
            accordionHeader.className = 'flex items-center cursor-pointer mb-4';
            accordionHeader.innerHTML = `
                <img src="${flagUrl}" alt="Bandera" class="w-8 h-8 mr-2">
                <h3 class="text-xl font-bold">${title}</h3>
                <i class="fas fa-chevron-down ml-auto"></i>
            `;
            container.appendChild(accordionHeader);

            const accordionContent = document.createElement('div');
            accordionContent.className = 'hidden';
            reasons.forEach(reason => {
                const reasonElement = document.createElement('p');
                reasonElement.className = 'mb-2';
                reasonElement.textContent = reason;
                accordionContent.appendChild(reasonElement);
            });
            container.appendChild(accordionContent);

            accordionHeader.addEventListener('click', () => {
                accordionContent.classList.toggle('hidden');
                accordionHeader.querySelector('i').classList.toggle('fa-chevron-down');
                accordionHeader.querySelector('i').classList.toggle('fa-chevron-up');
            });
        }

        createAccordion(samborondonContainer, 'Invertir en Samborondón', investReasons.samborondon, 'https://flagcdn.com/w40/ec.png');
        createAccordion(usaContainer, 'Invertir en Estados Unidos', investReasons.usa, 'https://flagcdn.com/w40/us.png');
        createAccordion(panamaContainer, 'Invertir en Panamá', investReasons.panama, 'https://flagcdn.com/w40/pa.png');
    }

    // Función para manejar el clic en "Ver Detalles"
    function handleViewDetails() {
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('view-details')) {
                const propertyId = parseInt(e.target.dataset.id);
                const property = properties.find(p => p.id === propertyId);
                showPropertyModal(property);
            }
        });
    }

    // Función para mostrar el modal de la propiedad
    function showPropertyModal(property) {
        const modal = document.getElementById('gallery-modal');
        const galleryImages = document.getElementById('gallery-images');
        const galleryInfo = document.getElementById('gallery-info');
        
        galleryImages.innerHTML = '';

        // Limitar a 5 imágenes
        const imagesToShow = property.gallery.slice(0, 5);
        
        imagesToShow.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${property.title} - Imagen ${index + 1}`;<Thinking>



I will reference my internal reminder to ensure I follow all important instructions while adapting the JavaScript code for the real estate website, including the chatbot functionality. I'll combine the provided scripts, ensure all necessary components are included, and adapt the chatbot to work with the existing website content.



</Thinking>

Entiendo que necesitas una versión completa y adaptada de tu JavaScript, incluyendo la funcionalidad del chatbot inteligente. Aquí tienes el código completo que combina tu script original con el chatbot mejorado:

```js project="Real Estate Website" file="script.js" type="nodejs"
document.addEventListener('DOMContentLoaded', function() {
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
        { 
            id: 2, 
            title: "DEPARTAMENTOS EN VENTA", 
            price: "ISLA MOCOLI", 
            image: "img/isla.png", 
            type: "venta",
            description: "Ubicados en una de las zonas más prestigiosas y exclusiva  de la ciudad, estos departamentos ofrecen una combinación perfecta de estilo, comodidad y privacidad.Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli.",
            features: [
                "3 habitaciones amplias y bien iluminadas",
                "3,5  baños completos",
                "Vistas impresionantes a la  Isla y de la ciudad",
                "Área de lavado y secado",
                "Seguridad 24/7, Gimnasio, Piscina",
                "Estacionamiento privado y de visitas"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687644-c7f34e88598f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687668-0b7b4bf7a00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687710-040798eea3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 3, 
            title: "LOCALES COMERCIALES", 
            price: "Consultar", 
            image: "img/localescomerciales.png", 
            type: "alquiler",
            description: "Oportunidad única de invertir en locales comerciales en Nuevo Samborondon  Estos locales ofrecen una combinación perfecta de ubicación, visibilidad y potencial de crecimiento.Nuestros locales comerciales están diseñados para satisfacer las necesidades de los empresarios más exigentes. Ofrecemos:",
            features: [
                "Locales de diferentes tamaños y diseños para adaptarse a sus necesidades específicas.",
                "Ventanas y fachadas amplias para maximizar la visibilidad.",
                "Acceso fácil para clientes y empleados.",
                "Instalaciones modernas y bien mantenidas."
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607687954-e85aa7b46ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687968-d7a205ad5e7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607687985-a6ad18e3c1d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 4, 
            title: "CASAS PERSONALIZADAS", 
            price: "Consultar", 
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
            type: "venta",
            description: "Nuestra empresa cuenta con un equipo de expertos en construcción y diseño que trabajan juntos para crear casas personalizadas que se adaptan a las necesidades y gustos de cada cliente.Nuestro objetivo es hacer que su sueño de tener una casa perfecta se convierta en realidad.",
            features: [
                "Diseño personalizado: trabajamos con usted para crear un diseño que se adapte a su estilo de vida y preferencias.",
                "Materiales de alta calidad: utilizamos materiales de alta calidad para garantizar la durabilidad y eficiencia energética de su casa.",
                "Construcción rápida y eficiente: nuestra experiencia y tecnología nos permiten construir casas de manera rápida y eficiente sin comprometer la calidad.",
                "Atención al detalle: nos enfocamos en los detalles para asegurarnos de que su casa sea perfecta.",
                "No pierda la oportunidad de tener la casa de sus sueños. ¡Contáctenos hoy mismo para obtener más información y programar una reunión!"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688960-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688951-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688942-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
            ]
        },
        { 
            id: 5, 
            title: "DEPARTAMENTOS EN CUENCA", 
            price: "Consultar", 
            image: "img/departamentoscuenca.png", 
            type: "venta",
            description: "Oportunidad única de invertir en un departamento en Cuenca, ideal para Airbnb.",
            features: [
                "2  Y 3 habitaciones amplias y bien iluminadas",
                "2  Y 3  baños completos",
                "Salón-comedor con cocina integrada",
                "con vistas impresionantes a la ciudad",
                "Áreas sociales: piscina, gimnasio, salón de eventos",
                "Seguridad 24/7 con conserjería y vigilancia"
            ],
            gallery: [
                "https://images.unsplash.com/photo-1600607688921-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688912-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
                "https://images.unsplash.com/photo-1600607688903-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
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
        usa: [
            "Estados Unidos ofrece un mercado inmobiliario estable y diversificado para inversores internacionales.",
            "Benefíciate de un sistema legal robusto que protege los derechos de propiedad de los inversores extranjeros.",
            "Accede a oportunidades de inversión en ciudades de rápido crecimiento y mercados emergentes en todo el país.",
            "Aprovecha las tasas de interés históricamente bajas para financiar tus inversiones inmobiliarias.",
            "Diversifica tu portafolio con propiedades en una de las economías más grandes y estables del mundo.",
            "Explora opciones de inversión en sectores de alto rendimiento como tecnología, salud y educación.",
            "Benefíciate de la apreciación a largo plazo del mercado inmobiliario estadounidense.",
            "Accede a un mercado de alquileres robusto, especialmente en áreas metropolitanas y destinos turísticos.",
            "Aprovecha las oportunidades en el mercado de propiedades comerciales y de uso mixto en crecimiento.",
            "Invierte en un país con una infraestructura de clase mundial y una economía impulsada por la innovación."
        ],
        panama: [
            "Panamá, el corazón de América, donde la inversión y el progreso se unen en un solo ritmo.",
            "Descubre el potencial de Panamá, el hub de inversión más dinámico de América Latina.",
            "Panamá, donde la estrategia y la innovación se encuentran en el centro de la inversión internacional.",
            "Invierte en Panamá y aprovecha su posición geográfica única, conectando América del Norte y del Sur.",
            "Panamá, el destino perfecto para inversores que buscan crecimiento y estabilidad en América.",
            "El Canal de Panamá, un símbolo de progreso y conexión global, impulse su inversión en este hub clave.",
            "Panamá, donde la inversión en infraestructura y tecnología impulsa el crecimiento económico sostenible.",
            "Unirse a la comunidad de inversores en Panamá, donde la innovación y el emprendimiento florecen.",
            "Panamá, el lugar donde la inversión y la diversificación se unen para crear oportunidades ilimitadas.",
            "Panamá, el futuro de la inversión en América, donde la visión y la acción se unen para crear un mañana próspero."
        ]
    };

    // Función para crear el slider de imágenes del hero
    function createHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
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

    // Función para crear el slider de "Quienes Somos"
    function createQuienesSomosSlider() {
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
    }

    // Función para crear las tarjetas de propiedades destacadas
    function createFeaturedProperties() {
        const propertiesSlider = document.querySelector('.propiedades-slider');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesSlider.appendChild(propertyCard);
        });
    }

    // Función para crear las tarjetas de propiedades en la sección "Nuestras Propiedades"
    function createPropertyCards() {
        const propertiesGrid = document.getElementById('properties-grid');
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card flex-shrink-0';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            propertiesGrid.appendChild(propertyCard);
        });

        // Inicializar el slider después de crear las tarjetas
        initializePropertySlider();
    }

    // Función para inicializar el slider de propiedades
    function initializePropertySlider() {
        const slider = document.querySelector('.properties-slider');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
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
            autoplaySpeed: 5000
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

    // Función para crear el acordeón de razones para invertir
    function createInvestReasons() {
        const samborondonContainer = document.getElementById('invest-samborondon');
        const usaContainer = document.getElementById('invest-usa');
        const panamaContainer = document.getElementById('invest-panama');

        function createAccordion(container, title, reasons, flagUrl) {
            const accordionHeader = document.createElement('div');
            accordionHeader.className = 'flex items-center cursor-pointer mb-4';
            accordionHeader.innerHTML = `
                <img src="${flagUrl}" alt="Bandera" class="w-8 h-8 mr-2">
                <h3 class="text-xl font-bold">${title}</h3>
                <i class="fas fa-chevron-down ml-auto"></i>
            `;
            container.appendChild(accordionHeader);

            const accordionContent = document.createElement('div');
            accordionContent.className = 'hidden';
            reasons.forEach(reason => {
                const reasonElement = document.createElement('p');
                reasonElement.className = 'mb-2';
                reasonElement.textContent = reason;
                accordionContent.appendChild(reasonElement);
            });
            container.appendChild(accordionContent);

            accordionHeader.addEventListener('click', () => {
                accordionContent.classList.toggle('hidden');
                accordionHeader.querySelector('i').classList.toggle('fa-chevron-down');
                accordionHeader.querySelector('i').classList.toggle('fa-chevron-up');
            });
        }

        createAccordion(samborondonContainer, 'Invertir en Samborondón', investReasons.samborondon, 'https://flagcdn.com/w40/ec.png');
        createAccordion(usaContainer, 'Invertir en Estados Unidos', investReasons.usa, 'https://flagcdn.com/w40/us.png');
        createAccordion(panamaContainer, 'Invertir en Panamá', investReasons.panama, 'https://flagcdn.com/w40/pa.png');
    }

    // Función para manejar el clic en "Ver Detalles"
    function handleViewDetails() {
        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('view-details')) {
                const propertyId = parseInt(e.target.dataset.id);
                const property = properties.find(p => p.id === propertyId);
                showPropertyModal(property);
            }
        });
    }

    // Función para mostrar el modal de la propiedad
    function showPropertyModal(property) {
        const modal = document.getElementById('gallery-modal');
        const galleryImages = document.getElementById('gallery-images');
        const galleryInfo = document.getElementById('gallery-info');
        
        galleryImages.innerHTML = '';

        // Limitar a 5 imágenes
        const imagesToShow = property.gallery.slice(0, 5);
        
        imagesToShow.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${property.title} - Imagen ${index + 1}`;
            img.className = 'w-full h-64 object-cover cursor-pointer';
            img.onclick = () => openLightbox(property.gallery, index);
            galleryImages.appendChild(img);
        });

        galleryInfo.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${property.title}</h2>
            <p class="text-xl mb-4">${property.price}</p>
            <p class="mb-4">${property.description}</p>
            <h3 class="text-lg font-semibold mb-2">Características:</h3>
            <ul class="list-disc pl-5 mb-4">
                ${property.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;

        modal.classList.remove('hidden');
    }

    // Función para cerrar el modal de la galería
    function closeGalleryModal() {
        const modal = document.getElementById('gallery-modal');
        const closeButton = document.getElementById('close-gallery-modal');
        
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Función para cargar los videos de YouTube
    function loadYouTubeVideos() {
        const youtubeSlider = document.querySelector('.youtube-slider');
        const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3']; // Reemplaza con los IDs reales de tus videos

        videoIds.forEach(videoId => {
            const videoContainer = document.createElement('div');
            videoContainer.className = 'youtube-video';
            videoContainer.innerHTML = `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `;
            youtubeSlider.appendChild(videoContainer);
        });

        // Inicializar el slider de YouTube
        $('.youtube-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            adaptiveHeight: true
        });
    }

    // Función para inicializar el formulario de contacto
    function initContactForm() {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica para enviar el formulario
            console.log('Formulario enviado');
            // Limpia el formulario o muestra un mensaje de éxito
        });
    }

    // Función para manejar el botón "Volver arriba"
    function handleBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Función para manejar las animaciones al hacer scroll
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Función para manejar la instalación de la PWA
    function handleInstallApp() {
        let deferredPrompt;
        const installButton = document.getElementById('install-app');

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installButton.classList.remove('hidden');
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

    // Función para manejar el preloader
    function handlePreloader() {
        const preloader = document.getElementById('preloader');
        window.addEventListener('load', () => {
            preloader.style.display = 'none';
        });
    }

    // Chatbot
    function AIRealEstateExpertChatbot() {
        let isOpen = false;
        let messages = [];
        let context = '';

        const chatbotContainer = document.getElementById('ai-real-estate-expert-chatbot');

        function toggleChatbot() {
            isOpen = !isOpen;
            render();
        }

        function addMessage(sender, text) {
            messages.push({ id: Date.now(), text, sender });
            render();
        }

        function handleSubmit(e) {
            e.preventDefault();
            const input = e.target.querySelector('input');
            const userInput = input.value.trim();
            if (userInput) {
                addMessage('user', userInput);
                processUserInput(userInput);
                input.value = '';
            }
        }

        function processUserInput(userInput) {
            const input = userInput.toLowerCase();
            let response = '';

            // Actualizar el contexto basado en la entrada del usuario
            if (input.includes('propiedad') || input.includes('casa') || input.includes('apartamento') || input.includes('oficina')) {
                context = 'propiedades';
            } else if (input.includes('tendencia') || input.includes('mercado') || input.includes('inversión')) {
                context = 'tendencias';
            } else if (input.includes('legal') || input.includes('ley') || input.includes('impuesto')) {
                context = 'legal';
            } else if (input.includes('contacto') || input.includes('whatsapp') || input.includes('teléfono') || input.includes('email')) {
                context = 'contacto';
            }

            // Generar respuesta basada en el contexto y la entrada del usuario
            switch (context) {
                case 'propiedades':
                    response = handlePropertyQuery(input);
                    break;
                case 'tendencias':
                    response = handleMarketTrendQuery(input);
                    break;
                case 'legal':
                    response = handleLegalQuery(input);
                    break;
                case 'contacto':
                    response = handleContactQuery(input);
                    break;
                default:
                    response = handleGeneralQuery(input);
            }

            setTimeout(() => addMessage('bot', response), 500);
        }

        function handlePropertyQuery(input) {
            const matchingProperties = properties.filter(property => 
                input.includes(property.type) || input.includes(property.location.toLowerCase()) || input.includes(property.country.toLowerCase())
            );

            if (matchingProperties.length > 0) {
                const property = matchingProperties[0];
                return `He encontrado una propiedad que podría interesarte: ${property.title} en ${property.location}, ${property.country}. 
                        Precio: ${property.price}. 
                        Descripción: ${property.description}
                        Características destacadas: ${property.features.join(', ')}. 
                        ¿Te gustaría ver imágenes de esta propiedad o conocer más detalles? También puedo mostrarte otras opciones similares o darte información sobre el mercado inmobiliario en ${property.country}.`;
            } else {
                return `Entiendo que estás buscando una propiedad. Para ayudarte mejor, ¿podrías especificar:
                        1. ¿En qué país te interesa (Ecuador, México, Estados Unidos o Panamá)?
                        2. ¿Buscas para comprar o alquilar?
                        3. ¿Tienes preferencia por algún tipo de propiedad (casa, apartamento, oficina)?
                        4. ¿Tienes un presupuesto aproximado en mente?
                        Con esta información, podré mostrarte las mejores opciones que se ajusten a tus necesidades.`;
            }
        }

        function handleMarketTrendQuery(input) {
            const country = marketTrends.find(trend => input.includes(trend.country.toLowerCase()))?.country || '';
            
            if (country) {
                const trend = marketTrends.find(t => t.country === country);
                return `Respecto al mercado inmobiliario en ${country}:
                        Tendencia actual: ${trend.trend}
                        ${trend.description}
                        ¿Te gustaría saber más sobre oportunidades de inversión específicas en ${country} o comparar con las tendencias en otros países?`;
            } else {
                return `El mercado inmobiliario en los países donde operamos muestra tendencias interesantes:
                        - Ecuador: Crecimiento estable, especialmente en propiedades de lujo.
                        - México: Auge en destinos turísticos y segundas residencias.
                        - Estados Unidos: Fuerte recuperación post-pandemia en áreas metropolitanas.
                        - Panamá: Oportunidades en el mercado de oficinas y residencial de lujo.
                        ¿Sobre qué país te gustaría obtener información más detallada?`;
            }
        }

        function handleLegalQuery(input) {
            const country = legalInfo.find(info => input.includes(info.country.toLowerCase()))?.country || '';
            
            if (country) {
                const info = legalInfo.find(i => i.country === country);
                return `Información legal importante para ${country}:
                        ${info.title}
                        ${info.description}
                        ¿Necesitas más detalles sobre algún aspecto específico del proceso legal o fiscal en ${country}?`;
            } else {
                return `Los aspectos legales son cruciales en las transacciones inmobiliarias internacionales. Algunos puntos importantes:
                        - Ecuador: Proceso simplificado para extranjeros, excepto en áreas fronterizas.
                        - México: Sistema de fideicomiso para propiedades en zonas restringidas.
                        - Estados Unidos: Consideraciones fiscales especiales para inversores extranjeros (FIRPTA).
                        - Panamá: Atractivos incentivos para inversores inmobiliarios.
                        ¿Sobre qué país te gustaría conocer más detalles legales?`;
            }
        }

        function handleContactQuery(input) {
            if (input.includes('whatsapp')) {
                return `Puedes contactarnos por WhatsApp al número ${contactInfo.whatsapp}. Estaremos encantados de atenderte y responder a todas tus preguntas. ¿Te gustaría que te proporcione el enlace directo para iniciar una conversación?`;
            } else if (input.includes('teléfono') || input.includes('llamar')) {
                return `Tenemos dos números de teléfono disponibles para ti:
                        1. ${contactInfo.phone1}
                        2. ${contactInfo.phone2}
                        Puedes llamarnos en horario de oficina y uno de nuestros expertos en bienes raíces te atenderá personalmente. ¿Prefieres que te contactemos nosotros? Puedo programar una llamada para ti.`;
            } else if (input.includes('email') || input.includes('correo')) {
                return `Nuestro email de contacto es ${contactInfo.email}. Puedes escribirnos en cualquier momento y te responderemos en un plazo máximo de 24 horas. ¿Quieres que te ayude a redactar un email con tu consulta?`;
            } else {
                return `Estamos disponibles para atenderte por varios medios:
                        - WhatsApp: ${contactInfo.whatsapp}
                        - Teléfonos: ${contactInfo.phone1} o ${contactInfo.phone2}
                        - Email: ${contactInfo.email}
                        ¿Qué método de contacto prefieres? Puedo darte más detalles o ayudarte a iniciar el contacto de inmediato.`;
            }
        }

        function handleGeneralQuery(input) {
            if (input.includes('hola') || input.includes('buenos días') || input.includes('buenas tardes')) {
                return '¡Hola! Es un placer saludarte. Como experta en bienes raíces internacionales, estoy aquí para ayudarte con cualquier consulta sobre propiedades, inversiones, tendencias del mercado o aspectos legales en Ecuador, México, Estados Unidos y Panamá. ¿En qué área específica te puedo asistir hoy?';
            } else if (input.includes('gracias')) {
                return '¡Es un  placer ayudarte! Tu satisfacción es nuestra prioridad. Si en el futuro tienes más preguntas sobre propiedades, inversiones o cualquier aspecto del mercado inmobiliario en nuestros países de operación, no dudes en consultarme. Estoy aquí para proporcionarte la información más actualizada y relevante. ¿Hay algo más en lo que pueda asistirte hoy?';
            } else if (input.includes('inversión') || input.includes('invertir')) {
                return 'La inversión inmobiliaria internacional ofrece excelentes oportunidades. Cada uno de nuestros mercados (Ecuador, México, Estados Unidos y Panamá) tiene sus propias ventajas y consideraciones. ¿Te interesa algún país en particular? Puedo proporcionarte información sobre las tendencias actuales, rendimientos esperados y los mejores tipos de propiedades para invertir en cada mercado.';
            } else if (input.includes('precio') || input.includes('costo')) {
                return 'Los precios de las propiedades varían significativamente dependiendo del país, la ubicación y el tipo de inmueble. Por ejemplo, en Ecuador puedes encontrar lujosos apartamentos en Cumbayá desde $250,000, mientras que en Miami, una propiedad similar podría costar más de $1,000,000. ¿Tienes un presupuesto específico en mente? Puedo ayudarte a encontrar las mejores opciones que se ajusten a tu inversión.';
            } else if (input.includes('seguro') || input.includes('seguridad')) {
                return 'La seguridad es una prioridad en todas nuestras propiedades y transacciones. Trabajamos con los mejores desarrolladores y nos aseguramos de que todas las propiedades cumplan con los estándares de seguridad locales e internacionales. Además, nuestro equipo legal se encarga de que todas las transacciones sean seguras y transparentes. ¿Tienes alguna preocupación específica sobre seguridad que te gustaría discutir?';
            } else {
                return `Gracias por tu pregunta. Como experta en bienes raíces internacionales, puedo ayudarte con una amplia gama de temas, incluyendo:
                        - Búsqueda de propiedades en Ecuador, México, Estados Unidos y Panamá
                        - Análisis de tendencias del mercado inmobiliario
                        - Asesoramiento sobre inversiones internacionales
                        - Información legal y fiscal para compradores extranjeros
                        - Proceso de compra y venta de propiedades
                        - Gestión de propiedades y alquileres
                        ¿En cuál de estas áreas te gustaría profundizar? O si tienes una consulta específica, no dudes en preguntarme.`;
            }
        }

        function render() {
            let html = '';
            if (!isOpen) {
                html = `
                    <button onclick="AIRealEstateExpertChatbot.toggleChatbot()" class="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border-2 border-primary" aria-label="Abrir chat">
                        <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre" class="w-12 h-12 object-contain" />
                    </button>
                `;
            } else {
                html = `
                    <div class="bg-white rounded-lg shadow-lg w-96 h-[36rem] flex flex-col">
                        <div class="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                            <div class="flex items-center">
                                <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre" class="w-8 h-8 object-contain mr-2" />
                                <h3 class="font-bold text-lg">ARIA - Experta en Bienes Raíces</h3>
                            </div>
                            <button onclick="AIRealEstateExpertChatbot.toggleChatbot()" class="text-white hover:text-gray-200">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="flex-1 overflow-auto p-4 bg-gray-50">
                            ${messages.map(m => `
                                <div class="mb-4 ${m.sender === 'user' ? 'text-right' : 'text-left'}">
                                    <span class="inline-block p-3 rounded-lg ${m.sender === 'user' ? 'bg-primary text-white' : 'bg-white shadow'}">
                                        ${m.text}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                        <form onsubmit="AIRealEstateExpertChatbot.handleSubmit(event)" class="p-4 border-t bg-white">
                            <div class="flex">
                                <input type="text" placeholder="Escribe tu pregunta..." class="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                                <button type="submit" class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                `;
            }
            chatbotContainer.innerHTML = html;
        }

        // Inicializar el chatbot
        render();

        // Exponer funciones públicas
        return {
            toggleChatbot,
            handleSubmit
        };
    }

    // Llamar a todas las funciones de inicialización
    createHeroSlider();
    createQuienesSomosSlider();
    createFeaturedProperties();
    createPropertyCards();
    createServiceCards();
    createTestimonialsSlider();
    createInstagramSlider();
    createFAQs();
    createInvestReasons();
    handleViewDetails();
    closeGalleryModal();
    loadYouTubeVideos();
    initContactForm();
    handleBackToTop();
    handleScrollAnimation();
    handleInstallApp();
    handlePreloader();
    handleViewDetails();

    // Inicializar el chatbot
    window.AIRealEstateExpertChatbot = AIRealEstateExpertChatbot();
});

console.log("Script loaded successfully!");