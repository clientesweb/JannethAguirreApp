export function initFAQs() {
    const faqs = document.getElementById('faqs');
    faqs.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <div class="max-w-3xl mx-auto">
                ${generateFAQs()}
            </div>
        </div>
    `;

    initFAQAccordion();
}

function generateFAQs() {
    const faqData = [
        { question: "¿Cómo puedo comprar una propiedad?", answer: "El proceso de compra comienza con la búsqueda de  la propiedad adecuada. Una vez que la encuentre, nuestro equipo le guiará a través de los pasos de negociación, financiamiento y cierre de la transacción." },
        { question: "¿Qué documentos necesito para vender mi propiedad?", answer: "Generalmente, necesitará el título de propiedad, certificado de gravámenes, comprobantes de pago de impuestos y servicios, y su identificación personal. Nuestro equipo le ayudará a recopilar toda la documentación necesaria." },
        { question: "¿Cuánto tiempo toma vender una propiedad?", answer: "El tiempo de venta puede variar dependiendo de factores como la ubicación, el precio y las condiciones del mercado. En promedio, una propiedad bien valorada puede venderse en 3-6 meses." },
        { question: "¿Ofrecen servicios de administración de propiedades?", answer: "Sí, ofrecemos servicios completos de administración de propiedades, incluyendo el manejo de inquilinos, mantenimiento y cobro de rentas." },
        { question: "¿Cómo puedo programar una visita a una propiedad?", answer: "Puede programar una visita llamando a nuestro número de contacto o enviando un mensaje a través de nuestro formulario en línea. Uno de nuestros agentes se pondrá en contacto con usted para coordinar la visita." }
    ];

    return faqData.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" data-faq="${index}">
                ${faq.question}
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}
