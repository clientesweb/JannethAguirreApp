export function initServices() {
    const services = document.getElementById('services');
    services.innerHTML = `
        <div class="container mx-auto px-4 py-16 bg-gray-100">
            <h2 class="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${generateServiceCards()}
            </div>
        </div>
    `;
}

function generateServiceCards() {
    const services = [
        { icon: 'fa-home', title: 'Compra de Propiedades', description: 'Te ayudamos a encontrar la propiedad perfecta para ti.' },
        { icon: 'fa-key', title: 'Venta de Propiedades', description: 'Maximizamos el valor de tu propiedad en el mercado.' },
        { icon: 'fa-chart-line', title: 'Inversiones Inmobiliarias', description: 'Asesoramiento experto para tus inversiones en bienes raíces.' },
        { icon: 'fa-building', title: 'Administración de Propiedades', description: 'Gestionamos tu propiedad para que tú no tengas que preocuparte.' },
        { icon: 'fa-search', title: 'Evaluación de Propiedades', description: 'Tasaciones precisas y profesionales de tu propiedad.' },
        { icon: 'fa-handshake', title: 'Asesoría Legal', description: 'Te guiamos en todos los aspectos legales de tus transacciones inmobiliarias.' }
    ];

    return services.map(service => `
        <div class="service-card">
            <i class="fas ${service.icon} text-4xl text-primary mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        </div>
    `).join('');
}
