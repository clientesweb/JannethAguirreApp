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
    properties: [], // Aquí cargaríamos las propiedades desde un JSON local
};

// Función para actualizar la vista
function updateView() {
    switch (state.currentPage) {
        case 'home':
            renderHome(document.getElementById('main'));
            break;
        case 'properties':
            renderProperties(document.getElementById('main'), state.properties);
            break;
        case 'contact':
            renderContact(document.getElementById('main'));
            break;
        default:
            renderHome(document.getElementById('main'));
    }
}

// Inicialización de la aplicación
function initApp() {
    renderHeader(document.getElementById('header'));
    renderNav(document.getElementById('nav'), (page) => {
        state.currentPage = page;
        updateView();
    });
    renderFooter(document.getElementById('footer'));
    updateView();

    // Evento para mostrar el formulario de captura de leads
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-lead-form')) {
            showLeadForm(document.getElementById('lead-form'));
        }
    });
}

// Cargar datos de propiedades (simulado)
fetch('properties.json')
    .then(response => response.json())
    .then(data => {
        state.properties = data;
        initApp();
    })
    .catch(error => {
        console.error('Error loading properties:', error);
        initApp(); // Iniciar la app incluso si falla la carga de propiedades
    });
// Importaciones de módulos (sin cambios)

// Estado global de la aplicación (sin cambios)

// Función para actualizar la vista (sin cambios)

// Inicialización de la aplicación
function initApp() {
    renderHeader(document.getElementById('header'));
    renderNav(document.getElementById('nav'), (page) => {
        state.currentPage = page;
        updateView();
    });
    renderFooter(document.getElementById('footer'));
    updateView();

    // Evento para mostrar el formulario de captura de leads
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-lead-form')) {
            showLeadForm(document.getElementById('lead-form'));
        }
    });

    // Añadir botón de descarga de PWA
    addPWADownloadButton();

    // Añadir animaciones de entrada
    addEntryAnimations();
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

// Cargar datos de propiedades (sin cambios)
