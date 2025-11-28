import { Selector } from '@/shared/components';
import { CharacterGender, CharacterSpecies, CharacterStatus } from '@/shared/constants';

import './FilterPanel.css';

export const FilterPanel = () => {
  return (
    <div className='filterPanel'>
      <div className='filterField'>Filter</div>
      <div className='filterField'>
        <Selector
          placeholder='Species'
          options={CharacterSpecies}
        />
      </div>
      <div className='filterField'>
        <Selector
          placeholder='Gender'
          options={CharacterGender}
        />
      </div>
      <div className='filterField'>
        <Selector
          placeholder='Status'
          options={CharacterStatus}
        />
      </div>
    </div>
  );
};
