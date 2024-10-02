export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <div class="flex items-center">
                <img src="img/logo.png" alt="Janneth Aguirre Bienes Raíces" class="h-12 mr-2">
                <h1 class="text-xl font-bold">Janneth Aguirre<br>Bienes Raíces</h1>
            </div>
            <nav class="hidden md:block">
                <a href="/" class="mx-2 hover:text-yellow-400 transition duration-300" data-link>Inicio</a>
                <a href="/properties" class="mx-2 hover:text-yellow-400 transition duration-300" data-link>Propiedades</a>
                <a href="/contact" class="mx-2 hover:text-yellow-400 transition duration-300" data-link>Contacto</a>
            </nav>
        </div>
    `;
}