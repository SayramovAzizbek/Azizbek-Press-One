const siteBody = document.querySelector(".site-body");
const pressText = document.querySelector(".press-text");
const pressList = document.querySelector(".pressed-colors-list");
const pressItem = document.querySelectorAll(".pressed-colors-item");

window.addEventListener("keydown", (evt) => {
  if (evt.key === "1") {
    pressList.classList.add("d-flex");
    pressText.textContent = `Choose color`;
  }
});

pressList.addEventListener("click", (evt) => {
  if (evt.target.matches(".pressed-colors-item")) {
    console.log("pressed");
    const bodyChangedBg = getComputedStyle(evt.target).backgroundColor;
    siteBody.style.backgroundColor = bodyChangedBg;
  }
});
