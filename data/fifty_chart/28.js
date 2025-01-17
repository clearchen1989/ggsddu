var phrase = {
    "あ":["あ","a"],"ア":["ア","a"],"い":["い","i"],"イ":["イ","i"],"う":["う","u"],"ウ":["ウ","u"],"え":["え","e"],"エ":["エ","e"],"お":["お","o"],"オ":["オ","o"],
    "か":["か","ka"],"カ":["カ","ka"],"き":["き","ki"],"キ":["キ","ki"],"く":["く","ku"],"ク":["ク","ku"],"け":["け","ke"],"ケ":["ケ","ke"],"こ":["こ","ko"],"コ":["コ","ko"],
    "さ":["さ","sa"],"サ":["サ","sa"],"し":["し","shi","si"],"シ":["シ","shi","si"],"す":["す","su"],"ス":["ス","su"],"せ":["せ","se"],"セ":["セ","se"],"そ":["そ","so"],"ソ":["ソ","so"],
    "た":["た","ta"],"タ":["タ","ta"],"ち":["ち","chi","ti"],"チ":["チ","chi","ti"],"つ":["つ","tsu","tu"],"ツ":["ツ","tsu","tu"],"て":["て","te"],"テ":["テ","te"],"と":["と","to"],"ト":["ト","to"],
    "な":["な","na"],"ナ":["ナ","na"],"に":["に","ni"],"ニ":["ニ","ni"],"ぬ":["ぬ","nu"],"ヌ":["ヌ","nu"],"ね":["ね","ne"],"ネ":["ネ","ne"],"の":["の","no"],"ノ":["ノ","no"],
    "は":["は","ha"],"ハ":["ハ","ha"],"ひ":["ひ","hi"],"ヒ":["ヒ","hi"],"ふ":["ふ","hu","fu"],"フ":["フ","hu","fu"],"へ":["へ","he"],"ヘ":["ヘ","he"],"ほ":["ほ","ho"],"ホ":["ホ","ho"],
    "ま":["ま","ma"],"マ":["マ","ma"],"み":["み","mi"],"ミ":["ミ","mi"],"む":["む","mu"],"ム":["ム","mu"],"め":["め","me"],"メ":["メ","me"],"も":["も","mo"],"モ":["モ","mo"],
    "や":["や","ya"],"ヤ":["ヤ","ya"],"ゆ":["ゆ","yu"],"ユ":["ユ","yu"],"よ":["よ","yo"],"ヨ":["ヨ","yo"],
    "ら":["ら","ra"],"ラ":["ラ","ra"],"り":["り","ri"],"リ":["リ","ri"],"る":["る","ru"],"ル":["ル","ru"],"れ":["れ","re"],"レ":["レ","re"],"ろ":["ろ","ro"],"ロ":["ロ","ro"],
    "わ":["わ","wa"],"ワ":["ワ","wa"],"を":["を","o","wo"],"ヲ":["ヲ","o","wo"],"ん":["ん","n","nn"],"ン":["ン","n","nn"],
};

var statement = {};

define(function (){
    return {
        "phrase" : phrase,
        "statement" : statement,
    };
});