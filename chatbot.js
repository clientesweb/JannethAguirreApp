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
        this.isTyping = false;
        this.conversationHistory = [];
        this.maxHistoryLength = 5;
        this.userIntentions = new Set();

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
        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    toggleChat() {
        this.chatWindow.classList.toggle('hidden');
        if (!this.chatWindow.classList.contains('hidden')) {
            this.animateEntry();
            if (this.messages.children.length === 0) {
                this.addMessage('bot', '¡Hola! Soy ARIA, tu asistente virtual de bienes raíces. ¿En qué puedo ayudarte hoy?');
                this.showInitialSuggestions();
            }
        }
    }

    handleOutsideClick(event) {
        if (!this.chatWindow.classList.contains('hidden') &&
            !this.chatWindow.contains(event.target) &&
            event.target !== this.openButton) {
            this.toggleChat();
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
        messageElement.classList.add('mb-2', sender === 'user' ? 'text-right' : 'text-left');
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        messageElement.innerHTML = `
            <div class="flex ${sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div>
                    <span class="text-xs text-gray-500 mb-1 ${sender === 'user' ? 'mr-2' : 'ml-2'}">${currentTime}</span>
                    <span class="inline-block ${sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded px-2 py-1">
                        ${message}
                    </span>
                </div>
            </div>
        `;
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
        this.detectUserIntentions(message);
        const response = await this.generateResponse(message);
        this.hideTypingIndicator();
        this.addMessage('bot', response);
        this.updateContext(message, response);
        this.suggestFollowUp(response);
    }

    showTypingIndicator() {
        if (!this.isTyping) {
            this.isTyping = true;
            const typingElement = document.createElement('div');
            typingElement.classList.add('typing-indicator', 'mb-2');
            typingElement.innerHTML = `
                <div class="flex items-center">
                    <div class="dot-typing"></div>
                </div>
            `;
            this.messages.appendChild(typingElement);
            this.messages.scrollTop = this.messages.scrollHeight;
        }
    }

    hideTypingIndicator() {
        const typingIndicator = this.messages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }

    async generateResponse(message) {
        message = message.toLowerCase();
        let bestMatch = { score: 0, answer: '' };

        const context = this.conversationHistory.join(' ').toLowerCase();

        for (let category in this.knowledge) {
            this.knowledge[category].forEach(item => {
                const questionScore = this.calculateSimilarity(message, item.question.toLowerCase());
                const contextScore = this.calculateSimilarity(context, item.question.toLowerCase());
                const score = questionScore * 0.7 + contextScore * 0.3;

                if (score > bestMatch.score) {
                    bestMatch = { score, answer: item.answer };
                }
            });
        }

        if (bestMatch.score > 0.6) {
            await this.simulateTyping(bestMatch.answer);
            return this.personalizeResponse(bestMatch.answer);
        } else {
            return this.generateFallbackResponse(message);
        }
    }

    personalizeResponse(response) {
        const personalizations = [
            { trigger: 'propiedad', prefix: '¡Excelente pregunta sobre propiedades! ' },
            { trigger: 'servicio', prefix: 'En cuanto a nuestros servicios, ' },
            { trigger: 'inver', prefix: 'Hablando de inversiones, ' },
            { trigger: 'contact', prefix: 'Respecto a contactarnos, ' },
            { trigger: 'financia', prefix: 'Sobre el financiamiento, ' },
            { trigger: 'valor', prefix: 'En cuanto a la valoración de propiedades, ' },
            { trigger: 'compra', prefix: 'Para los compradores, ' },
            { trigger: 'vend', prefix: 'Para los vendedores, ' }
        ];

        for (let personalization of personalizations) {
            if (response.toLowerCase().includes(personalization.trigger)) {
                return personalization.prefix + response;
            }
        }

        return response;
    }

    calculateSimilarity(input, reference) {
        const inputWords = input.split(' ');
        const referenceWords = reference.split(' ');
        const commonWords = inputWords.filter(word => referenceWords.includes(word));
        return commonWords.length / Math.max(inputWords.length, referenceWords.length);
    }

    updateContext(message, response) {
        this.conversationHistory.push(message);
        this.conversationHistory.push(response);
        if (this.conversationHistory.length > this.maxHistoryLength * 2) {
            this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength * 2);
        }
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
        const typingSpeed = 50;
        await new Promise(resolve => setTimeout(resolve, text.length * typingSpeed));
    }

    suggestFollowUp(lastResponse) {
        const suggestions = this.generateSuggestions(lastResponse);
        this.showSuggestions(suggestions);
    }

    generateSuggestions(input) {
        const keywords = ['propiedades', 'servicios', 'inversión', 'contacto', 'internacional', 'financiamiento', 'valoración', 'compra', 'venta'];
        const relevantKeywords = keywords.filter(keyword => input.toLowerCase().includes(keyword));

        let suggestions = [];
        if (relevantKeywords.length > 0) {
            relevantKeywords.forEach(keyword => {
                if (this.knowledge[keyword]) {
                    suggestions = suggestions.concat(this.knowledge[keyword].map(item => item.question));
                }
            });
        } else {
            suggestions = [
                "¿Qué tipos de propiedades ofrecen?",
                "¿Cómo puedo invertir en bienes raíces?",
                "¿Qué servicios brindan a los compradores?",
                "¿Cómo puedo contactar a un agente?"
            ];
        }
        return suggestions.slice(0, 3);
    }

    showSuggestions(suggestions) {
        this.suggestedQuestions.innerHTML = '';
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.textContent = suggestion;
            button.classList.add('suggested-question', 'bg-gray-100', 'text-gray-700', 'px-2', 'py-1', 'rounded', 'mr-2', 'mb-2', 'text-sm', 'hover:bg-gray-200', 'transition-colors', 'duration-200');
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

    detectUserIntentions(message) {
        const intentKeywords = {
            'compra': ['comprar', 'adquirir', 'busco', 'quiero'],
            'venta': ['vender', 'poner en venta', 'quiero vender'],
            'inversion': ['invertir', 'rendimiento', 'oportunidad'],
            'financiamiento': ['préstamo', 'hipoteca', 'crédito'],
            'valoracion': ['tasar', 'valuar', 'cuánto vale'],
            'informacion': ['información', 'detalles', 'más sobre']
        };

        for (let intent in intentKeywords) {
            if (intentKeywords[intent].some(keyword => message.toLowerCase().includes(keyword))) {
                this.userIntentions.add(intent);
            }
        }
    }

    guideConversation() {
        if (this.userIntentions.has('compra')) {
            return "Veo que estás interesado en comprar una propiedad. ¿Tienes alguna preferencia en cuanto a ubicación o tipo de propiedad?";
        } else if (this.userIntentions.has('venta')) {
            return "Entiendo que quieres vender una propiedad. ¿Podrías darme más detalles sobre la propiedad que deseas vender?";
        } else if (this.userIntentions.has('inversion')) {
            return "La inversión inmobiliaria es una excelente opción. ¿Tienes en mente algún tipo específico de inversión o rendimiento esperado?";
        } else if (this.userIntentions.has('financiamiento')) {
            return "El financiamiento es un aspecto crucial. ¿Te gustaría conocer nuestras opciones de financiamiento o tienes alguna pregunta específica al respecto?";
        } else if (this.userIntentions.has('valoracion')) {
            return "La valoración de propiedades es un servicio que ofrecemos. ¿Tienes una propiedad específica que te gustaría valorar?";
        } else if (this.userIntentions.has('informacion')) {
            return "Estoy aquí para proporcionarte toda la información que necesites. ¿Hay algún aspecto específico sobre el que te gustaría saber más?";
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});