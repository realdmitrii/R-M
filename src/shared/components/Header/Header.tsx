import { LogoHeaderBlack } from '@/assets';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <LogoHeaderBlack className='header-logo' />
      </div>
    </div>
  );
};
