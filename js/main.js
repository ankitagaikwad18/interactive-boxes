document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const header = box.querySelector(".box__header");
    const content = box.querySelector(".box__content");

    header.addEventListener("click", () => {
      const isOpen = box.classList.contains("box--open");
      boxes.forEach((otherBox) => {
        if (otherBox !== box) {
          otherBox.classList.remove("box--open");
          const otherContent = otherBox.querySelector(".box__content");
          otherContent.style.maxHeight = "0px";
        }
      });

      if (!isOpen) {
        box.classList.add("box--open");
        const fullHeight = content.scrollHeight + "px";
        content.style.maxHeight = fullHeight;
      } else {
        box.classList.remove("box--open");
        content.style.maxHeight = "0px";
      }
    });
  });
});
