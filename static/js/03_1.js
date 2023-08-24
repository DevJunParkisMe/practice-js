// DOM 생성
const domCreate = () => {
    console.log("DOM 생성");
    const newh2 = document.createElement("h2");
    const newh2Txt = document.createTextNode("자바스크립트 DOM 생성");
    newh2.appendChild(newh2Txt);
    document.getElementById("adiv").append(newh2);
}

// DOM 읽기
const domRead = () => {
    console.log("innerHTML => ", document.querySelector("h1").innerHTML);
    console.log("innerText => ", document.querySelector("h1").innerText);
    console.log("textContent => ", document.querySelector("h1").textContent);
}

// DOM 수정
const domUpdate = () => {
    const myh1 = document.querySelector("h1");
    const myh2 = document.querySelector("h2");
    myh1.innerHTML = "<h3>자바스크립트 수정</h3>";
    if (myh2) {
        myh2.innerHTML = "<h3>자바스크립트 수정</h3>";
    }
   
    // myh1.textContent = "<h3>자바스크립트 수정</h3>";
}

const domDelete = () => {
    const myh2 = document.querySelector("h2");
    console.log("myh2",myh2);
    if (myh2) {
        myh2.remove();
    }
}