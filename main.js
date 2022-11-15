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
    const bodyChangedBg = getComputedStyle(evt.target).backgroundColor;
    pressText.textContent = `You chose: ${bodyChangedBg}`;
    siteBody.style.backgroundColor = bodyChangedBg;
    console.log(bodyChangedBg);
    if (
      bodyChangedBg === "rgb(0, 0, 0)" ||
      bodyChangedBg === "rgb(0, 0, 128)"
    ) {
      pressText.style.color = "#ffffff";
    } else if (
      bodyChangedBg === "rgb(255, 255, 255)" ||
      bodyChangedBg === "rgb(255, 255, 0)" ||
      bodyChangedBg === "rgb(245, 222, 179)"
    ) {
      pressText.style.color = "#000000";
    }
  }
});
