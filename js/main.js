// Importar módulos
import { initHeader } from './modules/header.js';
import { initHero } from './modules/hero.js';
import { initFeaturedProperties } from './modules/featured-properties.js';
import { initServices } from './modules/services.js';
import { initPropertyStore } from './modules/property-store.js';
import { initYouTubePlaylist } from './modules/youtube-playlist.js';
import { initTestimonials } from './modules/testimonials.js';
import { initInstagramFeed } from './modules/instagram-feed.js';
import { initFAQs } from './modules/faqs.js';
import { initLocationMap } from './modules/location-map.js';
import { initContactForm } from './modules/contact-form.js';
import { initFooter } from './modules/footer.js';
import { initScrollAnimation } from './modules/scroll-animation.js';
import { initBackToTopButton } from './modules/back-to-top.js';
import { initImageGallery } from './modules/image-gallery.js';
import { initPWAInstallation } from './modules/pwa-installation.js';

// Función para inicializar todos los módulos
function initializeModules() {
    initHeader();
    initHero();
    initFeaturedProperties();
    initServices();
    initPropertyStore();
    initYouTubePlaylist();
    initTestimonials();
    initInstagramFeed();
    initFAQs();
    initLocationMap();
    initContactForm();
    initFooter();
    initScrollAnimation();
    initBackToTopButton();
    initImageGallery();
    initPWAInstallation();
}

// Evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initializeModules();
});

// Lazy loading de imágenes
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        let active = false;

        const lazyLoad = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function(image) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
    }
});

// Remover el preloader cuando la página esté completamente cargada
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
});
