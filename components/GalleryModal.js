class GalleryModal {
    constructor() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const modal = document.getElementById('gallery-modal');
        modal.innerHTML = `
            <div class="fixed inset-0 bg-black bg-opacity-75 hidden justify-center items-center z-50">
                <div class="modal-content bg-white rounded-lg p-4 max-w-4xl w-full shadow-lg">
                    <span id="close-modal" class="cursor-pointer text-gray-500 float-right text-2xl">&times;</span>
                    <h2 id="modal-title" class="text-2xl font-bold mb-4"></h2>
                    <div id="modal-gallery" class="mb-4"></div>
                    <div id="modal-description" class="mb-4"></div>
                    <div id="modal-features" class="mb-4"></div>
                    <button id="contact-button" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">Contactar</button>
                </div>
            </div>
        `;
    }

    addEventListeners() {
        document.addEventListener('showGalleryModal', (e) => this.showModal(e.detail));
        document.getElementById('close-modal').addEventListener('click', () => this.hideModal());
        document.getElementById('contact-button').addEventListener('click', () => this.contactAgent());
    }

    showModal(property) {
        const modal = document.querySelector('#gallery-modal > div');
        document.getElementById('modal-title').textContent = property.title;
        this.renderGallery(property.gallery);
        document.getElementById('modal-description').textContent = property.description;
        this.renderFeatures(property.features);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    hideModal() {
        const modal = document.querySelector('#gallery-modal > div');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    renderGallery(images) {
        const gallery = document.getElementById('modal-gallery');
        gallery.innerHTML = `
            <div class="slick-gallery">
                ${images.map(image => `<img src="${image}" alt="Propiedad" class="w-full h-64 object-cover">`).join('')}
            </div>
        `;
        $('.slick-gallery').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }

    renderFeatures(features) {
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = `
            <h3 class="text-xl font-bold mb-2">Características:</h3>
            <ul class="list-disc pl-5">
                ${features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }

    contactAgent() {
        // Implementar lógica para contactar al agente
        console.log('Contactando al agente...');
    }
}