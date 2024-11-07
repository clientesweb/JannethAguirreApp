class ChatBot {
  constructor() {
    this.knowledge = [];
    this.loadKnowledge();
  }

  // Intentar cargar el archivo JSON
  async loadKnowledge() {
    try {
      const response = await fetch('knowledge.json'); // Asegúrate de que el archivo JSON esté en la misma carpeta
      if (!response.ok) throw new Error('No se pudo cargar el archivo JSON');
      const data = await response.json();
      this.knowledge = data;
    } catch (error) {
      console.error('Error al cargar el archivo de conocimiento:', error);
      this.knowledge = []; // Si hay un error, se puede utilizar una respuesta por defecto.
    }
  }

  // Generar respuesta según la pregunta del usuario
  generateResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
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
  if (!userInput) return; // Evitar enviar una respuesta vacía

  const response = chatbot.generateResponse(userInput);

  const chatWindow = document.getElementById("chatWindow");
  const userMessage = document.createElement("div");
  userMessage.textContent = `Tú: ${userInput}`;
  chatWindow.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.textContent = `ARIA: ${response}`;
  chatWindow.appendChild(botMessage);

  // Desplazarse hacia el fondo del chat automáticamente
  chatWindow.scrollTop = chatWindow.scrollHeight;

  document.getElementById("userInput").value = "";
}