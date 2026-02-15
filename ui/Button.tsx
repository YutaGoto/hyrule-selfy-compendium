import type { ReactNode } from 'react';
import { Clickable } from './Clickable';
import { Linkable } from './Linkable';

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
        className="flex items-center justify-center border border-sky-300 p-3 transition-colors delay-25 ease-in hover:bg-sky-300 hover:text-black"
      >
        {children}
      </Linkable>
    );
  }

  return (
    <Clickable
      buttonType="button"
      onClick={onClick}
      className="flex items-center justify-center border border-sky-300 p-3 transition-colors delay-25 ease-in hover:bg-sky-300 hover:text-black"
    >
      {children}
    </Clickable>
  );
};
