export function initTestimonials() {
    const testimonials = document.getElementById('testimonials');
    testimonials.innerHTML = `
        <div class="container mx-auto px-4 py-16 bg-gray-100">
            <h2 class="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
            <div class="testimonials-slider">
                ${generateTestimonials(5)}
            </div>
        </div>
    `;

    initTestimonialsSlider();
}

function generateTestimonials(count) {
    let testimonials = '';
    for (let i = 0; i < count; i++) {
        testimonials += `
            <div class="testimonial">
                <img src="https://via.placeholder.com/100x100?text=Cliente+${i+1}" alt="Cliente ${i+1}" class="rounded-full mx-auto mb-4">
                <p class="text-gray-600 mb-4">"Excelente servicio. Janneth Aguirre Bienes Raíces hizo que el proceso de compra de mi casa fuera muy fácil y sin estrés."</p>
                <h4 class="font-semibold">Cliente ${i+1}</h4>
            </div>
        `;
    }
    return testimonials;
}

function initTestimonialsSlider() {
    $('.testimonials-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
