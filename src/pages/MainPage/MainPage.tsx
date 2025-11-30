import { CharacterCards, FilterPanel, Footer, Header, Loader,LogoComponent } from '@/shared';

import './MainPage.css';

export const MainPage = () => {
  return (
    <div className='main-page-wrapper'>
      <Header />
      <div className='main-page'>
        <LogoComponent />
        <FilterPanel />
        <CharacterCards />
        <Loader text='Loading characters...' /> {/*добавил для удобства просмотра при деплое! */}
      </div>
      <Footer />
    </div>
  );
};
