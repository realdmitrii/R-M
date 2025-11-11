import { Header } from '@/shared';
import { Footer } from '@/shared';
import { LogoComponent } from '@/shared';
import { FilterPanel } from '@/shared';
import { CharacterPanel } from '@/shared';

import './MainPage.css';

export const MainPage = () => {
  return (
    <div className='main-page-wrapper'>
      <Header />
      <div className='main-page'>
        <LogoComponent />
        <FilterPanel />
        <CharacterPanel />
      </div>
      <Footer />
    </div>
  );
};
