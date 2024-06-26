import type { Item } from 'types/Item';

export const creatures: Item[] = [
  {
    id: '001',
    category: 'creatures',
    name: '馬',
    description:
      '主に草原に生息し 移動手段として 昔から人間にも親しまれている。ただ、野生の馬は人間が近づいたらすぐに逃げるので 捕まえるときは静かに忍び寄らなければならない。',
    locations: ['ハイラル平原', 'フィローネ草原'],
  },
  {
    id: '002',
    category: 'creatures',
    name: '巨馬',
    description:
      '他に類を見ない巨大な馬。その身体能力は一般の馬をはるかに凌駕するが、気性もすこぶる荒く 捕まえるのも手なずけるのも 熟練の技術が必要となる。乗り手を選ぶ馬である。',
    locations: ['不明'],
  },
  {
    id: '003',
    category: 'creatures',
    name: '白馬',
    description:
      '100年前にほろんだハイラル王家の王族はその権威を民に示すため、非常に希少な白馬に乗っていたという。この白い馬もその馬の子孫かもしれない。',
    locations: ['不明'],
  },
  {
    id: '004',
    category: 'creatures',
    name: '山のヌシ',
    description:
      '動物たちの森を治める主。別名 サトリと呼ばれ、その昔この地で果てた賢者の生まれ変わりと言われる聖なる生き物。警戒心が強いため、なかなか人前にその姿を現すことはない。',
    locations: ['不明'],
  },
  {
    id: '005',
    category: 'creatures',
    name: 'スタルホース',
    description:
      '魔物が乗る骨の馬。生きているときは普通の馬だったが、厄災ガノンの力で魔物としてよみがえった。夜の闇しか その姿を維持することができない。',
    locations: ['へブラ山脈', 'アッカレ高原'],
  },
  {
    id: '006',
    category: 'creatures',
    name: 'ロバ',
    description:
      '小型の馬。家畜として人里で飼われており、ハイラルでは野生のロバを見かけられない。見た目より力があり、荷物運搬を得意とするので、行商人が連れていることも多い。',
    locations: ['ハイラル全土'],
  },
  {
    id: '007',
    category: 'creatures',
    name: 'スナザラシ',
    description:
      '大きなヒレで砂の中を泳ぐように移動する動物。元々はゲルド砂漠の野生動物であったが、現在はゲルド族によって家畜化されている。聴覚が発達しているため、砂に潜っても周囲の音を頼りに迷わず進むことができる。大きな牙が特徴的だが、実は果物が鉱物。',
    locations: ['ゲルド砂漠'],
  },
  {
    id: '008',
    category: 'creatures',
    name: 'パトリシアちゃん',
    description:
      'ルージュが飼っているスナザラシ。見た目はちょっと怖いがルージュに溺愛しており、邸内に専用の砂場も用意されている。額のリボンも彼女からのプレゼント。他のどのスナザラシよりも連度が高くどんな時も臆せずに砂漠を駆け抜けることができる。族長のパートナーとしても頼もしい存在。',
    locations: ['ゲルド砂漠'],
  },
  {
    id: '009',
    category: 'creatures',
    name: 'オクテリス',
    description:
      '大きな尻尾が特徴の小動物。主に森に住み、どんぐりなどの木の実を好む。頬に餌をしまうことができる頬袋を持つが、びっくりすると入れていたどんぐりを落としてしまう事もしばしば。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: ['どんぐり'],
  },
  {
    id: '010',
    category: 'creatures',
    name: 'モリイノシシ',
    description:
      'ハイラル全土に生息する中型のケモノ。森や草原でエサを探している姿がよく見かけられる。基本的に性格はおとなしいが、近づき過ぎると猛スピードで突進してくることもあるので注意。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '011',
    category: 'creatures',
    name: 'キバアカイノシシ',
    description:
      '黒い体毛と赤い牙が特徴のイノシシ。生体は普通のイノシシと似ているが、生命力が高く突進の威力も高いため、狩るときにはより危険を伴う覚悟が必要である。',
    locations: ['アッカレ高原', '奥アッカレ'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '012',
    category: 'creatures',
    name: 'セグロヤギ',
    description:
      '草原や岩場に生息する草食動物。岩場に引っかけやすい蹄と強靭な足腰を持つため、弾劾を移動する事もできる。動きはあまり機敏ではないので、狩りの初心者にとってはありがたい獲物。',
    locations: ['ハイラル丘陵', 'ハイラル大森林'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '013',
    category: 'creatures',
    name: 'シロヤギ',
    description:
      'ミルクを取るために人に変われているヤギ。新鮮なミルクはバターにも加工される。柔らかな毛も衣類に使われるため重宝される。放牧する際は居場所がわかるように首にはベルを付けられている。',
    locations: ['西ハテール', 'オルディン峡谷'],
  },
  {
    id: '014',
    category: 'creatures',
    name: 'ヤマシカ',
    description:
      '森の奥で見かけることが多い雄のシカ。枝分かれした大きな角を持つのが特徴。身の危険を感じると、この角を振るうこともある。用心深い性格のため近づくことは難しいが、うまく捕まえる事ができれば乗りこなせるかもしれない。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '015',
    category: 'creatures',
    name: 'ヤマシカ（雌）',
    description:
      '雄と一緒にいることが多い雌ジカ。雌は角を持たず体格もやや小さい。警戒心がとても強い動物だが、鉱物であるリンゴなどの果実を食べている時は、その警戒が弱まるため狩りや捕獲のチャンスとなる。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    recoverableMaterials: ['上ケモノ肉'],
  },
  {
    id: '016',
    category: 'creatures',
    name: 'シツゲンスイギュウ',
    description:
      '大きくたくましい角を持った野生のウシ。水辺を好み その周囲の草を食べて生活する。村で買われている家畜のハテノウシは、このシツゲンスイギュウを品種改良したもの。質のよい肉が取れるため、狩りの対象となりやすい。',
    locations: ['ラネール湿原', 'アッカレ高原'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '017',
    category: 'creatures',
    name: 'ハテノウシ',
    description:
      'ミルクを採るために家畜として飼われているウシ。ハテノ村が原産と言われている。シツゲンスイギュウに比べて角も小さく、性格も穏やかで飼育しやすい。角に色鮮やかな飾りをつけて放牧されている。',
    locations: ['東ハテール', 'フィローネ草原'],
  },
  {
    id: '018',
    category: 'creatures',
    name: 'コウゲンヒツジ',
    description:
      '元々は山岳地帯に住む動物であったが、毛をとる目的で村などで飼われるようになった。モコモコと伸びた家は人の手で刈り取られて、衣類や寝具に利用されている。性格はおとなしく臆病。基本的に群れで行動する。',
    locations: ['東ハテール', 'アッカレ高原'],
  },
  {
    id: '019',
    category: 'creatures',
    name: 'ヘイゲンギツネ',
    description:
      '草原や森の中でよく見かけられるキツネ。先端の白い フサフサとした尻尾が特徴。群れは作らずに単独で行動している事が多い。雑食性で普段は果実や虫を食べているが、自分よりも小さな動物や鳥を捕まえることもある。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    recoverableMaterials: ['ケモノ肉'],
  },
  {
    id: '020',
    category: 'creatures',
    name: 'ユキイロギツネ',
    description:
      'タバンタなどの寒冷地に生息するヘイゲンギツネの仲間。雪山に適応する形で体毛の色が白く変化している。雪の中では保護色となるため、雪原にいるユキイロギツネを見つけるためには高い観察力が必要となる。',
    locations: ['ヘブラ山脈', 'タバンタ辺境'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '021',
    category: 'creatures',
    name: 'サンゾクオオカミ',
    description:
      '肉食性で獰猛な動物。攻撃性が高く、人が狙われることもある。集団で狩りを行い獲物を囲んで仕留める。仲間が倒されると一転して逃げ出す慎重さも持つ。他の個体とのコミュニケーションに遠吠えを使うので、森で聞こえた場合には注意が必要。',
    locations: ['タバンタ辺境', 'ハイラル大森林'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '022',
    category: 'creatures',
    name: 'カラカラコヨーテ',
    description:
      'ゲルド地方で見られるオオカミの仲間。熱さや乾燥に強く砂漠にも生息する。他のケモノや小動物を狩る事が多いが、人襲うこともしばしばあり。砂漠の旅人にとっては危険な存在。',
    locations: ['ゲルド砂漠', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '023',
    category: 'creatures',
    name: 'セツゲンオオカミ',
    description:
      'へブラ山脈などの雪山で暮らすサンゾクオオカミの仲間。群れで行動するなど基本的な生態はサンゾクオオカミと同じだが、厳しい環境に適応した強靭な体力と雪原の保護色となる白い体毛を持つため、遭遇時の危険性がより高い。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '024',
    category: 'creatures',
    name: 'タバンタヘラジカ',
    description:
      'タバンタ地方が原産のシカ。ハイラルに住むシカの中で最も大きい種で、平たく巨大な枝角が特徴的。実はこの角は毎年生え変わる。採れる肉は柔らかく上質であり、煮込み料理などの材料などに人気がある。',
    locations: ['へブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '025',
    category: 'creatures',
    name: 'オオツノサイ',
    description:
      '身体の半分ほどもある長い角を持った動物。元々は乾燥した地域に住んでいたサイの仲間が生息域を拡げて、雪山に適応した物と言われている。皮膚がとても暑く角による反撃も強力なため、狩りに慣れていない人間が手を出すと危険。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '026',
    category: 'creatures',
    name: 'ハチクイグマ',
    description:
      'ベテランの狩人さえも手出しを避ける動物の王者。うっかり縄張りに入ってしまうと武器を持った人間でも関係なく襲われる。その名の通り 好物はハチミツ。危険度は高いがうまく注意を逸らせて近づけば、背中に乗ることができるかもしれない。',
    locations: ['タバンタ辺境', 'アッカレ高原'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉'],
  },
  {
    id: '027',
    category: 'creatures',
    name: 'コウテイヒグマ',
    description:
      '灰色の体毛を持つハチクイグマの仲間。より凶暴な性格と強靭な体躯を持つため、野生動物の中で最も危険な存在と言える。人里から離れた雪深い地域に住むため遭遇する機会は少ないといわれているが、見かけた場合はうかつに手を出さないほうがよい。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上ケモノ肉', '極上ケモノ肉', 'マックスサーモン'],
  },
  {
    id: '028',
    category: 'creatures',
    name: 'ハイラル犬',
    description:
      '人間に従順な性格を持つ賢い動物。昔からペットとして飼われているだけではなく、訓練されて放牧されているヒツジやヤギの見張りや誘導役をこなす事もある。現在のハイリア犬は全て太古のハイラル王家で飼われていた犬の子孫と言われている。',
    locations: ['アッカレ高原', 'へブラ山脈'],
  },
  {
    id: '029',
    category: 'creatures',
    name: 'ルミー',
    description:
      '淡く青く光る不思議な生き物。一見ウサギの仲間のように見えるが、起源や詳しい生態などは一切不明。ルピーを好んで集めるという変わった習性を持つことだけが知られている。',
    locations: ['不明'],
    recoverableMaterials: ['不明'],
  },
  {
    id: '030',
    category: 'creatures',
    name: 'タダスズメ',
    description:
      'ハイラルで最も一般的な小鳥。平原や森が主な生息地だが、人里でも見かけられる。雑食性で木の実や小型の虫などなんでも食べる。ピョンピョンと飛び跳ねて移動する姿がかわいらしいとりだが、あまり人には懐かない。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '031',
    category: 'creatures',
    name: 'ベニイロスズメ',
    description:
      'へブラ地方に生息する小鳥。山菜や木の芽などをついばんで食べる。体毛は鮮やかな紅色をしており、その羽は装飾品に用いられる事もある。',
    locations: ['ヘブラ山脈', 'タバンタ辺境'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '032',
    category: 'creatures',
    name: 'アオナミスズメ',
    description:
      'ラネール地方でよく見かける小鳥。水辺の若葉や水草を好んで食べる。周りに危険がない時は雨上がりの水たまりや川の浅瀬などで水浴びをするといわれている。',
    locations: ['ラネール大水源', 'ハイラル大森林'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '033',
    category: 'creatures',
    name: 'ゴシキスズメ',
    description:
      'フィローネ地方で見かけられる小鳥。その名の通りカラフルな体毛を持ち、一部の好事家からは観賞用として人気がある。熱帯林に豊富に生息する。小型の虫を主食とするが、雑食性で木の実なども食べる。',
    locations: ['フィローネ草原', '西ハテール'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '034',
    category: 'creatures',
    name: 'スナホリスズメ',
    description:
      'ゲルド地方に生息する小鳥。完走した環境に適応しており、暑さに強い性質を持っている。砂漠では外敵に見つからないように砂に半ば埋まった形でじっとしている姿も見られる。',
    locations: ['ゲルド砂漠'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '035',
    category: 'creatures',
    name: 'コガネスズメ',
    description:
      'オルディン地方に生息するスズメの仲間。火山という厳しい環境に適応しており、その羽毛は燃えにくい性質をもっているといわれている。岩場に隠れる小さい虫を餌に生活している。',
    locations: ['ハイラル大森林', 'オルディン峡谷'],
    recoverableMaterials: ['小鳥の木の実'],
  },
  {
    id: '036',
    category: 'creatures',
    name: 'ナミバト',
    description:
      'ハイラル全土の森や草原に住む鳥。生息域は広く、人里でもよく見受けられる。警戒心があまり強くなく狩りに慣れていない者でも比較的簡単に狩る事ができる。',
    locations: ['ハイラル大森林', 'ハイラル丘陵'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '037',
    category: 'creatures',
    name: 'ニジイロバト',
    description:
      'とても鮮やかな羽をもつナミバトの仲間。ハイラルでは主に北部の森林や草原に生息する。木の実や穀物を好んで食べるが、昆虫やミミズもついばんで食べる。肉はナミバトの物よりも上質と言われている。',
    locations: ['ハイラル丘陵', 'ハイラル大森林'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '038',
    category: 'creatures',
    name: 'カエンバト',
    description:
      'デスマウンテンの周辺にのみ生息する珍しいハト。羽毛は強い耐火性を持つため衣類の材料としても重宝される。一方 肉にはその耐火性がないため、狩った後の肉はすぐに焼き上がってしまう。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '039',
    category: 'creatures',
    name: 'マジロバト',
    description:
      'へブラ地方にする真っ白な羽をもつハト。ナミバトの中でも雪の保護色となる羽毛を持つ個体が雪山で生き残り、マジロバトになったと言われている。寒さに耐えられるよう脂肪を蓄えており、極上の鶏肉が取れることもある。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['上トリ肉', '極上トリ肉'],
  },
  {
    id: '040',
    category: 'creatures',
    name: 'ヤミガラス',
    description:
      'とても賢い鳥。鳴き声が特徴的。山岳部だけでなく森や人里にも生息しており、人間の隙を見て農作物を荒らすこともある。その真っ黒な羽毛の印象から、不吉なものとして毛嫌いされる事が多い。',
    locations: ['ハイラル丘陵', 'ハイラル大森林'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '041',
    category: 'creatures',
    name: 'シラホシガモ',
    description:
      '入らず全般の水辺に生息する鳥。足の水かきを使った泳ぎが得意。川や湖ではくちばしで羽づくろいする姿や水中のえさを捕まえるために首を水の中に突っ込んで逆立ちするしぐさが見られる。狩ると脂ののった上質な肉が取れる。',
    locations: ['ハイラル丘陵', 'ハイラル平原'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '042',
    category: 'creatures',
    name: 'アオバサギ',
    description:
      'ハイラル各地の水辺でよく見かけられる鳥。細い足と長い首が特徴的。水中の魚やカエルなどを食べて生活する。獲物が近づくまでじっと動かずに待ち伏せをし、首を伸ばして捕食する事もある。',
    locations: ['ハイラル丘陵', 'フィローネ草原'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '043',
    category: 'creatures',
    name: 'モモイロサギ',
    description:
      '羽の先端と頭部が美しい桃色をした鳥。水辺にするアオバサギとは異なり、草原や乾燥地帯に生息している。岩陰や草むらの昆虫をついばんで食べる。細い脚で歩きながら餌を探すことが多いが、危険を感じると跳んで逃げてしまう。',
    locations: ['ハイラル丘陵', 'ハイラル平原'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '044',
    category: 'creatures',
    name: 'シマオタカ',
    description:
      '平原や高地に生息する肉食の鳥。鋭い爪とクチバシをもち、他の鳥や小動物を捕えて食糧としている。いつも高いところを悠然と飛んでおり、地上の獲物を探している。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: ['上トリ肉'],
  },
  {
    id: '045',
    category: 'creatures',
    name: 'ウミカモメ',
    description:
      '海の近くに生息する鳥。主に魚類を食べて生活するため、魚の群れが泳いでいる海上にウミカモメが飛んでいる事がよくある。海の漁師は魚群の場所を探すときにこの習性を利用している。',
    locations: ['ハテール海', 'アッカレ海'],
    recoverableMaterials: ['トリ肉'],
  },
  {
    id: '046',
    category: 'creatures',
    name: 'オルディンダチョウ',
    description:
      'オルディン地方の火山地帯に生息する大型の鳥。火山という過酷な環境に適応する形で進化し、不毛や皮膚が高い耐火性能を持っている。翼は小さく飛ぶことができない鳥だが、脚がとても発達しており走るのが速い。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    recoverableMaterials: ['上トリ肉', '極上トリ肉'],
  },
  {
    id: '047',
    category: 'creatures',
    name: 'コッコ',
    description:
      '村でタマゴを取る目的で飼われている鳥。一部ではペットとしても親しまれている。普段は飛ぶことはないが、人に持ち上げられると驚いて激しく羽ばたきを続ける習性がある。基本的には大人しく臆病な性格だが、あまりしつこくつっつくと…。',
    locations: ['西ハテール', '東ハテール'],
    recoverableMaterials: ['トリのタマゴ'],
  },
  {
    id: '048',
    category: 'creatures',
    name: 'ハイラルバス',
    description:
      'ハイラル全域に棲む一般的な魚。そのままでも食べられるが、調理すると回復効果も大きくなる。',
    locations: ['ハイラル平原', '西ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '特になし',
  },
  {
    id: '049',
    category: 'creatures',
    name: 'マックスバス',
    description:
      '水辺に棲む大型の魚。大きな体にたくさんの栄養を蓄えている。料理に使うとハートの限界を超えて回復する。',
    locations: ['西ハテール', 'アッカレ高原'],
    heartsRecoverable: 2,
    cookingEffect: 'MAXハート',
  },
  {
    id: '050',
    category: 'creatures',
    name: 'ガンバリマス',
    description:
      '長い間生きたハイラルバスと言われている。生命力が非常に強く、調理して食べるとがんばりゲージが一気に回復する。',
    locations: ['ハイラル平原', '西ハテール'],
    heartsRecoverable: 1,
    cookingEffect: 'がんばり回復',
  },
  {
    id: '051',
    category: 'creatures',
    name: 'マックスサーモン',
    description:
      '寒冷地の川や湖に棲む魚。調理して食べると、寒さに耐えるため体内に蓄えられた脂身がハートの最大値を増やす効果をもたらす。',
    locations: ['タバンタ辺境', 'へブラ山脈'],
    heartsRecoverable: 4,
    cookingEffect: 'MAXハート',
  },
  {
    id: '052',
    category: 'creatures',
    name: 'ヒンヤリマス',
    description:
      '冷たい水場を好む青いマス。その皮には体を冷やす成分が含まれるといわれ、調理して食べると暑さに耐性を持つことができる。',
    locations: ['タバンタ辺境', 'へブラ山脈'],
    heartsRecoverable: 1,
    cookingEffect: '暑さガード',
  },
  {
    id: '053',
    category: 'creatures',
    name: 'ポカポカマス',
    description:
      '温かい水場を好むマス。体内に熱を蓄える特殊な臓器を持ち、食材として使うと体の芯から温める効能を持つ料理を作ることができる。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    heartsRecoverable: 1,
    cookingEffect: '寒さガード',
  },
  {
    id: '054',
    category: 'creatures',
    name: 'ビリビリマス',
    description:
      '湖などの淡水に棲むマス。絶縁部分を含む鱗には、食材に使うと電気に耐性を得られる料理になる。',
    locations: ['タバンタ辺境', 'ハイラル丘陵'],
    heartsRecoverable: 1,
    cookingEffect: 'エレキガード',
  },
  {
    id: '055',
    category: 'creatures',
    name: 'シノビマス',
    description:
      '暗いところで光る魚。鱗が持つ発行物質には集中力を高める成分が含まれており、料理に使うと慎重に物音を立てずに行動できるようになる。',
    locations: ['ハイラル大森林', 'オルディン山脈'],
    heartsRecoverable: 1,
    cookingEffect: '静けさアップ',
  },
  {
    id: '056',
    category: 'creatures',
    name: 'ツルギゴイ',
    description:
      '淡水に生息するコイの仲間。キモに含まれる成分に筋力増強効果があるとされ、料理して食べると攻撃力が増す。',
    locations: ['アッカレ高原', 'ラネール大水源'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '057',
    category: 'creatures',
    name: 'ヨロイゴイ',
    description:
      '硬い鎧のような鱗を持った古代魚。料理に使うと鱗に蓄えられた成分で、骨が強くなり防御力が増す。',
    locations: ['ラネール大水源', '東ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '058',
    category: 'creatures',
    name: 'サンケゴイ',
    description:
      '野生のヨロイゴイを人の手で改良した観賞魚。自然界には存在しない美しい色と模様を持つ。料理に使っても特別な効果はない。',
    locations: ['西ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '特になし',
  },
  {
    id: '059',
    category: 'creatures',
    name: 'ツルギダイ',
    description:
      '海にいる気性の荒い魚。料理して食べると身に含まれる成分により、闘争心が向上し攻撃力が増すといわれる。',
    locations: ['ハテール海', 'ラネール海'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '060',
    category: 'creatures',
    name: 'ヨロイダイ',
    description:
      '前身が固いうろこで覆われているタイ。料理に使うと鱗に蓄えられた成分で、骨が頑強になり防御力が増える。',
    locations: ['ハテール海', 'ラネール海'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '061',
    category: 'creatures',
    name: 'シノビタニシ',
    description:
      '淡水に生息する大きな巻き貝。料理に使うと聴覚が鋭くなり、物音を立てずに行動ができるようになる。夜になると蛍のような光を放つ。',
    locations: ['西ハテール', 'ラネール大水源'],
    heartsRecoverable: 1,
    cookingEffect: '静けさアップ',
  },
  {
    id: '062',
    category: 'creatures',
    name: 'マックスサザエ',
    description:
      '海岸の砂浜に多く生息する巻き貝。大量の滋養強壮成分をため込んでいて、料理に使うとハートが限界を超えて回復する。',
    locations: ['ハテール海', 'ラネール海'],
    heartsRecoverable: 3,
    cookingEffect: 'MAXハート',
  },
  {
    id: '063',
    category: 'creatures',
    name: 'ツルギガニ',
    description:
      '水辺に生息する鋭いハサミが特徴のカニ。ハサミの肉には筋力を上げる成分が含まれており、調理して食べると攻撃力が増す。',
    locations: ['ハテール海', '東ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '064',
    category: 'creatures',
    name: 'ヨロイガニ',
    description:
      'カニの中でも特別に硬い殻をもつ。味噌や身には、身体を上にする栄養素があると言われ、調理して食べると防御力が増す効果がある。',
    locations: ['ハテール海', '東ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '防御アップ',
  },
  {
    id: '065',
    category: 'creatures',
    name: 'ガンバリガニ',
    description:
      '雨が降ると大量に表れることで有名。実がしっかりしており、疲れを忘れる旨味を持つ。料理に使えばがんばりゲージを回復できる。',
    locations: ['ラネール大水源', 'オルディン峡谷'],
    heartsRecoverable: 1,
    cookingEffect: 'がんばり回復',
  },
  {
    id: '066',
    category: 'creatures',
    name: '妖精',
    description:
      '力尽きてしまった時にポーチから飛び出して瞬時に傷をいやしてくれる。ホタルとは違い昼間でも淡く輝いている。',
    locations: ['ハイラル全土'],
    heartsRecoverable: 5,
    cookingEffect: '特になし',
  },
  {
    id: '067',
    category: 'creatures',
    name: 'ヒンヤリアゲハ',
    description:
      '空気を冷やすリンプンを持つ不思議なチョウ。雪に交じって舞う姿が美しい。魔物の素材と煮込むと暑さに耐えられる薬になる。',
    locations: ['ハイラル丘陵', 'タバンタ辺境'],
    cookingEffect: '暑さガード',
  },
  {
    id: '068',
    category: 'creatures',
    name: 'ポカポカアゲハ',
    description:
      '森や平原などの暖かい地域に生息するチョウ。太陽の光をため込んだリンプンは、魔物の素材と煮込むと体を温める薬になる。',
    locations: ['ハイラル大森林', 'オルディン山脈'],
    cookingEffect: '寒さガード',
  },
  {
    id: '069',
    category: 'creatures',
    name: 'ビリビリアゲハ',
    description:
      '雨の降る時にしか姿を見せない珍しいチョウ。体内器官で絶縁部分を作り出す性質を持つ。煮詰めて薬にすると電撃に体制を得られる。',
    locations: ['ハイラル丘陵', 'ゲルド高地'],
    cookingEffect: 'エレキガード',
  },
  {
    id: '070',
    category: 'creatures',
    name: 'ヒケシアゲハ',
    description:
      '高熱の火山地帯に生息する珍しいチョウ。耐熱性の高い体液を体内にため込んでおり、煮込んで作る塗り薬は炎に耐える効果を発揮する。',
    locations: ['オルディン峡谷', 'デスマウンテン'],
    cookingEffect: '炎ガード',
  },
  {
    id: '071',
    category: 'creatures',
    name: 'ヒンヤリヤンマ',
    description:
      '木陰など涼しい場所を好むトンボ。青く透き通った羽は放熱成分を持つと言われ、煮詰めると暑さに耐性を発揮する薬となる。',
    locations: ['タバンタ辺境', 'ハイラル丘陵'],
    cookingEffect: '暑さガード',
  },
  {
    id: '072',
    category: 'creatures',
    name: 'ポカポカヤンマ',
    description:
      '羽の先端の赤い模様が特徴的なトンボ。羽に発汗作用がある成分を持ち、魔物の素材と煮詰めると寒さに耐性を得られる。',
    locations: ['アッカレ高原', 'ハイラル平原'],
    cookingEffect: '寒さガード',
  },
  {
    id: '073',
    category: 'creatures',
    name: 'ビリビリヤンマ',
    description:
      '雨の降る時にしか姿を見せない珍しいトンボ。長い羽は電流を体外へ逃がす特殊な成分を持ち、薬にするとその効能から帯電性が向上する。',
    locations: ['ハイラル丘陵', 'ゲルド砂漠'],
    cookingEffect: 'エレキガード',
  },
  {
    id: '074',
    category: 'creatures',
    name: 'ガンバリバッタ',
    description:
      'エサを求めて丸一日跳ね続けるスタミナを持つ通称ガンバッタ。体内に蓄えられた滋養分は頑張りゲージを回復する薬の元となる。',
    locations: ['ハイラル平原', '東ハテール'],
    cookingEffect: 'がんばり回復',
  },
  {
    id: '075',
    category: 'creatures',
    name: 'ツルギカブト',
    description:
      '森に生息する昆虫の王様。大きな角は煮込んで薬にすると筋肉の血流量を増やす効果があるといわれ攻撃力が増す。',
    locations: ['西ハテール', '東ハテール'],
    cookingEffect: '攻撃力アップ',
  },
  {
    id: '076',
    category: 'creatures',
    name: 'ヨロイカブト',
    description:
      '鎧のように硬い体を持つカブトムシ。その殻の成分は煮込んで薬にすると体幹を強化する効能があり、防御力が増す。',
    locations: ['ハイラル平原', 'フィローネ草原'],
    cookingEffect: '防御力アップ',
  },
  {
    id: '077',
    category: 'creatures',
    name: 'ガンバリカブト',
    description:
      '10年も生きるとされる貴重なカブトムシ。その強力な生命力は薬にすると、がんばりゲージを一気に回復する効果を生み出す。',
    locations: ['アッカレ高原', '西ハテール'],
    cookingEffect: 'がんばり回復',
  },
  {
    id: '078',
    category: 'creatures',
    name: 'シズカホタル',
    description:
      '夜になると淡く光る昆虫。体内に持つ発行物質は集中力を高める効果もあるといわれ、薬にすると物音を立てずに行動が可能になる。',
    locations: ['西ハテール', 'ハイラル大森林'],
    cookingEffect: '静けさアップ',
  },
  {
    id: '079',
    category: 'creatures',
    name: 'ゴーゴーガエル',
    description:
      '水辺を素早く跳ね回るカエル。その肉には俊敏性を増す物質が含まれており、魔物の素材と煮込むと移動速度を上げる薬になる。',
    locations: ['ラネール大水源', 'ハイラル丘陵'],
    cookingEffect: '移動力アップ',
  },
  {
    id: '080',
    category: 'creatures',
    name: 'ガッツガエル',
    description:
      '雨の時にしか姿を現さない珍しいカエル。キモが持つ成分に代謝を活発にする効能があり、薬にするとがんばりゲージが限界を超えて増える。',
    locations: ['ラネール大水源', 'ハイラル丘陵'],
    cookingEffect: 'MAXがんばり',
  },
  {
    id: '081',
    category: 'creatures',
    name: 'ゴーゴートカゲ',
    description:
      '草地や森で見かけられるとても素早く走るトカゲ。その肉には脚の筋力増強効果があるといわれ、魔物素材と煮込めば移動速度を上げる薬になる。',
    locations: ['西ハテール', '東ハテール'],
    cookingEffect: '移動力アップ',
  },
  {
    id: '082',
    category: 'creatures',
    name: 'マックストカゲ',
    description:
      '主に深い森に住む希少なトカゲ。栄養価の高い餌を食べ生命力が非常に強い。薬の材料にするとハートの最大値が大きく上がる。',
    locations: ['ゲルド砂漠', 'ハテール海'],
    cookingEffect: 'MAXハート',
  },
  {
    id: '083',
    category: 'creatures',
    name: 'ヒケシトカゲ',
    description:
      'オルディン地方にだけ生息する特殊なトカゲ。鱗には耐火成分がたっぷり含まれており、魔物の素材と煮込むと炎に耐えられる薬となる。',
    locations: ['オルディン峡谷', 'デスマウンテン'],
    cookingEffect: '炎ガード',
  },
];
