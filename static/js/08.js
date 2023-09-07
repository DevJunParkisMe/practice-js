const show = (cd) => {
    const detailDiv = document.querySelector(".detail");
    let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
    let apiKey = "f5eef3421c602c6cb7ea224104795888";
    let movieCd = `&movieCd=${cd}`;
    url = url + `?key=${apiKey}` + movieCd;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        let movieInfo = data.movieInfoResult.movieInfo;
        console.log(movieInfo);
        detailDiv.innerHTML = `<h2>영화명 : </h2>` + `<h2>장르 : </h2>` + `<h2>배우 : </h2>` + `<h2>감독 : </h2>` 
        const h2s = document.querySelectorAll(".detail > h2");
        h2s[0].innerHTML += `<span>${movieInfo.movieNm}(${movieInfo.movieNmEn})</span>`;
        for (let genre of movieInfo.genres) {
            h2s[1].innerHTML += `<span>${genre.genreNm}</span> `; 
        }
        for (let actor of movieInfo.actors) {
            h2s[2].innerHTML += `<span>${actor.peopleNm}(${actor.peopleNmEn})</span> ` ;
        }
        for (let director of movieInfo.directors) {
            h2s[3].innerHTML += `<span>${director.peopleNm}(${director.peopleNmEn})</span> `; 
        }
    })
    .catch((err) => console.log(err))
}

const fetchFunction = (date, tbody, selMovie) => {
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    let apiKey = "f5eef3421c602c6cb7ea224104795888";
    url = url + `?key=${apiKey}`;
    let targetDt = date.value.replaceAll("-","");
    url = url + `&targetDt=${targetDt}`;

    if (selMovie.value != "all") {
        url = url + `&multiMovieYn=${selMovie.value}`;
    }

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        tbody.innerHTML = '';
        let boxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
        // console.log(data.boxOfficeResult['boxofficeType']);
        // console.log(data.boxOfficeResult.dailyBoxOfficeList);
        // console.log(data["boxOfficeResult"]["boxofficeType"]);
        console.log(boxOfficeList);
        for(let item of boxOfficeList) {
            tbody.innerHTML += `<tr> <td scope="row"><div class="rank">${item.rank}<span class="inten">${item.rankInten}</span></div></td>`     
                            + `<td><a href="#" onclick="show(${item.movieCd});">${item.movieNm}</a></td>` 
                            + `<td>${item.openDt}</td>` 
                            + `<td class="numtd">${parseInt(item.salesAmt).toLocaleString("ko-KR")}</td>` 
                            + `<td class="numtd">${parseInt(item.salesAcc).toLocaleString("ko-KR")}</td>` 
                            + `<td class="numtd">${parseInt(item.audiCnt).toLocaleString("ko-KR")}</td>` 
                            + `<td class="numtd">${parseInt(item.audiAcc).toLocaleString("ko-KR")}</td> </tr>`;
        }
        const spanIntens = document.querySelectorAll(".inten");
        spanIntens.forEach(element => {
            if (parseInt(element.textContent) > 0) {
                element.style.color = "red";
                element.textContent = "▲" + element.textContent;
            }
            else if (parseInt(element.textContent) < 0) {
                element.style.color = "blue";
                element.textContent = "▼" +Math.abs(element.textContent);
            }
            else {
                element.textContent = "-";
            }
        })
    })
    .catch((err) => console.log(err));
}



document.addEventListener("DOMContentLoaded", () => {
    const date = document.querySelector("#dt1");
    const dCon = document.querySelector("#divCon");
    const tbody = document.querySelector("tbody");
    const selMovie = document.querySelector("#selMovie");
    
    // 날짜 변경 시 날짜 가져오기
    date.addEventListener("change", () => {
        fetchFunction(date, tbody, selMovie);
    }) 
    selMovie.addEventListener("change", () => {
        if (date.value) {
            fetchFunction(date, tbody, selMovie);
        }
    })
})