class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');

        // Conjunto de respuestas predeterminadas
        this.knowledge = {
            "propiedades": "Ofrecemos una variedad de propiedades, incluyendo departamentos en Nuevo Samborondón, Isla Mocolí, Cuenca, locales comerciales y casas personalizadas. También tenemos propiedades en diferentes ubicaciones que pueden adaptarse a tus necesidades.",
            "servicios": "Nuestros servicios incluyen asesoría legal, avalúo de propiedades, asesoría dentro y fuera de Ecuador, gestión de proyectos, análisis de mercado, gestión de ventas, venta de proyectos en planos, y gestión de alquileres. También ofrecemos servicios personalizados según tus necesidades.",
            "contacto": "Puedes contactarnos al +593 98 716 7782 o por email a info@jannethaguirre.com. Nuestra oficina está ubicada en Guayaquil, Ecuador, pero podemos coordinar reuniones virtuales o en cualquier parte del país.",
            "sobre_nosotros": "Janneth Aguirre es una representante inmobiliaria líder desde 2009, reconocida en el mercado ecuatoriano por su servicio personalizado y de alta calidad. Contamos con un equipo profesional que te asistirá en todo el proceso de compra, venta o alquiler de propiedades.",
            "invertir": "Ofrecemos oportunidades de inversión en Samborondón, Estados Unidos y Panamá. Cada ubicación tiene sus ventajas únicas para los inversores. En Samborondón, te brindamos acceso a propiedades de lujo, mientras que en EE.UU. y Panamá ofrecemos opciones con un alto potencial de rentabilidad.",
            "proceso_compra": "El proceso de compra generalmente incluye búsqueda de la propiedad, negociación del precio, firma de un contrato de compraventa, obtención de financiamiento si es necesario, y cierre de la transacción. Nuestro equipo te acompañará en cada etapa del proceso para asegurar una experiencia sin contratiempos.",
            "documentos_venta": "Para vender una propiedad, generalmente necesitarás el título de propiedad, certificado de gravámenes, pago de impuestos al día, y cédula de identidad. Si no estás seguro de los documentos que necesitas, nuestro equipo te puede asesorar y guiar en el proceso.",
            "tiempo_venta": "El tiempo de venta puede variar, pero en promedio puede tomar entre 3 a 6 meses, dependiendo de factores como la ubicación, el precio y las condiciones del mercado. Te ayudaremos a obtener el mejor precio y la venta más rápida.",
            "alquileres": "También gestionamos alquileres de propiedades. Si estás buscando alquilar una propiedad o poner la tuya en alquiler, podemos ayudarte con la mejor asesoría y gestión de contratos de alquiler.",
            "tendencias_inmobiliarias": "Las tendencias actuales en el mercado inmobiliario de Ecuador incluyen un aumento en la demanda de propiedades en zonas residenciales cerca de áreas comerciales y turísticas. También estamos viendo una creciente inversión en propiedades de lujo, especialmente en Samborondón y Mocolí.",
            "asesoria_investment": "Si buscas asesoría en inversiones inmobiliarias, nuestro equipo de expertos puede ofrecerte un análisis personalizado del mercado, recomendarte las mejores oportunidades de inversión y guiarte en la toma de decisiones.",
            "proyectos_en_plano": "Contamos con varios proyectos en plano que permiten a los compradores personalizar sus propiedades antes de que se construyan. Estos proyectos ofrecen precios competitivos y altas posibilidades de revalorización."
        };

        // Preguntas sugeridas
        this.suggestedQuestionsData = [
            "¿Qué tipos de propiedades ofrecen?",
            "¿Cuáles son sus servicios principales?",
            "¿Cómo puedo contactarlos?",
            "¿Quién es Janneth Aguirre?",
            "¿Dónde puedo invertir?",
            "¿Cuál es el proceso de compra de una propiedad?",
            "¿Qué documentos necesito para vender mi propiedad?",
            "¿Cuánto tiempo toma vender una propiedad?",
            "¿Ofrecen propiedades en alquiler?",
            "¿Cuáles son las tendencias actuales del mercado inmobiliario?",
            "¿Cómo puedo invertir en propiedades?",
            "¿Tienen proyectos en plano disponibles?"
        ];

        // Añadir los eventos
        this.addEventListeners();
        // Mostrar las preguntas sugeridas
        this.displaySuggestedQuestions();
    }

    // Añadir los listeners de eventos
    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.openButton.addEventListener('click', this.toggleChat.bind(this));
        this.closeButton.addEventListener('click', this.toggleChat.bind(this));
        this.suggestedQuestions.addEventListener('click', this.handleSuggestedQuestion.bind(this));
    }

    // Mostrar u ocultar el chat
    toggleChat() {
        this.chatWindow.classList.toggle('hidden');
    }

    // Manejar la respuesta al enviar un mensaje
    handleSubmit(event) {
        event.preventDefault();
        const message = this.input.value.trim();
        if (message !== '') {
            this.addMessage('user', message);
            this.input.value = '';
            this.processMessage(message);
        }
    }

    // Añadir un mensaje en la ventana de chat
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

    // Procesar el mensaje y generar respuesta
    processMessage(message) {
        const response = this.generateResponse(message);
        setTimeout(() => {
            this.addMessage('bot', response);
        }, 500);
    }

    // Generar la respuesta según el mensaje
    generateResponse(message) {
        message = message.toLowerCase();

        // Usar expresiones regulares para mejorar las respuestas
        if (/\b(propiedad|casa|departamento)\b/.test(message)) {
            return this.knowledge.propiedades;
        } else if (/\b(servicio)\b/.test(message)) {
            return this.knowledge.servicios;
        } else if (/\b(contacto|comunicar)\b/.test(message)) {
            return this.knowledge.contacto;
        } else if (/\b(janneth|quiénes somos|sobre ustedes)\b/.test(message)) {
            return this.knowledge.sobre_nosotros;
        } else if (/\b(invertir|inversión)\b/.test(message)) {
            return this.knowledge.invertir;
        } else if (/\b(proceso de compra|cómo comprar)\b/.test(message)) {
            return this.knowledge.proceso_compra;
        } else if (/\b(documentos|papeles|vender)\b/.test(message)) {
            return this.knowledge.documentos_venta;
        } else if (/\b(tiempo|cuánto tarda)\b/.test(message)) {
            return this.knowledge.tiempo_venta;
        } else if (/\b(alquileres)\b/.test(message)) {
            return this.knowledge.alquileres;
        } else if (/\b(tendencias|mercado)\b/.test(message)) {
            return this.knowledge.tendencias_inmobiliarias;
        } else if (/\b(investment|asesoría)\b/.test(message)) {
            return this.knowledge.asesoria_investment;
        } else if (/\b(proyectos en plano)\b/.test(message)) {
            return this.knowledge.proyectos_en_plano;
        } else {
            return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más sobre nuestras propiedades, servicios o proceso de compra/venta?";
        }
    }

    // Mostrar las preguntas sugeridas
    displaySuggestedQuestions() {
        this.suggestedQuestionsData.forEach((question) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('suggested-question');
            questionElement.textContent = question;
            this.suggestedQuestions.appendChild(questionElement);
        });
    }

    // Manejar el clic en una pregunta sugerida
    handleSuggestedQuestion(event) {
        if (event.target && event.target.classList.contains('suggested-question')) {
            const message = event.target.textContent;
            this.addMessage('user', message);
            this.processMessage(message);
        }
    }
}

// Iniciar el chatbot cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});