const imageSources = [
    "pictures/18plus.png",
    "pictures/footbal.png",
    "pictures/ggpick.png",
    "pictures/jessica.png",
    "pictures/mario.png",
    "pictures/playfree.png",
    "pictures/whatspap.png"
];

// Logy pro fake instalaci
const installLogs = [
    { text: "Inicializace instalátoru...", type: "" },
    { text: "Kontrola systémových požadavků... OK", type: "ok" },
    { text: "Připojování k serveru ram-server.cz...", type: "" },
    { text: "Navazování SSL spojení...", type: "" },
    { text: "Ověřování licence... OK", type: "ok" },
    { text: "Stahování modulů DDR5 [██████████] 512 MB...", type: "" },
    { text: "Přemostění Windows Defender... OK", type: "ok" },
    { text: "Zapisování do HKEY_LOCAL_MACHINE\\SYSTEM...", type: "" },
    { text: "VAROVÁNÍ: Antivirus detekoval soubor (přeskakuji)", type: "err" },
    { text: "Kopírování souborů do C:\\Windows\\System32...", type: "" },
    { text: "Instalace ovladačů paměti...", type: "" },
    { text: "Stahování dalších komponent (103 MB)...", type: "" },
    { text: "CHYBA: Přístup odepřen (obcházím)...", type: "err" },
    { text: "Přebírání kontroly nad systémem... OK", type: "ok" },
    { text: "Šifrování uložených souborů...", type: "err" },
    { text: "Extrahování hesel z Chrome, Firefox... OK", type: "err" },
    { text: "Odesílání dat na vzdálený server... OK", type: "err" },
    { text: "Instalace dokončena.", type: "ok" }
];

const installSteps = [
    { pct: 5,  icon: "⏳", title: "Inicializace...", sub: "Připravuji instalační balíček" },
    { pct: 18, icon: "🔗", title: "Připojuji se k serveru...", sub: "ram-server.cz:443 | SSL" },
    { pct: 35, icon: "📦", title: "Stahování RAM modulů...", sub: "DDR5 512MB – 0.3 MB/s" },
    { pct: 52, icon: "⚙️", title: "Instalace ovladačů...", sub: "Zapisování do systémového registru" },
    { pct: 68, icon: "⚠️", title: "Přemosťování ochrany...", sub: "Windows Defender – Bypassing..." },
    { pct: 80, icon: "🔐", title: "Zabezpečování instalace...", sub: "Šifrování osobních souborů..." },
    { pct: 92, icon: "📤", title: "Synchronizace dat...", sub: "Odesílání na vzdálený server..." },
    { pct: 100,icon: "✅", title: "Instalace dokončena!", sub: "RAM úspěšně nainstalována." }
];

// Live counter animation on front page
function animateCounter() {
    const el = document.getElementById("liveCounter");
    if (!el) return;
    setInterval(() => {
        const base = 4800 + Math.floor(Math.random() * 100);
        el.textContent = base.toLocaleString("cs-CZ");
    }, 2000);
}
animateCounter();

function buttonScarySound() {
    const sfx = document.getElementById("xpError");
    if (sfx) { sfx.currentTime = 0; sfx.play(); }
}

/* ======================================
   HACK PHASE
   ====================================== */
function downloadRam() {
    // Spustit zvuk
    const mainSfx = document.getElementById("scarySound");
    if (mainSfx) mainSfx.play();

    // Schovat front page
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.style.display = "none";

    // Zobrazit overlay
    const overlay = document.getElementById("hack-overlay");
    overlay.style.display = "block";

    document.title = "RAM Installer Pro 2026 – Instaluji...";

    runInstaller();
}

