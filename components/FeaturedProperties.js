class FeaturedProperties {
    constructor() {
        this.properties = [
            { 
                id: 1, 
                title: "DEPARTAMENTOS EN VENTA", 
                price: "NUEVO SAMBORONDON", 
                image: "img/nuevosamborombon.png", 
                type: "venta"
            },
            { 
                id: 2, 
                title: "DEPARTAMENTOS EN VENTA", 
                price: "ISLA MOCOLI", 
                image: "img/isla.png", 
                type: "venta"
            },
            { 
                id: 3, 
                title: "LOCALES COMERCIALES", 
                price: "Consultar", 
                image: "img/localescomerciales.png", 
                type: "alquiler"
            },
            { 
                id: 4, 
                title: "CASAS PERSONALIZADAS", 
                price: "Consultar", 
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80", 
                type: "venta"
            },
            { 
                id: 5, 
                title: "DEPARTAMENTOS EN CUENCA", 
                price: "Consultar", 
                image: "img/departamentoscuenca.png", 
                type: "venta"
            }
        ];
        this.render();
        this.initSlider();
    }

    render() {
        const featuredProperties = document.getElementById('featured-properties');
        featuredProperties.innerHTML = `
            <div class="py-16 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">Propiedades Destacadas</h2>
                    <div class="propiedades-slider overflow-x-auto whitespace-nowrap">
                        ${this.properties.map(property => this.createPropertyCard(property)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    createPropertyCard(property) {
        return `
            <div class="property-card">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${property.title}</h3>
                    <p class="text-gray-700 text-base mb-4">${property.price}</p>
                    <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors view-details" data-id="${property.id}">Ver Detalles</button>
                </div>
            </div>
        `;
    }

    initSlider() {
        $('.propiedades-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}