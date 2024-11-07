// Importar la clase AriaRealEstateBot (asumiendo que está en un archivo separado)
const AriaRealEstateBot = require('./AriaRealEstateBot');

// Crear una instancia del chatbot
const ariaBot = new AriaRealEstateBot();

// Función para manejar los mensajes del usuario
function handleUserMessage(message) {
    return ariaBot.processQuery(message);
}

// Simular interacción con el chatbot
console.log(ariaBot.getGreeting());

const userQuestions = [
    "¿Qué propiedades tienen en Samborondón?",
    "¿Cuáles son los requisitos para comprar una propiedad?",
    "¿Qué opciones de inversión hay en Estados Unidos?",
    "¿Cómo es el proceso de compra en Ecuador?"
];

userQuestions.forEach(question => {
    console.log("\nUsuario: " + question);
    console.log("Aria: " + handleUserMessage(question));
});

// Sugerencias de preguntas para el usuario
const suggestedQuestions = [
    "¿Cuáles son las mejores zonas para invertir en Ecuador?",
    "¿Qué tipos de propiedades ofrecen en Panamá?",
    "¿Cuál es el rango de precios en Samborondón?",
    "¿Qué financiamiento está disponible para extranjeros?"
];

console.log("\nPreguntas sugeridas para el usuario:");
suggestedQuestions.forEach((question, index) => {
    console.log(`${index + 1}. ${question}`);
});

// Instrucciones para integrar el chatbot en el sitio web
console.log("\nPara integrar este chatbot en el sitio web:");
console.log("1. Asegúrate de que el archivo 'AriaRealEstateBot.js' esté en el mismo directorio que 'chatbot.js'.");
console.log("2. En el archivo HTML, añade un contenedor para los mensajes del chat y un formulario para el input del usuario.");
console.log("3. En el archivo JavaScript principal (script.js), añade el siguiente código:");
console.log(`
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatbot-messages');
    const chatForm = document.getElementById('chatbot-form');
    const chatInput = document.getElementById('chatbot-input');

    // Mostrar saludo inicial
    addMessage('bot', ariaBot.getGreeting());

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            const botResponse = handleUserMessage(userMessage);
            addMessage('bot', botResponse);
            chatInput.value = '';
        }
    });

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Añadir sugerencias de preguntas
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'chat-suggestions';
    suggestedQuestions.forEach(question => {
        const suggestionButton = document.createElement('button');
        suggestionButton.textContent = question;
        suggestionButton.addEventListener('click', () => {
            chatInput.value = question;
            chatForm.dispatchEvent(new Event('submit'));
        });
        suggestionsContainer.appendChild(suggestionButton);
    });
    chatForm.insertAdjacentElement('beforebegin', suggestionsContainer);
});
`);