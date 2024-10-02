export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4 py-4 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
            <div class="flex items-center">
                <img src="https://via.placeholder.com/50x50?text=Logo" alt="Janneth Aguirre Bienes Raíces" class="h-12 w-12 md:h-14 md:w-14 mr-3 rounded-full shadow-md">
                <h1 class="text-white text-base md:text-xl font-extrabold tracking-tight">Janneth Aguirre<br><span class="text-yellow-300">Bienes Raíces</span></h1>
            </div>
            <nav class="hidden md:flex space-x-6 text-white">
                <a href="/" class="hover:text-yellow-300 transition duration-300" data-link>Inicio</a>
                <a href="/properties" class="hover:text-yellow-300 transition duration-300" data-link>Propiedades</a>
                <a href="/contact" class="hover:text-yellow-300 transition duration-300" data-link>Contacto</a>
            </nav>
            <div class="flex items-center">
                <button class="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300 mr-4">
                    <i class="fas fa-download mr-2"></i>Descargar App
                </button>
                <button class="md:hidden text-white text-3xl" id="mobile-menu-button">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-blue-800 p-4">
            <a href="/" class="block py-2 text-white hover:text-yellow-400 transition duration-300" data-link>Inicio</a>
            <a href="/properties" class="block py-2 text-white hover:text-yellow-400 transition duration-300" data-link>Propiedades</a>
            <a href="/contact" class="block py-2 text-white hover:text-yellow-400 transition duration-300" data-link>Contacto</a>
        </div>
    `;

    const mobileMenuButton = header.querySelector('#mobile-menu-button');
    const mobileMenu = header.querySelector('#mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}