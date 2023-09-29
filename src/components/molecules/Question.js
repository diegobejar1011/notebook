import { Barra } from "../atoms/Barra";
import { Subtitle } from "../atoms/Subtitle";
export function Question(Props){
    return <div>
        <Subtitle name={Props.name}/>
        <Barra clase="search__input" holder={Props.holder} method={Props.method}/>
    </div>
}