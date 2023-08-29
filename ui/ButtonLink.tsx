import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
}

export const ButtonLink = ({ children, href }: ButtonLinkProps) => (
  <Link
    href={href}
    className="flex items-center justify-center border border-sky-300 p-3 hover:bg-sky-300 hover:text-black transition-colors ease-in delay-25"
  >
    {children}
  </Link>
);
