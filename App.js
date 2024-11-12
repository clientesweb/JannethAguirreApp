class App {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.render();
            this.initializeComponents();
        });
    }

    render() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div id="preloader"></div>
            <header id="header"></header>
            <main id="main-content">
                <section id="hero"></section>
                <section id="about-us"></section>
                <section id="featured-properties"></section>
                <section id="services"></section>
                <section id="properties"></section>
                <section id="invest-reasons"></section>
                <div id="gallery-modal"></div>
                <section id="youtube-playlist"></section>
                <section id="testimonials"></section>
                <section id="instagram"></section>
                <section id="faqs"></section>
                <section id="map"></section>
                <section id="contact"></section>
            </main>
            <footer id="footer"></footer>
            <div id="chatbot"></div>
            <a id="whatsapp-button"></a>
            <nav id="bottom-nav"></nav>
            <button id="back-to-top"></button>
        `;
    }

    initializeComponents() {
        // Usamos un try-catch para diagnosticar problemas de inicialización
        try {
            new Preloader();
            new Header();
            new Hero();
            new AboutUs();
            new FeaturedProperties();
            new Services();
            new Properties();
            new InvestReasons();
            new GalleryModal();
            new YouTubePlaylist();
            new Testimonials();
            new Instagram();
            new FAQs();
            new Map();
            new Contact();
            new Footer();
            new ChatBot();
            new WhatsAppButton();
            new BottomNav();
            new BackToTop();
        } catch (error) {
            console.error("Error inicializando los componentes:", error);
        }
    }
}

// Inicializar la app
new App();