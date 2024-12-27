var phrase = {
    "【名】数学":["数学","すうがく"],
    "【名】专门":["専門","せんもん"],
    "【名】女演员":["女優","じょゆう"],
    "【名】营业科":["営業課","えいぎょうか"],
    "【名】市内，市街，繁华街道":["市街","しがい"],
    "【名】道路，马路":["道路","どうろ"],
    "【名】交通流量，通行量":["交通量","こうつうりょう"],
    "【名】机场":["空港","くうこう"],
    "【名】高速公路":["高速道路","こうそくどうろ"],
    "【名】零件制造厂":["部品工場","ぶひんこうじょう"],
    "【动1】跑，奔跑":["走ります","はしります"],
    "【名】电梯":["エレベーター"],
    "【名】图书画，连环画":["絵本","えほん"],
    "【名】大自然":["自然","しぜん"],
    "【名】工资":["給料","きゅうりょう"],
    "【名】今天晚上":["今夜","こんや"],
    "【名】伤":["けが"],
    "【名】时差":["時差","じさ"],
    "【动1】住，过夜，住宿":["泊まります","とまります"],
    "【动1】连接，系":["結びます","むすびます"],
    "【动1】印，记下":["取ります","とります"],
    "【动2】出生，诞生":["生まれます","うまれます"],
    "【动3】倒闭，破产":["倒産します","とうさんします"],
    "【动3】堵车，停滞":["渋滞します","じゅうたいします"],
    "【动3】确认":["チェックします"],
    "【形2】富裕，丰富":["豊","ゆたか"],
    "【连体】大的":["大きな","おおきな"],
    "【连体】小的":["小さな","ちいさな"],
    "【副】并不":["別に","べつに"],
    "【专】戴":["戴","たい"],
    "【专】周":["周","しゅう"],
    "【专】唐":["唐","とう"],
    "【专】中国航空":["中国航空","ちゅうごくこうくう"],
    "【专】天安饭店":["天安飯店","てんあんはんてん"],
    "【专】三环路":["三環路","さんかんろ"],
    "上面":["上","うえ"],
    "下面":["下","した"],
    "侧面":["横","よこ"],
    "旁边":["そば"],
    "周围":["周り","まわり"],
    "北面":["北","きた"],
    "南面":["南","みなみ"],
    "东面":["東","ひがし"],
    "西面":["西","にし"],
    "里面，内部":["中","なか"],
    "外面":["外","そと"],
    "对面":["向かい","むかい"],
    "前面":["前","まえ"],
    "后面":["後ろ","うしろ"],
    "中间":["間","あいだ"],
    "角落":["隅","すみ"],
    "左面":["左","ひだり"],
    "右面":["右","みぎ"],
    "正下方":["真下","ました"],
};

var statement = {
    "这一带，这附近":["このあたり"],
    "这是明天会议要用的资料":["これは明日会議で使う資料です"],
    "那是今晚森先生要入住的宾馆":["あれは森さんが今夜泊まるホテルです"],
    "那是一家倒闭的公司":["あれは倒産した会社です"],
    "森先生刚才坐过的地方":["さっき森さんが座った場所"],
    "森先生不知道的新闻":["森さんが知らないニュース"],
    "森先生要坐的地方":["森さんが座る場所"],
    "那是昨天晚上住的宾馆":["あれは昨夜泊まったホテルです"],
    "我明天乘坐的飞机是中国航空公司的":["私が明日乗る飛行機は中国航空です"],
    "小野女士坐的菜很好吃":["小野さんが作る料理は美味しいです"],
    "森先生买的书是这一本":["森さんが買った本はこれです"],
    "我把在中国买的CD借给朋友了":["中国で買ったシーディーを友達に貸しました"],
    "我给调到中国工作的朋友写信":["中国へ転勤した友達に手紙を書きます"],
    "一个不认识的人给我来了信":["私が知らない人から手紙が来ました"],
    "我不认识的人":["私が知らない人"],
    "森先生买的书":["森さんが買った本"],
    "入口很大的那座楼是我们的公司":["入口が広いあの建物が私の会社です"],
    "我想要操作简单的个人电脑":["操作が簡単なパソコンが欲しいです"],
    "教数学的老师休息了":["数学が専門の先生が休みました"],
    "小李 快去科长那儿":["李さん　すぐ課長のところへ行ってください"],
    "这是本公司营业科的田中":["これはうちの営業課の田中です"],
    "日本和中国的时差是1小时来着 对吗":["日本と中国の時差は一時間でしたね"],
    "对 日本早1小时":["ええ　日本のほうが一時間早いです"],
    "今天的会是3点开始 是吗":["今日の会議はたしか三時からでしたね"],
    "那座白色的大楼是什么":["あそこにある大きな白い建物は何ですか"],
    "想要小的提包":["小さなかばんが欲しいです"],
    "这一带经常堵车":["このあたりはよく渋滞します"],
    "小马在哪":["馬さんはどちらですか"],
    "刚才在电梯那啊":["エレベーターのあたりにいましたよ"],
    "小李 这个人是谁?":["李さん　この人はだれですか"],
    "那个人是中国很受欢迎的女演员":["その人は中国でとても人気がある女優です"],
    "在（那个）窗户那儿的人是谁？":["あの窓のところにいる人はだれですか"],
    "那是接待处的小戴":["あれは受付の戴さんですよ"],
    "（你）在干什么":["何をしているんですか"],
    "（我）在读昨天小李送给我的书":["昨日李さんにもらった本を読んでいます"],
    "这个公司里歌唱的最好的人是谁？":["この会社で歌がいちばん上手な人はだれですか"],
    "我想是森先生":["森さんだと思います"],
    "今天入住的宾馆是天安饭店 对吧":["今日泊まるホテルは天安飯店でしたね"],
    "是的 请你现在宾馆住一个月左右 慢慢找住处吧":["ええ　一か月ぐらいホテルに泊まってください　ゆっくり住む所を探しましょう"],
    "这条路真直呀":["ずいぶんまっすぐな道路ですね"],
    "这是连接机场和北京市区的高速公路 到市内大约要30分钟":["これは空港と北京市街を結ぶ高速道路で　市街までだいたい三十分ぐらいです"],
    "哎 这是日本歌啊":["あっ　これ日本の歌ですね"],
    "是的 日本朋友送给我的CD":["はい　そうです　日本人の友達にもらったCDです"],
    "（你）喜欢日本歌吗？":["日本の歌が好きなんですか"],
    "嗯 非常喜欢 中国有很多喜欢日本歌儿的人":["ええ　大好きです　中国には日本の歌が好きな人がたくさんいますよ"],
    "那座白色的大楼是什么":["あそこにある大きな白い建物は何ですか"],
    "那是最近盖好的<大楼> 小马 你知道（那）是什么楼吗？":["あれは最近できた建物ですね　馬さん　知っていますか"],
    "啊 那是汽车零件制造厂":["ああ　あれは自動車の部品工場ですよ"],
    "车多起来了啊":["だいぶ車が多くなりましたね"],
    "是啊 现在走的这条<路>是三环路 这一带经常堵车":["ええ　今走っている道路は三環路ですが　このあたりはよく渋滞します"],
    "<因为>三环路在北京是交通流量最大的公路":["三環路は北京でいちばん交通量が多い道路ですからね"],
};

define(function (){
    return {
        "phrase" : phrase,
        "statement" : statement,
    };
});