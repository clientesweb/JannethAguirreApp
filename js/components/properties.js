export function renderProperties(container, properties) {
    container.innerHTML = `
        <div class="properties-container page-transition">
            <h1 class="text-3xl md:text-4xl font-bold mb-8 text-center">Nuestras Propiedades</h1>
            
            <!-- Property Filters -->
            <div class="property-filters mb-8 flex flex-wrap justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
                <select id="property-type" class="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Tipo de Propiedad</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="terreno">Terreno</option>
                </select>
                <select id="location" class="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Ubicación</option>
                    <option value="centro">Centro</option>
                    <option value="norte">Norte</option>
                    <option value="sur">Sur</option>
                </select>
                <button id="apply-filters" class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-transform transform duration-300 hover:scale-105">Aplicar Filtros</button>
            </div>
            
            <!-- Property Grid -->
            <div class="property-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                ${properties.map(property => `
                    <div class="property-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <img src="https://via.placeholder.com/400x300?text=${encodeURIComponent(property.title)}" alt="${property.title}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                            <p class="text-gray-600 mb-4">${property.description}</p>
                            <p class="text-2xl font-bold text-blue-600 mb-6">$${property.price.toLocaleString()}</p>
                            <button class="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full hover:bg-yellow-300 transition-transform transform duration-300 hover:scale-105 show-lead-form" data-id="${property.id}">Contactar</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Animation for transition effect
    setTimeout(() => {
        container.querySelector('.page-transition').classList.add('active');
    }, 100);

    // Event listener for filters
    container.querySelector('#apply-filters').addEventListener('click', () => {
        const type = container.querySelector('#property-type').value;
        const location = container.querySelector('#location').value;
        console.log('Filtering properties:', { type, location });
    });
}