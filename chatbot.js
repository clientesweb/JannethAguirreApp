// chatbot.js

// Cargar el JSON con los datos de la conversación
const data = {
  "saludos": [
    "¡Hola! Soy ARIA, tu asistente inmobiliario. ¿Cómo puedo ayudarte hoy? Si tienes alguna duda sobre propiedades, servicios o el mercado, ¡estoy aquí para ayudarte!",
    "¡Buenos días! Bienvenido, soy ARIA. ¿En qué puedo ayudarte en tu búsqueda de la propiedad perfecta? Estoy aquí para facilitarte todo el proceso.",
    "¡Hola! ¿Cómo estás? Soy ARIA, tu asistente virtual para todo lo relacionado con bienes raíces. ¿Te gustaría explorar nuestras propiedades o tal vez saber más sobre nuestros servicios?"
  ],
  "despedidas": [
    "¡Gracias por tu tiempo! Si necesitas más información, estaré aquí para ayudarte en cualquier momento. ¡Que tengas un excelente día!",
    "¡Fue un placer ayudarte! Recuerda que siempre puedes volver si tienes más preguntas. ¡Hasta pronto!",
    "¡Hasta la próxima! Si tienes alguna otra duda, no dudes en preguntar. ¡Que todo te vaya bien!"
  ],
  "propiedades": {
    "introduccion": "Tenemos una amplia selección de propiedades que se ajustan a todos los gustos y necesidades. Desde modernos departamentos hasta casas de lujo, en ubicaciones exclusivas como Samborondón y Cuenca.",
    "detalle": "Dime, ¿estás buscando una propiedad en una ubicación específica o prefieres que te recomiende las opciones más populares? También puedo ayudarte a encontrar propiedades con características especiales, como jardín, piscina o cercanía a centros comerciales. ¡Cuéntame qué prefieres!"
  },
  "servicios": {
    "introduccion": "Ofrecemos servicios completos que incluyen asesoría legal, gestión de ventas y análisis de mercado. Nuestro enfoque es brindarte un servicio personalizado adaptado a tus necesidades.",
    "detalle": "¿Te gustaría que profundice más en alguno de estos servicios? Podemos hablar sobre cómo podemos ayudarte con la compra o venta, o si necesitas asesoría legal o fiscal, ¡también te puedo ayudar con eso!"
  },
  "contacto": {
    "introduccion": "Estar en contacto con nosotros es muy sencillo. Puedes llamarnos o escribirnos por email, y siempre estamos dispuestos a coordinar reuniones virtuales.",
    "detalle": "Si prefieres un contacto más inmediato, te invito a llamarnos al +593 98 716 7782, o si lo prefieres, puedes escribirnos a info@jannethaguirre.com. ¿Cómo te gustaría ponerte en contacto conmigo?"
  },
  "sobre_nosotros": {
    "introduccion": "Desde 2009, Janneth Aguirre es una figura clave en el sector inmobiliario ecuatoriano. Nuestra misión es brindarte un servicio de alta calidad y personalizado, asegurándonos de que encuentres la propiedad de tus sueños.",
    "detalle": "Nuestro equipo está compuesto por expertos que te acompañarán en cada paso del proceso. ¿Te gustaría conocer más sobre nuestra historia o los servicios específicos que ofrecemos?"
  },
  "invertir": {
    "introduccion": "Si estás interesado en invertir en bienes raíces, tenemos excelentes oportunidades en lugares como Samborondón, EE.UU. y Panamá. Cada lugar tiene ventajas únicas para los inversionistas.",
    "detalle": "Si deseas saber más sobre los beneficios de invertir en cualquiera de estos lugares, o si necesitas ayuda para elegir la mejor opción de inversión, ¡estoy aquí para ayudarte! ¿Te gustaría que hablemos de eso?"
  },
  "proceso_compra": {
    "introduccion": "Comprar una propiedad es un proceso que puede parecer complicado, pero con la orientación adecuada es mucho más fácil. Nuestro equipo te acompañará en todo momento.",
    "detalle": "El proceso incluye la búsqueda de la propiedad, la negociación, la firma del contrato y el financiamiento si lo necesitas. ¿Te gustaría saber más sobre cómo empezar o los documentos necesarios para la compra?"
  },
  "documentos_venta": {
    "introduccion": "Para vender una propiedad, necesitas contar con algunos documentos clave que aseguren que todo el proceso se realiza correctamente.",
    "detalle": "El título de propiedad, certificado de gravámenes y otros documentos son esenciales. Si no estás seguro de los documentos que tienes que preparar, ¡no dudes en preguntarme! Te guiaré en cada paso."
  },
  "tiempo_venta": {
    "introduccion": "El tiempo para vender una propiedad puede variar, pero con la estrategia correcta, podemos ayudarte a vender más rápido.",
    "detalle": "Generalmente, el proceso toma entre 3 a 6 meses, pero depende de la ubicación, el precio y la demanda del mercado. ¿Te gustaría conocer algunas estrategias que pueden acelerar tu venta?"
  },
  "alquileres": {
    "introduccion": "Si estás buscando alquilar una propiedad o poner la tuya en alquiler, podemos ayudarte con todo el proceso, desde la búsqueda hasta la firma del contrato.",
    "detalle": "Nuestro equipo puede ayudarte a encontrar el inquilino ideal, o si prefieres alquilar, podemos ofrecerte propiedades que se ajusten a tus necesidades. ¿Te gustaría más información sobre alquileres?"
  },
  "tendencias_inmobiliarias": {
    "introduccion": "El mercado inmobiliario está en constante cambio, y es importante estar informado sobre las tendencias actuales.",
    "detalle": "Actualmente, la demanda está creciendo en zonas cercanas a áreas comerciales y turísticas. También hay un fuerte interés por propiedades de lujo. ¿Te gustaría saber más sobre estas tendencias y cómo pueden impactar tu decisión de compra o venta?"
  },
  "asesoria_investment": {
    "introduccion": "Contar con asesoría especializada es crucial para tomar decisiones acertadas en el mundo de las inversiones inmobiliarias.",
    "detalle": "Nuestro equipo de expertos te ofrece un análisis personalizado, destacando las mejores oportunidades de inversión y las mejores zonas para maximizar tu rentabilidad. ¿Te gustaría que analicemos una zona específica?"
  },
  "proyectos_en_plano": {
    "introduccion": "Tenemos proyectos en plano que permiten personalizar tu futura propiedad. Estos proyectos ofrecen la posibilidad de elegir acabados y características antes de la construcción.",
    "detalle": "Además, los proyectos en plano tienen precios competitivos y un alto potencial de revalorización. ¿Te gustaría saber más sobre alguna de estas opciones? Puedo darte detalles de los proyectos disponibles."
  },
  "pregunta_inicial": "¡Hola! Soy ARIA, tu asistente virtual en todo lo relacionado con bienes raíces. ¿En qué te puedo ayudar hoy? Si estás buscando propiedades, servicios o consejos, estoy aquí para ti.",
  "respuestas_completas": [
    "Claro, puedo ofrecerte detalles adicionales sobre nuestros servicios o propiedades. ¿Qué te gustaría saber más a fondo?",
    "¿Te gustaría obtener más información sobre cómo funciona el proceso de compra o alquilar una propiedad? Estoy aquí para brindarte toda la ayuda que necesites.",
    "Si tienes dudas sobre los documentos o el tiempo de venta, puedo ofrecerte información detallada y ayudarte a hacer todo más fácil. ¿Te gustaría empezar con eso?"
  ],
  "saludos_nuevos": [
    "¡Hola! ¿Cómo estás? Soy ARIA, tu asistente virtual. Si estás buscando propiedades o servicios, ¡estoy aquí para ayudarte!",
    "¡Bienvenido! Soy ARIA, y estoy lista para asistirte. ¿En qué te gustaría que te ayude hoy? Podemos hablar de propiedades, servicios, o incluso inversiones."
  ],
  "asesoria_extra": [
    "Recuerda que también puedo ofrecerte asesoría personalizada si estás buscando la propiedad ideal o si necesitas un análisis de inversión. ¿Te gustaría que hagamos un análisis juntos?",
    "Si en algún momento necesitas orientación adicional o tienes dudas, siempre puedes contar conmigo para guiarte paso a paso. ¡Pregúntame lo que necesites!"
  ]
};

