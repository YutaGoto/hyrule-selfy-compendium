import { Item } from 'types/Item';

export const weapons: Item[] = [
  {
    id: '206',
    category: 'weapons',
    name: 'マスターソード',
    description:
      '伝説の退魔の剣。輝く刀身には厄災に対抗しうる聖なる力を宿す。件に選ばれし勇者だけが手にすることができる。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 30,
    },
  },
  {
    id: '207',
    category: 'weapons',
    name: '木の枝',
    description:
      'どこにでも落ちていそうな木の枝だが、振り回すのに絶妙なバランス。装備をすれば武器として使える。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 2,
    },
  },
  {
    id: '208',
    category: 'weapons',
    name: 'たいまつ',
    description:
      '火をつけると燃え続けるたいまつ。しまうと火が消えてしまうため、もう一度つける必要がある。',
    locations: ['ハイラル大森林', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 2,
    },
  },
  {
    id: '209',
    category: 'weapons',
    name: '木のオタマ',
    description:
      'スープをすくったり炒め物で使われる料理道具。固い木を削り出して作られているので、これで叩かれると結構痛い。',
    locations: ['ハイラル平原', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 4,
    },
  },
  {
    id: '210',
    category: 'weapons',
    name: 'ブーメラン',
    description:
      '元々は森の民コログの武器。特殊な形状は投げても手元に戻ってくるように考えられている。',
    locations: ['西ハテール', 'フィローネ草原'],
    properties: {
      type: 'sword',
      value: 8,
    },
  },
  {
    id: '211',
    category: 'weapons',
    name: 'ボヨーンハンマー',
    description:
      'キルトン特製の奇妙なハンマー。殴られてもたいして痛くはないが、バネの力でボヨ～ンと飛ばされる。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 1,
    },
  },
  {
    id: '212',
    category: 'weapons',
    name: '旅人の剣',
    description:
      '主に危険な野生動物に対する備えとして、ハイラル全土で使われる剣。壊れにくいが魔物相手には少し心もとない。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 5,
    },
  },
  {
    id: '213',
    category: 'weapons',
    name: '兵士の剣',
    description:
      'かつてハイラル城を守る兵士が使っていた剣。魔物と渡り合うことがっできる斬れ味を持つ。金属の刀身は耐久力にも優れている。',
    locations: ['ハイラル平原', 'フィローネ草原'],
    properties: {
      type: 'sword',
      value: 14,
    },
  },
  {
    id: '214',
    category: 'weapons',
    name: '騎士の剣',
    description:
      'ハイラル城の騎士たちが携えていた剣。癖がなく扱いやすく高い攻撃力を持つため、現在では旅慣れた冒険者たちが好んで使用する。',
    locations: ['ゲルド砂漠', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 26,
    },
  },
  {
    id: '215',
    category: 'weapons',
    name: '王家の剣',
    description:
      '目覚ましい功績をあげた騎士に対してハイラル王家から与えられた剣。最上級の攻撃力と美しい見た目を兼ね備えた逸品。',
    locations: ['タバンタ辺境', 'アッカレ高原'],
    properties: {
      type: 'sword',
      value: 36,
    },
  },
  {
    id: '216',
    category: 'weapons',
    name: '森人の剣',
    description:
      'コログ族が人間のために作ったといわれる。木製であるため主に護身用として使われる剣。森の植物のツタや根を切り払うのにも使われる。',
    locations: ['ハイラル大森林', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 22,
    },
  },
  {
    id: '217',
    category: 'weapons',
    name: 'ゾーラの剣',
    description:
      '細い刀身とゾーラ族特有の装飾が特徴的な剣。特殊な金属で作られており高い耐久力を持ち、水につけたままでも錆びる事がない。',
    locations: ['ラネール大水源', '東ハテール'],
    properties: {
      type: 'sword',
      value: 15,
    },
  },
  {
    id: '218',
    category: 'weapons',
    name: '風切羽の剣',
    description:
      'リト族が使う両刃の剣。空中でも素早い動きができるように、軽量化する工夫がされている。',
    locations: ['タバンタ辺境', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 15,
    },
  },
  {
    id: '219',
    category: 'weapons',
    name: 'ゲルドのナイフ',
    description:
      'ゲルド地方で使われる最も一般的な剣。湾曲した短い刃が特徴で、ゲルド族の女性が護身用に持つことも多い。',
    locations: ['ゲルド高地', 'ゲルド砂漠'],
    properties: {
      type: 'sword',
      value: 16,
    },
  },
  {
    id: '220',
    category: 'weapons',
    name: '月光のナイフ',
    description:
      'ゲルド族の繊細な彫刻が施された剣。美しい曲線を持つ刃の切れ味は大変鋭い。かつては祭事にも使われたといわれている。',
    locations: ['ゲルド高地', 'ゲルド砂漠'],
    properties: {
      type: 'sword',
      value: 25,
    },
  },
  {
    id: '221',
    category: 'weapons',
    name: '七宝のナイフ',
    description:
      '英傑ウルボザが愛用していた屈指の名剣。ウルボザがこの剣を振るう姿は、華麗な踊りのようだったと伝えられている。',
    locations: ['ゲルド砂漠'],
    properties: {
      type: 'sword',
      value: 32,
    },
  },
  {
    id: '222',
    category: 'weapons',
    name: '斬新の小刀',
    description:
      'シーカー族の伝統的な片刃の剣。他に類をみない細身の刀身と切れ味を持っており、その作刀には古代技術が使われているのだとか。',
    locations: ['西ハテール', 'ハイリア湖'],
    properties: {
      type: 'sword',
      value: 15,
    },
  },
  {
    id: '223',
    category: 'weapons',
    name: '古代兵装・剣',
    description:
      '失われた古の技術を刃にした片手剣。青く輝く刃は抜刀したときにだけ現れる。その切断力は一般的な金属の剣を遥かに凌ぐ。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 40,
    },
  },
  {
    id: '224',
    category: 'weapons',
    name: '錆びた剣',
    description:
      'はるかな昔、名のある剣士が使っていたであろう錆び付いた片手剣。一応使えるがすぐに壊れてしまう。',
    locations: ['ハイラル平原', 'オルディン峡谷'],
    properties: {
      type: 'sword',
      value: 6,
    },
  },
  {
    id: '225',
    category: 'weapons',
    name: '近衛の剣',
    description:
      '大厄災に対抗すべく古代の技術を使い、シーカー族が退魔の剣を模して造った武器。優れた攻撃力を得たが、耐久性に問題が残った。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 48,
    },
  },
  {
    id: '226',
    category: 'weapons',
    name: '火炎の剣',
    description:
      'デスマウンテンの溶岩で鍛えたという魔法の剣。刀身の赤い輝きに満たされているとき、振るった軌跡に灼熱の炎を吹き出す。',
    locations: ['ハイラル平原', '東ハテール'],
    properties: {
      type: 'sword',
      value: 24,
    },
  },
  {
    id: '227',
    category: 'weapons',
    name: '氷雪の剣',
    description:
      'ヘブラ地方、極寒の霊峰で鍛えたという魔法の剣。刀身の青い輝きに満たされているとき、冷気を発する刃が斬った相手を凍りつかせる。',
    locations: ['ゲルド高地', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 20,
    },
  },
  {
    id: '228',
    category: 'weapons',
    name: '雷電の剣',
    description:
      'ハイラル丘陵の落雷に長くさらして鍛えた魔法の剣。金色の光が刀身に満ちているとき、振るうと電撃で相手を痺れさせることができる。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 22,
    },
  },
  {
    id: '229',
    category: 'weapons',
    name: 'ボコこん棒',
    description:
      'ボコブリンがエモノをしとめる その一点のみに注力して作り出したこん棒。無理をするとすぐに壊れてしまう。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 4,
    },
  },
  {
    id: '230',
    category: 'weapons',
    name: 'トゲボコこん棒',
    description:
      '厳選した素材で作られた特別なボコブリンのこん棒。とがった骨が当たるとかなり痛い。',
    locations: ['フィローネ草原', '東ハテール'],
    properties: {
      type: 'sword',
      value: 12,
    },
  },
  {
    id: '231',
    category: 'weapons',
    name: '竜骨ボコこん棒',
    description:
      'こん棒に化石の骨を組み合わせた強力な武器。ボコブリンの中でも特に屈強な個体のみが持っているとされている。',
    locations: ['ハイラル丘陵', 'ハテール海'],
    properties: {
      type: 'sword',
      value: 24,
    },
  },
  {
    id: '232',
    category: 'weapons',
    name: 'リザルブーメラン',
    description:
      'リザルフォスが好んで使う湾曲した剣。直接斬りつけるだけでなくブーメランのように投げて使うこともできる。',
    locations: ['ハイラル湖', 'ラネール湿原'],
    properties: {
      type: 'sword',
      value: 14,
    },
  },
  {
    id: '233',
    category: 'weapons',
    name: '強化リザルブーメラン',
    description:
      '青リザルフォスが好んで使う剣。刃が二枚になり、通常のリザルブーメランよりも切り裂く力がUP。投げても手元に戻ってくる。',
    locations: ['ゲルド砂漠', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 24,
    },
  },
  {
    id: '234',
    category: 'weapons',
    name: '三又リザルブーメラン',
    description:
      '刃の数がさらに増え、攻撃力が高くなった剣。ブーメランとしても使えるが取り扱いが難しく、主に先頭に長けた黒リザルフォスが携行する。',
    locations: ['へブラ山脈', 'アッカレ高原'],
    properties: {
      type: 'sword',
      value: 36,
    },
  },
  {
    id: '235',
    category: 'weapons',
    name: 'ガーディアンナイフ',
    description:
      '小型ガーディアンが装備している剣。誇大な技術が使われた青い刀身を持つ。耐久性はあまり高くない。',
    locations: ['オルディン峡谷', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 20,
    },
  },
  {
    id: '236',
    category: 'weapons',
    name: 'ガーディアンナイフ＋',
    description:
      'より威力が強化されたガーディアンナイフ。高い切断力がさらに上昇しており、耐久性も若干改善している。',
    locations: ['ゲルド高地', 'アッカレ高原'],
    properties: {
      type: 'sword',
      value: 30,
    },
  },
  {
    id: '237',
    category: 'weapons',
    name: 'ガーディアンナイフ++',
    description:
      '最大限までに威力が強化されたガーディアンナイフ。ぶ厚い鎧すら切り裂く攻撃力を備えている。威力に合わせて刀身も大きくなっている。',
    locations: ['へブラ山脈', 'アッカレ高原'],
    properties: {
      type: 'sword',
      value: 40,
    },
  },
  {
    id: '238',
    category: 'weapons',
    name: 'ライネルの剣',
    description:
      'ライネルが携える金属製の剣。斬るというよりは叩き潰す目的で作られている。人間が扱うにはかなり重いが攻撃力は高い。',
    locations: ['ラネール大水源', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 24,
    },
  },
  {
    id: '239',
    category: 'weapons',
    name: '獣王の剣',
    description:
      '刃が増えて攻撃力が増したライネルの剣。すれ違いざまに振りぬくことで敵を真っ二つにするといわれる。',
    locations: ['ハイラル平原', 'ラネール大水源'],
    properties: {
      type: 'sword',
      value: 36,
    },
  },
  {
    id: '240',
    category: 'weapons',
    name: '獣神の剣',
    description:
      '白髪のライネルが手にする凶悪な剣。その分厚く荒々しい刃はどんなに屈強な敵であっても、易々と叩き斬る攻撃力を持つ。',
    locations: ['ハイラル平原', 'へブラ山脈'],
    properties: {
      type: 'sword',
      value: 58,
    },
  },
  {
    id: '241',
    category: 'weapons',
    name: 'ファイアロッド',
    description:
      '古代の魔術師が作り上げたといわれている火の玉を発生させる魔法の杖。直接殴るとすぐに壊れてしまうので注意。',
    locations: ['ゲルド高地', 'ハイラル大森林'],
    properties: {
      type: 'sword',
      value: 5,
    },
  },
  {
    id: '242',
    category: 'weapons',
    name: 'メテオロッド',
    description:
      '古代の魔術師が禁呪で作り上げたといわれている火炎級を三つ同時に発生させる杖。込められた炎の力が尽きると壊れてしまう。',
    locations: ['ハイラル平原', 'へブラ山脈'],
    properties: {
      type: 'sword',
      value: 10,
    },
  },
  {
    id: '243',
    category: 'weapons',
    name: 'アイスロッド',
    description:
      'へブラ山脈の氷を精錬して作られたといわれる冷気を発生させる魔法の杖。直接攻撃には向かない。',
    locations: ['ゲルド高地', 'オルディン峡谷'],
    properties: {
      type: 'sword',
      value: 5,
    },
  },
  {
    id: '244',
    category: 'weapons',
    name: 'フリーズロッド',
    description:
      'ヘブラ山山頂の氷を精錬して作られたといわれる超低温の冷気を広範囲に発射する魔法の杖。込められた冷気が尽きると砕け散る。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    properties: {
      type: 'sword',
      value: 10,
    },
  },
  {
    id: '245',
    category: 'weapons',
    name: 'エレキロッド',
    description:
      'ハイラル丘陵で落雷を宝珠に封じ込めたといわれる魔法の杖。電気の球を発射できる。打撃には適していない。',
    locations: ['西ハテール', 'ハイラル丘陵'],
    properties: {
      type: 'sword',
      value: 5,
    },
  },
  {
    id: '246',
    category: 'weapons',
    name: 'ボルテージロッド',
    description:
      'ハイラル丘陵で強烈な落雷を宝珠に封じ込めたといわれる魔法の杖。電気の球を三方に発射できる。込められた雷が尽きると壊れてしまう。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    properties: {
      type: 'sword',
      value: 10,
    },
  },
  {
    id: '247',
    category: 'weapons',
    name: '首刈り刀',
    description:
      'イーガ団が使う片手剣。半月形の刃は人の首を取る為の形状といわれ、彼らの恐ろしさの象徴といえる。耐久性は低め。',
    locations: ['ゲルド高地', 'ゲルド砂漠'],
    properties: {
      type: 'sword',
      value: 16,
    },
  },
  {
    id: '248',
    category: 'weapons',
    name: '鬼円刃',
    description:
      'イーガ団によって作られた凶器。標的を確実に仕留めるために切り裂くことに特化した形状は、見た者を恐怖に陥れる。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 40,
    },
  },
  {
    id: '249',
    category: 'weapons',
    name: '一撃の剣',
    description:
      '一撃必殺でありながら自らも一撃で命を落とす剣。2度使うと剣が光を失い一撃で倒せなくなるが、しばらく待てばまた輝きを取り戻す。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: '∞',
    },
  },
  {
    id: '250',
    category: 'weapons',
    name: 'ボコブリンの骨',
    description:
      '切り離されても動き続ける不気味な腕の骨。あまりポーチに入れておきたくない。古びてもろくなっているのですぐに壊れる。',
    locations: ['ハイラル全土'],
    properties: {
      type: 'sword',
      value: 5,
    },
  },
  {
    id: '251',
    category: 'weapons',
    name: 'リザルフォスの骨',
    description:
      '死してなお動き続けるスタルリザルフォスの骨。振り回せば武器として使えるがもろい。背負っているときも動きが少し気になる...',
    locations: ['ハイラル全土'],
    properties: {
      type: 'sword',
      value: 12,
    },
  },
  {
    id: '252',
    category: 'weapons',
    name: 'コログのうちわ',
    description:
      '木を伐り倒すと時々手に入る不思議な葉っぱ。一振りするだけで大きな風を巻き起こし、軽いものなら吹き飛ばすことができる。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 1,
    },
  },
  {
    id: '253',
    category: 'weapons',
    name: '畑のクワ',
    description:
      '土を掘り起こし畑をたがやすのに使われる農具。畑仕事に耐えられるような丈夫な作りをしており、使いようによっては十分 武器になる。',
    locations: ['東ハテール', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 16,
    },
  },
  {
    id: '254',
    category: 'weapons',
    name: '船のオール',
    description:
      '漁船に備え付けられている道具。本来武器ではないが護身用には十分使える。水に強い木材で作られており結構丈夫。',
    locations: ['東ハテール', 'ハテール海'],
    properties: {
      type: 'sword',
      value: 14,
    },
  },
  {
    id: '255',
    category: 'weapons',
    name: '木こりのオノ',
    description:
      '山の木こりが愛用する木を切り倒す道具。素早く木を切り倒すことができる。',
    locations: ['西ハテール', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 3,
    },
  },
  {
    id: '256',
    category: 'weapons',
    name: '達人のオノ',
    description:
      '戦いに特化した両刃のオノ。重量があり使いこなすのに熟練した技術が必要。そのためいつしか達人の名が付くようになった。',
    locations: ['西ハテール', 'ゲルド高地'],
    properties: {
      type: 'sword',
      value: 18,
    },
  },
  {
    id: '257',
    category: 'weapons',
    name: '鉄のハンマー',
    description:
      '鉄でできた大きな金づち。元々は鉱石を叩き割るのにつかわれていたが、武器としても結構強い。',
    locations: ['オルディン峡谷', 'アッカレ高原'],
    properties: {
      type: 'sword',
      value: 12,
    },
  },
  {
    id: '258',
    category: 'weapons',
    name: 'ビッグブーメラン',
    description:
      '両手で振るう必要があるほど巨大なブーメラン。狩猟用だったものを戦闘用に改良しており、湾曲した内側に刃がある。扱いが非常に難しい。',
    locations: ['西ハテール', 'へブラ山脈'],
    properties: {
      type: 'sword',
      value: 25,
    },
  },
  {
    id: '259',
    category: 'weapons',
    name: '旅人の両手剣',
    description:
      '各地を旅する冒険者が愛用する両手持ちの剣。魔物との戦いではその重さを生かし、敵の構えた盾を吹き飛ばすことができる。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 10,
    },
  },
  {
    id: '260',
    category: 'weapons',
    name: '兵士の両手剣',
    description:
      '戦闘用に改良された両手剣。大きく重いので扱いはむずかしいが、頑丈な作りで長く戦うことができる。',
    locations: ['ハイラル平原', 'フィローネ草原'],
    properties: {
      type: 'sword',

      value: 20,
    },
  },
  {
    id: '261',
    category: 'weapons',
    name: '騎士の両手剣',
    description:
      'ハイラル城を守っていた騎士の中でも特に力に自信がある者が携えていた大剣。刃の切れ味も洗礼されている。',
    locations: ['ゲルド砂漠', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 30,
    },
  },
  {
    id: '262',
    category: 'weapons',
    name: '王家の両手剣',
    description:
      'ハイラル王家の直属部隊に与えられた大剣。その刃から繰り出される強力な攻撃は、立ち向かう者の心まで砕いたと言われる。',
    locations: ['タバンタ辺境', 'ゲルド砂漠'],
    properties: {
      type: 'sword',
      value: 52,
    },
  },
  {
    id: '263',
    category: 'weapons',
    name: 'ゾーラの大剣',
    description:
      '特殊な金属を用いてゾーラ族が作った大剣。ゾーラは槍を好むためあまり使う者がいないが、美しい刀身の意匠で、ハイリア人には人気が高い。',
    locations: ['ラネール大水源', 'ラネール湿原'],
    properties: {
      type: 'sword',
      value: 22,
    },
  },
  {
    id: '264',
    category: 'weapons',
    name: '石打ち',
    description:
      '分厚く硬い金属で作られたゴロンの両手剣。刃はついておら斬れ味は全くないが、その硬度と重量で相手を叩き潰すことができる。',
    locations: ['オルディン峡谷', 'オルディン山脈'],
    properties: {
      type: 'sword',
      value: 15,
    },
  },
  {
    id: '265',
    category: 'weapons',
    name: '岩砕き',
    description:
      'ゴロンシティ周辺で採掘された希少な金属で作られた両手剣。先端に重心があり、遠心力と重量で敵を粉砕する武器。',
    locations: ['オルディン峡谷', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 42,
    },
  },
  {
    id: '266',
    category: 'weapons',
    name: '巨岩砕き',
    description:
      '英傑ダルケルが携えていた最硬級の大剣。ダルケルはこの大剣を軽々と振るっていたが、人間が使いこなすにはかなりの熟練が必要。',
    locations: ['オルディン峡谷'],
    properties: {
      type: 'sword',
      value: 60,
    },
  },
  {
    id: '267',
    category: 'weapons',
    name: 'ゲルドの両手剣',
    description:
      'ゲルド族の兵士中でも剣術に優れた者だけが装備できる事を許された大剣。見た目よりも軽く作られており、扱いやすい。',
    locations: ['ゲルド高地', 'ハイラル丘陵'],
    properties: {
      type: 'sword',
      value: 28,
    },
  },
  {
    id: '268',
    category: 'weapons',
    name: '残心の太刀',
    description:
      'シーカー族にのみ伝わる片刃の剣。伝統的な技術で丁寧に鍛えられており、すばらしい斬れ味を持つ。野太刀とも呼ばれる。',
    locations: ['西ハテール', 'ラネール大水源'],
    properties: {
      type: 'sword',
      value: 32,
    },
  },
  {
    id: '269',
    category: 'weapons',
    name: '無心の大剣',
    description:
      'シーカー族の持つ刀造りの技術を両刃の剣に用いた珍しい武器。片刃の剣の扱いに慣れていないハイラルの騎士のために作られた。',
    locations: ['西ハテール', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 50,
    },
  },
  {
    id: '270',
    category: 'weapons',
    name: '古代兵装・大剣',
    description:
      '古のシーカー族の技術が使われた両手剣。青い刃が刀身に沿って回転する特殊な構造をしており、高い切断力で敵を切り裂く。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 55,
    },
  },
  {
    id: '271',
    category: 'weapons',
    name: '錆びた両手剣',
    description:
      '長く放置されて錆び付いてしまった大剣。武器として使うことはできるが、耐久性は低く何度か使うと簡単に壊れてしまう。',
    locations: ['ハイラル平原', 'オルディン峡谷'],
    properties: {
      type: 'sword',
      value: 12,
    },
  },
  {
    id: '272',
    category: 'weapons',
    name: '近衛の両手剣',
    description:
      'シーカー族が古代技術の粋を集めて作った大剣。厄災から王国を守るために用意されたが、耐久性に難があったため実用性は低かった。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 72,
    },
  },
  {
    id: '273',
    category: 'weapons',
    name: '火炎の大剣',
    description:
      '古の時代にゴロンの鍛冶職人がデスマウンテンの炎を使って鍛えたといわれている魔法の剣。刀身が赤く輝いている時に振るえば炎を吹き出す。',
    locations: ['ハイラル平原', 'オルディン峡谷'],
    properties: {
      type: 'sword',
      value: 34,
    },
  },
  {
    id: '274',
    category: 'weapons',
    name: '氷雪の大剣',
    description:
      'へブラ山脈の永久凍土に眠る鉱石を精錬して作られたといわれる魔法の剣。刀身が青く輝いている時に振るえば冷気を放つ。',
    locations: ['へブラ山脈', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 30,
    },
  },
  {
    id: '275',
    category: 'weapons',
    name: '雷電の大剣',
    description:
      '大昔のハイラル王家に仕えた鍛冶職人がハイラル丘陵の落雷を用いて鍛錬したと言われる魔法の剣。金色に輝いている時に雷撃を発する。',
    locations: ['ハイラル平原', 'タバンタ辺境'],
    properties: {
      type: 'sword',
      value: 32,
    },
  },
  {
    id: '276',
    category: 'weapons',
    name: 'ボコバット',
    description:
      'ボコブリンが本能のままに作った無骨なこん棒。当たり所によってはかなりの威力で構えた盾を吹っ飛ばすことができる。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 6,
    },
  },
];
