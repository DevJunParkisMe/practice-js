document.addEventListener("DOMContentLoaded", () => {
    // 버튼 6개 가져오기
    // const btns = document.querySelectorAll("button");
    // btns.forEach((item) => {
    //     item.addEventListener("click", () => {
    //         diceRoll2(parseInt(item.textContent));
    //     });
    // });

    // 확인 버튼
    const btn = document.querySelector("button");
    const radios = document.querySelectorAll("input[type=radio]");
    btn.addEventListener("click", () => {
       for(let item of radios) {
        if (item.checked) {
            diceRoll2(parseInt(item.value));
            break;
        }
       } 
    });
});


const diceRoll = () => {
    let n =Math.floor(Math.random() * 6) + 1;

    document.querySelector("img").setAttribute("src",`../static/images/${n}.png`);
}

const diceRoll2 = (n) => {
    let num =Math.floor(Math.random() * 6) + 1;
    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src='../static/images/${num}.png'>`;

    const h2 = document.querySelector("hgroup > h2");
    if (n === num) {
        h2.textContent = "맞음(승)"
        h2.style.color = "red"
    }
    else {
        h2.textContent = "다름(패)"
        h2.style.color = "blue";
    }
}