import { useEffect, useRef, useState } from 'react';

import { ArrowDropDown, ArrowDropUp } from '@/assets';
import { CharacterStatus } from '@/shared/components';
import type { ISelectorProps } from '@/shared/types';

import './Selector.css';

export const Selector = (props: ISelectorProps) => {
  const { isSmallSelector, placeholder, options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label: string) => {
    setSelectedLabel(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      return (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        setIsOpen(false)
      );
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const optionsList = options.map((option) => (
    <li
      key={option.value}
      className={isSmallSelector ? 'small-selector-option' : 'selector-option'}
      onClick={(e) => {
        e.stopPropagation();
        handleOptionClick(option.label);
      }}
    >
      {option.label}
      <CharacterStatus status={option.status} />
    </li>
  ));

  return (
    <div
      ref={containerRef}
      className='wrapper'
      onClick={toggleOpen}
    >
      {!isSmallSelector ? (
        <div className='bigSelector'> {selectedLabel || placeholder}</div>
      ) : (
        <>
          <div className='smallSelector'> {selectedLabel || placeholder}</div>
          <CharacterStatus status={options.find((opt) => opt.label === selectedLabel)?.status} />
        </>
      )}

      <div className={isSmallSelector ? 'smallArrow' : 'arrow'}>
        {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </div>
      {isOpen && <div className='optionsContainer'>{optionsList}</div>}
    </div>
  );
};
