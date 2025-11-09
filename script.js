document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    // Логика для index.html
    if (document.getElementById('startGame')) {
        document.getElementById('themeLight').addEventListener('change', () => {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        });

        document.getElementById('themeDark').addEventListener('change', () => {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        });

        document.getElementById('startGame').addEventListener('click', () => {
            const deck = document.querySelector('input[name="deckSize"]:checked').id.replace('deck', '');
            const time = document.querySelector('input[name="time"]:checked').id.replace('time', '');
            const mode = document.querySelector('input[name="mode"]:checked').id.replace('mode', '').toLowerCase();
            window.location.href = `game.html?deck=${deck}&time=${time}&mode=${mode}`;
        });
    }
    
    // Логика для game.html nahuy
    if (document.getElementById('start-button')) {
        const deckSize = urlParams.get('deck') || '32';
        const time = urlParams.get('time') || '5';
        document.getElementById('start-button').addEventListener('click', () => {
            document.getElementById('start-button').disabled = true;
            startGame(deckSize, time);
        });
    }
});
