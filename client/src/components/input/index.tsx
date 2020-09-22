import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'radio' | 'file' | 'text' | 'password';
  bgColor?: 'white' | 'grey';
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  placeholder,
  required,
  name,
  bgColor,
  className,
  ...otherProps
}) => {
  const inputClassName = ['input__input'];
  const inputTextContainerClassName = ['input__container'];
  if (bgColor === 'grey') inputClassName.push('input__input--grey');
  if (className && type === 'text') inputTextContainerClassName.push(className);

  if (type === 'radio') {
    return (
      <label className="radio">
        <span className="radio__input">
          <input {...otherProps} value={value} type="radio" name={name} />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{label}</span>
      </label>
    );
  }

  return (
    <div className={inputTextContainerClassName.join(' ')}>
      {label && <label className="input__label">{label}</label>}
      <input
        {...otherProps}
        className={inputClassName.join(' ')}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </div>
  );
};

export default Input;
