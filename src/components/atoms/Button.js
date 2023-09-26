
export function Button(Props){
   
   return <>
         <button className="button" onClick={Props.method}>{Props.name}</button>
   </>
    
}