document.addEventListener('DOMContentLoaded', function() {
    const openChatbotButton = document.getElementById('open-chatbot');
    const closeChatbotButton = document.getElementById('close-chatbot');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const suggestedQuestions = document.getElementById('suggested-questions');

    const initialSuggestedQuestions = [
        "¿Cuáles son los servicios que ofrecen?",
        "¿Cómo puedo vender mi propiedad?",
        "¿Tienen propiedades en alquiler?",
        "¿Cuál es el proceso de compra de una propiedad?"
    ];

    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.className = `p-2 rounded-lg ${isUser ? 'bg-blue-100 ml-auto' : 'bg-gray-100'} max-w-[80%] mb-2`;
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addSuggestedQuestion(question) {
        const questionButton = document.createElement('button');
        questionButton.className = 'bg-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2 hover:bg-gray-300 transition-colors';
        questionButton.textContent = question;
        questionButton.addEventListener('click', () => {
            chatbotInput.value = question;
            chatbotForm.dispatchEvent(new Event('submit'));
        });
        suggestedQuestions.appendChild(questionButton);
    }

    function showSuggestedQuestions(questions) {
        suggestedQuestions.innerHTML = '';
        questions.forEach(addSuggestedQuestion);
    }

    openChatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.remove('hidden');
        if (chatbotMessages.children.length === 0) {
            addMessage("¡Hola! Soy ARIA, tu asistente virtual de bienes raíces. ¿En qué puedo ayudarte hoy?");
            showSuggestedQuestions(initialSuggestedQuestions);
        }
    });

    closeChatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            chatbotInput.value = '';
            // Simular respuesta del chatbot (reemplazar con lógica real del chatbot)
            setTimeout(() => {
                const botResponse = "Gracias por tu pregunta. Nuestro equipo de expertos en bienes raíces está revisando tu consulta y te responderá lo antes posible. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?";
                addMessage(botResponse);
                showSuggestedQuestions(initialSuggestedQuestions);
            }, 1000);
        }
    });

    // Inicializar sugerencias
    showSuggestedQuestions(initialSuggestedQuestions);
});