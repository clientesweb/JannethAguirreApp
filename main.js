import { initializeSliders } from './modules/sliders.js';
import { setupPropertyFilters } from './modules/propertyFilters.js';
import { setupGalleryModal } from './modules/galleryModal.js';
import { setupContactForm } from './modules/contactForm.js';
import { loadYouTubeVideos } from './modules/youtubeVideos.js';
import { loadTestimonials } from './modules/testimonials.js';
import { loadFAQ } from './modules/faq.js';
import { loadInstagramFeed } from './modules/instagramFeed.js';
import { setupPWAInstallation } from './modules/pwaInstallation.js';
import { initializeChatbot } from './modules/chatbot.js';
import { setupScrollEffects } from './modules/scrollEffects.js';

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300); // Espera a que termine la transición antes de ocultarlo completamente
    }
}

async function initializeModules() {
    try {
        await Promise.all([
            initializeSliders(),
            setupPropertyFilters(),
            setupGalleryModal(),
            setupContactForm(),
            loadYouTubeVideos(),
            loadTestimonials(),
            loadFAQ(),
            loadInstagramFeed(),
            setupPWAInstallation(),
            initializeChatbot(),
            setupScrollEffects()
        ]);
    } catch (error) {
        console.error('Error initializing modules:', error);
    } finally {
        hidePreloader();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeModules();
});

// Fallback para ocultar el preloader si tarda demasiado
setTimeout(hidePreloader, 10000);