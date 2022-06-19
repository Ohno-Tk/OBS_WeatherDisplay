// 鹿児島(460100)の予報を取得
let url_kagoshima = "https://www.jma.go.jp/bosai/forecast/data/forecast/460100.json";

fetch(url_kagoshima)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("鹿児島:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_kagoshima").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text_kagoshima").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_kagoshima").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });