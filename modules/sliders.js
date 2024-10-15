export function initializeSliders() {
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

    // Inicializar el slider de promociones
    const promoSlider = document.querySelector('.promo-slider');
    promoItems.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        promoSlider.appendChild(div);
    });

    $('.promo-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false
    });

    // Inicializar el slider del hero
    const heroSlider = document.querySelector('.hero-slider');
    heroImages.forEach(image => {
        const div = document.createElement('div');
        div.className = 'w-full h-full';
        div.innerHTML = `<img src="${image}" alt="Hero image" class="w-full h-full object-cover">`;
        heroSlider.appendChild(div);
    });

    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
        speed: 1000
    });

    // Inicializar el slider de propiedades destacadas
    $('.property-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
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