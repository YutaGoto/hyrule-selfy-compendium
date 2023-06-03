export type Item = {
  id: string;
  name: string;
  description: string;
  locations?: string[];
  recoverableMaterials?: string[];
  heartsRecoverable?: number;
  properties?: {
    type: string;
    value: number;
  };
  cookingEffect?: string;
};
