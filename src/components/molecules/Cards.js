import { Subtitle } from "../atoms/Subtitle";
import { Text } from "../atoms/Text";
import { Icono } from "../atoms/Icono";
import '../../assets/css/stylesnew.css';

export function Card(props) {
  return (
    <div className="card__expander">
      <div className="container">
        <Subtitle name={props.categoria || "Categoria"} />
        <Subtitle name={props.fecha || "Date"} />
        <Icono clase="fa-solid fa-xmark" method={props.method}/>
      </div>
      <Text contenido={props.contenido || "La filosofía, a lo largo de la historia de la humanidad, ha sido la herramienta con la que exploramos las preguntas fundamentales sobre la existencia, el conocimiento, la moralidad y la realidad misma. Es un viaje intelectual en busca de la sabiduría y la comprensión más allá de las respuestas simples y superficiales. En su esencia, la filosofía es un ejercicio de pensamiento crítico y reflexión profunda. Nos impulsa a cuestionar nuestras creencias, a desafiar las suposiciones y a explorar nuevos conceptos. Nos invita a analizar las cuestiones más complejas y abstractas de la vida y a buscar respuestas que no siempre son fáciles de encontrar."} />
    </div>
  );
}
