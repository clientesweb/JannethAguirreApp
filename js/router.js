import { renderHome } from './components/home.js';
import { renderProperties } from './components/properties.js';
import { renderContact } from './components/contact.js';
import { state } from './app.js';

const routes = {
    '/': renderHome,
    '/properties': renderProperties,
    '/contact': renderContact
};

function initRouter() {
    // Manejo de eventos para cambios en el historial
    window.addEventListener('popstate', handleLocation);

    // Manejo de eventos para la navegación por enlaces con data-link
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.href);
        }
    });

    // Cargar la ubicación actual
    handleLocation();
}

function handleLocation() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/'];  // Si no existe la ruta, renderiza la home
    const main = document.getElementById('main');

    // Mostrar indicador de carga mientras cambia la vista
    main.innerHTML = '<div class="text-center py-4">Cargando...</div>';

    // Ejecutar la función de renderizado correspondiente
    renderFunction(main, state.properties);

    // Actualizar el estado visual del menú inferior
    updateBottomNav(path);
}

function navigateTo(url) {
    // Cambiar la URL sin recargar la página
    history.pushState(null, null, url);
    handleLocation();  // Volver a cargar la ruta para mostrar la vista correcta
}

function updateBottomNav(path) {
    // Actualizar los estilos de los elementos de navegación inferior
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        const isActive = item.getAttribute('href') === path;
        item.classList.toggle('active', isActive);  // Añadir o quitar clase activa
        item.classList.toggle('text-primary', isActive);  // Cambiar el color si está activo
    });
}

export { initRouter };