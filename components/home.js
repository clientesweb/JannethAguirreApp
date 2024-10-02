import { Button } from "@/components/ui/button"

export function renderHome(container) {
  container.innerHTML = `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1>Bienvenidos a Janneth Aguirre Bienes Raíces</h1>
          <p>Encuentra la casa de tus sueños con nosotros</p>
          <button class="show-lead-form">Contáctanos</button>
        </div>
      </section>
      
      <section class="featured-properties">
        <h2>Propiedades Destacadas</h2>
        <div class="property-grid">
          ${generatePropertyCards(3)}
        </div>
        <button class="view-all-properties" data-page="properties">Ver todas las propiedades</button>
      </section>
      
      <section class="about-us">
        <h2>Sobre Nosotros</h2>
        <p>Con más de 15 años de experiencia, Janneth Aguirre Bienes Raíces es tu mejor opción para encontrar el hogar perfecto.</p>
        <button class="learn-more" data-page="contact">Conoce más</button>
      </section>
    </div>
  `

  function generatePropertyCards(count) {
    let cards = ''
    for (let i = 0; i < count; i++) {
      cards += `
        <div class="property-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Propiedad ${i + 1}">
          <h3>Hermosa Casa en Venta</h3>
          <p>3 habitaciones | 2 baños | 150m²</p>
          <button class="view-property show-lead-form">Ver Detalles</button>
        </div>
      `
    }
    return cards
  }

  // Event listeners
  container.querySelector('.view-all-properties').addEventListener('click', (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'properties' } }))
  })

  container.querySelector('.learn-more').addEventListener('click', (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }))
  })
}