// Filtrar las respuestas según la categoría seleccionada
function getFilteredResponse(category) {
  const response = data[category];

  if (!response) {
    return `No tengo información sobre ${category} en este momento.`;
  }

  return response.introduccion + " " + response.detalle;
}

// Inicialización del chatbot
document.addEventListener("DOMContentLoaded", function() {
  const chatContainer = document.querySelector("#chat-container");
  const userInput = document.querySelector("#user-input");
  const sendButton = document.querySelector("#send-button");

  // Función para mostrar los mensajes
  function showMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll hacia abajo
  }

  // Responder al usuario
  function handleUserMessage(message) {
    showMessage(message, "user");

    response = getFilteredResponse("proceso_compra");
    } else if (message.toLowerCase().includes("documentos")) {
      response = getFilteredResponse("documentos_venta");
    } else if (message.toLowerCase().includes("tiempo venta")) {
      response = getFilteredResponse("tiempo_venta");
    } else if (message.toLowerCase().includes("alquiler")) {
      response = getFilteredResponse("alquileres");
    } else if (message.toLowerCase().includes("tendencias")) {
      response = getFilteredResponse("tendencias_inmobiliarias");
    } else if (message.toLowerCase().includes("asesoria")) {
      response = getFilteredResponse("asesoria_investment");
    } else if (message.toLowerCase().includes("proyectos")) {
      response = getFilteredResponse("proyectos_en_plano");
    } else {
      response = data.respuestas_completas[Math.floor(Math.random() * data.respuestas_completas.length)];
    }

    setTimeout(() => {
      showMessage(response, "bot");
    }, 1000); // Retraso para simular respuesta del bot
  }

  // Evento para el botón de enviar
  sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      handleUserMessage(userMessage);
      userInput.value = ""; // Limpiar campo de entrada
    }
  });

  // Evento para enviar mensaje presionando la tecla Enter
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && userInput.value.trim() !== "") {
      handleUserMessage(userInput.value.trim());
      userInput.value = ""; // Limpiar campo de entrada
    }
  });

  // Mensaje inicial del bot
  showMessage(data.pregunta_inicial, "bot");
});