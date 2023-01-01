// 天気画像
function WeatherImage(WeatherCode) {

    var ImageArray = [
        "https://www.jma.go.jp/bosai/forecast/img/100.svg", // 晴
        "https://www.jma.go.jp/bosai/forecast/img/101.svg", // 晴 時々 曇
        "https://www.jma.go.jp/bosai/forecast/img/102.svg", // 晴 一時 雨
        "https://www.jma.go.jp/bosai/forecast/img/104.svg", // 晴 一時 雪
        "https://www.jma.go.jp/bosai/forecast/img/110.svg", // 晴 後 時々曇
        "https://www.jma.go.jp/bosai/forecast/img/112.svg", // 晴 後 一時雨
        "https://www.jma.go.jp/bosai/forecast/img/115.svg", // 晴 後 一時雪
        "https://www.jma.go.jp/bosai/forecast/img/118.svg", // 晴 後 雨か雪
        "https://www.jma.go.jp/bosai/forecast/img/200.svg", // 曇
        "https://www.jma.go.jp/bosai/forecast/img/201.svg", // 曇 時々 晴
        "https://www.jma.go.jp/bosai/forecast/img/202.svg", // 曇 一時 雨
        "https://www.jma.go.jp/bosai/forecast/img/204.svg", // 曇 一時 雪
        "https://www.jma.go.jp/bosai/forecast/img/210.svg", // 曇後 時々 晴
        "https://www.jma.go.jp/bosai/forecast/img/212.svg", // 曇後 一時 雨
        "https://www.jma.go.jp/bosai/forecast/img/215.svg", // 曇 後 一時雪
        "https://www.jma.go.jp/bosai/forecast/img/300.svg", // 雨
        "https://www.jma.go.jp/bosai/forecast/img/301.svg", // 雨時々晴
        "https://www.jma.go.jp/bosai/forecast/img/302.svg", // 雨時々止む
        "https://www.jma.go.jp/bosai/forecast/img/303.svg", // 雨時々雪
        "https://www.jma.go.jp/bosai/forecast/img/308.svg", // 雨で暴風を伴う
        "https://www.jma.go.jp/bosai/forecast/img/311.svg", // 雨 のち 晴
        "https://www.jma.go.jp/bosai/forecast/img/313.svg", // 雨 のち 曇
        "https://www.jma.go.jp/bosai/forecast/img/314.svg", // 雨 のち 時々雪
        "https://www.jma.go.jp/bosai/forecast/img/400.svg", // 雪
        "https://www.jma.go.jp/bosai/forecast/img/411.svg", // 雪 のみ 晴
        "https://www.jma.go.jp/bosai/forecast/img/413.svg", // 雪 のみ 曇
        "https://www.jma.go.jp/bosai/forecast/img/401.svg", // 雪 時々 晴
        "https://www.jma.go.jp/bosai/forecast/img/402.svg", // 雪時々止む
        "https://www.jma.go.jp/bosai/forecast/img/403.svg", // 雪 時々 雨
        "https://www.jma.go.jp/bosai/forecast/img/406.svg", // 大雪
        "https://www.jma.go.jp/bosai/forecast/img/414.svg", // 雪 のみ 雨
    ];

    switch (WeatherCode) {
        case '100':
            return ImageArray[0];
            break;
        case '101':
            return ImageArray[1];
            break;
        case '102':
            return ImageArray[2];
            break;
        case '103':
            return ImageArray[2];
            break;
        case '104':
            return ImageArray[3];
            break;
        case '105':
            return ImageArray[3];
            break;
        case '106':
            return ImageArray[2];
            break;
        case '107':
            return ImageArray[2];
            break;
        case '108':
            return ImageArray[2];
            break;
        case '110':
            return ImageArray[4];
            break;
        case '111':
            return ImageArray[4];
            break;
        case '112':
            return ImageArray[5];
            break;
        case '113':
            return ImageArray[5];
            break;
        case '114':
            return ImageArray[5];
            break;
        case '115':
            return ImageArray[6];
            break;
        case '116':
            return ImageArray[6];
            break;
        case '117':
            return ImageArray[6];
            break;
        case '118':
            return ImageArray[5];
            break;
        case '119':
            return ImageArray[5];
            break;
        case '120':
            return ImageArray[5];
            break;
        case '121':
            return ImageArray[2];
            break;
        case '122':
            return ImageArray[5];
            break;
        case '123':
            return ImageArray[0];
            break;
        case '124':
            return ImageArray[0];
            break;
        case '125':
            return ImageArray[5];
            break;
        case '126':
            return ImageArray[5];
            break;
        case '127':
            return ImageArray[5];
            break;
        case '128':
            return ImageArray[5];
            break;
        case '130':
            return ImageArray[0];
            break;
        case '131':
            return ImageArray[0];
            break;
        case '132':
            return ImageArray[1];
            break;
        case '140':
            return ImageArray[2];
            break;
        case '160':
            return ImageArray[3];
            break;
        case '170':
            return ImageArray[3];
            break;
        case '181':
            return ImageArray[6];
            break;
        case '200':
            return ImageArray[8];
            break;
        case '201':
            return ImageArray[9];
            break;
        case '202':
            return ImageArray[10];
            break;
        case '203':
            return ImageArray[10];
            break;
        case '204':
            return ImageArray[11];
            break;
        case '205':
            return ImageArray[11];
            break;
        case '206':
            return ImageArray[10];
            break;
        case '207':
            return ImageArray[10];
            break;
        case '208':
            return ImageArray[10];
            break;
        case '209':
            return ImageArray[8];
            break;
        case '210':
            return ImageArray[12];
            break;
        case '211':
            return ImageArray[12];
            break;
        case '212':
            return ImageArray[13];
            break;
        case '213':
            return ImageArray[13];
            break;
        case '214':
            return ImageArray[13];
            break;
        case '215':
            return ImageArray[14];
            break;
        case '216':
            return ImageArray[14];
            break;
        case '217':
            return ImageArray[14];
            break;
        case '218':
            return ImageArray[13];
            break;
        case '219':
            return ImageArray[13];
            break;
        case '220':
            return ImageArray[10];
            break;
        case '221':
            return ImageArray[10];
            break;
        case '222':
            return ImageArray[13];
            break;
        case '223':
            return ImageArray[10];
            break;
        case '224':
            return ImageArray[13];
            break;
        case '225':
            return ImageArray[13];
            break;
        case '226':
            return ImageArray[13];
            break;
        case '228':
            return ImageArray[14];
            break;
        case '229':
            return ImageArray[14];
            break;
        case '230':
            return ImageArray[14];
            break;
        case '231':
            return ImageArray[8];
            break;
        case '240':
            return ImageArray[10];
            break;
        case '250':
            return ImageArray[11];
            break;
        case '260':
            return ImageArray[11];
            break;
        case '270':
            return ImageArray[11];
            break;
        case '281':
            return ImageArray[14];
            break;
        case '300':
            return ImageArray[15];
            break;
        case '301':
            return ImageArray[16];
            break;
        case '302':
            return ImageArray[17];
            break;
        case '303':
            return ImageArray[18];
            break;
        case '304':
            return ImageArray[15];
            break;
        case '306':
            return ImageArray[15];
            break;
        case '308':
            return ImageArray[19];
            break;
        case '309':
            return ImageArray[18];
            break;
        case '311':
            return ImageArray[20];
            break;
        case '313':
            return ImageArray[21];
            break;
        case '314':
            return ImageArray[22];
            break;
        case '315':
            return ImageArray[22];
            break;
        case '316':
            return ImageArray[20];
            break;
        case '317':
            return ImageArray[21];
            break;
        case '320':
            return ImageArray[20];
            break;
        case '321':
            return ImageArray[21];
            break;
        case '322':
            return ImageArray[18];
            break;
        case '323':
            return ImageArray[20];
            break;
        case '324':
            return ImageArray[20];
            break;
        case '325':
            return ImageArray[20];
            break;
        case '326':
            return ImageArray[22];
            break;
        case '327':
            return ImageArray[22];
            break;
        case '328':
            return ImageArray[15];
            break;
        case '329':
            return ImageArray[15];
            break;
        case '340':
            return ImageArray[23];
            break;
        case '350':
            return ImageArray[15];
            break;
        case '361':
            return ImageArray[24];
            break;
        case '371':
            return ImageArray[25];
            break;
        case '400':
            return ImageArray[23];
            break;
        case '401':
            return ImageArray[26];
            break;
        case '402':
            return ImageArray[27];
            break;
        case '403':
            return ImageArray[28];
            break;
        case '405':
            return ImageArray[23];
            break;
        case '406':
            return ImageArray[29];
            break;
        case '407':
            return ImageArray[29];
            break;
        case '409':
            return ImageArray[28];
            break;
        case '411':
            return ImageArray[24];
            break;
        case '413':
            return ImageArray[25];
            break;
        case '414':
            return ImageArray[30];
            break;
        case '420':
            return ImageArray[24];
            break;
        case '421':
            return ImageArray[25];
            break;
        case '422':
            return ImageArray[30];
            break;
        case '423':
            return ImageArray[30];
            break;
        case '425':
            return ImageArray[23];
            break;
        case '426':
            return ImageArray[23];
            break;
        case '427':
            return ImageArray[23];
            break;
        case '450':
            return ImageArray[23];
            break;
        default:
            console.log(text);
    }
}