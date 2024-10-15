export function setupGalleryModal() {
    document.querySelectorAll('.view-gallery').forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.dataset.id;
            openGallery(propertyId);
        });
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('gallery-modal').classList.add('hidden');
        document.getElementById('gallery-modal').classList.remove('flex');
    });
}

function openGallery(propertyId) {
    // Implement the gallery opening logic here
    // This function should fetch the property details and images, then display them in the modal
}