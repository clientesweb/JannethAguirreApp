export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container mx-auto px-6 py-8 bg-gray-900 text-gray-300">
            <div class="flex flex-wrap justify-between items-start">
                
                <!-- Información de Contacto -->
                <div class="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 class="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Janneth Aguirre Bienes Raíces</h3>
                    <p class="text-sm md:text-base">Av. Principal 123, Ciudad</p>
                    <p class="text-sm md:text-base">Telé: (123) 456-7890</p>
                    <p class="text-sm md:text-base">Email: info@jannethaguirre.com</p>
                </div>
                
                <!-- Enlaces Rápidos -->
                <div class="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 class="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Enlaces Rápidos</h3>
                    <ul class="text-sm md:text-base">
                        <li class="mb-2"><a href="/" class="hover:text-yellow-400 transition duration-300" data-link>Inicio</a></li>
                        <li class="mb-2"><a href="/properties" class="hover:text-yellow-400 transition duration-300" data-link>Propiedades</a></li>
                        <li class="mb-2"><a href="/contact" class="hover:text-yellow-400 transition duration-300" data-link>Contacto</a></li>
                    </ul>
                </div>

                <!-- Redes Sociales -->
                <div class="w-full md:w-1/3 text-center md:text-right">
                    <h3 class="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Síguenos</h3>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-2xl text-gray-300 hover:text-yellow-400 transition duration-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-2xl text-gray-300 hover:text-yellow-400 transition duration-300"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-2xl text-gray-300 hover:text-yellow-400 transition duration-300"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <!-- Derechos Reservados -->
            <div class="mt-8 text-center text-gray-500 text-sm">
                <p>&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
                <p class="mt-2">Powered by <a href="https://dualitydomain.com" target="_blank" rel="noopener noreferrer" class="text-yellow-400 hover:underline">Duality Domain</a></p>
            </div>
        </div>
    `;
}