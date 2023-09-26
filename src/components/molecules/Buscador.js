import React, { useState} from "react";
import {Icono} from '../atoms/Icono';
import {Barra} from '../atoms/Barra';
import '../../assets/css/stylesnew.css'

export function Buscador(Props) {
    const [searchValue, setSearchValue] = useState(''); 
 
    const handleButtonClick = () => {
        Props.onSearch(searchValue);
      };

  return (
    <div className="search">
      <Barra clase="search__input" holder="Search..." method={(e) => setSearchValue(e.target.value)} />
      <div className="search__icon">
        <Icono clase="fa-solid fa-magnifying-glass" name="search" method={handleButtonClick}/>
      </div>
    </div>
  );
}
