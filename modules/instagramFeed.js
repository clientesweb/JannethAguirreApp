export function loadInstagramFeed() {
    const instagramPosts = [
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE1/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE2/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE3/' },
        { type: 'reel', url: 'https://www.instagram.com/reel/EXAMPLE4/' },
        { type: 'post', url: 'https://www.instagram.com/p/EXAMPLE5/' }
    ];

    const instagramSlider = document.getElementById('instagram-slider');

    instagramPosts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'instagram-post';
        div.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="${post.url}" data-instgrm-version="14">
                <a href="${post.url}" target="_blank" rel="noopener noreferrer">Ver en Instagram</a>
            </blockquote>
        `;
        instagramSlider.appendChild(div);
    });

    $('.instagram-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Cargar el script de Instagram
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(instagramScript);
}