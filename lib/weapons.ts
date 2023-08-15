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
    description: '失われた古の技術を刃にした片手剣。青く輝く刃は抜刀したときにだけ現れる。その切断力は一般的な金属の剣を遥かに凌ぐ。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 40,
    }
  },
  {
    id: '224',
    category: 'weapons',
    name: '錆びた剣',
    description: 'はるかな昔、名のある剣士が使っていたであろう錆び付いた片手剣。一応使えるがすぐに壊れてしまう。',
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
    description: '大厄災に対抗すべく古代の技術を使い、シーカー族が退魔の剣を模して造った武器。優れた攻撃力を得たが、耐久性に問題が残った。',
    locations: ['不明'],
    properties: {
      type: 'sword',
      value: 48,
    }
  },
  {
    id: '226',
    category: 'weapons',
    name: '火炎の剣',
    description: 'デスマウンテンの溶岩で鍛えたという魔法の剣。刀身の赤い輝きに満たされているとき、振るった軌跡に灼熱の炎を吹き出す。',
    locations: ['ハイラル平原', '東ハテール'],
    properties: {
      type: 'sword',
      value: 24,
      }
  },
  {
    id: '227',
    category: 'weapons',
    name: '氷雪の剣',
    description: 'ヘブラ地方、極寒の霊峰で鍛えたという魔法の剣。刀身の青い輝きに満たされているとき、冷気を発する刃が斬った相手を凍りつかせる。',
    locations: ['ゲルド高地', 'ハイラル平原'],
    properties: {
      type: 'sword',
      value: 20,
    }
  },
  {
    id: '228',
    category: 'weapons',
    name: '雷電の剣',
    description: 'ハイラル丘陵の落雷に長くさらして鍛えた魔法の剣。金色の光が刀身に満ちているとき、振るうと電撃で相手を痺れさせることができる。',
    locations: ['ハイラル平原', '西ハテール'],
    properties: {
      type: 'sword',
      value: 22,
    }
  },
];
