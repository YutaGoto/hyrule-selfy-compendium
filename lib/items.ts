import { Item } from 'types/Item';
import { creatures } from './creatures';
import { monsters } from './monsters';
import { weapons } from './weapons';
import { bowsArrows } from './bowsArrows';
import { shields } from './shields';
import { treasures } from './treasure';
import { materials } from './materials';

export const items: Item[] = [
  ...creatures,
  ...monsters,
  ...materials,
  ...weapons,
  ...bowsArrows,
  ...shields,
  ...treasures,
];
