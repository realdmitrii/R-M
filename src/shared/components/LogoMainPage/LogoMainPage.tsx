import { LogoMainPage } from '@/assets';

import './LogoMainPage.css';

export const LogoComponent = () => {
  return (
    <img
      src={LogoMainPage}
      alt='LogoMainPage'
      className='LogoMainPage'
    />
  );
};
