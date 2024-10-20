export function initFeaturedProperties() {
    const featuredProperties = document.getElementById('featured-properties');
    featuredProperties.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Propiedades Destacadas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${generatePropertyCards(3)}
            </div>
        </div>
    `;

    initPropertyCards();
}

function generatePropertyCards(count) {
    let cards = '';
    for (let i = 0; i < count; i++) {
        cards += `
            <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/400x300?text=Propiedad+${i+1}" alt="Propiedad ${i+1}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">Propiedad ${i+1}</h3>
                    <p class="text-gray-600 mb-4">Descripción breve de la propiedad ${i+1}.</p>
                    <div class="flex justify-between items-center">
                        <span class="text-primary font-bold">$${(Math.random() * 500000 + 100000).toFixed(2)}</span>
                        <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Ver Detalles</button>
                    </div>
                </div>
            </div>
        `;
    }
    return cards;
}

function initPropertyCards() {
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => {
        card.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para mostrar más detalles de la propiedad
            console.log('Mostrar detalles de la propiedad');
        });
    });
}
