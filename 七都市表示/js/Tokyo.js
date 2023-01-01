// 東京(130000)の予報を取得
let url_tokyo = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

fetch(url_tokyo)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("東京:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_tokyo").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text_tokyo").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_tokyo").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });