export function renderHome(container) {
    container.innerHTML = `
        <div class="home-container">
            <section class="hero bg-blue-600 text-white p-12 rounded-lg mb-8">
                <h2 class="text-4xl font-bold mb-4">Encuentra la casa de tus sueños</h2>
                <p class="text-xl mb-6">Explora nuestra selección de propiedades exclusivas</p>
                <a href="/properties" class="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300" data-link>Ver Propiedades</a>
            </section>
            
            <section class="featured-properties mb-8">
                <h2 class="text-3xl font-bold mb-4">Propiedades Destacadas</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${generatePropertyCards(3)}
                </div>
            </section>
            
            <section class="about-us bg-gray-200 p-8 rounded-lg">
                <h2 class="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                <p class="mb-4">Con más de 15 años de experiencia, Janneth Aguirre Bienes Raíces es tu mejor opción para encontrar el hogar perfecto.</p>
                <a href="/contact" class="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition duration-300" data-link>Contáctanos</a>
            </section>
        </div>
    `;
}

function generatePropertyCards(count) {
    let cards = '';
    for (let i = 0; i < count; i++) {
        cards += `
            <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/placeholder.svg?height=200&width=300" alt="Propiedad ${i + 1}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-bold mb-2">Hermosa Casa en Venta</h3>
                    <p class="text-gray-600 mb-4">3 habitaciones | 2 baños | 150m²</p>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 show-lead-form">Ver Detalles</button>
                </div>
            </div>
        `;
    }
    return cards;
}
