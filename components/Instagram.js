class Instagram {
    constructor() {
        this.instagramPosts = [
            { image: 'https://picsum.photos/300/300?random=1', likes: 120, comments: 15 },
            { image: 'https://picsum.photos/300/300?random=2', likes: 95, comments: 8 },
            { image: 'https://picsum.photos/300/300?random=3', likes: 150, comments: 22 },
            { image: 'https://picsum.photos/300/300?random=4', likes: 80, comments: 5 },
            { image: 'https://picsum.photos/300/300?random=5', likes: 200, comments: 30 },
            { image: 'https://picsum.photos/300/300?random=6', likes: 110, comments: 12 },
        ];
        this.render();
    }

    render() {
        const instagram = document.getElementById('instagram');
        instagram.innerHTML = `
            <div class="py-16 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Síguenos en Instagram</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                        ${this.instagramPosts.map(post => this.createInstagramPost(post)).join('')}
                    </div>
                    <div class="text-center mt-8">
                        <a href="https://www.instagram.com/jannethaguirrebienesraices" target="_blank" rel="noopener noreferrer" class="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                            Ver más en Instagram
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    createInstagramPost(post) {
        return `
            <div class="instagram-post relative overflow-hidden rounded-lg">
                <img src="${post.image}" alt="Instagram post" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div class="text-white text-center">
                        <p><i class="fas fa-heart"></i> ${post.likes}</p>
                        <p><i class="fas fa-comment"></i> ${post.comments}</p>
                    </div>
                </div>
            </div>
        `;
    }
}