import { useEffect, useState } from "react";
import { Question } from "../molecules/Question";
import { Title } from "../atoms/Title";
import { Options } from "./Options";
import { TextArea } from "../atoms/TextArea";
import { Icono } from "../atoms/Icono";
import "../../assets/css/stylesnew.css";
import data from "../../data/notes.json";

export function Form(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const date = new Date();
  const [contenido, setContenido] = useState("");
  const sendCard = () => {
    if(title==="" || category==="" || contenido==="") return alert("Llene todos los campos por favor");

    var nuevoObjeto = {
      id: data.length+1,
      titulo : title,
      categoria: category,
      fecha: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      contenido: contenido,
    };

    data.push(nuevoObjeto);
    console.log(data)
    props.method(false);
  };

  return (
    <div className="modal-overlay">
      <div className="form">
        <div className="enc">
          <Icono clase="fa-solid fa-check" method={sendCard} />
          <Icono clase="fa-solid fa-xmark" method={props.method} />
        </div>
        <Title />
        <Question
          name="Nota Nueva"
          method={(e) => setTitle(e.target.value)}
          holder="Ingrese el titulo..."
        />
        <Options method={setCategory} />
        <TextArea
          method={(e) => setContenido(e.target.value)}
          holder="Aquí comienza la aventura..."
        />
      </div>
    </div>
  );
}
