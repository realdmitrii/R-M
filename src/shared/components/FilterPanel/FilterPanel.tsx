import { FilterItem } from '../FilterItem/FilterItem';
import './FilterPanel.css';

export const FilterPanel = () => {
  return (
    <div className='filterPanel'>
      <FilterItem value='Filter by name...' />
      <FilterItem value='Species' />
      <FilterItem value='Gender' />
      <FilterItem value='Status' />
    </div>
  );
};
