import {Icono} from '../atoms/Icono.js';

export function IconButton(Props){
    return <div onClick={Props.method} class="icon__home">
        <Icono clase={Props.clase} name={Props.name}/>
    </div>

}