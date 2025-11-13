import { Header, Footer, LogoComponent, FilterPanel, CharacterCards } from '@/shared';

import './MainPage.css';

export const MainPage = () => {
  return (
    <div className='main-page-wrapper'>
      <Header />
      <div className='main-page'>
        <LogoComponent />
        <FilterPanel />
        <CharacterCards />
      </div>
      <Footer />
    </div>
  );
};
