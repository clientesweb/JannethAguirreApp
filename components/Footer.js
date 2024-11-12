class Footer {
    constructor() {
        this.render();
    }

    render() {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                            <h3 class="text-lg font-semibold mb-4">Janneth Aguirre Bienes Raíces</h3>
                            <p class="mb-4">Expertos en propiedades en Ecuador. Ofrecemos las mejores casas, departamentos y locales comerciales en venta y alquiler.</p>
                            <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre Bienes Raíces" class="h-12">
                        </div>
                        <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                            <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-primary">Inicio</a></li>
                                <li><a href="#about-us" class="hover:text-primary">Quiénes Somos</a></li>
                                <li><a href="#properties" class="hover:text-primary">Propiedades</a></li>
                                <li><a href="#services" class="hover:text-primary">Servicios</a></li>
                                <li><a href="#contact" class="hover:text-primary">Contacto</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
                            <p class="mb-2"><i class="fas fa-map-marker-alt mr-2"></i> Dirección de la oficina, Guayaquil, Ecuador</p>
                            <p class="mb-2"><i class="fas fa-phone mr-2"></i> +593 987 167 782</p>
                            <p class="mb-2"><i class="fas fa-envelope mr-2"></i> info@jannethaguirre.com</p>
                        </div>
                        <div class="w-full md:w-1/4 px-4">
                            <h3 class="text-lg font-semibold mb-4">Síguenos</h3>
                            <div class="flex space-x-4">
                                <a href="https://www.facebook.com/JannethAguirreBienesRaices" target="_blank" rel="noopener noreferrer" class="hover:text-primary"><i class="fab fa-facebook-f fa-2x"></i></a>
                                <a href="https://www.instagram.com/jannethaguirrebienesraices" target="_blank" rel="noopener noreferrer" class="hover:text-primary"><i class="fab fa-instagram fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/jannethaguirre" target="_blank" rel="noopener noreferrer" class="hover:text-primary"><i class="fab fa-linkedin-in fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}