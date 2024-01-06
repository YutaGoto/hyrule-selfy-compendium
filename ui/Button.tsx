import { ReactNode } from 'react';
import { Linkable } from './Linkable';
import { Clickable } from './Clickable';

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ children, href, onClick }: ButtonLinkProps) => {
  if (href) {
    return (
      <Linkable
        href={href}
        className="flex items-center justify-center border border-sky-300 p-3 hover:bg-sky-300 hover:text-black transition-colors ease-in delay-25"
      >
        {children}
      </Linkable>
    );
  }

  return (
    <Clickable
      buttonType="button"
      onClick={onClick}
      className="flex items-center justify-center border border-sky-300 p-3 hover:bg-sky-300 hover:text-black transition-colors ease-in delay-25"
    >
      {children}
    </Clickable>
  );
};
