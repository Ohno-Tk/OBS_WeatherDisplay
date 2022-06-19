// 大阪(270000)の予報を取得
let url_osaka = "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json";

fetch(url_osaka)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("大阪:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_osaka").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text_osaka").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_osaka").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });