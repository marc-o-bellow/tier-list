// Пример структуры базы данных
const gamesDatabase = {
    "elden-ring": {
        id: "elden-ring",
        name: "Elden Ring",
        tier: "s",
        icon: "images/elden-ring-icon.png",
        description: "Захватывающая ролевая игра в открытом мире от FromSoftware. Исследуйте огромный мир и сразитесь с эпическими боссами.",
        hasCustomPage: true,
        releaseDate: "2022",
        developer: "FromSoftware",
        genre: ["Action RPG", "Open World"],
        rating: 9.5
    },
    "botw": {
        id: "botw",
        name: "The Legend of Zelda: Breath of the Wild",
        tier: "s",
        icon: "images/botw-icon.jpg",
        description: "Революционная игра с открытым миром, где вы исследуете королевство Хайрул.",
        hasCustomPage: false,
        releaseDate: "2017",
        developer: "Nintendo",
        genre: ["Action-Adventure", "Open World"],
        rating: 9.7
    },
    // Добавьте другие игры
};

export { gamesDatabase }; 