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

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display = 'none';
    });

    // Initialize all modules
    initializeSliders();
    setupPropertyFilters();
    setupGalleryModal();
    setupContactForm();
    loadYouTubeVideos();
    loadTestimonials();
    loadFAQ();
    loadInstagramFeed();
    setupPWAInstallation();
    initializeChatbot();
    setupScrollEffects();
});