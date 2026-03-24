import type { Item } from 'types/Item';

export const treasures: Item[] = [
  {
    id: '504',
    category: 'treasures',
    name: '宝箱',
    description:
      '装備品や貴重品が収められた箱 祠の中や敵の拠点で見る事が多い 地面に埋まっている事もある',
    locations: ['ハイラル全土'],
  },
  {
    id: '505',
    category: 'treasures',
    name: '鉱床',
    description:
      '鉱石を多く含んだ岩 叩き壊す事で 岩塩や火打ち石の他 価値の高い鉱石など 様々なものが採れる',
    locations: ['ハイラル全土'],
  },
  {
    id: '506',
    category: 'treasures',
    name: '希少鉱床',
    description:
      '貴重な鉱石を多く含んだ岩 ルビーやサファイアといった 希少な鉱石が採れる事もある',
    locations: ['ハイラル全土'],
  },
  {
    id: '507',
    category: 'treasures',
    name: '夜光鉱床',
    description:
      '夜光石を多く含んだ岩 叩き壊す事で 加工しやすいサイズの 夜光石を採る事ができる',
    locations: ['ハイラル全土'],
  },
  {
    id: '508',
    category: 'treasures',
    name: 'ゾナニウム鉱床',
    description:
      '地底に多く存在しており 不思議なエネルギーで発光している岩 叩き壊すとゾナニウムが採れる',
    locations: ['ハイラルの地底'],
  },
  {
    id: '509',
    category: 'treasures',
    name: '井戸',
    description:
      '地下から水を汲み出すために掘った穴 町や馬宿に多くあるが 廃墟に昔掘ったものが残っていることもある 中には 固有の生き物や植物が多く生息している',
    locations: ['ハイラル全土'],
  },
];
