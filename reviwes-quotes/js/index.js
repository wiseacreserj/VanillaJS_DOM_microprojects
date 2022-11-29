const reviewes = [
    {
        name: "Anna Johnson",
        position: "WEB DESIGNER",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        img: "./assets/img/person-1.jpg",
    },
    {
        name: "Peter Jones",
        position: "INTERN",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        img: "./assets/img/person-2.jpg",
    },
    {
        name: "Bill Anderson",
        position: "THE BOSS",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        img: "./assets/img/person-3.jpg",
    },
    {
        name: "Susan Smith",
        position: "WEB DEVELOPER",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        img: "./assets/img/person-4.jpg",
    },
];

const reviewContainer = document.querySelector(".review");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const surpriseBtn = document.querySelector("#surpriseBtn");

let reviewIndex = 0;

const renderReview = (reviewIndex) => {
    console.log("review index: ", reviewIndex);
    console.log(reviewes[reviewIndex]);

    const { name, position, text, img } = reviewes[reviewIndex];
    reviewContainer.innerHTML = "";
    const template = `
    <div class="img-container">
        <img
        src=${img}
        class="person-img"
        />
    </div>
    <h3 class="name">${name}</h3>
    <h4 class="position">${position}</h4>
    <p class="review-text">${text}
    </p>`;
    reviewContainer.innerHTML = template;
};

prevBtn.addEventListener("click", () => {
    if (reviewIndex === 0) {
        reviewIndex = reviewes.length - 1;
        renderReview(reviewIndex);
    } else {
        reviewIndex -= 1;
        renderReview(reviewIndex);
    }
});

nextBtn.addEventListener("click", () => {
    if (reviewIndex === reviewes.length - 1) {
        reviewIndex = 0;
        renderReview(reviewIndex);
    } else {
        reviewIndex += 1;
        renderReview(reviewIndex);
    }
});

surpriseBtn.addEventListener("click", () => {
    const randomReviewIndex = Math.floor(Math.random() * reviewes.length);
    renderReview(randomReviewIndex);
});
