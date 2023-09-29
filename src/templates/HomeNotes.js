import "../assets/css/stylesnew.css";
import React, { useEffect, useState} from "react";
import { List } from "../components/organism/List";
import { Head } from "../components/organism/Head";
import data from "../data/notes.json";
import { Form } from "../components/organism/Form";
import { IconButton } from "../components/molecules/IconButton";

export function HomeNotes() {

  useEffect(()=>{
    console.log(data)
  },[data])
  
  const [category, setCategory] = useState("");
  const [notaEncontrada, setNotaEncontrada] = useState(null);
  const [mostrarForm, setMostrarFrom] = useState(false);

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
  };

  useEffect(()=>{
    setNotaEncontrada(null);
  }, [category]);

  const handleForm = () =>{
    setMostrarFrom(!mostrarForm);
  }; 

  return (
    <>
      <article>
        <Head onSearch={handleSearch} method={viewCategory} home={()=>setCategory("")}/>
        <List nota={notaEncontrada} category={category}/>
        {mostrarForm ? 
        <Form method={handleForm}/>
        : ""}
        <IconButton method={handleForm} clase="fa-solid fa-plus" esp="fixed-button"/>
      </article>
    </>
  );
}
