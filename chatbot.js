class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');

        // Verificamos si los elementos existen en el DOM antes de agregar los listeners
        if (this.openButton && this.closeButton && this.chatWindow) {
            this.addEventListeners();
            this.displaySuggestedQuestions();
        } else {
            console.error("Los elementos necesarios no están en el DOM.");
        }

        this.knowledge = {
            "propiedades": "Ofrecemos una variedad de propiedades, incluyendo departamentos en Nuevo Samborondón, Isla Mocolí, Cuenca, locales comerciales y casas personalizadas.",
            "servicios": "Nuestros servicios incluyen asesoría legal, avalúo de propiedades, asesoría dentro y fuera de Ecuador, gestión de proyectos, análisis de mercado, gestión de ventas, venta de proyectos en planos y gestión de alquileres.",
            "contacto": "Puede contactarnos al +593 98 716 7782 o por email a info@jannethaguirre.com. Nuestra oficina está ubicada en Guayaquil, Ecuador.",
            "sobre_nosotros": "Janneth Aguirre es una representante inmobiliaria líder desde 2009, reconocida en el mercado ecuatoriano por su servicio personalizado y de alta calidad.",
            "invertir": "Ofrecemos oportunidades de inversión en Samborondón, Estados Unidos y Panamá. Cada ubicación tiene sus ventajas únicas para los inversores.",
            "proceso_compra": "El proceso de compra generalmente incluye búsqueda de la propiedad, negociación del precio, firma de un contrato de compraventa, obtención de financiamiento si es necesario, y cierre de la transacción.",
            "documentos_venta": "Para vender una propiedad, generalmente necesitará el título de propiedad, certificado de gravámenes, pago de impuestos al día, y cédula de identidad.",
            "tiempo_venta": "El tiempo de venta puede variar, pero en promedio puede tomar entre 3 a 6 meses, dependiendo de factores como la ubicación, el precio y las condiciones del mercado."
        };

        this.suggestedQuestionsData = [
            "¿Qué tipos de propiedades ofrecen?",
            "¿Cuáles son sus servicios principales?",
            "¿Cómo puedo contactarlos?",
            "¿Quién es Janneth Aguirre?",
            "¿Dónde puedo invertir?",
            "¿Cuál es el proceso de compra de una propiedad?",
            "¿Qué documentos necesito para vender mi propiedad?",
            "¿Cuánto tiempo toma vender una propiedad?"
        ];
    }

    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.openButton.addEventListener('click', this.toggleChat.bind(this));
        this.closeButton.addEventListener('click', this.toggleChat.bind(this));
        this.suggestedQuestions.addEventListener('click', this.handleSuggestedQuestion.bind(this));
    }

    toggleChat() {
        if (this.chatWindow) {
            this.chatWindow.classList.toggle('hidden');
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const message = this.input.value.trim();
        if (message !== '') {
            this.addMessage('user', message);
            this.input.value = '';
            this.processMessage(message);
        }
    }

    addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('mb-2', sender === 'user' ? 'text-right' : 'text-left');
        messageElement.innerHTML = `
            <span class="inline-block bg-${sender === 'user' ? 'blue' : 'gray'}-200 rounded px-2 py-1">
                ${message}
            </span>
        `;
        this.messages.appendChild(messageElement);
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    processMessage(message) {
        const response = this.generateResponse(message);
        setTimeout(() => {
            this.addMessage('bot', response);
        }, 500);
    }

    generateResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('propiedad') || message.includes('casa') || message.includes('departamento')) {
            return this.knowledge.propiedades;
        } else if (message.includes('servicio')) {
            return this.knowledge.servicios;
        } else if (message.includes('contacto') || message.includes('comunicar')) {
            return this.knowledge.contacto;
        } else if (message.includes('janneth') || message.includes('sobre ustedes') || message.includes('quienes son')) {
            return this.knowledge.sobre_nosotros;
        } else if (message.includes('invertir') || message.includes('inversión')) {
            return this.knowledge.invertir;
        } else if (message.includes('proceso de compra') || message.includes('cómo comprar')) {
            return this.knowledge.proceso_compra;
        } else if (message.includes('documentos') || message.includes('papeles') || message.includes('vender')) {
            return this.knowledge.documentos_venta;
        } else if (message.includes('tiempo') || message.includes('duración') || message.includes('cuánto tarda')) {
            return this.knowledge.tiempo_venta;
        } else {
            return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más sobre nuestras propiedades, servicios o proceso de compra/venta?";
        }
    }

    displaySuggestedQuestions() {
        this.suggestedQuestions.innerHTML = '';
        this.suggestedQuestionsData.forEach(question => {
            const button = document.createElement('button');
            button.textContent = question;
            button.classList.add('suggested-question', 'bg-gray-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2', 'text-sm');
            this.suggestedQuestions.appendChild(button);
        });
    }

    handleSuggestedQuestion(event) {
        if (event.target.classList.contains('suggested-question')) {
            const question = event.target.textContent;
            this.addMessage('user', question);
            this.processMessage(question);
        }
    }

    addKnowledge(key, value) {
        this.knowledge[key] = value;
    }
}

// Initialize the chatbot when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();

    // Example of how to add more knowledge to the chatbot
    chatbot.addKnowledge('nuevas_propiedades', 'Estamos constantemente agregando nuevas propiedades a nuestro portafolio. Por favor, consulta nuestra sección de propiedades destacadas para ver las últimas adiciones.');
});