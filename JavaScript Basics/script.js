const hdr = document.getElementById("hdr");
const btn = document.getElementById("btn");
const colorSquare = document.getElementById("color-square");

btn.onclick = () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorSquare.style.backgroundColor = randomColor;
    console.log(`Changed color to: ${randomColor}`);
    document.title = `Current Color: ${randomColor}`;
};