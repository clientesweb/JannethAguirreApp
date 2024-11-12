document.addEventListener('DOMContentLoaded', function() {
    class WebsiteManager {
        constructor() {
            this.heroImages = [
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ];
            this.properties = [
                { id: 1, title: "Casa de Lujo en Samborondón", price: "$500,000", type: "venta", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                { id: 2, title: "Apartamento en Guayaquil", price: "$1,500/mes", type: "alquiler", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                { id: 3, title: "Oficina en el Centro", price: "$300,000", type: "venta", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" },
                { id: 4, title: "Local Comercial", price: "$2,000/mes", type: "alquiler", image: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
                { id: 5, title: "Casa de Playa", price: "$750,000", type: "venta", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" },
                { id: 6, title: "Penthouse de Lujo", price: "$3,500/mes", type: "alquiler", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80" }
            ];
            this.services = [
                { title: "Compra y Venta", description: "Asesoramiento experto en transacciones inmobiliarias", icon: "fas fa-home" },
                { title: "Alquiler", description: "Gestión completa de propiedades en alquiler", icon: "fas fa-key" },
                { title: "Inversiones", description: "Oportunidades de inversión en bienes raíces", icon: "fas fa-chart-line" },
                { title: "Tasaciones", description: "Valoración precisa de propiedades", icon: "fas fa-balance-scale" },
                { title: "Asesoría Legal", description: "Apoyo legal en todas las transacciones", icon: "fas fa-gavel" },
                { title: "Diseño de Interiores", description: "Servicios de diseño y remodelación", icon: "fas fa-paint-roller" }
            ];
            this.testimonials = [
                { name: "Juan Pérez", text: "Excelente servicio, encontré mi casa ideal gracias a Janneth Aguirre.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
                { name: "María González", text: "Profesionalismo y dedicación en cada paso del proceso de compra.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
                { name: "Carlos Rodríguez", text: "La mejor experiencia en venta de propiedades. Altamente recomendado.", image: "https://randomuser.me/api/portraits/men/3.jpg" }
            ];
            this.faqs = [
                { question: "¿Cuál es el proceso para comprar una propiedad?", answer: "El proceso incluye búsqueda de propiedades, visitas, negociación, acuerdo de compra, due diligence, y cierre. Nuestro equipo le guiará en cada paso." },
                { question: "¿Cómo puedo vender mi propiedad con ustedes?", answer: "Contáctenos para una evaluación gratuita. Luego, desarrollaremos una estrategia de marketing personalizada y gestionaremos todo el proceso de venta." },
                { question: "¿Ofrecen servicios de gestión de alquileres?", answer: "Sí, ofrecemos servicios completos de gestión de alquileres, incluyendo selección de inquilinos, mantenimiento y cobro de rentas." },
                { question: "¿Cuáles son las áreas en las que operan?", answer: "Operamos principalmente en Guayaquil y sus alrededores, incluyendo Samborondón, pero también tenemos propiedades en otras ciudades de Ecuador." }
            ];
            this.youtubeVideos = [
                { id: "VIDEO_ID_1", title: "Consejos para Invertir en Bienes Raíces" },
                { id: "VIDEO_ID_2", title: "Tour por Casa de Lujo en Samborondón" },
                { id: "VIDEO_ID_3", title: "Cómo Elegir la Propiedad Perfecta" }
            ];
            this.instagramPosts = [
                { image: "https://picsum.photos/300/300?random=1", link: "#" },
                { image: "https://picsum.photos/300/300?random=2", link: "#" },
                { image: "https://picsum.photos/300/300?random=3", link: "#" },
                { image: "https://picsum.photos/300/300?random=4", link: "#" }
            ];
            this.bannerMessages = [
                "¡Nueva propiedad en venta en Samborondón!",
                "Descubre nuestras ofertas especiales de alquiler",
                "Asesoría gratuita en inversiones inmobiliarias"
            ];
            this.initializeComponents();
        }

        initializeComponents() {
            this.initHeroSlider();
            this.initPropertiesGrid();
            this.initServicesGrid();
            this.initTestimonialsSlider();
            this.initFAQs();
            this.initYouTubeSlider();
            this.initInstagramSlider();
            this.initPropertyModal();
            this.initScrollAnimations();
            this.initBackToTopButton();
            this.initBannerRotation();
            this.initPropertyFilter();
            this.initContactForm();
        }

        initHeroSlider() {
            const heroSlider = document.querySelector('.hero-slider');
            this.heroImages.forEach(image => {
                const slide = document.createElement('div');
                slide.style.backgroundImage = `url(${image})`;
                heroSlider.appendChild(slide);
            });
            $(heroSlider).slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 5000
            });
        }

        initPropertiesGrid() {
            const propertiesGrid = document.getElementById('properties-grid');
            this.properties.forEach(property => {
                const propertyCard = this.createPropertyCard(property);
                propertiesGrid.appendChild(propertyCard);
            });
        }

        createPropertyCard(property) {
            const card = document.createElement('div');
            card.className = 'property-card';
            card.innerHTML = `
                <img src="${property.image}" alt="${property.title}">
                <div class="property-card-content">
                    <h3>${property.title}</h3>
                    <p>${property.price}</p>
                    <button class="view-details" data-property-id="${property.id}">Ver Detalles</button>
                </div>
            `;
            return card;
        }

        initServicesGrid() {
            const serviceGrid = document.getElementById('service-grid');
            this.services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.className = 'service-card';
                serviceCard.innerHTML = `
                    <i class="${service.icon} text-4xl mb-4"></i>
                    <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                    <p>${service.description}</p>
                `;
                serviceGrid.appendChild(serviceCard);
            });
        }

        initTestimonialsSlider() {
            const testimonialsSlider = document.getElementById('testimonials-slider');
            this.testimonials.forEach(testimonial => {
                const testimonialItem = document.createElement('div');
                testimonialItem.className = 'testimonial-item';
                testimonialItem.innerHTML = `
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mx-auto mb-4">
                    <p class="italic mb-2">"${testimonial.text}"</p>
                    <p class="font-semibold">- ${testimonial.name}</p>
                `;
                testimonialsSlider.appendChild(testimonialItem);
            });
            $(testimonialsSlider).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });
        }

        initFAQs() {
            const faqContainer = document.getElementById('faq-container');
            this.faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question" data-faq-index="${index}">
                        ${faq.question}
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">${faq.answer}</div>
                `;
                faqContainer.appendChild(faqItem);
            });

            faqContainer.addEventListener('click', (e) => {
                const question = e.target.closest('.faq-question');
                if (question) {
                    const faqItem = question.parentElement;
                    faqItem.classList.toggle('active');
                }
            });
        }

        initYouTubeSlider() {
            const youtubeSlider = document.getElementById('youtube-slider');
            this.youtubeVideos.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.innerHTML = `
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <h3 class="mt-2 text-lg font-semibold">${video.title}</h3>
                `;
                youtubeSlider.appendChild(videoItem);
            });
            $(youtubeSlider).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });
        }

        initInstagramSlider() {
            const instagramSlider = document.getElementById('instagram-slider');
            this.instagramPosts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.innerHTML = `
                    <a href="${post.link}" target="_blank">
                        <img src="${post.image}" alt="Instagram Post" class="w-full h-64 object-cover">
                    </a>
                `;
                instagramSlider.appendChild(postItem);
            });
            $(instagramSlider).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }

        initPropertyModal() {
            const modal = document.createElement('div');
            modal.id = 'property-modal';
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50';
            modal.innerHTML = `
                <div class="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4">
                        <h2 id="modal-title" class="text-2xl font-bold"></h2>
                        <button id="close-modal" class="text-2xl">&times;</button>
                    </div>
                    <img id="modal-image" src="" alt="Property Image" class="w-full h-64 object-cover mb-4">
                    <p id="modal-description" class="mb-4"></p>
                    <p id="modal-price" class="text-xl font-bold mb-4"></p>
                    <a id="contact-whatsapp" href="#" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        Contactar por WhatsApp
                    </a>
                </div>
            `;
            document.body.appendChild(modal);

            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('view-details')) {
                    const propertyId = e.target.getAttribute('data-property-id');
                    this.openPropertyModal(propertyId);
                }
            });

            document.getElementById('close-modal').addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }

        openPropertyModal(propertyId) {
            const property = this.properties.find(p => p.id == propertyId);
            if (property) {
                const modal = document.getElementById('property-modal');
                document.getElementById('modal-title').textContent = property.title;
                document.getElementById('modal-image').src = property.image;
                document.getElementById('modal-description').textContent = "Descripción detallada de la propiedad..."; // Añadir descripción real
                document.getElementById('modal-price').textContent = property.price;
                document.getElementById('contact-whatsapp').href = `https://wa.me/593987167782?text=Hola, estoy interesado en la propiedad: ${property.title}`;
                modal.classList.remove('hidden');
            }
        }

        initScrollAnimations() {
            const fadeElems = document.querySelectorAll('.fade-in-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            });
            fadeElems.forEach(elem => observer.observe(elem));
        }

        initBackToTopButton() {
            const backToTopButton = document.getElementById('back-to-top');
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

        initBannerRotation() {
            const banner = document.getElementById('top-banner');
            const bannerMessage = document.getElementById('banner-message');
            let currentMessageIndex = 0;

            const rotateBannerMessage = () => {
                bannerMessage.textContent = this.bannerMessages[currentMessageIndex];
                currentMessageIndex = (currentMessageIndex + 1) % this.bannerMessages.length;
            };

            rotateBannerMessage(); // Mostrar el primer mensaje inmediatamente
            setInterval(rotateBannerMessage, 5000); // Rotar mensajes cada 5 segundos
        }

        initPropertyFilter() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const propertiesGrid = document.getElementById('properties-grid');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    propertiesGrid.innerHTML = '';
                    const filteredProperties = filter === 'all' 
                        ? this.properties 
                        : this.properties.filter(property => property.type === filter);

                    filteredProperties.forEach(property => {
                        const propertyCard = this.createPropertyCard(property);
                        propertiesGrid.appendChild(propertyCard);
                    });
                });
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
    }

    new WebsiteManager();
});