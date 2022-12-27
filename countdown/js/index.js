const today = new Date();

const tenDays = new Date();
tenDays.setDate(today.getDate() + 10);

//today.setDate(today.getDate() + 10);

console.log("today:", today);
console.log("10 days:", tenDays);

//const interval = tenDays - today

/* setInterval(() => {
    const now = new Date();
    let interval = new Date(tenDays - now);
    const days = interval.getDate();
    const hours = interval.getHours();
    const minutes = interval.getMinutes();
    const seconds = interval.getSeconds();

    console.log("days", days);
    console.log("hours", hours);
    console.log("minutes", minutes);
    console.log("seconds", seconds);

    console.log(interval.getSeconds());
}, 1000); */
