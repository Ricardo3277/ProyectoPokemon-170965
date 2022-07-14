import React from "react";
import FavoriteContext from "../contexts/favoriteContext";
import {
  Menu,
  MenuItem,
} from "react-pro-sidebar";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
        <Menu iconShape="square">
              <MenuItem onClick={(e) => window.location.href = '/'} icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" width={25} height={25}/>}>Pokemones</MenuItem>
              <MenuItem onClick={(e) => window.location.href = '/170965'} icon={<img src="https://www.svgrepo.com/show/276267/pokemon-trainer-pokemon.svg" width={25} height={25}/>}>Usuario</MenuItem>
            </Menu>
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
