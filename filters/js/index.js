import { products } from "./data.js";

//Elements
const productsList = document.querySelector(".l-products");
const input = document.querySelector(".c-filters__input");
const filterBtns = document.querySelectorAll(".c-filters__item");

//Functions

const renderProducts = (container, products) => {
    container.innerHTML = "";
    products.forEach((product) => {
        let template = `<div class="c-product">
            <div class="c-product__img-container">
                <img
                src=${product.image}
                alt=${product.title}
                class="c-product__img"
                />
            </div>
            <h4 class="c-product__name">${product.title}</h4>
            <p class="c-product__price">${product.price}</p>
        </div>`;
        container.innerHTML += template;
    });
};

const renderAllProducts = () => {
    renderProducts(productsList, products);
};

const renderEmptySearchResult = () => {
    productsList.innerHTML = `<p class="c-error">Sorry, no products matched your search</p>`;
};

const filterProductsByCompany = (company = "all") => {
    if (company === "all") {
        renderProducts(productsList, products);
        return;
    }
    const filteredList = products.filter(
        (product) => product.company === company
    );

    renderProducts(productsList, filteredList);
};

const filterProductsByName = (name) => {
    if (!name) {
        renderAllProducts();
        return;
    }

    const searchString = name.toLowerCase();
    const filteredList = products.filter((product) =>
        product.title.includes(searchString)
    );

    if (filteredList.length === 0) {
        renderEmptySearchResult();
        return;
    }
    renderProducts(productsList, filteredList);
};

const initApp = () => {
    renderAllProducts();
};

//Assign listeners
input.addEventListener("input", (event) => {
    event.preventDefault();
    filterProductsByName(event.target.value);
});

filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const company = btn.getAttribute("data-company");
        input.value = "";
        filterProductsByCompany(company);
    });
});

initApp();
