class ChatBot {
  constructor() {
    this.knowledge = [];
    this.loadKnowledge();
  }

  async loadKnowledge() {
    try {
      const response = await fetch('knowledge.json'); // Asegúrate de que el archivo JSON esté en la misma carpeta
      const data = await response.json();
      this.knowledge = data;
    } catch (error) {
      console.error('Error al cargar el archivo de conocimiento:', error);
    }
  }

  generateResponse(message) {
    // Convertir el mensaje del usuario a minúsculas para la comparación
    const lowerCaseMessage = message.toLowerCase();

    // Buscar la respuesta correspondiente en la base de datos de conocimiento
    const match = this.knowledge.find(item => lowerCaseMessage.includes(item.question.toLowerCase()));

    if (match) {
      return match.answer;
    } else {
      return "Lo siento, no entiendo esa pregunta. ¿Puedo ayudarte con algo más?";
    }
  }
}

// Crear una nueva instancia del chatbot
const chatbot = new ChatBot();

// Función para manejar la entrada del usuario y mostrar la respuesta
function handleUserInput() {
  const userInput = document.getElementById("userInput").value;
  const response = chatbot.generateResponse(userInput);

  const chatWindow = document.getElementById("chatWindow");
  const userMessage = document.createElement("div");
  userMessage.textContent = `Tú: ${userInput}`;
  chatWindow.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.textContent = `ARIA: ${response}`;
  chatWindow.appendChild(botMessage);

  document.getElementById("userInput").value = "";
}