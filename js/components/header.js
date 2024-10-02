export function renderHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4 py-4 flex justify-between items-center bg-white shadow-md rounded-lg">
            <div class="flex items-center">
                <img src="https://via.placeholder.com/50x50?text=Logo" alt="Janneth Aguirre Bienes Raíces" class="h-12 w-12 rounded-full">
                <h1 class="text-gray-800 text-xl font-semibold ml-3">Janneth Aguirre<br><span class="text-yellow-500">Bienes Raíces</span></h1>
            </div>
            <nav class="hidden md:flex space-x-8 text-gray-600">
                <a href="/" class="hover:text-yellow-500 transition duration-300" data-link>Inicio</a>
                <a href="/properties" class="hover:text-yellow-500 transition duration-300" data-link>Propiedades</a>
                <a href="/contact" class="hover:text-yellow-500 transition duration-300" data-link>Contacto</a>
            </nav>
            <div class="flex items-center">
                <button class="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition duration-300">
                    <i class="fas fa-download mr-2"></i>Descargar App
                </button>
                <button class="md:hidden text-gray-800 text-3xl" id="mobile-menu-button">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white p-4 rounded-lg shadow-md">
            <a href="/" class="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300" data-link>Inicio</a>
            <a href="/properties" class="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300" data-link>Propiedades</a>
            <a href="/contact" class="block py-2 text-gray-600 hover:text-yellow-500 transition duration-300" data-link>Contacto</a>
        </div>
    `;

    const mobileMenuButton = header.querySelector('#mobile-menu-button');
    const mobileMenu = header.querySelector('#mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}