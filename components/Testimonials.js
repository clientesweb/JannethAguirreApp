class Testimonials {
    constructor() {
        this.testimonials = [
            { name: 'Juan Pérez', text: 'Excelente servicio y atención personalizada. Janneth me ayudó a encontrar la casa de mis sueños.', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'María González', text: 'Muy profesionales y eficientes. Vendieron mi propiedad en tiempo récord.', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
            { name: 'Carlos Rodríguez', text: 'Janneth y su equipo hicieron que el proceso de compra fuera muy fácil y transparente.', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
            { name: 'Ana Martínez', text: 'Increíble experiencia. Recomiendo totalmente sus servicios para cualquier transacción inmobiliaria.', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
        ];
        this.render();
        this.initSlider();
    }

    render() {
        const testimonials = document.getElementById('testimonials');
        testimonials.innerHTML = `
            <div class="py-16 bg-gray-100 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Lo que dicen nuestros clientes</h2>
                    <div class="testimonials-slider">
                        ${this.testimonials.map(testimonial => this.createTestimonialCard(testimonial)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    createTestimonialCard(testimonial) {
        return `
            <div class="testimonial-card bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <h3 class="font-semibold">${testimonial.name}</h3>
                </div>
                <p class="text-gray-600">"${testimonial.text}"</p>
            </div>
        `;
    }

    initSlider() {
        $('.testimonials-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}