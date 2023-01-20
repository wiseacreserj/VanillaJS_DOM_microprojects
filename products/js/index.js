//API

import { fetchAllProducts, fetchProductById } from "./api.js";

const productsContainer = document.querySelector(".l-products");

fetchAllProducts();
fetchProductById("rec4f2RIftFCb7aHh");
