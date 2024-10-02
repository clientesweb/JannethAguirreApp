export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container mx-auto px-4 py-6">
            <div class="flex flex-wrap justify-between items-center">
                <div class="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 class="text-lg md:text-xl font-bold mb-2">Janneth Aguirre Bienes Raíces</h3>
                    <p class="text-sm">Av. Principal 123, Ciudad</p>
                    <p class="text-sm">Telé: (123) 456-7890</p>
                    <p class="text-sm">Email: info@jannethaguirre.com</p>
                </div>
                <div class="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 class="text-lg md:text-xl font-bold mb-2">Enlaces Rápidos</h3>
                    <ul class="text-sm">
                        <li><a href="/" class="hover:text-accent transition duration-300" data-link>Inicio</a></li>
                        <li><a href="/properties" class="hover:text-accent transition duration-300" data-link>Propiedades</a></li>
                        <li><a href="/contact" class="hover:text-accent transition duration-300" data-link>Contacto</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/3 text-center md:text-right">
                    <h3 class="text-lg md:text-xl font-bold mb-2">Síguenos</h3>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-2xl hover:text-accent transition duration-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-2xl hover:text-accent transition duration-300"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-2xl hover:text-accent transition duration-300"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-6 text-center text-sm">
                <p>&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
                <p class="mt-2">Powered by <a href="https://dualitydomain.com" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">Duality Domain</a></p>
            </div>
        </div>
    `;
}