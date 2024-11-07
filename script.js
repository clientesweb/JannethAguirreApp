// Función para manejar el preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

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

    $('.quienes-somos-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.propiedades-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

// Función para manejar el scroll suave
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Función para manejar el botón "Volver arriba"
function handleBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        smoothScroll('body', 1000);
    });
}

// Función para manejar la galería modal
function handleGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modalImage = document.getElementById('modal-image');
    const modalInfo = document.getElementById('modal-info');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
            modalInfo.textContent = img.alt;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Función para manejar las secciones con fade-in
function handleFadeInSections() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const fadeInOptions = {
        threshold: 0.5
    };

    const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeInSections.forEach(section => {
        fadeInObserver.observe(section);
    });
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Aquí iría la lógica para enviar el formulario
        // Por ahora, solo mostraremos un mensaje de éxito
        alert('Gracias por contactarnos. Te responderemos pronto.');
        form.reset();
    });
}

// Función para manejar las preguntas frecuentes
function handleFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Función para inicializar el mapa
function initMap() {
    const mapOptions = {
        center: { lat: -2.1894128, lng: -79.8890662 },
        zoom: 15
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({
        position: { lat: -2.1894128, lng: -79.8890662 },
        map: map,
        title: 'Janneth Aguirre Bienes Raíces'
    });
}

// Función para manejar el chatbot
function handleChatbot() {
    const openChatbot = document.getElementById('open-chatbot');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    openChatbot.addEventListener('click', () => {
        chatbotWindow.style.display = 'block';
    });

    closeChatbot.addEventListener('click', () => {
        chatbotWindow.style.display = 'none';
    });

    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage('user', message);
            // Aquí iría la lógica para procesar la pregunta y obtener una respuesta
            // Por ahora, solo mostraremos un mensaje genérico
            setTimeout(() => {
                addMessage('bot', 'Gracias por tu pregunta. Un agente se pondrá en contacto contigo pronto.');
            }, 1000);
            chatbotInput.value = '';
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
}

// Función para manejar la instalación de la PWA
function handlePWAInstall() {
    let deferredPrompt;
    const installButton = document.getElementById('install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
    });

    installButton.addEventListener('click', () => {
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
}

// Función para cargar las propiedades
function loadProperties() {
    // Aquí iría la lógica para cargar las propiedades desde una API o base de datos
    // Por ahora, usaremos datos de ejemplo
    const properties = [
        { id: 1, title: 'Casa en Samborondón', price: '$500,000', image: 'img/casa1.jpg' },
        { id: 2, title: 'Apartamento en Guayaquil', price: '$250,000', image: 'img/apartamento1.jpg' },
        { id: 3, title: 'Terreno en Daule', price: '$100,000', image: 'img/terreno1.jpg' },
        // Agrega más propiedades aquí
    ];

    const propertiesGrid = document.getElementById('properties-grid');
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="property-info">
                <h3>${property.title}</h3>
                <p>${property.price}</p>
                <button class="view-property" data-id="${property.id}">Ver detalles</button>
            </div>
        `;
        propertiesGrid.appendChild(propertyCard);
    });

    // Agregar event listeners a los botones "Ver detalles"
    const viewButtons = document.querySelectorAll('.view-property');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-id');
            showPropertyModal(propertyId);
        });
    });
}

// Función para mostrar el modal de la propiedad
function showPropertyModal(propertyId) {
    // Aquí iría la lógica para cargar los detalles de la propiedad
    // Por ahora, usaremos datos de ejemplo
    const propertyDetails = {
        title: 'Casa en Samborondón',
        price: '$500,000',
        description: 'Hermosa casa con 4 habitaciones, 3 baños, piscina y jardín.',
        images: ['img/casa1.jpg', 'img/casa1-interior.jpg', 'img/casa1-jardin.jpg']
    };

    const modal = document.getElementById('gallery-modal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = `
        <h2>${propertyDetails.title}</h2>
        <p class="price">${propertyDetails.price}</p>
        <p>${propertyDetails.description}</p>
        <div class="property-images">
            ${propertyDetails.images.map(img => `<img src="${img}" alt="${propertyDetails.title}">`).join('')}
        </div>
        <button id="close-property-modal">Cerrar</button>
    `;

    modal.style.display = 'flex';

    const closeButton = document.getElementById('close-property-modal');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Función para cargar los testimonios
function loadTestimonials() {
    // Aquí iría la lógica para cargar los testimonios desde una API o base de datos
    // Por ahora, usaremos datos de ejemplo
    const testimonials = [
        { name: 'Juan Pérez', text: 'Excelente servicio. Encontré mi casa ideal gracias a Janneth Aguirre.' },
        { name: 'María González', text: 'Muy profesionales y atentos. Recomiendo sus servicios al 100%.' },
        { name: 'Carlos Rodríguez', text: 'Gracias a su asesoramiento, pude hacer una gran inversión inmobiliaria.' },
        // Agrega más testimonios aquí
    ];

    const testimonialsSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        `;
        testimonialsSlider.appendChild(testimonialDiv);
    });

    // Inicializar el slider de testimonios
    $(testimonialsSlider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });
}

