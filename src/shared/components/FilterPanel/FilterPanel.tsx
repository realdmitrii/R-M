import './FilterPanel.css';
import { Selector } from '@/shared/components/Selector/Selector';

const CharacterSpecies = [
  { id: 1, text: 'Human' },
  { id: 2, text: 'Alien' },
  { id: 3, text: 'Humanoid' },
  { id: 4, text: 'Animal' },
  { id: 5, text: 'Robot' },
];

const CharacterGender = [
  { id: 1, text: 'Female' },
  { id: 2, text: 'Male' },
  { id: 3, text: 'Genderless' },
  { id: 4, text: 'Unknown' },
];

export const FilterPanel = () => {
  return (
    <div className='filterPanel'>
      <div className='filterField'>Filter</div>
      <div className='filterField'>
        <Selector
          isBigSelector
          options={CharacterSpecies}
        />
      </div>
      <div className='filterField'>
        <Selector
          isBigSelector
          options={CharacterGender}
        />
      </div>
      <div className='filterField'>
        <Selector
          isBigSelector
          options={CharacterGender}
        />
      </div>
    </div>
  );
};
