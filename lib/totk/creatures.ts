import type { Item } from 'types/Item';

export const creatures: Item[] = [
  {
    id: '001',
    category: 'creatures',
    name: '馬',
    description:
      '主に草原に生息し 移動手段として 昔から人間にも親しまれている ただ 野生の馬は人間が近づいたら すぐに逃げるので 捕まえるときは 静かに忍び寄らなければならない',
    locations: ['ハイラル平原', 'アッカレ高原'],
  },
  {
    id: '002',
    category: 'creatures',
    name: '巨馬',
    description:
      '他に類を見ない巨大な馬 その身体能力は 一般の馬をはるかに凌駕するが 気性もすこぶる荒く 捕まえるのも 手なずけるのも 熟練の技術が必要となる 乗り手を選ぶ馬である',
    locations: ['不明'],
  },
  {
    id: '003',
    category: 'creatures',
    name: '白馬',
    description:
      '100年以上前に滅んだハイラル王家の王族は その権威を民に示すため 非常に希少な白馬に乗っていたという この白い馬も その馬の子孫かもしれない',
    locations: ['不明'],
  },
  {
    id: '004',
    category: 'creatures',
    name: '巨躯の白馬',
    description:
      'ハイラル王家の王族が乗っていたとされる 白馬の系統と思われるが その規格外の大きさから「巨躯の白馬」と 呼称されている 突然変異で生まれたとされる この馬の 情報を求める旅人や研究者は少なくない',
    locations: ['不明'],
  },
  {
    id: '005',
    category: 'creatures',
    name: '金色馬',
    description:
      '黄金の毛並みを持つ 極めて珍しい馬 100年に一頭しか生まれないと言われている 美しい見た目に反して 過酷な環境にも適応することができる 警戒心が高く 乗り手を選ぶため この馬を手懐けられる者は少ない',
    locations: ['不明'],
  },
  {
    id: '006',
    category: 'creatures',
    name: 'スタルホース',
    description:
      '魔物が乗る骨の馬 元は生きた普通の馬だったが 瘴気の濃い場所で蘇るという 地上では 夜の間しか姿を維持できないが 瘴気の上を走ることができる特性を持つ',
    locations: ['フィローネ草原', 'ハイラル丘陵'],
  },
  {
    id: '007',
    category: 'creatures',
    name: 'ロバ',
    description:
      '小型の馬 家畜として人里で飼われており ハイラルでは野生のロバは見かけられない 見た目より力があり 荷物の運搬を得意とするので 行商人が連れている事も多い',
    locations: ['ハイラル全土'],
  },
  {
    id: '008',
    category: 'creatures',
    name: 'スナザラシ',
    description:
      '大きなヒレで砂の中を泳ぐように移動する動物 元々はゲルド砂漠の野生動物だったが 現在はゲルド族によって 家畜化されている 聴覚が発達しているため 砂に潜っても 周囲の音を頼りに迷わず進むことができる 大きな牙が特徴だが 実は果物が好物',
    locations: ['ゲルド砂漠'],
  },
  {
    id: '009',
    category: 'creatures',
    name: 'パトリシアちゃん',
    description:
      'ルージュが飼っているスナザラシ 見た目はちょっと怖いが ルージュは溺愛しており 邸内に専用の砂場も用意されている 額のリボンも彼女から贈られたプレゼント 他のどのスナザラシよりも練度が高く どんな時も臆せずに 砂漠を駆け抜ける事ができる 族長のパートナーとしても 頼もしい存在',
    locations: ['ゲルドの街'],
  },
  {
    id: '010',
    category: 'creatures',
    name: 'オタテリス',
    description:
      '大きな尻尾が特徴の小動物 主に森に住み どんぐりなどの木の実を好む 頬に餌をしまう事ができる頬袋を持つが びっくりすると 入れていたどんぐりを 落としてしまう事もしばしば',
    locations: ['ハイラル平原', 'サトリ山'],
    recoverableMaterials: ['どんぐり'],
  },
  {
    id: '011',
    category: 'creatures',
    name: 'モリイノシシ',
    description:
      'ハイラル全土に生息する中型のケモノ 森や草原で餌を探してる姿が よく見かけられる 基本的に性格は大人しいが 近づき過ぎると 猛スピードで突進してくることもあるので注意',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '012',
    category: 'creatures',
    name: 'キバアカイノシシ',
    description:
      '黒い体毛と赤い牙が特徴のイノシシ 生態は普通のイノシシと似ているが 生命力が高く 突進の威力も高いため 狩るときには より危険を伴う覚悟が必要である',
    locations: ['ハイラル丘陵', 'アッカレ高原'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '013',
    category: 'creatures',
    name: 'セグロヤギ',
    description:
      '草原や岩場に生息する草食動物 岩場に引っ掛けやすい蹄と 強靭な足腰を持つため 断崖を移動する事もできる 動きはあまり機敏ではないので 狩りの初心者にとっては ありがたい獲物',
    locations: ['東ハテール', 'ハイラル大森林'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '014',
    category: 'creatures',
    name: 'シロヤギ',
    description:
      'ミルクを取るために 人に飼われているヤギ 新鮮なミルクは バターにも加工される 柔らかな毛も衣類に使われるため 重宝される 放牧する際に居場所が分かるように 首にはベルが付けられている',
    locations: ['東ハテール', 'ハイラル丘陵'],
  },
  {
    id: '015',
    category: 'creatures',
    name: 'ヤマシカ',
    description:
      '森の奥で見かけることが多い雄のシカ 枝分かれした大きな角を持つのが特徴 身の危険を感じると この角を振るう事もある 用心深い性格のため 近づく事は難しいが うまく捕まえる事ができれば 乗りこなせるかもしれない',
    locations: ['ラネール地方', 'ハイラル平原'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '016',
    category: 'creatures',
    name: 'ヤマシカ（雌）',
    description:
      '雄と一緒にいることが多い雌ジカ 雌は角を持たず 体格もやや小さい 警戒心がとても強い動物だが 好物であるリンゴなどの果実を 食べている時は その警戒が弱まるため 狩りや捕獲のチャンスとなる',
    locations: ['ラネール地方', 'ハイラル平原'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '017',
    category: 'creatures',
    name: 'シツゲンスイギュウ',
    description:
      '大きくたくましい角を持った野生のウシ 水辺を好み その周囲の草を食べて生活する 村で飼われている家畜のハテノウシは このシツゲンスイギュウを 品種改良したもの 質のよい肉が取れるため 狩りの対象となりやすい',
    locations: ['ラネール湿原', 'ハイラル丘陵'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '018',
    category: 'creatures',
    name: 'ハテノウシ',
    description:
      'ミルクを取るために 家畜として飼われているウシ ハテノ村が原産と言われている シツゲンスイギュウに比べて角も小さく 性格も穏やかで 飼育しやすい 角に色鮮やかな飾りを付けて 放牧される',
    locations: ['ハテノ村', 'ウオトリー村'],
  },
  {
    id: '019',
    category: 'creatures',
    name: 'コウゲンヒツジ',
    description:
      '元々は山岳地帯に住む動物であったが 毛を取る目的で 村などで飼われるようになった モコモコと伸びた毛は 人の手で刈り取られて 衣類や寝具に利用される 性格は大人しく臆病 基本的に群れで行動する',
    locations: ['東ハテール', 'アッカレ高原'],
  },
  {
    id: '020',
    category: 'creatures',
    name: 'ヘイゲンギツネ',
    description:
      '草原や森の中でよく見かけられるキツネ 先端の白い フサフサした尻尾が特徴 群れは作らずに 単独で行動している事が多い 雑食性で普段は果実や虫を食べているが 自分より小さな動物や鳥を捕らえることもある',
    locations: ['ハイラル丘陵', 'ラネール大水源'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '021',
    category: 'creatures',
    name: 'ユキイロギツネ',
    description:
      'タバンタなどの寒冷地に生息する ヘイゲンギツネの仲間 雪山に適応する形で 体毛の色が白く変化している 雪の中では保護色となるため 雪原にいるユキイロギツネを見つけるためには 高い観察力が必要となる',
    locations: ['ヘブラ山脈', 'タバンタ辺境'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '022',
    category: 'creatures',
    name: 'サンゾクオオカミ',
    description:
      '肉食性で獰猛な動物 攻撃性が高く 人が狙われる事もある 集団で狩りを行い 獲物を囲んで仕留める 仲間が倒されると 一転して逃げ出す慎重さも持つ 他の個体とのコミュニケーションに遠吠えを 使うので 森で聞こえた場合は注意が必要',
    locations: ['タバンタ辺境', 'オルディン峡谷'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '023',
    category: 'creatures',
    name: 'カラカラコヨーテ',
    description:
      'ゲルド地方で見られるオオカミの仲間 暑さや乾燥に強く 砂漠にも生息する 他のケモノや小動物を狩る事が多いが 人も襲う事もしばしばあり 砂漠の旅人にとって危険な存在',
    locations: ['ゲルド砂漠', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '024',
    category: 'creatures',
    name: 'セツゲンオオカミ',
    description:
      'ヘブラ山脈などの雪山で暮らす サンゾクオオカミの仲間 群れで行動するなど 基本的な生態は サンゾクオオカミと同じだが 厳しい環境に適応した強靭な体力と 雪原で保護色となる白い体毛を持つため 遭遇時の危険性がより高い',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '025',
    category: 'creatures',
    name: 'タバンタヘラジカ',
    description:
      'タバンタ地方が原産のシカ ハイラルに住むシカの中で最も大きい種で 平たく巨大な枝角が特徴的な 実はこの角は毎年生え変わる 取れる肉は柔らかく上質であり 煮込み料理の材料などに人気がある',
    locations: ['タバンタ大雪原', 'ヘブラ山脈'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '026',
    category: 'creatures',
    name: 'ドンゴ',
    description:
      '亜熱帯地方で見つかった新種の四足動物 現在ハイラル全土で5頭のみが確認されている その生態は謎に包まれており 何を主食にしているかさえ 明らかになっていない 臆病な性格で 驚くとその大きな角を 振り回すので 注意する必要がある',
    locations: ['不明'],
  },
  {
    id: '027',
    category: 'creatures',
    name: 'ハチクイグマ',
    description:
      'ベテランの狩人さえも手出しを避ける 動物の王者 うっかり縄張りに入ってしまうと 武器を持った人間でも 関係なく襲われる その名の通り 好物はハチミツ 危険度は高いが うまく注意を逸らせて近づければ 背中に乗ることができるかもしれない',
    locations: ['ハイラル丘陵', '西ハテール'],
    recoverableMaterials: [
      '上ケモノ肉',
      'ガンバリバチのハチミツ',
      '極上ケモノ肉',
    ],
  },
  {
    id: '028',
    category: 'creatures',
    name: 'コウテイヒグマ',
    description:
      '灰色の体毛を持つハチクイグマの仲間 より凶暴な性格と 強靭な体躯を持つため 野生動物の中で 最も危険な存在と言える 人里から離れた雪深い地域に住むため 遭遇する機会は少ないといわれているが 見かけた場合は うかつに手を出さない方が良い',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', 'マックスサーモン', '極上ケモノ肉'],
  },
  {
    id: '029',
    category: 'creatures',
    name: 'ハイリア犬',
    description:
      '人間に従順な性格を持つ 賢い動物 昔から ペットとして飼われるだけではなく 訓練されて 放牧されているヒツジやヤギの 見張りや誘導役をこなす事もある 現在のハイリア犬は全て 太古のハイラル王家で 飼われていた犬の子孫と言われている',
    locations: ['ハイラル平原', 'オルディン峡谷'],
  },
  {
    id: '030',
    category: 'creatures',
    name: 'ルミー',
    description:
      '淡く青く光る 不思議な生き物 一見ウサギの仲間のようにも見えるが 起源や詳しい生態などは 一切不明 ルピーを好んで集めるという 変わった習性を持つことだけが 知られている',
    locations: ['不明'],
    recoverableMaterials: ['不明'],
  },
  {
    id: '031',
    category: 'creatures',
    name: 'マヨイ',
    description:
      '世界中の洞窟に生息している不思議な生き物 洞窟内でも 人目につかない隠れた場所を好み 近づくと 口から泡を吐きながら 威嚇してくる 刺激を与えると 姿を消し 去り際に落とし物をしていく性質を持つ',
    locations: ['不明'],
    recoverableMaterials: ['マヨイの落とし物'],
  },
  {
    id: '032',
    category: 'creatures',
    name: 'タダスズメ',
    description:
      'ハイラルで最も一般的な小鳥 平原や森が主な生息地だが 人里でも見かけられる 雑食性で木の実や小型の虫など なんでも食べる ピョンピョンと飛び跳ねて移動する姿が かわいらしい鳥だが あまり人には懐かない',
    locations: ['ハイラル丘陵', 'ラネール大水源'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '033',
    category: 'creatures',
    name: 'ベニイロスズメ',
    description:
      'ヘブラ地方に生息する小鳥 山菜や木の芽などをついばんで食べる 体毛は鮮やかな紅色をしており その羽は装飾品に用いられる事もある',
    locations: ['ヘブラ山脈', 'ハイラル丘陵'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '034',
    category: 'creatures',
    name: 'アオナミスズメ',
    description:
      'ラネール地方でよく見られる小鳥 水辺の若葉や水草を好んで食べる 周りに危険がない時は 雨上がりの水たまりや 川の浅瀬などで水浴びをするといわれている',
    locations: ['ラネール大水源', '東ハテール'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '035',
    category: 'creatures',
    name: 'ゴシキスズメ',
    description:
      'フィローネ地方で見かけられる小鳥 その名の通りカラフルな体毛を持ち 一部の好事家からは鑑賞用として人気がある 熱帯林に豊富に生息する 小型の虫を主食とするが 雑食性で木の実なども食べる',
    locations: ['フィローネ草原', '東ハテール'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '036',
    category: 'creatures',
    name: 'スナホリスズメ',
    description:
      'ゲルド地方に生息する小鳥 乾燥した環境に適応しており 暑さに強い性質を持っている 砂漠では外敵に見つからないように 砂に半ば埋まった形で じっとしている姿も見られる',
    locations: ['ゲルド砂漠'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '037',
    category: 'creatures',
    name: 'コガネスズメ',
    description:
      'オルディン地方に生息するスズメの仲間 火山という厳しい環境に適応しており その羽毛は燃えにくい性質を 持っているといわれている 岩場に隠れる小さい虫を餌に生活している',
    locations: ['オルディン峡谷', '始まりの空島'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '038',
    category: 'creatures',
    name: 'ナミバト',
    description:
      'ハイラル全土の森や草原に住む鳥 生息域は広く 人里でもよく見受けられる 警戒心があまり強くなく 狩りに慣れていない者でも 比較的簡単に狩る事ができる',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '039',
    category: 'creatures',
    name: 'ニジイロバト',
    description:
      'とても鮮やかな羽を持つ ナミバトの仲間 ハイラルでは 主に北部の森林や草原に生息する 木の実や穀物を好んで食べるが 昆虫やミミズもついばんで食べる 肉はナミバトの物より上質と言われている',
    locations: ['ハイラル丘陵', 'アッカレ高原'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '040',
    category: 'creatures',
    name: 'カエンバト',
    description:
      'デスマウンテンの周辺にのみ生息する 珍しいハト 羽毛は強い耐火性能を持つため 衣類の材料としても重宝される 灼熱の環境を好むが 最近は気温の低い上空を 飛んでいる姿が たびたび目撃されている',
    locations: ['オルディン空諸島', 'オルディン峡谷'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '041',
    category: 'creatures',
    name: 'マシロバト',
    description:
      'ヘブラ地方に住む 真っ白な羽を持つハト ナミバトの中でも 雪の保護色となる 羽色を持つ個体が雪山で生き残り マシロバトになったといわれる 寒さに耐えられるように脂肪を蓄えており 極上の鶏肉が取れることもある',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上トリ肉', '極上トリ肉'],
  },
  {
    id: '042',
    category: 'creatures',
    name: 'モノバト',
    description:
      'ナミバトの原種にあたる 小型の鳥 今ではあまり見かけなくなってしまったが 以前はハイラル全土に生息していた 首から上の体毛は草むらで目立ちにくい色で 保護色の役割を果たしている',
    locations: ['始まりの空島', '東ゲルド空諸島'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '043',
    category: 'creatures',
    name: 'ヤマガラス',
    description:
      'とても賢い鳥 鳴き声が特徴的 山岳部だけでなく 森や人里にも生息しており 人間の隙を見て農作物を荒らす事もある その真っ黒な羽毛の印象からも 不吉な物として毛嫌いされる事が多い',
    locations: ['ハイラル大森林', 'ハイラル丘陵'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '044',
    category: 'creatures',
    name: 'シラホシガモ',
    description:
      'ハイラル全般の水辺に生息する鳥 足の水かきを使った泳ぎが得意 川や湖では くちばしで羽づくろいする姿や 水中の餌を捕まえるために 首を水の中に 突っ込んで 逆立ちする仕草が見られる 狩ると脂の乗った上質な肉が取れる',
    locations: ['ハイラル丘陵', 'ラネール湿原'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '045',
    category: 'creatures',
    name: 'アオバサギ',
    description:
      'ハイラル各地の水辺でよく見かけられる鳥 細い足と長い首が特徴的 水中の魚やカエルなどを食べて生活する 獲物が近づくまで じっと動かずに待ち伏せをし 首を伸ばして捕食する事もある',
    locations: ['始まりの空島', 'ラネール湿原'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '046',
    category: 'creatures',
    name: 'モモイロサギ',
    description:
      '羽の先端と頭部が 美しい桃色をした鳥 水辺に住むアオバサギと異なり 草原や乾燥地帯に生息している 岩陰や草むらの昆虫を ついばんで食べる 細い脚で歩きながら餌を探す事が多い 危険を感じると 飛んで逃げてしまう',
    locations: ['ハイラル平原', '中央ハイラル空域'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '047',
    category: 'creatures',
    name: 'シマオタカ',
    description:
      '平原や高地に生息する肉食の鳥 鋭い爪とクチバシを持ち 他の鳥や小動物を捕らえて 食糧としている いつも高い所を悠然と飛んでおり 地上の獲物を探している',
    locations: ['ハイラル丘陵', 'ゲルドキャニオン'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '048',
    category: 'creatures',
    name: 'ウミカモメ',
    description:
      '海の近くに生息する鳥 主に魚類を食べて生活するため 魚の群れが泳いでいる海上に ウミカモメが飛んでいる事がよくある 海の漁師は 魚群の場所を探す時に この習性を利用している',
    locations: ['ハテール海', 'ラネール海'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '049',
    category: 'creatures',
    name: 'ウンカイカモメ',
    description:
      '高空にのみ生息する ウミカモメの亜種 地上で見ることはめったになく 雲の合間から 時折姿を見せることがあると言われている 上昇気流をつかむのが得意で ほとんど 羽ばたくことなく大空を回遊している',
    locations: ['始まりの空島', '北ハテール空諸島'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '050',
    category: 'creatures',
    name: 'オルディンダチョウ',
    description:
      'オルディン地方の火山地帯に生息する 大型の鳥 火山という過酷な環境に適応する形で進化し 羽毛や皮膚が 高い耐火性能を持っている 翼は小さく 飛ぶことができない鳥だが 脚がとても発達しており 走るのが速い',
    locations: ['デスマウンテン', 'オルディン山脈'],
    recoverableMaterials: ['上トリ肉', '極上トリ肉'],
  },
  {
    id: '051',
    category: 'creatures',
    name: 'シンリンダチョウ',
    description:
      'ハイラルの大地が 樹木に覆われていたころ 大量に生息していたと言われている 飛べない鳥 長い体毛により寒さに強い反面 暑さには弱い 警戒心が強く いつも草むらから首を伸ばして 周囲を伺っている',
    locations: ['始まりの空島', '南ラネール空諸島'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '052',
    category: 'creatures',
    name: 'コッコ',
    description:
      '村でタマゴを取る目的で飼われている鳥 一部ではペットとしても親しまれている 普段は飛ぶことはないが 人に持ち上げられると 驚いて激しく羽ばたきを続ける習性がある 基本的には大人しく 臆病な性格だが あまりしつこく突っつくと…',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['トリのタマゴ'],
  },
  {
    id: '053',
    category: 'creatures',
    name: 'ハイラルバス',
    description:
      'はるか昔から 姿形が変わらない 一般的な魚 そのままでも食べられるが 調理すると 回復効果も大きくなる',
    locations: ['ハイラル平原', '西ハテール'],
    heartsRecoverable: 1,
  },
  {
    id: '054',
    category: 'creatures',
    name: 'マックスバス',
    description:
      '水辺に棲む大型の魚 大きな体にたくさんの 栄養を蓄えていて 料理に使うとハートを全回復し さらに最大値を増やす効果がある',
    locations: ['タバンタ空諸島', '西ヘブラ空諸島'],
    heartsRecoverable: 2,
    cookingEffect: 'MAXハート',
  },
  {
    id: '055',
    category: 'creatures',
    name: 'ガンバリバス',
    description:
      '長い間生きたハイラルバスと言われている 生命力が非常に強く 調理して食べると がんばりゲージが一気に回復する',
    locations: ['ハイラル平原', '西ハテール'],
    heartsRecoverable: 1,
    cookingEffect: 'がんばり回復',
  },
  {
    id: '056',
    category: 'creatures',
    name: 'マックスサーモン',
    description:
      '寒冷地の川や湖に棲む魚 調理して食べると 寒さに耐えるため 体内に蓄えられた脂身が ハートを全回復し 最大値を増やす効果をもたらす',
    locations: ['ヘブラ山脈', 'タバンタ辺境'],
    heartsRecoverable: 4,
    cookingEffect: 'MAXハート',
  },
  {
    id: '057',
    category: 'creatures',
    name: 'ヒンヤリマス',
    description:
      '冷たい水場を好む 青いマス その皮には 身体を冷やす成分が含まれるといわれ 調理して食べると 暑さに耐性を持つ事ができる',
    locations: ['ヘブラ山脈', 'ラネール大水源'],
    heartsRecoverable: 1,
    cookingEffect: '暑さガード',
  },
  {
    id: '058',
    category: 'creatures',
    name: 'ポカポカマス',
    description:
      '暖かい水場を好む赤いマス 体内に熱を蓄える 特殊な臓器を持ち 食材として使うと 体を芯から 温める効能を持つ料理を作る事ができる',
    locations: ['オルディン峡谷', 'ヘブラ山脈'],
    heartsRecoverable: 1,
    cookingEffect: '寒さガード',
  },
  {
    id: '059',
    category: 'creatures',
    name: 'ビリビリマス',
    description:
      '湖などの淡水に棲むマス 絶縁成分を含む鱗は 食材に使うと 電気に耐性を得られる料理になる',
    locations: ['タバンタ辺境'],
    heartsRecoverable: 1,
    cookingEffect: 'エレキガード',
  },
  {
    id: '060',
    category: 'creatures',
    name: 'シノビマス',
    description:
      '暗いところで光る魚 鱗が持つ発光物質には 集中力を高める成分が含まれており 料理に使うと 慎重に物音を立てずに行動できるようになる',
    locations: ['ハイラル大森林'],
    heartsRecoverable: 1,
    cookingEffect: '静かさアップ',
  },
  {
    id: '061',
    category: 'creatures',
    name: 'ツルギゴイ',
    description:
      '淡水に生息するコイの仲間 キモに含まれる成分に 筋力増強効果があるとされ 料理して食べると 攻撃力が増す',
    locations: ['ラネール大水源', 'アッカレ高原'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃力アップ',
  },
  {
    id: '062',
    category: 'creatures',
    name: 'ヨロイゴイ',
    description:
      '硬い鎧のような鱗を持った古代魚 料理に使うと 鱗に蓄えられた成分で 骨が強くなり 防御力が増す',
    locations: ['東ハテール', 'ラネール大水源'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '063',
    category: 'creatures',
    name: 'サンケゴイ',
    description:
      '野生のヨロイゴイを人の手で改良した観賞魚 自然界には存在しない美しい色と模様を持つ 料理に使っても特別な効果はない',
    locations: ['カカリコ村'],
    heartsRecoverable: 1,
  },
  {
    id: '064',
    category: 'creatures',
    name: 'ムカシアロワナ',
    description:
      '今もなお太古の姿を残す 活力あふれる魚 引き締まった身は栄養たっぷりで 食べるとハートを回復する事ができる',
    locations: ['始まりの空島', '北タバンタ空諸島'],
    heartsRecoverable: 1,
  },
  {
    id: '065',
    category: 'creatures',
    name: 'アカリホラウオ',
    description:
      '暗い洞窟の中に生息する 発光する魚 その光る酵素を含んだ料理は 食べた者の身体を光らせる効能がある',
    locations: ['ハイラルの洞窟'],
    heartsRecoverable: 1,
    cookingEffect: '発光',
  },
  {
    id: '066',
    category: 'creatures',
    name: 'ツルギダイ',
    description:
      '海にいる気性の荒い魚 調理して食べると 身に含まれる成分により 闘争心が向上し 攻撃力が増すといわれる',
    locations: ['フィローネ海', 'ハテール海'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃力アップ',
  },
  {
    id: '067',
    category: 'creatures',
    name: 'ヨロイダイ',
    description:
      '全身が硬い鱗で覆われているタイ 料理に使うと 鱗に蓄えられた成分で 骨が頑強になり 防御力が増える',
    locations: ['ハテール海', 'ラネール海'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '068',
    category: 'creatures',
    name: 'シノビタニシ',
    description:
      '淡水に生息する大きな巻き貝 料理に使うと 聴覚が鋭くなり 物音を立てずに行動できる ようになる 夜になるとホタルのような光を放つ',
    locations: ['ハイラル丘陵', 'ゾーラの里'],
    heartsRecoverable: 1,
    cookingEffect: '静かさアップ',
  },
  {
    id: '069',
    category: 'creatures',
    name: 'ツルギガニ',
    description:
      '水辺に生息する 鋭いハサミが特徴のカニ ハサミの肉には 筋力を上げる成分が含まれており 調理して食べると 攻撃力が増す',
    locations: ['ラネール海', 'ハテール海'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃力アップ',
  },
  {
    id: '070',
    category: 'creatures',
    name: 'ヨロイガニ',
    description:
      'カニの中でも特別に硬い殻を持つ ミソや身には 体を丈夫にする栄養素があると言われ 調理して食べると 防御力が増す効果がある',
    locations: ['ハテール海', 'フィローネ海'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '071',
    category: 'creatures',
    name: 'ガンバリガニ',
    description:
      '雨が降ると大量に現れる事で有名 身がしっかりしており 疲れを忘れる旨味を持つ 料理に使えば がんばりゲージを回復できる',
    locations: ['ラネール湿原', 'ラネール大水源'],
    heartsRecoverable: 1,
    cookingEffect: 'がんばり回復',
  },
  {
    id: '072',
    category: 'creatures',
    name: '妖精',
    description:
      '力尽きてしまった時にポーチから飛び出して 瞬時に傷をいやしてくれる ホタルと違い 昼間も淡く輝いている',
    locations: ['ハイラルの洞窟', 'ハイラルの空島'],
    heartsRecoverable: 5,
  },
  {
    id: '073',
    category: 'creatures',
    name: 'ヒンヤリアゲハ',
    description:
      '空気を冷やすリンプンを持つ 不思議なチョウ 雪に混じって舞う姿が美しい 魔物の素材と煮込むと 暑さに耐えられる薬になる',
    locations: ['ゲルド高地', 'ラネール山'],
    cookingEffect: '暑さガード',
  },
  {
    id: '074',
    category: 'creatures',
    name: 'ポカポカアゲハ',
    description:
      '森や平原などの暖かい地域に生息するチョウ 太陽の光をため込んだリンプンは 魔物の素材と煮込むと 体を温める薬になる',
    locations: ['オルディン峡谷', 'ゲルド高地'],
    cookingEffect: '寒さガード',
  },
  {
    id: '075',
    category: 'creatures',
    name: 'ビリビリアゲハ',
    description:
      '雨が降る時にしか姿を見せない 珍しいチョウ 体内器官で絶縁成分を作り出す性質を持つ 煮詰めて薬にすると 電撃に耐性を得られる',
    locations: ['雷鳴の島', 'フィローネ草原'],
    cookingEffect: 'エレキガード',
  },
  {
    id: '076',
    category: 'creatures',
    name: 'ヒケシアゲハ',
    description:
      '高熱の火山地帯に生息する 珍しいチョウ 耐燃性の高い体液を 体内にため込んでおり 煮込んで作る塗り薬は 炎に耐える効果を発揮する',
    locations: ['デスマウンテン', 'オルディン峡谷'],
    cookingEffect: '炎ガード',
  },
  {
    id: '077',
    category: 'creatures',
    name: 'ヒンヤリヤンマ',
    description:
      '木陰など 涼しい場所を好むトンボ 青く透き通った羽は 放熱成分を持つといわれ 煮詰めると 暑さに耐性を発揮する薬となる',
    locations: ['ゲルド高地', 'ラネール山'],
    cookingEffect: '暑さガード',
  },
  {
    id: '078',
    category: 'creatures',
    name: 'ポカポカヤンマ',
    description:
      '羽の先端の赤い模様が特徴的なトンボ 羽に発汗作用がある成分を持ち 魔物の素材と煮詰めると 寒さに耐性を得られる',
    locations: ['アッカレ高原', 'フィローネ草原'],
    cookingEffect: '寒さガード',
  },
  {
    id: '079',
    category: 'creatures',
    name: 'ビリビリヤンマ',
    description:
      '雨がふる時にしか姿を見せない 珍しいトンボ 長い羽は電流を体外へ逃がす特殊な成分を持ち 薬にするとその効能から 耐電性が向上する',
    locations: ['雷鳴の島', '西ハテール'],
    cookingEffect: 'エレキガード',
  },
  {
    id: '080',
    category: 'creatures',
    name: 'ガンバリバッタ',
    description:
      'エサを求めて丸一日 跳ね続けるスタミナを持つ 通称ガンバッタ 体内に蓄えられた滋養分は がんばりゲージを回復する薬の元となる',
    locations: ['始まりの空島', 'ハイラル平原'],
    cookingEffect: 'がんばり回復',
  },
  {
    id: '081',
    category: 'creatures',
    name: 'ツルギカブト',
    description:
      '森に生息する昆虫の王様 大きな角は 煮込んで薬にすると 筋肉の血流量を増やす 効果があるといわれ 攻撃力が増す',
    locations: ['西ハテール', '東ハテール'],
    cookingEffect: '攻撃力アップ',
  },
  {
    id: '082',
    category: 'creatures',
    name: 'ヨロイカブト',
    description:
      '鎧のように硬い体を持つカブトムシ その殻の成分は 煮込んで薬にすると 体幹を強化する効能があり 防御力が増す',
    locations: ['西ハテール', '東ハテール'],
    cookingEffect: '防御アップ',
  },
  {
    id: '083',
    category: 'creatures',
    name: 'ガンバリカブト',
    description:
      '10年も生きるとされる 貴重なカブトムシ その強力な生命力は 薬にすると がんばりゲージを一気に回復する効果を生み出す',
    locations: ['始まりの空島', '西ハテール'],
    cookingEffect: 'がんばり回復',
  },
  {
    id: '084',
    category: 'creatures',
    name: 'シズカホタル',
    description:
      '夜になると淡く光る昆虫 体内に持つ発光物質は 集中力を高める効果もあるといわれ 薬にすると物音を立てずに行動が可能になる',
    locations: ['フィローネ草原', '東ハテール'],
    cookingEffect: '静かさアップ',
  },
  {
    id: '085',
    category: 'creatures',
    name: 'ヤミホタル',
    description:
      '暗い深穴に生息している 連なる羽をもつ虫 分泌する発光成分を煮詰めると 薬になり 服用者の身体が 淡く光る効果が得られる',
    locations: ['中央大廃鉱', 'ラネール湿原 地底'],
    cookingEffect: '発光',
  },
  {
    id: '086',
    category: 'creatures',
    name: 'ゴーゴーガエル',
    description:
      '水辺を素早く跳ね回るカエル その肉には俊敏性を増す物質が含まれており 魔物の素材と煮込むと 移動速度を上げる薬になる',
    locations: ['ラネール大水源', '東ハテール'],
    cookingEffect: '移動力アップ',
  },
  {
    id: '087',
    category: 'creatures',
    name: 'ガッツガエル',
    description:
      '暗く湿った場所を好み あまり姿を見せないカエル キモが持つ成分に 代謝を活発にする効能があり 薬にすると がんばりゲージが限界を超えて増える',
    locations: ['ハイラル平原', 'ゾーラ川'],
    cookingEffect: 'MAXがんばり',
  },
  {
    id: '088',
    category: 'creatures',
    name: 'ハリツキガエル',
    description:
      '壁にくっついて じっとしているカエル 分泌する成分は 滑り止めの代わりに使え 濡れた壁面を登りやすくなる薬が作れる',
    locations: ['西ハテール', 'ラネール大水源'],
    cookingEffect: '滑り軽減',
  },
  {
    id: '089',
    category: 'creatures',
    name: 'ゴーゴートカゲ',
    description:
      '草地や森で見かけられる とても素早く走るトカゲ その肉には 脚の筋力増強効果があるといわれ 魔物素材と煮込めば 移動速度を上げる薬になる',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    cookingEffect: '移動力アップ',
  },
  {
    id: '090',
    category: 'creatures',
    name: 'マックストカゲ',
    description:
      '主に深い森に住む 希少なトカゲ 栄養価の高い餌を食べ 生命力が非常に強い 薬の材料にすると ハートの最大値が大きく上がる',
    locations: ['ゲルド高地', '東ハテール'],
    cookingEffect: 'MAXハート',
  },
  {
    id: '091',
    category: 'creatures',
    name: 'ヒケシトカゲ',
    description:
      'オルディン地方にだけ生息する 特殊なトカゲ 鱗には耐火成分がたっぷり含まれており 魔物の素材と煮込むと 炎に耐えられる薬となる',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    cookingEffect: '炎ガード',
  },
  {
    id: '092',
    category: 'creatures',
    name: 'ハリツキトカゲ',
    description:
      '吸盤状の手足で どんな壁でも登っていくトカゲ 煮詰めて吸着する成分を 凝縮する事で 滑る壁面を登りやすくなる薬が作れる',
    locations: ['ハイラルの洞窟'],
    cookingEffect: '滑り軽減',
  },
];
