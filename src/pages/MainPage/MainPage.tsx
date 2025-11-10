import { Header } from "../../shared/components/Header/Header";
import { Footer } from "../../shared/components/Footer/Footer";
import { LogoRandMComponent } from "../../shared/components/LogoRandM/LogoRandM";
import { FilterPanel } from "../../shared/components/FilterPanel/FilterPanel";
import { CharacterPanel } from "../../shared/components/CharacterPanel/CharacterPanel";

import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
      <Header />
      <div className="mainpage">
        <LogoRandMComponent />
        <FilterPanel />
        <CharacterPanel />
      </div>
      <Footer />
    </div>
  );
};
