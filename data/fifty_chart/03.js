var phrase = {
    "さ":["さ","sa"],"サ":["サ","sa"],"し":["し","shi","si"],"シ":["シ","shi","si"],"す":["す","su"],"ス":["ス","su"],"せ":["せ","se"],"セ":["セ","se"],"そ":["そ","so"],"ソ":["ソ","so"],
};

var statement = {
    "樱花":["桜","さくら"],
    "刺身":["刺身","さしみ"],
    "西瓜":["スイカ"],
    "寿司":["寿司","すし"],
    "世界":["世界","せかい"],
    "骗人":["嘘","うそ"],
};

define(function (){
    return {
        "phrase" : phrase,
        "statement" : statement,
    };
});