import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";


export default function Perfil(){
    return(
        <div className="center-a">
        <Navbar/>
        <Searchbar />
        
            <div className="perfil">
                <img className="foto-perfil" src="assets/Perfil.jpg" width={130} height={130}/><br/>
                <strong>
                    DWI - IDGS<br/>
                    Flores Montoya Ricardo Daniel<br/>
                    170965<br/>
                    9A
                </strong>
            </div>
        </div>
    )
}