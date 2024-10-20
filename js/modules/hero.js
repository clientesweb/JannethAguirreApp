export function initHero() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="relative h-[calc(100vh-80px)] overflow-hidden fade-in-section">
            <div class="hero-slider absolute inset-0">
                <div style="background-image: url('https://via.placeholder.com/1920x1080?text=Slide+1')"></div>
                <div style="background-image: url('https://via.placeholder.com/1920x1080?text=Slide+2')"></div>
                <div style="background-image: url('https://via.placeholder.com/1920x1080?text=Slide+3')"></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center z-10">
                <div class="text-center text-white p-4">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Encuentra tu hogar ideal</h1>
                    <p class="text-xl md:text-2xl mb-6 drop-shadow-lg">Lo mejor en Bienes Raíces en el Ecuador</p>
                    <a href="#propiedades" class="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">Ver Propiedades</a>
                </div>
            </div>
        </div>
    `;

    $('.hero-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });
}
