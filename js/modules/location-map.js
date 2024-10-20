export function initLocationMap() {
    const locationMap = document.getElementById('location-map');
    locationMap.innerHTML = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-3xl font-bold text-center mb-12">Nuestra Ubicación</h2>
            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.9168241279!2d-79.8890662!3d-2.1894128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTEnMjEuOSJTIDc5wrA1MycyMC42Ilc!5e0!3m2!1sen!2sec!4v1620000000000!5m2!1sen!2sec" 
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="mt-8 text-center">
                <p class="text-xl">Visítanos en nuestra oficina en Guayaquil, Ecuador</p>
                <p class="text-gray-600">Dirección: [Insertar dirección exacta aquí]</p>
            </div>
        </div>
    `;
}
