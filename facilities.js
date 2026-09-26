// 施設データ（千代田区・台東区・中央区）
// 出典: 各区の公式一覧（下の FACILITIES_META.sources）に掲載の事業所。
//       千代田区の一覧は更新が古いため、各施設の公式サイトで運営状況を個別に確認（閉室済みの First Classroom 千代田は除外）。
// 座標: 国土地理院 住所検索API
// 概要: 各施設の公式サイト記載内容を要約（2026年9月確認）
//
// services に使えるキー:
//   "jihatsu"（児童発達支援） / "houday"（放課後等デイサービス）
//   "houmon"（居宅訪問型児童発達支援） / "hoikuhoumon"（保育所等訪問支援）
// note: 注意事項（募集停止・区民限定など）がある場合に入れると、カードで強調表示されます。
// 医療機関は services: ["clinic"]。子どもの発達障害の診療を公式サイトで確認できたものを掲載。
// cats: 得意分野（lang/motor/sensory/study/sst/aba/medcare/career/pickup）
// 閉室・閉院した施設は配列から削除してください。

window.FACILITIES_META = {
  "areas": [
    "千代田区",
    "台東区",
    "中央区"
  ],
  "updated": "2026-09-26",
  "sources": [
    {
      "name": "千代田区 障害児通所支援サービス 区内事業所一覧（2025年9月8日更新）",
      "url": "https://www.city.chiyoda.lg.jp/koho/kosodate/kosodate/ko-shogai/tsushoshien.html"
    },
    {
      "name": "台東区 障害児通所支援（2026年8月10日更新）",
      "url": "https://www.city.taito.lg.jp/kenkohukusi/shogai/syougaisyasisetu/20170309009.html"
    },
    {
      "name": "中央区 区内障害児通所支援事業所一覧（2026年9月16日掲載）",
      "url": "https://www.city.chuo.lg.jp/a0023/kenkouiryou/shougaishafukushi/shienservice/hou/syougaizizigyousyoitirann.html"
    },
    {
      "name": "東京都 発達障害者医療機関リスト",
      "url": "https://www.fukushi.metro.tokyo.lg.jp/documents/d/fukushi/200420-9-iryoukikan-list"
    }
  ]
};

