const dotes = document.querySelectorAll("[data-dote-target]");
const dotesContent = document.querySelectorAll("[data-dote-content]");

dotes.forEach((dote) => {
  dote.addEventListener("click", () => {
    const target = document.querySelector(dote.dataset.doteTarget);
    dotesContent.forEach((dotesContent) => {
      if (dotesContent != target) {
        dotesContent.classList.remove("active");
      }
    });
    target.classList.toggle("active");
    target.scrollIntoView(scrollIntoViewOptions);
    // dotesContent.style.height = dotesContent.scrollHeight + "px";
  });
});
