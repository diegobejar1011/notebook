import {useState} from "react";
import { Card } from "../molecules/Cards";
import { Item } from "../molecules/Item";
import data from "../../data/notes.json";
import "../../assets/css/stylesnew.css";

export function List({ nota, category }) {
  
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [mostrarCard, setMostrarCard] = useState(false);
 
  const handleClick = (componentName) => {
    setSelectedComponent(componentName);
    setMostrarCard(!mostrarCard);
  };

  return (
    <div>
      {nota !== null ?
      (
        <div key={nota.id} className="container">
        <Item
          titulo={nota.titulo || ""}
          method={() => handleClick(nota.id || "")}
        />
        {mostrarCard === true && (
          <Card
            categoria={nota.categoria || ""}
            fecha={nota.fecha || ""}
            contenido={nota.contenido || ""}
          />
        )}
      </div>
      ) : (
         data.map((item, index) => (
          <div key={index} className="container">
            <Item
              titulo={item.titulo || ""}
              method={() => handleClick(index)}
            />
            {selectedComponent === index && mostrarCard === true && (
              <Card
                categoria={item.categoria || ""}
                fecha={item.fecha || ""}
                contenido={item.contenido || ""}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
