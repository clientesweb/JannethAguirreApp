export function renderProperties(container, properties) {
    container.innerHTML = `
        <div class="properties-container">
            <h1 class="text-3xl font-bold mb-6">Nuestras Propiedades</h1>
            <div class="property-filters mb-6">
                <select id="property-type" class="mr-2 p-2 border rounded">
                    <option value="">Tipo de Propiedad</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="terreno">Terreno</option>
                </select>
                <select id="location" class="mr-2 p-2 border rounded">
                    <option value="">Ubicación</option>
                    <option value="centro">Centro</option>
                    <option value="norte">Norte</option>
                    <option value="sur">Sur</option>
                </select>
                <button id="apply-filters" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Aplicar Filtros</button>
            </div>
            <div class="property-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${properties.map(property => `
                    <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="${property.image || '/placeholder.svg?height=200&width=300'}" alt="${property.title}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                            <p class="text-gray-600 mb-2">${property.description}</p>
                            <p class="text-2xl font-bold text-blue-600 mb-4">$${property.price.toLocaleString()}</p>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 show-lead-form" data-id="${property.id}">Contactar</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Event listener for filters
    container.querySelector('#apply-filters').addEventListener('click', () => {
        const type = container.querySelector('#property-type').value;
        const location = container.querySelector('#location').value;
        // Here you would typically filter the properties based on these values
        // and re-render the property grid
        console.log('Filtering properties:', { type, location });
    });
}