// Función para cargar las publicaciones de Instagram
function loadInstagramPosts() {
    // Aquí iría la lógica para cargar las publicaciones de Instagram
    // Por ahora, usaremos datos de ejemplo
    const instagramPosts = [
        { image: 'img/instagram1.jpg', likes: 50, comments: 10 },
        { image: 'img/instagram2.jpg', likes: 75, comments: 15 },
        { image: 'img/instagram3.jpg', likes: 100, comments: 20 },
        // Agrega más publicaciones aquí
    ];

    const instagramSlider = document.getElementById('instagram-slider');
    instagramPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('instagram-post');
        postDiv.innerHTML = `
            <img src="${post.image}" alt="Instagram post">
            <div class="instagram-info">
                <span><i class="fas fa-heart"></i> ${post.likes}</span>
                <span><i class="fas fa-comment"></i> ${post.comments}</span>
            </div>
        `;
        instagramSlider.appendChild(postDiv);
    });

    // Inicializar el slider de Instagram
    $(instagramSlider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

// Función para cargar las preguntas frecuentes
function loadFAQs() {
    // Aquí iría la lógica para cargar las FAQs desde una API o base de datos
    // Por ahora, usaremos datos de ejemplo
    const faqs = [
        { question: '¿Cómo puedo comprar una propiedad?', answer: 'Para comprar una propiedad, primero debe contactarnos para programar una visita. Luego, nuestro equipo le guiará a través del proceso de compra, incluyendo la negociación, el papeleo y el cierre de la transacción.' },
        { question: '¿Ofrecen financiamiento?', answer: 'No ofrecemos financiamiento directamente, pero trabajamos con varios bancos y entidades financieras que pueden ayudarle a obtener un préstamo hipotecario.' },
        { question: '¿Cuánto tiempo toma vender una propiedad?', answer: 'El tiempo de venta puede variar dependiendo de varios factores, como la ubicación, el precio y las condiciones del mercado. En promedio, una propiedad puede venderse en 3-6 meses.' },
        // Agrega más preguntas frecuentes aquí
    ];

    const faqContainer = document.getElementById('faq-container');
    faqs.forEach(faq => {
        const faqDiv = document.createElement('div');
        faqDiv.classList.add('faq-item');
        faqDiv.innerHTML = `
            <h3 class="faq-question">${faq.question} <span class="faq-icon">+</span></h3>
            <p class="faq-answer">${faq.answer}</p>
        `;
        faqContainer.appendChild(faqDiv);
    });

    // Agregar funcionalidad para mostrar/ocultar respuestas
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.style.display = 'block';
                question.querySelector('.faq-icon').textContent = '-';
            } else {
                answer.style.display = 'none';
                question.querySelector('.faq-icon').textContent = '+';
            }
        });
    });
}

// Función principal que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initSliders();
    handleBackToTop();
    handleGalleryModal();
    handleFadeInSections();
    handleContactForm();
    handleFAQs();
    handleChatbot();
    handlePWAInstall();
    loadProperties();
    loadTestimonials();
    loadInstagramPosts();
    loadFAQs();
});

// Cargar el mapa cuando la API de Google Maps esté lista
window.initMap = initMap;