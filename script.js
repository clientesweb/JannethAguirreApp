document.addEventListener('DOMContentLoaded', function() {
    class WebsiteManager {
        constructor() {
            this.heroImages = [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
                "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
            ];
            this.properties = [
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
            this.services = [
                { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal completa en transacciones inmobiliarias." },
                { title: "Avalúo de Propiedades", icon: "fas fa-chart-line", description: "Valoración profesional y precisa de bienes inmuebles." },
                { title: "Asesoría Dentro y Fuera de Ecuador", icon: "fas fa-globe-americas", description: "Orientación experta en inversiones nacionales e internacionales." },
                { title: "Gestión de Proyectos", icon: "fas fa-tasks", description: "Administración integral de proyectos inmobiliarios." },
                { title: "Análisis de Mercado", icon: "fas fa-search-dollar", description: "Estudios detallados del mercado inmobiliario actual." },
                { title: "Gestión de Ventas", icon: "fas fa-handshake", description: "Estrategias efectivas para la venta de propiedades." },
                { title: "Venta de Proyectos en Planos", icon: "fas fa-drafting-compass", description: "Comercialización de proyectos inmobiliarios en fase de planificación." },
                { title: "Gestión de Alquileres", icon: "fas fa-home", description: "Administración completa de propiedades en alquiler." }
            ];
            this.testimonials = [
                {
                    name: "Juan Pérez",
                    text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre. Desde el primer momento me ofrecieron opciones que se ajustaban a mis necesidades, y todo el proceso fue transparente y fácil de seguir. El equipo se encargó de cada detalle, desde la negociación hasta la firma. Estoy muy contento con mi compra y la atención que recibí. ¡Recomiendo totalmente sus servicios!",
                    rating: 5,
                    date: "Enero 2024"
                },
                {
                    name: "María González",
                    text: "Profesionalismo y dedicación en cada paso del proceso de compra. Me acompañaron durante todo el proceso, desde la búsqueda hasta la firma del contrato, explicándome todo con mucha claridad. Además, me brindaron asesoría sobre la mejor opción de financiamiento, lo cual hizo todo mucho más fácil. Estoy muy agradecida por la atención y la calidad de servicio.",
                    rating: 5,
                    date: "Marzo 2024"
                },
                {
                    name: "Carlos Rodríguez",
                    text: "La mejor experiencia en venta de propiedades. Altamente recomendado. Desde el primer contacto hasta la venta final, todo fue rápido y eficiente. El equipo de Janneth Aguirre se encargó de gestionar cada detalle, manteniéndome informado en todo momento. Me dieron una excelente estrategia de venta y pude lograr una transacción rápida y beneficiosa.",
                    rating: 5,
                    date: "Febrero 2024"
                }
            ];
            this.instagramPosts = [
                { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
                { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
                { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" },
                { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80", link: "#" }
            ];
            this.faqs = [
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
            this.investReasons = {
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
            this.heroImages.forEach(image => {
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
            this.properties.forEach(property => {
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
            this.properties.forEach(property => {
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
            this.services.forEach(service => {
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
            this.testimonials.forEach(testimonial => {
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
            this.instagramPosts.forEach(post => {
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
            this.faqs.forEach((faq, index) => {
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

            createAccordion(document.getElementById('invest-samborondon'), 'Invertir en Samborondón', this.investReasons.samborondon, 'img/ecuador-flag.png');
            createAccordion(document.getElementById('invest-usa'), 'Invertir en Estados Unidos', this.investReasons.usa, 'img/usa-flag.png');
            createAccordion(document.getElementById('invest-panama'), 'Invertir en Panamá', this.investReasons.panama, 'img/panama-flag.png');
        }

        handleViewDetails() {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-details')) {
                    const propertyId = e.target.getAttribute('data-id');
                    const property = this.properties.find(p => p.id == propertyId);
                    if (property) {
                        this.showPropertyDetails(property);
                    }
                }
            });
        }

        showPropertyDetails(property) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                    <h2 class="text-2xl font-bold mb-4">${property.title}</h2>
                    <p class="text-xl mb-4">${property.price}</p>
                    <p class="mb-4">${property.description}</p>
                    <h3 class="text-xl font-semibold mb-2">Características:</h3>
                    <ul class="list-disc pl-5 mb-4">
                        ${property.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        ${property.gallery.map(image => `
                            <img src="${image}" alt="Imagen de la propiedad" class="w-full h-48 object-cover rounded cursor-pointer gallery-image">
                        `).join('')}
                    </div>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors close-modal">Cerrar</button>
                </div>
            `;
            document.body.appendChild(modal);

            modal.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(modal);
            });

            modal.addEventListener('click', (e) => {
                if (e.target.classList.contains('gallery-image')) {
                    this.openGalleryModal(property.gallery, property.gallery.indexOf(e.target.src));
                }
            });
        }

        openGalleryModal(images, startIndex) {
            const galleryModal = document.createElement('div');
            galleryModal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
            galleryModal.innerHTML = `
                <div class="relative w-full h-full">
                    <button class="absolute top-4 right-4 text-white text-2xl close-gallery">&times;</button>
                    <div class="gallery-slider h-full flex items-center justify-center">
                        ${images.map(image => `
                            <div class="w-full h-full flex items-center justify-center">
                                <img src="${image}" alt="Imagen de la galería" class="max-w-full max-h-full object-contain">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            document.body.appendChild(galleryModal);

            this.createSlider('.gallery-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: startIndex
            });

            galleryModal.querySelector('.close-gallery').addEventListener('click', () => {
                document.body.removeChild(galleryModal);
            });
        }

        closeGalleryModal() {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('close-gallery')) {
                    const galleryModal = e.target.closest('.fixed');
                    if (galleryModal) {
                        document.body.removeChild(galleryModal);
                    }
                }
            });
        }

        loadYouTubeVideos() {
            const youtubeSlider = document.getElementById('youtube-slider');
            const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3'];
            videoIds.forEach(videoId => {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'px-2';
                videoContainer.innerHTML = `
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                youtubeSlider.appendChild(videoContainer);
            });

            this.createSlider('#youtube-slider', {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
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

        initContactForm() {
            const form = document.getElementById('contact-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                // Aquí iría la lógica para enviar el formulario, por ejemplo usando fetch
                console.log('Formulario enviado', Object.fromEntries(formData));
                // Mostrar un mensaje de éxito
                alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
                form.reset();
            });
        }

        handleBackToTop() {
            const backToTopButton = document.createElement('button');
            backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
            backToTopButton.className = 'fixed bottom-20 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl z-50 shadow-lg hover:bg-primary/90 transition-colors duration-300 opacity-0 invisible';
            document.body.appendChild(backToTopButton);

            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    backToTopButton.classList.remove('opacity-0', 'invisible');
                } else {
                    backToTopButton.classList.add('opacity-0', 'invisible');
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        handleScrollAnimation() {
            const fadeInSections = document.querySelectorAll('.fade-in-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            fadeInSections.forEach(section => {
                observer.observe(section);
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

            installButton.addEventListener('click', (e) => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the install prompt');
                        } else {
                            console.log('User dismissed the install prompt');
                        }
                        deferredPrompt = null;
                    });
                }
            });
        }

        handlePreloader() {
            window.addEventListener('load', () => {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            });
        }

        initChatbot() {
            const openChatbotButton = document.getElementById('open-chatbot');
            const closeChatbotButton = document.getElementById('close-chatbot');
            const chatbotWindow = document.getElementById('chatbot-window');
            const chatbotForm = document.getElementById('chatbot-form');
            const chatbotInput = document.getElementById('chatbot-input');
            const chatbotMessages = document.getElementById('chatbot-messages');
            const suggestedQuestions = document.getElementById('suggested-questions');

            openChatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.remove('hidden');
                chatbotWindow.classList.add('active');
            });

            closeChatbotButton.addEventListener('click', () => {
                chatbotWindow.classList.add('hidden');
                chatbotWindow.classList.remove('active');
            });

            const initialQuestions = [
                "¿Cuáles son los servicios que ofrecen?",
                "¿Cómo puedo comprar una propiedad?",
                "¿Tienen propiedades en venta en Samborondón?"
            ];

            initialQuestions.forEach(question => {
                const button = document.createElement('button');
                button.textContent = question;
                button.className = 'bg-gray-200 text-sm rounded px-2 py-1 m-1 hover:bg-gray-300 transition-colors';
                button.addEventListener('click', () => this.handleChatbotInteraction(question));
                suggestedQuestions.appendChild(button);
            });

            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const message = chatbotInput.value.trim();
                if (message) {
                    this.handleChatbotInteraction(message);
                    chatbotInput.value = '';
                }
            });
        }

        handleChatbotInteraction(message) {
            this.addMessageToChatbot('user', message);
            // Aquí iría la lógica para procesar la pregunta y obtener una respuesta
            // Por ahora, simplemente devolvemos un mensaje genérico
            setTimeout(() => {
                this.addMessageToChatbot('bot', "Gracias por tu pregunta. Un agente se pondrá en contacto contigo pronto para ayudarte con más información.");
            }, 1000);
        }

        addMessageToChatbot(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.className = `mb-2 ${sender === 'user' ? 'text-right' : 'text-left'}`;
            messageElement.innerHTML = `
                <span class="inline-block ${sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded px-4 py-2 max-w-xs lg:max-w-md">
                    ${message}
                </span>
            `;
            document.getElementById('chatbot-messages').appendChild(messageElement);
            messageElement.scrollIntoView({ behavior: 'smooth' });
        }

        improveResponsiveness() {
            const header = document.querySelector('header');
            let lastScrollTop = 0;

            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    header.style.top = '-80px';
                } else {
                    header.style.top = '0';
                }
                lastScrollTop = scrollTop;
            });

            const menuItems = document.querySelectorAll('.bottom-nav a');
            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = item.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        preloadImages() {
            const imagesToPreload = [
                ...this.heroImages,
                ...this.properties.map(p => p.image),
                ...this.instagramPosts.map(p => p.image)
            ];

            imagesToPreload.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        }
    }

    new WebsiteManager();
});