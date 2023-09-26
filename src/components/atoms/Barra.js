import '../../assets/css/stylesnew.css'

export function Barra(Props){

    return <input type="text" className={Props.clase} placeholder={Props.holder} onChange={Props.method}></input>
    
}