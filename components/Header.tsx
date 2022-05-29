import { ReactNode } from 'react';
import * as styles from './Header.css';

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};
