var phrase = {
    "開発":["開発","かいはつ"],
    "本番(正式、生产环境)":["本番","ほんばん"],
    "運用(操作、使用、管理)":["運用","うんよう"],
    "履歴(记录、历史)":["履歴","りれき"],
    "最大限(最大限度、尽可能地多)":["最大限","さいだいげん"],
    "活用(活用、充分利用)":["活用","かつよう"],
    "優れる(出色的、优秀的、卓越的)":["優れる","すぐれる"],
    "概要(概述、概要)":["概要","がいよう"],
    "作成(制作、创建)":["作成","さくせい"],
    "訪問者(访客、访问者)":["訪問者","ほうもんしゃ"],
    "際(时候、场合,指某个动作发生的时间点)":["際","さい"],
    "最初(最初、最开始,表示某个过程或行动的最早阶段)":["最初","さいしょ"],
    "表示(显示，表示内容在页面或屏幕上呈现)":["表示","ひょうじ"],
    "何(什么，疑问词，表示不确定的事物或对象)":["何","なに","なん"],
    "関する(关于、涉及，表示动作或主题与某个对象的关系)":["関する","かんする"],
    "取り組む(努力或从事某项工作)":["取り組む","とりくむ"],
    "情報(信息，表示可以传达或展示的内容)":["情報","じょうほう"],
    "画像(图像，指视觉的图像或照片)":["画像","がぞう"],
    "追加(添加，表示向现有内容中加入新的部分)":["追加","ついか"],
    "視覚的(视觉的，涉及视觉感知的性质)":["視覚的","しかくてき"],
    "魅力(魅力，吸引人的特质或特征)":["魅力","みりょく"],
    "目的(目的，指目标或计划想要达成的结果)":["目的","もくてき"],
    "説明(说明，解释某事物的内容或含义)":["説明","せつめい"],
    "要約(概括，简要总结某个事物或主题的要点)":["要約","ようやく"],
    "提示(提出，展示，表示给出某个提案或信息)":["提示","ていじ"],
    "作業(工作，指为达成某个目标所进行的具体任务或劳动)":["作業","さぎょう"],
    "簡単(简单，表示某件事情容易理解或执行)":["簡単","かんたん"],
    "目標(目标，指计划要达到的具体结果)":["目標","もくひょう"],
    "共有(共享，指将某些内容分享给他人)":["共有","きょうゆう"],
    "計画(计划，指为实现目标制定的具体步骤)":["計画","けいかく"],
    "製品(产品，指企业制造和提供的商品)":["製品","せいひん"],
    "理解(理解，指对某事物的领会或明白)":["理解","りかい"],
    "連絡(联系，指与他人沟通或发送信息)":["連絡","れんらく"],
    "連絡先(联系人信息，指联系某人的具体方式)":["連絡先","れんらくさき"],
    "方法(方法，表示做某事的方式或途径)":["方法","ほうほう"],
    "伝える(传达，向他人传递信息)":["伝える","つたえる"],
    "使用(使用，指使用某物或某种工具)":["使用","しよう"],
    "その他(其他，表示其他的事物或选项)":["その他","そのた"],
    "疑問(疑问，表示不确定或不清楚的问题)":["疑問","ぎもん"],
    "場合(情况，指特定的场合或条件)":["場合","ばあい"],
    "頻繁(频繁，表示某事发生的次数较多)":["頻繁","ひんぱん"],
    "必要(必要，表示做某事是必需的或需要的)":["必要","ひつよう"],
    "生じる(产生，指某种状况或问题的出现)":["生じる","しょうじる"],
    "可能性(可能性，表示某种情况发生的概率或潜在性)":["可能性","かのうせい"],
    "重要(重要，表示某事物在某种场合或情况下不可或缺)":["重要","じゅうよう"],
    "有用(有用，表示某物具有使用价值或功能)":["有用","ゆうよう"],
    "管理者(管理员，负责管理或监督某个系统或空间的人)":["管理者","かんりしゃ"],
    "整理(整理，指将物品或信息进行有序的归纳和分类)":["整理","せいり"],
    "関連(相关，表示某些事物之间有一定的联系)":["関連","かんれん"],
    "外部(外部，指与内部相对的外界)":["外部","がいぶ"],
    "応じる(根据，表示根据某种情况采取相应的行动)":["応じる","おうじる"],
    "開始(开始，表示某种活动的起点)":["開始","かいし"],
    "返信(回复，通常指通过邮件或消息形式作出的回应)":["返信","へんしん"],
    "溜まる(积累，表示某事物逐渐增加)":["溜まる","たまる"],
    "考える(思考，表示认真地进行思维活动)":["考える","かんがえる"],
    "脈絡(脉络，指事情之间的前后关联)":["脈絡","みゃくらく"],
    "分かる(明白、理解)":["分かる","わかる"],
    "送信(发送，通常指通过电子邮件或消息传递)":["送信","そうしん"],
    "把握(把握，表示掌握某个事物的内容或信息)":["把握","はあく"],
    "参照(参考，查看相关信息以供决策或理解)":["参照","さんしょう"],
    "残す(留下，表示将某事物保留或记录)":["残す","のこす"],
    "権限(权利或许可，允许某人做某事的资格)":["権限","けんげん"],
    "持つ(拥有或持有某物)":["持つ","もつ"],
    "当然(理所当然，显而易见)":["当然","とうぜん"],
    "結論(讨论或思考后得出的结果或判断)":["結論","けつろん"],
    "達する(达到某个状态、目标或地点)":["達する","たっする"],
    "解決済み(问题已被解决或处理完毕)":["解決済み","かいけつずみ"],
    "消去(删除或消除某个信息)":["消去","しょうきょ"],
    "能够做，表示能力或可能性":["できる"],
    "不做，表示否定某个动作（する的否定形）":["しない"],
    "难以……，表示做某事有一定难度":["しづらい"],
    "team":["チーム"],
    "space":["スペース"],
    "access":["アクセス"],
    "page":["ページ"],
    "header":["ヘッダー"],
    "project":["プロジェクト"],
    "link":["リンク"],
    "time zone":["タイムゾーン"],
    "mail":["メール"],
    "user":["ユーザー"],
    "copy":["コビー"],
    "alias(别名，通常用于电子邮件系统中，表示不同的邮件地址可以转发到同一个账户。)":["エイリアス"],
    "channel(频道，指用于沟通的特定讨论区)":["チャンネル"],
    "roadmap(路线图，指展示产品或项目开发计划的时间表)":["ロードマップ"],
    "mission(任务或使命，指团队的主要任务或责任)":["ミッション"],
    "feedback(反馈，指对某事的意见或回应)":["フィードバック"],
    "shortcut(快捷方式，通常指一种通过简单操作快速执行某个功能的方式)":["ショートカット"],
    "member(成员，指属于某个团队或组织的人)":["メンバー"],
    "contents(内容，通常指网页或文件中的信息)":["コンテンツ"],
    "discussion(讨论，交流意见的过程)":["ディスカッション"],
    "inline(行内，指在文中或文段内直接插入的内容)":["インライン"],
    "comment(评论，对某个内容或观点进行简短表达)":["コメント"],
    "highlight(高亮显示，通常指突出显示文本或重要内容)":["ハイライト"],
    "icon(图标，通常指显示在界面上的小图片，用于表示某个功能或内容)":["アイコン"],
    "thread(在论坛或聊天中的讨论串)":["スレッド"],
};

var statement = {
    "宾格助词，表示动作的对象":["を"],
    "方向助词，表示动作的目标或方向":["に"],
    "主题助词，用于表示句子的主题":["は"],
    "主格助词，表示主语或动作的发起者":["が"],
    "疑问助词，表示不确定的情况或询问":["か"],
    "助词，由……，表示原因、方式或手段":["によって"],
    "副词，首先，表示动作顺序的开始":["まず"],
    "副词，立即，表示时间上的迅速":["すぐ"],
    "副词，用于表示目标或目的，意为“为了”":["ように"],
    "接续词，或者，表示在几个选项之间进行选择":["または"],
    "副词，仔细地，慢慢地花时间思考或做某事":["じっくり"],
    "副词，所有的，全部的":["すべで"],
};

var text = {
    "宾格助词，表示动作的对象":["を"],
};

define(function (){
    return {
        "phrase" : phrase,
        "statement" : statement,
        "text" : text,
    };
});