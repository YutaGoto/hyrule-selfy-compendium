import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkableProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export const Linkable = ({ children, className, href }: LinkableProps) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);
