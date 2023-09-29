import { useState } from "react";
import { Card } from "../molecules/Cards";
import { Item } from "../molecules/Item";
import data from "../../data/notes.json";
import "../../assets/css/stylesnew.css";

export function List({ nota, category }) {

  var objeto = nota || category || null;

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleClick = (componentName) => {
    setSelectedComponent(componentName);
    setMostrarCard(true);
  };

  const handleClose = () => {
    setMostrarCard(false);
  };

  const handleDelete=(idDelete)=>{
    var dataCopy= data.filter(objeto => objeto.id !== idDelete);
    data = dataCopy
    console.log(dataCopy);
  }


  return (
    <div>
      {objeto ? (
        typeof objeto === "string" ? 
          data.map((nota ) => {
            if(nota.categoria===objeto){
              return <div key={nota.id} className="container">
              <Item
                titulo={nota.titulo || ""}
                method={() => handleClick(nota.id|| "")}
                delete={()=>handleDelete(nota.id)}
              />
              {selectedComponent === nota.id && mostrarCard === true && (
                <Card
                  categoria={nota.categoria || ""}
                  fecha={nota.fecha || ""}
                  contenido={nota.contenido || ""}
                  method={handleClose}
                />
              )}
            </div>
            }
          })
         : (
          <div key={nota.id} className="container">
            <Item
              titulo={nota.titulo || ""}
              method={() => handleClick(nota.id || "")}
              delete={()=>handleDelete(nota.id)}
            />
            {mostrarCard === true && (
              <Card
                categoria={nota.categoria || ""}
                fecha={nota.fecha || ""}
                contenido={nota.contenido || ""}
                method={handleClose}
              />
            )}
          </div>
        )
      ) : (
        data.map((item, index) => (
          <div key={index} className="container">
            <Item
              titulo={item.titulo || ""}
              method={() => handleClick(item.id)}
              delete={()=>handleDelete(item.id)}
            />
            {selectedComponent === item.id && mostrarCard === true && (
              <Card
                categoria={item.categoria || ""}
                fecha={item.fecha || ""}
                contenido={item.contenido || ""}
                method={handleClose}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
