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
    {
        name: "Juan Pérez",
        text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre. Desde el primer momento me ofrecieron opciones que se ajustaban a mis necesidades, y todo el proceso fue transparente y fácil de seguir. El equipo se encargó de cada detalle, desde la negociación hasta la firma. Estoy muy contento con mi compra y la atención que recibí. ¡Recomiendo totalmente sus servicios!",
        rating: 5, // Calificación de 1 a 5 estrellas
        date: "Enero 2024"
    },
    {
        name: "María González",
        text: "Profesionalismo y dedicación en cada paso del proceso de compra. Me acompañaron durante todo el proceso, desde la búsqueda hasta la firma del contrato, explicándome todo con mucha claridad. Además, me brindaron asesoría sobre la mejor opción de financiamiento, lo cual hizo todo mucho más fácil. Estoy muy agradecida por la atención y la calidad de servicio.",
        rating: 5, // Calificación de 1 a 5 estrellas
        date: "Marzo 2024"
    },
    {
        name: "Carlos Rodríguez",
        text: "La mejor experiencia en venta de propiedades. Altamente recomendado. Desde el primer contacto hasta la venta final, todo fue rápido y eficiente. El equipo de Janneth Aguirre se encargó de gestionar cada detalle, manteniéndome informado en todo momento. Me dieron una excelente estrategia de venta y pude lograr una transacción rápida y beneficiosa.",
        rating: 5, // Calificación de 1 a 5 estrellas
        date: "Febrero 2024"
    }
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

    class WebsiteManager {
        constructor() {
            this.initializeComponents();
        }

        initializeComponents() {
            this.createHeroSlider();
            this.createQuienesSomosSlider();
            this.createFeaturedProperties();
            this.createPropertyCards();
            this.createServiceCards();
            this.createTestimonialsSlider();
            this.createInstagramSlider();
            this.createFAQs();
            this.createInvestReasons();
            this.handleViewDetails();
            this.closeGalleryModal();
            this.loadYouTubeVideos();
            this.initContactForm();
            this.handleBackToTop();
            this.handleScrollAnimation();
            this.handleInstallApp();
            this.handlePreloader();
            this.initChatbot();
            this.improveResponsiveness();
            this.preloadImages();
        }

        createSlider(selector, options) {
            $(selector).slick(options);
        }

        createHeroSlider() {
            const heroSlider = document.querySelector('.hero-slider');
            heroImages.forEach(image => {
                const slide = document.createElement('div');
                slide.style.backgroundImage = `url(${image})`;
                slide.style.backgroundSize = 'cover';
                slide.style.backgroundPosition = 'center';
                heroSlider.appendChild(slide);
            });
            
            this.createSlider('.hero-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 5000
            });
        }

        createQuienesSomosSlider() {
            this.createSlider('.quienes-somos-slider', {
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

        createFeaturedProperties() {
            const propertiesSlider = document.querySelector('.propiedades-slider');
            properties.forEach(property => {
                const propertyCard = this.createPropertyCard(property);
                propertiesSlider.appendChild(propertyCard);
            });
        }

        createPropertyCard(property) {
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
            return propertyCard;
        }

        createPropertyCards() {
            const propertiesGrid = document.getElementById('properties-grid');
            properties.forEach(property => {
                const propertyCard = this.createPropertyCard(property);
                propertiesGrid.appendChild(propertyCard);
            });
            this.initializePropertySlider();
        }

        initializePropertySlider() {
            const slider = document.querySelector('.properties-slider');
            let isDown = false;
            let startX;
            let scrollLeft;

            const mouseDownHandler = (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            };

            const mouseLeaveHandler = () => {
                isDown = false;
                slider.classList.remove('active');
            };

            const mouseUpHandler = () => {
                isDown = false;
                slider.classList.remove('active');
            };

            const mouseMoveHandler = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 3;
                slider.scrollLeft = scrollLeft - walk;
            };

            slider.addEventListener('mousedown', mouseDownHandler);
            slider.addEventListener('mouseleave', mouseLeaveHandler);
            slider.addEventListener('mouseup', mouseUpHandler);
            slider.addEventListener('mousemove', mouseMoveHandler);
        }

        createServiceCards() {
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

        createTestimonialsSlider() {
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
            
            this.createSlider('#testimonials-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
            });
        }

        createInstagramSlider() {
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
            
            this.createSlider('#instagram-slider', {
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

        createFAQs() {
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

                const question = faqItem.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                    const answer = faqItem.querySelector('.faq-answer');
                    answer.classList.toggle('hidden');
                });
            });
        }

        createInvestReasons() {
            const createAccordion = (container, title, reasons, flagUrl) => {
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
            };

            createAccordion(document.getElementById('invest-samborondon'), 'Invertir en Samborondón', investReasons.samborondon, 'https://flagcdn.com/w40/ec.png');
            createAccordion(document.getElementById('invest-usa'), 'Invertir en Estados Unidos', investReasons.usa, 'https://flagcdn.com/w40/us.png');
            createAccordion(document.getElementById('invest-panama'), 'Invertir en Panamá', investReasons.panama, 'https://flag.pk/flags/4x3/pa.png');
        }

        handleViewDetails() {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-details')) {
                    const propertyId = e.target.getAttribute('data-id');
                    const property = properties.find(p => p.id == propertyId);
                    if (property) {
                        this.showPropertyDetails(property);
                    }
                }
            });
        }

        showPropertyDetails(property) {
            const modal = document.getElementById('gallery-modal');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `
                <span id="close-modal" class="cursor-pointer text-gray-500 float-right text-2xl">&times;</span>
                <h2 class="text-2xl font-bold mb-4">${property.title}</h2>
                <div id="gallery-images" class="mb-4">
                    ${property.gallery.map(img => `<img src="${img}" alt="${property.title}" class="w-full h-64 object-cover mb-2">`).join('')}
                </div>
                <div id="gallery-info">
                    <p class="mb-2"><strong>Precio:</strong> ${property.price}</p>
                    <p class="mb-2"><strong>Tipo:</strong> ${property.type}</p>
                    <p class="mb-4">${property.description}</p>
                    <h3 class="text-xl font-bold mb-2">Características:</h3>
                    <ul class="list-disc pl-5 mb-4">
                        ${property.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            const closeModal = modal.querySelector('#close-modal');
            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            });

            this.initializeGallerySlider();
        }

        initializeGallerySlider() {
            const galleryImages = document.getElementById('gallery-images');
            const images = galleryImages.querySelectorAll('img');
            let currentIndex = 0;

            const showImage = (index) => {
                images.forEach((img, i) => {
                    if (i === index) {
                        img.style.display = 'block';
                    } else {
                        img.style.display = 'none';
                    }
                });
            };

            const nextImage = () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            };

            const prevImage = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            };

            const nextButton = document.createElement('button');
            nextButton.innerHTML = '&gt;';
            nextButton.className = 'gallery-nav right-4';
            nextButton.addEventListener('click', nextImage);

            const prevButton = document.createElement('button');
            prevButton.innerHTML = '&lt;';
            prevButton.className = 'gallery-nav left-4';
            prevButton.addEventListener('click', prevImage);

            galleryImages.appendChild(nextButton);
            galleryImages.appendChild(prevButton);

            showImage(currentIndex);
        }

        closeGalleryModal() {
            const modal = document.getElementById('gallery-modal');
            const closeButton = document.getElementById('close-modal');
            closeButton.addEventListener('click', () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            });
        }

        loadYouTubeVideos() {
            const youtubeSlider = document.getElementById('youtube-slider');
            const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3']; // Reemplaza con los IDs reales de tus videos
            videoIds.forEach(videoId => {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'youtube-video';
                videoContainer.innerHTML = `
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                `;
                youtubeSlider.appendChild(videoContainer);
            });

            this.createSlider('#youtube-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }

        initContactForm() {
            const form = document.getElementById('contact-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Aquí iría la lógica para enviar el formulario
                alert('Gracias por contactarnos. Te responderemos pronto.');
                form.reset();
            });
        }

        handleBackToTop() {
            const backToTopButton = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }

        handleScrollAnimation() {
            const fadeElements = document.querySelectorAll('.fade-in-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            });

            fadeElements.forEach(element => {
                observer.observe(element);
            });
        }

        handleInstallApp() {
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

        handlePreloader() {
            window.addEventListener('load', () => {
                const preloader = document.getElementById('preloader');
                preloader.style.display = 'none';
            });
        }

        initChatbot() {
            const chatbotButton = document.getElementById('open-chatbot');
            const chatbotWindow = document.getElementById('chatbot-window');
            const closeChatbotButton = document.getElementById('close-chatbot');
            const chatbotForm = document.getElementById('chatbot-form');
            const chatbotInput = document.getElementById('chatbot-input');
            const chatbotMessages = document.getElementById('chatbot-messages');

            chatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.toggle('hidden');
            });

            closeChatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.add('hidden');
            });

            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = chatbotInput.value.trim();
                if (message) {
                    this.addChatMessage('user', message);
                    chatbotInput.value = '';
                    // Aquí iría la lógica para procesar la pregunta y obtener una respuesta
                    setTimeout(() => {
                        this.addChatMessage('bot', 'Gracias por tu pregunta. Un agente se pondrá en contacto contigo pronto.');
                    }, 1000);
                }
            });
        }

        addChatMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.className = `mb-2 ${sender === 'user' ? 'text-right' : 'text-left'}`;
            messageElement.innerHTML = `
                <span class="inline-block bg-${sender === 'user' ? 'blue' : 'gray'}-200 rounded px-2 py-1">
                    ${message}
                </span>
            `;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }

        improveResponsiveness() {
            const bottomNav = document.querySelector('.bottom-nav');
            const header = document.querySelector('header');

            window.addEventListener('scroll', () => {
                if (window.innerWidth <= 768) {
                    if (window.pageYOffset > header.offsetHeight) {
                        bottomNav.style.display = 'flex';
                    } else {
                        bottomNav.style.display = 'none';
                    }
                }
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    bottomNav.style.display = 'none';
                } else {
                    if (window.pageYOffset > header.offsetHeight) {
                        bottomNav.style.display = 'flex';
                    }
                }
            });
        }

        preloadImages() {
            const imagesToPreload = [
                ...heroImages,
                ...properties.map(p => p.image),
                ...instagramPosts.map(p => p.image)
            ];

            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
    }

    // Inicializar el gestor del sitio web
    const websiteManager = new WebsiteManager();
});