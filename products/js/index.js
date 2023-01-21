//API

import { fetchAllProducts } from "./api.js";

//Elements
const productsContainer = document.querySelector(".l-products");
const spiner = document.querySelector(".c-spinner");

//Functions

const renderProducts = async () => {
    const products = await fetchAllProducts();
    spiner.remove();

    const template = products
        .map((product) => {
            const id = product.id;
            const {
                price,
                name,
                image: [{ url: imageURL }],
            } = product.fields;
            return `<a href="product.html?id=${id}">
                <div class="c-product-card">
                    <div class="c-product-card__img-container">
                        <img
                            src=${imageURL}
                            alt=${name}
                            class="c-product-card__img"
                        />
                    </div>
                    <h4 class="c-product-card__name">${name}</h4>
                    <p class="c-product-card__price">$${price / 100}</p>
                </div></a
            >`;
        })
        .join("");
    productsContainer.innerHTML = template;
};

const initApp = () => {
    renderProducts();
};

initApp();
