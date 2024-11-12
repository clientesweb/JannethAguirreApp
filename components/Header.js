class Header {
    constructor() {
        this.render();
        this.initInstallApp();
    }

    render() {
        const header = document.getElementById('header');
        header.innerHTML = `
            <div class="bg-white shadow-md sticky top-0 z-50">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre Bienes Raíces" width="48" height="48" class="h-12">
                        <button id="install-app" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                            <i class="fas fa-download mr-2" aria-hidden="true"></i> Instalar App
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    initInstallApp() {
        let deferredPrompt;
        const installButton = document.getElementById('install-app');
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installButton.style.display = 'block';
        });
        
        installButton.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('Usuario aceptó la instalación de la PWA');
                    }
                    deferredPrompt = null;
                });
            }
        });
    }
}