class FAQs {
    constructor() {
        this.faqs = [
            {
                question: '¿Cuál es el proceso para comprar una propiedad?',
                answer: 'El proceso de compra generalmente incluye: búsqueda de propiedades, visitas, negociación, oferta formal, due diligence, firma de contrato y cierre. Nuestro equipo le guiará en cada paso.'
            },
            {
                question: '¿Qué documentos necesito para vender mi propiedad?',
                answer: 'Los documentos principales incluyen: título de propiedad, certificado de gravámenes, impuestos al día, planos aprobados y cédula de identidad. Nosotros le ayudaremos a recopilar toda la documentación necesaria.'
            },
            {
                question: '¿Cómo se determina el precio de una propiedad?',
                answer: 'El precio se determina considerando factores como ubicación, tamaño, estado de la propiedad, amenidades y precios de propiedades similares en la zona. Realizamos un análisis de mercado detallado para cada propiedad.'
            },
            {
                question: '¿Ofrecen servicios para inversores extranjeros?',
                answer: 'Sí, ofrecemos servicios especializados para inversores extranjeros, incluyendo asesoría legal, fiscal y de mercado. Podemos ayudarle a navegar el proceso de inversión en Ecuador.'
            },
            {
                question: '¿Cuánto tiempo toma vender una propiedad?',
                answer: 'El tiempo de venta puede variar dependiendo de factores como el precio, la ubicación y las condiciones del mercado. En promedio, una propiedad bien valorada puede venderse en 3-6 meses.'
            }
        ];
        this.render();
        this.addEventListeners();
    }

    render() {
        const faqs = document.getElementById('faqs');
        faqs.innerHTML = `
            <div class="py-16 bg-gray-100 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Preguntas Frecuentes</h2>
                    <div class="space-y-4">
                        ${this.faqs.map((faq, index) => this.createFAQItem(faq, index)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    createFAQItem(faq, index) {
        return `
            <div class="faq-item bg-white rounded-lg shadow-md overflow-hidden">
                <button class="faq-question w-full text-left px-6 py-4 font-semibold flex justify-between items-center" data-index="${index}">
                    ${faq.question}
                    <i class="fas fa-chevron-down transition-transform duration-300"></i>
                </button>
                <div class="faq-answer px-6 py-4 bg-gray-50 hidden">
                    ${faq.answer}
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', (e) => {
                const answer = e.target.closest('.faq-item').querySelector('.faq-answer');
                const icon = e.target.querySelector('i');
                answer.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
    }
}