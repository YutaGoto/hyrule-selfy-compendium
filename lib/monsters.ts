import { Item } from 'types/Item';

export const monsters: Item[] = [
  {
    id: '084',
    category: 'monsters',
    name: 'チュチュ',
    description:
      'ハイラル全土に生息するゲル状の下級魔族。地面や木の上から突然姿を現わし、体の大きさによって体力が違う。彼らが落とすゼリーは熱したり冷やしたり電気を与えたりすることで性質が変わるという。',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['チュチュゼリー'],
  },
  {
    id: '085',
    category: 'monsters',
    name: 'ファイアチュチュ',
    description:
      '炎をまとったゲル状の下級魔族。体の大きさによって体力が違う。うかつに手を出すと破裂し爆発するため、槍で遠くから突くのが安全策だ。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    recoverableMaterials: ['赤チュチュゼリー'],
  },
  {
    id: '086',
    category: 'monsters',
    name: 'アイスチュチュ',
    description:
      '冷気をまとったゲル状の下級魔族。体の大きさによって体力が違う。うかつに手を出すと破裂し冷気をまき散らすため危険。槍で遠くから突くのが安全策だ。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    recoverableMaterials: ['白チュチュゼリー'],
  },
  {
    id: '087',
    category: 'monsters',
    name: 'エレキチュチュ',
    description:
      '電気をまとったゲル状の下級魔族。体の大きさによって体力が違う。うかつに手を出すと破裂し放電するため危険。槍で遠くから突けば安全に始末できる。',
    locations: ['ゲルド高地', '東ハテール'],
    recoverableMaterials: ['黄チュチュゼリー'],
  },
  {
    id: '088',
    category: 'monsters',
    name: 'キース',
    description:
      '闇夜に現れるこうもりのような姿をした下級魔族。不規則に飛び回る為戦いづらいが、一撃を与えるだけで始末できる。ときおり大群で襲ってくることがあるが、冷静に一撃を与えれば退散していく。',
    locations: ['ハイラル平原', '東ハテール'],
    recoverableMaterials: ['キースの羽', 'キースの目玉'],
  },
  {
    id: '089',
    category: 'monsters',
    name: 'ファイアキース',
    description:
      '闇夜に現れるこうもりのような姿をした下級魔族。炎をまとっており、触れると燃えてしまう。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    recoverableMaterials: ['ファイアキースの羽', 'キースの目玉'],
  },
  {
    id: '090',
    category: 'monsters',
    name: 'アイスキース',
    description:
      '闇夜に現れるこうもりのような姿をした下級魔族。冷気をまとっており、触れると凍ってしまう。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    recoverableMaterials: ['アイスキースの羽', 'キースの目玉'],
  },
  {
    id: '091',
    category: 'monsters',
    name: 'エレキース',
    description:
      '闇夜に現れるこうもりのような姿をした下級魔族。電気をまとっており、触れるとしびれてしまう。',
    locations: ['ラネール大水源', '東ハテール'],
    recoverableMaterials: ['エレキースの羽', 'キースの目玉'],
  },
  {
    id: '092',
    category: 'monsters',
    name: '水オクタ',
    description:
      'タコのような見た目の下級魔族。普段は水中に潜んでいるが、気圧が下がり雨が降ると、体内の浮袋が膨らみ空中に浮かびあがる。吐いてくる岩は盾ではじき返すことができる。',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['オクタの足', 'オクタ風船', 'オクタの目玉'],
  },
  {
    id: '093',
    category: 'monsters',
    name: '森オクタ',
    description:
      'タコのような見た目の下級魔族。森に潜んでおり草や低木に擬態している。近づくと地面に潜って隠れてしまう。もともと水生の魔族だがいつしか森にも居つくようになった。',
    locations: ['ハイラル丘陵', '奥アッカレ'],
    recoverableMaterials: ['オクタの足', 'オクタ風船', 'オクタの目玉'],
  },
  {
    id: '094',
    category: 'monsters',
    name: '岩オクタ',
    description:
      'タコのような見た目の下級魔族。火山地方に生息する。大きく息を吸い込んで炎をまとった岩を吐き出してくる。吸い込む力が強力で武器やバクダンも吸い込んでしまう。',
    locations: ['オルディン峡谷', 'ゲルド高地'],
    recoverableMaterials: ['オクタの足', 'オクタ風船', 'オクタの目玉'],
  },
  {
    id: '095',
    category: 'monsters',
    name: '雪オクタ',
    description:
      'タコのような見た目の下級魔族。雪原に生息している。雪原に生えているススキに擬態し、人を見つけると雪玉を吐いて襲ってくる。',
    locations: ['ゲルド高地', 'タバンタ辺境'],
    recoverableMaterials: ['オクタの足', 'オクタ風船', 'オクタの目玉'],
  },
  {
    id: '096',
    category: 'monsters',
    name: '宝オクタ',
    description:
      'タコのような見た目の下級魔族。砂地や雪原に潜んでおり宝箱に擬態している。うかつに近づくと奇襲される。頭についた鉄の宝箱は本物の宝箱ではなくオクタの体の一部と言われている。その証拠は頭の宝箱は磁石に反応しない事だ。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: [
      'オクタの足',
      'オクタ風船',
      'オクタの目玉',
      '緑ルピー',
      '青ルピー',
      '赤ルピー',
      '紫ルピー',
      '銀ルピー',
    ],
  },
  {
    id: '097',
    category: 'monsters',
    name: '空オクタ',
    description:
      'タコのような見た目の下級魔族。もともとは水生の魔族だが、体内の浮き袋が発達し常に空に浮かべるようになった。だが、それに目をつけた魔物たちに空飛ぶ拠点の浮力として酷使されている。角笛の音で上昇するように飼いなされて特に攻撃もしてこない。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '098',
    category: 'monsters',
    name: 'ファイアウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。ファイアロッドを操り火の玉を飛ばしたり炎をまとった魔物を召喚したりする。また、ときおり世界の天候を灼熱に変える魔法も使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ハイラル平原', 'ハイラル大森林'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '099',
    category: 'monsters',
    name: 'アイスウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。アイスロッドを操り冷気をまき散らしたり冷気をまとった魔物を召喚したりする。また、ときおり世界の天候を大雪に変える魔法を使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ゲルド高地', 'ハイラル平原'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '100',
    category: 'monsters',
    name: 'エレキウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。エレキロッドを操り電撃をまき散らしたり電気をまとった魔物を召喚したりする。また、ときおり世界の天候を雷雨に変える魔法も使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ハイラル丘陵', '西ハテール'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '101',
    category: 'monsters',
    name: 'メテオウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。メテオロッドを操り火の玉を飛ばしたり炎をまとった魔物を召喚したりする。また、ときおり世界の天候を灼熱に変える魔法も使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ハイラル平原', 'オルディン峡谷'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '102',
    category: 'monsters',
    name: 'フリーズウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。フリーズロッドを操り冷気をまき散らしたり冷気をまとった魔物を召喚したりする。また、ときおり世界の天候を大雪に変える魔法を使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ハイラル平原', 'へブラ山脈'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '103',
    category: 'monsters',
    name: 'ボルトウィズローブ',
    description:
      'ハイラル全土に存在する魔法を使う魔物。ボルテージロッドを操り電撃をまき散らしたり電気をまとった魔物を召喚したりする。また、ときおり世界の天候を雷雨に変える魔法も使ってくることがある。ウィズローブを倒すことで天候は正常に戻る。',
    locations: ['ハイラル平原', 'タバンタ辺境'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '104',
    category: 'monsters',
    name: 'ボコブリン',
    description:
      'ハイラル全土に生息する魔物。荒れ果てたハイラルでは徒党を組み山賊化している。あまり賢くはないが、ケモノを狩って焼く程度の知性はあるようだ。凶暴で肉食だが、果物も好んで食べるという。',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['ボコブリンの角', 'ボコブリンの牙'],
  },
  {
    id: '105',
    category: 'monsters',
    name: '青ボコブリン',
    description:
      'ハイラル全土に生息する魔物。赤いボコブリンに比べると体力が高く扱う武器もより強力。リモコンバクダンを見かけると素早く蹴り飛ばし危険を回避するなど、少しは賢いところもあるようだ。',
    locations: ['ゲルド砂漠', 'ゲルド高地'],
    recoverableMaterials: [
      'ボコブリンの角',
      'ボコブリンの牙',
      'ボコブリンの肝',
    ],
  },
  {
    id: '106',
    category: 'monsters',
    name: '黒ボコブリン',
    description:
      'ハイラル全土に生息する魔物。体力は非常に高く強力な武器を備えていることが多いため、ボコブリン族のなかでも最上級の危険度である。',
    locations: ['ハイラル平原', 'ゲルド高地'],
    recoverableMaterials: [
      'ボコブリンの角',
      'ボコブリンの牙',
      'ボコブリンの肝',
    ],
  },
  {
    id: '107',
    category: 'monsters',
    name: 'スタルボコブリン',
    description:
      '闇夜に現れるボコブリンの亡骸。一撃加えるだけでばらばらになる程もろい反面、頭蓋骨さえあれば何度でも立ち直ってしまう。たまに頭蓋骨を取り違えることがあるが、彼らにはたいした問題ではないようだ。',
    locations: ['ハイラル平原', 'ハイラル大森林'],
    recoverableMaterials: ['ボコブリンの角', 'ボコブリンの牙'],
  },
  {
    id: '108',
    category: 'monsters',
    name: '白銀ボコブリン',
    description:
      '黒ボコブリンを遥かに超える体力を持つ最強のボコブリン。白い肉体とその希少性から、白銀ボコブリンと呼ばれている。ガノンの凶悪な魔力の影響を受け、からだ中に紫の縞模様が浮かび上がっているのも特徴。',
    locations: ['不明'],
    recoverableMaterials: [
      'ボコブリンの角',
      'ボコブリンの牙',
      'ボコブリンの肝',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '109',
    category: 'monsters',
    name: '金色ボコブリン',
    description:
      '白銀ボコブリンすら凌駕する戦闘力と体力を持った非常に凶悪なボコブリン。白銀ボコブリンが雷に撃たれ、そのショックで突然変異したものといわれている。そのせいか耐性があり、雷の攻撃を受けてもあまりしびれないようだ。',
    locations: ['不明'],
    recoverableMaterials: [
      'ボコブリンの角',
      'ボコブリンの牙',
      'ボコブリンの肝',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '110',
    category: 'monsters',
    name: 'モリブリン',
    description:
      'ハイラル全土に生息する重量級の魔物。その剛腕はすさまじく、ボコブリンを投げ飛ばしてくることがあるという。足腰も強靭でバクダンでも吹き飛ばない。ボコブリン族よりも格上の種族である。',
    locations: ['ハイラル平原', '東ハテール'],
    recoverableMaterials: ['モリブリンの角', 'モリブリンの牙'],
  },
  {
    id: '111',
    category: 'monsters',
    name: '青モリブリン',
    description:
      'ハイラル全土に生息する重量級の魔物。赤いモリブリンよりも体力が強靭で装備する武器もより強力なことが多い。',
    locations: ['ハイラル平原', '奥アッカレ'],
    recoverableMaterials: [
      'モリブリンの角',
      'モリブリンの牙',
      'モリブリンの肝',
    ],
  },
  {
    id: '112',
    category: 'monsters',
    name: '黒モリブリン',
    description:
      'ハイラル全土に生息する重量級の魔物。体力は非常に高く強力な武器を備えていることが多いため、モリブリン族のなかでも最上級の危険度である。',
    locations: ['ハイラル平原', 'オルディン峡谷'],
    recoverableMaterials: [
      'モリブリンの角',
      'モリブリンの牙',
      'モリブリンの肝',
    ],
  },
  {
    id: '113',
    category: 'monsters',
    name: 'スタルモリブリン',
    description:
      '闇夜に現れるモリブリンの亡骸。普段は強靭なモリブリンも骨になればもろいようで、少し攻撃を加えるだけでバラバラになる。しかし、頭蓋骨さえあれば何度も立ち直る。',
    locations: ['ハイラル平原', 'ゲルド高地'],
    recoverableMaterials: ['モリブリンの角', 'モリブリンの牙'],
  },
  {
    id: '114',
    category: 'monsters',
    name: '白銀モリブリン',
    description:
      '黒モリブリンを遥かに超える体力を持つ最強のモリブリン。白い肉体とその希少性から、白銀モリブリンと呼ばれている。ガノンの凶悪な魔力の影響を受け、からだ中に紫の縞模様が浮かび上がっているのも特徴。',
    locations: ['不明'],
    recoverableMaterials: [
      'モリブリンの角',
      'モリブリンの牙',
      'モリブリンの肝',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '115',
    category: 'monsters',
    name: '金色モリブリン',
    description:
      '白銀モリブリンすら凌駕する戦闘力と体力を持った非常に凶悪なモリブリン。白銀モリブリンが雷に撃たれ、そのショックで突然変異したものといわれている。そのせいか耐性があり、雷の攻撃を受けてもあまりしびれないようだ。',
    locations: ['不明'],
    recoverableMaterials: [
      'モリブリンの角',
      'モリブリンの牙',
      'モリブリンの肝',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '116',
    category: 'monsters',
    name: 'リザルフォス',
    description:
      'ハイラル全土に生息する俊敏なトカゲ類の魔物。水中に潜んだり地面に体を擬態させ奇襲してくることもある狡猾な種族。昼夜を問わず寝ることはない。肉食でケモノを食べるが、虫も好んで食べる。',
    locations: ['ラネール大水源', 'ゲルド砂漠'],
    recoverableMaterials: ['リザルフォスの角', 'リザルフォスの爪'],
  },
  {
    id: '117',
    category: 'monsters',
    name: '青リザルフォス',
    description:
      'ハイラル全土に生息する俊敏なトカゲ類の魔物。緑のリザルフォスよりも強い武器を持っていることが多く体力も強靭。',
    locations: ['タバンタ辺境', 'ゲルド砂漠'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスのしっぽ',
    ],
  },
  {
    id: '118',
    category: 'monsters',
    name: '黒リザルフォス',
    description:
      'ハイラル全土に生息する俊敏なトカゲ類の魔物。体力は非常に高く強力な武器を持っていることが多いため、リザルフォス族のなかでも最上級の危険度である。',
    locations: ['ハイラル平原', 'へブラ山脈'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスのしっぽ',
    ],
  },
  {
    id: '119',
    category: 'monsters',
    name: 'スタルリザルフォス',
    description:
      '闇夜に現れるリザルフォスの亡骸。骨になってもその俊敏さは変わらない。体はもろく一度たたけばすぐバラバラになるが、頭蓋骨を打ち砕かなければ何度も復活してしまう。たまに頭蓋骨を取り違えることがあるが、彼らにはたいした問題ではないようだ。',
    locations: ['ゲルド砂漠', 'ハイラル丘陵'],
    recoverableMaterials: ['リザルフォスの角', 'リザルフォスの爪'],
  },
  {
    id: '120',
    category: 'monsters',
    name: '火吹きリザルフォス',
    description:
      'ハイラル全土に生息するトカゲ類の魔物。口から高熱の炎を吐き出す危険な種類だが、冷気に触れると即死してしまうという。主に火山地帯に生息しているようだが、アッカレ地方でも目撃されている。',
    locations: ['オルディン峡谷', 'ゲルド砂漠'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスの赤しっぽ',
    ],
  },
  {
    id: '121',
    category: 'monsters',
    name: '雹吹きリザルフォス',
    description:
      'ハイラル全土に生息するトカゲ類の魔物。口から氷の球を吐き出すやっかいな種類だが、炎に触れると即死してしまうという。主に雪山に生息している。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスの青しっぽ',
    ],
  },
  {
    id: '122',
    category: 'monsters',
    name: 'シビレリザルフォス',
    description:
      'ハイラル全土に生息するトカゲ類の魔物。身体が強力な電気を発することがある。角は電気を帯びており、そこを弓で射ると広範囲に放電する。主に砂漠地方に生息しているようだ。',
    locations: ['ゲルド砂漠', 'ハイラル丘陵'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスの黄しっぽ',
    ],
  },
  {
    id: '123',
    category: 'monsters',
    name: '白銀リザルフォス',
    description:
      '黒リザルフォスを遥かに超える体力を持つ最強のリザルフォス。白い肉体とその希少性から白銀リザルフォスと呼ばれている。ガノンの凶悪な魔力の影響を受け、体中に紫の縞模様が浮かび上がっているのも特徴。',
    locations: ['不明'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスのしっぽ',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '124',
    category: 'monsters',
    description:
      '白銀リザルフォスすら凌駕する戦闘力と体力を持った非常に凶悪なリザルフォス。白銀リザルフォスが雷に撃たれ、そのショックで突然変異したものといわれる。そのせいか耐性があり、雷の攻撃を受けてもあまりしびれないようだ。',
    name: '金色リザルフォス',
    locations: ['不明'],
    recoverableMaterials: [
      'リザルフォスの角',
      'リザルフォスの爪',
      'リザルフォスのしっぽ',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '125',
    category: 'monsters',
    name: 'ライネル',
    description:
      '古からハイラル全土に生息するといわれる半人半獣の魔物。中でも危険度の高い種族で知性・体力ともに高く、あらゆる攻撃が強力である。炎や氷、電気も彼らにとっては何の脅威でもない。中途半端な準備で戦いに臨まないほうが良い。',
    locations: ['ラネール大水源', 'ハイラル平原'],
    recoverableMaterials: ['ライネルの角', 'ライネルのひづめ', 'ライネルの肝'],
  },
  {
    id: '126',
    category: 'monsters',
    name: '青髪のライネル',
    description:
      '古からハイラル全土に生息するといわれる半人半獣の魔物。赤いライネルよりもさらに強靭な体力を持ち強力な武器を備えている。中途半端な準備で戦いに臨まないほうがよい。',
    locations: ['ハイラル平原', '奥アッカレ'],
    recoverableMaterials: ['ライネルの角', 'ライネルのひづめ', 'ライネルの肝'],
  },
  {
    id: '127',
    category: 'monsters',
    name: '白髪のライネル',
    description:
      '古からハイラル全土に生息といわれる半人半獣の魔物。知性・体力ともに非常に高く扱う武器も強力でライネル族のなかでも最上級の危険度である。強烈な炎を吐くこともあり全ての攻撃が死を招く。目撃情報は少ないが、それは出会って生きて帰った者が少ないからだ。',
    locations: ['ハイラル平原', 'へブラ山脈'],
    recoverableMaterials: ['ライネルの角', 'ライネルのひづめ', 'ライネルの肝'],
  },
  {
    id: '128',
    category: 'monsters',
    name: '白銀のライネル',
    description:
      '白髪のライネルを遥かに超える体力を持つ最強のライネル。白い肉体とその希少性から白銀のライネルと呼ばれている。ガノンの凶悪な魔力の影響を受け、体中に紫の縞模様が浮かび上がっているのも特徴。',
    locations: ['不明'],
    recoverableMaterials: [
      'ライネルの角',
      'ライネルのひづめ',
      'ライネルの肝',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
      '星のかけら',
    ],
  },
  {
    id: '129',
    category: 'monsters',
    name: '金色のライネル',
    description:
      '白銀のライネルを凌駕する戦闘力と体力を持った非常に凶悪なライネル。白銀のライネルが雷に撃たれ、そのショックで突然変異したものといわれる。もし目撃しても命が惜しければ、そっとその場を離れたほうが良い。',
    locations: ['不明'],
    recoverableMaterials: [
      'ライネルの角',
      'ライネルのひづめ',
      'ライネルの肝',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
      '星のかけら',
    ],
  },
  {
    id: '130',
    category: 'monsters',
    name: 'ガーディアン（歩行型）',
    description:
      '古代ハイラル王国がシーカー族の技術を結集して作り上げた対ガノン用の兵器。6本の脚は既存のどの乗り物にもない破格の走破性を与え、強力なレーザー攻撃はどの武器の追従も許さない攻撃力を持つ。脚を切断すれば機動力を低下させることが可能。',
    locations: ['ハイラル平原'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
      '古代の巨大なコア',
    ],
  },
  {
    id: '131',
    category: 'monsters',
    name: 'ガーディアン（飛行型）',
    description:
      '古代ハイラル王国がシーカー族の技術を結集して作り上げた対ガノン用の兵器。歩行型をさらに改良し、空中からの偵察・攻撃を可能にした。プロペラを破壊すれば撃ち落とすことが可能。',
    locations: ['ハイラル平原', 'アッカレ高原'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
      '古代の巨大なコア',
    ],
  },
  {
    id: '132',
    category: 'monsters',
    name: 'ガーディアン（砲台型）',
    description:
      '古代ハイラル王国がシーカー族の技術を結集して作り上げた対ガノン用の兵器。主に城などの防衛用として作られた。脚をオミットしたことにより本来の攻撃力を維持しつつ、大幅なコストカットに成功している。',
    locations: ['ハイラル城'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
      '古代の巨大なコア',
    ],
  },
  {
    id: '133',
    category: 'monsters',
    name: 'プルペラ',
    description:
      '神獣 ヴァ・ルーダニアから打ち出された偵察機。上空からライトで地上を照らして侵入者を探し出す。',
    locations: ['デスマウンテン'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
    ],
  },
  {
    id: '134',
    category: 'monsters',
    name: '朽ちたガーディアン',
    description:
      '元は古代ハイラル王国がシーカー族の技術を結集して作り上げた対ガノン用の兵器。大厄災時に破壊され長い間放置され風化している。中には近づくと停止状態から目覚め、再び動き出す個体も存在する。',
    locations: ['ハイラル平原', 'ハイラル城'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
    ],
  },
  {
    id: '135',
    category: 'monsters',
    name: '小型ガーディアン',
    description:
      '試練の祠に接地された古代文明兵器の一種。対ガノン用兵器として作られたガーディアンから、多足移動機構とビーム照射機能を流用し、勇者の訓練用兵器として作り変えられた。',
    locations: ['不明'],
    recoverableMaterials: ['古代のネジ', '古代のバネ'],
  },
  {
    id: '136',
    category: 'monsters',
    name: '小型ガーディアン(序位)',
    description:
      '試練の祠に接地された古代文明兵器の一種。対ガノン用兵器として作られたガーディアンから、多足移動機構とビーム照射機能を流用し、勇者の訓練用兵器として作り変えられた。勇者の戦闘力を鍛える力の試練のために武器を扱う機能がつけ加えられている。渡り合うには相応の力が求められる。',
    locations: ['不明'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
    ],
  },
  {
    id: '137',
    category: 'monsters',
    name: '小型ガーディアン(中位)',
    description:
      '試練の祠に接地された古代文明兵器の一種。対ガノン用兵器として作られたガーディアンから、多足移動機構とビーム照射機能を流用し、勇者の訓練用兵器として作り変えられた。勇者の戦闘力を鍛える力の試練のために二刀を扱う機能がつけ加えられている。渡り合うには相応の力が求められる。',
    locations: ['不明'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
    ],
  },
  {
    id: '138',
    category: 'monsters',
    name: '小型ガーディアン(極位)',
    description:
      '試練の祠に接地された古代文明兵器の一種。対ガノン用兵器として作られたガーディアンから、多足移動機構とビーム照射機能を流用し、勇者の訓練用兵器として作り変えられた。勇者の戦闘力を鍛える力の試練のために三刀を扱う機能がつけ加えっられており耐久力も非常に高い。充分な力を備えていなければ太刀打ちできない。',
    locations: ['不明'],
    recoverableMaterials: [
      '古代のネジ',
      '古代のバネ',
      '古代の歯車',
      '古代のシャフト',
      '古代のコア',
    ],
  },
  {
    id: '139',
    category: 'monsters',
    name: 'イーガ団 構成員',
    description:
      'イーガ団の末端構成員。英傑リンクを見つけ出し命を奪うためハイラル全土に送り出されている。旅人や村人に扮しリンクを奇襲していることもあるため、怪しげな人物を見たら注意が必要だ。片手剣と弓を操り、俊敏な動きを見せる。',
    locations: ['不明'],
    recoverableMaterials: [
      '緑ルピー',
      '青ルピー',
      '赤ルピー',
      '紫ルピー',
      'ツルギバナナ',
    ],
  },
  {
    id: '140',
    category: 'monsters',
    name: 'イーガ団 幹部',
    description:
      'イーガ団の構成員。真空波を発する風斬り刀を備えている。屈強な体つきだが動きは俊敏。地面を叩きつけ気流とともに石柱を突き上げる。術遁の術を使うこともできるという。',
    locations: ['不明'],
    recoverableMaterials: [
      'コハク',
      'オパール',
      'トバーズ',
      'ルビー',
      'サファイア',
      'ツルギバナナ',
    ],
  },
  {
    id: '141',
    category: 'monsters',
    name: 'コーガ様',
    description:
      '英傑リンクの命を狙うイーガ団の総長。世界中に子分を送り出し創作させているが、自身はごろごろ寝てばかりいる。そんな総長だが 究極の奥義を身に着けており、子分からの信頼は意外にも厚い。たとえ彼が目閲しようと子分たちが意思を引き継ぎ英傑を負い続けるだろう。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '142',
    category: 'monsters',
    name: '導師ミィズ・キョシア',
    description:
      '女神ハイリアの啓示に従い神獣の繰り手としてふさわしい者を見定めるための試練を担う導師。その最後の試練として自らが立ちはだかり、古の技術を駆使した様々な術を用いて戦いを挑んでくる。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '143',
    category: 'monsters',
    name: 'イワロック',
    description:
      '岩に擬態した巨大な魔物。硬い岩でできたその体は剣や弓では歯が立たない。倒すには体によじ登って、頭部に露出した鉱床を攻撃するのが有効といわれている。',
    locations: ['西ハテール', '東ハテール'],
    recoverableMaterials: ['火打ち石', 'コハク', 'オパール', 'ルビー'],
  },
  {
    id: '144',
    category: 'monsters',
    name: 'イワロック(夜光)',
    description:
      '岩に擬態した巨大な魔物。硬い岩でできたその体は剣や弓では歯が立たない。頭部に露出した鉱床に多くの夜光石を含むという特徴を持つ。',
    locations: ['ゲルド高地', 'ハイラル平原'],
    recoverableMaterials: [
      '火打ち石',
      'コハク',
      'オパール',
      '夜光石',
      'トパーズ',
      'ダイヤモンド',
    ],
  },
  {
    id: '145',
    category: 'monsters',
    name: 'イワロック(希少)',
    description:
      '岩に擬態した巨大な魔物。硬い岩でできたその体は剣や弓では歯が立たない。頭部に露出した鉱床に多くの貴重な鉱石を含むという特徴を持つ。',
    locations: ['ハイラル平原', 'タバンタ辺境'],
    recoverableMaterials: [
      '火打ち石',
      'コハク',
      'オパール',
      'トパーズ',
      'ルビー',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '146',
    category: 'monsters',
    name: 'マグロック',
    description:
      '溶岩に擬態した巨大な魔物。硬い岩でできたその体は剣や弓では歯が立たない。溶岩をまとっており触れる事さえ危険だが、冷気で熱を冷ませばよじ登ることもできる。',
    locations: ['オルディン峡谷'],
    recoverableMaterials: ['火打ち石', 'オパール', 'ルビー', 'ダイヤモンド'],
  },
  {
    id: '147',
    category: 'monsters',
    name: 'ガチロック',
    description:
      '凍った岩に擬態した巨大な魔物。硬い岩でできたその体は剣や弓では歯が立たない。凍てつくその体は触れる事さえ危険だが、炎で氷を解かせばよじ登ることもできる。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: [
      '火打ち石',
      'オパール',
      'サファイア',
      'ダイヤモンド',
    ],
  },
  {
    id: '148',
    category: 'monsters',
    name: 'イシロック',
    description:
      'イワロックの幼体。成長すると岩のように固い体になるが、幼体は持ち上げられるほど軽く、投げるとすぐに崩れるほどモロい。',
    locations: ['ハイラル全土'],
    recoverableMaterials: ['火打ち石', 'コハク', 'オパール'],
  },
  {
    id: '149',
    category: 'monsters',
    name: 'マグロック',
    description:
      'マグロックの幼体。成長すると溶岩でできた固い体になる。幼体ながらも炎を帯びているが、バクダンで吹き飛ぶほど軽くモロい。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    recoverableMaterials: ['火打ち石', 'コハク', 'ルビー'],
  },
  {
    id: '150',
    category: 'monsters',
    name: 'カチロック',
    description:
      'ガチロックの幼体。成長すると氷の岩でできた固い体になる。幼体ながらも冷気を帯びているが、バクダンで吹き飛ぶほど軽くモロい。',
    locations: ['ヘブラ山脈', 'ゲルド高地'],
    recoverableMaterials: ['火打ち石', 'コハク', 'サファイア'],
  },
  {
    id: '151',
    category: 'monsters',
    name: 'メガマグロック',
    description:
      '溶岩に擬態した巨大な魔物。マグロックの亜種でマグマの中に潜み、長い年月をかけて己のからだをさらに巨大化させている。その力はもちろん、体から発する熱量もすさまじく、周辺に常時上昇気流を発生させている姿はメガの名にふさわしい。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '152',
    category: 'monsters',
    name: 'ヒノックス',
    description:
      'ハイラルに生息する魔物で最大級の大きさを誇る。主に森に生息している。木を抜いて振り回してくるなど凶暴性が高く、戦う際には周りの地形にも注意が必要。首輪にぶら下がった武器は奪うことができる。',
    locations: ['東ハテール', '西ハテール'],
    recoverableMaterials: [
      'ヒノックスの爪',
      'ヒノックスの牙',
      'ヒノックスの肝',
      'リンゴ',
      'イチゴ',
      'ヤシの実',
      'ビリビリフルーツ',
      'ツルギバナナ',
      'ヨロイカボチャ',
      'マックスドリアン',
    ],
  },
  {
    id: '153',
    category: 'monsters',
    name: '青ヒノックス',
    description:
      'ハイラルに生息する魔物で最大級の大きさを誇る。主に森に生息している。木を抜いて振り回してくるなど凶暴性が高く、戦う際には周りの地形にも注意が必要。足元は固いすね当てで守られているが、火をつければ燃やすことが可能だ。首輪にぶら下がった武器は奪うことができる。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    recoverableMaterials: [
      'ヒノックスの爪',
      'ヒノックスの牙',
      'ヒノックスの肝',
      '焼きバス',
      '焼きマックスバス',
      '焼きマックスサーモン',
      '焼きマス',
      '焼きゴイ',
      '焼きダイ',
      '焼きシノビタニシ',
      '焼きマックスサザエ',
      '焼きガニ',
    ],
  },
  {
    id: '154',
    category: 'monsters',
    name: '黒ヒノックス',
    description:
      'ハイラルに生息する魔物で最大級の大きさを誇る。主に森に生息している。木を抜いて振り回してくるなど凶暴性が高く、戦う際には周りの地形にも注意が必要。鉄のすね当ては固くて壊せそうにないが電気には弱そうだ。首輪にぶら下がった武器は奪うことができる。',
    locations: ['東ハテール', 'ハイラル平原'],
    recoverableMaterials: [
      'ヒノックスの爪',
      'ヒノックスの牙',
      'ヒノックスの肝',
      '焼きケモノ肉',
      '焼き上ケモノ肉',
      '焼き極上ケモノ肉',
      '焼きトリ肉',
      '焼き上トリ肉',
      '焼き極上トリ肉',
    ],
  },
  {
    id: '155',
    category: 'monsters',
    name: 'スタルヒノックス',
    description:
      '巨大な一つ目の魔物。ヒノックスの亡骸。夜になると行動を始める。木を抜いて振り回してくるので戦う際には気が抜けない。目玉さえあれば何度でも立ち直る。',
    locations: ['ハイラル平原', '西ハテール'],
    recoverableMaterials: ['ヒノックスの牙'],
  },
  {
    id: '156',
    category: 'monsters',
    name: 'モルドラジーク',
    description:
      '砂漠の地中に潜むクジラのような巨大な魔物。普段は地中に潜っているが、音を感知すると地表へ飛び上がり食らいついてくる。出会ってしまったらうかつに走り回るのは危険だ。',
    locations: ['ゲルド砂漠'],
    recoverableMaterials: ['モルドラジークの背びれ', 'モルドラジークの肝'],
  },
  {
    id: '157',
    category: 'monsters',
    name: 'キングラジーク',
    description:
      '砂漠の地中に潜むクジラのような巨大な魔物。モルドラジークの亜種で数百年 地中に眠り続けて力を蓄えた特異な個体である。その力は通常種をはるかに凌駕し、鉄分を含んだ固い皮膚は分厚い鎧となってその体を守っている。',
    locations: ['不明'],
    recoverableMaterials: ['お宝いろいろ'],
  },
  {
    id: '158',
    category: 'monsters',
    name: 'オルドラ',
    description:
      'オルディン地方に住まう龍の姿をした炎の精霊で、古来 力の泉の使いと言われる。『陽 沈みし時 天を舞う』という伝承が残るが、現代でその姿を目撃した者は少ない。体は炎に包まれており近づくと危険だが、人間に危害を加えることはないという。',
    locations: ['オルディン山脈', 'タバンタ辺境'],
    recoverableMaterials: ['不明'],
  },
  {
    id: '159',
    category: 'monsters',
    name: 'ネルドラ',
    description:
      'ラネール地方に住まう龍の姿をした氷の精霊で、古来 知恵の泉の使いと言われる。『陽 昇りし時 天を舞う』という伝承が残るが、現代でその姿を目撃した者は少ない。体は冷気に包まれ近づくと危険だが、人間に危害を加えることはないと伝わる。',
    locations: ['ラネール山'],
    recoverableMaterials: ['不明'],
  },
  {
    id: '160',
    category: 'monsters',
    name: 'フロドラ',
    description:
      'フィローネ地方に住まう龍の姿をした雷の精霊で、古来 勇気の泉の使いと言われる。『陽 昇りし時 天を舞う』という伝承が残るが、現代でその姿を目撃した者は少ない。体は電気に包まれ近づくと危険だが、人間に危害を加えることはないという',
    locations: ['ハイリア湖', 'フロリア湖'],
    recoverableMaterials: ['不明'],
  },
  {
    id: '161',
    category: 'monsters',
    name: 'カースボコブリン',
    description:
      '怨念に囚われたボコブリンの頭骨。生前の知性はもはや感じられず、近づいたものを襲うだけの哀れな存在となった。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '162',
    category: 'monsters',
    name: 'カースモリブリン',
    description:
      '怨念に囚われたモリブリンの頭骨。生前の獰猛さだけは残っており、近づいたものに襲いかかってくる。ボコブリンの頭骨よりも硬い。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '163',
    category: 'monsters',
    name: 'カースリザルフォス',
    description:
      '怨念に囚われたリザルフォスの頭骨。生前の狡猾さだけは残っており、近づいたものに襲いかかってくる。ボコブリンの頭骨よりも素早い。',
    locations: ['不明'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '164',
    category: 'monsters',
    name: '雷のカーズガノン',
    description:
      '神獣ナボリスを襲ったガノンの分身。素早い動きで雷を使った攻撃を得意とする。英傑の一人 ウルボザを葬った。',
    locations: ['神獣 ヴァ・ナボリス'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '165',
    category: 'monsters',
    name: '炎のカーズガノン',
    description:
      '神獣 ルーダニアを襲ったガノンの分身。大剣と炎を使った攻撃を得意とする。英傑の一人 ダルケルを葬った。',
    locations: ['神獣 ヴァ・ルーダニア'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '166',
    category: 'monsters',
    name: '水のカーズガノン',
    description:
      '神獣 ルッタを襲ったガノンの分身。長い槍と氷の塊を使った攻撃を得意とする。英傑の一人 ミファーを葬った。',
    locations: ['神獣 ヴァ・ルッタ'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '167',
    category: 'monsters',
    name: '風のカーズガノン',
    description:
      '神獣 メドーを襲ったガノンの分身。遠距離から風を使った攻撃を得意とする。英傑の一人 リーバルを葬った。',
    locations: ['神獣 ヴァ・メドー'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '168',
    category: 'monsters',
    name: '厄災 ガノン',
    description:
      '古来 繰り返しハイラルに現れ闇をもたらす元凶。時代により大魔王や厄災とも呼ばれる。繭の中で体が復活するのを待っていたが、リンクの目覚めに反応し、不完全な状態でその姿を現した。',
    locations: ['ハイラル城'],
    recoverableMaterials: ['特になし'],
  },
  {
    id: '169',
    category: 'monsters',
    name: '魔獣 ガノン',
    description:
      'リンクによって倒され霧散した怨念が集合した姿。禍々しい魔力と荒ぶる獣のようなその姿は魔獣と呼ぶに相応しい。ガノン本来の姿とされ意識には怨念に飲み込まれ暴走している。',
    locations: ['ハイラル平原'],
    recoverableMaterials: ['特になし'],
  },
];
