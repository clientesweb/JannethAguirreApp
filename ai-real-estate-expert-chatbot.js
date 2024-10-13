// Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
const properties = [
    {
        id: 1,
        title: "Penthouse de lujo en Cumbayá",
        price: "$1,200,000",
        type: "venta",
        location: "Cumbayá",
        country: "Ecuador",
        description: "Espectacular penthouse de 400m2 con vistas panorámicas a los valles, acabados de lujo y terraza privada con jacuzzi.",
        features: ["4 habitaciones", "4.5 baños", "3 estacionamientos", "Área de servicio", "Gimnasio", "Piscina"],
        images: ["/img/penthouse-cumbaya-1.jpg", "/img/penthouse-cumbaya-2.jpg", "/img/penthouse-cumbaya-3.jpg"]
    },
    {
        id: 2,
        title: "Villa frente al mar en Cancún",
        price: "$3,500,000",
        type: "venta",
        location: "Zona Hotelera, Cancún",
        country: "México",
        description: "Lujosa villa de 600m2 con acceso directo a la playa, diseño contemporáneo y vistas impresionantes al Mar Caribe.",
        features: ["5 habitaciones", "6 baños", "Infinity pool", "Cine en casa", "Muelle privado", "Helipuerto"],
        images: ["/img/villa-cancun-1.jpg", "/img/villa-cancun-2.jpg", "/img/villa-cancun-3.jpg"]
    },
    {
        id: 3,
        title: "Apartamento de lujo en Miami",
        price: "$4,200,000",
        type: "venta",
        location: "Brickell, Miami",
        country: "Estados Unidos",
        description: "Exclusivo apartamento de 300m2 en el corazón de Brickell, con acabados de diseñador y vistas panorámicas al océano y la ciudad.",
        features: ["3 habitaciones", "3.5 baños", "Balcón amplio", "Cocina gourmet", "Acceso a spa y gimnasio", "Servicio de concierge 24/7"],
        images: ["/img/apartment-miami-1.jpg", "/img/apartment-miami-2.jpg", "/img/apartment-miami-3.jpg"]
    },
    {
        id: 4,
        title: "Oficina premium en Ciudad de Panamá",
        price: "$8,000/mes",
        type: "alquiler",
        location: "Costa del Este, Ciudad de Panamá",
        country: "Panamá",
        description: "Moderna oficina de 250m2 en el exclusivo distrito de negocios de Costa del Este, con vistas al skyline de la ciudad.",
        features: ["Planta abierta", "4 salas de conferencias", "Cocina equipada", "Estacionamiento privado", "Seguridad 24/7", "Acceso a terraza común"],
        images: ["/img/office-panama-1.jpg", "/img/office-panama-2.jpg", "/img/office-panama-3.jpg"]
    },
];

const marketTrends = [
    {
        country: "Ecuador",
        trend: "Crecimiento estable",
        description: "El mercado inmobiliario en Ecuador muestra un crecimiento estable, con un aumento en la demanda de propiedades de lujo en zonas como Cumbayá y Samborondón. Los inversores extranjeros están mostrando un interés creciente en propiedades costeras."
    },
    {
        country: "México",
        trend: "Auge en destinos turísticos",
        description: "México experimenta un boom en el mercado de segundas residencias y propiedades vacacionales, especialmente en destinos como Cancún, Tulum y Los Cabos. La inversión extranjera en el sector inmobiliario sigue en aumento."
    },
    {
        country: "Estados Unidos",
        trend: "Recuperación post-pandemia",
        description: "El mercado inmobiliario en Estados Unidos muestra una fuerte recuperación post-pandemia, con un aumento en los precios de las viviendas en áreas metropolitanas clave. Ciudades como Miami, Austin y Nashville están experimentando un crecimiento significativo."
    },
    {
        country: "Panamá",
        trend: "Oportunidades en el mercado de oficinas",
        description: "Panamá presenta oportunidades interesantes en el mercado de oficinas, con una creciente demanda de espacios flexibles y modernos. El sector residencial de lujo en áreas como Costa del Este y Punta Pacífica sigue atrayendo a inversores internacionales."
    },
];

const legalInfo = [
    {
        country: "Ecuador",
        title: "Proceso de compra para extranjeros",
        description: "Los extranjeros pueden comprar propiedades en Ecuador sin restricciones, excepto en áreas fronterizas. Se requiere obtener un RUC (Registro Único de Contribuyentes) y es recomendable contar con un abogado local para el proceso de escrituración."
    },
    {
        country: "México",
        title: "Fideicomiso para propiedades costeras",
        description: "Los extranjeros pueden adquirir propiedades en México, incluso en zonas restringidas (como áreas costeras), mediante un fideicomiso bancario. Este fideicomiso tiene una duración de 50 años y es renovable."
    },
    {
        country: "Estados Unidos",
        title: "Consideraciones fiscales para inversores extranjeros",
        description: "Los inversores extranjeros en bienes raíces en EE.UU. deben considerar las implicaciones del FIRPTA (Foreign Investment in Real Property Tax Act) y pueden estar sujetos a una retención del 15% sobre el precio de venta al momento de la disposición de la propiedad."
    },
    {
        country: "Panamá",
        title: "Incentivos para inversores",
        description: "Panamá ofrece varios incentivos para inversores inmobiliarios, incluyendo exenciones de impuestos sobre la propiedad por un período determinado para nuevas construcciones y un proceso simplificado de residencia para inversores que adquieran propiedades por un valor superior a $300,000."
    },
];

