const checkbox = document.querySelectorAll(".checkbox--custom");
const submitButton = document.querySelector(".button__submit");
const rating = document.querySelector(".text--words span");
const main = document.querySelector(".main");
const secondMain = document.querySelector(".main--second");

let rate = checkbox.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    removeActive();
    radioButton.classList.add("active");
    rate = radioButton.innerText;
    rating.innerText = radioButton.innerText;
  });
});

const removeActive = () => {
  checkbox.forEach((radioButton) => {
    radioButton.classList.remove("active");
  });
};

submitButton.addEventListener("click", () => {
  if (rate > 0) {
    main.style.display = "none";
    secondMain.style.display = "flex";
    console.log("submit");
  } else {
    submitButton.classList.add("shake");
    setTimeout(() => {
      submitButton.classList.remove("shake");
    }, 100);
  }
});
