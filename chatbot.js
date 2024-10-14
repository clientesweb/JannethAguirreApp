const AIRealEstateExpertChatbot = (function() {
    let isOpen = false;
    let messages = [];
    let context = '';

    const properties = [
        { id: 1, title: "Casa moderna en Cumbayá", price: "$350,000", location: "Cumbayá, Quito", type: "venta", features: ["3 dormitorios", "2.5 baños", "Jardín", "Piscina"] },
        { id: 2, title: "Apartamento céntrico en Guayaquil", price: "$1,500/mes", location: "Centro, Guayaquil", type: "alquiler", features: ["2 dormitorios", "2 baños", "Vista al río", "Gimnasio"] },
        { id: 3, title: "Terreno en Montañita", price: "$120,000", location: "Montañita, Santa Elena", type: "venta", features: ["500m2", "Vista al mar", "Ideal para hotel"] },
        { id: 4, title: "Oficina ejecutiva en Quito", price: "$2,200/mes", location: "La Carolina, Quito", type: "alquiler", features: ["100m2", "5 oficinas", "Sala de juntas", "Estacionamiento"] },
        { id: 5, title: "Casa de campo en Cuenca", price: "$220,000", location: "Yunguilla, Cuenca", type: "venta", features: ["4 dormitorios", "3 baños", "Terreno de 1000m2", "Huerto orgánico"] },
        { id: 6, title: "Condominio de lujo en Manta", price: "$450,000", location: "Barbasquillo, Manta", type: "proyecto", features: ["3 dormitorios", "Vista al mar", "Piscina infinity", "Entrega en 2025"] }
    ];

    const marketTrends = [
        { location: "Quito", trend: "Crecimiento estable", description: "El mercado inmobiliario en Quito muestra un crecimiento estable, con un aumento en la demanda de propiedades en zonas residenciales como Cumbayá y Tumbaco. Los precios han aumentado un 5% en el último año." },
        { location: "Guayaquil", trend: "Auge en desarrollo costero", description: "Guayaquil experimenta un boom en el desarrollo de propiedades frente al mar y en zonas regeneradas del centro de la ciudad. Se espera un crecimiento del 8% en el valor de las propiedades para el próximo año." },
        { location: "Cuenca", trend: "Popular entre expatriados", description: "Cuenca sigue siendo un destino popular para expatriados, impulsando el mercado de alquileres y ventas de propiedades. Los precios se han estabilizado después de un aumento del 10% en los últimos dos años." },
        { location: "Costa", trend: "Inversión en turismo", description: "Las zonas costeras como Manta, Salinas y Montañita ven un aumento en la inversión en propiedades turísticas y segundas residencias. Se proyecta un crecimiento del 12% en el valor de las propiedades costeras en los próximos 3 años." }
    ];

    const legalInfo = [
        { topic: "Compra para extranjeros", description: "Los extranjeros pueden comprar propiedades en Ecuador sin restricciones, excepto en áreas fronterizas y tierras comunales. Se requiere obtener un RUC (Registro Único de Contribuyentes) y una visa de residencia no es obligatoria para la compra." },
        { topic: "Impuestos", description: "La compra de propiedades está sujeta a impuestos de transferencia (1% del valor de la propiedad) y registro (0.5% del valor). Los propietarios deben pagar impuestos anuales sobre la propiedad, que varían según el municipio y el valor catastral." },
        { topic: "Proceso de compra", description: "El proceso incluye la firma de una promesa de compraventa, la obtención de un certificado de gravámenes, y la firma de la escritura pública ante un notario. Es recomendable realizar un estudio de títulos y contar con un abogado especializado." },
        { topic: "Alquileres", description: "Los contratos de alquiler deben ser registrados en el municipio correspondiente. La ley ecuatoriana protege tanto a inquilinos como a propietarios con regulaciones específicas. El plazo mínimo de alquiler es de 2 años para viviendas y 1 año para locales comerciales." }
    ];

    const investmentAdvice = [
        { type: "Corto plazo", advice: "Para inversiones a corto plazo, considere propiedades en zonas turísticas como Montañita o Baños para alquiler vacacional. El retorno de inversión puede ser alto, pero tenga en cuenta la estacionalidad." },
        { type: "Mediano plazo", advice: "Las propiedades en desarrollo en Guayaquil o Manta pueden ofrecer buenas oportunidades de apreciación en 3-5 años. Busque proyectos en zonas con mejoras de infraestructura planificadas." },
        { type: "Largo plazo", advice: "Para inversiones a largo plazo, las propiedades en Quito o Cuenca en zonas residenciales establecidas tienden a mantener su valor y apreciarse de manera constante. Considere también terrenos en áreas de expansión urbana." },
        { type: "Diversificación", advice: "Una estrategia de diversificación podría incluir una mezcla de propiedades residenciales para alquiler en Quito o Guayaquil, junto con inversiones en proyectos turísticos en la costa o en Cuenca." }
    ];

    function toggleChatbot() {
        isOpen = !isOpen;
        render();
    }

    function addMessage(sender, text) {
        messages.push({ id: Date.now(), text, sender });
        render();
    }

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const userInput = input.value.trim();
        if (userInput) {
            addMessage('user', userInput);
            processUserInput(userInput);
            input.value = '';
        }
    }

    function processUserInput(userInput) {
        const input = userInput.toLowerCase();
        let response = '';

        if (input.includes('propiedad') || input.includes('casa') || input.includes('apartamento') || input.includes('oficina') || input.includes('terreno')) {
            context = 'propiedades';
            response = handlePropertyQuery(input);
        } else if (input.includes('tendencia') || input.includes('mercado') || input.includes('precio')) {
            context = 'tendencias';
            response = handleMarketTrendQuery(input);
        } else if (input.includes('legal') || input.includes('ley') || input.includes('impuesto') || input.includes('compra') || input.includes('alquiler')) {
            context = 'legal';
            response = handleLegalQuery(input);
        } else if (input.includes('inversión') || input.includes('retorno') || input.includes('rentabilidad')) {
            context = 'inversión';
            response = handleInvestmentQuery(input);
        } else if (input.includes('contacto') || input.includes('whatsapp') || input.includes('teléfono') || input.includes('email') || input.includes('agente')) {
            context = 'contacto';
            response = handleContactQuery(input);
        } else {
            response = handleGeneralQuery(input);
        }

        setTimeout(() => addMessage('bot', response), 500);
    }

    function handlePropertyQuery(input) {
        const matchingProperties = properties.filter(property => 
            input.includes(property.type) || input.includes(property.location.toLowerCase()) || input.includes(property.title.toLowerCase())
        );

        if (matchingProperties.length > 0) {
            const property = matchingProperties[0];
            return `He encontrado una propiedad que podría interesarte: ${property.title} en ${property.location}. 
                    Precio: ${property.price}
                    Características: ${property.features.join(', ')}
                    
                    ¿Te gustaría saber más sobre esta propiedad o ver otras opciones similares?
                    
                    Sugerencias:
                    [Ver más detalles de esta propiedad]
                    [Mostrar opciones similares]
                    [Programar una visita]
                    [Consultar sobre financiamiento]`;
        } else {
            return `Entiendo que estás buscando una propiedad. Para ayudarte mejor, ¿podrías darme más detalles sobre tus preferencias?
                    
                    Sugerencias:
                    [Buscar casas en venta]
                    [Buscar apartamentos en alquiler]
                    [Ver propiedades en Quito]
                    [Ver propiedades en Guayaquil]
                    [Propiedades de lujo]
                    [Propiedades para inversión]`;
        }
    }

    function handleMarketTrendQuery(input) {
        const trend = marketTrends.find(t => input.includes(t.location.toLowerCase()));
        if (trend) {
            return `Sobre el mercado inmobiliario en ${trend.location}:
                    ${trend.trend} - ${trend.description}
                    
                    Sugerencias: 
                    [Ver oportunidades de inversión en ${trend.location}]
                    [Comparar con otras ciudades]
                    [Proyecciones a futuro del mercado]
                    [Factores que influyen en los precios]`;
        } else {
            return `El mercado inmobiliario en Ecuador muestra diversas tendencias según la región:
                    - Quito: Crecimiento estable en zonas residenciales.
                    - Guayaquil: Auge en desarrollo costero y centro de la ciudad.
                    - Cuenca: Popular entre expatriados.
                    - Costa: Inversión en propiedades turísticas.
                    
                    ¿Sobre qué zona te gustaría saber más?
                    
                    Sugerencias:
                    [Detalles sobre Quito]
                    [Detalles sobre Guayaquil]
                    [Detalles sobre Cuenca]
                    [Tendencias en la costa]
                    [Comparativa de precios por ciudad]`;
        }
    }

    function handleLegalQuery(input) {
        const info = legalInfo.find(i => input.includes(i.topic.toLowerCase()));
        if (info) {
            return `Sobre ${info.topic}:
                    ${info.description}
                    
                    Sugerencias:
                    [Más detalles legales]
                    [Proceso de compra paso a paso]
                    [Consultar con un abogado]
                    [Impuestos en la compra de propiedades]
                    [Regulaciones para alquileres]`;
        } else {
            return `Los aspectos legales son cruciales en las transacciones inmobiliarias en Ecuador. Algunos puntos importantes:
                    - Los extranjeros pueden comprar propiedades con pocas restricciones.
                    - Existen impuestos de transferencia y registro en la compra.
                    - El proceso de compra incluye varios pasos legales.
                    - Hay regulaciones específicas para alquileres.
                    
                    ¿Sobre qué aspecto legal te gustaría más información?
                    
                    Sugerencias:
                    [Compra para extranjeros]
                    [Impuestos en bienes raíces]
                    [Proceso de compra]
                    [Leyes de alquiler]
                    [Permisos y licencias]`;
        }
    }

    function handleInvestmentQuery(input) {
        const advice = investmentAdvice.find(a => input.includes(a.type.toLowerCase()));
        if (advice) {
            return `Consejo de inversión para ${advice.type}:
                    ${advice.advice}
                    
                    Sugerencias:
                    [Más detalles sobre esta estrategia]
                    [Comparar con otras estrategias]
                    [Riesgos y beneficios]
                    [Ejemplos de propiedades para esta estrategia]
                    [Consultar con un asesor de inversiones]`;
        } else {
            return `La inversión en bienes raíces en Ecuador puede ser muy rentable si se hace de manera informada. Algunas estrategias incluyen:
                    - Inversiones a corto plazo en propiedades turísticas.
                    - Inversiones a mediano plazo en zonas en desarrollo.
                    - Inversiones a largo plazo en áreas residenciales establecidas.
                    - Diversificación de la cartera inmobiliaria.
                    
                    ¿Qué tipo de inversión te interesa más?
                    
                    Sugerencias:
                    [Inversión a corto plazo]
                    [Inversión a mediano plazo]
                    [Inversión a largo plazo]
                    [Estrategias de diversificación]
                    [Análisis de rentabilidad]`;
        }
    }

    function handleContactQuery(input) {
        return `Estamos disponibles para atenderte por varios medios:
                - WhatsApp: +593 99 123 4567
                - Teléfono: (+593) 2 234-5678
                - Email: info@jannethaguirre.com
                - Visita nuestra oficina: Av. Amazonas N32-87, Quito, Ecuador
                
                ¿Cómo prefieres que te contactemos?
                
                Sugerencias:
                [Contactar por WhatsApp]
                [Llamar ahora]
                [Enviar un email]
                [Agendar una cita presencial]
                [Solicitar una videollamada]`;
    }

    function handleGeneralQuery(input) {
        if (input.includes('hola') || input.includes('buenos días') || input.includes('buenas tardes')) {
            return `¡Hola! Soy ARIA, tu asistente virtual experta en bienes raíces en Ecuador. Estoy aquí para ayudarte con cualquier consulta sobre propiedades, mercado inmobiliario, inversiones y más. ¿En qué puedo ayudarte hoy?
                    
                    Sugerencias:
                    [Buscar propiedades]
                    [Información del mercado]
                    [Asesoría legal]
                    [Consejos de inversión]
                    [Contactar a un agente]`;
        } else if (input.includes('gracias')) {
            return `¡Es un placer ayudarte! Si tienes más preguntas, no dudes en consultarme. Estoy aquí para asistirte en todo lo relacionado con bienes raíces en Ecuador. ¿Hay algo más en lo que pueda ayudarte?
                    
                    Sugerencias:
                    [Explorar más propiedades]
                    [Consejos de inversión]
                    [Noticias del mercado]
                    [Programar una consulta personalizada]
                    [Finalizar conversación]`;
        } else {
            return `Como experta en bienes raíces en Ecuador, puedo ayudarte con una amplia gama de temas:
                    - Búsqueda y comparación de propiedades
                    - Información detallada sobre el mercado inmobiliario
                    - Asesoramiento sobre inversiones y rentabilidad
                    - Aspectos legales de compra, venta y alquiler
                    - Tendencias y proyecciones del mercado
                    - Contacto con agentes especializados
                    
                    ¿Sobre qué tema te gustaría más información?
                    
                    Sugerencias:
                    [Buscar propiedades]
                    [Tendencias del mercado]
                    [Asesoría legal]
                    [Estrategias de inversión]
                    [Contactar a un agente]`;
        }
    }

    function render() {
        const chatbotContainer = document.getElementById('ai-real-estate-expert-chatbot');
        let html = '';
        if (!isOpen) {
            html = `
                <button onclick="AIRealEstateExpertChatbot.toggleChatbot()" class="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border-2 border-primary" aria-label="Abrir chat">
                    <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre" class="w-12 h-12 object-contain" />
                </button>
            `;
        } else {
            html = `
                <div class="bg-white rounded-lg shadow-lg w-96 h-[36rem] flex flex-col">
                    <div class="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre" class="w-8 h-8 object-contain mr-2" />
                            <h3 class="font-bold text-lg">ARIA - Experta en Bienes Raíces</h3>
                        </div>
                        <button onclick="AIRealEstateExpertChatbot.toggleChatbot()" class="text-white hover:text-gray-200">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="flex-1 overflow-auto p-4 bg-gray-50">
                        ${messages.map(m => `
                            <div class="mb-4 ${m.sender === 'user' ? 'text-right' : 'text-left'}">
                                <span class="inline-block p-3 rounded-lg chat-message ${m.sender === 'user' ? 'user-message' : 'bot-message'}">
                                    ${m.text}
                                </span>
                            </div>
                            ${m.sender === 'bot' ? renderSuggestedQueries(m.text) : ''}
                        `).join('')}
                    </div>
                    <form onsubmit="AIRealEstateExpertChatbot.handleSubmit(event)" class="p-4 border-t bg-white">
                        <div class="flex">
                            <input type="text" placeholder="Escribe tu pregunta..." class="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            `;
        }
        chatbotContainer.innerHTML = html;
    }

    function renderSuggestedQueries(message) {
        const suggestedQueries = message.match(/\[(.*?)\]/g);
        if (suggestedQueries) {
            return `
                <div class="mt-2 flex flex-wrap">
                    ${suggestedQueries.map(query => `
                        <span class="suggested-query" onclick="AIRealEstateExpertChatbot.handleSuggestedQuery('${query.slice(1, -1)}')">${query.slice(1, -1)}</span>
                    `).join('')}
                </div>
            `;
        }
        return '';
    }

    function handleSuggestedQuery(query) {
        addMessage('user', query);
        processUserInput(query);
    }

    // Inicializar el chatbot
    render();

    // Exponer funciones públicas
    return {
        toggleChatbot,
        handleSubmit,
        handleSuggestedQuery
    };
})();