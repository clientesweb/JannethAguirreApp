export function showLeadForm(container) {
    container.innerHTML = `
        <form id="lead-capture-form" class="lead-form">
            <h2>¿Interesado en esta propiedad?</h2>
            <input type="text" name="name" placeholder="Nombre" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Teléfono">
            <textarea name="message" placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
        </form>
    `;

    container.classList.remove('hidden');

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
        container.classList.add('hidden');
    });
}