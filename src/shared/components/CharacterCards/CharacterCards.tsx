import { CharacterCardComponent } from '@/shared';
import './CharacterCards.css';

export const CharacterCards = () => {
  return (
    <div className='characterCards'>
      <CharacterCardComponent />
      <CharacterCardComponent />
      <CharacterCardComponent />
      <CharacterCardComponent />
    </div>
  );
};
