export function loadTestimonials() {
    const testimonials = [
        { id: 1, name: "Juan Pérez", text: "Janneth Aguirre me ayudó a encontrar la casa de mis sueños. Su profesionalismo y dedicación son incomparables.", image: "/placeholder.svg?height=100&width=100" },
        { id: 2, name: "María González", text: "Gracias a Janneth, vender mi propiedad fue un proceso rápido y sin complicaciones. ¡Altamente recomendada!", image: "/placeholder.svg?height=100&width=100" },
        { id: 3, name: "Carlos Rodríguez", text: "La atención al cliente de Janneth Aguirre es excepcional. Siempre está disponible para responder preguntas y ofrecer asesoramiento.", image: "/placeholder.svg?height=100&width=100" }
    ];

    const testimonialSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial-card bg-white shadow-lg rounded-lg p-6';
        div.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4">
            <p class="text-gray-600 mb-4 italic">"${testimonial.text}"</p>
            <p class="font-semibold text-center">${testimonial.name}</p>
        `;
        testimonialSlider.appendChild(div);
    });

    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });
}