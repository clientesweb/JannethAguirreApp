export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.innerHTML = `
        <div class="container mx-auto px-4 py-16 bg-gray-100">
            <h2 class="text-3xl font-bold text-center mb-12">Contáctanos</h2>
            <form id="contact-form" class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
                    <input type="tel" id="phone" name="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                </div>
                <div class="mb-6">
                    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
                    <textarea id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-primary/90 transition-colors">
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    `;

    initContactFormSubmission();
}

function initContactFormSubmission() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado');
        // Limpia el formulario después del envío
        form.reset();
        // Muestra un mensaje de éxito
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    });
}
