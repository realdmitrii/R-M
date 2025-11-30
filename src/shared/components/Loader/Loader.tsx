import { LoadingPortal } from '@/assets';

import './Loader.css';

type LoaderProps = {
  text: string;
};

export const Loader = ({ text }: LoaderProps) => {
  return (
    <div className='loader-wrapper'>
      <img
        className='loader small'
        src={LoadingPortal}
        alt='Loading portal'
      />
      {text}
    </div>
  );
};
