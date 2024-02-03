import { react } from "react";
import Sor from "./Sor";
export default function Tabla(props) {
  function kattintas(id){
    props.kattintas(id)
  }
    return(
    <div>
      <table>
        <tbody>
       
          {props.objLista.map((elem, index) => {
            return ( 
              <Sor obj={elem} key={index} kattintas={kattintas}/>
              )}
           ) 
            }
            </tbody>
      </table>
    </div>
    )
  
}
