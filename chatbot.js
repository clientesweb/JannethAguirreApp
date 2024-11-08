// Asegúrate de que el archivo data.json esté en el mismo directorio que este script
const data = {
  // Aquí va todo el contenido del archivo data.json que proporcioné anteriormente
  // Por razones de espacio, no lo incluyo aquí, pero debe ser el mismo contenido
};

class Chatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.suggestions = [];
    this.isTyping = false;
    this.context = {};

    this.chatbotContainer = document.createElement('div');
    this.chatbotContainer.className = 'chatbot-container';
    document.body.appendChild(this.chatbotContainer);

    this.render();
    this.addEventListeners();
  }

  render() {
    const chatbotHTML = `
      <div class="chatbot ${this.isOpen ? 'open' : ''}">
        ${this.isOpen ? this.renderChatWindow() : this.renderChatButton()}
      </div>
    `;
    this.chatbotContainer.innerHTML = chatbotHTML;
  }

  renderChatButton() {
    return `
      <button class="chat-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
    `;
  }

  renderChatWindow() {
    return `
      <div class="chat-window">
        <div class="chat-header">
          <img src="/logo.png" alt="Janneth Aguirre Real Estate" class="logo">
          <h2>Asistente Virtual</h2>
          <button class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="chat-messages">
          ${this.renderMessages()}
        </div>
        <div class="chat-suggestions">
          ${this.renderSuggestions()}
        </div>
        <form class="chat-input-form">
          <input type="text" placeholder="Escribe tu mensaje..." class="chat-input">
          <button type="submit" class="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    `;
  }

  renderMessages() {
    return this.messages.map(msg => `
      <div class="message ${msg.sender}">
        <p>${msg.content}</p>
        <span class="timestamp">${this.formatTimestamp(msg.timestamp)}</span>
      </div>
    `).join('') + (this.isTyping ? this.renderTypingIndicator() : '');
  }

  renderTypingIndicator() {
    return `
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
  }

  renderSuggestions() {
    return this.suggestions.map(sugg => `
      <button class="suggestion-button" data-suggestion="${sugg.text}">
        ${sugg.text}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `).join('');
  }

  formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  addEventListeners() {
    this.chatbotContainer.addEventListener('click', (e) => {
      if (e.target.closest('.chat-button')) {
        this.toggleChat();
      } else if (e.target.closest('.close-button')) {
        this.toggleChat();
      } else if (e.target.closest('.suggestion-button')) {
        const suggestion = e.target.closest('.suggestion-button').dataset.suggestion;
        this.handleSuggestionClick(suggestion);
      }
    });

    this.chatbotContainer.addEventListener('submit', (e) => {
      if (e.target.closest('.chat-input-form')) {
        e.preventDefault();
        const input = e.target.querySelector('.chat-input');
        this.handleSubmit(input.value);
        input.value = '';
      }
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.messages.length === 0) {
      this.addBotMessage(data.inicio[0].answer);
      this.suggestions = data.inicio[0].suggestions.map(sugg => ({
        text: sugg,
        action: () => this.handleSuggestionClick(sugg)
      }));
    }
    this.render();
  }

  addMessage(sender, content) {
    this.messages.push({ sender, content, timestamp: new Date() });
    this.render();
  }

  addBotMessage(content) {
    this.isTyping = true;
    this.render();

    const words = content.split(' ');
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < words.length) {
        if (this.messages.length > 0 && this.messages[this.messages.length - 1].sender === 'bot') {
          this.messages[this.messages.length - 1].content += ' ' + words[i];
        } else {
          this.messages.push({ sender: 'bot', content: words[i], timestamp: new Date() });
        }
        this.render();
        i++;
      } else {
        clearInterval(intervalId);
        this.isTyping = false;
        this.render();
      }
    }, 30);
  }

  handleSubmit(message) {
    if (message.trim()) {
      this.addMessage('user', message);
      this.processMessage(message);
    }
  }

  processMessage(message) {
    const response = this.generateResponse(message);
    this.addBotMessage(response.answer);
    this.updateContext(message, response);
    
    if (response.suggestions) {
      this.suggestions = response.suggestions.map(sugg => ({
        text: sugg,
        action: () => this.handleSuggestionClick(sugg)
      }));
    }
    this.render();
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    for (const category in data) {
      const matchedItem = data[category].find(item => 
        item.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))
      );
      if (matchedItem) {
        return matchedItem;
      }
    }
    return data.default[0];
  }

  updateContext(message, response) {
    this.context = {
      ...this.context,
      lastTopic: response.question,
      userPreferences: [...(this.context.userPreferences || []), message]
    };
  }

  handleSuggestionClick(suggestion) {
    this.addMessage('user', suggestion);
    this.processMessage(suggestion);
  }

  handleFeedback(isPositive) {
    const feedbackMessage = isPositive
      ? "Me alegra haber sido de ayuda. ¿Hay algo más en lo que pueda asistirte?"
      : "Lamento no haber cumplido tus expectativas. ¿Podrías decirme cómo puedo mejorar mi asistencia?";
    this.addBotMessage(feedbackMessage);
    
    if (!isPositive) {
      this.suggestions = [
        { text: "Hablar con un asesor", action: () => this.handleContactRequest("llamada") },
        { text: "Intentar otra pregunta", action: () => {} }
      ];
    }
    this.render();
  }

  handleContactRequest(method) {
    this.addBotMessage(`Excelente, te conectaré con uno de nuestros asesores premium vía ${method}. Por favor, proporciona tu número de contacto o correo electrónico y te contactaremos a la brevedad.`);
    this.suggestions = [];
    this.context = { ...this.context, contactRequest: method };
    this.render();
  }
}

// Inicializar el chatbot
const chatbot = new Chatbot();