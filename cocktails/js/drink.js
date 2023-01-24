//API

import { fetchDrinkById } from "./api.js";

//Elements
const drinkContainer = document.querySelector(".l-drink");
const spiner = document.querySelector(".c-spinner");

//Varibles

const id = localStorage.getItem("drinkId");
if (!id) {
    window.location = "index.html";
}
console.log(id);

//Functions

const renderDrink = async () => {
    const drink = await fetchDrinkById(id);
    console.log(drink);
    spiner.style.display = "none";

    const {
        strDrink: drinkName,
        strInstructions: instruction,
        strDrinkThumb: imgURL,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
    } = drink;

    const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
    ];

    const ingredientsHTML = ingredients
        .map((ingredient) => {
            if (ingredient === null) {
                return;
            }
            return `<li class="c-ingredients__item">
                <i class="far fa-check-square"></i>${ingredient}
            </li>`;
        })
        .join("");

    const template = `<div class="l-image">
            <img src=${imgURL} alt=${drinkName} class="c-drink-img" />
        </div>
        <div class="c-drink">
            <h4 class="c-drink__title">${drinkName}</h4>
            <span class="c-drink__instruction">${instruction}</span>
            <ul class="c-ingredients">${ingredientsHTML}</ul>
            <a href="index.html" class="c-home-link">all cocktails</a>
        </div>`;

    drinkContainer.innerHTML = template;
};

renderDrink();
