// 予報を取得するURL

// Enum：場所
var Place = {
    Sapporo:   0,
    Aomori:    1,
    Iwate:     2,
    Miyagi:    3,
    Akita:     4,
    Yamagata:  5,
    Fukushima: 6,
    Ibaraki:   7,
    Tochigi:   8,
    Gunma:     9,
    Saitama:   10,
    Chiba:     11,
    Tokyo:     12,
    Kanagawa:  13,
    Niigata:   14,
    Toyama:    15,
    Ishikawa:  16,
    Fukui:     17,
    Yamanashi: 18,
    Nagano:    19,
    Gifu:      20,
    Shizuoka:  21,
    Aichi:     22,
    Mie:       23,
    Shiga:     24,
    Kyoto:     25,
    Osaka:     26,
    Hyogo:     27,
    Nara:      28,
    Wakayama:  29,
    Tottori:   30,
    Shimane:   31,
    Okayama:   32,
    Hiroshima: 33,
    Yamaguchi: 34,
    Tokushima: 35,
    Kagawa:    36,
    Ehime:     37,
    Kochi:     38,
    Fukuoka:   39,
    Saga:      40,
    Nagasaki:  41,
    Kumamoto:  42,
    Oita:      43,
    Miyazaki:  44,
    Kagoshima: 45,
    Okinawa:   46
};

function WeatherURL(weathercode) {

    var URLPlaceArray = [
        "https://www.jma.go.jp/bosai/forecast/data/forecast/016000.json", // 札幌(Sapporo)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/020000.json", // 青森(Aomori)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/030000.json", // 岩手(Iwate)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/040000.json", // 宮城(Miyagi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/050000.json", // 秋田(Akita)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/060000.json", // 山形(Yamagata)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/070000.json", // 福島(Fukushima)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/080000.json", // 茨城(Ibaraki)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/090000.json", // 栃木(Tochigi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/100000.json", // 群馬(Gunma)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/110000.json", // 埼玉(Saitama)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/120000.json", // 千葉(Chiba)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json", // 東京(Tokyo)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/140000.json", // 神奈川(Kanagawa)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/150000.json", // 新潟(Niigata)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/160000.json", // 富山(Toyama)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/170000.json", // 石川(Ishikawa)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/180000.json", // 福井(Fukui)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/190000.json", // 山梨(Yamanashi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/200000.json", // 長野(Nagano)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json", // 岐阜(Gifu)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/220000.json", // 静岡(Shizuoka)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json", // 愛知(Aichi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/240000.json", // 三重(Mie)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/250000.json", // 滋賀(Shiga)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/260000.json", // 京都(Kyoto)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json", // 大阪(Osaka)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/280000.json", // 兵庫(Hyogo)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/290000.json", // 奈良(Nara)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/300000.json", // 和歌山(Wakayama)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/310000.json", // 鳥取(Tottori)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/320000.json", // 島根(Shimane)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/330000.json", // 岡山(Okayama)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/340000.json", // 広島(Hiroshima)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/350000.json", // 山口(Yamaguchi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/360000.json", // 徳島(Tokushima)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/370000.json", // 香川(Kagawa)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/380000.json", // 愛媛(Ehime)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/390000.json", // 高知(Kochi)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/400000.json", // 福岡(Fukuoka)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/410000.json", // 佐賀(Saga)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/420000.json", // 長崎(Nagasaki)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/430000.json", // 熊本(Kumamoto)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/440000.json", // 大分(Oita)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/450000.json", // 宮崎(Miyazaki)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/460100.json", // 鹿児島(Kagoshima)
        "https://www.jma.go.jp/bosai/forecast/data/forecast/471000.json", // 沖縄本島(Okinawa)
    ];

    return URLPlaceArray[weathercode];
}