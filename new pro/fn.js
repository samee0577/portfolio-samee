
let btnY = document.getElementById("btn1");
let btnN = document.getElementById("btn2");
let card = document.getElementById("posal");
let text = document.getElementById("text");

btnY.addEventListener('click', () => {
    card.style.display = "none";
    alert("thanks");
    text.innerHTML = "thanks";

    text.addEventListener('click', () => {
        text.innerHTML = "u thought something would happen?<br>sorry nothing happens";
    })
});

// btnN.addEventListener('click', () => {
//     let cardWidth = card.offsetWidth;
//     let cardHeight = card.offsetHeight;

//     let maxX = innerWidth - cardWidth;
//     let maxY = innerHeight - cardHeight;

//     let randomX = Math.floor(Math.random() * maxX);
//     let randomY = Math.floor(Math.random() * maxY);

//     card.style.transform = `translate(${randomX}px, ${randomY}px)`;
// });
btnN.addEventListener('click', () => {
    let cardWidth = card.offsetWidth;
    let cardHeight = card.offsetHeight;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let maxX = (viewportWidth - cardWidth) / 2;
    let maxY = (viewportHeight - cardHeight) / 2;

    // Generate random X and Y positions within the visible window area while keeping the card centered
    let randomX = Math.floor(Math.random() * maxX) - (maxX / 2);
    let randomY = Math.floor(Math.random() * maxY) - (maxY / 2);

    card.style.transform = `translate(${randomX}px, ${randomY}px)`;
});


