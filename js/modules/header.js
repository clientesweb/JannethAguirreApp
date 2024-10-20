export function initHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre Bienes Raíces" class="h-12">
                <nav class="hidden md:flex space-x-4">
                    <a href="#inicio" class="text-gray-600 hover:text-gray-900">Inicio</a>
                    <a href="#propiedades" class="text-gray-600 hover:text-gray-900">Propiedades</a>
                    <a href="#servicios" class="text-gray-600 hover:text-gray-900">Servicios</a>
                    <a href="#contacto" class="text-gray-600 hover:text-gray-900">Contacto</a>
                </nav>
                <button id="install-app" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                    <i class="fas fa-download mr-2"></i> Instalar App
                </button>
            </div>
        </div>
    `;
}
