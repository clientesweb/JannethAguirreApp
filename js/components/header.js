export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <h1 class="text-2xl font-bold">Janneth Aguirre Bienes Raíces</h1>
            <nav>
                <a href="/" class="mx-2" data-link>Inicio</a>
                <a href="/properties" class="mx-2" data-link>Propiedades</a>
                <a href="/contact" class="mx-2" data-link>Contacto</a>
            </nav>
        </div>
    `;
}