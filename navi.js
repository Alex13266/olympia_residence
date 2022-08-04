function changeBg() {
  let navbar = document.getElementById("navbarBg");
  let scrollValue = window.scrollY;
  if (scrollValue < 130) {
    navbar.classList.remove("navBgColor");
  } else {
    navbar.classList.add("navBgColor");
  }
}

window.addEventListener("scroll", changeBg);
