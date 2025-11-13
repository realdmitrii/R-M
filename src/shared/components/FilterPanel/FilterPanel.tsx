import './FilterPanel.css';

export const FilterPanel = () => {
  return (
    <div className='filterPanel'>
      <div className='filterField'>Filter by name...</div>
      <div className='filterField'>Species</div>
      <div className='filterField'>Gender</div>
      <div className='filterField'>Status</div>
    </div>
  );
};
