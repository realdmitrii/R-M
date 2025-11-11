import './FilterItem.css';

type FilterItemProps = {
  value: string;
};

export const FilterItem = ({ value }: FilterItemProps) => {
  return <div className='filterItem'>{value}</div>;
};
