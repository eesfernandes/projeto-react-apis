import bug from "../assets/pokemon-types/bug.svg";
import dark from "../assets/pokemon-types/dark.svg";
import dragon from "../assets/pokemon-types/dragon.svg";
import electric from "../assets/pokemon-types/eletric.svg";
import fairy from "../assets/pokemon-types/fairy.svg";
import fighting from "../assets/pokemon-types/fighting.svg";
import fire from "../assets/pokemon-types/fire.svg";
import flying from "../assets/pokemon-types/flying.svg";
import ghost from "../assets/pokemon-types/ghost.svg";
import grass from "../assets/pokemon-types/grass.svg";
import ground from "../assets/pokemon-types/ground.svg";
import ice from "../assets/pokemon-types/ice.svg";
import normal from "../assets/pokemon-types/normal.svg";
import poison from "../assets/pokemon-types/paison.svg";
import psychic from "../assets/pokemon-types/psychic.svg";
import rock from "../assets/pokemon-types/rock.svg";
import steel from "../assets/pokemon-types/steel.svg";
import water from "../assets/pokemon-types/water.svg";

export const getTypes = (type) => {
  switch (type) {
    case "Bug":
      return bug;
    case "Dark":
      return dark;
    case "Dragon":
      return dragon;
    case "Electric":
      return electric;
    case "Fairy":
      return fairy;
    case "Fighting":
      return fighting;
    case "Fire":
      return fire;
    case "Flying":
      return flying;
    case "Ghost":
      return ghost;
    case "Grass":
      return grass;
    case "Ground":
      return ground;
    case "Ice":
      return ice;
    case "Normal":
      return normal;
    case "Poison":
      return poison;
    case "Psychic":
      return psychic;
    case "Rock":
      return rock;
    case "Steel":
      return steel;
    case "Water":
      return water;
    default:
      return water;
  }
};