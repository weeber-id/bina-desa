import React from 'react';

interface Button
  extends React.HTMLAttributes<HTMLButtonElement | HTMLInputElement> {
  variant?: 'filled' | 'outlined';
  color?: 'yellow' | 'white' | 'green' | 'grey';
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Button> = ({
  color,
  children,
  variant,
  className,
  type,
  ...otherProps
}) => {
  const btnClassName = ['btn'];
  if (variant === 'outlined') btnClassName.push('btn--outlined');
  if (className) btnClassName.push(className);
  if (color === 'white') btnClassName.push('btn--white');
  if (color === 'green') btnClassName.push('btn--green');
  if (color === 'grey') btnClassName.push('btn--grey');

  if (type === 'submit') {
    return (
      <input type="submit" className={btnClassName.join(' ')} {...otherProps} />
    );
  }

  return (
    <button {...otherProps} type={type} className={btnClassName.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
