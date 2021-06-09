import menuCardTpl from "../src/templates/menu-card.hbs";
import menuCards from "../src/menu.json";

function createMenuCard(menuCards) {
  return menuCards
    .map((card) => ({ ...card, ingredients: card.ingredients.join(", ") }))
    .map(menuCardTpl)
    .join("");
}
const cardsMarkup = createMenuCard(menuCards);
const ulElements = document.querySelector(".js-menu");
ulElements.insertAdjacentHTML("beforeend", cardsMarkup);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const body = document.querySelector("body");

const button = document.querySelector("#theme-switch-toggle");

button.onchange = function () {
  if (button.checked === true) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme-color", Theme.DARK);
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme-color", Theme.LIGHT);
  }
};
const activeTheme = localStorage.getItem("theme-color");

if (activeTheme && activeTheme === Theme.DARK) {
  button.checked = true;
  body.classList.add("dark-theme");
}
