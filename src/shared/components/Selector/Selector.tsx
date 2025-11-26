import { useState } from 'react';
import './Selector.css';
import { ArrowDropDown, ArrowDropUp } from '@/assets';

interface SelectorOptions {
  id: number;
  text: string;
  status?: 'green' | 'red' | 'orange';
}

interface SelectorProps {
  isBigSelector: boolean;
  options: SelectorOptions[];
}

export const Selector = (props: SelectorProps) => {
  const { isBigSelector } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='wrapper'>
      <div
        className='SelectorContent'
        onClick={toggleOpen}
      >
        {isBigSelector ? (
          <div className='BigSelector'> </div>
        ) : (
          <div className='SmallSelector'>SmallSelector </div>
        )}

        {isOpen ? <ArrowDropDown /> : <ArrowDropUp />}
      </div>
      {isOpen && <div className='optionsContainer'>optionsList</div>}
    </div>
  );
};
