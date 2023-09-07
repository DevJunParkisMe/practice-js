// 전역변수
let arr = [0,0,0,0,0,0,0,0,1];
// 폭탄섞기 확인용 플래그
let flag = true;
// 눌러진 박스 수
let cnt = 0;


const init = (boxs) => {
    flag = true;
    cnt = 0;
    boxs.forEach(element => {
        let n = element.getAttribute("id").slice(-1) ;
        console.log(n) ;
        element.textContent = n ;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const boxs = document.querySelectorAll(".row > div");
    const bt = document.querySelector("button");
    const h2 = document.querySelector("h2");
    init(boxs);

    bt.addEventListener("click", () => {
        init(boxs);
        if (flag) {
            arr.sort(()=> Math.random() - 0.5);
            console.log(arr);
            h2.textContent = "폭탄을 피해 선택해주세요.";
            h2.style.color = "red";
            flag = false;
        }
    })

    boxs.forEach(element => {
        element.addEventListener("click",() => {
            if (flag) {
                h2.textContent = "폭탄을 섞어주세요.";
                h2.style.color = "blue";
                return; 
            }

            let idx = parseInt(element.textContent);
            if (isNaN(idx)) return;

            if (arr[idx-1] === 0) {
                element.innerHTML = '<img src="../static/images/hart.png">';
                cnt++;
                if (cnt === 8) {
                    h2.textContent = "성공 !!";
                    h2.style.color = "violet";
                    flag = true;
                    idx = arr.indexOf(1);
                    document.getElementById("box"+(idx+1)).innerHTML = '<img src="../static/images/hart.png">'
                }
            }

            else {
                element.innerHTML = '<img src="../static/images/boom.png" width="90%">';
                h2.textContent = "실패!! 폭탄을 섞어주세요.";
                h2.style.color = "blue";
                flag = true;
            }

        })
    })
})