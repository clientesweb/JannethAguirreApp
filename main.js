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

document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Initialize all modules
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

        // Remove preloader after all modules are initialized
        document.querySelector('.preloader').style.display = 'none';
    } catch (error) {
        console.error('Error initializing modules:', error);
        // Remove preloader even if there's an error, to prevent it from being stuck
        document.querySelector('.preloader').style.display = 'none';
    }
});

// Fallback to remove preloader if it's still visible after 10 seconds
setTimeout(() => {
    if (document.querySelector('.preloader').style.display !== 'none') {
        console.warn('Preloader removed by timeout');
        document.querySelector('.preloader').style.display = 'none';
    }
}, 10000);