import "../assets/css/stylesnew.css";
import React, { useState} from "react";
import { List } from "../components/organism/List";
import { Head } from "../components/organism/Head";
import data from "../data/notes.json";
export function HomeNotes() {

  const [category, setCategory] = useState("");
  const [notaEncontrada, setNotaEncontrada] = useState(null);

  const handleSearch = (searchValue) => {
    const notaEncontrada = data.find((nota) => nota.titulo === searchValue);

    if (searchValue !== "") {
      if (notaEncontrada) {
        console.log(notaEncontrada);
        setNotaEncontrada(notaEncontrada);
      } else {
        alert("NO");
        setNotaEncontrada(null);
      }
    } else {
      alert("Por favor llene la barra de busqueda");
      setNotaEncontrada(null);
    }
  };

  const viewCategory = (name) => {
      setCategory(name);
      console.log(category);
  };

  return (
    <>
      <article>
        <Head onSearch={handleSearch} method={viewCategory} />
        <List nota={notaEncontrada} category={category}/>
      </article>
    </>
  );
}
