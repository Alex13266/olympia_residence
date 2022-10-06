let toggles = document.getElementsByClassName("salesBlok1-heading");
let buttons = document.getElementsByClassName("salesBlok1-buttons");
let containerAcord = document.getElementsByClassName("salesBlok1-content");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function () {
        for (let x = 0; x < containerAcord.length; x++) {
            if (containerAcord[x] != this.parentNode) {
                containerAcord[x].classList.remove("active");
            }
        }
        this.parentNode.classList.toggle("active");
        if (parseInt(buttons[i].style.height) != buttons[i].scrollHeight) {
            buttons[i].style.height = buttons[i].scrollHeight + "px";
        } else {
            buttons[i].style.height = "0px";
        }
        for (let j = 0; j < buttons.length; j++) {
            if (j !== i) {
                buttons[j].style.height = "0px";
            }
        }
    });
}
