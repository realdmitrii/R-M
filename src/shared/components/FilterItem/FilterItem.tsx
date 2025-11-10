import "./FilterItem.css";

export const FilterItem = ({ value }: { value: string }) => {
  return <div className="filterItem">{value}</div>;
};
