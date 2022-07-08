import React from "react";
import '../../styles/formulario.css';

const Formulario = (props) => {
  return (
    <div className="contenedor-form">
      <input
      className="entrada-tarea px-3 px-lg-5"
      onKeyDown={props.insertar}
      type="text"
      placeholder="What needs to be done?"
      />
    </div>
  )
}

export default Formulario;