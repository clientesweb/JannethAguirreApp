export function initInstagramFeed() {
    const instagramFeed = document.getElementById('instagram-feed');
    instagramFeed.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Síguenos en Instagram</h2>
            <div class="instagram-slider">
                ${generateInstagramPosts(6)}
            </div>
            <div class="text-center mt-8">
                <a href="https://www.instagram.com/jannethaguirrebienesraices" target="_blank" rel="noopener noreferrer" class="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                    Ver más en Instagram
                </a>
            </div>
        </div>
    `;

    initInstagramSlider();
}

function generateInstagramPosts(count) {
    let posts = '';
    for (let i = 0; i < count; i++) {
        posts += `
            <div class="instagram-post">
                <img src="https://via.placeholder.com/300x300?text=Instagram+Post+${i+1}" alt="Instagram Post ${i+1}" class="w-full h-full object-cover">
            </div>
        `;
    }
    return posts;
}

function initInstagramSlider() {
    $('.instagram-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
