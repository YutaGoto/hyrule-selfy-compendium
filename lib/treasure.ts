import { Item } from 'types/Item';

export const treasures: Item[] = [
  {
    id: '391',
    category: 'treasures',
    name: '宝箱',
    description:
      '装備品や貴重品が収められた箱。祠の中や敵の拠点で見つかることが多い。地面に埋まっていることもある。',
    locations: ['ハイラル全土'],
    recoverableMaterials: ['お宝いろいろ'],
  },
  {
    id: '392',
    category: 'treasures',
    name: '鉱床',
    description:
      '鉱石を多く含んだ岩、叩き壊すことで岩塩や火打石の他、価値の高い鉱石など様々なものが見られる。',
    locations: ['ハイラル全土'],
    recoverableMaterials: [
      'ルビー',
      'ダイヤモンド',
      'コハク',
      'サファイア',
      'トパーズ',
      'オパール',
      '岩塩',
      '火打石',
    ],
  },
  {
    id: '393',
    category: 'treasures',
    name: '希少鉱床',
    description:
      '貴重な鉱石を多く含んだ岩。ルビーやサファイアといった希少な功績が採れることもある。',
    locations: ['ハイラル全土'],
    recoverableMaterials: [
      'ルビー',
      'サファイア',
      'ダイヤモンド',
      'コハク',
      'トパーズ',
      '火打石',
    ],
  },
  {
    id: '394',
    category: 'treasures',
    name: '夜行鉱床',
    description:
      '夜光石を多く含んだ岩。叩き壊すことで加工しやすいサイズの夜光石を採ることができる。',
    locations: ['ハイラル全土'],
    recoverableMaterials: ['夜光石', '火打石'],
  },
];
