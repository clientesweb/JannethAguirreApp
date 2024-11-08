class Chatbot {
    constructor() {
        // ... (mantén tus inicializaciones existentes)
        this.shortTermMemory = [];
        this.conversationFlow = [];
        this.lastTopic = null;
        this.propertyTypes = ['departamentos', 'locales comerciales', 'casas personalizadas'];
        this.locations = ['Nuevo Samborondón', 'Isla Mocoli', 'Cuenca'];
    }

    // ... (mantén tus métodos existentes)

    async generateResponse(message) {
        message = message.toLowerCase();
        let bestMatch = { score: 0, answer: '', id: '' };

        const context = this.conversationHistory.join(' ').toLowerCase();
        const shortTermContext = this.shortTermMemory.join(' ').toLowerCase();

        for (let category in this.knowledge.categorias) {
            this.knowledge.categorias[category].forEach(item => {
                const questionScores = item.preguntas.map(q => this.calculateSimilarity(message, q.toLowerCase()));
                const questionScore = Math.max(...questionScores);
                const contextScore = this.calculateSimilarity(context, item.respuesta.toLowerCase());
                const shortTermScore = this.calculateSimilarity(shortTermContext, item.respuesta.toLowerCase());
                const score = questionScore * 0.5 + contextScore * 0.3 + shortTermScore * 0.2;

                if (score > bestMatch.score) {
                    bestMatch = { score, answer: item.respuesta, id: item.id };
                }
            });
        }

        if (bestMatch.score > 0.6) {
            await this.simulateTyping(bestMatch.answer);
            return this.personalizeResponse(bestMatch.answer, bestMatch.id);
        } else {
            return this.generatePropertyResponse(message) || this.generateFallbackResponse(message);
        }
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

    personalizeResponse(response, id) {
        const item = this.findItemById(id);
        if (item && item.etiquetas) {
            const personalization = item.etiquetas[Math.floor(Math.random() * item.etiquetas.length)];
            return `Hablando de ${personalization}, ${response}`;
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

        // Añadir sugerencias basadas en el último tema discutido
        if (this.lastTopic) {
            suggestions.push(`¿Quieres saber más sobre ${this.lastTopic}?`);
        }

        return suggestions.slice(0, 3);
    }

    // ... (mantén el resto de tus métodos)
}

// ... (mantén el resto de tu código)