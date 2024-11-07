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
        this.relevantCategories = []; // Lista de categorías relevantes para sugerencias dinámicas

        // Cargar el conocimiento desde el archivo JSON
        this.loadKnowledge();

        this.addEventListeners();
    }

    // Cargar el archivo JSON
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
        this.suggestDynamicCategories(message); // Sugerir categorías de forma dinámica
    }

    // Generar una respuesta y filtrar categorías de acuerdo al mensaje
    generateResponse(message) {
        message = message.toLowerCase();
        for (let category in this.knowledge) {
            const match = this.knowledge[category].find(item => message.includes(item.question.toLowerCase()));
            if (match) {
                this.updateRelevantCategories(category); // Actualiza categorías relevantes
                return match.answer;
            }
        }
        return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más?";
    }

    // Agregar categorías relevantes dinámicamente sin mostrar todas a la vez
    updateRelevantCategories(category) {
        if (!this.relevantCategories.includes(category)) {
            this.relevantCategories.push(category);
            this.displaySuggestedCategories(); // Muestra solo las categorías nuevas
        }
    }

    // Mostrar las categorías sugeridas de forma progresiva
    displaySuggestedCategories() {
        this.suggestedQuestions.innerHTML = '';
        this.relevantCategories.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.replace('_', ' ').toUpperCase();
            categoryButton.classList.add('category-button', 'bg-blue-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2');
            
            // Mostrar preguntas relacionadas cuando se selecciona la categoría sin activar una respuesta automática
            categoryButton.addEventListener('click', () => this.showCategoryQuestions(category));
            this.suggestedQuestions.appendChild(categoryButton);
        });
    }

    // Mostrar preguntas dentro de una categoría específica
    showCategoryQuestions(category) {
        const questionsContainer = document.getElementById('category-questions');
        questionsContainer.innerHTML = '';

        this.knowledge[category].forEach(item => {
            const button = document.createElement('button');
            button.textContent = item.question;
            button.classList.add('suggested-question', 'bg-gray-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2', 'text-sm');
            
            // Al hacer clic en una pregunta, se procesa el mensaje y se muestra la respuesta
            button.addEventListener('click', () => this.handleSuggestedQuestion({ target: button }));
            questionsContainer.appendChild(button);
        });
    }

    // Ejecutar la pregunta seleccionada por el usuario
    handleSuggestedQuestion(event) {
        if (event.target.classList.contains('suggested-question')) {
            const question = event.target.textContent;
            this.addMessage('user', question);
            this.processMessage(question);
        }
    }

    // Filtrar sugerencias basadas en el texto ingresado sin reiniciar categorías previas
    filterSuggestedQuestions() {
        const inputText = this.input.value.toLowerCase();
        let filteredCategories = [];

        for (let category in this.knowledge) {
            const filteredQuestions = this.knowledge[category].filter(item =>
                item.question.toLowerCase().includes(inputText)
            );
            if (filteredQuestions.length) {
                filteredCategories.push(category);
            }
        }

        // Si hay coincidencias, actualizamos las categorías relevantes sin duplicarlas
        if (inputText) {
            filteredCategories.forEach(category => {
                if (!this.relevantCategories.includes(category)) {
                    this.relevantCategories.push(category);
                }
            });
            this.displaySuggestedCategories();
        }
    }
}

// Inicializa el chatbot cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});