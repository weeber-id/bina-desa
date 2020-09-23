import React, { useRef, useState } from 'react';
import { IconDropdownArrow } from '../../assets';
import useOutside from '../../hooks/use-outside';

interface DropdownProps extends React.HTMLProps<HTMLDivElement> {
  options: string[];
  onChangeOptions(value: string): void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChangeOptions,
  placeholder,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [hidden, setHidden] = useState<boolean>(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutside(dropdownRef, () => {
    setHidden(true);
  });

  const handleClick = (val: string, i: number) => {
    onChangeOptions(val);
    setActiveIndex(i);
    setHidden(true);
  };

  return (
    <div ref={dropdownRef} className="dropdown">
      <div onClick={() => setHidden(!hidden)} className="dropdown__select">
        <div className={`dropdown__text ${activeIndex > -1 ? 'active' : ''}`}>
          {activeIndex > -1 ? options[activeIndex] : placeholder}
        </div>
        <IconDropdownArrow />
      </div>
      {!hidden && (
        <div className="dropdown__options">
          {options.map((option, i) => {
            return (
              <div
                key={`${option}-${i}`}
                onClick={(e) => handleClick(options[i], i)}
                className={`dropdown__option ${
                  activeIndex === i ? 'active' : ''
                }`}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
