class BottomNav {
    constructor() {
        this.render();
    }

    render() {
        const bottomNav = document.getElementById('bottom-nav');
        bottomNav.innerHTML = `
            <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 md:hidden">
                <ul class="flex justify-around py-2">
                    <li>
                        <a href="#" class="flex flex-col items-center text-gray-600 hover:text-primary">
                            <i class="fas fa-home text-xl"></i>
                            <span class="text-xs">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#properties" class="flex flex-col items-center text-gray-600 hover:text-primary">
                            <i class="fas fa-building text-xl"></i>
                            <span class="text-xs">Propiedades</span>
                        </a>
                    </li>
                    <li>
                        <a href="#services" class="flex flex-col items-center text-gray-600 hover:text-primary">
                            <i class="fas fa-concierge-bell text-xl"></i>
                            <span class="text-xs">Servicios</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" class="flex flex-col items-center text-gray-600 hover:text-primary">
                            <i class="fas fa-envelope text-xl"></i>
                            <span class="text-xs">Contacto</span>
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    }
}