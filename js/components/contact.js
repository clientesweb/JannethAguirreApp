export function renderContact(container) {
    container.innerHTML = `
        <div class="contact-container page-transition">
            <h1 class="text-2xl md:text-3xl font-bold mb-6 text-center">Contacta con Nosotros</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Información de Contacto -->
                <div class="contact-info bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-4">Información de Contacto</h2>
                    <p class="mb-2 flex items-center"><i class="fas fa-map-marker-alt mr-2 text-blue-600"></i> Av. Principal 123, Ciudad</p>
                    <p class="mb-2 flex items-center"><i class="fas fa-phone mr-2 text-blue-600"></i> (123) 456-7890</p>
                    <p class="mb-4 flex items-center"><i class="fas fa-envelope mr-2 text-blue-600"></i> info@jannethaguirre.com</p>
                    
                    <!-- Mapa de Ubicación -->
                    <div class="map-container mt-6">
                        <h3 class="text-lg md:text-xl font-bold mb-2">Nuestra Ubicación</h3>
                        <div id="map" class="h-48 md:h-64 bg-gray-300 rounded-lg">
                            <img src="https://via.placeholder.com/600x400?text=Mapa+de+Ubicación" alt="Mapa de ubicación" class="w-full h-full object-cover rounded-lg">
                        </div>
                    </div>
                </div>

                <!-- Formulario de Contacto -->
                <div class="contact-form bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-xl md:text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label for="name" class="block mb-1 font-medium">Nombre</label>
                            <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300">
                        </div>
                        <div>
                            <label for="email" class="block mb-1 font-medium">Email</label>
                            <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300">
                        </div>
                        <div>
                            <label for="phone" class="block mb-1 font-medium">Teléfono</label>
                            <input type="tel" id="phone" name="phone" class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300">
                        </div>
                        <div>
                            <label for="message" class="block mb-1 font-medium">Mensaje</label>
                            <textarea id="message" name="message" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition duration-300 h-32"></textarea>
                        </div>
                        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Añadir animación de transición
    setTimeout(() => {
        container.querySelector('.page-transition').classList.add('active');
    }, 100);

    // Manejar el envío del formulario
    container.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());

        console.log('Formulario enviado:', formValues);
        // Aquí normalmente enviarías los datos a un servidor
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        e.target.reset();
    });
}