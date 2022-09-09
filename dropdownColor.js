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
