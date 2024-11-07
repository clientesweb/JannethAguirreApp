class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');
        this.knowledge = {}; // Base de conocimientos cargada desde JSON

        this.loadKnowledge();
        this.addEventListeners();
        this.debounceTimeout = null; // Para la optimización de búsquedas rápidas
    }

    async loadKnowledge() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            this.knowledge = data;
        } catch (error) {
            console.error("Error al cargar el archivo JSON:", error);
        }
    }

    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.openButton.addEventListener('click', this.toggleChat.bind(this));
        this.closeButton.addEventListener('click', this.toggleChat.bind(this));
        this.input.addEventListener('input', this.filterSuggestedQuestions.bind(this));
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
        this.updateSuggestedCategories(message); // Actualizar sugerencias dinámicas
    }

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

    // Actualizar las sugerencias dinámicas según el contexto actual del mensaje
    updateSuggestedCategories(message) {
        this.suggestedQuestions.innerHTML = ''; // Limpiar sugerencias anteriores
        const matchedCategories = this.getRelevantCategories(message);

        matchedCategories.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.replace('_', ' ').toUpperCase();
            categoryButton.classList.add('category-button', 'bg-blue-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2');
            
            categoryButton.addEventListener('click', () => this.showCategoryQuestions(category));
            this.suggestedQuestions.appendChild(categoryButton);
        });
    }

    // Obtener categorías relevantes según el contenido del mensaje
    getRelevantCategories(message) {
        const relevantCategories = [];

        for (let category in this.knowledge) {
            const hasRelevantQuestions = this.knowledge[category].some(item =>
                message.includes(item.question.toLowerCase())
            );
            if (hasRelevantQuestions) {
                relevantCategories.push(category);
            }
        }

        return relevantCategories.length ? relevantCategories : ["default"]; // Si no hay categorías, sugerir algo por defecto
    }

    // Mostrar preguntas dentro de una categoría específica seleccionada
    showCategoryQuestions(category) {
        this.suggestedQuestions.innerHTML = ''; // Limpiar botones de categoría

        this.knowledge[category].forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.question;
            button.classList.add('suggested-question', 'bg-gray-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2', 'text-sm');

            button.addEventListener('click', () => {
                this.addMessage('user', item.question);
                this.processMessage(item.question);
            });
            this.suggestedQuestions.appendChild(button);
        });
    }

    // Filtrar sugerencias basadas en el texto ingresado por el usuario
    filterSuggestedQuestions() {
        const inputText = this.input.value.toLowerCase();
        clearTimeout(this.debounceTimeout); // Limpiar el temporizador de debounce
        if (inputText) {
            this.debounceTimeout = setTimeout(() => {
                this.updateSuggestedCategories(inputText); // Filtrar categorías según el input actual
            }, 300); // Esperar 300ms después de que el usuario termine de escribir
        }
    }
}

// Inicializa el chatbot cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});