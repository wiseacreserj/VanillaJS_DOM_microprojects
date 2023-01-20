//Constants

const ALL_PRODUCTS_URL = "https://course-api.com/javascript-store-products";
const SINGLE_PRODUCT_URL =
    "https://course-api.com/javascript-store-single-product";

export const fetchAllProducts = async () => {
    const response = await fetch(ALL_PRODUCTS_URL);
    const data = await response.json();
    console.log(data);
    return data;
};

export const fetchProductById = async (id) => {
    const response = await fetch(`${SINGLE_PRODUCT_URL}?id=${id}`);
    const data = await response.json();
    console.log(data);
    return data;
};
