class AriaRealEstateBot {
    constructor() {
        this.name = "Aria";
        this.expertise = "Experta en Bienes Raíces";
        this.locations = {
            ecuador: this.initEcuadorData(),
            panama: this.initPanamaData(),
            usa: this.initUSAData(),
            samborondon: this.initSamborondonData()
        };
        this.commonQuestions = this.initCommonQuestions();
    }

    initEcuadorData() {
        return {
            areas: ["Guayaquil", "Quito", "Cuenca", "Samborondón"],
            propertyTypes: ["Casas", "Departamentos", "Terrenos", "Oficinas"],
            priceRanges: {
                economico: "50,000 - 150,000",
                medio: "150,000 - 300,000",
                alto: "300,000+"
            },
            marketInfo: {
                tendencias: "Crecimiento sostenido en zonas residenciales premium",
                rentabilidad: "7-12% anual en zonas prime"
            }
        };
    }

    initPanamaData() {
        return {
            areas: ["Ciudad de Panamá", "Costa del Este", "Punta Pacífica"],
            propertyTypes: ["Apartamentos de Lujo", "Casas", "Condominios"],
            priceRanges: {
                medio: "200,000 - 500,000",
                alto: "500,000 - 1,000,000",
                lujo: "1,000,000+"
            }
        };
    }

    initUSAData() {
        return {
            areas: ["Miami", "New York", "Los Angeles", "Houston"],
            propertyTypes: ["Houses", "Condos", "Apartments", "Land"],
            priceRanges: {
                medio: "300,000 - 800,000",
                alto: "800,000 - 2,000,000",
                lujo: "2,000,000+"
            }
        };
    }

    initSamborondonData() {
        return {
            urbanizaciones: [
                "La Laguna", 
                "Ciudad Celeste",
                "Lagos del Batán",
                "La Isla"
            ],
            amenities: [
                "Seguridad 24/7",
                "Areas sociales",
                "Canchas deportivas",
                "Club house"
            ],
            propertyTypes: {
                casas: "350,000 - 2,000,000",
                terrenos: "200,000 - 800,000",
                departamentos: "180,000 - 500,000"
            }
        };
    }

    initCommonQuestions() {
        return {
            "requisitos_compra": {
                pregunta: "¿Cuáles son los requisitos para comprar una propiedad?",
                respuesta: "Los requisitos principales son:\n" +
                    "1. Identificación válida\n" +
                    "2. Comprobantes de ingresos\n" +
                    "3. Referencias bancarias\n" +
                    "4. Entrada del 20-30% del valor\n" +
                    "5. Capacidad de endeudamiento demostrable"
            },
            "proceso_compra": {
                pregunta: "¿Cómo es el proceso de compra?",
                respuesta: "El proceso incluye:\n" +
                    "1. Selección de la propiedad\n" +
                    "2. Negociación del precio\n" +
                    "3. Promesa de compra-venta\n" +
                    "4. Gestión de financiamiento\n" +
                    "5. Escrituración\n" +
                    "6. Entrega de la propiedad"
            },
            "financiamiento": {
                pregunta: "¿Qué opciones de financiamiento hay disponibles?",
                respuesta: "Ofrecemos múltiples opciones:\n" +
                    "- Crédito hipotecario bancario\n" +
                    "- Financiamiento directo del constructor\n" +
                    "- Planes de pago flexibles\n" +
                    "- Crédito BIESS (Ecuador)\n" +
                    "Podemos asesorarte según tu caso específico."
            }
        };
    }

    processQuery(userInput) {
        const input = userInput.toLowerCase();
        
        // Verificar si es una pregunta común
        for (let key in this.commonQuestions) {
            if (input.includes(this.commonQuestions[key].pregunta.toLowerCase())) {
                return this.commonQuestions[key].respuesta;
            }
        }

        // Procesar consultas específicas por ubicación
        if (input.includes("samborondon") || input.includes("samborondón")) {
            return this.getSamborondonInfo(input);
        } else if (input.includes("ecuador")) {
            return this.getEcuadorInfo(input);
        } else if (input.includes("panama") || input.includes("panamá")) {
            return this.getPanamaInfo(input);
        } else if (input.includes("estados unidos") || input.includes("usa")) {
            return this.getUSAInfo(input);
        }

        // Respuesta por defecto
        return this.getDefaultResponse();
    }

