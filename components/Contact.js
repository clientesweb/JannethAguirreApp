class Contact {
    constructor() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const contact = document.getElementById('contact');
        contact.innerHTML = `
            <div class="py-16 bg-gray-100 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Contáctanos</h2>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <form id="contact-form" class="bg-white rounded-lg shadow-md p-6">
                                <div class="mb-4">
                                    <label for="name" class="block text-gray-700 font-bold mb-2">Nombre</label>
                                    <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                </div>
                                <div class="mb-4">
                                    <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
                                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required>
                                </div>
                                <div class="mb-4">
                                    <label for="message" class="block text-gray-700 font-bold mb-2">Mensaje</label>
                                    <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                                </div>
                                <button type="submit" class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Enviar Mensaje</button>
                            </form>
                        </div>
                        <div class="w-full md:w-1/2 px-4">
                            <div class="bg-white rounded-lg shadow-md p-6">
                                <h3 class="text-xl font-bold mb-4">Información de Contacto</h3>
                                <p class="mb-2"><i class="fas fa-map-marker-alt mr-2 text-primary"></i> Dirección de la oficina, Guayaquil, Ecuador</p>
                                <p class="mb-2"><i class="fas fa-phone mr-2 text-primary"></i> +593 987 167 782</p>
                                <p class="mb-2"><i class="fas fa-envelope mr-2 text-primary"></i> info@jannethaguirre.com</p>
                                <div class="mt-6">
                                    <h4 class="font-bold mb-2">Síguenos en redes sociales:</h4>
                                    <div class="flex space-x-4">
                                        <a href="https://www.facebook.com/JannethAguirreBienesRaices" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80"><i class="fab fa-facebook-f fa-2x"></i></a>
                                        <a href="https://www.instagram.com/jannethaguirrebienesraices" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80"><i class="fab fa-instagram fa-2x"></i></a>
                                        <a href="https://www.linkedin.com/in/jannethaguirre" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80"><i class="fab fa-linkedin-in fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            });
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    }
}