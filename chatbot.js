class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');

        // Cargar el archivo JSON
        this.loadKnowledge().then((data) => {
            this.knowledge = data;
            // Mostrar las preguntas sugeridas
            this.displaySuggestedQuestions();
        }).catch((error) => {
            console.error('Error cargando el archivo JSON:', error);
        });

        // Preguntas sugeridas (puedes mantenerlas aquí)
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
    }

    // Cargar el archivo JSON
    loadKnowledge() {
        return fetch('knowledge.json') // Asegúrate de que la ruta al archivo JSON es correcta
            .then(response => response.json())
            .then(data => data);
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
const button = document.createElement('button');
            button.classList.add('suggested-question');
            button.innerText = question;
            button.addEventListener('click', () => this.handleSuggestedQuestion(question));
            this.suggestedQuestions.appendChild(button);
        });
    }

    // Manejar las preguntas sugeridas
    handleSuggestedQuestion(question) {
        this.addMessage('user', question);
        const response = this.generateResponse(question);
        setTimeout(() => {
            this.addMessage('bot', response);
        }, 500);
    }
}

// Crear una nueva instancia del chatbot
const chatbot = new Chatbot();