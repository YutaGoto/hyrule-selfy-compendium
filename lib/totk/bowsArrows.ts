import type { Item } from 'types/Item';

export const bowsArrows: Item[] = [
  {
    id: '440',
    category: 'bowsArrows',
    name: '木の矢',
    description:
      '一般的に使われているシンプルな矢 丈夫な木を削って作られている',
    locations: ['ハイラル全土'],
    properties: {
      type: 'bow',
      value: 0,
    },
  },
  {
    id: '441',
    category: 'bowsArrows',
    name: '古びた木の弓',
    description:
      '作りの古い木製の弓 動物を狩るために作られたもので 威力は大きくない',
    locations: ['始まりの空島'],
    properties: {
      type: 'bow',
      value: 4,
    },
  },
  {
    id: '442',
    category: 'bowsArrows',
    name: '木の弓',
    description:
      '小型の動物を狩るために作られた 木製の弓 魔物と戦うには心もとない',
    locations: ['ハイラル全平原', '南ラネール空諸島'],
    properties: {
      type: 'bow',
      value: 4,
    },
  },
  {
    id: '443',
    category: 'bowsArrows',
    name: '旅人の弓',
    description:
      '旅人が使う護身用の小振りな弓 矢があれば 離れた敵を攻撃する事ができる',
    locations: ['ハイラル平原', '中央ハイラル 地底'],
    properties: {
      type: 'bow',
      value: 5,
    },
  },
  {
    id: '444',
    category: 'bowsArrows',
    name: '兵士の弓',
    description:
      '戦闘用に攻撃力を高めた弓 より大きなダメージを与える事ができる 木で作られているので 火が付くと燃えてしまう',
    locations: ['ハイラル平原', 'ヘブラ山脈'],
    properties: {
      type: 'bow',
      value: 14,
    },
  },
  {
    id: '445',
    category: 'bowsArrows',
    name: '騎士の弓',
    description:
      'ハイラル城の騎士たちが使っていた弓 クセがなくて使いやすく 安定した射撃ができる 金属製なので耐久性も優れている',
    locations: ['ゲルド砂漠', 'アッカレ高原'],
    properties: {
      type: 'bow',
      value: 26,
    },
  },
  {
    id: '446',
    category: 'bowsArrows',
    name: '王家の弓',
    description:
      'ハイラルの騎士の中でも 特に弓術に 秀でた者に対して ハイラル王から与えられた弓 豪華な意匠が目を引くが 射撃性能も優れている',
    locations: ['ハイラル平原', '中央ハイラル 地底'],
    properties: {
      type: 'bow',
      value: 38,
    },
  },
  {
    id: '447',
    category: 'bowsArrows',
    name: '森人の弓',
    description:
      'コログ族が人間のために作ったといわれる弓 良質なしなる木材と 丈夫な草のツルで作られており 簡素な見た目に反して 一度に複数射る事ができる',
    locations: ['ハイラル大森林'],
    properties: {
      type: 'bow',
      value: 15,
    },
  },
  {
    id: '448',
    category: 'bowsArrows',
    name: 'ゾーラの弓',
    description:
      'ゾーラ族が漁などに使う弓 射撃性能はそれほど高くないが 特殊な金属で 作られており 耐久性は見た目より優れている',
    locations: ['ラネール大水源'],
    properties: {
      type: 'bow',
      value: 20,
    },
  },
  {
    id: '449',
    category: 'bowsArrows',
    name: 'ツバメの弓',
    description:
      'リト族で一般的に使われている弓 空中での射撃に適した 工夫が弦にされており 普通の弓より 少し早く引き絞る事ができる',
    locations: ['ヘブラ山脈', 'タバンタ辺境'],
    properties: {
      type: 'bow',
      value: 8,
    },
  },
  {
    id: '450',
    category: 'bowsArrows',
    name: 'ハヤブサの弓',
    description:
      'リト族の名工が作り上げた 洗練された弓 空の戦いに秀でるリトの戦士が 好んで使っている 一般的な弓より 素早く引き絞る事ができる',
    locations: ['タバンタ辺境', 'ヘブラ山脈'],
    properties: {
      type: 'bow',
      value: 14,
    },
  },
  {
    id: '451',
    category: 'bowsArrows',
    name: 'オオワシの弓',
    description:
      '英傑リーバルが携えていた 稀代の名弓 疾風の如き速さで この弓を射るリーバルに 空中戦で敵う者はいなかったと言われている',
    locations: ['リトの村'],
    properties: {
      type: 'bow',
      value: 28,
    },
  },
  {
    id: '452',
    category: 'bowsArrows',
    name: 'ゲルドの弓',
    description:
      'ゲルド族が使う 繊細な装飾が施された弓 広い砂漠での狩りや戦闘の際に 遠くの物を 狙い撃つ事ができるよう 工夫が施されている',
    locations: ['ゲルド砂漠', 'ゲルド高地'],
    properties: {
      type: 'bow',
      value: 25,
    },
  },
  {
    id: '453',
    category: 'bowsArrows',
    name: '一心の弓',
    description:
      'シーカー族に伝わる弓 精神統一をしてこの弓を 引くと 遠くの敵がまるで近くにいるかのように 狙い撃つ事ができると言われている',
    locations: ['東ハテール', '西ハテール'],
    properties: {
      type: 'bow',
      value: 10,
    },
  },
  {
    id: '454',
    category: 'bowsArrows',
    name: '近衛の弓',
    description:
      '大厄災への対策として シーカー族が作った弓 古代技術を使った試作的な武器であるため 高い 射撃力と速射性を持つが 耐久力が低くなっている',
    locations: ['不明'],
    properties: {
      type: 'bow',
      value: 50,
    },
  },
  {
    id: '455',
    category: 'bowsArrows',
    name: '黄昏の弓',
    description:
      '古くからハイラル王家に伝わる弓 黄昏の魔物と戦った姫が使ったと言われ 放たれる矢は力強く 長い射程を誇る',
    locations: ['不明'],
    properties: {
      type: 'bow',
      value: 30,
    },
  },
  {
    id: '456',
    category: 'bowsArrows',
    name: 'ボコ弓',
    description:
      'ボコブリンが使う 簡素な弓 適当な木の枝に弦を張っただけなので 射撃の威力は あまり期待できない',
    locations: ['ハイラル平原', '中央ハイラル 地底'],
    properties: {
      type: 'bow',
      value: 4,
    },
  },
  {
    id: '457',
    category: 'bowsArrows',
    name: 'トゲボコ弓',
    description:
      '動物の骨をくくりつけて 強化されたボコ弓 乱暴な作りではあるが 軽くて扱いやすい 耐久性が増しており 射撃の威力も上がった',
    locations: ['ハイラル平原', 'ゲルド高地 地底'],
    properties: {
      type: 'bow',
      value: 12,
    },
  },
  {
    id: '458',
    category: 'bowsArrows',
    name: '竜骨ボコ弓',
    description:
      '化石の骨を組み合わせて 強化されたボコ弓 ボコブリンなりに厳選した素材で 作られているらしく 中々の射撃性能を持つ',
    locations: ['ゲルド高地', 'ゲルド高地 地底'],
    properties: {
      type: 'bow',
      value: 24,
    },
  },
  {
    id: '459',
    category: 'bowsArrows',
    name: 'リザルボウ',
    description:
      'リザルフォスが作った木製の弓 大型の魚の骨を組み合わせて作られており 単純な木製の弓よりも 破壊力がある',
    locations: ['ラネール湿原', 'ゲルド砂漠 地底'],
    properties: {
      type: 'bow',
      value: 14,
    },
  },
  {
    id: '460',
    category: 'bowsArrows',
    name: '強化リザルボウ',
    description:
      '金属で持ち手を 強化されたリザルボウ 弓本体には 水辺に生えたよくしなる木の枝を 使っており あなどれない射撃性能を持つ',
    locations: ['ゲルド砂漠', 'アッカレ高原 地底'],
    properties: {
      type: 'bow',
      value: 25,
    },
  },
  {
    id: '461',
    category: 'bowsArrows',
    name: '鋼鉄リザルボウ',
    description:
      'リザルフォスの中でも弓の扱いに長ける 個体のみが持つ弓 強化のために金属が 多く使われており 重量があるが耐久性も高め',
    locations: ['ゲルド高地 地底', '中央ハイラル 地底'],
    properties: {
      type: 'bow',
      value: 36,
    },
  },
  {
    id: '462',
    category: 'bowsArrows',
    name: 'ライネルの弓',
    description:
      'ライネルが携える 武骨な金属製の弓 複数の矢を 同時に打ち出す事ができる 広がる射線は 素早く動く敵を射抜くのに最適',
    locations: ['東ハテール', '奥アッカレ'],
    properties: {
      type: 'bow',
      value: 10,
    },
  },
  {
    id: '463',
    category: 'bowsArrows',
    name: '獣王の弓',
    description:
      'より重厚な作りになったライネルの弓 本体だけではなく 弦も強靭な金属で作られており 普通の人間にとっては 引き絞る事すら難しい',
    locations: ['ラネール大水源', 'アッカレ高原 地底'],
    properties: {
      type: 'bow',
      value: 20,
    },
  },
  {
    id: '464',
    category: 'bowsArrows',
    name: '獣神の弓',
    description:
      'デスマウンテン山頂から取れる特殊な金属で 作られたライネルの剛弓 複数放たれる矢は 凄まじい威力を持ち 分厚い鎧も紙のように貫く',
    locations: ['ゲルド高地', 'ラネール湿原 地底'],
    properties: {
      type: 'bow',
      value: 32,
    },
  },
  {
    id: '465',
    category: 'bowsArrows',
    name: '二連弓',
    description:
      'イーガ団の中でも 弓術が得意な構成員が使う弓 狙った敵を確実に仕留めるために 一度に2本の矢を撃てるような 工夫がされている',
    locations: ['ハイラル平原', 'ゲルド砂漠 地底'],
    properties: {
      type: 'bow',
      value: 14,
    },
  },
  {
    id: '466',
    category: 'bowsArrows',
    name: 'ゴーレムの弓',
    description:
      '隊長ゴーレムが装備している弓 簡単な構造だが 不燃性の素材でできており 木製の弓のように燃える事は無い',
    locations: ['南ラネール空諸島', '北ゲルド空諸島'],
    properties: {
      type: 'bow',
      value: 5,
    },
  },
  {
    id: '467',
    category: 'bowsArrows',
    name: 'ゴーレムの強弓',
    description:
      '隊長ゴーレムが装備している硬い弓 高温で燃えないだけでなく 弓自体の強度も上がり より強い矢を放てるようになった',
    locations: ['天へと連なる島々', 'デスマウンテン 地底'],
    properties: {
      type: 'bow',
      value: 11,
    },
  },
  {
    id: '468',
    category: 'bowsArrows',
    name: 'ゴーレムの剛弓',
    description:
      '隊長ゴーレムが装備している強力な弓 燃えない特徴はそのままに 構造を複雑化している ツルが非常に硬く 並の力では引く事が難しい',
    locations: ['ローメイ島', 'ドイブラン遺跡'],
    properties: {
      type: 'bow',
      value: 24,
    },
  },
  {
    id: '469',
    category: 'bowsArrows',
    name: 'ゾナニウムの弓',
    description:
      '射撃の際にエネルギーを消費する ゾナウ族の弓 引き絞って力を溜めた時間に応じて 消費エネルギーと放つ矢の飛距離が増加する',
    locations: ['不明'],
    properties: {
      type: 'bow',
      value: 30,
    },
  },
  {
    id: '470',
    category: 'bowsArrows',
    name: '魔王の弓',
    description:
      '持つ者の力に応じ 発揮する性能が変化する 魔王が愛用した魔弓 ハートの最大値が大きいほど攻撃力が上がる',
    locations: ['不明'],
    properties: {
      type: 'bow',
      value: 58,
    },
  },
];
