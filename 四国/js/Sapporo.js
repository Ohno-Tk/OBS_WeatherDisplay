// 札幌(016000)の予報を取得
let url_Sapporo = "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json";

fetch(WeatherURL(Place.Sapporo))
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        let area = weather[0].timeSeries[0].areas[0];

        // ログ用
        console.log(weather);
        console.log("札幌");
        console.log("報告日時："     + weather[0].reportDatetime);
        console.log("対象エリア："   + area.area.name);
        console.log("今日の天気："   + WeatherText(area.weatherCodes[0]));
        console.log("明日の天気："   + WeatherText(area.weatherCodes[1]));

        // 画面に書き出す
        document.getElementsByClassName("city")[0].innerText = "札幌";
        document.getElementById("weather_image").src = WeatherImage(area.weatherCodes[1]);
        document.getElementById("weather_text").textContent = WeatherText(area.weatherCodes[1]);
        document.getElementById("weather_degrees").textContent = "～" + weather[0].timeSeries[2].areas[0].temps[1] + "℃";
    });