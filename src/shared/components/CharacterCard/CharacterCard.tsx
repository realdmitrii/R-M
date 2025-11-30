import { CharacterStatus } from '@/shared/constants';
import { Selector } from '../Selector/Selector';

import './CharacterCard.css';

export const CharacterCardComponent = () => {
  return (
    <div className='characterCard'>
      {' '}
      Карточка персонажа{' '}
      <div className='filterSmallField'>
        <Selector
          placeholder={CharacterStatus[1].label}
          isSmallSelector
          options={CharacterStatus}
        />
      </div>
    </div>
  );
};
