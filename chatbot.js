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
            this.knowledge = data; // Todo el JSON cargado
            this.filteredKnowledge = { ...this.knowledge }; // Inicializar el filtro con todos los datos
            this.displaySuggestedCategories();
        } catch (error) {
            console.error("Error al cargar el archivo JSON:", error);
        }
    }

    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.openButton.addEventListener('click', this.toggleChat.bind(this));
        this.closeButton.addEventListener('click', this.toggleChat.bind(this));
        this.suggestedQuestions.addEventListener('click', this.handleSuggestedQuestion.bind(this));
        this.input.addEventListener('input', this.filterSuggestedQuestions.bind(this)); // Nuevo evento para filtrado
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
        this.updateSuggestedCategories(message); // Actualizar sugerencias dinámicamente
    }

    // Filtrar preguntas y generar la respuesta
    generateResponse(message) {
        message = message.toLowerCase();
        for (let category in this.knowledge) {
            const match = this.knowledge[category].find(item => message.includes(item.question.toLowerCase()));
            if (match) {
                return match.answer;
            }
        }
        return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más?";
    }

    // Mostrar categorías sugeridas dinámicamente
    displaySuggestedCategories() {
        this.suggestedQuestions.innerHTML = '';
        Object.keys(this.filteredKnowledge).forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.replace('_', ' ').toUpperCase();
            categoryButton.classList.add('category-button', 'bg-blue-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2');
            categoryButton.addEventListener('click', () => this.showCategoryQuestions(category));
            this.suggestedQuestions.appendChild(categoryButton);
        });
    }

    // Mostrar preguntas dentro de una categoría
    showCategoryQuestions(category) {
        const questionsContainer = document.getElementById('category-questions');
        questionsContainer.innerHTML = '';
        this.filteredKnowledge[category].forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.question;
            button.classList.add('suggested-question', 'bg-gray-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2', 'text-sm');
            button.addEventListener('click', () => this.handleSuggestedQuestion({ target: button }));
            questionsContainer.appendChild(button);
        });
    }

    // Filtrar sugerencias dinámicamente
    filterSuggestedQuestions() {
        const inputText = this.input.value.toLowerCase();
        this.filteredKnowledge = {};

        for (let category in this.knowledge) {
            const filteredQuestions = this.knowledge[category].filter(item =>
                item.question.toLowerCase().includes(inputText)
            );
            if (filteredQuestions.length) {
                this.filteredKnowledge[category] = filteredQuestions;
            }
        }
        this.displaySuggestedCategories();
    }

    // Actualizar categorías en función de la interacción del usuario
    updateSuggestedCategories(message) {
        const keyword = message.toLowerCase();
        this.filteredKnowledge = {};
        
        for (let category in this.knowledge) {
            if (category.includes(keyword) || this.knowledge[category].some(item => item.question.toLowerCase().includes(keyword))) {
                this.filteredKnowledge[category] = this.knowledge[category];
            }
        }
        this.displaySuggestedCategories();
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