    getSamborondonInfo(input) {
        if (input.includes("urbanización") || input.includes("urbanizacion")) {
            return `En Samborondón contamos con exclusivas urbanizaciones como: ${this.locations.samborondon.urbanizaciones.join(", ")}. Cada una cuenta con características únicas y amenities de primer nivel.`;
        }
        if (input.includes("precio")) {
            return `Los precios en Samborondón varían según el tipo de propiedad:\n` +
                   `- Casas: ${this.locations.samborondon.propertyTypes.casas}\n` +
                   `- Terrenos: ${this.locations.samborondon.propertyTypes.terrenos}\n` +
                   `- Departamentos: ${this.locations.samborondon.propertyTypes.departamentos}`;
        }
        return `Samborondón es una de las zonas más exclusivas y seguras, con múltiples urbanizaciones privadas, excelentes amenities y alta plusvalía. ¿Te gustaría conocer más sobre alguna urbanización en particular?`;
    }

    getEcuadorInfo(input) {
        if (input.includes("precio")) {
            return `En Ecuador manejamos diferentes rangos de precios:\n` +
                   `- Económico: ${this.locations.ecuador.priceRanges.economico}\n` +
                   `- Medio: ${this.locations.ecuador.priceRanges.medio}\n` +
                   `- Alto: ${this.locations.ecuador.priceRanges.alto}`;
        }
        return `En Ecuador tenemos propiedades en las principales ciudades: ${this.locations.ecuador.areas.join(", ")}. ¿En qué ciudad estás interesado?`;
    }

    getPanamaInfo(input) {
        if (input.includes("zona")) {
            return `En Panamá nos especializamos en las siguientes zonas: ${this.locations.panama.areas.join(", ")}. Cada zona tiene sus características únicas y ventajas específicas.`;
        }
        return `Panamá ofrece excelentes oportunidades de inversión con propiedades desde ${this.locations.panama.priceRanges.medio}. ¿Te gustaría conocer más sobre alguna zona en particular?`;
    }

    getUSAInfo(input) {
        if (input.includes("inversión") || input.includes("inversion")) {
            return `Estados Unidos ofrece excelentes oportunidades de inversión en ciudades como ${this.locations.usa.areas.join(", ")}. Los precios varían según la ubicación y tipo de propiedad.`;
        }
        return `En Estados Unidos manejamos propiedades en las principales ciudades, con precios desde ${this.locations.usa.priceRanges.medio}. ¿En qué ciudad estás interesado?`;
    }

    getDefaultResponse() {
        return `¡Hola! Soy ${this.name}, ${this.expertise}. Puedo ayudarte con información sobre propiedades en Ecuador, Panamá, Estados Unidos y especialmente en Samborondón. ¿En qué puedo ayudarte?`;
    }

    getGreeting() {
        const hora = new Date().getHours();
        let saludo = "";
        
        if (hora >= 5 && hora < 12) {
            saludo = "¡Buenos días!";
        } else if (hora >= 12 && hora < 18) {
            saludo = "¡Buenas tardes!";
        } else {
            saludo = "¡Buenas noches!";
        }
        
        return `${saludo} Soy ${this.name}, ${this.expertise} de Janneth Aguirre Bienes Raíces. ¿En qué puedo ayudarte hoy?`;
    }
}

// Ejemplo de uso
const ariaBot = new AriaRealEstateBot();

// Función para manejar la interacción del usuario
function handleUserInput(userMessage) {
    return ariaBot.processQuery(userMessage);
}

// Ejemplo de implementación en una interfaz web
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar saludo inicial
    console.log(ariaBot.getGreeting());
    
    // Aquí irían los event listeners para el input del usuario
    // y la lógica para mostrar las respuestas en la interfaz
});