// @flow

import React, { type Node } from 'react';
import { targetBlank } from '../helpers';

export const Button = ({
  children,
  outline = false,
  cta = false,
  inverted = false,
  className = '',
  onClick,
  href,
  id = '',
  disabled = false,
  type = 'button',
  ...buttonProps
}: {|
  children: Node,
  outline?: boolean,
  cta?: boolean,
  inverted?: boolean,
  className?: string,
  onClick?: () => void,
  href?: string,
  id?: string,
  disabled?: boolean,
  type?: string
|}) => {
  const color =
    (cta && 'btn-red') ||
    (inverted && outline && 'btn-light border border-primary') ||
    (outline && 'btn-primary border border-white') ||
    (inverted && 'btn-light') ||
    'btn-primary';
  const classes = `btn ${color} ${className} ${disabled ? 'button-disabled' : ''}`;
  const props = { ...buttonProps, onClick, className: classes };
  return href ? (
    <a {...props} id={id} href={disabled ? null : href} {...targetBlank}>
      {children}
    </a>
  ) : (
    <button {...props} id={id} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
