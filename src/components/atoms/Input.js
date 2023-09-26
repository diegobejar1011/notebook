import '../../assets/css/stylesnew.css';

 export function Input(Props){
    return <input className='input' name={Props.name} onChange={Props.method}></input>
 }