export function renderBottomNav() {
    const bottomNav = document.getElementById('bottom-nav');
    bottomNav.innerHTML = `
        <div class="flex justify-around items-center h-16 bg-white shadow-md fixed bottom-0 w-full">
            <!-- Inicio -->
            <a href="/" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-home text-2xl"></i>
                <span class="text-xs mt-1">Inicio</span>
            </a>

            <!-- Propiedades -->
            <a href="/properties" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-building text-2xl"></i>
                <span class="text-xs mt-1">Propiedades</span>
            </a>

            <!-- Contacto -->
            <a href="/contact" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-envelope text-2xl"></i>
                <span class="text-xs mt-1">Contacto</span>
            </a>
        </div>
    `;
}