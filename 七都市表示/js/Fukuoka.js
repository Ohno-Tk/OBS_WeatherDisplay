// 福岡(400000)の予報を取得
let url_fukuoka = "https://www.jma.go.jp/bosai/forecast/data/forecast/400000.json";

fetch(url_fukuoka)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("福岡:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_fukuoka").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text_fukuoka").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_fukuoka").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });