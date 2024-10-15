export function setupPropertyFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const propertyCards = document.querySelectorAll('.property-card');
            propertyCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}