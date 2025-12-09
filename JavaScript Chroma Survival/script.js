/* Game Constants & State */
const gameState = {
    hp: 100,
    maxHp: 100,
    startTime: 0,
    elapsed: 0,
    isPlaying: false,
    isGameOver: false,
    roundTimeRemaining: 15,
    maxRoundTime: 15,

    // Colors
    targetRgb: { r: 0, g: 0, b: 0 },
    previewRgb: { r: 0, g: 0, b: 0 },
    backgroundRgb: { r: 0, g: 0, b: 0 },

    timerInterval: null,
    gameLoopId: null
};

/* DOM Elements */
const ui = {
    // HUD
    hpBarFill: document.getElementById('hp-bar-fill'),
    survivalTimer: document.getElementById('survival-timer'),
    roundTimer: document.getElementById('round-timer'),
    roundSection: document.querySelector('.round-section'),

    // Game Area
    gameBg: document.getElementById('game-background'),
    targetRing: document.getElementById('target-ring'),
    gameStatus: document.getElementById('game-status'),
    statusTitle: document.getElementById('status-title'),
    statusMsg: document.getElementById('status-msg'),

    // Controls
    valR: document.getElementById('val-r'),
    valG: document.getElementById('val-g'),
    valB: document.getElementById('val-b'),
    btnPlay: document.getElementById('btn-play'),
    controlButtons: document.querySelectorAll('.btn-step'),
};

/* Utility Functions */
function calculateDistance(c1, c2) {
    const rDiff = c1.r - c2.r;
    const gDiff = c1.g - c2.g;
    const bDiff = c1.b - c2.b;
    const distance = Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
    const maxDist = 441.67;
    return (distance / maxDist) * 100;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

/* Game Logic */

function init() {
    // Initial State: "Press Play To Start"
    ui.gameStatus.classList.add('visible');
    ui.statusTitle.textContent = "CHROMA SURVIVAL";
    ui.statusMsg.textContent = "PRESS PLAY BUTTON TO START";
}

function startGame() {
    gameState.hp = 100;
    gameState.startTime = Date.now();
    gameState.isPlaying = true;
    gameState.isGameOver = false;
    gameState.roundTimeRemaining = gameState.maxRoundTime;
    gameState.elapsed = 0;

    // Reset Colors
    gameState.previewRgb = { r: 0, g: 0, b: 0 };
    gameState.backgroundRgb = { r: 0, g: 0, b: 0 };

    updateInputDisplay();
    updatePreviewDisplay();
    updateBackgroundDisplay();

    // Reset HUD
    ui.survivalTimer.textContent = "00:00";
    ui.hpBarFill.style.width = "100%";
    ui.hpBarFill.style.background = 'var(--danger-color)';
    ui.gameBg.classList.remove('critical'); // Ensure no shake

    setNewTarget();

    // Start Loops
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);
    if (gameState.gameLoopId) cancelAnimationFrame(gameState.gameLoopId);

    gameState.timerInterval = setInterval(timerTick, 1000);
    requestAnimationFrame(gameLoop);

    // Hide Message
    ui.gameStatus.classList.remove('visible');
}

function setNewTarget() {
    gameState.targetRgb = getRandomColor();
    updateTargetDisplay();

    gameState.roundTimeRemaining = gameState.maxRoundTime;
    ui.roundSection.classList.remove('danger');
    void ui.roundTimer.offsetWidth;
}

function timerTick() {
    if (!gameState.isPlaying) return;

    // Survival
    gameState.elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
    const m = Math.floor(gameState.elapsed / 60).toString().padStart(2, '0');
    const s = (gameState.elapsed % 60).toString().padStart(2, '0');
    ui.survivalTimer.textContent = `${m}:${s}`;

    // Round
    gameState.roundTimeRemaining--;
    ui.roundTimer.textContent = gameState.roundTimeRemaining;

    if (gameState.roundTimeRemaining <= 5) {
        ui.roundSection.classList.add('danger');
    }

    if (gameState.roundTimeRemaining <= 0) {
        // FULL HP RESET on Round Shift
        gameState.hp = 100;
        setNewTarget();
    }
}

function gameLoop() {
    if (!gameState.isPlaying) return;

    // Calculate Distance
    const dist = calculateDistance(gameState.backgroundRgb, gameState.targetRgb);

    let drainRate = 0;

    // Damage logic
    if (dist < 8) {
        drainRate = 0; // No damage if very close (was healing)
        ui.gameBg.classList.remove('critical');
    } else {
        // Damage scales with distance
        // Original: 0.3 -> Task 1: 0.1 -> Task 2: 0.20
        drainRate = (dist / 100) * 0.20;

        if (dist > 40) {
            ui.gameBg.classList.add('critical');
        } else {
            ui.gameBg.classList.remove('critical');
        }
    }

    gameState.hp -= drainRate;

    // Clamp HP
    if (gameState.hp > gameState.maxHp) gameState.hp = gameState.maxHp;
    if (gameState.hp <= 0) {
        gameState.hp = 0;
        gameOver();
    }

    ui.hpBarFill.style.width = `${gameState.hp}%`;

    if (gameState.isPlaying) {
        requestAnimationFrame(gameLoop);
    }
}

