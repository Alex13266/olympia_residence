function dropdownChange() {
    let dropdown = document.getElementById("dropdown-Color");
    let scrollValue = window.scrollY;

    if (scrollValue < 130) {
        dropdown.classList.remove("dropdownMenu-colorchange");
    } else {
        dropdown.classList.add("dropdownMenu-colorchange");
    }
}

window.addEventListener("scroll", dropdownChange);

// Apartments ul

let newDropdown = document.getElementsByClassName("newDropdown-Color");

window.onscroll = function () {
    for (i = 0; i < newDropdown.length; i++) {
        if (window.scrollY < 130) {
            newDropdown[i].classList.remove("dropdownMenu-colorchange");
        } else {
            newDropdown[i].classList.add("dropdownMenu-colorchange");
        }
    }
};
