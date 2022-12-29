const groceryList = localStorage.getItem("groceryList")
    ? localStorage.getItem("groceryList")
    : [];

//Elements

const form = document.querySelector(".c-add-item-form");
const input = document.querySelector(".c-add-item-form__input");
const listElement = document.querySelector(".l-grocery-list");

//console.log(JSON.parse(groceryList));

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

const id = generateId();
console.log(id);

//handlers

const addItemHandler = (event) => {
    event.preventDefault();
    console.log(groceryList);
    groceryList.push({
        id: generateId(),
        text: input.value,
    });
    console.log(groceryList);
};

form.addEventListener("submit", addItemHandler);
