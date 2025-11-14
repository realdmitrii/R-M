import { LoadingPortal } from '@/assets';
import './Loader.css';

type LoaderProps = {
  value: string;
};

export const Loader = ({ value }: LoaderProps) => {
  return (
    <div>
      <img
        className='loader small'
        src={LoadingPortal}
        alt='Loading portal'
      />
      {value}
    </div>
  );
};
