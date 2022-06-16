// 東京(130000)の予報を取得
let url = "https://www.jma.go.jp/bosai/forecast/data/forecast/150000.json";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
        document.getElementById("weather").lastElementChild.textContent = area.weathers[0];
        document.getElementById("weatherImage").src = "https://www.jma.go.jp/bosai/forecast/img/"+ area.weatherCodes[0] +".svg";
    });