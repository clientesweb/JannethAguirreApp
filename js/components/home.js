export function renderHome(container) {
    container.innerHTML = `
        <div class="home-container">
            <section class="hero-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="hero-content bg-blue-900 text-white p-12 rounded-lg mb-8" style="background-image: url('img/hero-1.jpg'); background-size: cover; background-position: center;">
                            <div class="bg-black bg-opacity-50 p-8 rounded-lg">
                                <h2 class="text-4xl font-bold mb-4">Encuentra la casa de tus sueños</h2>
                                <p class="text-xl mb-6">Explora nuestra selección de propiedades exclusivas</p>
                                <a href="/properties" class="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300" data-link>Ver Propiedades</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="hero-content bg-blue-900 text-white p-12 rounded-lg mb-8" style="background-image: url('img/hero-2.jpg'); background-size: cover; background-position: center;">
                            <div class="bg-black bg-opacity-50 p-8 rounded-lg">
                                <h2 class="text-4xl font-bold mb-4">Inversiones inteligentes en bienes raíces</h2>
                                <p class="text-xl mb-6">Descubre oportunidades únicas en el mercado inmobiliario</p>
                                <a href="/contact" class="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300" data-link>Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </section>
            
            <section class="featured-properties mb-8">
                <h2 class="text-3xl font-bold mb-4 text-center">Propiedades Destacadas</h2>
                <div class="properties-slider swiper-container">
                    <div class="swiper-wrapper">
                        ${generatePropertyCards(6)}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </section>
            
            <section class="about-us bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-2xl font-bold mb-4 text-center">Sobre Nosotros</h2>
                <p class="mb-4 text-center">Con más de 15 años de experiencia, Janneth Aguirre Bienes Raíces es tu mejor opción para encontrar el hogar perfecto. Nuestro equipo de expertos está comprometido con brindar un servicio excepcional y personalizado a cada uno de nuestros clientes.</p>
                <div class="text-center">
                    <a href="/contact" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition duration-300" data-link>Contáctanos</a>
                </div>
            </section>
        </div>
    `;
}

function generatePropertyCards(count) {
    let cards = '';
    for (let i = 0; i < count; i++) {
        cards += `
            <div class="swiper-slide">
                <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="img/properties/property-${(i % 3) + 1}.jpg" alt="Propiedad ${i + 1}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-xl font-bold mb-2">Hermosa Casa en Venta</h3>
                        <p class="text-gray-600 mb-4">3 habitaciones | 2 baños | 150m²</p>
                        <p class="text-2xl font-bold text-blue-600 mb-4">$250,000</p>
                        <button class="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300 show-lead-form">Ver Detalles</button>
                    </div>
                </div>
            </div>
        `;
    }
    return cards;
}