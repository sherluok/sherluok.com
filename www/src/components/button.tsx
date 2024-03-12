import { cx } from '^/lib/common/css';
import { ReactNode } from 'react';
import * as s from './button.css';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { className, children, onClick, disabled } = props;
  return (
    <button className={cx(s.container, className)} {...{ onClick, disabled }}>
      {children}
    </button>
  );
}
