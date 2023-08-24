const diceRoll = () => {
    let n =Math.floor(Math.random() * 6) + 1;

    document.querySelector("img").setAttribute("src",`../static/images/${n}.png`);
}