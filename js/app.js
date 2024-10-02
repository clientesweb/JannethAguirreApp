import { initRouter } from './router.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderBottomNav } from './components/bottomNav.js';
import { showLeadForm } from './components/leadForm.js';
import { initSliders } from './sliders.js';

// Estado global de la aplicación
const state = {
    properties: []
};

// Inicialización de la aplicación
async function initApp() {
    renderHeader();
    renderFooter();
    renderBottomNav();
    initRouter();
    initSliders();
    initLeadForm();

    // Cargar datos de propiedades
    await loadProperties();
}

// Función para inicializar el formulario de captura de leads
function initLeadForm() {
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('show-lead-form')) {
            showLeadForm();
        }
    });
}

// Función para cargar propiedades
async function loadProperties() {
    try {
        // Cargar propiedades de localStorage si están disponibles
        const cachedProperties = localStorage.getItem('properties');
        if (cachedProperties) {
            state.properties = JSON.parse(cachedProperties);
        } else {
            // Cargar propiedades desde el archivo JSON
            const response = await fetch('properties.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            state.properties = data;
            localStorage.setItem('properties', JSON.stringify(data));
        }
    } catch (error) {
        console.error('Error loading properties:', error);
        // Si no hay datos en caché y falla la carga, usamos datos de muestra
        loadSampleProperties();
    }
}

// Función para cargar propiedades de muestra
function loadSampleProperties() {
    state.properties = [
        { 
            id: 1, 
            title: 'Casa Moderna en el Centro', 
            description: '3 habitaciones | 2 baños | 150m²', 
            price: 250000,
            image: 'img/properties/property-1.jpg'
        },
        { 
            id: 2, 
            title: 'Apartamento con Vista al Mar', 
            description: '2 habitaciones | 1 baño | 80m²', 
            price: 150000,
            image: 'img/properties/property-2.jpg'
        },
        { 
            id: 3, 
            title: 'Villa de Lujo con Piscina', 
            description: '4 habitaciones | 3 baños | 300m²', 
            price: 500000,
            image: 'img/properties/property-3.jpg'
        },
    ];
}

// Iniciar la aplicación
initApp();

export { state };