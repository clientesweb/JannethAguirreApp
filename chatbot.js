class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');

        // Cargar las preguntas y respuestas desde el archivo JSON
        this.loadKnowledge();

        this.addEventListeners();
    }

    // Cargar el archivo JSON
    async loadKnowledge() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            this.knowledge = data.questions; // Supone que las preguntas y respuestas están dentro de un objeto 'questions'
            this.suggestedQuestionsData = data.suggestedQuestions; // Lista de preguntas sugeridas
            this.displaySuggestedQuestions();
        } catch (error) {
            console.error("Error al cargar el archivo JSON:", error);
        }
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

// Initialize the chatbot when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});