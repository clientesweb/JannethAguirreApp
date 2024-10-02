export function renderContact(container) {
    container.innerHTML = `
        <div class="contact-container">
            <h1 class="text-3xl font-bold mb-6">Contacta con Nosotros</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="contact-info">
                    <h2 class="text-2xl font-bold mb-4">Información de Contacto</h2>
                    <p class="mb-2"><strong>Dirección:</strong> Av. Principal 123, Ciudad</p>
                    <p class="mb-2"><strong>Teléfono:</strong> (123) 456-7890</p>
                    <p class="mb-4"><strong>Email:</strong> info@jannethaguirre.com</p>
                    <div class="map-container mt-6">
                        <h3 class="text-xl font-bold mb-2">Nuestra Ubicación</h3>
                        <div id="map" class="h-64 bg-gray-300">
                            <!-- Aquí iría un mapa interactivo, por ejemplo usando Google Maps -->
                            <img src="/placeholder.svg?height=300&width=400" alt="Mapa de ubicación" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <h2 class="text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label for="name" class="block mb-1">Nombre</label>
                            <input type="text" id="name" name="name" required class="w-full p-2 border rounded">
                        </div>
                        <div>
                            <label for="email" class="block mb-1">Email</label>
                            <input type="email" id="email" name="email" required class="w-full p-2 border rounded">
                        </div>
                        <div>
                            <label for="phone" class="block mb-1">Teléfono</label>
                            <input type="tel" id="phone" name="phone" class="w-full p-2 border rounded">
                        </div>
                        <div>
                            <label for="message" class="block mb-1">Mensaje</label>
                            <textarea id="message" name="message" required class="w-full p-2 border rounded h-32"></textarea>
                        </div>
                        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Event listener for form submission
    container.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log('Form submitted:', formValues);
        // Here you would typically send this data to a server
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        e.target.reset();
    });
}