window.FACILITIES = [
  {"ward": "千代田区", "name": "LITALICOジュニア お茶の水教室", "services": ["jihatsu", "houday"], "address": "千代田区外神田2-2-18 東信御茶ノ水ビル2階", "tel": "03-3526-5420", "lat": 35.699516, "lng": 139.767456, "age": "未就学〜", "tags": ["個別", "小集団", "ABA", "ペアトレ"], "summary": "行動分析に基づく支援計画で、個別（1〜3名）・小集団・集団の支援を組み合わせて提供。園・学校への訪問支援や保護者向けペアレントトレーニングも。", "url": "https://junior.litalico.jp/school/tokyo/ochanomizu/", "cats": ["aba", "pickup"]},
  {"ward": "千代田区", "name": "ぴかいち", "services": ["jihatsu", "houday"], "address": "千代田区平河町2-12-4 2階・3階", "tel": "03-3239-0686", "lat": 35.680565, "lng": 139.741577, "age": "", "tags": ["体験活動", "集団遊び"], "summary": "遊びや生活力を身につけるプログラムが中心。外出・体験活動を通じて人間関係や自然、命の大切さなどを実体験で学ぶ。", "url": "https://www.d-and-a-networks.jp/pikaichi/", "cats": ["pickup"]},
  {"ward": "千代田区", "name": "メルケア 発達支援センター", "services": ["jihatsu"], "address": "千代田区霞が関3-5-1 近鉄霞が関ビル", "tel": "03-6550-8585", "lat": 35.671429, "lng": 139.745148, "age": "未就学児", "tags": ["個別療育", "言語聴覚", "家庭指導"], "summary": "綿密なアセスメントに基づく個別の臨床療育と、家庭での療育方法の指導が中心。言語聴覚訓練にも対応。", "url": "https://www.melcare.org/", "cats": ["lang"]},
  {"ward": "千代田区", "name": "言語聴覚支援センター", "services": ["jihatsu"], "address": "千代田区霞が関3-5-1 近鉄霞が関ビル", "tel": "03-6811-3261", "lat": 35.671429, "lng": 139.745148, "age": "おおむね0〜3歳", "tags": ["言語聴覚士", "作業療法士", "ことば・きこえ"], "summary": "言語聴覚士・作業療法士らが、ことば・発声・きこえなどコミュニケーション面に課題のある子の検査・訓練・指導を行う。早期療育に注力。", "url": "https://www.slht.jp/", "cats": ["lang", "sst"]},
  {"ward": "千代田区", "name": "AIAI PLUS 麹町", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "千代田区麹町3-12-12 麹町Mビル2階", "tel": "03-6265-4823", "lat": 35.685204, "lng": 139.738556, "age": "未就学〜", "tags": ["個別", "集団", "学習", "戸外活動"], "summary": "児童発達支援・放課後等デイ・保育所等訪問支援の多機能型。個別支援・集団活動・学習活動・戸外活動を実施。", "url": "https://plus.aiai-cc.co.jp/facility/koujimachi/", "cats": ["study"]},
  {"ward": "千代田区", "name": "ティーンズ御茶ノ水", "services": ["houday"], "address": "千代田区神田駿河台3-5-1 三五ビル1階", "tel": "050-2018-2067", "lat": 35.695889, "lng": 139.763885, "age": "小〜高校生", "tags": ["キャリア教育", "学習", "お仕事体験"], "summary": "発達障害のある子向けのキャリアデザイン教育。「学習・生活・将来」を軸に、平日セッションと週末のお仕事体験で自己理解と進路選択を支援。", "url": "https://www.teensmoon.com/", "cats": ["study", "career"]},
  {"ward": "千代田区", "name": "monte-e-mare（モンテマーレ）", "services": ["houday"], "address": "千代田区神田佐久間町4-11-4", "tel": "03-5823-4778", "lat": 35.697647, "lng": 139.779846, "age": "就学児", "tags": ["モンテッソーリ", "運動療育", "創作", "送迎あり"], "summary": "モンテッソーリ教育をベースに「自分で考え、選ぶ力」を育てる。運動療育・創作活動を軸に個別に対応。送迎あり。", "url": "https://montemare.jp/", "cats": ["motor", "pickup"]},
  {"ward": "千代田区", "name": "障害児訪問支援ナンシー", "services": ["houmon"], "address": "千代田区神田神保町1-14-1（事業所）", "tel": "03-6811-0920", "lat": 35.696732, "lng": 139.758148, "age": "", "tags": ["自宅訪問", "医療的ケア", "看護師"], "summary": "外出が難しい子の自宅に看護師が訪問。吸引・経管栄養などの医療的ケアをしながら遊びや学習を支援。※地図の位置は事業所の所在地。", "url": "https://nancy.florence.or.jp/", "cats": ["study", "medcare"]},
  {"ward": "千代田区", "name": "てらぴぁぽけっと 御茶ノ水教室", "services": ["jihatsu"], "address": "千代田区神田駿河台3-3-5 小林ビル2階", "tel": "03-6285-1077", "lat": 35.695885, "lng": 139.764267, "age": "未就学児", "tags": ["少人数", "個別対応", "ステップ式"], "summary": "825項目の発達ステップを基準に、専門指導員が一人ひとりに合わせたセラピーを組み立てる。少人数で個別対応。", "url": "https://www.terapiapocket.com/", "cats": []},
  {"ward": "千代田区", "name": "発達支援スタジオ ちゃれんじキッズ千代田", "services": ["jihatsu"], "address": "千代田区九段南3-4-5 ビラ・アペックス市ヶ谷301", "tel": "03-6380-8298", "lat": 35.691933, "lng": 139.741608, "age": "未就学児", "tags": ["感覚統合", "ABA", "SST"], "summary": "感覚統合・ABA（応用行動分析）・SSTを組み合わせた3時間のプログラム。個別・マンツーマン座学・小集団活動を行う。", "url": "https://challenge-kids.jp/", "cats": ["sensory", "study", "sst", "aba"]},
  {"ward": "千代田区", "name": "Lii sports studio 大手町", "services": ["jihatsu"], "address": "千代田区神田錦町2-5-4 第二亀谷ビル1階", "tel": "070-9355-5232", "lat": 35.692017, "lng": 139.76268, "age": "0〜5歳", "tags": ["運動療育", "デジタル運動", "少人数集団"], "summary": "デジタル運動プログラムで楽しく体を動かし、基本動作・認知・社会性を育てる運動療育。個別と5名前後の集団を組み合わせる。", "url": "https://liistyle.co.jp/liisportsstudio/", "cats": ["motor", "sst"]},
  {"ward": "台東区", "name": "ろぐ", "services": ["jihatsu", "houday"], "address": "台東区上野7-13-6 上野Sビル2階", "tel": "03-6802-7015", "lat": 35.716892, "lng": 139.780838, "age": "0歳〜高校生", "tags": ["個別", "小グループ", "就労準備"], "summary": "未就学児は基本的な生活習慣と就学準備を個別・小グループで。放課後等デイでは社会性と生活力を育て、高学年からは就労準備訓練も。", "url": "https://haku-mata.jp/", "cats": ["study", "sst", "career"]},
  {"ward": "台東区", "name": "Quirky（クァーキー）北上野", "services": ["jihatsu", "hoikuhoumon"], "address": "台東区北上野1-15-5 カスタリア北上野102", "tel": "03-5830-7995", "lat": 35.718884, "lng": 139.783386, "age": "未就学児", "tags": ["1対1", "小集団", "就学準備"], "summary": "1対1を基本とした個別療育と小集団のグループ療育。一人ひとりの困りごとに合わせたオーダーメイドのプログラムで、自己肯定感と就学に向けた力を育てる。", "url": "https://www.quirky3721.com/", "cats": ["study"]},
  {"ward": "台東区", "name": "リエゾン上野", "services": ["jihatsu"], "address": "台東区北上野1-8-5 ビリーフ上野1階", "tel": "03-5830-9430", "lat": 35.717297, "lng": 139.78212, "age": "〜6歳", "tags": ["運動療育", "小グループ", "保護者相談"], "summary": "運動と発達支援を組み合わせた小グループレッスン。一人ひとりに寄り添い、子どもの自信づくりを重視。保護者の相談にも対応。", "url": "https://l-zon.com/studio/ueno/", "cats": ["motor"]},
  {"ward": "台東区", "name": "台東区松が谷福祉会館（こども療育室）", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "台東区松が谷1-4-12", "tel": "03-3842-2671", "lat": 35.711449, "lng": 139.785522, "age": "0歳〜小学1年生", "tags": ["区立", "個別指導", "グループ指導", "専門職チーム"], "summary": "区立の療育施設。多面的な発達評価にもとづき、専門スタッフのチームで個別指導とグループ指導を行う。放課後等デイは小学1年生が対象。", "url": "https://www.city.taito.lg.jp/kenkohukusi/shogai/syougaisyasisetu/matsugaya_fukushi/kodomoryouiku.html", "cats": []},
  {"ward": "台東区", "name": "リエゾン浅草橋", "services": ["jihatsu", "houday"], "address": "台東区浅草橋1-2-8 マルイチビル7階", "tel": "03-5835-0535", "lat": 35.696609, "lng": 139.784286, "age": "未就学〜", "tags": ["運動療育", "スモールグループ"], "summary": "「明るく・楽しく・元気よく」をモットーにした運動療育。スモールグループで苦手意識を減らし、友だちとの関わりや「できた」を積み重ねる。", "url": "https://l-zon.com/studio/asakusa/", "cats": ["motor", "sst"]},
  {"ward": "台東区", "name": "ファーストシーンドリーム浅草橋", "services": ["jihatsu", "houday"], "address": "台東区浅草橋1-22-3 FIVE-i 2階", "tel": "03-5666-5656", "lat": 35.697567, "lng": 139.784149, "age": "未就学〜", "tags": ["個別", "集団", "創作", "学習"], "summary": "個別支援と集団療育を組み合わせ、創作・文化活動・社会訓練・学習など多様なプログラムで子どもの「好き」「得意」を見つける。", "url": "https://firstscene-smile.com/", "cats": ["study", "pickup"]},
  {"ward": "台東区", "name": "コラゾン浅草橋", "services": ["jihatsu", "houday"], "address": "台東区浅草橋5-2-3 柳北ビル2階", "tel": "03-5820-8140", "lat": 35.699154, "lng": 139.781479, "age": "小学生（4年生まで推奨）", "tags": ["運動療育", "体幹", "グループ"], "summary": "体幹・基礎体力の向上を中心にした運動療育のグループレッスン。運動の土台づくりとコミュニケーション力を育てる。長期休暇は屋外活動も。", "url": "https://corazon-kid.com/studio/asakusa/", "cats": ["motor", "sst", "pickup"]},
  {"ward": "台東区", "name": "ほわわ台東", "services": ["jihatsu"], "address": "台東区竜泉1-32-9", "tel": "03-6658-8710", "lat": 35.724579, "lng": 139.789322, "age": "0〜6歳", "tags": ["医療的ケア", "重症心身障害", "地域交流"], "summary": "医療的ケアが必要な子や障害のある未就学児が対象。季節行事やプール、散策など「当たり前の経験が当たり前にできる」支援を大切にする。", "url": "https://musou.or.jp/place/33/", "cats": ["medcare"]},
  {"ward": "台東区", "name": "コペルプラス 上野おかちまち教室", "services": ["jihatsu"], "address": "台東区台東4-17-2 偕楽ビル2階", "tel": "03-3839-5101", "lat": 35.70639, "lng": 139.779587, "age": "0〜6歳", "tags": ["幼児教室型", "個別"], "summary": "幼児向けの児童発達支援スクール。「やった！できた！楽しかった！」と思える体験を重ね、子どもの可能性を伸ばす。", "url": "https://copelplus.copel.co.jp/school/ueno-okachimachi/", "cats": []},
  {"ward": "台東区", "name": "ブロッサムジュニア 三ノ輪教室", "services": ["jihatsu", "houday"], "address": "台東区竜泉3-42-7", "tel": "03-6802-4596", "lat": 35.726368, "lng": 139.791626, "age": "未就学〜", "tags": ["個別", "集団", "SST"], "summary": "得意・不得意に合わせた個別療育と、友だちとの関わりを学ぶ集団療育。自己肯定感や達成感を育て、保護者のサポートも行う。", "url": "https://www.blo-minowa.com/", "cats": ["sst"]},
  {"ward": "台東区", "name": "ウィズ・ユー新御徒町", "services": ["jihatsu", "houday"], "address": "台東区小島2-14-4 桂昇新御徒町ビル2階", "tel": "03-5839-2779", "lat": 35.706223, "lng": 139.781921, "age": "3歳〜高校生", "tags": ["個別学習", "プログラミング", "送迎あり"], "summary": "個別学習と主活動が中心。プログラミング学習も取り入れ、子どもが自発的に活動できるよう支援。園・学校・自宅への送迎あり。", "url": "https://www.with-ac.com/shisetu/shinokachimachi/", "cats": ["study", "pickup"]},
  {"ward": "台東区", "name": "リニエプラッツ台東", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "台東区上野桜木2-19-2 クリーンハイツ101", "tel": "03-5842-1934", "lat": 35.722698, "lng": 139.7733, "age": "", "tags": ["重症心身障害", "医療的ケア", "看護師常駐"], "summary": "重症心身障害児・医療的ケア児を受け入れる施設。看護師が常駐し、自宅と学校以外で落ち着いて過ごせる場を提供。", "url": "https://linie-group.jp/office/platz-taito/", "cats": ["medcare", "pickup"]},
  {"ward": "台東区", "name": "ウィズ・ユー日暮里", "services": ["jihatsu", "houday"], "address": "台東区谷中4-4-3 2階", "tel": "03-5809-0881", "lat": 35.721268, "lng": 139.766739, "age": "3歳〜高校生", "tags": ["個別学習", "プログラミング"], "summary": "個別学習と主活動を通じて発達段階に合わせた療育を行う。プログラミング学習も導入。週1回から利用できる。", "url": "https://www.with-ac.com/shisetu/nippori/", "cats": ["study", "pickup"]},
  {"ward": "台東区", "name": "ワールドキッズ 三ノ輪教室", "services": ["jihatsu", "houday"], "address": "台東区日本堤1-6-11 椿ビル2階", "tel": "03-3873-6822", "lat": 35.725182, "lng": 139.798065, "age": "未就学〜小学生", "tags": ["感覚統合", "ABA", "送迎あり", "土日祝営業"], "summary": "感覚統合とABA療育を柱に、個室の落ち着いた環境で個別に支援。送迎あり、土日祝も営業。", "url": "https://worldkids.jp/", "note": "2026年8月開所の新しい教室です", "cats": ["sensory", "aba", "pickup"]},
  {"ward": "台東区", "name": "獏のたまご リバーサイド", "services": ["houday"], "address": "台東区今戸2-2-2 PLENDY浅草1階", "tel": "03-5808-9361", "lat": 35.720116, "lng": 139.805618, "age": "就学児", "tags": ["学校・家庭と連携"], "summary": "子どもの状態に合わせ、楽しみながら支援につながる活動を提案。学校や家庭との連携を大切にしている。", "url": "https://www.baku-egg.com/", "cats": ["pickup"]},
  {"ward": "台東区", "name": "オアゾ子供クラブ", "services": ["houday"], "address": "台東区北上野2-25-8", "tel": "03-6802-8178", "lat": 35.718506, "lng": 139.785202, "age": "就学児", "tags": ["学習指導", "リトミック", "美術", "IT療育"], "summary": "元公立小学校教員による学習指導のほか、音楽・リトミック体操、美術、IT療育を提供。", "url": "https://www.oazo-kodomoclub.net/", "cats": ["motor", "study", "pickup"]},
  {"ward": "台東区", "name": "つばさ放課後クラブ", "services": ["houday"], "address": "台東区三ノ輪1-27-11 三ノ輪福祉センター2階", "tel": "03-5603-0093", "lat": 35.729492, "lng": 139.792282, "age": "小1〜高3", "tags": ["個別", "集団", "地域交流", "送迎あり"], "summary": "個別活動と集団活動を組み合わせ、他の子や地域との交流を通じて社会性と集中力を育てる。送迎あり。", "url": "https://taitoutubasafukushi-kai.com/facility/08.html", "note": "利用は台東区民のみ（公式サイト記載）", "cats": ["sst", "pickup"]},
  {"ward": "台東区", "name": "結ふる美谷東京", "services": ["houday"], "address": "台東区東上野1-25-8 萬屋ビル2階", "tel": "03-6803-2987", "lat": 35.708675, "lng": 139.780304, "age": "小〜高校生", "tags": ["学習", "制作", "運動", "音楽・ダンス"], "summary": "個別支援計画に基づき、学習・制作・運動・音楽・ダンス・手話など多彩な活動で特性に応じた支援を行う。", "url": "https://www.mitanikai.com/publics/index/48/", "cats": ["motor", "study", "pickup"]},
  {"ward": "台東区", "name": "Bloom Kids 東上野教室", "services": ["houday"], "address": "台東区東上野2-2-3 ビルボ東上野ビル201", "tel": "03-6231-6763", "lat": 35.708878, "lng": 139.781677, "age": "就学児", "tags": ["運動療育", "コーディネーション"], "summary": "コーディネーショントレーニングを使った運動療育で、コミュニケーション力・協調性・自立できる体力を育てる。", "url": "https://ikikaku0424.com/bloom-kids/", "cats": ["motor", "sst", "pickup"]},
  {"ward": "台東区", "name": "スマートキッズプラス 南千住", "services": ["houday"], "address": "台東区竜泉3-40-6 ハイツエスポワール1階", "tel": "03-5808-7955", "lat": 35.726719, "lng": 139.792175, "age": "小学1〜6年生", "tags": ["小学生", "個別療育計画"], "summary": "小学生向けの放課後等デイ。保護者と一緒に一人ひとりに合わせた療育計画を立て、生きる力を育てる。", "url": "https://smart-kids.co.jp/classroom/minamisenju.html", "cats": ["pickup"]},
  {"ward": "台東区", "name": "スマートキッズジュニア 元浅草", "services": ["houday"], "address": "台東区元浅草1-19-9 サンポービル2階201", "tel": "03-5246-4712", "lat": 35.708744, "lng": 139.782593, "age": "中学1年〜高校3年生", "tags": ["中高生", "個別療育計画"], "summary": "中高生向けの放課後等デイ。一人ひとりの個性に合わせた療育計画で、生きる力と可能性を伸ばす。", "url": "https://smart-kids.co.jp/ryoiku/classroom/j-motoasakusa.html", "cats": ["pickup"]},
  {"ward": "台東区", "name": "放課後等デイサービス MALAMA（マラマ）", "services": ["houday"], "address": "台東区西浅草3-26-3 象牙会館2階", "tel": "03-6676-5448", "lat": 35.716518, "lng": 139.791, "age": "就学児", "tags": ["運動療育", "英語", "ビジョントレーニング", "SST"], "summary": "運動療育・工作・感覚ゲーム・英語・ビジョントレーニング・SSTなど多彩な体験で「好き」と「できる」を育てる。土曜は遠足が中心。", "url": "https://www.freija.jp/", "cats": ["motor", "sensory", "study", "sst", "pickup"]},
  {"ward": "台東区", "name": "Bloom Kids 東浅草教室", "services": ["houday"], "address": "台東区東浅草2-1-11 203", "tel": "03-6240-6078", "lat": 35.723183, "lng": 139.801376, "age": "就学児", "tags": ["運動療育", "コーディネーション"], "summary": "コーディネーショントレーニングを使った運動療育で、コミュニケーション力・協調性・自立できる体力を育てる。", "url": "https://ikikaku0424.com/bloom-kids/", "cats": ["motor", "sst", "pickup"]},
  {"ward": "台東区", "name": "ティーンズ日暮里", "services": ["houday"], "address": "台東区谷中7-13-2", "tel": "050-2018-0701", "lat": 35.726135, "lng": 139.772339, "age": "小〜高校生", "tags": ["キャリア教育", "進路支援"], "summary": "ASD・ADHD・LDなど特性のある小中高生向け。キャリアデザイン教育で「はたらく力」を育て、進路と生活スキルを支援。", "url": "https://www.teensmoon.com/accessmap/pr/", "cats": ["career"]},
  {"ward": "台東区", "name": "獏のたまご 浅草", "services": ["houday"], "address": "台東区浅草6-36-12 瀬田ビル2階", "tel": "03-6782-0097", "lat": 35.719215, "lng": 139.801392, "age": "就学児", "tags": ["学校・家庭と連携"], "summary": "子どもの状態に合わせ、楽しみながら支援につながる活動を提案。学校や家庭との連携を大切にしている。", "url": "https://www.baku-egg.com/", "cats": ["pickup"]},
  {"ward": "台東区", "name": "児童訪問支援 おこSUN", "services": ["houmon", "hoikuhoumon"], "address": "台東区浅草橋1-9-12 浅草橋駅前ビル6階（事業所）", "tel": "03-5809-2066", "lat": 35.696987, "lng": 139.785858, "age": "", "tags": ["自宅訪問", "園・学校訪問", "訪問看護"], "summary": "居宅訪問型児童発達支援と保育所等訪問支援を提供。訪問看護の事業者が、子どもと家族を訪問で支える。※地図の位置は事業所の所在地。", "url": "https://sun.medicept.co.jp/about-job/post-4493/", "cats": []},
  {"ward": "中央区", "name": "中央区立子ども発達支援センター ゆりのき", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "中央区明石町12-1 中央区保健所等複合施設3階", "tel": "03-3545-9844", "lat": 35.666866, "lng": 139.776306, "age": "0〜18歳", "tags": ["区立", "発達相談", "保育所等訪問"], "summary": "区立の発達支援センター。発達相談、児童発達支援（1.5〜5歳）、放課後等デイ（6〜18歳）、保育所等訪問支援、障害児相談支援を行う。", "url": "https://www.city.chuo.lg.jp/a0027/kosodate/kosodate/kodomonohattatsusien/kodomohattatusiencenter_yurinoki.html", "cats": ["pickup"]},
  {"ward": "中央区", "name": "トリプル・ハート", "services": ["jihatsu", "houday"], "address": "中央区日本橋茅場町2-5-6 日本橋大江戸ビル2階", "tel": "03-6222-9822", "lat": 35.678963, "lng": 139.778564, "age": "2歳〜高校3年生", "tags": ["運動", "ダンス", "英語", "プログラミング"], "summary": "用具を使った運動・微細運動・ダンス・歌で成長を支援。英語、プログラミング、就労準備にも取り組む。", "url": "https://triple-heart.jp/", "note": "公式サイトに「満所のため新規募集停止中」との記載あり", "cats": ["motor", "study", "career", "pickup"]},
  {"ward": "中央区", "name": "コペルプラス 新富町教室", "services": ["jihatsu"], "address": "中央区新富2-11-2 新富MTビル2階", "tel": "03-6222-9617", "lat": 35.671577, "lng": 139.774918, "age": "0〜6歳", "tags": ["幼児教室型", "個別"], "summary": "幼児向けの児童発達支援スクール。「子どもの可能性は無限大」をモットーに、楽しくのびのび学べる環境で力を引き出す。", "url": "https://copelplus.copel.co.jp/school/shintomicho/", "cats": []},
  {"ward": "中央区", "name": "児童デイサービス スマイル日本橋", "services": ["houday"], "address": "中央区日本橋茅場町2-17-9 長尾ビル201", "tel": "03-3527-3696", "lat": 35.678654, "lng": 139.780579, "age": "就学児", "tags": ["モンテッソーリ", "運動療育", "タブレット学習", "外出体験"], "summary": "モンテッソーリ教育・運動療育・タブレット学習などのプログラムと、土日祝の外出体験を提供。", "url": "https://www.dayservice-smilesmile.com/page/nihonbashi-access/", "cats": ["motor", "study", "pickup"]},
  {"ward": "中央区", "name": "放課後等デイサービス ポジリブ", "services": ["houday"], "address": "中央区日本橋久松町6-9 AS ONE日本橋East2階", "tel": "03-3527-3201", "lat": 35.689484, "lng": 139.7845, "age": "小〜高校生", "tags": ["居場所づくり", "オーダーメイド療育"], "summary": "遊びや学習を通じた充実した放課後の居場所づくり。個性に合わせたオーダーメイド療育で自立と生きる力を育てる。", "url": "https://pojilive.com/", "cats": ["study", "pickup"]},
  {"ward": "中央区", "name": "ポジリブミニ", "services": ["jihatsu"], "address": "中央区東日本橋2-24-12 東日本橋槇町ビル1階", "tel": "03-5829-5915", "lat": 35.694469, "lng": 139.786545, "age": "未就学児", "tags": ["就学準備", "自己肯定感"], "summary": "就学準備と発達支援に力を入れ、個性に寄り添った療育で自己肯定感と前向きに生きる力を育てる。", "url": "https://pojilive.com/", "cats": ["study"]},
  {"ward": "中央区", "name": "アルエット", "services": ["houday"], "address": "中央区日本橋小伝馬町5-1 十思スクエア1階", "tel": "03-5962-3070", "lat": 35.69059, "lng": 139.777054, "age": "小1〜高3", "tags": ["重症心身障害", "医療的ケア", "スヌーズレン"], "summary": "医療的ケアが必要な子を含む重症心身障害児の放課後等デイ（定員5名）。スヌーズレンや散歩など個別のニーズに応じて支援。", "url": "https://yamadorinokai.sakura.ne.jp/alouette/", "cats": ["sensory", "medcare", "pickup"]},
  {"ward": "中央区", "name": "みらいキッズ月島", "services": ["jihatsu", "houday"], "address": "中央区月島3-17-2 岡崎ビル2階", "tel": "03-6228-2420", "lat": 35.66264, "lng": 139.780609, "age": "未就学〜18歳", "tags": ["運動", "生活自立", "機能訓練"], "summary": "「からだが動けば、こころが動く」を理念に、日常生活の自立支援や機能訓練、遊びと学びの場を提供。", "url": "https://www.mirai-kids.jp/miraikids-tsukishima", "cats": ["motor", "pickup"]},
  {"ward": "中央区", "name": "アストハピコ 浜町教室", "services": ["jihatsu", "houday"], "address": "中央区日本橋浜町2-42-9 浜町中央ビル2階", "tel": "03-6661-9047", "lat": 35.687908, "lng": 139.787796, "age": "幼児〜中学生", "tags": ["運動", "英語", "学習", "SST"], "summary": "運動・英語・学習・お仕事体験・脳トレ・SSTなどを組み合わせ、個別対応で苦手を得意に変えるトレーニングを行う。", "url": "https://www.astohapico.com/hama/", "cats": ["motor", "study", "sst", "career"]},
  {"ward": "中央区", "name": "アストハピコ 人形町教室", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "中央区日本橋人形町2-17-10 人形町小池ビル2階", "tel": "03-6661-7347", "lat": 35.685127, "lng": 139.785446, "age": "幼児〜中学生", "tags": ["運動", "英語", "学習", "SST"], "summary": "運動・英語・学習・お仕事体験・脳トレ・SSTなどを組み合わせ、個別対応で苦手を得意に変えるトレーニングを行う。", "url": "https://www.astohapico.com/nin/", "cats": ["motor", "study", "sst", "career"]},
  {"ward": "中央区", "name": "コアヴィレッジ日本橋", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "中央区日本橋小網町9-5 2階", "tel": "03-6264-8474", "lat": 35.683098, "lng": 139.78035, "age": "未就学〜", "tags": ["多機能型"], "summary": "児童発達支援・放課後等デイ・保育所等訪問支援の多機能型事業所。プログラムの詳細は公式サイトで確認を。", "url": "https://corevillage.jp/facility/tokyo/corevillage-nihonbashi/", "cats": []},
  {"ward": "中央区", "name": "プレップサポートセンター 晴海第一", "services": ["houday"], "address": "中央区晴海2-1-40 晴海プライムスクエア203B-1", "tel": "03-5534-8240", "lat": 35.656219, "lng": 139.783569, "age": "就学児", "tags": ["マンツーマン学習", "集団活動", "季節行事"], "summary": "マンツーマンの学習支援と集団活動。手芸・工作やソーシャルスキル訓練、遠足・運動会などの行事で生活力を育てる（定員10名）。", "url": "https://tokyo-soic.com/class/harumi/", "cats": ["study", "sst"]},
  {"ward": "中央区", "name": "プレップサポートセンター 晴海第二", "services": ["houday"], "address": "中央区晴海2-1-40 晴海プライムスクエア203B-2", "tel": "03-6228-2243", "lat": 35.656219, "lng": 139.783569, "age": "就学児", "tags": ["マンツーマン学習", "集団活動", "季節行事"], "summary": "マンツーマンの学習支援と集団活動。手芸・工作やソーシャルスキル訓練、遠足・運動会などの行事で生活力を育てる（定員10名）。", "url": "https://tokyo-soic.com/class/harumi/", "cats": ["study", "sst"]},
  {"ward": "中央区", "name": "ワールドキッズ 水天宮前教室", "services": ["jihatsu", "houday"], "address": "中央区日本橋中洲4-1 メゾン・ド・中洲203", "tel": "03-6231-1194", "lat": 35.682659, "lng": 139.789658, "age": "0〜18歳", "tags": ["感覚統合", "言語", "SST"], "summary": "作業療法士が推奨する感覚統合療育で、遊びや運動を通じて体と感覚の発達を支援。言語聴覚士監修のプログラムやSSTも。", "url": "https://worldkids.jp/", "cats": ["lang", "motor", "sensory", "sst"]},
  {"ward": "中央区", "name": "とも育", "services": ["jihatsu", "houday", "hoikuhoumon"], "address": "中央区日本橋富沢町4-1 ミズホビル3階", "tel": "03-6826-2670", "lat": 35.687801, "lng": 139.782761, "age": "未就学〜18歳", "tags": ["体験型療育", "SST", "感情理解"], "summary": "「体験」をテーマにした療育で、生活スキル・運動・SST・コミュニケーション・感情理解を育てる。園や学校での集団生活も支援。", "url": "https://six-l.net/tomoiku/", "cats": ["motor", "sst", "pickup"]},
  {"ward": "中央区", "name": "てらぴぁぽけっと 日本橋浜町教室", "services": ["jihatsu"], "address": "中央区日本橋浜町2-10-9 日本橋浜町二丁目ビル2階", "tel": "03-5801-9872", "lat": 35.687653, "lng": 139.785522, "age": "未就学児", "tags": ["少人数", "個別対応", "ステップ式"], "summary": "825項目の発達ステップを基準に、専門指導員が一人ひとりに合わせたセラピーを組み立てる。少人数で個別対応。", "url": "https://www.terapiapocket.com/", "cats": []},
  {"ward": "中央区", "name": "スターゴールドキッズ", "services": ["jihatsu", "houday"], "address": "中央区八丁堀4-9-4 VORT八丁堀2ビル2階", "tel": "03-6555-2331", "lat": 35.674507, "lng": 139.777512, "age": "未就学〜小学生", "tags": ["言語訓練", "ビジョントレーニング", "音楽療法", "土日対応"], "summary": "言語訓練・SST・個別学習に加え、ビジョントレーニング、音楽療法、サイエンス教室など多角的に支援。土日も対応。", "url": "https://www.star-kids.link/", "cats": ["lang", "study", "sst", "pickup"]},
  {"ward": "中央区", "name": "LITALICOジュニア 銀座新富町教室", "services": ["jihatsu", "hoikuhoumon"], "address": "中央区新富1-8-6 SSビル2階", "tel": "03-3553-3962", "lat": 35.672684, "lng": 139.774551, "age": "0〜6歳", "tags": ["個別", "集団", "スモールステップ"], "summary": "個別支援と集団支援を組み合わせ、スモールステップでスキル獲得を後押し。言語・コミュニケーションや社会性の向上を支援。", "url": "https://junior.litalico.jp/school/tokyo/ginzashintomicho/", "cats": ["lang", "sst", "pickup"]},
  {"ward": "中央区", "name": "えびすま 日本橋教室", "services": ["jihatsu"], "address": "中央区日本橋本町3-1-4 センターヒルズ大島2階", "tel": "03-6825-0929", "lat": 35.688198, "lng": 139.774185, "age": "0〜6歳", "tags": ["ことば", "SST", "基礎学習", "180分"], "summary": "ことばの発達・SST・基礎学習の3分野に特化。マンツーマン〜少人数で対応する長時間型（180分）の児童発達支援。", "url": "https://ebisuma.world/ebisuma03/", "cats": ["lang", "study", "sst"]},
  {"ward": "中央区", "name": "てらぴぁぽけっと 新富町教室", "services": ["jihatsu"], "address": "中央区湊3-2-9 丹波ビル1階", "tel": "03-6222-8535", "lat": 35.67033, "lng": 139.777832, "age": "未就学児", "tags": ["少人数", "個別対応", "ステップ式"], "summary": "825項目の発達ステップを基準に、専門指導員が一人ひとりに合わせたセラピーを組み立てる。少人数で個別対応。", "url": "https://www.terapiapocket.com/", "cats": []},
  {"ward": "中央区", "name": "LICGROW 月島教室", "services": ["jihatsu", "houday"], "address": "中央区月島1-1-10 KTビル1階", "tel": "050-1731-2930", "lat": 35.666096, "lng": 139.782364, "age": "未就学〜", "tags": ["自立支援", "送迎あり"], "summary": "子どもが本来もつ成長の力を伸ばし、自立と主体的な生活を育てる療育。中央区・江東区の指定の学校・園からの送迎あり。", "url": "https://licgrow.jp/school-search/553/", "cats": ["pickup"]},
  {"ward": "中央区", "name": "多機能型重症児デイ ひかりの森", "services": ["jihatsu", "houday"], "address": "中央区築地6-22-3 ウィンド築地Ⅱ2階", "tel": "03-6278-8848", "lat": 35.664227, "lng": 139.772003, "age": "0〜12歳", "tags": ["重症心身障害", "医療的ケア", "送迎あり"], "summary": "重症心身障害児・医療的ケア児のための多機能型デイ。「今を全力で楽しみ未来の成長に繋げる」を理念に個別に対応。送迎あり。", "url": "https://www.corp-on.com/", "cats": ["medcare", "pickup"]},
  {"ward": "中央区", "name": "ヒトツナ 日本橋馬喰町教室", "services": ["jihatsu", "houday"], "address": "中央区日本橋馬喰町1-9-9 加富屋ビル2階", "tel": "03-6661-0885", "lat": 35.694267, "lng": 139.782608, "age": "", "tags": ["集団療育", "社会性"], "summary": "子どもが「楽しい」「やってみたい」と思える活動を取り入れた集団療育で、コミュニケーション力と社会性を育てる。", "url": "https://nihonbashibakurocho.hattatsu-hitotsuna.com/", "cats": ["sst"]},
  {"ward": "中央区", "name": "A to Z Academy 銀座", "services": ["jihatsu", "houday"], "address": "中央区銀座8-16-4 JLBグランエクリュ銀座3階", "tel": "03-5990-2859", "lat": 35.665943, "lng": 139.763931, "age": "未就学〜就学児", "tags": ["個別", "集団", "言語", "感覚統合"], "summary": "個別と集団を組み合わせ、言語・感覚統合・生活スキルなどをオーダーメイドで支援。「できた」の積み重ねで自己肯定感を育てる。", "url": "https://atoz-academy.co.jp/", "cats": ["lang", "sensory"]},
  {"ward": "中央区", "name": "みらいキッズ八丁堀", "services": ["jihatsu", "houday"], "address": "中央区新川2-18-5 ASビル2階", "tel": "03-5776-9877", "lat": 35.674461, "lng": 139.781677, "age": "", "tags": ["運動", "生活自立", "機能訓練"], "summary": "「からだが動けば、こころが動く」を理念に、日常生活の自立支援や機能訓練、遊びと学びの場を提供。", "url": "https://www.mirai-kids.jp/", "cats": ["motor", "pickup"]},
  {"ward": "中央区", "name": "AIAI VISIT 東京", "services": ["hoikuhoumon"], "address": "中央区銀座7-16-12 G-7ビルディング6階（事業所）", "tel": "070-3282-8840", "lat": 35.666313, "lng": 139.765366, "age": "", "tags": ["園・学校訪問"], "summary": "支援員が保育園・幼稚園・小学校を訪問し、発達に特性のある子が集団生活をスムーズに送れるようサポートする。※地図の位置は事業所の所在地。", "url": "https://visit.aiai-cc.co.jp/", "cats": ["sst"]},
  {"ward": "千代田区", "name": "瀬川記念小児神経学クリニック", "services": ["clinic"], "address": "千代田区神田駿河台2-8 瀬川ビル2階", "tel": "03-3294-0371", "lat": 35.699253, "lng": 139.76429, "age": "小児期に発症した疾患", "tags": ["小児神経科", "発達診断", "心理検査", "ABA・行動療法", "言語療法"], "summary": "小児期の神経・発達障害の専門クリニック。ASD・ADHD・LD・チック・吃音の診断に対応し、心理検査・行動療法・言語療法なども行う。", "url": "https://segawa-clinic.jp/", "note": "予約制（予約専用 03-3294-0372、平日13〜17時）", "cats": ["lang", "aba"]},
  {"ward": "千代田区", "name": "半蔵門のびすここどもクリニック", "services": ["clinic"], "address": "千代田区一番町4-16 プルミエール一番町1階", "tel": "03-6261-7540", "lat": 35.687642, "lng": 139.742487, "age": "子ども", "tags": ["小児科", "児童精神科", "心理検査", "ショートケア"], "summary": "小児科専門医と児童精神科医が、体と心の両面から子どもの成長を支える。発達障害の診断・治療、心理検査やショートケアなどの支援プログラムも。", "url": "https://nobisuko.jp/", "note": "すべて予約制。児童精神科の初診は平日診療時間内に電話で予約", "cats": []},
  {"ward": "千代田区", "name": "のびすこブランチ半蔵門", "services": ["clinic"], "address": "千代田区一番町4-25 相模屋第5ビル5階", "tel": "03-6261-2298", "lat": 35.687642, "lng": 139.742487, "age": "乳幼児〜思春期", "tags": ["児童精神科", "心理検査", "SST", "ペアトレ"], "summary": "児童精神科医の診察、心理検査（WISC等）、カウンセリング、SSTなどの集団プログラム、ペアレントトレーニング、園・学校との連携支援を行う。", "url": "https://nobisukobranch.jp/", "note": "完全予約制。初診予約は本院（半蔵門のびすここどもクリニック）で受付", "cats": ["sst"]},
  {"ward": "千代田区", "name": "シャーロットこども発達クリニック", "services": ["clinic"], "address": "千代田区二番町3-11 VORT二番町7階", "tel": "", "lat": 35.686115, "lng": 139.736904, "age": "新生児〜思春期", "tags": ["児童精神科", "発達検査", "心理カウンセリング", "療育相談"], "summary": "自閉スペクトラム症・ADHD・知的発達症などの神経発達症を診断。発達・知能検査、心理カウンセリング、療育相談、訪問看護・リハビリも行う。", "url": "https://www.charlotte-kodomo.com/", "note": "予約はWeb受付のみ（電話予約不可）。初診まで平均約1.5か月待ち（公式サイト記載）", "cats": []},
  {"ward": "中央区", "name": "しんとみ子どものこころのクリニック", "services": ["clinic"], "address": "中央区新富1-17-1 宮倉ビル6階", "tel": "03-5542-0825", "lat": 35.672034, "lng": 139.775346, "age": "初診は中学3年生まで", "tags": ["児童精神科", "学習", "気持ちのコントロール"], "summary": "子どもの行動・こころ・発達障害・学習・気持ちのコントロールなどの相談と診療を行う児童精神科。", "url": "https://shintomi-childpsychiatry.com/", "note": "完全予約制。初診予約はほぼ埋まっている状態（公式サイト記載）", "cats": ["study"]},
  {"ward": "中央区", "name": "こころの育ちクリニック", "services": ["clinic"], "address": "中央区日本橋馬喰町1-6-1 JU SKYTOWER日本橋4階", "tel": "03-3662-4970", "lat": 35.692726, "lng": 139.782372, "age": "子ども〜大人", "tags": ["児童精神科", "精神科", "心理検査", "親の相談"], "summary": "問診と心理検査で発達障害を診断し、薬物療法、親への相談、心理療法、心理士のカウンセリングを行う。不登校などの相談にも。", "url": "https://cocoro-sodachi.clinic/", "note": "完全予約制。初診の電話受付は毎週火曜15:00〜16:30", "cats": []},
  {"ward": "中央区", "name": "日本橋サンクリニック（児童精神科外来）", "services": ["clinic"], "address": "中央区日本橋2-1-21 第二東洋ビル3階", "tel": "03-5542-1718", "lat": 35.682699, "lng": 139.772346, "age": "思春期外来は10〜18歳頃", "tags": ["児童精神科", "思春期外来", "カウンセリング"], "summary": "心療内科・精神科の児童精神科外来。ADHD・ASDなどの医学的評価を行い、必要に応じて薬物療法やカウンセリングを行う。", "url": "https://sun-cl.com/child_psychiatry", "cats": []},
  {"ward": "中央区", "name": "聖路加国際病院 小児科", "services": ["clinic"], "address": "中央区明石町9-1", "tel": "03-3541-5151", "lat": 35.667451, "lng": 139.777068, "age": "子ども", "tags": ["総合病院", "神経外来", "子ども心療内科"], "summary": "総合病院の小児科。神経外来や子ども心療内科外来などの専門外来がある。", "url": "https://hospital.luke.ac.jp/guide/36_pediatrics/index.html", "note": "専門外来は予約制。紹介状がない場合は選定療養費（8,800円）がかかる", "cats": []},
  {"ward": "台東区", "name": "浅草橋こども発達リハビリクリニック", "services": ["clinic"], "address": "台東区浅草橋1-12-4 SCS ASAKUSABASHI 3階", "tel": "03-3864-2600", "lat": 35.697253, "lng": 139.783538, "age": "乳幼児〜", "tags": ["小児科", "作業療法", "運動療法", "日曜診療"], "summary": "ADHD・ASD疑いや、歩く・言葉がゆっくりな子の運動と感覚を評価し、医師が作業療法などの運動療法を行う小児科。日曜も診療。", "url": "http://asakusabashi-kodomo.com/", "note": "電話予約制", "cats": ["lang", "motor"]},
  {"ward": "台東区", "name": "ストレスケア東京上野駅前クリニック", "services": ["clinic"], "address": "台東区上野7-7-7 早稲田ビルヂング6階", "tel": "03-3842-7730", "lat": 35.714029, "lng": 139.778427, "age": "12〜22歳", "tags": ["思春期", "WISC検査", "認知行動療法", "デイケア"], "summary": "中高生・大学生向け。発達検査（WISC-V）、認知行動療法ベースのカウンセリング、少人数デイケア、薬物療法。不登校やコミュニケーションの悩みにも。", "url": "https://tokyoueno.com/", "note": "完全予約制。デイケアの初診は2026年1月から中止（公式サイト記載）", "cats": ["sst"]}
];