function runInstaller() {
    const bar = document.getElementById("hackProgressBar");
    const pctLabel = document.getElementById("hackPercent");
    const logBox = document.getElementById("hackLog");
    const iconEl = document.getElementById("hackIcon");
    const titleEl = document.getElementById("hackTitle");
    const subEl = document.getElementById("hackSubtitle");

    let stepIndex = 0;
    let logIndex = 0;
    let currentPct = 0;
    let targetPct = 0;

    function applyStep(s) {
        iconEl.textContent = s.icon;
        titleEl.textContent = s.title;
        subEl.textContent = s.sub;
        targetPct = s.pct;
    }

    applyStep(installSteps[0]);

    // Postupné přidávání logů
    const logInterval = setInterval(() => {
        if (logIndex < installLogs.length) {
            const entry = installLogs[logIndex++];
            const div = document.createElement("div");
            div.textContent = entry.text;
            if (entry.type === "err") div.className = "hack-log-err";
            if (entry.type === "ok") div.className = "hack-log-ok";
            logBox.appendChild(div);
            logBox.scrollTop = logBox.scrollHeight;
        }
    }, 900);

    // Pohyb progress baru
    const pctInterval = setInterval(() => {
        if (currentPct < targetPct) {
            currentPct += 0.5;
            if (currentPct > targetPct) currentPct = targetPct;
            bar.style.width = currentPct + "%";
            pctLabel.textContent = Math.floor(currentPct) + "%";
        }

        // Přecházíme na nový krok
        if (stepIndex < installSteps.length - 1 && currentPct >= installSteps[stepIndex].pct) {
            stepIndex++;
            applyStep(installSteps[stepIndex]);
        }

        // Instalace hotova
        if (currentPct >= 100) {
            clearInterval(pctInterval);
            clearInterval(logInterval);
            setTimeout(showRansomware, 1200);
        }
    }, 60);
}

let spamInterval;

function showRansomware() {
    // Schovat instalační okno
    const scanWin = document.getElementById("hackScanWindow");
    if (scanWin) scanWin.style.display = "none";

    // Zobrazit ransomware popup
    const ransom = document.getElementById("ransomPopup");
    ransom.style.display = "block";

    document.title = "☠ VAŠE SOUBORY BYLY ZAŠIFROVÁNY ☠";

    // Spustit ohrožující zvuk
    const scaryAudio = document.getElementById("glitchSound");
    if (scaryAudio) { scaryAudio.loop = true; scaryAudio.play(); }

    // Spustit odpočet
    startCountdown(23 * 3600 + 59 * 60 + 59);

    // Start spam po 4 sekundách
    setTimeout(() => {
        spamInterval = setInterval(createSpamImage, 250);
    }, 4000);

    // BSOD po 20 sekundách
    setTimeout(() => {
        clearInterval(spamInterval);
        document.querySelectorAll(".spam-img").forEach(img => img.remove());
        document.getElementById("bsod").style.display = "block";
        document.title = "Blue Screen of Death";
        animateBsodDump();
    }, 20000);
}

function startCountdown(seconds) {
    const el = document.getElementById("countdownTimer");
    let s = seconds;
    setInterval(() => {
        if (s <= 0) return;
        s--;
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const sec = s % 60;
        el.textContent =
            String(h).padStart(2, "0") + ":" +
            String(m).padStart(2, "0") + ":" +
            String(sec).padStart(2, "0");
    }, 1000);
}

function animateBsodDump() {
    const el = document.getElementById("bsodDump");
    const chars = "0123456789ABCDEF";
    let count = 0;
    const iv = setInterval(() => {
        let line = "";
        for (let i = 0; i < 48; i++) line += chars[Math.floor(Math.random() * 16)];
        el.textContent = line;
        if (++count > 60) clearInterval(iv);
    }, 100);
}

function createSpamImage() {
    const bsod = document.getElementById("bsod");
    if (bsod && bsod.style.display === "block") return;

    const img = document.createElement("img");
    const randomSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.src = randomSrc;
    img.className = "spam-img";

    const x = Math.random() * (window.innerWidth - 350);
    const y = Math.random() * (window.innerHeight - 350);
    img.style.left = Math.max(0, x) + "px";
    img.style.top = Math.max(0, y) + "px";

    img.onclick = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    document.body.appendChild(img);
}