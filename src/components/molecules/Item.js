import { Subtitle } from "../atoms/Subtitle";
import '../../assets/css/stylesnew.css';
import { Icono } from "../atoms/Icono";

export function Item(props) {
  return (
      <div className="card__inner [ js-expander ]" onClick={props.method}>
        {/*<Icono clase="fa-solid fa-trash" method={props.delete} i/>*/}
        <Subtitle name={props.titulo || "SUBTITULO"} />
      </div>
  );
}
