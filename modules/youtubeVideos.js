export function loadYouTubeVideos() {
    const youtubeChannelId = 'UCiahlQJxCgPY-tEfjvkab8g';
    const youtubeApiKey = 'YOUR_YOUTUBE_API_KEY';
    const youtubeSlider = document.getElementById('youtube-slider');

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=6&type=video`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnailUrl = item.snippet.thumbnails.medium.url;

                const div = document.createElement('div');
                div.className = 'youtube-video bg-white rounded-lg shadow-md overflow-hidden';
                div.innerHTML = `
                    <div class="aspect-w-16 aspect-h-9">
                        <img src="${thumbnailUrl}" alt="${title}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <button class="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center" onclick="playVideo('${videoId}')">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-2">${title}</h3>
                        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Ver en YouTube</a>
                    </div>
                `;
                youtubeSlider.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
}

window.playVideo = function(videoId) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-4 max-w-4xl w-full">
            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="w-full h-full"></iframe>
            </div>
            <button class="mt-4 bg-red-600 text-white px-4 py-2 rounded" onclick="closeVideoModal()">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

window.closeVideoModal = function() {
    const modal = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-75');
    if (modal) {
        modal.remove();
    }
}