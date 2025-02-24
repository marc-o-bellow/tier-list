import { gamesDatabase } from './database.js';

class TierList {
    constructor() {
        this.container = document.querySelector('.tier-container');
        this.initializeTiers();
    }

    initializeTiers() {
        // Очищаем существующие игры
        const tierGames = document.querySelectorAll('.tier-games');
        tierGames.forEach(tier => tier.innerHTML = '');

        // Добавляем игры из базы данных
        Object.values(gamesDatabase).forEach(game => {
            const tierElement = document.querySelector(`.${game.tier}-tier .tier-games`);
            if (tierElement) {
                tierElement.appendChild(this.createGameCard(game));
            }
        });
    }

    createGameCard(game) {
        const card = document.createElement('a');
        card.href = game.hasCustomPage ? `games/${game.id}.html` : '#';
        card.className = 'game-card';
        card.dataset.gameId = game.id;

        card.addEventListener('click', (e) => {
            if (!game.hasCustomPage) {
                e.preventDefault();
                this.showGameDetails(game);
            }
        });

        card.innerHTML = `
            <img src="${game.icon}" alt="${game.name}">
            <div class="game-tooltip">
                ${game.description}
            </div>
        `;

        return card;
    }

    showGameDetails(game) {
        // Создаем модальное окно с подробной информацией об игре
        const modal = document.createElement('div');
        modal.className = 'game-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${game.name}</h2>
                <img src="${game.icon}" alt="${game.name}" class="modal-icon">
                <p>${game.description}</p>
                <div class="game-info">
                    <p><strong>Разработчик:</strong> ${game.developer}</p>
                    <p><strong>Дата выхода:</strong> ${game.releaseDate}</p>
                    <p><strong>Жанры:</strong> ${game.genre.join(', ')}</p>
                    <p><strong>Рейтинг:</strong> ${game.rating}/10</p>
                </div>
                <button class="modal-close">Закрыть</button>
            </div>
        `;

        document.body.appendChild(modal);
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
    }
}

export { TierList }; 