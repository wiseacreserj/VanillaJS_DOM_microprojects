//API

import { fetchProductById } from "./api.js";

//Elements
const productContainer = document.querySelector(".l-product");
const spiner = document.querySelector(".c-spinner");

//Varibles
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//Functions

const renderProduct = async () => {
    const product = await fetchProductById(id);
    spiner.remove();

    const {
        name,
        price,
        company,
        description: desc,
        image: [{ url: imageURL }],
        colors,
    } = product.fields;

    const colorsHTML = colors
        .map((color) => {
            return `<div class="c-product__color-item" style="background-color: ${color};"></div>`;
        })
        .join("");

    const template = `<div class="l-image">
            <img src=${imageURL} alt=${name} class="c-product-img" />
        </div>
        <div class="c-product">
            <h4 class="c-product__title">${name}</h4>
            <span class="c-product__company">${company}</span>
            <span class="c-product__price">${price / 100}</span>
            <div class="c-product__colors">${colorsHTML}</div>
            <p class="c-product__description">${desc}</p>
            <button class="c-add-to-cart-btn">add to cart</button>
        </div>`;

    productContainer.innerHTML = template;
};

renderProduct();
