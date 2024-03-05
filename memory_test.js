// memory_test.js

// Importez la fonction à tester depuis votre fichier main.js
const { traffickerTableau } = require('./main');

// Testez la fonction traffickerTableau
test('La fonction traffickerTableau devrait générer un tableau de jeu valide', () => {
    // Appelez la fonction à tester
    const gameBoard = traffickerTableau();

    // Vérifiez que le tableau de jeu est une matrice de 4x4
    expect(gameBoard).toHaveLength(4);
    gameBoard.forEach(row => {
        expect(row).toHaveLength(4);
    });

    // Testez la fonction traffickerTableau
test('La fonction traffickerTableau devrait générer un tableau de jeu valide', () => {
    // Appelez la fonction à tester
    const gameBoard = traffickerTableau();

    // Vérifiez que le tableau de jeu est une matrice de 4x4
    expect(gameBoard).toHaveLength(4);
    gameBoard.forEach(row => {
        expect(row).toHaveLength(4);
    });

    // Vérifiez que chaque carte a une valeur entre 1 et 8
    gameBoard.forEach(row => {
        row.forEach(card => {
            expect(card).toBeGreaterThanOrEqual(1);
            expect(card).toBeLessThanOrEqual(8);
        });
    });

    // Vérifiez que chaque paire de cartes est présente exactement deux fois dans le tableau
    const cardCounts = {};
    gameBoard.flat().forEach(card => {
        cardCounts[card] = (cardCounts[card] || 0) + 1;
    });
    Object.values(cardCounts).forEach(count => {
        expect(count).toBe(2);
    });

    // Ajoutez d'autres assertions selon les besoins
});

