class WhatsAppButton {
    constructor() {
        this.render();
    }

    render() {
        const whatsappButton = document.getElementById('whatsapp-button');
        whatsappButton.innerHTML = `
            <a href="https://wa.me/593987167782" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors">
                <i class="fab fa-whatsapp text-2xl"></i>
            </a>
        `;
    }
}