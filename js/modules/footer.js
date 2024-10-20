export function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-between">
                    <div class="w-full md:w-1/3 mb-6 md:mb-0">
                        <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre Bienes Raíces" class="h-12 mb-4">
                        <p>Expertos en bienes raíces con años de experiencia en el mercado ecuatoriano.</p>
                    </div>
                    <div class="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 class="text-lg font-semibold mb-4">Contacto</h3>
                        <p>Teléfono: +593 98 716 7782</p>
                        <p>Email: info@jannethaguirre.com</p>
                        <p>Dirección: Guayaquil, Ecuador</p>
                    </div>
                    <div class="w-full md:w-1/3">
                        <h3 class="text-lg font-semibold mb-4">Síguenos</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="text-white hover:text-gray-300">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-white hover:text-gray-300">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-white hover:text-gray-300">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-white hover:text-gray-300">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="text-white hover:text-gray-300">
                                <i class="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <p>&copy; 2024 Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    `;
}
