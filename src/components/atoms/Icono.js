import '../../assets/css/stylesnew.css'

export function Icono(Props){
    return <i className={Props.clase} name={Props.name} onClick={Props.method}></i>
}