import type { Item } from 'types/Item';

export const materials: Item[] = [
  {
    id: '170',
    category: 'materials',
    name: 'リンゴ',
    description:
      'ハイラルでスタンダードな果物。そのまま食べてもいいし、料理に使えば効果もアップする。',
    locations: ['ハイラル平原', '東ハテール'],
    heartsRecoverable: 1,
    cookingEffect: '特になし',
  },
  {
    id: '171',
    category: 'materials',
    name: 'ヤシの実',
    description:
      '海辺のヤシの木に実る素ルーツ。特別な効果はないが料理に使うとハートを回復させる効果がある。',
    locations: ['東ハテール', 'ゲルド砂漠'],
    heartsRecoverable: 1,
    cookingEffect: '特になし',
  },
  {
    id: '172',
    category: 'materials',
    name: 'イチゴ',
    description:
      '雪の降る寒い地方で実るフルーツ。甘酸っぱい味が特徴で特に効果はないが、料理にもよく使われる。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    heartsRecoverable: 0.5,
    cookingEffect: '特になし',
  },
  {
    id: '173',
    category: 'materials',
    name: 'マックスドリアン',
    description:
      '強烈なにおいが特徴のフルーツの王様。強力な回復力があり、料理に使うとハートが限界を大きく超えて回復する。',
    locations: ['西ハテール', 'フィローネ草原'],
    heartsRecoverable: 3,
    cookingEffect: 'MAXハート',
  },
  {
    id: '174',
    category: 'materials',
    name: 'ヒンヤリメロン',
    description:
      '砂漠でも育つ特殊なフルーツ。ジューシーなカニ国は体温を下げる効果があり、料理に使うと暑さに耐える効果を発揮する。',
    locations: ['ゲルド砂漠', 'フィローネ草原'],
    heartsRecoverable: 0.5,
    cookingEffect: '暑さガード',
  },
  {
    id: '175',
    category: 'materials',
    name: 'ポカポカ草の実',
    description:
      '生で食べるとピリピリする実。料理に使うと体が暖まり、寒いところでも耐えられるようになる。',
    locations: ['ゲルド砂漠', 'タバンタ辺境'],
    heartsRecoverable: 0.5,
    cookingEffect: '寒さガード',
  },
  {
    id: '176',
    category: 'materials',
    name: 'ビリビリフルーツ',
    description:
      'ゲルド砂漠のサボテンに実るフルーツ。甘い実には絶縁成分が豊富に含まれており、料理に使うと電気の攻撃に強くなる効果がある。',
    locations: ['ゲルド砂漠', 'ゲルド高地'],
    heartsRecoverable: 0.5,
    cookingEffect: 'エレキガード',
  },
  {
    id: '177',
    category: 'materials',
    name: 'ゴーゴーハスの実',
    description:
      '水辺に咲いているハスの実。水中深くは巡らせた根から集まった栄養は、料理に使うと移動速度が上がる校歌として現れる。',
    locations: ['ラネール湿原', 'ラネール大水源'],
    heartsRecoverable: 0.5,
    cookingEffect: '移動力アップ',
  },
  {
    id: '178',
    category: 'materials',
    name: 'ツルギバナナ',
    description:
      '主にフィローネ地方の熱帯林に実るフルーツ。皮に包まれた果肉には筋力増強効果があるとされ、料理にすると攻撃力が増す料理ができる。',
    locations: ['フィローネ地方'],
    heartsRecoverable: 0.5,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '179',
    category: 'materials',
    name: 'ハイラルダケ',
    description:
      'ハイラルの森を代表するキノコ。木のそばに生えることが多く、食べるとハート回復の効果がある。',
    locations: ['ハイラル平原', '西ハテール'],
    heartsRecoverable: 0.5,
    cookingEffect: '特になし',
  },
  {
    id: '180',
    category: 'materials',
    name: 'ガッツダケ',
    description:
      'めったに取れない黄色いキノコ。料理をするとがんばりゲージの最大値が増えるというとても貴重な効果を発揮する。',
    locations: ['ハイラル丘陵', 'ハイラル平原'],
    heartsRecoverable: 1,
    cookingEffect: 'MAXがんばり',
  },
  {
    id: '181',
    category: 'materials',
    name: 'ガンバリダケ',
    description:
      '森の木のそばに生える緑色のキノコ。大地のエネルギーをたくさんため込んでいて、料理に使うとがんばりが回復する効果が現れる。',
    locations: ['ハイラル平原', 'ハイラル丘陵'],
    heartsRecoverable: 0.5,
    cookingEffect: 'がんばり回復',
  },
  {
    id: '182',
    category: 'materials',
    name: 'マックストリュフ',
    description:
      'かなり貴重なキノコの一種。土の中で育ち強い香りがある。料理に使うとハートが限界を超えて回復する。',
    locations: ['ハイラル大森林', 'ハイラル平原'],
    heartsRecoverable: 2,
    cookingEffect: 'MAXハート',
  },
  {
    id: '183',
    category: 'materials',
    name: '大マックストリュフ',
    description:
      '誰にも発見されず大きく育ったマックストリュフ。蓄えられた栄養も豊富で、料理に使うとハートが限界をはるかに超えて回復する。',
    locations: ['へブラ山脈', 'ハイラル大森林'],
    heartsRecoverable: 3,
    cookingEffect: 'MAXハート',
  },
  {
    id: '184',
    category: 'materials',
    name: 'ヒンヤリダケ',
    description:
      '雪山の針葉樹の根元によく生える。触るとヒンヤリしていて、料理に使うと砂漠の暑さにも耐えることができるようになる。',
    locations: ['ヘブラ山脈', 'ラネール山'],
    heartsRecoverable: 0.5,
    cookingEffect: '暑さガード',
  },
  {
    id: '185',
    category: 'materials',
    name: 'ポカポカダケ',
    description:
      '主に気温の高い地域に生える真っ赤なキノコ。見た目通り炎の力を宿しており、料理に使うと寒い雪山でも耐えられる効果が発揮される。',
    locations: ['オルディン峡谷', 'ゲルド高地'],
    heartsRecoverable: 0.5,
    cookingEffect: '寒さガード',
  },
  {
    id: '186',
    category: 'materials',
    name: 'ビリビリダケ',
    description:
      'ゲルド地方によく見かけられるキノコ。傘の部分に絶縁成分が豊富に含まれている。料理に使うと電撃に耐性を得られる。',
    locations: ['奥アッカレ', 'ゲルド高地'],
    heartsRecoverable: 0.5,
    cookingEffect: 'エレキガード',
  },
  {
    id: '187',
    category: 'materials',
    name: 'ゴーゴーダケ',
    description:
      '天井や切り立った崖にむりやり生えるキノコ。どこにでも生える生命力がすごい。料理に使うと移動力が向上する効果がある。',
    locations: ['ゲルド高地', 'ハイラル丘陵'],
    heartsRecoverable: 0.5,
    cookingEffect: '移動力アップ',
  },
  {
    id: '188',
    category: 'materials',
    name: 'ツルギダケ',
    description:
      '剣で斬りつけたようなヒビが特徴のキノコ。料理に使うと傘の裏の襞に含まれる成分により闘争心が向上し、攻撃力が増すと言われる。',
    locations: ['ハイラル大森林', 'タバンタ辺境'],
    heartsRecoverable: 0.5,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '189',
    category: 'materials',
    name: 'ヨロイダケ',
    description:
      '傘がとても硬く発達したキノコ。その傘に含まれる成分は調理して食べると、体幹が強化する効能があり防御力が増す。',
    locations: ['西ハテール', '東ハテール'],
    heartsRecoverable: 0.5,
    cookingEffect: '防御アップ',
  },
  {
    id: '190',
    category: 'materials',
    name: 'シノビダケ',
    description:
      '夜になると静かに光る不思議なキノコ。料理に使うと傘に含まれる成分で集中力が高まり、物音を立てずに行動できるようになる。',
    locations: ['ラネール大水源', '西ハテール'],
    heartsRecoverable: 0.5,
    cookingEffect: '静けさアップ',
  },
  {
    id: '191',
    category: 'materials',
    name: 'ハイラル草',
    description:
      '生命力に満ち溢れたハーブ。ハイラルの草原に多く自生し、料理に使うとハートを回復させる効果がある。',
    locations: ['ハイラル平原', 'アッカレ高原'],
    heartsRecoverable: 0.5,
    cookingEffect: '特になし',
  },
  {
    id: '192',
    category: 'materials',
    name: 'マックスラディッシュ',
    description:
      '日当たりのよい草原に自生する珍しいカブ。料理に使うとハートが限界を超えて回復する。',
    locations: ['ハイラル丘陵', '東ハテール'],
    heartsRecoverable: 2.5,
    cookingEffect: 'MAXハート',
  },
  {
    id: '193',
    category: 'materials',
    name: '大マックスラディッシュ',
    description:
      '限界を超えて大きく育ったマックスラディッシュ。滋養強壮成分がとても豊富で、料理に使うとハートが限界をはるかに超えて回復する。',
    locations: ['アッカレ高原', 'ラネール大水源'],
    heartsRecoverable: 4,
    cookingEffect: 'MAXハート',
  },
  {
    id: '194',
    category: 'materials',
    name: 'ヒンヤリハーブ',
    description:
      'へブラやゲルドの標高の高い山地で見かけられる薬草の一種。葉に体を冷やす成分を持っており、料理に使うと耐暑効果を得る事ができる。',
    locations: ['へブラ山脈', 'ゲルド高地'],
    heartsRecoverable: 0,
    cookingEffect: '暑さガード',
  },
  {
    id: '195',
    category: 'materials',
    name: 'ポカポカハーブ',
    description:
      'ゲルド地方の気温の高い場所で育つ薬草の一種。実や葉は辛味成分が強く、料理に使うと寒さに強くなる効果を得る事ができる。',
    locations: ['ゲルド砂漠', 'ハイラル丘陵'],
    heartsRecoverable: 0,
    cookingEffect: '寒さガード',
  },
  {
    id: '196',
    category: 'materials',
    name: 'ビリビリハーブ',
    description:
      'ゲルド砂漠に多く自生している薬草の一種。電流を外へ逃がす特殊な繊維質を持ち、料理に使うと電気への耐性を得る事ができる。',
    locations: ['ゲルド砂漠', 'ハイラル丘陵'],
    heartsRecoverable: 0,
    cookingEffect: 'エレキガード',
  },
  {
    id: '197',
    category: 'materials',
    name: 'ゴーゴーニンジン',
    description:
      'カカリコ村でよく作られているニンジン。足腰を強くする効能があると言われており、調理して食べると移動速度が上がる。',
    locations: ['カカリコ村'],
    heartsRecoverable: 0.5,
    cookingEffect: '移動力アップ',
  },
  {
    id: '198',
    category: 'materials',
    name: 'ガッツニンジン',
    description:
      '薬草としても珍重されてきた貴重なニンジン。活力の源となる成分が大量に含まれており、調理するとがんばりゲージが限界を超えて増える。',
    locations: ['ハイラル丘陵', 'フィローネ草原'],
    heartsRecoverable: 2,
    cookingEffect: 'MAXがんばり',
  },
  {
    id: '199',
    category: 'materials',
    name: 'ヨロイカボチャ',
    description:
      '村の畑で作られるとても硬いカボチャ。料理に使うとカチコチ成分が効いて、防御力をかなり上げる効果がある。',
    locations: ['カカリコ村'],
    heartsRecoverable: 0.5,
    cookingEffect: '防御アップ',
  },
  {
    id: '200',
    category: 'materials',
    name: 'ゴーゴースミレ',
    description:
      '切り立った崖にも咲く生命力豊かな花。料理に使うと蓄えられた滋養成分によって移動速度が上がる効果を得られる。',
    locations: ['ゲルド高地', 'へブラ山脈'],
    heartsRecoverable: 0,
    cookingEffect: '移動力アップ',
  },
  {
    id: '201',
    category: 'materials',
    name: 'ツルギソウ',
    description:
      '葉や実にある鋭いトゲが特徴の薬草。一時的に筋力を増やす特殊な成分が含まれていて、料理に使うと攻撃力が増える効果が発揮される。',
    locations: ['西ハテール', 'フィローネ草原'],
    heartsRecoverable: 0,
    cookingEffect: '攻撃アップ',
  },
  {
    id: '202',
    category: 'materials',
    name: 'ヨロイソウ',
    description:
      'たとえ踏まれても折れないタフな薬草。その丈夫でしなやかな繊維質は料理して食べると、体幹を強化する効能があり防御力が増す。',
    locations: ['アッカレ高原', 'ハイラル丘陵'],
    heartsRecoverable: 0,
    cookingEffect: '防御アップ',
  },
  {
    id: '203',
    category: 'materials',
    name: 'しのび草',
    description:
      '主に森や草地に咲く花。夜になるとほのかに光を放つ。料理に使うと静けさを増やす効果が発揮される。',
    locations: ['西ハテール', 'ラネール大水源'],
    heartsRecoverable: 0,
    cookingEffect: '静けさアップ',
  },
  {
    id: '204',
    category: 'materials',
    name: '姫しずか',
    description:
      'ハイラル王国の姫が愛したと言われる可憐な花。以前より絶滅が危惧される種だが、近年まれに自生しているのを見かける事ができる。',
    locations: ['ハイラル丘陵', '西ハテール'],
    heartsRecoverable: 0,
    cookingEffect: '静けさアップ',
  },
  {
    id: '205',
    category: 'materials',
    name: 'ガンバリバチのハチミツ',
    description:
      '巣から採れるハチミツは栄養満点！その高栄養価により隠し味として使った料理は、がんばりゲージ回復の効果を持つ。',
    locations: ['ハイラル平原', 'タバンタ辺境'],
    heartsRecoverable: 2,
    cookingEffect: 'がんばり回復',
  },
];
