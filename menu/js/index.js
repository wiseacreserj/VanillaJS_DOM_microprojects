const data = [
    {
        title: "Buttermilk Pancakes",
        text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: 15.99,
        img: "./assets/img/buttermilk-pancakes.jpeg",
        type: "breakfast",
    },
    {
        title: "Country Delight",
        text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
        price: 20.99,
        img: "./assets/img/country-delight.jpeg",
        type: "breakfast",
    },
    {
        title: "Bacon Overflow",
        text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        price: 8.99,
        img: "./assets/img/bacon-overflow.jpeg",
        type: "breakfast",
    },
    {
        title: "Diner Double",
        text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        price: 13.99,
        img: "./assets/img/diner-double.jpeg",
        type: "lunch",
    },
    {
        title: "Egg Attack",
        text: "",
        price: 22.99,
        img: "./assets/img/egg-attack.jpeg",
        type: "lunch",
    },
    {
        title: "American Classic",
        text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        price: 12.99,
        img: "./assets/img/american-classic.jpeg",
        type: "lunch",
    },
    {
        title: "Godzilla Milkshake",
        text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        price: 6.99,
        img: "./assets/img/godzilla-milkshake.jpeg",
        type: "shakes",
    },
    {
        title: "Oreo Dream",
        text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        price: 18.99,
        img: "./assets/img/oreo-dream.jpeg",
        type: "shakes",
    },
    {
        title: "Quarantine Buddy",
        text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        price: 16.99,
        img: "./assets/img/quarantine-buddy.jpeg",
        type: "shakes",
    },
    {
        title: "Steak Dinner",
        text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        price: 33.99,
        img: "./assets/img/steak-dinner.jpeg",
        type: "dinner",
    },
];

const buttons = document.querySelectorAll(".c-buttons__filter-btn");
const menuList = document.querySelector(".l-menu-list");

const filterMenuHandler = (event) => {
    const type = event.currentTarget.innerText.toLowerCase();
    renderMenu(data, type);
};

buttons.forEach((btn) => {
    btn.addEventListener("click", filterMenuHandler);
});

function renderMenu(data, type = "all") {
    menuList.innerHTML = ``;
    let filteredData;
    if (type === "all") {
        filteredData = data;
    } else {
        filteredData = data.filter((item) => item.type === type);
    }

    filteredData.forEach((menuItem) => {
        const menuItemTemplate = `<article class="c-menu-item">
    <img
        class="c-menu-item__img"
        src=${menuItem.img}
        alt=${menuItem.title}
    />
    <div class=".c-menu-item__info">
        <div class="c-menu-item__header">
            <h2 class="c-menu-item__title">${menuItem.title}</h2>
            <span class="c-menu-item__price">$${menuItem.price}</span>
        </div>
        <p class="c-menu-item__text">${menuItem.text}</p>
    </div>
</article>
`;
        menuList.innerHTML += menuItemTemplate;
    });
}

const initApp = () => {
    renderMenu(data);
};

initApp();
