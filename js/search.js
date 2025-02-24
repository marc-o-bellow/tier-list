const searchInput = document.querySelector('.search-input');
const gameCards = document.querySelectorAll('.game-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    gameCards.forEach(card => {
        const gameTitle = card.getAttribute('alt') || 
                        card.querySelector('img').getAttribute('alt') || 
                        '';
        const isVisible = gameTitle.toLowerCase().includes(searchTerm);
        card.style.display = isVisible ? 'flex' : 'none';
    });
}); 