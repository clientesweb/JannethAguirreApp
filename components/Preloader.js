class Preloader {
    constructor() {
        this.render();
        this.init();
    }

    render() {
        const preloader = document.getElementById('preloader');
        preloader.innerHTML = `
            <div class="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div class="relative">
                    <img src="/img/Logo-Janneth-Aguirre-2020-ecuador.png" alt="Logo Janneth Aguirre" width="128" height="128" class="w-32 h-32">
                    <div class="absolute inset-0 border-4 border-primary rounded-full animate-pulse"></div>
                </div>
            </div>
        `;
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none';
            }, 1000);
        });
    }
}