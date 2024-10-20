export function initPropertyStore() {
    const propertyStore = document.getElementById('property-store');
    propertyStore.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Nuestras Propiedades</h2>
            <div id="filter-buttons" class="flex flex-wrap justify-center mb-8">
                <button class="filter-btn active" data-filter="all">Todas</button>
                <button class="filter-btn" data-filter="casa">Casas</button>
                <button class="filter-btn" data-filter="apartamento">Apartamentos</button>
                <button class="filter-btn" data-filter="terreno">Terrenos</button>
            </div>
            <input type="text" id="search-input" placeholder="Buscar propiedades..." class="w-full mb-8 p-2 border border-gray-300 rounded">
            <div id="property-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${generatePropertyCards(9)}
            </div>
        </div>
    `;

    initFilterButtons();
    initSearchInput();
}

function generatePropertyCards(count) {
    const types = ['casa', 'apartamento', 'terreno'];
    let cards = '';
    for (let i = 0; i < count; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        cards += `
            <div class="property-card" data-type="${type}">
                <img src="https://via.placeholder.com/400x300?text=Propiedad+${i+1}" alt="Propiedad ${i+1}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">Propiedad ${i+1}</h3>
                    <p class="text-gray-600 mb-2">${type.charAt(0).toUpperCase() + type.slice(1)}</p>
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

function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            propertyCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initSearchInput() {
    const searchInput = document.getElementById('search-input');
    const propertyCards = document.querySelectorAll('.property-card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        propertyCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
