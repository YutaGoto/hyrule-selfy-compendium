interface TagProps {
  text: string;
}

export const Tag = ({ text }: TagProps) => (
  <span
    className={
      'bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300'
    }
  >
    {text}
  </span>
);
