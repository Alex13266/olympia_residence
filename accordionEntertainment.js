// const accordion = document.getElementsByClassName("accordionContent");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

let toggles = document.getElementsByClassName("accordionHeading");
let contentDiv = document.getElementsByClassName("accordionText");
let containerAcord = document.getElementsByClassName("accordionContent");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", function () {
    for (let x = 0; x < containerAcord.length; x++) {
      if (containerAcord[x] != this.parentNode) {
        containerAcord[x].classList.remove("active");
      }
    }
    this.parentNode.classList.toggle("active");
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
    } else {
      contentDiv[i].style.height = "0px";
    }
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
      }
    }
  });
}
