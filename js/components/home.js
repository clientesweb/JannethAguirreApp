export function renderHome(container) {
    container.innerHTML = `
        <div class="home-container page-transition">
            <!-- Hero Section -->
            <section class="hero-slider swiper-container mb-8">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="hero-content rounded-lg shadow-lg overflow-hidden" style="background-image: url('https://via.placeholder.com/1200x600?text=Hero+Image+1'); background-size: cover; background-position: center;">
                            <div class="bg-white bg-opacity-90 p-6 md:p-10 lg:p-12 rounded-xl max-w-3xl mx-auto text-center">
                                <h2 class="text-3xl md:text-5xl font-bold mb-4">Encuentra la casa de tus sueños</h2>
                                <p class="text-lg md:text-xl mb-6">Explora nuestra selección de propiedades exclusivas</p>
                                <a href="/properties" class="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300 inline-block" data-link>Ver Propiedades</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="hero-content rounded-lg shadow-lg overflow-hidden" style="background-image: url('https://via.placeholder.com/1200x600?text=Hero+Image+2'); background-size: cover; background-position: center;">
                            <div class="bg-white bg-opacity-90 p-6 md:p-10 lg:p-12 rounded-xl max-w-3xl mx-auto text-center">
                                <h2 class="text-3xl md:text-5xl font-bold mb-4">Inversiones inteligentes en bienes raíces</h2>
                                <p class="text-lg md:text-xl mb-6">Descubre oportunidades únicas en el mercado inmobiliario</p>
                                <a href="/contact" class="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition duration-300 inline-block" data-link>Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </section>
            
            <!-- Featured Properties Section -->
            <section class="featured-properties mb-12">
                <h2 class="text-2xl md:text-4xl font-bold mb-8 text-center">Propiedades Destacadas</h2>
                <div class="properties-slider swiper-container">
                    <div class="swiper-wrapper">
                        ${generatePropertyCards(6)}
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </section>
            
            <!-- About Us Section -->
            <section class="about-us bg-white p-6 md:p-8 lg:p-10 rounded-xl shadow-md mb-12">
                <h2 class="text-2xl md:text-4xl font-bold mb-6 text-center">Sobre Nosotros</h2>
                <p class="mb-8 text-center max-w-2xl mx-auto text-sm md:text-lg text-gray-600">Con más de 15 años de experiencia, Janneth Aguirre Bienes Raíces es tu mejor opción para encontrar el hogar perfecto. Nuestro equipo de expertos está comprometido con brindar un servicio excepcional y personalizado a cada uno de nuestros clientes.</p>
                <div class="text-center">
                    <a href="/contact" class="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300" data-link>Contáctanos</a>
                </div>
            </section>
        </div>
    `;
    
    setTimeout(() => {
        container.querySelector('.page-transition').classList.add('active');
    }, 100);

    initializeSwiper();
}

function generatePropertyCards(count) {
    let cards = '';
    for (let i = 0; i < count; i++) {
        cards += `
            <div class="swiper-slide">
                <div class="property-card rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 duration-300">
                    <img src="https://via.placeholder.com/400x300?text=Property+${i + 1}" alt="Propiedad ${i + 1}" class="w-full h-48 object-cover rounded-t-xl">
                    <div class="p-4">
                        <h3 class="text-lg md:text-xl font-bold mb-2">Hermosa Casa en Venta</h3>
                        <p class="text-sm md:text-base text-gray-600 mb-4">3 habitaciones | 2 baños | 150m²</p>
                        <p class="text-xl md:text-2xl font-bold text-blue-600 mb-4">$250,000</p>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400 transition duration-300 show-lead-form">Ver Detalles</button>
                    </div>
                </div>
            </div>
        `;
    }
    return cards;
}

function initializeSwiper() {
    new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    new Swiper('.properties-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}