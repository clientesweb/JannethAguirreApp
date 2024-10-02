export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container mx-auto px-4 py-6 text-center">
            <p>&copy; ${new Date().getFullYear()} Janneth Aguirre Bienes Raíces. Todos los derechos reservados.</p>
        </div>
    `;
}