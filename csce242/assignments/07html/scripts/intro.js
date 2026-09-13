/* Speech */
document.getElementById("speech").onclick = () => {
    document.getElementById("bubble").classList.toggle("hide");
};

/* Beverage */
document.getElementById("drink").onchange = () => {
    const drink = document.getElementById("drink");
    document.getElementById("drinkMessage").innerHTML =
        drink.value + ": Nice Choice!";
}

/* Sticker */
document.getElementById("sun").onclick = () => {
    const sticker = document.createElement("span");
    sticker.innerHTML = "&#128522;";
    sticker.className = "sticker";
    document.getElementById("stickerArea").append(sticker);
};