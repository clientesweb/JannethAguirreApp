export function loadFAQ() {
    const faqItems = [
        { question: "¿Cuál es el proceso para comprar una propiedad?", answer: "El proceso generalmente incluye encontrar la propiedad, hacer una oferta, negociar el precio, realizar una inspección, asegurar el financiamiento y cerrar la venta. Nuestro equipo te guiará en cada paso." },
        { question: "¿Qué documentos necesito para vender mi propiedad?", answer: "Necesitarás el título de propiedad, certificado de gravámenes, impuestos al día, y posiblemente permisos de construcción si has hecho modificaciones. Te ayudaremos a reunir toda la documentación necesaria." },
        { question: "¿Cómo determino el precio de venta de mi propiedad?", answer: "Realizamos un análisis comparativo del mercado, considerando las ventas recientes de propiedades similares en la zona, las características únicas de tu propiedad y las condiciones actuales del mercado." }
    ];

    const faqAccordion =  document.getElementById('faq-accordion');
    faqItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'bg-white shadow-md rounded-lg overflow-hidden';
        div.innerHTML = `
            <button class="w-full text-left p-4 focus:outline-none" onclick="toggleFAQ(${index})">
                <div class="flex justify-between items-center">
                    <span class="font-semibold">${item.question}</span>
                    <i class="fas fa-chevron-down transform transition-transform duration-200" id="faq-icon-${index}"></i>
                </div>
            </button>
            <div class="p-4 bg-gray-50 hidden" id="faq-answer-${index}">
                ${item.answer}
            </div>
        `;
        faqAccordion.appendChild(div);
    });
}

window.toggleFAQ = function(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}