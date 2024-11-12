class InvestReasons {
    constructor() {
        this.investReasons = {
            samborondon: [
                "Samborondón, el corazón económico de la región, donde la inversión y el progreso se unen.",
                "Descubre Samborondón, el destino más próspero para invertir en Ecuador, con crecimiento sostenible y estabilidad.",
                "Samborondón, ciudad innovadora y emprendedora, impulsa tus negocios con infraestructura y tecnología de vanguardia.",
                "Invierte en Samborondón y aprovecha su ubicación estratégica",
                "Samborondón, líder en desarrollo urbano y calidad de vida, ofrece oportunidades ilimitadas para compradores e inversores.",
                "La economía en crecimiento y la inversión constante convierten a Samborondón en un polo de atracción para empresarios.",
                "Samborondón, ciudad de oportunidades, donde la inversión en bienes raíces, comercio y servicios florece.",
                "El clima y la geografía de Samborondón ofrecen un entorno ideal para vivir, trabajar e invertir.",
                "Samborondón, un lugar donde  la innovación y la tecnología se unen para impulsar el crecimiento económico.",
                "Invierte en Samborondón y sé parte de una comunidad próspera y en constante  crecimiento, con un futuro brillante."
            ],
            usa: [
                "Estados Unidos ofrece un mercado inmobiliario estable y diversificado para inversores internacionales.",
                "Benefíciate de un sistema legal robusto que protege los derechos de propiedad de los inversores extranjeros.",
                "Accede a oportunidades de inversión en ciudades de rápido crecimiento y mercados emergentes en todo el país.",
                "Aprovecha las tasas de interés históricamente bajas para financiar tus inversiones inmobiliarias.",
                "Diversifica tu portafolio con propiedades en una de las economías más grandes y estables del mundo.",
                "Explora opciones de inversión en sectores de alto rendimiento como tecnología, salud y educación.",
                "Benefíciate de la apreciación a largo plazo del mercado inmobiliario estadounidense.",
                "Accede a un mercado de alquileres robusto, especialmente en áreas metropolitanas y destinos turísticos.",
                "Aprovecha las oportunidades en el mercado de propiedades comerciales y de uso mixto en crecimiento.",
                "Invierte en un país con una infraestructura de clase mundial y una economía impulsada por la innovación."
            ],
            panama: [
                "Panamá, el corazón de América, donde la inversión y el progreso se unen en un solo ritmo.",
                "Descubre el potencial de Panamá, el hub de inversión más dinámico de América Latina.",
                "Panamá, donde la estrategia y la innovación se encuentran en el centro de la inversión internacional.",
                "Invierte en Panamá y aprovecha su posición geográfica única, conectando América del Norte y del Sur.",
                "Panamá, el destino perfecto para inversores que buscan crecimiento y estabilidad en América.",
                "El Canal de Panamá, un símbolo de progreso y conexión global, impulse su inversión en este hub clave.",
                "Panamá, donde la inversión en infraestructura y tecnología impulsa el crecimiento económico sostenible.",
                "Unirse a la comunidad de inversores en Panamá, donde la innovación y el emprendimiento florecen.",
                "Panamá, el lugar donde la inversión y la diversificación se unen para crear oportunidades ilimitadas.",
                "Panamá, el futuro de la inversión en América, donde la visión y la acción se unen para crear un mañana próspero."
            ]
        };
        this.render();
        this.addEventListeners();
    }

    render() {
        const investReasons = document.getElementById('invest-reasons');
        investReasons.innerHTML = `
            <div class="py-16 bg-gray-100 fade-in-section">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-8 text-primary">¿Por qué invertir?</h2>
                    <div id="invest-samborondon" class="mb-8"></div>
                    <div id="invest-usa" class="mb-8"></div>
                    <div id="invest-panama" class="mb-8"></div>
                </div>
            </div>
        `;
        this.createAccordion('invest-samborondon', 'Invertir en Samborondón', this.investReasons.samborondon, 'https://flagcdn.com/w40/ec.png');
        this.createAccordion('invest-usa', 'Invertir en Estados Unidos', this.investReasons.usa, 'https://flagcdn.com/w40/us.png');
        this.createAccordion('invest-panama', 'Invertir en Panamá', this.investReasons.panama, 'https://flagcdn.com/w40/pa.png');
    }

    createAccordion(containerId, title, reasons, flagUrl) {
        const container = document.getElementById(containerId);
        const accordionHeader = document.createElement('div');
        accordionHeader.className = 'flex items-center cursor-pointer mb-4';
        accordionHeader.innerHTML = `
            <img src="${flagUrl}" alt="Bandera" class="w-8 h-8 mr-2">
            <h3 class="text-xl font-bold">${title}</h3>
            <i class="fas fa-chevron-down ml-auto"></i>
        `;
        container.appendChild(accordionHeader);

        const accordionContent = document.createElement('div');
        accordionContent.className = 'hidden';
        reasons.forEach(reason => {
            const reasonElement = document.createElement('p');
            reasonElement.className = 'mb-2';
            reasonElement.textContent = reason;
            accordionContent.appendChild(reasonElement);
        });
        container.appendChild(accordionContent);
    }

    addEventListeners() {
        const accordions = document.querySelectorAll('#invest-reasons .flex.items-center');
        accordions.forEach(accordion => {
            accordion.addEventListener('click', () => {
                const content = accordion.nextElementSibling;
                content.classList.toggle('hidden');
                accordion.querySelector('i').classList.toggle('fa-chevron-down');
                accordion.querySelector('i').classList.toggle('fa-chevron-up');
            });
        });
    }
}