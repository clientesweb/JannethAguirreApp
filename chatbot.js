// Variables para almacenar el JSON de respuestas y las interacciones
let chatbotData = [];
let foundResponse = false;

// Cargar los datos del JSON
fetch('chatbotData.json')
  .then(response => response.json())
  .then(data => {
    chatbotData = data;
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

// Función para enviar un mensaje
function sendMessage(userInput) {
  const chatBox = document.querySelector('.chat-box');
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.innerHTML = userInput;
  chatBox.appendChild(userMessage);
  
  getBotResponse(userInput.toLowerCase());
}

// Función para obtener la respuesta del chatbot
function getBotResponse(userInput) {
  let response = '';
  foundResponse = false;
  
  // Filtrado de palabras clave para la consulta
  chatbotData.forEach(item => {
    if (userInput.includes(item.keyword.toLowerCase())) {
      response = item.response;
      foundResponse = true;
    }
  });
  
  // Si no se encuentra respuesta, usar una predeterminada
  if (!foundResponse) {
    response = "Lo siento, no entendí lo que dijiste. ¿Te gustaría saber más sobre nuestras propiedades, servicios o asesoría?";
  }
  
  showBotResponse(response);
}

// Función para mostrar la respuesta del bot
function showBotResponse(response) {
  const chatBox = document.querySelector('.chat-box');
  const botMessage = document.createElement('div');
  botMessage.classList.add('bot-message');
  botMessage.innerHTML = response;
  chatBox.appendChild(botMessage);
  
  // Hacer que el chat se desplace hacia abajo
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Evento de envío de mensaje (ejemplo con un botón)
document.querySelector('.send-btn').addEventListener('click', () => {
  const userInput = document.querySelector('.user-input').value;
  if (userInput.trim() !== '') {
    sendMessage(userInput);
    document.querySelector('.user-input').value = ''; // Limpiar el campo de entrada
  }
});