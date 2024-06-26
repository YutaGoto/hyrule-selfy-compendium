import type { Category } from './Category';

export type Item = {
  id: string;
  name: string;
  category: Category;
  description: string;
  locations?: string[];
  recoverableMaterials?: string[];
  heartsRecoverable?: number;
  properties?: {
    type: string;
    value: number | '∞';
  };
  additionalEffect?: string;
  cookingEffect?: string;
};
