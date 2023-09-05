document.addEventListener("DOMContentLoaded", () => {
    let arr = [0,0,0,0,0,0,0,0,1];
    let randomArr = arr.sort(() => Math.random() - 0.5)
    randomArr = randomArr.map((item) => item === 0 ? '❤':'💣');
    console.log(randomArr);
    const divs = document.querySelectorAll(".grid>div");
    const shffuleBtn = document.querySelector("button");

    shffuleBtn.addEventListener("click", () => {
        location.reload();
    })

    for (let i=0; i<divs.length; i++) {
        divs[i].addEventListener("click", () => {
            divs[i].textContent = randomArr[i];
            console.log(divs[i].textContent);
        })
    }
})