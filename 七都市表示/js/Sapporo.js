// 札幌(016000)の予報を取得
let url_sapporo = "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json";

fetch(url_sapporo)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("札幌:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_sapporo").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text_sapporo").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_sapporo").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });