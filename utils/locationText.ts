import { Category } from 'types/Category';

export const locationText = (category: Category): string => {
  switch (category) {
    case 'weapons':
    case 'shields':
    case 'bowsArrows':
    case 'treasures':
    case 'materials':
      return '手に入りやすい場所';
    case 'monsters':
    case 'creatures':
      return '主な生息地';
    default:
      return '';
  }
};
