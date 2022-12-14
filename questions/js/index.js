const showBtns = document.querySelectorAll(".show-answer-btn");

showBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const question = event.target.parentElement.parentElement.parentElement;
        const questionAnswer = question.querySelector(".question__answer");
        const btnIcon = question.querySelector("i");
        questionAnswer.classList.toggle("open");
        if (btnIcon.classList.contains("fa-plus-square")) {
            btnIcon.classList.replace("fa-plus-square", "fa-minus-square");
        } else {
            btnIcon.classList.replace("fa-minus-square", "fa-plus-square");
        }
    });
});
