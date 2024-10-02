export function initSliders() {
    // Slider del Hero
    const heroSlider = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,  // El autoplay no se detiene si el usuario interactúa
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,  // Permite a los usuarios hacer clic en los puntos de paginación
        },
        navigation: {
            nextEl: '.swiper-button-next',  // Botón siguiente
            prevEl: '.swiper-button-prev',  // Botón anterior
        },
        effect: 'fade',  // Efecto de desvanecimiento para una transición suave
        fadeEffect: {
            crossFade: true,
        },
    });

    // Slider de Propiedades
    const propertiesSlider = new Swiper('.properties-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,  // Dos diapositivas visibles en pantallas medianas
            },
            1024: {
                slidesPerView: 3,  // Tres diapositivas visibles en pantallas grandes
            },
            1440: {
                slidesPerView: 4,  // Cuatro diapositivas en pantallas muy grandes
            },
        },
        autoplay: {
            delay: 7000,  // Autoplay más lento para las propiedades
            disableOnInteraction: false, 
        },
        lazy: {
            loadPrevNext: true,  // Carga imágenes cercanas para optimizar el rendimiento
        },
    });
}