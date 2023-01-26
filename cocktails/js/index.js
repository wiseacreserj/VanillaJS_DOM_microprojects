//API

import { fetchCocktailsByName } from "./api.js";

//Elements
const cocktailsContainer = document.querySelector(".l-cocktails");
const spinner = document.querySelector(".c-spinner");
const input = document.querySelector(".c-search-form__input");
const error = document.querySelector(".c-error");

//Functions

const hideSpinner = () => {
    spinner.style.display = "none";
};

const showSpinner = () => {
    spinner.style.display = "block";
};

const showEror = () => {
    error.style.display = "block";
    cocktailsContainer.innerHTML = "";
};

const hideEror = () => {
    error.style.display = "none";
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
                    <div class="c-cocktail-card__img-container">
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
            window.location = link.href;
        });
    });
};

//Assign listeners

input.addEventListener("input", async () => {
    hideEror();
    showSpinner();
    const data = await fetchCocktailsByName(input.value);
    if (!data.drinks) {
        hideSpinner();
        showEror();
        return;
    }
    hideSpinner();
    renderCocktails(data.drinks);
});

const initApp = async () => {
    const data = await fetchCocktailsByName();
    hideSpinner();
    renderCocktails(data.drinks);
};

initApp();
