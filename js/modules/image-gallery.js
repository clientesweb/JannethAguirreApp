export function initImageGallery() {
    // Esta función se llamará cuando se haga clic en una imagen de propiedad
    // para mostrar una galería de imágenes en un modal
    const propertyImages = document.querySelectorAll('.property-card img');
    propertyImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            openImageGallery(img.src);
        });
    });
}

function openImageGallery(initialImage) {
    // Crea un modal con la galería de imágenes
    const modal = document.createElement('div');
    modal.id = 'gallery-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="modal-content bg-white p-4 rounded-lg max-w-3xl w-full">
            <div id="gallery-images" class="grid grid-cols-3 gap-4 mb-4"></div>
            <div id="full-image-container" class="hidden">
                <img id="full-image" src="" alt="Imagen completa" class="max-w-full max-h-full">
                <button id="prev-image" class="gallery-nav left-4">&lt;</button>
                <button id="next-image" class="gallery-nav right-4">&gt;</button>
            </div>
            <button id="close-gallery" class="mt-4 bg-primary text-white px-4 py-2 rounded">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Genera imágenes de muestra para la galería
    const galleryImages = document.getElementById('gallery-images');
    for (let i = 1; i <= 9; i++) {
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/150x150?text=Imagen+${i}`;
        img.alt = `Imagen ${i}`;
        img.className = 'w-full h-auto cursor-pointer';
        img.addEventListener('click', () => showFullImage(img.src));
        galleryImages.appendChild(img);
    }

    // Muestra la imagen inicial
    showFullImage(initialImage);

    // Cierra la galería
    document.getElementById('close-gallery').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Navegación entre imágenes
    document.getElementById('prev-image').addEventListener('click', showPrevImage);
    document.getElementById('next-image').addEventListener('click', showNextImage);
}

function showFullImage(src) {
    const fullImageContainer = document.getElementById('full-image-container');
    const fullImage = document.getElementById('full-image');
    fullImage.src = src;
    fullImageContainer.style.display = 'flex';
}

function showPrevImage() {
    const images = document.querySelectorAll('#gallery-images img');
    const currentSrc = document.getElementById('full-image').src;
    const currentIndex = Array.from(images).findIndex(img => img.src === currentSrc);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showFullImage(images[prevIndex].src);
}

function showNextImage() {
    const images = document.querySelectorAll('#gallery-images img');
    const currentSrc = document.getElementById('full-image').src;
    const currentIndex = Array.from(images).findIndex(img => img.src === currentSrc);
    const nextIndex = (currentIndex + 1) % images.length;
    showFullImage(images[nextIndex].src);
}
