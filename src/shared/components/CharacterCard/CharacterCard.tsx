import "./CharacterCard.css";
import { CharacterCard } from "@/assets";

export const CharacterCardComponent = () => {
  return (
    <img src={CharacterCard} alt="charactercard" className="characterCard" />
  );
};
