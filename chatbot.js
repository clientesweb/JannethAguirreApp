class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');

        // Datos de preguntas y respuestas directamente en el código
        this.knowledge = [
            { question: '¿Qué servicios ofrecen?', answer: 'Ofrecemos una amplia gama de servicios, incluyendo diseño web, desarrollo de aplicaciones, y consultoría.' },
            { question: '¿Cómo puedo contactar?', answer: 'Puedes contactarnos a través del formulario en nuestra página de contacto o enviándonos un correo electrónico a contacto@empresa.com.' },
            { question: '¿Cuáles son los precios?', answer: 'Los precios dependen de los servicios que necesites. Por favor, contáctanos para una cotización personalizada.' },
            { question: '¿Tienen soporte técnico?', answer: 'Sí, ofrecemos soporte técnico para nuestros clientes durante y después de la implementación de sus proyectos.' }
        ];

        this.suggestedQuestionsData = [
            '¿Qué servicios ofrecen?',
            '¿Cómo puedo contactar?',
            '¿Cuáles son los precios?',
            '¿Tienen soporte técnico?'
        ];

        this.displaySuggestedQuestions();

        this.addEventListeners();
    }

    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.openButton.addEventListener('click', this.toggleChat.bind(this));
        this.closeButton.addEventListener('click', this.toggleChat.bind(this));
        this.suggestedQuestions.addEventListener('click', this.handleSuggestedQuestion.bind(this));
    }

    toggleChat() {
        this.chatWindow.classList.toggle('hidden');
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

    // Filtrar preguntas y generar la respuesta
    generateResponse(message) {
        message = message.toLowerCase();
        const match = this.knowledge.find(item => message.includes(item.question.toLowerCase()));

        if (match) {
            return match.answer;
        } else {
            return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más?";
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
}

// Inicializa el chatbot cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});