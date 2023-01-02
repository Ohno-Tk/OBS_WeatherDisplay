// https://www.jma.go.jp/bosai/forecast/
// デバックツールの Console に「Forecast.Const.TELOPS」で確認出来る

// 天気テキスト
function WeatherText(WeatherCode) {

    switch (WeatherCode) {
        case '100':
            return "晴";
            break;
        case '101':
            return "晴 時々 曇";
            break;
        case '102':
            return "晴 一時 雨";
            break;
        case '103':
            return "晴 時々 雨";
            break;
        case '104':
            return "晴 一時 雪";
            break;
        case '105':
            return "晴 時々 雪";
            break;
        case '106':
            return "晴 一時 雨か雪";
            break;
        case '107':
            return "晴 時々 雨か雪";
            break;
        case '108':
            return "晴 一時 雨か雷雨";
            break;
        case '110':
            return "晴 後 時々曇";
            break;
        case '111':
            return "晴 後 曇";
            break;
        case '112':
            return "晴 後 一時雨";
            break;
        case '113':
            return "晴 後 時々雨";
            break;
        case '114':
            return "晴 後 雨";
            break;
        case '115':
            return "晴 後 一時雪";
            break;
        case '116':
            return "晴 後 時々雪";
            break;
        case '117':
            return "晴 後 雪";
            break;
        case '118':
            return "晴 後 雨か雪";
            break;
        case '119':
            return "晴 後 雨か雷雨";
            break;
        case '120':
            return "晴朝 夕一時雨";
            break;
        case '121':
            return "晴朝の内 一時 雨";
            break;
        case '122':
            return "晴 夕方一時雨";
            break;
        case '123':
            return "晴山沿い雷雨";
            break;
        case '124':
            return "晴山沿い雪";
            break;
        case '125':
            return "晴午後は雷雨";
            break;
        case '126':
            return "晴昼頃から雨";
            break;
        case '127':
            return "晴夕方から雨";
            break;
        case '128':
            return "晴夜は雨";
            break;
        case '130':
            return "朝の内霧後晴";
            break;
        case '131':
            return "晴明け方霧";
            break;
        case '132':
            return "晴朝夕曇";
            break;
        case '140':
            return "晴時々雨で雷を伴う";
            break;
        case '160':
            return "晴一時雪か雨";
            break;
        case '170':
            return "晴時々雪か雨";
            break;
        case '181':
            return "晴後雪か雨";
            break;
        case '200':
            return "曇";
            break;
        case '201':
            return "曇 時々 晴";
            break;
        case '202':
            return "曇 一時 雨";
            break;
        case '203':
            return "曇 時々 雨";
            break;
        case '204':
            return "曇 一時 雪";
            break;
        case '205':
            return "曇 時々 雪";
            break;
        case '206':
            return "曇 一時 雨か雪";
            break;
        case '207':
            return "曇 時々 雨か雪";
            break;
        case '208':
            return "曇 一時 雨か雷雨";
            break;
        case '209':
            return "霧";
            break;
        case '210':
            return "曇後 時々 晴";
            break;
        case '211':
            return "曇 のち 晴";
            break;
        case '212':
            return "曇後 一時 雨";
            break;
        case '213':
            return "曇後 時々 雨";
            break;
        case '214':
            return "曇 のち 雨";
            break;
        case '215':
            return "曇 後 一時雪";
            break;
        case '216':
            return "曇後時々雪";
            break;
        case '217':
            return "曇 のち 雪";
            break;
        case '218':
            return "曇 のち 雨か雪";
            break;
        case '219':
            return "曇 のち 雨か雷雨";
            break;
        case '220':
            return "曇朝夕 一時 雨";
            break;
        case '221':
            return "曇朝の内 一時 雨";
            break;
        case '222':
            return "曇夕方 一時 雨";
            break;
        case '223':
            return "曇日中 時々 晴";
            break;
        case '224':
            return "曇昼頃から雨";
            break;
        case '225':
            return "曇夕方から雨";
            break;
        case '226':
            return "曇夜は雨";
            break;
        case '228':
            return "曇昼頃から雪";
            break;
        case '229':
            return "曇夕方から雪";
            break;
        case '230':
            return "曇夜は雪";
            break;
        case '231':
            return "曇海上海岸は霧か霧雨";
            break;
        case '240':
            return "曇 時々 雨で雷を伴う";
            break;
        case '250':
            return "曇 時々 雪で雷を伴う";
            break;
        case '260':
            return "曇 一時 雪か雨";
            break;
        case '270':
            return "曇 時々 雪か雨";
            break;
        case '281':
            return "曇 のち 雪か雨";
            break;
        case '300':
            return "雨";
            break;
        case '301':
            return "雨時々晴";
            break;
        case '302':
            return "雨時々止む";
            break;
        case '303':
            return "雨時々雪";
            break;
        case '304':
            return "雨か雪";
            break;
        case '306':
            return "大雨";
            break;
        case '308':
            return "雨で暴風を伴う";
            break;
        case '309':
            return "雨 一時 雪";
            break;
        case '311':
            return "雨 のち 晴";
            break;
        case '313':
            return "雨 のち 曇";
            break;
        case '314':
            return "雨 のち 時々雪";
            break;
        case '315':
            return "雨 のち 雪";
            break;
        case '316':
            return "雨か雪 のち 晴";
            break;
        case '317':
            return "雨か雪 のち 曇";
            break;
        case '320':
            return "朝の内雨 のち 晴";
            break;
        case '321':
            return "朝の内雨 のち 曇";
            break;
        case '322':
            return "雨朝晩一時雪";
            break;
        case '323':
            return "雨昼頃から晴";
            break;
        case '324':
            return "雨夕方から晴";
            break;
        case '325':
            return "雨夜は晴";
            break;
        case '326':
            return "雨夕方から雪";
            break;
        case '327':
            return "雨夜は雪";
            break;
        case '328':
            return "雨一時強く降る";
            break;
        case '329':
            return "雨一時みぞれ";
            break;
        case '340':
            return "雪か雨";
            break;
        case '350':
            return "雨で雷を伴う";
            break;
        case '361':
            return "雪か雨 後 晴";
            break;
        case '371':
            return "雪か雨 後 曇";
            break;
        case '400':
            return "雪";
            break;
        case '401':
            return "雪 時々 晴";
            break;
        case '402':
            return "雪時々止む";
            break;
        case '403':
            return "雪 時々 雨";
            break;
        case '405':
            return "大雪";
            break;
        case '406':
            return "風雪強い";
            break;
        case '407':
            return "暴風雪";
            break;
        case '409':
            return "雪一時雨";
            break;
        case '411':
            return "雪 後 晴";
            break;
        case '413':
            return "雪 後 曇";
            break;
        case '414':
            return "雪 後 雨";
            break;
        case '420':
            return "朝の内雪 後 晴";
            break;
        case '421':
            return "朝の内雪 後 曇";
            break;
        case '422':
            return "朝の内雪 後 曇";
            break;
        case '423':
            return "雪夕方から雨";
            break;
        case '425':
            return "雪一時強く降る";
            break;
        case '426':
            return "雪 後 みぞれ";
            break;
        case '427':
            return "雪一時みぞれ";
            break;
        case '450':
            return "雪で雷を伴う";
            break;
        default:
            console.log(text);
    }
}