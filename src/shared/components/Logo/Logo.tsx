import { Logo } from '@/assets';
import './Logo.css';

export const LogoComponent = () => {
  return (
    <img
      src={Logo}
      alt='Logo'
      className='Logo'
    />
  );
};
