const AIRealEstateExpertChatbot = (function() {
    let isOpen = false;
    let messages = [];
    let context = '';

    const properties = [
        { id: 1, title: "Depart. en venta – Orlando Florida – Condo Hotel", price: "Consultar", type: "venta", location: "Orlando, Florida" },
        { id: 2, title: "Departamento vista al rio – Via Samborondon", price: "Consultar", type: "alquiler", location: "Samborondón" },
        { id: 3, title: "Locales comerciales y oficinas – Via Samborondon", price: "Consultar", type: "venta", location: "Samborondón" },
        { id: 4, title: "Oficina ejecutiva en Quito", price: "$2,200/mes", type: "alquiler", location: "Quito" },
        { id: 5, title: "Casa de campo en Cuenca", price: "$220,000", type: "venta", location: "Cuenca" },
        { id: 6, title: "Condominio de lujo en Manta", price: "$450,000", type: "proyecto", location: "Manta" }
    ];

    const services = [
        { title: "Asesoría Legal", description: "Asistencia legal en todas las transacciones inmobiliarias" },
        { title: "Valuación de Propiedades", description: "Tasaciones precisas y profesionales de bienes raíces" },
        { title: "Gestión de Alquileres", description: "Administramos sus propiedades en alquiler de manera eficiente" }
    ];

    const faqs = [
        { question: "¿Cómo puedo comenzar a buscar una propiedad?", answer: "Puede comenzar explorando nuestro catálogo en línea o contactarnos directamente para una consulta personalizada." },
        { question: "¿Qué documentos necesito para comprar una propiedad?", answer: "Generalmente, necesitará una identificación válida, comprobante de ingresos y, en algunos casos, un historial crediticio." },
        { question: "¿Ofrecen opciones de financiamiento?", answer: "Sí, trabajamos con varios bancos y entidades financieras para ofrecer opciones de financiamiento a nuestros clientes." },
        { question: "¿Cuánto tiempo toma normalmente el proceso de compra?", answer: "El proceso puede variar, pero generalmente toma entre 30 y 90 días desde la oferta inicial hasta el cierre." },
        { question: "¿Qué servicios post-venta ofrecen?", answer: "Ofrecemos asesoría legal, gestión de documentación y apoyo en trámites relacionados con la propiedad después de la compra." }
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

        if (input.includes('propiedad') || input.includes('casa') || input.includes('departamento') || input.includes('oficina') || input.includes('local')) {
            context = 'propiedades';
            response = handlePropertyQuery(input);
        } else if (input.includes('servicio') || input.includes('asesoría') || input.includes('valuación') || input.includes('alquiler')) {
            context = 'servicios';
            response = handleServiceQuery(input);
        } else if (input.includes('financiamiento') || input.includes('crédito') || input.includes('pago')) {
            context = 'financiamiento';
            response = handleFinancingQuery(input);
        } else if (input.includes('compra') || input.includes('venta') || input.includes('proceso')) {
            context = 'proceso';
            response = handleProcessQuery(input);
        } else if (input.includes('ubicación') || input.includes('zona') || input.includes('área')) {
            context = 'ubicación';
            response = handleLocationQuery(input);
        } else {
            response = handleGeneralQuery(input);
        }

        setTimeout(() => addMessage('bot', response), 500);
    }

    function handlePropertyQuery(input) {
        const propertyTypes = ['casa', 'departamento', 'oficina', 'local', 'condominio'];
        const matchingType = propertyTypes.find(type => input.includes(type));
        const matchingProperties = properties.filter(property => 
            (matchingType && property.title.toLowerCase().includes(matchingType)) ||
            input.includes(property.location.toLowerCase())
        );

        if (matchingProperties.length > 0) {
            const property = matchingProperties[0];
            return `He encontrado una propiedad que podría interesarte: ${property.title} en ${property.location}. 
                    Precio: ${property.price}
                    Tipo: ${property.type}
                    
                    ¿Te gustaría más detalles sobre esta propiedad o ver otras opciones similares?`;
        } else {
            return `Entiendo que estás buscando una propiedad. En Janneth Aguirre Bienes Raíces ofrecemos una variedad de opciones, desde departamentos en Orlando hasta condominios de lujo en Manta. ¿Podrías especificar qué tipo de propiedad te interesa o en qué zona estás buscando?`;
        }
    }

    function handleServiceQuery(input) {
        const matchingService = services.find(service => input.includes(service.title.toLowerCase()));
        if (matchingService) {
            return `Sobre nuestro servicio de ${matchingService.title}: ${matchingService.description}. ¿Te gustaría más información sobre este servicio o conocer otros servicios que ofrecemos?`;
        } else {
            return `En Janneth Aguirre Bienes Raíces ofrecemos varios servicios, incluyendo asesoría legal, valuación de propiedades y gestión de alquileres. ¿Sobre cuál de estos servicios te gustaría más información?`;
        }
    }

    function handleFinancingQuery(input) {
        return `En Janneth Aguirre Bienes Raíces trabajamos con varias instituciones financieras para ofrecer opciones de financiamiento a nuestros clientes. Ofrecemos crédito directo en algunos proyectos y podemos ayudarte a gestionar créditos hipotecarios. ¿Te gustaría que te explique más sobre las opciones de financiamiento disponibles o prefieres hablar con uno de nuestros asesores financieros?`;
    }

    function handleProcessQuery(input) {
        if (input.includes('compra')) {
            return `El proceso de compra generalmente incluye los siguientes pasos: búsqueda de la propiedad, negociación, firma de promesa de compraventa, obtención de financiamiento (si es necesario), y cierre de la transacción. Todo el proceso suele tomar entre 30 y 90 días. ¿Sobre qué parte del proceso te gustaría más información?`;
        } else if (input.includes('venta')) {
            return `Para vender tu propiedad, podemos ayudarte con la valoración, marketing, negociación y todos los trámites legales. Nuestro objetivo es conseguir el mejor precio en el menor tiempo posible. ¿Te gustaría programar una valoración de tu propiedad?`;
        } else {
            return `En Janneth Aguirre Bienes Raíces nos encargamos de todo el proceso de compra y venta de propiedades. Desde la búsqueda inicial hasta el cierre de la transacción, estamos aquí para ayudarte. ¿Tienes alguna pregunta específica sobre el proceso?`;
        }
    }

    function handleLocationQuery(input) {
        const locations = ['Orlando', 'Samborondón', 'Quito', 'Cuenca', 'Manta'];
        const matchingLocation = locations.find(location => input.includes(location.toLowerCase()));
        if (matchingLocation) {
            return `Tenemos varias propiedades disponibles en ${matchingLocation}. Esta es una zona muy solicitada debido a su [característica relevante]. ¿Te gustaría ver algunas opciones de propiedades en ${matchingLocation}?`;
        } else {
            return `Janneth Aguirre Bienes Raíces tiene propiedades en varias ubicaciones privilegiadas, incluyendo Orlando (Florida), Samborondón, Quito, Cuenca y Manta. Cada zona tiene sus propias características y ventajas. ¿En qué área específicamente estás interesado?`;
        }
    }

    function handleGeneralQuery(input) {
        if (input.includes('hola') || input.includes('buenos días') || input.includes('buenas tardes')) {
            return `¡Hola! Soy el asistente virtual de Janneth Aguirre Bienes Raíces. Estoy aquí para ayudarte con cualquier consulta sobre propiedades, servicios inmobiliarios, financiamiento y más. ¿En qué puedo ayudarte hoy?`;
        } else if (input.includes('gracias')) {
            return `¡Es un placer ayudarte! Si tienes más preguntas, no dudes en consultarme. Estamos comprometidos a brindarte el mejor servicio en tu búsqueda de propiedades o servicios inmobiliarios. ¿Hay algo más en lo que pueda asistirte?`;
        } else {
            const matchingFaq = faqs.find(faq => input.includes(faq.question.toLowerCase()));
            if (matchingFaq) {
                return matchingFaq.answer;
            } else {
                return `Como experto en bienes raíces, puedo ayudarte con una amplia gama de temas, incluyendo búsqueda de propiedades, asesoría legal, financiamiento, y más. ¿Podrías ser más específico sobre qué tipo de información estás buscando?`;
            }
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
                            <h3 class="font-bold text-lg">Asistente de Janneth Aguirre</h3>
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
                    <div class="text-center text-xs text-gray-500 py-2">
                        Janneth Aguirre Bienes Raíces
                    </div>
                </div>
            `;
        }
        chatbotContainer.innerHTML = html;
    }

    // Inicializar el chatbot
    render();

    // Exponer funciones públicas
    return {
        toggleChatbot,
        handleSubmit
    };
})();