import { ReactNode } from 'react';
import * as styles from './Header.css';
import classnames from 'classnames';
interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <h1
        className={classnames(
          styles.root,
          styles.background,
          styles.foreground
        )}
      >
        {children}
      </h1>
    </>
  );
};
