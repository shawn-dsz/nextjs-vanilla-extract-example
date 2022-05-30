import { ReactNode } from 'react';
import * as styles from './Header.css';
import classnames from 'classnames';
import { Background } from './Header.css';

interface HeaderProps {
  children: ReactNode;
  background?: Background;
  foreground?: keyof typeof styles.foreground;
}

export const Header = ({
  children,
  background = 'pink',
  foreground = 'red',
}: HeaderProps) => {
  return (
    <>
      <h1
        className={classnames(
          styles.root,
          styles.background[background],
          styles.foreground[foreground],
        )}
      >
        {children}
      </h1>
    </>
  );
};
