//API

import { fetchCocktailsByName, fetchDrinkById } from "./api.js";

//Elements
const cocktailsContainer = document.querySelector(".l-cocktails");
const spiner = document.querySelector(".c-spinner");

//Functions

const hideSpinner = () => {
    spiner.style.display = "none";
};

const renderCocktails = (cocktails) => {
    const template = cocktails
        .map((cocktail) => {
            const {
                idDrink: id,
                strDrink: drinkName,
                strDrinkThumb: imgURL,
            } = cocktail;
            let html = `<a
                href="drink.html"
                class="c-drink-link"
                data-id=${id}
            >
                <div class="c-cocktail-card" data-id=${id}>
                    <div class="c-coctail-card__img-container">
                        <img
                            src=${imgURL}
                            alt=""
                            class="c-cocktail-card__img"
                        />
                    </div>
                    <div class="c-cocktail-card__name">${drinkName}</div>
                </div></a
            >`;
            return html;
        })
        .join("");

    cocktailsContainer.innerHTML = template;

    const links = cocktailsContainer.querySelectorAll(".c-drink-link");

    links.forEach((drinkLink) => {
        drinkLink.addEventListener("click", (event) => {
            event.preventDefault();
            const link = event.currentTarget;
            localStorage.setItem("drinkId", link.dataset.id);
            window.location.replace(link.href);
        });
    });
};

const initApp = async () => {
    const data = await fetchCocktailsByName();
    hideSpinner();
    renderCocktails(data.drinks);
};

initApp();
