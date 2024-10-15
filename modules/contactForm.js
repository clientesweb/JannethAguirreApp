export function setupContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Implement form validation here
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        this.reset();
    });
}