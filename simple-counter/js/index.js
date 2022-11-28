const counter = document.querySelector(".counter");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

let counterValue = 0;

const isPositive = (value) => {
    return value > 0 ? true : false;
};

const updateCounterValue = (value) => {
    if (value === 0) {
        counter.classList.remove("green", "red");
    } else if (isPositive(value)) {
        counter.classList.add("green");
    } else if (!isPositive(value)) {
        counter.classList.add("red");
    }
    counter.innerText = value;
};

decreaseBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateCounterValue(counterValue);
});

resetBtn.addEventListener("click", () => {
    counterValue = 0;
    updateCounterValue(counterValue);
});

increaseBtn.addEventListener("click", () => {
    counterValue += 1;
    updateCounterValue(counterValue);
});
