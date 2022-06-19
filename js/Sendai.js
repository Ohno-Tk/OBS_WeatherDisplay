// 仙台(040000)の予報を取得
let url_sendai = "https://www.jma.go.jp/bosai/forecast/data/forecast/040000.json";

fetch(url_sendai)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log("札幌:");
        console.log(weather);

        let area = weather[0].timeSeries[0].areas[0];

       // 画面に書き出す
        document.getElementById("weather_image_sendai").src = "https://www.jma.go.jp/bosai/forecast/img/"+ area.weatherCodes[1] +".svg";
        document.getElementById("weather_text_sendai").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees_sendai").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });