class Chatbot {
    constructor() {
        this.knowledge = require('./data.json');
        this.conversationHistory = [];
        this.shortTermMemory = [];
        this.conversationFlow = [];
        this.lastTopic = null;
        this.userIntentions = new Set();
        this.propertyTypes = ['departamentos', 'locales comerciales', 'casas personalizadas'];
        this.locations = ['Nuevo Samborondón', 'Isla Mocoli', 'Cuenca'];
        this.greetings = ['Hola', 'Buenos días', 'Buenas tardes', 'Buenas noches'];
        this.farewells = ['Adiós', 'Hasta luego', 'Gracias por tu visita', 'Que tengas un buen día'];
    }

    async processMessage(message) {
        this.updateConversationHistory(message);
        this.detectUserIntentions(message);
        const response = await this.generateResponse(message);
        this.updateShortTermMemory(message, response);
        this.updateConversationFlow(response);
        this.suggestFollowUp(response);
        return response;
    }

    updateConversationHistory(message) {
        this.conversationHistory.push(message);
        if (this.conversationHistory.length > 10) {
            this.conversationHistory.shift();
        }
    }

    updateShortTermMemory(message, response) {
        this.shortTermMemory.push({ message, response });
        if (this.shortTermMemory.length > 5) {
            this.shortTermMemory.shift();
        }
    }

    updateConversationFlow(response) {
        const topic = this.extractTopic(response);
        this.conversationFlow.push(topic);
        this.lastTopic = topic;
    }

    extractTopic(text) {
        const topics = ['propiedades', 'inversión', 'financiamiento', 'servicios', 'contacto'];
        return topics.find(topic => text.toLowerCase().includes(topic)) || 'general';
    }

    async generateResponse(message) {
        message = message.toLowerCase();
        
        if (this.isGreeting(message)) {
            return this.generateGreeting();
        }

        if (this.isFarewell(message)) {
            return this.generateFarewell();
        }

        let bestMatch = this.findBestMatch(message);

        if (bestMatch.score > 0.6) {
            await this.simulateTyping(bestMatch.answer);
            return this.personalizeResponse(bestMatch.answer, bestMatch.id);
        } else {
            const propertyResponse = this.generatePropertyResponse(message);
            if (propertyResponse) {
                return propertyResponse;
            } else {
                return this.generateContextualResponse(message) || this.generateFallbackResponse(message);
            }
        }
    }

    findBestMatch(message) {
        let bestMatch = { score: 0, answer: '', id: '' };
        const context = this.conversationHistory.join(' ').toLowerCase();
        const shortTermContext = this.shortTermMemory.map(item => item.message + ' ' + item.response).join(' ').toLowerCase();

        for (let category in this.knowledge.categorias) {
            this.knowledge.categorias[category].forEach(item => {
                const questionScores = item.preguntas.map(q => this.calculateSimilarity(message, q.toLowerCase()));
                const questionScore = Math.max(...questionScores);
                const contextScore = this.calculateSimilarity(context, item.respuesta.toLowerCase());
                const shortTermScore = this.calculateSimilarity(shortTermContext, item.respuesta.toLowerCase());
                const intentionScore = this.calculateIntentionScore(item.etiquetas);
                const score = questionScore * 0.4 + contextScore * 0.2 + shortTermScore * 0.2 + intentionScore * 0.2;

                if (score > bestMatch.score) {
                    bestMatch = { score, answer: item.respuesta, id: item.id };
                }
            });
        }

        return bestMatch;
    }

    calculateSimilarity(str1, str2) {
        const set1 = new Set(str1.split(' '));
        const set2 = new Set(str2.split(' '));
        const intersection = new Set([...set1].filter(x => set2.has(x)));
        return intersection.size / Math.max(set1.size, set2.size);
    }

    calculateIntentionScore(tags) {
        const matchingIntentions = tags.filter(tag => this.userIntentions.has(tag));
        return matchingIntentions.length / tags.length;
    }

    generatePropertyResponse(message) {
        const propertyType = this.propertyTypes.find(type => message.includes(type));
        const location = this.locations.find(loc => message.includes(loc.toLowerCase()));

        if (propertyType && location) {
            const propertyInfo = this.getPropertyInfo(propertyType, location);
            if (propertyInfo) {
                return `Respecto a ${propertyType} en ${location}: ${propertyInfo}`;
            }
        }

        return null;
    }

    getPropertyInfo(propertyType, location) {
        const propertyMap = {
            'departamentos': {
                'Nuevo Samborondón': "Ofrecemos departamentos con 2 habitaciones, 2 baños modernos, cocina abierta, sala y comedor acogedores. Incluyen áreas sociales como piscina, gimnasio y salón de eventos, además de seguridad 24/7.",
                'Isla Mocoli': "Disponemos de departamentos exclusivos de 3 habitaciones con vistas impresionantes, 3.5 baños completos, área de lavado y secado. Cuentan con seguridad 24/7, gimnasio, piscina y estacionamiento privado.",
                'Cuenca': "Tenemos departamentos ideales para Airbnb, con 2 y 3 habitaciones, 2 y 3 baños completos, salón-comedor con cocina integrada y vistas a la ciudad. Incluyen áreas sociales y seguridad 24/7."
            },
            'locales comerciales': {
                'Nuevo Samborondón': "Ofrecemos locales comerciales de diferentes tamaños y diseños, con ventanas y fachadas amplias para maximizar la visibilidad. Cuentan con fácil acceso e instalaciones modernas."
            },
            'casas personalizadas': {
                'general': "Nuestras casas personalizadas se adaptan a sus necesidades. Ofrecemos diseño personalizado, materiales de alta calidad, construcción eficiente y atención al detalle para crear la casa de sus sueños."
            }
        };

        return propertyMap[propertyType][location] || propertyMap[propertyType]['general'];
    }

    generateContextualResponse(message) {
        const recentTopics = this.conversationFlow.slice(-3);
        const contextualResponses = {
            'propiedades': "Hablando de propiedades, ¿hay alguna zona en particular que te interese? Tenemos excelentes opciones en Nuevo Samborondón, Isla Mocoli y Cuenca.",
            'inversión': "En cuanto a inversiones, ¿has considerado el potencial de retorno de inversión en nuestras propiedades? Podemos discutir algunas opciones que se ajusten a tus objetivos financieros.",
            'financiamiento': "Respecto al financiamiento, trabajamos con varias instituciones financieras que ofrecen tasas competitivas. ¿Te gustaría que te proporcione más información sobre las opciones disponibles?",
            'servicios': "Nuestros servicios van más allá de la simple compra y venta. Ofrecemos asesoría completa en todo el proceso. ¿Hay algún servicio en particular sobre el que quieras saber más?",
            'contacto': "Si necesitas más información o quieres programar una visita, no dudes en contactarnos al +593 98 716 7782 o por correo a info@jannethaguirre.com. ¿Prefieres que te contactemos nosotros?"
        };

        for (let topic of recentTopics) {
            if (contextualResponses[topic]) {
                return contextualResponses[topic];
            }
        }

        return null;
    }

    personalizeResponse(response, id) {
        const item = this.findItemById(id);
        if (item && item.etiquetas) {
            const personalization = item.etiquetas[Math.floor(Math.random() * item.etiquetas.length)];
            return `En relación a ${personalization}, ${response}`;
        }
        return response;
    }

    findItemById(id) {
        for (let category in this.knowledge.categorias) {
            const item = this.knowledge.categorias[category].find(item => item.id === id);
            if (item) return item;
        }
        return null;
    }

    suggestFollowUp(lastResponse) {
        const item = this.findItemByResponse(lastResponse);
        if (item && item.seguimiento) {
            const followUpTopic = item.seguimiento[Math.floor(Math.random() * item.seguimiento.length)];
            const suggestions = this.generateSuggestions(followUpTopic);
            this.showSuggestions(suggestions);
        } else {
            const suggestions = this.generateSuggestions(lastResponse);
            this.showSuggestions(suggestions);
        }
    }

