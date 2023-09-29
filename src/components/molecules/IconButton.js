import { Icono } from "../atoms/Icono.js";

export function IconButton(Props) {
  return (
    <div onClick={Props.method} className={`icon__home ${Props.esp}`}>
      <Icono clase={Props.clase} name={Props.name} />
    </div>
  );
}
