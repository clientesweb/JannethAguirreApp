export function initYouTubePlaylist() {
    const youtubePlaylist = document.getElementById('youtube-playlist');
    youtubePlaylist.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Nuestros Videos</h2>
            <div class="youtube-slider">
                ${generateYouTubeVideos(5)}
            </div>
        </div>
    `;

    initYouTubeSlider();
}

function generateYouTubeVideos(count) {
    let videos = '';
    for (let i = 0; i < count; i++) {
        videos += `
            <div class="youtube-video">
                <iframe width="300" height="169" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3 class="text-lg font-semibold mt-2">Video ${i+1}</h3>
                <p class="text-gray-600">Descripción breve del video ${i+1}.</p>
            </div>
        `;
    }
    return videos;
}

function initYouTubeSlider() {
    $('.youtube-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
