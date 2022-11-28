const options = {
    generationMode: "random",
};

const container = document.querySelector(".container");
const changeColorBtn = document.querySelector("#changeColorBtn");
const rgbMode = document.querySelector("#rgb");
const hexMode = document.querySelector("#hex");
const randomMode = document.querySelector("#random");
const currentColorValue = document.querySelector("#color-value");

const generateRGBColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const RGBColor = `rgb(${red}, ${green}, ${blue})`;

    return RGBColor;
};

const generateHEXColor = () => {
    const HEXCodeElements = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    let HEXColor = `#`;

    for (let count = 1; count <= 6; count++) {
        const index = Math.floor(Math.random() * HEXCodeElements.length);
        let HEXCodeElement = HEXCodeElements[index];
        HEXColor = HEXColor.concat(HEXCodeElement);
    }
    return HEXColor;
};

const generateRandomModeColor = (
    colorGenerators = [generateHEXColor, generateRGBColor]
) => {
    const index = Math.floor(Math.random() * colorGenerators.length);
    const color = colorGenerators[index]();
    return color;
};

const generateColor = () => {
    let color = "red";
    const mode = options.generationMode;
    if (mode === "hex") {
        color = generateHEXColor();
    } else if (mode === "rgb") {
        color = generateRGBColor();
    } else {
        color = generateRandomModeColor();
    }
    return color;
};

const setColorInfoText = (color) => {
    currentColorValue.innerText = `${color}`;
};

const changeColorHandler = () => {
    const color = generateColor();
    container.style.backgroundColor = color;
    setColorInfoText(color);
};

const changeGenerationMode = (mode) => {
    options.generationMode = mode;
};

container.style.backgroundColor = `rgb(241, 245, 248)`;

changeColorBtn.addEventListener("click", changeColorHandler);
rgbMode.addEventListener("click", (event) => {
    event.preventDefault();
    changeGenerationMode("rgb");
});
hexMode.addEventListener("click", (event) => {
    event.preventDefault();
    changeGenerationMode("hex");
});
randomMode.addEventListener("click", (event) => {
    event.preventDefault();
    changeGenerationMode("random");
});
