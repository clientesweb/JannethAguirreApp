export function renderNav(container, onNavigate) {
    container.innerHTML = `
        <ul>
            <li><a href="#" data-page="home">Inicio</a></li>
            <li><a href="#" data-page="properties">Propiedades</a></li>
            <li><a href="#" data-page="contact">Contacto</a></li>
        </ul>
    `;

    container.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            onNavigate(e.target.dataset.page);
        }
    });
}