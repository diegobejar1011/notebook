import '../../assets/css/stylesnew.css';

import {Title} from '../atoms/Title';
import {Buscador} from '../molecules/Buscador';
import {Options} from '../organism/Options';

export function Head(Props){
    
    return <header className='container head'>
            <Title name="My Notes" className="title" method={Props.home}/> 
            <Buscador onSearch={Props.onSearch}/>
            <Options method={Props.method}/>
    </header> 

            
}