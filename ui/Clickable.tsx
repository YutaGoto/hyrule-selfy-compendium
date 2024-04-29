import { ButtonHTMLAttributes, type ReactNode } from 'react';

interface ClickableProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

export const Clickable = ({
  children,
  className,
  onClick,
  buttonType = 'button',
}: ClickableProps) => (
  <button type={buttonType} onClick={onClick} className={className}>
    {children}
  </button>
);
