import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: 'radio' | 'file' | 'text' | 'password';
  bgColor?: 'white' | 'grey';
  fileName?: FileList;
  onCancel?(): void;
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
  id,
  fileName,
  onCancel,
  ...otherProps
}) => {
  const inputClassName = ['input__input'];
  const inputTextContainerClassName = ['input__container'];
  const inputFileClassName = ['input-file__container'];

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

  if (type === 'file') {
    return (
      <div className={inputFileClassName.join(' ')}>
        <span
          className={`input-file__filename ${
            fileName && fileName.length > 0 ? 'active' : ''
          }`}
        >
          {fileName && fileName.length > 0 ? fileName[0].name : placeholder}
        </span>
        <input
          value={!fileName ? undefined : ''}
          accept="image/*,.pdf"
          {...otherProps}
          id={id}
          type="file"
        />
        {!fileName ? (
          <label className="input-file__btn" htmlFor={id}>
            Upload file
          </label>
        ) : (
          <span
            onClick={() => {
              if (onCancel) onCancel();
            }}
            className="input-file__btn"
          >
            Cancel
          </span>
        )}
      </div>
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
