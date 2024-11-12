class ChatBot {
    constructor() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const chatbot = document.getElementById('chatbot');
        chatbot.innerHTML = `
            <div class="fixed bottom-20 right-4 z-50">
                <button id="open-chat" class="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-colors">
                    <i class="fas fa-comments text-2xl"></i>
                </button>
                <div id="chat-window" class="hidden bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
                    <div class="bg-primary text-white p-4 rounded-t-lg">
                        <h3 class="font-bold">Chat con Nosotros</h3>
                    </div>
                    <div id="chat-messages" class="flex-grow p-4 overflow-y-auto"></div>
                    <div class="p-4 border-t">
                        <form id="chat-form" class="flex">
                            <input type="text" id="chat-input" placeholder="Escribe tu mensaje..." class="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            <button type="submit" class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const openChatButton = document.getElementById('open-chat');
        const chatWindow = document.getElementById('chat-window');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');

        openChatButton.addEventListener('click', () => {
            chatWindow.classList.toggle('hidden');
            if (!chatWindow.classList.contains('hidden')) {
                this.addMessage('bot', '¡Hola! ¿En qué puedo ayudarte hoy?');
            }
        });

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                this.addMessage('user', message);
                chatInput.value = '';
                // Here you would typically send the message to a server and get a response
                // For this example, we'll just echo the message back after a short delay
                setTimeout(() => {
                    this.addMessage('bot', `Recibí tu mensaje: "${message}". Un agente se pondrá en contacto contigo pronto.`);
                }, 1000);
            }
        });
    }

    addMessage(sender, text) {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.className = `mb-2 ${sender === 'user' ? 'text-right' : ''}`;
        messageElement.innerHTML = `
            <span class="inline-block ${sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200'} rounded-lg px-4 py-2">
                ${text}
            </span>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}