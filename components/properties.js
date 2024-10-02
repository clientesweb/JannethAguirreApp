export function renderProperties(container, properties) {
  container.innerHTML = `
    <div class="properties-container">
      <h1>Nuestras Propiedades</h1>
      <div class="property-filters">
        <select id="property-type">
          <option value="">Tipo de Propiedad</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="terreno">Terreno</option>
        </select>
        <select id="location">
          <option value="">Ubicación</option>
          <option value="centro">Centro</option>
          <option value="norte">Norte</option>
          <option value="sur">Sur</option>
        </select>
        <button id="apply-filters">Aplicar Filtros</button>
      </div>
      <div class="property-grid">
        ${properties.map(property => `
          <div class="property-card">
            <img src="${property.image || '/placeholder.svg?height=200&width=300'}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.description}</p>
            <p class="price">$${property.price.toLocaleString()}</p>
            <button class="view-property show-lead-form" data-id="${property.id}">Contactar</button>
          </div>
        `).join('')}
      </div>
    </div>
  `

  // Event listener for filters
  container.querySelector('#apply-filters').addEventListener('click', () => {
    const type = container.querySelector('#property-type').value
    const location = container.querySelector('#location').value
    // Here you would typically filter the properties based on these values
    // and re-render the property grid
    console.log('Filtering properties:', { type, location })
  })
}