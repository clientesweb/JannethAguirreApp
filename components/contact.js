export function renderContact(container) {
  container.innerHTML = `
    <div class="contact-container">
      <h1>Contacta con Nosotros</h1>
      <div class="contact-info">
        <div class="contact-details">
          <h2>Información de Contacto</h2>
          <p><strong>Dirección:</strong> Av. Principal 123, Ciudad</p>
          <p><strong>Teléfono:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@jannethaguirre.com</p>
        </div>
        <div class="contact-form">
          <h2>Envíanos un Mensaje</h2>
          <form id="contact-form">
            <input type="text" name="name" placeholder="Nombre" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Teléfono">
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
      <div class="map-container">
        <h2>Nuestra Ubicación</h2>
        <div id="map">
          <!-- Aquí iría un mapa interactivo, por ejemplo usando Google Maps -->
          <img src="/placeholder.svg?height=300&width=600" alt="Mapa de ubicación">
        </div>
      </div>
    </div>
  `

  // Event listener for form submission
  container.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData.entries())
    console.log('Form submitted:', formValues)
    // Here you would typically send this data to a server
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
    e.target.reset()
  })
}