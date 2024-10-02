export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <div class="flex items-center">
                <img src="https://via.placeholder.com/50x50?text=Logo" alt="Janneth Aguirre Bienes Raíces" class="h-10 w-10 md:h-12 md:w-12 mr-2">
                <h1 class="text-sm md:text-lg font-bold leading-tight">Janneth Aguirre<br>Bienes Raíces</h1>
            </div>
            <nav class="hidden md:flex space-x-4">
                <a href="/" class="hover:text-yellow-400 transition duration-300" data-link>Inicio</a>
                <a href="/properties" class="hover:text-yellow-400 transition duration-300" data-link>Propiedades</a>
                <a href="/contact" class="hover:text-yellow-400 transition duration-300" data-link>Contacto</a>
            </nav>
            <button class="md:hidden text-2xl" id="mobile-menu-button">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-blue-800 p-4">
            <a href="/" class="block py-2 hover:text-yellow-400 transition duration-300" data-link>Inicio</a>
            <a href="/properties" class="block py-2 hover:text-yellow-400 transition duration-300" data-link>Propiedades</a>
            <a href="/contact" class="block py-2 hover:text-yellow-400 transition duration-300" data-link>Contacto</a>
        </div>
    `;

    const mobileMenuButton = header.querySelector('#mobile-menu-button');
    const mobileMenu = header.querySelector('#mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}