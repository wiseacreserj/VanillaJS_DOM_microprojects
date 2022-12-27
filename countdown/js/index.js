//Elements

const deadlineElement = document.querySelector(".c-giveaway__deadline");
const daysELement = document.querySelector(".days");
const hoursELement = document.querySelector(".hours");
const minsELement = document.querySelector(".mins");
const secsELement = document.querySelector(".secs");

//days and months collections

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const today = new Date();

const deadline = new Date();
deadline.setDate(today.getDate() + 14);
deadline.setHours(11);
deadline.setMinutes(30);

const deadlineString = `Giveaway Ends On ${
    days[deadline.getDay()]
}, ${deadline.getDate()} ${
    months[deadline.getMonth()]
} ${deadline.getFullYear()} ${deadline.getHours()}:${deadline.getMinutes()}am`;

deadlineElement.innerText = deadlineString;

setInterval(() => {
    const now = new Date();
    const interval = new Date(deadline - now);
    const days = interval.getDate();
    const hours = interval.getHours();
    const mins = interval.getMinutes();
    const secs = interval.getSeconds();

    daysELement.textContent = days;
    hoursELement.textContent = hours;
    minsELement.textContent = mins;
    secsELement.textContent = secs;
}, 1000);
