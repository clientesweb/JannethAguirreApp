import { initRouter } from './router.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { showLeadForm } from './components/leadForm.js';

// Estado global de la aplicación
const state = {
    properties: []
};

// Inicialización de la aplicación
async function initApp() {
    renderHeader();
    renderFooter();
    initRouter();

    // Evento para mostrar el formulario de captura de leads
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-lead-form')) {
            showLeadForm();
        }
    });

    // Añadir botón de descarga de PWA
    addPWADownloadButton();

    // Cargar datos de propiedades
    await loadProperties();
}

// Función para cargar propiedades
async function loadProperties() {
    try {
        const cachedProperties = localStorage.getItem('properties');
        if (cachedProperties) {
            state.properties = JSON.parse(cachedProperties);
        }

        const response = await fetch('properties.json');
        const data = await response.json();
        state.properties = data;
        localStorage.setItem('properties', JSON.stringify(data));
    } catch (error) {
        console.error('Error loading properties:', error);
        // Si no hay datos en caché y falla la carga, usamos datos de muestra
        state.properties = [
            { id: 1, title: 'Casa de muestra', description: '3 habitaciones, 2 baños', price: 250000 },
            { id: 2, title: 'Apartamento de muestra', description: '2 habitaciones, 1 baño', price: 150000 },
        ];
    }
}

// Función para añadir el botón de descarga de PWA
function addPWADownloadButton() {
    const pwaButton = document.createElement('button');
    pwaButton.classList.add('pwa-download');
    pwaButton.innerHTML = 'Instalar App';
    pwaButton.setAttribute('aria-label', 'Descargar aplicación');
    document.body.appendChild(pwaButton);

    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        pwaButton.style.display = 'block';
    });

    pwaButton.addEventListener('click', (e) => {
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

// Iniciar la aplicación
initApp();

export { state };
