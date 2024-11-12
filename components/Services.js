class Services {
    constructor() {
        this.services = [
            { title: "Asesoría Legal", icon: "fas fa-gavel", description: "Asistencia legal completa en transacciones inmobiliarias." },
            { title: "Avalúo de Propiedades", icon: "fas fa-chart-line", description: "Valoración profesional y precisa de bienes inmuebles." },
            { title: "Asesoría Dentro y Fuera de Ecuador", icon: "fas fa-globe-americas", description: "Orientación experta en inversiones nacionales e internacionales." },
            { title: "Gestión de Proyectos", icon: "fas fa-tasks", description: "Administración integral de proyectos inmobiliarios." },
            { title: "Análisis de Mercado", icon: "fas fa-search-dollar", description: "Estudios detallados del mercado inmobiliario actual." },
            { title: "Gestión de Ventas", icon: "fas fa-handshake", description: "Estrategias efectivas para la venta de propiedades." },
            { title: "Venta de Proyectos en Planos", icon: "fas fa-drafting-compass", description: "Comercialización de proyectos inmobiliarios en fase de planificación." },
            { title: "Gestión de Alquileres", icon: "fas fa-home", description: "Administración completa de propiedades en alquiler." }
        ];
        this.render();
    }

    render() {
        const services = document.getElementById('services');
        services.innerHTML = `
            <div class="bg-secondary py-16 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-white">Nuestros Servicios</h2>
                    <div id="service-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${this.services.map(service => this.createServiceCard(service)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    createServiceCard(service) {
        return `
            <div class="service-card bg-white p-6 rounded-lg shadow-md">
                <i class="${service.icon} text-4xl text-primary mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            </div>
        `;
    }
}