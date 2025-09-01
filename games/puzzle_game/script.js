// パズルゲームのロジック（例: 数字の並べ替え）
document.addEventListener('DOMContentLoaded', () => {
    const puzzle = document.getElementById('puzzleContainer');
    const pieces = Array.from({ length: 9 }, (_, i) => i + 1);
    shuffleArray(pieces);

    pieces.forEach((num, index) => {
        const piece = document.createElement('div');
        piece.textContent = num;
        piece.classList.add('puzzle-piece');
        puzzle.appendChild(piece);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
