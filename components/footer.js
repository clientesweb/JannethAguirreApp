export function renderFooter(container) {
  container.innerHTML = `
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Janneth Aguirre Bienes Raíces</h3>
          <p>Tu socio confiable en bienes raíces desde 2005.</p>
        </div>
        <div class="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#" data-page="home">Inicio</a></li>
            <li><a href="#" data-page="properties">Propiedades</a></li>
            <li><a href="#" data-page="contact">Contacto</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Síguenos</h3>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
      </div>
    </footer>
  `

  // Event listeners for footer links
  container.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const page = e.target.dataset.page
      window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }))
    })
  })
}