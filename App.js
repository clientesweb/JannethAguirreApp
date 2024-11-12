class App {
    constructor() {
        this.render();
        this.initializeComponents();
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
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new App();
});