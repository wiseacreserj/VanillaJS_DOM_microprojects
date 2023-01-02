let groceryList = localStorage.getItem("groceryList")
    ? JSON.parse(localStorage.getItem("groceryList"))
    : [];

let isEdit = false;
let editItemId;

//Elements

const form = document.querySelector(".c-add-item-form");
const input = document.querySelector(".c-add-item-form__input");
let listElement = document.querySelector(".l-grocery-list");
const alertElement = document.querySelector(".c-alert");
const clearListBtn = document.querySelector(".c-clear-items-btn");

//functions

const generateId = (length = 15) => {
    const str =
        "1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const symbols = str.split("");
    const id = symbols.reduce((acc, current, index, array) => {
        if (index < length) {
            let randomIndex = Math.floor(Math.random() * array.length);

            return [...acc, array[randomIndex]];
        }
        return acc;
    }, []);

    return id.join("");
};

const showMessage = ({ type, text }, delay = 1000) => {
    alertElement.classList.add(type);
    alertElement.textContent = text;
    setTimeout(() => {
        alertElement.textContent = "";
        alertElement.classList.remove(type);
    }, delay);
};

const saveListToLocalStorage = () => {
    const list = JSON.stringify(groceryList);
    localStorage.setItem("groceryList", list);
};

const renderGroceryList = () => {
    listElement.innerHTML = "";
    let html = "";
    groceryList.forEach((item) => {
        const template = `<div class="c-grocery-item" data-id=${item.id}>
        <p class="c-grocery-item__text" >${item.text}</p>
        <div class="l-grocery-item__buttons">
            <button class="c-grocery-item__btn edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="c-grocery-item__btn remove-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>`;

        html += template;
    });

    listElement.innerHTML = html;
    const removeButtons = listElement.querySelectorAll(".remove-btn");
    const editButtons = listElement.querySelectorAll(".edit-btn");
    for (let button of removeButtons) {
        button.addEventListener("click", removeItemHandler);
    }
    for (let button of editButtons) {
        button.addEventListener("click", editItemHandler);
    }
};

//Handlers

const removeItemHandler = (event) => {
    const btn = event.target;
    const currentListItemId =
        btn.parentNode.parentNode.parentNode.getAttribute("data-id");
    groceryList = groceryList.filter((item) => item.id !== currentListItemId);
    input.value = "";
    showMessage({ type: "danger", text: "Item removed" });
    saveListToLocalStorage();
    renderGroceryList();
};

const editItemHandler = (event) => {
    const btn = event.target;
    const currentListItem = btn.parentNode.parentNode.parentNode;
    const id = currentListItem.getAttribute("data-id");
    const text = currentListItem.querySelector(
        ".c-grocery-item__text"
    ).textContent;
    isEdit = true;
    editItemId = id;
    input.value = text;
};

const addItemHandler = (event) => {
    event.preventDefault();
    if (isEdit) {
        groceryList.forEach((item) => {
            if (item.id === editItemId) {
                item.text = input.value;
            }
        });
        isEdit = false;
        input.value = "";
        showMessage({ type: "success", text: "Item edit success" });
        saveListToLocalStorage();
        renderGroceryList();
        return;
    }
    if (!input.value) {
        showMessage({ type: "danger", text: "Please enter value" });
        return;
    }
    groceryList.push({
        id: generateId(),
        text: input.value,
    });
    input.value = "";
    showMessage({ type: "success", text: "Item added to the list" });
    saveListToLocalStorage();
    renderGroceryList();
};

const clearItemsHandler = () => {
    if (groceryList.length === 0) {
        return;
    }
    groceryList = [];
    showMessage({ type: "danger", text: "List was cleared" });
    saveListToLocalStorage();
    renderGroceryList();
};

form.addEventListener("submit", addItemHandler);
clearListBtn.addEventListener("click", clearItemsHandler);

renderGroceryList();
