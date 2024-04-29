var colorList = [
    "#667db6",
    "#0082c8",
    "#6dd5ed",
    "#2193b0",
    "#2c3e50",
    "#bdc3c7",
    "#4A00E0",
    "#8E2DE2",
    "#493240",
    "#FF0099",
    "#99f2c8",
    "#1f4037",
    "#240b36",
    "#c31432",
    "#FF4B2B",
    "#FF416C",
    "#0083B0",
    "#00B4DB",
    "#11998e",
    "#38ef7d",
    "#c94b4b",
    "#4b134f",
    "#2948ff",
    "#396afc",
    "#FFD200",
    "#6f0000",
    "#200122",
    "#2F0743",
    "#41295a",
    "#00bf8f",
]
    myButton = document.getElementById('button');
myButton.onclick = function () {
    randomColor = Math.floor(Math.random() * colorList.length);
    document.body.style.backgroundColor = colorList[randomColor];

    const code = document.querySelector(".code");
    code.innerText = colorList[randomColor];
};