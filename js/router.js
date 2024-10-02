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
    window.addEventListener('popstate', handleLocation);
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    handleLocation();
}

function handleLocation() {
    const path = window.location.pathname;
    const renderFunction = routes[path] || routes['/'];
    const main = document.getElementById('main');
    main.innerHTML = '<div class="text-center py-4">Cargando...</div>';
    renderFunction(main, state.properties);

    // Update active state in bottom navigation
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        if (item.getAttribute('href') === path) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function navigateTo(url) {
    history.pushState(null, null, url);
    handleLocation();
}

export { initRouter };