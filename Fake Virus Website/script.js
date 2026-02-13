const imageSources = [
    "pictures/18plus.png",
    "pictures/footbal.png",
    "pictures/ggpick.png",
    "pictures/jessica.png",
    "pictures/mario.png",
    "pictures/playfree.png",
    "pictures/whatspap.png"
];

function buttonScarySound() {
    document.getElementById("scarySound").play();
}


function downloadRam() {
    const downloadbtn = document.getElementById("downloadbtn");
    downloadbtn.remove();

    const bg = document.createElement("div");
    bg.id = "downloadingbar_background";

    const text = document.createElement("div");
    text.className = "loading-text";
    text.innerHTML = "Stahování RAM... 0%";
    text.style.textAlign = "center";
    text.style.paddingTop = "200px";
    text.style.fontFamily = "Ubuntu";
    text.style.fontSize = "50px";
    document.body.appendChild(text);

    const bar = document.createElement("div");
    bar.id = "downloadingbar";
    bg.appendChild(bar);

    const downloadingbar = document.getElementById("downloadingbar");

    document.body.appendChild(bg);
    document.title = "LEAVE WHILE U CAN!";


    move(bar, text);
}

function move(elem, textElem) {
    var width = 0;
    var id = setInterval(frame, 250);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            document.title = "ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR!";
            textElem.innerHTML = "ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR!";
            textElem.style.color = "red";
            downloadingbar.style.backgroundColor = "red";
            startChaos();
        } else {
            width += 1;
            elem.style.width = width + '%';
            textElem.innerHTML = "Stahování RAM... " + width + "%";
        }
    }
}

function startChaos() {
    const audio = document.getElementById("glitchSound");
    audio.loop = true;
    audio.play();

    setInterval(createSpamImage, 50);
}

function createSpamImage() {
    const img = document.createElement("img");

    const randomSrc = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.src = randomSrc;
    img.className = "spam-img";

    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    img.style.left = x + "px";
    img.style.top = y + "px";

    img.onclick = function () {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    document.body.appendChild(img);
}