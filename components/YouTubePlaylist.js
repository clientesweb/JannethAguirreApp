class YouTubePlaylist {
    constructor() {
        this.playlistId = 'PLYqZUjZFOKZBZZXXXXXXXXXXXXXXXXXXX'; // Replace with your actual YouTube playlist ID
        this.render();
        this.loadVideos();
    }

    render() {
        const youtubePlaylist = document.getElementById('youtube-playlist');
        youtubePlaylist.innerHTML = `
            <div class="py-16 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Nuestros Videos</h2>
                    <div id="youtube-videos" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                </div>
            </div>
        `;
    }

    loadVideos() {
        // In a real implementation, you would use the YouTube Data API to fetch videos
        // For this example, we'll use placeholder data
        const placeholderVideos = [
            { id: '1', title: 'Tour de Casa en Samborondón', thumbnail: 'https://img.youtube.com/vi/XXXXXXXXXXX/0.jpg' },
            { id: '2', title: 'Apartamento de Lujo en Cuenca', thumbnail: 'https://img.youtube.com/vi/XXXXXXXXXXX/0.jpg' },
            { id: '3', title: 'Inversión Inmobiliaria en Ecuador', thumbnail: 'https://img.youtube.com/vi/XXXXXXXXXXX/0.jpg' },
        ];

        const videosContainer = document.getElementById('youtube-videos');
        placeholderVideos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'youtube-video';
            videoElement.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover mb-2">
                <h3 class="font-semibold">${video.title}</h3>
            `;
            videoElement.addEventListener('click', () => this.openVideo(video.id));
            videosContainer.appendChild(videoElement);
        });
    }

    openVideo(videoId) {
        // In a real implementation, you would open the YouTube video
        console.log(`Opening video with ID: ${videoId}`);
    }
}