    findItemByResponse(response) {
        for (let category in this.knowledge.categorias) {
            const item = this.knowledge.categorias[category].find(item => item.respuesta === response);
            if (item) return item;
        }
        return null;
    }

    detectUserIntentions(message) {
        for (let intent in this.knowledge.intenciones) {
            if (this.knowledge.intenciones[intent].some(keyword => message.toLowerCase().includes(keyword))) {
                this.userIntentions.add(intent);
            }
        }
    }

    generateSuggestions(input) {
        const keywords = ['propiedades', 'servicios', 'inversión', 'contacto', 'internacional', 'financiamiento', 'valoración', 'compra', 'venta'];
        const relevantKeywords = keywords.filter(keyword => input.toLowerCase().includes(keyword));

        let suggestions = [];
        if (relevantKeywords.length > 0) {
            relevantKeywords.forEach(keyword => {
                if (this.knowledge.categorias[keyword]) {
                    suggestions = suggestions.concat(this.knowledge.categorias[keyword].map(item => item.preguntas[0]));
                }
            });
        } else {
            suggestions = [
                "¿Qué tipos de propiedades ofrecen en Nuevo Samborondón?",
                "¿Cómo puedo invertir en bienes raíces en Ecuador?",
                "¿Qué servicios brindan para la compra de departamentos?",
                "¿Tienen opciones de financiamiento para casas personalizadas?"
            ];
        }

        if (this.lastTopic) {
            suggestions.push(`¿Quieres saber más sobre ${this.lastTopic}?`);
        }

        return suggestions.slice(0, 3);
    }

    showSuggestions(suggestions) {
        console.log("Sugerencias:");
        suggestions.forEach((suggestion, index) => {
            console.log(`${index + 1}. ${suggestion}`);
        });
    }

    generateFallbackResponse(message) {
        const fallbacks = [
            "Interesante pregunta. Aunque no tengo una respuesta directa, puedo proporcionarte información sobre nuestras propiedades o servicios. ¿Hay algo en particular que te gustaría saber?",
            "No tengo información específica sobre eso, pero estaré encantado de ayudarte con preguntas sobre nuestras propiedades, servicios inmobiliarios o el proceso de compra/venta. ¿En qué área te puedo asistir?",
            "Esa es una consulta intrigante. Si bien no puedo responderla directamente, ¿te gustaría que te conecte con uno de nuestros agentes para una consulta más detallada? Puedes contactarnos al +593 98 716 7782.",
            "Gracias por tu pregunta. Aunque no tengo una respuesta específica, estoy especializado en temas inmobiliarios. ¿Puedo ayudarte con alguna consulta sobre nuestras propiedades o servicios?"
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    isGreeting(message) {
        return this.greetings.some(greeting => message.toLowerCase().includes(greeting.toLowerCase()));
    }

    isFarewell(message) {
        return this.farewells.some(farewell => message.toLowerCase().includes(farewell.toLowerCase()));
    }

    generateGreeting() {
        const greetings = [
            "¡Hola! Bienvenido a Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy?",
            "¡Saludos! Soy el asistente virtual de Janneth Aguirre. ¿Qué información sobre bienes raíces necesitas?",
            "¡Bienvenido! Estoy aquí para ayudarte con cualquier consulta sobre propiedades en Ecuador. ¿Qué te gustaría saber?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    generateFarewell() {
        const farewells = [
            "¡Gracias por tu visita! Si necesitas más información, no dudes en contactarnos al +593 98 716 7782. ¡Que tengas un excelente día!",
            "Ha sido un placer ayudarte. Recuerda que puedes encontrar más información en nuestra web https://www.jannethaguirrebienesraices.com/. ¡Hasta pronto!",
            "Espero haber sido de ayuda. Si tienes más preguntas, no dudes en volver a contactarnos. ¡Que tengas un buen día!"
        ];
        return farewells[Math.floor(Math.random() * farewells.length)];
    }

    async simulateTyping(text) {
        const typingSpeed = 50; // milliseconds per character
        const delay = text.length * typingSpeed;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

module.exports = Chatbot;