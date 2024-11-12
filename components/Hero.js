class Hero {
    constructor() {
        this.heroImages = [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
        ];
        this.render();
        this.initSlider();
    }

    render() {
        const hero = document.getElementById('hero');
        hero.innerHTML = `
            <div class="relative h-[calc(100vh-80px)] overflow-hidden fade-in-section">
                <div class="hero-slider absolute inset-0">
                    ${this.heroImages.map(image => `
                        <div style="background-image: url(${image}); background-size: cover; background-position: center;"></div>
                    `).join('')}
                </div>
                <div class="absolute inset-0 flex items-center justify-center z-10">
                    <div class="text-center text-white p-4">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Encontrá Tu Hogar Especial</h1>
                        <p class="text-xl md:text-2xl mb-6 drop-shadow-lg">Lo mejor de Bienes Raices en Ecuador y en el Mundo.</p>
                        <a href="#propiedades" class="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">Ver Propiedades</a>
                    </div>
                </div>
            </div>
        `;
    }

    initSlider() {
        $('.hero-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000
        });
    }
}