export function initPWAInstallation() {
    let deferredPrompt;
    const installButton = document.getElementById('install-app');

    window.addEventListener('beforeinstallprompt', (e) => {
        // Previene que Chrome 67 y versiones anteriores muestren automáticamente el prompt
        e.preventDefault();
        // Guarda el evento para que se pueda activar más tarde
        deferredPrompt = e;
        // Actualiza la interfaz de usuario para notificar al usuario que puede instalar la PWA
        installButton.style.display = 'block';
    });

    installButton.addEventListener('click', (e) => {
        // Oculta nuestro botón de instalación de usuario
        installButton.style.display = 'none';
        // Muestra el prompt
        deferredPrompt.prompt();
        // Espera a que el usuario responda al prompt
        deferredPrompt.userChoice.then((choiceResult)

 => {
            if (choiceResult.outcome === 'accepted') {
                console.log('El usuario aceptó la instalación de la A2HS');
            } else {
                console.log('El usuario rechazó la instalación de la A2HS');
            }
            deferredPrompt = null;
        });
    });

    window.addEventListener('appinstalled', (evt) => {
        console.log('La aplicación fue instalada.');
    });
}
