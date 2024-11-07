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
        this.debounceTimeout = null; // Para optimización de las búsquedas rápidas
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
        if (!this.chatWindow.classList.contains('hidden')) {
            this.showInitialSuggestions(); // Al abrir el chat, mostrar opciones iniciales
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
            // Siempre terminar en "contactar" si no se habla de ello
            if (!message.toLowerCase().includes("contactar")) {
                this.addMessage('bot', "Si necesitas más ayuda, no dudes en contactarnos.");
            }
        }, 500);
    }

    generateResponse(message) {
        message = message.toLowerCase();
        for (let category in this.knowledge) {
            const match = this.knowledge[category].find(item => message.includes(item.question.toLowerCase()));
            if (match) {
                return match.answer;
            }
        }
        // Respuesta cuando no se encuentra información
        return this.getContactLinks();
    }

    getContactLinks() {
        return `
            Lo siento, no tengo información específica sobre esa consulta. 
            Si necesitas más ayuda, no dudes en contactarnos:
            <br>
            <a href="https://wa.me/1234567890" target="_blank">Contáctanos por WhatsApp</a><br>
            <a href="https://www.ejemplo.com" target="_blank">Visita nuestra página web</a>
        `;
    }

    // Mostrar sugerencias dinámicas mientras el usuario escribe
    filterSuggestedQuestions() {
        const inputText = this.input.value.trim().toLowerCase();
        clearTimeout(this.debounceTimeout); // Limpiar el temporizador de debounce

        if (inputText) {
            this.debounceTimeout = setTimeout(() => {
                this.updateSuggestedCategories(inputText); // Filtrar sugerencias según el texto ingresado
            }, 300); // Esperar 300ms después de que el usuario termine de escribir
        } else {
            this.suggestedQuestions.innerHTML = ''; // Si no hay texto, quitar sugerencias
            this.showInitialSuggestions(); // Mostrar sugerencias iniciales
        }
    }

    // Mostrar opciones iniciales cuando el chat se abre
    showInitialSuggestions() {
        this.suggestedQuestions.innerHTML = '';
        const initialQuestions = ['¿Cómo puedo ayudarte?', '¿Tienes alguna consulta?', 'Hazme una pregunta sobre nuestros servicios'];
        initialQuestions.forEach(question => {
            const button = document.createElement('button');
            button.textContent = question;
            button.classList.add('category-button', 'bg-blue-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2');
            
            button.addEventListener('click', () => this.processMessage(question));
            this.suggestedQuestions.appendChild(button);
        });
    }

    // Actualizar las categorías sugeridas basadas en el texto ingresado
    updateSuggestedCategories(message) {
        this.suggestedQuestions.innerHTML = ''; // Limpiar las sugerencias previas
        const matchedCategories = this.getRelevantCategories(message);

        // Mostrar varias sugerencias relacionadas
        matchedCategories.forEach(category => {
            const categoryButton = document.createElement('button');
            categoryButton.textContent = category.replace('_', ' ').toUpperCase();
            categoryButton.classList.add('category-button', 'bg-blue-200', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2');
            
            categoryButton.addEventListener('click', () => this.showCategoryQuestions(category));
            this.suggestedQuestions.appendChild(categoryButton);
        });
    }

    // Obtener categorías relevantes basadas en las palabras del mensaje
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

    // Mostrar preguntas dentro de una categoría seleccionada
    showCategoryQuestions(category) {
        this.suggestedQuestions.innerHTML = ''; // Limpiar los botones de categorías

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

    // Detectar similitudes con las palabras claves mientras el usuario escribe
    detectSimilarIntentions(inputText) {
        const suggestions = [];
        
        // Analizar las palabras clave y generar sugerencias de intenciones similares
        for (let category in this.knowledge) {
            this.knowledge[category].forEach(item => {
                if (this.isSimilar(inputText, item.question)) {
                    suggestions.push(item.question);
                }
            });
        }

        return suggestions;
    }

    // Función para evaluar similitudes entre lo escrito y las preguntas predefinidas
    isSimilar(inputText, referenceText) {
        const similarityThreshold = 0.6;
        const inputWords = inputText.split(' ');
        const referenceWords = referenceText.split(' ');
        const commonWords = inputWords.filter(word => referenceWords.includes(word));
        
        return (commonWords.length / referenceWords.length) >= similarityThreshold;
    }
}

// Inicializar el chatbot cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});