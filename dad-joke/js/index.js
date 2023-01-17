//Constants
const RANDOM_JOKE_URL = "https://icanhazdadjoke.com/";

//Elements

const jokeContainer = document.querySelector(".c-joke__text");
const randomJokeBtn = document.querySelector(".c-joke__btn");

//Functions

const initApp = () => {
    renderJoke();
};

const fetchRandomJoke = async () => {
    const data = await fetch(RANDOM_JOKE_URL, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => res.json());

    return data.joke;
};

const renderJoke = async () => {
    const joke = await fetchRandomJoke();
    jokeContainer.textContent = joke;
};

//Assign listeners

randomJokeBtn.addEventListener("click", renderJoke);

//Inti app
initApp();
