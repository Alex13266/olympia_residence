const dotes = document.querySelectorAll("[data-dote-target]");
const dotesContent = document.querySelectorAll("[data-dote-content]");

dotes.forEach((dote) => {
  dote.addEventListener("click", () => {
    const target = document.querySelector(dote.dataset.doteTarget);
    dotesContent.forEach((dotesContent) => {
      if (dotesContent != target) {
        dotesContent.classList.remove("active");
        // dotesContent.style.height = "20px";
      }
    });
    target.classList.toggle("active");
    // dotesContent.style.height = dotesContent.scrollHeight + "px";
  });
});
