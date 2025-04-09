const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const htmlEl = document.documentElement;
const themeBtns = document.querySelectorAll(".theme-switcher");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

document.addEventListener("DOMContentLoaded", () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    htmlEl.classList.add("dark");
    sunIcon.classList.add("hidden");
  } else {
    htmlEl.classList.remove("dark");
    moonIcon.classList.add("hidden");
  }
});

themeBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    switch (theme) {
      case "light": {
        lightMod();
        localStorage.setItem("theme", "light");
        break;
      }
      case "dark": {
        darkMod();
        localStorage.setItem("theme", "dark");
        break;
      }
      case "system": {
        localStorage.removeItem("theme");
        if (systemTheme) darkMod();
        else lightMod();
      }
    }
  })
);

function lightMod() {
  htmlEl.classList.remove("dark");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
}
function darkMod() {
  htmlEl.classList.add("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}
