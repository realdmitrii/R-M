import "./CharacterPanel.css";
import { CharacterCardComponent } from "../CharacterCard/CharacterCard";

export const CharacterPanel = () => {
  return (
    <div className="characterPanel">
      <CharacterCardComponent />
      <CharacterCardComponent />
      <CharacterCardComponent />
      <CharacterCardComponent />
    </div>
  );
};