const contactInfo = {
    whatsapp: "+1234567890",
    phone1: "+1 (555) 123-4567",
    phone2: "+1 (555) 987-6543",
    email: "info@jannethaguirre.com"
};

function AIRealEstateExpertChatbot() {
    let isOpen = false;
    let messages = [];
    let context = '';

    const chatbotContainer = document.getElementById('ai-real-estate-expert-chatbot');

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

        // Actualizar el contexto basado en la entrada del usuario
        if (input.includes('propiedad') || input.includes('casa') || input.includes('apartamento') || input.includes('oficina')) {
            context = 'propiedades';
        } else if (input.includes('tendencia') || input.includes('mercado') || input.includes('inversión')) {
            context = 'tendencias';
        } else if (input.includes('legal') || input.includes('ley') || input.includes('impuesto')) {
            context = 'legal';
        } else if (input.includes('contacto') || input.includes('whatsapp') || input.includes('teléfono') || input.includes('email')) {
            context = 'contacto';
        }

        // Generar respuesta basada en el contexto y la entrada del usuario
        switch (context) {
            case 'propiedades':
                response = handlePropertyQuery(input);
                break;
            case 'tendencias':
                response = handleMarketTrendQuery(input);
                break;
            case 'legal':
                response = handleLegalQuery(input);
                break;
            case 'contacto':
                response = handleContactQuery(input);
                break;
            default:
                response = handleGeneralQuery(input);
        }

        setTimeout(() => addMessage('bot', response), 500);
    }

    function handlePropertyQuery(input) {
        const matchingProperties = properties.filter(property => 
            input.includes(property.type) || input.includes(property.location.toLowerCase()) || input.includes(property.country.toLowerCase())
        );

        if (matchingProperties.length > 0) {
            const property = matchingProperties[0];
            return `He encontrado una propiedad que podría interesarte: ${property.title} en ${property.location}, ${property.country}. 
                    Precio: ${property.price}. 
                    Descripción: ${property.description}
                    Características destacadas: ${property.features.join(', ')}. 
                    ¿Te gustaría ver imágenes de esta propiedad o conocer más detalles? También puedo mostrarte otras opciones similares o darte información sobre el mercado inmobiliario en ${property.country}.`;
        } else {
            return `Entiendo que estás buscando una propiedad. Para ayudarte mejor, ¿podrías especificar:
                    1. ¿En qué país te interesa (Ecuador, México, Estados Unidos o Panamá)?
                    2. ¿Buscas para comprar o alquilar?
                    3. ¿Tienes preferencia por algún tipo de propiedad (casa, apartamento, oficina)?
                    4. ¿Tienes un presupuesto aproximado en mente?
                    Con esta información, podré mostrarte las mejores opciones que se ajusten a tus necesidades.`;
        }
    }

    function handleMarketTrendQuery(input) {
        const country = marketTrends.find(trend => input.includes(trend.country.toLowerCase()))?.country || '';
        
        if (country) {
            const trend = marketTrends.find(t => t.country === country);
            return `Respecto al mercado inmobiliario en ${country}:
                    Tendencia actual: ${trend.trend}
                    ${trend.description}
                    ¿Te gustaría saber más sobre oportunidades de inversión específicas en ${country} o comparar con las tendencias en otros países?`;
        } else {
            return `El mercado inmobiliario en los países donde operamos muestra tendencias interesantes:
                    - Ecuador: Crecimiento estable, especialmente en propiedades de lujo.
                    - México: Auge en destinos turísticos y segundas residencias.
                    - Estados Unidos: Fuerte recuperación post-pandemia en áreas metropolitanas.
                    - Panamá: Oportunidades en el mercado de oficinas y residencial de lujo.
                    ¿Sobre qué país te gustaría obtener información más detallada?`;
        }
    }

    function handleLegalQuery(input) {
        const country = legalInfo.find(info => input.includes(info.country.toLowerCase()))?.country || '';
        
        if (country) {
            const info = legalInfo.find(i => i.country === country);
            return `Información legal importante para ${country}:
                    ${info.title}
                    ${info.description}
                    ¿Necesitas más detalles sobre algún aspecto específico del proceso legal o fiscal en ${country}?`;
        } else {
            return `Los aspectos legales son cruciales en las transacciones inmobiliarias internacionales. Algunos puntos importantes:
                    - Ecuador: Proceso simplificado para extranjeros, excepto en áreas fronterizas.
                    - México: Sistema de fideicomiso para propiedades en zonas restringidas.
                    - Estados Unidos: Consideraciones fiscales especiales para inversores extranjeros (FIRPTA).
                    - Panamá: Atractivos incentivos para inversores inmobiliarios.
                    ¿Sobre qué país te gustaría conocer más detalles legales?`;
        }
    }

    function handleContactQuery(input) {
        if (input.includes('whatsapp')) {
            return `Puedes contactarnos por WhatsApp al número ${contactInfo.whatsapp}. Estaremos encantados de atenderte y responder a todas tus preguntas. ¿Te gustaría que te proporcione el enlace directo para iniciar una conversación?`;
        } else if (input.includes('teléfono') || input.includes('llamar')) {
            return `Tenemos dos números de teléfono disponibles para ti:
                    1. ${contactInfo.phone1}
                    2. ${contactInfo.phone2}
                    Puedes llamarnos en horario de oficina y uno de nuestros expertos en bienes raíces te atenderá personalmente. ¿Prefieres que te contactemos nosotros? Puedo programar una llamada para ti.`;
        } else if (input.includes('email') || input.includes('correo')) {
            return `Nuestro email de contacto es ${contactInfo.email}. Puedes escribirnos en cualquier momento y te responderemos en un plazo máximo de 24 horas. ¿Quieres que te ayude a redactar un email con tu consulta?`;
        } else {
            return `Estamos disponibles para atenderte por varios medios:
                    - WhatsApp: ${contactInfo.whatsapp}
                    - Teléfonos: ${contactInfo.phone1} o ${contactInfo.phone2}
                    - Email: ${contactInfo.email}
                    ¿Qué método de contacto prefieres? Puedo darte más detalles o ayudarte a iniciar el contacto de inmediato.`;
        }
    }

    function handleGeneralQuery(input) {
        if (input.includes('hola') || input.includes('buenos días') || input.includes('buenas tardes')) {
            return '¡Hola! Es un placer saludarte. Como experta en bienes raíces internacionales, estoy aquí para ayudarte con cualquier consulta sobre propiedades, inversiones, tendencias del mercado o aspectos legales en Ecuador, México, Estados Unidos y Panamá. ¿En qué área específica te puedo asistir hoy?';
        } else if (input.includes('gracias')) {
            return '¡Es un  placer ayudarte! Tu satisfacción es nuestra prioridad. Si en el futuro tienes más preguntas sobre propiedades, inversiones o cualquier aspecto del mercado inmobiliario en nuestros países de operación, no dudes en consultarme. Estoy aquí para proporcionarte la información más actualizada y relevante. ¿Hay algo más en lo que pueda asistirte hoy?';
        } else if (input.includes('inversión') || input.includes('invertir')) {
            return 'La inversión inmobiliaria internacional ofrece excelentes oportunidades. Cada uno de nuestros mercados (Ecuador, México, Estados Unidos y Panamá) tiene sus propias ventajas y consideraciones. ¿Te interesa algún país en particular? Puedo proporcionarte información sobre las tendencias actuales, rendimientos esperados y los mejores tipos de propiedades para invertir en cada mercado.';
        } else if (input.includes('precio') || input.includes('costo')) {
            return 'Los precios de las propiedades varían significativamente dependiendo del país, la ubicación y el tipo de inmueble. Por ejemplo, en Ecuador puedes encontrar lujosos apartamentos en Cumbayá desde $250,000, mientras que en Miami, una propiedad similar podría costar más de $1,000,000. ¿Tienes un presupuesto específico en mente? Puedo ayudarte a encontrar las mejores opciones que se ajusten a tu inversión.';
        } else if (input.includes('seguro') || input.includes('seguridad')) {
            return 'La seguridad es una prioridad en todas nuestras propiedades y transacciones. Trabajamos con los mejores desarrolladores y nos aseguramos de que todas las propiedades cumplan con los estándares de seguridad locales e internacionales. Además, nuestro equipo legal se encarga de que todas las transacciones sean seguras y transparentes. ¿Tienes alguna preocupación específica sobre seguridad que te gustaría discutir?';
        } else {
            return `Gracias por tu pregunta. Como experta en bienes raíces internacionales, puedo ayudarte con una amplia gama de temas, incluyendo:
                    - Búsqueda de propiedades en Ecuador, México, Estados Unidos y Panamá
                    - Análisis de tendencias del mercado inmobiliario
                    - Asesoramiento sobre inversiones internacionales
                    - Información legal y fiscal para compradores extranjeros
                    - Proceso de compra y venta de propiedades
                    - Gestión de propiedades y alquileres
                    ¿En cuál de estas áreas te gustaría profundizar? O si tienes una consulta específica, no dudes en preguntarme.`;
        }
    }

    function render() {
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
                                <span class="inline-block p-3 rounded-lg ${m.sender === 'user' ? 'bg-primary text-white' : 'bg-white shadow'}">
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
}

// Inicializar el chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.AIRealEstateExpertChatbot = AIRealEstateExpertChatbot();
});