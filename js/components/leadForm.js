export function showLeadForm() {
    const leadFormContainer = document.getElementById('lead-form');
    leadFormContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg max-w-md w-full shadow-lg animate-fade-in-up">
            <h2 class="text-2xl font-bold mb-6 text-gray-700">¿Interesado en esta propiedad?</h2>
            <form id="lead-capture-form" class="space-y-5">
                
                <!-- Campo Nombre -->
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-600">Nombre</label>
                    <input type="text" id="name" name="name" required 
                        class="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-300">
                </div>

                <!-- Campo Email -->
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
                    <input type="email" id="email" name="email" required 
                        class="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-300">
                </div>

                <!-- Campo Teléfono -->
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-600">Teléfono</label>
                    <input type="tel" id="phone" name="phone" 
                        class="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-300">
                </div>

                <!-- Campo Mensaje -->
                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-600">Mensaje</label>
                    <textarea id="message" name="message" 
                        class="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-300 h-32"></textarea>
                </div>

                <!-- Botón Enviar -->
                <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                    Enviar
                </button>
            </form>
            
            <!-- Botón Cerrar -->
            <button id="close-lead-form" class="mt-6 text-sm text-gray-500 hover:text-gray-800 w-full">Cerrar</button>
        </div>
    `;
    leadFormContainer.classList.remove('hidden');

    // Manejador de envío del formulario
    document.getElementById('lead-capture-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const lead = Object.fromEntries(formData.entries());

        // Simulando el almacenamiento de leads en localStorage
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        leads.push(lead);
        localStorage.setItem('leads', JSON.stringify(leads));

        // Mensaje de confirmación
        alert('Gracias por su interés. Nos pondremos en contacto pronto.');
        leadFormContainer.classList.add('hidden');
    });

    // Manejador de cierre del formulario
    document.getElementById('close-lead-form').addEventListener('click', () => {
        leadFormContainer.classList.add('hidden');
    });
}