import './CharacterStatus.css';

export interface StatusProps {
  status?: string;
}
export const CharacterStatus = (props: StatusProps) => {
  const { status } = props;
  return status ? <div className={`${status}`} /> : null;
};
