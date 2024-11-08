class Chatbot {
    constructor() {
        this.messages = document.getElementById('chatbot-messages');
        this.input = document.getElementById('chatbot-input');
        this.form = document.getElementById('chatbot-form');
        this.openButton = document.getElementById('open-chatbot');
        this.closeButton = document.getElementById('close-chatbot');
        this.chatWindow = document.getElementById('chatbot-window');
        this.suggestedQuestions = document.getElementById('suggested-questions');
        this.knowledge = {};
        this.context = [];
        this.isTyping = false;
        this.conversationHistory = [];
        this.maxHistoryLength = 5;
        this.userIntentions = new Set();
        this.lastSuggestions = [];
        this.isOpen = false;
        this.entityExtractor = new EntityExtractor();
        this.sentimentAnalyzer = new SentimentAnalyzer();

        this.loadKnowledge();
        this.addEventListeners();
        this.initializeChatWindow();
    }

    async loadKnowledge() {
        try {
            const response = await fetch('data.json');
            this.knowledge = await response.json();
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

    initializeChatWindow() {
        this.chatWindow.style.display = 'flex';
        this.chatWindow.style.opacity = '0';
        this.chatWindow.style.transform = 'translateY(20px) scale(0.95)';
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            this.chatWindow.classList.add('active');
            this.animateEntry();
            if (this.messages.children.length === 0) {
                this.addMessage('bot', '¡Hola! Soy ARIA, tu asistente virtual de bienes raíces. ¿En qué puedo ayudarte hoy?');
                this.showInitialSuggestions();
            }
        } else {
            this.chatWindow.classList.remove('active');
        }
    }

    handleOutsideClick(event) {
        if (this.isOpen && !this.chatWindow.contains(event.target) && event.target !== this.openButton) {
            this.toggleChat();
        }
    }

    animateEntry() {
        this.chatWindow.style.opacity = '1';
        this.chatWindow.style.transform = 'translateY(0) scale(1)';
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
        const inputText = this.input.value.trim().toLowerCase();
        if (inputText) {
            this.showSuggestions(this.generateSuggestions(inputText));
        } else {
            this.suggestedQuestions.innerHTML = '';
        }
    }

    addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        this.messages.appendChild(messageElement);
        this.messages.scrollTop = this.messages.scrollHeight;
        this.animateMessage(messageElement);
    }

    animateMessage(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 50);
    }

    async processMessage(message) {
        this.showTypingIndicator();
        const entities = this.entityExtractor.extract(message);
        const sentiment = this.sentimentAnalyzer.analyze(message);
        this.detectUserIntentions(message);
        const response = await this.generateResponse(message, entities, sentiment);
        this.hideTypingIndicator();
        this.addMessage('bot', response);
        this.updateContext(message, response);
        this.suggestFollowUp(response);
    }

    showTypingIndicator() {
        if (!this.isTyping) {
            this.isTyping = true;
            const typingElement = document.createElement('div');
            typingElement.classList.add('typing-indicator');
            typingElement.innerHTML = '<div class="dot-typing"></div>';
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

    async generateResponse(message, entities, sentiment) {
        message = message.toLowerCase();
        let bestMatch = { score: 0, answer: '' };

        const context = this.conversationHistory.join(' ').toLowerCase();

        for (let category in this.knowledge) {
            this.knowledge[category].forEach(item => {
                const questionScore = this.calculateSimilarity(message, item.question.toLowerCase());
                const contextScore = this.calculateSimilarity(context, item.question.toLowerCase());
                const entityScore = this.calculateEntityScore(entities, item.entities);
                const score = questionScore * 0.5 + contextScore * 0.3 + entityScore * 0.2;

                if (score > bestMatch.score) {
                    bestMatch = { score, answer: item.answer };
                }
            });
        }

        if (bestMatch.score > 0.6) {
            return this.personalizeResponse(bestMatch.answer, entities, sentiment);
        } else {
            return this.generateFallbackResponse(message, entities, sentiment);
        }
    }

    personalizeResponse(response, entities, sentiment) {
        let personalizedResponse = response;

        // Personalización basada en entidades
        if (entities.location) {
            personalizedResponse = personalizedResponse.replace('[LOCATION]', entities.location);
        }
        if (entities.propertyType) {
            personalizedResponse = personalizedResponse.replace('[PROPERTY_TYPE]', entities.propertyType);
        }

        // Personalización basada en sentimiento
        if (sentiment === 'positive') {
            personalizedResponse = "¡Me alegra que estés interesado! " + personalizedResponse;
        } else if (sentiment === 'negative') {
            personalizedResponse = "Entiendo tu preocupación. Permíteme ayudarte: " + personalizedResponse;
        }

        // Personalización basada en intenciones del usuario
        if (this.userIntentions.has('compra')) {
            personalizedResponse += " ¿Hay alguna característica específica que estés buscando en una propiedad?";
        } else if (this.userIntentions.has('venta')) {
            personalizedResponse += " ¿Tienes una idea del valor de mercado de tu propiedad?";
        }

        return personalizedResponse;
    }

    calculateSimilarity(input, reference) {
        const inputWords = input.split(' ');
        const referenceWords = reference.split(' ');
        const commonWords = inputWords.filter(word => referenceWords.includes(word));
        return commonWords.length / Math.max(inputWords.length, referenceWords.length);
    }

    calculateEntityScore(userEntities, itemEntities) {
        if (!itemEntities) return 0;
        const matchingEntities = Object.keys(userEntities).filter(entity => itemEntities.includes(entity));
        return matchingEntities.length / itemEntities.length;
    }

    updateContext(message, response) {
        this.conversationHistory.push(message);
        this.conversationHistory.push(response);
        if (this.conversationHistory.length > this.maxHistoryLength * 2) {
            this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength * 2);
        }
    }

    generateFallbackResponse(message, entities, sentiment) {
        const fallbacks = [
            "No tengo información específica sobre eso, pero puedo ayudarte con preguntas sobre propiedades, servicios inmobiliarios o el proceso de compra/venta. ¿Hay algo en particular que te interese?",
            "Esa es una pregunta interesante. Aunque no tengo una respuesta directa, puedo proporcionarte información sobre nuestras propiedades o servicios. ¿Qué te gustaría saber?",
            "Disculpa, no tengo datos concretos sobre eso. Sin embargo, estoy especializada en temas inmobiliarios. ¿Puedo ayudarte con alguna consulta sobre propiedades o el mercado inmobiliario?",
            "Parece que esa pregunta requiere más información. ¿Te gustaría que te conecte con uno de nuestros agentes para una consulta más detallada?"
        ];

        let response = fallbacks[Math.floor(Math.random() * fallbacks.length)];

        if (entities.location) {
            response += ` ¿Estás interesado específicamente en propiedades en ${entities.location}?`;
        }
        if (entities.propertyType) {
            response += ` ¿Buscas información sobre ${entities.propertyType}?`;
        }

        if (sentiment === 'negative') {
            response = "Lamento no poder ayudarte directamente con eso. " + response;
        }

        return response;
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

        // Filtrar sugerencias para evitar repeticiones
        suggestions = suggestions.filter(suggestion => !this.lastSuggestions.includes(suggestion));
        
        // Actualizar lastSuggestions
        this.lastSuggestions = suggestions.slice(0, 3);

        return this.lastSuggestions;
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
}

class EntityExtractor {
    extract(message) {
        const entities = {};
        
        // Extraer ubicaciones
        const locationRegex = /en\s([\w\s]+)/i;
        const locationMatch = message.match(locationRegex);
        if (locationMatch) {
            entities.location = locationMatch[1];
        }

        // Extraer tipos de propiedad
        const propertyTypes = ['casa', 'apartamento', 'terreno', 'oficina', 'local comercial'];
        propertyTypes.forEach(type => {
            if (message.toLowerCase().includes(type)) {
                entities.propertyType = type;
            }
        });

        return entities;
    }
}

class SentimentAnalyzer {
    analyze(message) {
        const positiveWords = ['excelente', 'genial', 'fantástico', 'increíble', 'maravilloso', 'perfecto', 'me gusta', 'me encanta'];
        const negativeWords = ['malo', 'terrible', 'horrible', 'pésimo', 'no me gusta', 'odio', 'decepcionante'];

        let positiveScore = 0;
        let negativeScore = 0;

        const words = message.toLowerCase().split(' ');

        words.forEach(word => {
            if (positiveWords.includes(word)) positiveScore++;
            if (negativeWords.includes(word)) negativeScore++;
        });

        if (positiveScore > negativeScore) return 'positive';
        if (negativeScore > positiveScore) return 'negative';
        return 'neutral';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
});