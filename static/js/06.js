// 회문처리
const palindrome = (x) => {
    console.log("문자열길이 : ", x.length);
    if (x.length === 0) return;
    const txt2 = document.querySelector("#txt2");
    s = "";
    for (let i=x.length-1; i>=0; i--) {
        s = s + x[i];
    }
    if (x === s) {
        txt2.value = "회문입니다.";
    }
    else {
        txt2.value = "회문이 아닙니다.";
    }
};

// 숫자합계
const numSum = (x) => {
    sum = 0;
    for (let c of x) {
        if(!isNaN(c)) {
            sum = sum + parseInt(c);
        }
    }
    txt2.value = sum;
};


document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll("input[type=button]");
    const txt1= document.querySelector("#txt1");
    btns.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.value === "회문확인") {
                palindrome(txt1.value);
            }
            else {
                numSum(txt1.value);
            }
        })
    })


    // 배열확인
    let arr = [];
    const bt1s = document.querySelectorAll(".bt1");
    bt1s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent);
            switch (item.textContent){
                case '사과' : arr.push('🍎'); break;
                case '바나나' : arr.push('🍌'); break;
                case '당근' : arr.push('🥕'); break;
                case '수박' : arr.push('🍉'); break;
            }
            txt1.value = arr.join(',');
        })
    })

    const bt2s = document.querySelectorAll(".bt2");
    bt2s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switch (item.textContent){
                case '사과삭제' : 
                    arr = arr.filter((item) => 
                        item !=  '🍎'
                    );
                     break;
                case '바나나삭제' : 
                    arr = arr.filter((item) => 
                        item !=  '🍌'
                    );break;
                case '당근삭제' : 
                    arr = arr.filter((item) => 
                        item !=  '🥕'
                    ); 
                    break;
                case '수박삭제' : 
                    arr = arr.filter((item) => 
                        item !=  '🍉'
                    ); break;
            }
            txt1.value = arr.join(',');

        })
    })

    const bt3s = document.querySelectorAll(".bt3")
    bt3s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent.slice(0, 2));
            switch (item.textContent.slice(0, 2)) {
                case '사과' :
                    arr = arr.map((item) => item === '🍎' ? '🥒' : item);
                    break;
                case '바나' :
                    arr = arr.map((item) => item === '🍌' ? '🥦' : item);
                    break;
                case '당근' :
                    arr = arr.map((item) => item === '🥕' ? '🍊' : item);
                    break;
                case '수박' :
                    arr = arr.map((item) => item === '🍉' ? '🍇' : item);
                    break;
            }
            txt1.value = arr.join(',');
        })
    })

    const rsbtn = document.querySelector("input[type=reset]");
    rsbtn.addEventListener("click", () => {
        // 배열 비우기
        arr.length = 0;
    })

});