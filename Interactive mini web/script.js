// Počkáme na načtení DOMu
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Přepínání Tmavého/Světlého Režimu ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Funkce pro nastavení ikony/textu tlačítka
    const updateButtonText = () => {
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = "Světlý režim";
        } else {
            themeToggleBtn.textContent = "Tmavý režim";
        }
    };

    // Kontrola uloženého nastavení v localStorage (pokud existuje)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateButtonText();
    }

    // Event listener na kliknutí
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateButtonText();

        // Uložení volby do localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- 2. Plynulé scrolování pro kotvy (zajišťuje kompatibilitu i pro starší prohlížeče) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Kompenzace pro fixní hlavičku (výška headeru cca 70px)
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    console.log("Web Zidan načten úspěšně.");
});

// --- 3. Lightbox (Galerie) ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

const images = document.querySelectorAll('.gallery-item img, .image-block img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
