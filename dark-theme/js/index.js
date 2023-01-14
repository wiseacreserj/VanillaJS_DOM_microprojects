//Elements

const body = document.querySelector("body");
const toggleBtn = document.querySelector(".c-toggle-theme-btn");

//functions

const initApp = () => {
    let themeStatus = JSON.parse(localStorage.getItem("themeStatus"));

    if (themeStatus.isDark) {
        body.classList.add("dark-theme");
    }
};

const saveThemeToLocalStorage = (boolean) => {
    let themeStatus = {
        isDark: boolean,
    };

    localStorage.setItem("themeStatus", JSON.stringify(themeStatus));
};

//Listeners
const toggleTheme = () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        saveThemeToLocalStorage(false);
    } else {
        body.classList.add("dark-theme");
        saveThemeToLocalStorage(true);
    }
};

toggleBtn.addEventListener("click", toggleTheme);

window.addEventListener("DOMContentLoaded", initApp);
