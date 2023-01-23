//Constants

const SERACH_BY_NAME_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const SINGLE_DRINK_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

//Functions

export const fetchCocktailsByName = async (cocktailName = "a") => {
    const response = await fetch(`${SERACH_BY_NAME_URL}${cocktailName}`);
    console.log(response);
    const data = await response.json();
    return data;
};

export const fetchDrinkById = async (id) => {
    const response = await fetch(`${SINGLE_DRINK_URL}${id}`);
    console.log(response);
    const data = await response.json();
    return data;
};
