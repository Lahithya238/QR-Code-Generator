let container = document.querySelector(".Container");
let qrtext = document.querySelector("#text");
let generateBtn = document.querySelector("#Generate");
let img = document.querySelector("#qr-img");
let preInput

generateBtn.onclick = function () {
    let input = qrtext.value.trim()

    if (!input || input === preInput) {
        alert("this field should not be empty and it will be different");
        return;

    } else {
        preInput = input;
        generateBtn.innerText = "Generating QR code....."
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
        img.onload = function () {
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code"
        }
    }
}