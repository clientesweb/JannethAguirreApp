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
