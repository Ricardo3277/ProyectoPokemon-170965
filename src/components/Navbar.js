import React from "react";
import FavoriteContext from "../contexts/favoriteContext";
import {
  MenuItem,
} from "react-pro-sidebar";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
     {/* eslint-disable-next-line*/}
    <div><MenuItem onClick={(e) => window.location.href = '/Pokemons'} icon={<img src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" width={25} height={25}/>}>Pokemons</MenuItem></div>
     {/* eslint-disable-next-line*/}
    <div><MenuItem onClick={(e) => window.location.href = '/170965'} icon={/* eslint-disable-next-line*/<img src="https://www.svgrepo.com/show/276268/pokemon-go-pokemon.svg" width={25} height={25}/>}>Entrenador</MenuItem></div>
      <div/>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
