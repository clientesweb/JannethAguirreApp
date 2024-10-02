export function renderBottomNav() {
    const bottomNav = document.getElementById('bottom-nav');
    bottomNav.innerHTML = `
        <div class="flex justify-around items-center h-16">
            <a href="/" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-home text-xl"></i>
                <span class="text-xs">Inicio</span>
            </a>
            <a href="/properties" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-building text-xl"></i>
                <span class="text-xs">Propiedades</span>
            </a>
            <a href="/contact" class="bottom-nav-item flex flex-col items-center text-gray-600 hover:text-blue-600 transition duration-300" data-link>
                <i class="fas fa-envelope text-xl"></i>
                <span class="text-xs">Contacto</span>
            </a>
        </div>
    `;
}
