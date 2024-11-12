class AboutUs {
    constructor() {
        this.render();
        this.initSlider();
    }

    render() {
        const aboutUs = document.getElementById('about-us');
        aboutUs.innerHTML = `
            <div class="py-16 bg-gray-100 fade-in-section">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-12 text-primary">¿Quiénes Somos?</h2>
                    <div class="flex flex-col lg:flex-row items-center justify-between mb-8">
                        <div class="lg:w-1/2 mb-8 lg:mb-0">
                            <img src="/img/Janneth-Aguirre-M-bienes-raices-ecuador-Licencia-Profesional-609-G-CRS-Realtor-NAR-ID-61242209-350x350.png" alt="Janneth Aguirre" width="350" height="350" class="rounded-lg shadow-lg mx-auto lg:mx-0 w-full max-w-md">
                        </div>
                        <div class="lg:w-1/2 lg:pl-12">
                            <h3 class="text-2xl font-semibold mb-4 text-secondary">Janneth Aguirre</h3>
                            <p class="text-lg mb-6">
                                Es una representante inmobiliaria líder en su ramo desde 2009, consolidada como una reconocida Corredora de Bienes Raíces dentro del mercado ecuatoriano gracias a la satisfacción lograda entre sus clientes por los diversos servicios que presta.
                            </p>
                            <p class="text-lg mb-6">
                                Nuestro compromiso es brindar un servicio personalizado y de alta calidad, asegurando que cada cliente encuentre la propiedad perfecta o logre la mejor inversión posible.
                            </p>
                        </div>
                    </div>
                    <div class="quienes-somos-slider">
                        <div><img src="/img/fiesta.png" alt="Equipo de trabajo" width="400" height="256" class="w-full h-64 object-cover rounded-lg"></div>
                        <div><img src="/img/evento.png" alt="Oficina" width="400" height="256" class="w-full h-64 object-cover rounded-lg"></div>
                        <div><img src="/img/firma.png" alt="Casa en venta" width="400" height="256" class="w-full h-64 object-cover rounded-lg"></div>
                        <div><img src="/img/jannet.png" alt="Apartamento de lujo" width="400" height="256" class="w-full h-64 object-cover rounded-lg"></div>
                    </div>
                </div>
            </div>
        `;
    }

    initSlider() {
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
}