function gameOver() {
    gameState.isPlaying = false;
    gameState.isGameOver = true;
    clearInterval(gameState.timerInterval);

    // STOP SHAKING
    ui.gameBg.classList.remove('critical');

    // Show Message
    ui.statusTitle.textContent = "YOU LOST";
    ui.statusMsg.textContent = `SURVIVED: ${ui.survivalTimer.textContent} | PRESS PLAY TO RESTART`;
    ui.gameStatus.classList.add('visible');
}

/* UI Updates */

function updateTargetDisplay() {
    ui.targetRing.style.borderColor = `rgb(${gameState.targetRgb.r}, ${gameState.targetRgb.g}, ${gameState.targetRgb.b})`;
}

function updatePreviewDisplay() {
    const col = `rgb(${gameState.previewRgb.r}, ${gameState.previewRgb.g}, ${gameState.previewRgb.b})`;
    ui.btnPlay.style.backgroundColor = col;

    const brightness = (gameState.previewRgb.r * 299 + gameState.previewRgb.g * 587 + gameState.previewRgb.b * 114) / 1000;
    ui.btnPlay.style.color = brightness > 128 ? '#000' : '#fff';
}

function updateBackgroundDisplay() {
    ui.gameBg.style.backgroundColor = `rgb(${gameState.backgroundRgb.r}, ${gameState.backgroundRgb.g}, ${gameState.backgroundRgb.b})`;
}

function updateInputDisplay() {
    // Only update if not strictly focused (to allow typing)
    if (document.activeElement !== ui.valR) ui.valR.value = gameState.previewRgb.r;
    if (document.activeElement !== ui.valG) ui.valG.value = gameState.previewRgb.g;
    if (document.activeElement !== ui.valB) ui.valB.value = gameState.previewRgb.b;
}

function adjustColor(color, amount) {
    gameState.previewRgb[color] += amount;
    if (gameState.previewRgb[color] > 255) gameState.previewRgb[color] = 255;
    if (gameState.previewRgb[color] < 0) gameState.previewRgb[color] = 0;

    updateInputDisplay();
    updatePreviewDisplay();
}

/* Event Listeners */

// Color Controls
ui.controlButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!gameState.isPlaying) return;

        const colorComp = btn.dataset.color;
        const dir = parseInt(btn.dataset.dir);
        const step = 20;

        adjustColor(colorComp, dir * step);
    });
});

// Input Fields
[ui.valR, ui.valG, ui.valB].forEach(input => {
    // Prevent non-numeric typing
    input.addEventListener('keydown', (e) => {
        // Allow: backspace, delete, tab, escape, enter, arrows
        if ([46, 8, 9, 27, 13, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+x
            (e.ctrlKey === true || e.metaKey === true)) {
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    input.addEventListener('input', (e) => {
        if (!gameState.isPlaying) return;

        // Identify color
        let c = 'r';
        if (input === ui.valG) c = 'g';
        if (input === ui.valB) c = 'b';

        // Strip non-digits immediately (Paste protection)
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        // Handle empty string after strip
        if (e.target.value === '') {
            gameState.previewRgb[c] = 0;
            updatePreviewDisplay();
            return;
        }

        let val = parseInt(e.target.value);
        if (isNaN(val)) val = 0;

        // Strict Clamping and UI Feedback
        if (val > 255) {
            val = 255;
            e.target.value = 255; // Force update input view
        }

        gameState.previewRgb[c] = val;
        updatePreviewDisplay();
    });
});

// Keyboard Controls (U/J, I/K, O/L)
window.addEventListener('keydown', (e) => {
    if (!gameState.isPlaying) return;

    const step = 20;
    const key = e.key.toLowerCase();

    switch (key) {
        case 'u': adjustColor('r', step); break; // Red Up
        case 'j': adjustColor('r', -step); break; // Red Down
        case 'i': adjustColor('g', step); break; // Green Up
        case 'k': adjustColor('g', -step); break; // Green Down
        case 'o': adjustColor('b', step); break; // Blue Up
        case 'l': adjustColor('b', -step); break; // Blue Down
    }
});

// Play / Commit Button (Merged Functionality)
ui.btnPlay.addEventListener('click', () => {
    // If Not Playing or Game Over -> START GAME
    if (!gameState.isPlaying || gameState.isGameOver) {
        startGame();
        return;
    }

    // IF PLAYING -> COMMIT COLOR
    gameState.backgroundRgb = { ...gameState.previewRgb };
    updateBackgroundDisplay();

    // Animation
    ui.btnPlay.style.transform = 'scale(0.9)';
    setTimeout(() => ui.btnPlay.style.transform = '', 100);
});

/* Init */
window.addEventListener('DOMContentLoaded', init);
