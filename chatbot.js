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
        this.context = []; // Mantener contexto de la conversación
        this.typingIndicator = document.createElement('div');
        this.typingIndicator.className = 'typing-indicator';
        this.typingIndicator.innerHTML = '<span></span><span></span><span></span>';

        this.loadKnowledge();
        this.addEventListeners();
        this.debounceTimeout = null;
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
        this.input.addEventListener('input', this.handleInput.bind(this));
    }

    toggleChat() {
        this.chatWindow.classList.toggle('active');
        if (this.chatWindow.classList.contains('active')) {
            this.animateEntry();
            if (this.messages.children.length === 0) {
                this.addMessage('bot', '¡Hola! Soy ARIA, tu asistente virtual de bienes raíces. ¿En qué puedo ayudarte hoy?');
                this.showInitialSuggestions();
            }
        }
    }

    animateEntry() {
        this.chatWindow.style.opacity = '0';
        this.chatWindow.style.transform = 'translateY(20px)';
        this.chatWindow.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        setTimeout(() => {
            this.chatWindow.style.opacity = '1';
            this.chatWindow.style.transform = 'translateY(0)';
        }, 50);
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

    handleInput() {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
            const inputText = this.input.value.trim().toLowerCase();
            if (inputText) {
                this.showSuggestions(this.generateSuggestions(inputText));
            } else {
                this.suggestedQuestions.innerHTML = '';
            }
        }, 300);
    }

    addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.innerHTML = `<span>${message}</span>`;
        this.messages.appendChild(messageElement);
        this.messages.scrollTop = this.messages.scrollHeight;
        this.animateMessage(messageElement);
    }

    animateMessage(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 50);
    }

    async processMessage(message) {
        this.showTypingIndicator();
        const response = await this.generateResponse(message);
        this.hideTypingIndicator();
        this.addMessage('bot', response);
        this.updateContext(message, response);
        this.suggestFollowUp(response);
    }

    showTypingIndicator() {
        this.messages.appendChild(this.typingIndicator);
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    hideTypingIndicator() {
        if (this.typingIndicator.parentNode === this.messages) {
            this.messages.removeChild(this.typingIndicator);
        }
    }

    async generateResponse(message) {
        message = message.toLowerCase();
        let bestMatch = { score: 0, answer: '' };

        for (let category in this.knowledge) {
            this.knowledge[category].forEach(item => {
                const score = this.calculateSimilarity(message, item.question.toLowerCase());
                if (score > bestMatch.score) {
                    bestMatch = { score, answer: item.answer };
                }
            });
        }

        if (bestMatch.score > 0.6) {
            await this.simulateTyping(bestMatch.answer);
            return bestMatch.answer;
        } else {
            return this.generateFallbackResponse(message);
        }
    }

    calculateSimilarity(input, reference) {
        const inputWords = input.split(' ');
        const referenceWords = reference.split(' ');
        const commonWords = inputWords.filter(word => referenceWords.includes(word));
        return commonWords.length / Math.max(inputWords.length, referenceWords.length);
    }

    async generateFallbackResponse(message) {
        const fallbacks = [
            "No tengo información específica sobre eso, pero puedo ayudarte con preguntas sobre propiedades, servicios inmobiliarios o el proceso de compra/venta. ¿Hay algo en particular que te interese?",
            "Esa es una pregunta interesante. Aunque no tengo una respuesta directa, puedo proporcionarte información sobre nuestras propiedades o servicios. ¿Qué te gustaría saber?",
            "Disculpa, no tengo datos concretos sobre eso. Sin embargo, estoy especializada en temas inmobiliarios. ¿Puedo ayudarte con alguna consulta sobre propiedades o el mercado inmobiliario?",
            "Parece que esa pregunta requiere más información. ¿Te gustaría que te conecte con uno de nuestros agentes para una consulta más detallada? Puedes contactarnos por WhatsApp al +593 99 999 9999."
        ];
        const response = fallbacks[Math.floor(Math.random() * fallbacks.length)];
        await this.simulateTyping(response);
        return response;
    }

    async simulateTyping(text) {
        const typingSpeed = 50; // milisegundos por carácter
        await new Promise(resolve => setTimeout(resolve, text.length * typingSpeed));
    }

    updateContext(message, response) {
        this.context.push({ message, response });
        if (this.context.length > 5) {
            this.context.shift();
        }
    }

    suggestFollowUp(lastResponse) {
        const suggestions = this.generateSuggestions(lastResponse);
        this.showSuggestions(suggestions);
    }

    generateSuggestions(input) {
        const keywords = ['propiedades', 'servicios', 'inversión', 'contacto', 'internacional'];
        const relevantKeywords = keywords.filter(keyword => input.toLowerCase().includes(keyword));

        let suggestions = [];
        if (relevantKeywords.length > 0) {
            relevantKeywords.forEach(keyword => {
                if (this.knowledge[keyword]) {
                    suggestions = suggestions.concat(this.knowledge[keyword].map(item => item.question));
                }
            });
        } else {
            // Si no hay palabras clave relevantes, sugerir preguntas generales
            suggestions = [
                "¿Qué tipos de propiedades ofrecen?",
                "¿Cómo puedo invertir en bienes raíces?",
                "¿Qué servicios brindan a los compradores?",
                "¿Cómo puedo contactar a un agente?"
            ];
        }
        return suggestions.slice(0, 3); // Limitar a 3 sugerencias
    }

    showSuggestions(suggestions) {
        this.suggestedQuestions.innerHTML = '';
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.textContent = suggestion;
            button.classList.add('suggested-question');
            button.addEventListener('click', () => {
                this.input.value = suggestion;
                this.handleSubmit(new Event('submit'));
            });
            this.suggestedQuestions.appendChild(button);
        });
    }

    showInitialSuggestions() {
        const initialSuggestions = [
            "¿Qué servicios ofrecen?",
            "¿Tienen propiedades en venta?",
            "¿Cómo puedo contactarlos?"
        ];
        this.showSuggestions(initialSuggestions);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});