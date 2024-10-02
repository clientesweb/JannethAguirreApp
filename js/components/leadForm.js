export function showLeadForm() {
    const leadFormContainer = document.getElementById('lead-form');
    leadFormContainer.innerHTML = `
        <div class="bg-white p-8 rounded-lg max-w-md w-full animate-fade-in-up">
            <h2 class="text-2xl font-bold mb-4">¿Interesado en esta propiedad?</h2>
            <form id="lead-capture-form" class="space-y-4">
                <div>
                    <label for="name" class="block mb-1">Nombre</label>
                    <input type="text" id="name" name="name" required class="w-full p-2 border rounded focus:border-blue-500 focus:outline-none transition duration-300">
                </div>
                <div>
                    <label for="email" class="block mb-1">Email</label>
                    <input type="email" id="email" name="email" required class="w-full p-2 border rounded focus:border-blue-500 focus:outline-none transition duration-300">
                </div>
                <div>
                    <label for="phone" class="block mb-1">Teléfono</label>
                    <input type="tel" id="phone" name="phone" class="w-full p-2 border rounded focus:border-blue-500 focus:outline-none transition duration-300">
                </div>
                <div>
                    <label for="message" class="block mb-1">Mensaje</label>
                    <textarea id="message" name="message" class="w-full p-2 border rounded focus:border-blue-500 focus:outline-none transition duration-300 h-32"></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 w-full">Enviar</button>
            </form>
            <button id="close-lead-form" class="mt-4 text-gray-600 hover:text-gray-800 w-full">Cerrar</button>
        </div>
    `;
    leadFormContainer.classList.remove('hidden');

    document.getElementById('lead-capture-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const lead = Object.fromEntries(formData.entries());
        
        // Aquí normalmente enviarías los datos a un servidor
        // Como no tenemos backend, los guardaremos en localStorage
        const leads = JSON.parse(localStorage.getItem('leads') || '[]');
        leads.push(lead);
        localStorage.setItem('leads', JSON.stringify(leads));

        alert('Gracias por su interés. Nos pondremos en contacto pronto.');
        leadFormContainer.classList.add('hidden');
    });

    document.getElementById('close-lead-form').addEventListener('click', () => {
        leadFormContainer.classList.add('hidden');
    });
}