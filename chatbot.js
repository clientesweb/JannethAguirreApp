class Chatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.suggestions = [];
    this.isTyping = false;
    this.context = {};
    this.data = null;

    this.chatbotContainer = document.createElement('div');
    this.chatbotContainer.className = 'chatbot-container';
    document.body.appendChild(this.chatbotContainer);

    this.fetchData().then(() => {
      this.render();
      this.addEventListeners();
    });
  }

  async fetchData() {
    try {
      const response = await fetch('data.json');
      this.data = await response.json();
    } catch (error) {
      console.error('Error fetching chatbot data:', error);
    }
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
          <h2>Asistente Virtual ARIA</h2>
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
      <button class="suggestion-button" data-suggestion="${sugg}">
        ${sugg}
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
      this.addBotMessage(this.getRandomGreeting());
      this.updateSuggestions(['propiedades', 'servicios', 'sobre nosotros']);
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
    }, 50);
  }

  handleSubmit(message) {
    if (message.trim()) {
      this.addMessage('user', message);
      this.processMessage(message);
    }
  }

  processMessage(message) {
    const response = this.generateResponse(message);
    this.addBotMessage(response);
    this.updateContext(message);
    this.suggestNextTopics();
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    for (const category in this.data) {
      const matchedItem = this.data[category].find(item => 
        lowerMessage.includes(item.question.toLowerCase())
      );
      if (matchedItem) {
        return matchedItem.answer;
      }
    }
    return "Lo siento, no tengo información específica sobre esa consulta. ¿Puedo ayudarte con algo más sobre nuestras propiedades, servicios o el proceso de compra/venta?";
  }

  updateContext(message) {
    // Simple context tracking
    if (message.toLowerCase().includes('comprar')) {
      this.context.intent = 'comprar';
    } else if (message.toLowerCase().includes('vender')) {
      this.context.intent = 'vender';
    } else if (message.toLowerCase().includes('alquilar')) {
      this.context.intent = 'alquilar';
    }
  }

  suggestNextTopics() {
    let suggestions = [];
    if (this.context.intent === 'comprar') {
      suggestions = ['proceso de compra', 'financiamiento', 'propiedades disponibles'];
    } else if (this.context.intent === 'vender') {
      suggestions = ['valoración de propiedades', 'documentos venta', 'tiempo venta'];
    } else if (this.context.intent === 'alquilar') {
      suggestions = ['alquileres', 'servicios', 'contacto'];
    } else {
      suggestions = ['propiedades', 'servicios', 'invertir', 'contacto'];
    }
    this.updateSuggestions(suggestions);
  }

  handleSuggestionClick(suggestion) {
    this.addMessage('user', suggestion);
    this.processMessage(suggestion);
  }

  updateSuggestions(suggestions) {
    this.suggestions = suggestions;
    this.render();
  }

  getRandomGreeting() {
    const greetings = this.data.saludos.map(item => item.answer);
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
}

// Inicializar el chatbot
const chatbot = new Chatbot();