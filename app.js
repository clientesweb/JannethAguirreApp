// Importaciones de módulos
import { renderHeader } from './components/header.js';
import { renderNav } from './components/nav.js';
import { renderHome } from './components/home.js';
import { renderProperties } from './components/properties.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { showLeadForm } from './components/leadForm.js';

// Estado global de la aplicación
const state = {
    currentPage: 'home',
    properties: [],
};

// Función para actualizar la vista
async function updateView() {
    const main = document.getElementById('main');
    main.innerHTML = '<div class="loading">Cargando...</div>';

    try {
        switch (state.currentPage) {
            case 'home':
                await renderHome(main);
                break;
            case 'properties':
                await renderProperties(main, state.properties);
                break;
            case 'contact':
                await renderContact(main);
                break;
            default:
                await renderHome(main);
        }
    } catch (error) {
        console.error('Error rendering page:', error);
        main.innerHTML = '<div class="error">Lo sentimos, ha ocurrido un error. Por favor, intenta de nuevo más tarde.</div>';
    }

    addEntryAnimations();
}

// Función para cambiar de página
function navigateTo(page) {
    state.currentPage = page;
    history.pushState({ page }, '', `/${page}`);
    updateView();
}

// Inicialización de la aplicación
async function initApp() {
    renderHeader(document.getElementById('header'));
    renderNav(document.getElementById('nav'), navigateTo);
    renderFooter(document.getElementById('footer'));

    // Manejar navegación del historial
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.page) {
            state.currentPage = event.state.page;
            updateView();
        }
    });

    // Evento para mostrar el formulario de captura de leads
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-lead-form')) {
            showLeadForm(document.getElementById('lead-form'));
        }
    });

    // Añadir botón de descarga de PWA
    addPWADownloadButton();

    // Cargar datos de propiedades
    await loadProperties();

    updateView();
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
    pwaButton.innerHTML = '<i class="fas fa-download"></i>';
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

// Función para añadir animaciones de entrada
function addEntryAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    document.querySelectorAll('.property-card, .hero-content, .contact-form').forEach(el => {
        observer.observe(el);
    });
}

// Iniciar la aplicación
initApp();