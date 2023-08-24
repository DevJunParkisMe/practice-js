document.addEventListener("DOMContentLoaded",() => {
    const btn1 = document.querySelector("#btn1");
    const btn = document.querySelector("button");
    const btn1_get = document.getElementById("btn1");
    console.log(btn1.textContent);
    console.log(btn);
    console.log(btn1_get);
    
    const btn_all = document.querySelectorAll("button"); // NodeList라는 배열로 출력
    console.log(btn_all);
    
    const footer_div = document.querySelector("footer > div");
    console.log(footer_div);

    // 변수 선언
    // 기존 선언 방법
    console.log(x); // 오류 발생 X
    var x = 10;
    console.log(x); 

    // 최근 선언 방법
    // console.log(esX); // 오류 발생
    let esX = 10;
    console.log(esX);

    // NodeList 순회
    // 1. 전통적인 for
    for(let i=0; i<btn_all.length; i++) {
        console.log(btn_all[i]);
    }

    // 2. for in : 키 순회
    console.log("for in 순회");
    for(let i in btn_all) {
        console.log(i," : ", btn_all[i]);
    }

    // 3. for each : array 순회
    console.log("for each 순회");
    btn_all.forEach((i) => console.log(i));
    btn_all.forEach((i, idx) => console.log(idx, i));
    
    // 4. for of 순회
    console.log("for of 순회");
    for(let i of btn_all) {
        console.log(i); // key가 아니고 요소가 출력됨
    }
    console.log("for of entry 순회")
    for(let [idx,i] of btn_all.entries()) { // 구조 분해
        console.log(idx,i)
    }

    let s = "<ul>";
    for (let i of btn_all) {
        s +="<li>" + i.getAttribute("id") + " : " + i.textContent + "</li>";
    }
    document.querySelector("#adiv").innerHTML = s + "</ul>";
})

