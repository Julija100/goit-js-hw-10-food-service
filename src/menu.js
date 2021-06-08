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
