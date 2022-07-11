import React from "react";
import '../../styles/efa.css';

// Solo se trata de un elemento de la lista ---------------------------------------
const ElementsFromArray = (props) => { 

  return (
    <div className="elements-from-array">
      {props.registro}
    </div>  
  )
}

export default ElementsFromArray;