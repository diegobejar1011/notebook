import { Subtitle } from "../atoms/Subtitle";
import '../../assets/css/stylesnew.css';

export function Item(props) {
  return (
      <div className="card__inner [ js-expander ]" onClick={props.method}>
        <Subtitle name={props.titulo || "SUBTITULO"} />
      </div>
  );
}
