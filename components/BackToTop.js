class BackToTop {
    constructor() {
        this.render();
        this.addEventListeners();
    }

    render() {
        const backToTop = document.getElementById('back-to-top');
        backToTop.innerHTML = `
            <button class="fixed bottom-20 right-4 z-40 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors hidden">
                <i class="fas fa-chevron-up"></i>
            </button>
        `;
    }

    addEventListeners() {
        const backToTopButton = document.getElementById('back-to-top');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