// 区立小学校・中学校（各区公式サイトの一覧。座標はOpenStreetMap）  level: e=小学校 / j=中学校・中等教育学校
window.SCHOOLS = [
  {"ward": "千代田区", "level": "e", "name": "麹町小学校", "address": "千代田区麹町2-8", "lat": 35.685334, "lng": 139.739766},
  {"ward": "千代田区", "level": "e", "name": "九段小学校", "address": "千代田区三番町16", "lat": 35.690384, "lng": 139.740873},
  {"ward": "千代田区", "level": "e", "name": "番町小学校", "address": "千代田区六番町8", "lat": 35.687979, "lng": 139.733797},
  {"ward": "千代田区", "level": "e", "name": "富士見小学校", "address": "千代田区富士見1-10-3", "lat": 35.697222, "lng": 139.746304},
  {"ward": "千代田区", "level": "e", "name": "お茶の水小学校", "address": "千代田区神田猿楽町1-1-1", "lat": 35.6971733, "lng": 139.7603211},
  {"ward": "千代田区", "level": "e", "name": "千代田小学校", "address": "千代田区神田司町2-16", "lat": 35.693196, "lng": 139.768436},
  {"ward": "千代田区", "level": "e", "name": "昌平小学校", "address": "千代田区外神田3-4-7", "lat": 35.701188, "lng": 139.769848},
  {"ward": "千代田区", "level": "e", "name": "和泉小学校", "address": "千代田区神田和泉町1", "lat": 35.699107, "lng": 139.778487},
  {"ward": "千代田区", "level": "j", "name": "麹町中学校", "address": "千代田区平河町2-5-1", "lat": 35.680322, "lng": 139.738989},
  {"ward": "千代田区", "level": "j", "name": "神田一橋中学校", "address": "千代田区一ツ橋2-6-14", "lat": 35.694214, "lng": 139.756917},
  {"ward": "千代田区", "level": "j", "name": "九段中等教育学校", "address": "千代田区九段北2-2-1", "lat": 35.696122, "lng": 139.747164},
  {"ward": "台東区", "level": "e", "name": "上野小学校", "address": "台東区東上野6-16-8", "lat": 35.713648, "lng": 139.783585},
  {"ward": "台東区", "level": "e", "name": "平成小学校", "address": "台東区台東4-21-15", "lat": 35.706286, "lng": 139.780316},
  {"ward": "台東区", "level": "e", "name": "根岸小学校", "address": "台東区根岸3-9-8", "lat": 35.723648, "lng": 139.779078},
  {"ward": "台東区", "level": "e", "name": "東泉小学校", "address": "台東区三ノ輪1-23-9", "lat": 35.728479, "lng": 139.792269},
  {"ward": "台東区", "level": "e", "name": "忍岡小学校", "address": "台東区池之端2-1-22", "lat": 35.713888, "lng": 139.766935},
  {"ward": "台東区", "level": "e", "name": "谷中小学校", "address": "台東区谷中2-9-16", "lat": 35.723655, "lng": 139.765252},
  {"ward": "台東区", "level": "e", "name": "金曽木小学校", "address": "台東区根岸4-16-22", "lat": 35.725736, "lng": 139.784986},
  {"ward": "台東区", "level": "e", "name": "黒門小学校", "address": "台東区上野1-16-20", "lat": 35.706896, "lng": 139.771049},
  {"ward": "台東区", "level": "e", "name": "大正小学校", "address": "台東区入谷2-23-8", "lat": 35.720824, "lng": 139.788126},
  {"ward": "台東区", "level": "e", "name": "浅草小学校", "address": "台東区花川戸1-14-15", "lat": 35.724355, "lng": 139.798414},
  {"ward": "台東区", "level": "e", "name": "台東育英小学校", "address": "台東区浅草橋2-26-8", "lat": 35.700005, "lng": 139.785772},
  {"ward": "台東区", "level": "e", "name": "蔵前小学校", "address": "台東区蔵前4-19-11", "lat": 35.704335, "lng": 139.789355},
  {"ward": "台東区", "level": "e", "name": "東浅草小学校", "address": "台東区東浅草2-27-19", "lat": 35.724355, "lng": 139.798414},
  {"ward": "台東区", "level": "e", "name": "富士小学校", "address": "台東区浅草4-48-9", "lat": 35.718641, "lng": 139.798552},
  {"ward": "台東区", "level": "e", "name": "松葉小学校", "address": "台東区松が谷1-13-16", "lat": 35.712212, "lng": 139.786509},
  {"ward": "台東区", "level": "e", "name": "千束小学校", "address": "台東区浅草4-24-11", "lat": 35.719151, "lng": 139.794161},
  {"ward": "台東区", "level": "e", "name": "石浜小学校", "address": "台東区清川1-14-21", "lat": 35.724618, "lng": 139.803645},
  {"ward": "台東区", "level": "e", "name": "田原小学校", "address": "台東区雷門1-5-14", "lat": 35.709948, "lng": 139.792848},
  {"ward": "台東区", "level": "e", "name": "金竜小学校", "address": "台東区千束1-9-9", "lat": 35.718481, "lng": 139.790103},
  {"ward": "台東区", "level": "j", "name": "御徒町台東中学校", "address": "台東区台東4-13-16", "lat": 35.706743, "lng": 139.777484},
  {"ward": "台東区", "level": "j", "name": "柏葉中学校", "address": "台東区下谷3-1-29", "lat": 35.72371, "lng": 139.786152},
  {"ward": "台東区", "level": "j", "name": "上野中学校", "address": "台東区上野桜木1-14-55", "lat": 35.720969, "lng": 139.774729},
  {"ward": "台東区", "level": "j", "name": "忍岡中学校", "address": "台東区上野公園18-20", "lat": 35.719178, "lng": 139.77908},
  {"ward": "台東区", "level": "j", "name": "浅草中学校", "address": "台東区蔵前1-3-4", "lat": 35.699821, "lng": 139.790175},
  {"ward": "台東区", "level": "j", "name": "桜橋中学校", "address": "台東区今戸2-1-8", "lat": 35.720524, "lng": 139.806994},
  {"ward": "台東区", "level": "j", "name": "駒形中学校", "address": "台東区北上野2-15-1", "lat": 35.717352, "lng": 139.784001},
  {"ward": "中央区", "level": "e", "name": "城東小学校", "address": "中央区八重洲2-2-1", "lat": 35.678705, "lng": 139.769321},
  {"ward": "中央区", "level": "e", "name": "泰明小学校", "address": "中央区銀座5-1-13", "lat": 35.672321, "lng": 139.761505},
  {"ward": "中央区", "level": "e", "name": "中央小学校", "address": "中央区湊1-4-1", "lat": 35.672123, "lng": 139.778772},
  {"ward": "中央区", "level": "e", "name": "明石小学校", "address": "中央区明石町1-15", "lat": 35.668581, "lng": 139.776399},
  {"ward": "中央区", "level": "e", "name": "京橋築地小学校", "address": "中央区築地2-13-1", "lat": 35.667831, "lng": 139.771212},
  {"ward": "中央区", "level": "e", "name": "明正小学校", "address": "中央区新川2-13-4", "lat": 35.67588, "lng": 139.781824},
  {"ward": "中央区", "level": "e", "name": "常盤小学校", "address": "中央区日本橋本石町4-4-26", "lat": 35.688283, "lng": 139.770551},
  {"ward": "中央区", "level": "e", "name": "日本橋小学校", "address": "中央区日本橋人形町1-1-17", "lat": 35.684555, "lng": 139.781487},
  {"ward": "中央区", "level": "e", "name": "有馬小学校", "address": "中央区日本橋蛎殻町2-10-23", "lat": 35.683285, "lng": 139.787976},
  {"ward": "中央区", "level": "e", "name": "久松小学校", "address": "中央区日本橋久松町7-2", "lat": 35.688807, "lng": 139.784501},
  {"ward": "中央区", "level": "e", "name": "阪本小学校", "address": "中央区日本橋兜町15-18", "lat": 35.679502, "lng": 139.77675},
  {"ward": "中央区", "level": "e", "name": "佃島小学校", "address": "中央区佃2-3-1", "lat": 35.668436, "lng": 139.784544},
  {"ward": "中央区", "level": "e", "name": "月島第一小学校", "address": "中央区月島4-15-1", "lat": 35.660587, "lng": 139.780245},
  {"ward": "中央区", "level": "e", "name": "月島第二小学校", "address": "中央区勝どき1-12-2", "lat": 35.660064, "lng": 139.775949},
  {"ward": "中央区", "level": "e", "name": "月島第三小学校", "address": "中央区晴海1-4-1", "lat": 35.658714, "lng": 139.785736},
  {"ward": "中央区", "level": "e", "name": "豊海小学校", "address": "中央区豊海町3-1", "lat": 35.653405, "lng": 139.771632},
  {"ward": "中央区", "level": "e", "name": "晴海西小学校", "address": "中央区晴海5-3-5", "lat": 35.650265, "lng": 139.77586},
  {"ward": "中央区", "level": "j", "name": "銀座中学校", "address": "中央区銀座8-19-15", "lat": 35.665366, "lng": 139.764947},
  {"ward": "中央区", "level": "j", "name": "佃中学校", "address": "中央区佃2-3-2", "lat": 35.667875, "lng": 139.784677},
  {"ward": "中央区", "level": "j", "name": "晴海中学校", "address": "中央区晴海1-5-3", "lat": 35.659531, "lng": 139.784908},
  {"ward": "中央区", "level": "j", "name": "日本橋中学校", "address": "中央区日本橋浜町2-59-1", "lat": 35.692328, "lng": 139.787175},
  {"ward": "中央区", "level": "j", "name": "晴海西中学校", "address": "中央区晴海5-3-5", "lat": 35.650265, "lng": 139.77586}
];
