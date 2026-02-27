import type { Item } from 'types/Item';
import { bowsArrows } from './bowsArrows';
import { creatures } from './creatures';
import { materials } from './materials';
import { monsters } from './monsters';
import { shields } from './shields';
import { treasures } from './treasure';
import { weapons } from './weapons';

export const items: Item[] = [
  ...creatures,
  ...monsters,
  ...materials,
  ...weapons,
  ...bowsArrows,
  ...shields,
  ...treasures,
];
