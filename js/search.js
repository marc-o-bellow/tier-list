const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const gameTitle = card.querySelector('img').getAttribute('alt').toLowerCase();
        const gameTooltip = card.querySelector('.game-tooltip').textContent.toLowerCase();
        
        const isVisible = gameTitle.includes(searchTerm) || 
                         gameTooltip.includes(searchTerm);
        
        // Находим родительский tier для правильного отображения пустых тиров
        const tierGames = card.closest('.tier-games');
        card.style.display = isVisible ? 'flex' : 'none';
        
        // Проверяем, есть ли видимые карточки в текущем тире
        const hasVisibleCards = Array.from(tierGames.children)
            .some(card => card.style.display !== 'none');
        
        // Показываем или скрываем весь тир
        const tier = tierGames.closest('.tier');
        tier.style.display = hasVisibleCards ? 'flex' : 'none';
    });
});

// Сброс отображения при пустом поиске
searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        document.querySelectorAll('.tier').forEach(tier => {
            tier.style.display = 'flex';
        });
        document.querySelectorAll('.game-card').forEach(card => {
            card.style.display = 'flex';
        });
    }
}); 