import React, {useEffect, useState} from "react";
import '../../styles/lista-tareas.css';
import ElementsFromArray from './elementsFromArray.jsx';
import Formulario from './formulario.jsx';
import { TiDeleteOutline } from "react-icons/ti";

const ListaDeTareas = () => {
  
  /* --------------datos originales de la lista ------------------------------------ */
  const dataServidor = [{id: '10935lavar', text: 'lavar'}, {id : '20940estudiar', text: 'estudiar'}, {id : '30945planchar', text: 'planchar'}];
  const [registro, setRegistro] = useState(dataServidor);

  /*---------------funcion para eliminar elemento de lista con click ----------------*/
  // esta funcion tiene como parametro un id, el cual luego será reemplazado por el valor
  // de id real que proviene del array del state (en este caso se llamara registro.id, pero
  // como estara dentro de un mapeo basado ya en ese state "registro", se pasara como item.id)
  // IMPORTANTE: PARA QUE EL ID DEL PARAMETRO TENGA DE DONDE COGERSE, NECESITA QUE LA FUNCION
  // ACTUE DENTRO DEL MAPEO PUES ESTE TRAE EL ARRAY DEL CUAL SALE EL ID, ES DECIR, EL MAPEO ESCRIBE EL HTML E INCLUYE LA FUNCION ELIMINAR.
  // LA FUNCION INSERTAR EN CAMBIO NO NECESITA ESTAR DENTRO DEL MAPEO, PUES NO REQUIERE UNA REFERENCIA
  // esta funcion debera ser incluiuda dentro de una lambda porque necesita un segundo parentesis para declarar el argumento.
  const eliminarTarea = (id) => {
    setRegistro(registro.filter((item)=>item.id!==id)); //referencio al id del elemento del array que voya a eliminar dentro del map
  };

  /*---------------funcion para insertar elemento con click ------------------------- */
  // esta funcion ya esta basada en eventos en su definicion, y no tiene parametros
  // por eso al reemplazar al prop no requiere una funcion lambda
  let currentTime = new Date();
  let hora = currentTime.getHours().toString();
  let minuto = currentTime.getMinutes().toString();
  let segundo = currentTime.getSeconds().toString();
  const insertarTarea = (e) =>{
    if(e.key==='Enter'){
      setRegistro([...registro, {id: hora+minuto+segundo, text: e.target.value}]); //esto SOLO funciona con DECONSTRUCCION, NO USAR PUSH
    };
  };

  /* -----useEffect para borrar el input cada vez que se presione 'Enter'------------*/

  useEffect(()=>{
    const inputPlace = document.querySelector('input');
    inputPlace.value = '';
  },[insertarTarea]);

  /*----------------------------------------------------------------------------------*/
  // notese que el key esta siendo declarado en la caja padre de todas, dentro del elemento de lista, esto es porque 
  // la key sera reconocida en el padre unicamente
	return (
		<div className="body-hijo row justify-content-center">
			<div className="cuaderno col-10 col-sm-8 col-md-6 col-lg-5 pt-5 pb-3 px-0 mt-5">
				<h1 className="titulo-lista text-center mt-0 mb-4">todos</h1>
        <div className="zona-rayada">
          <Formulario insertar={insertarTarea} />
          <ElementsFromArray registro={registro.map((item,index)=>
            <div key={item+index} className="lista-elemento d-flex align-items-center justify-content-between">
              <div className="lista-texto px-3 px-lg-5" id={item.id}>
                {item.text}
              </div>
              <div
                onClick = {()=> eliminarTarea(item.id)} // aqui notese que lleva funcion lambda porque la func eliminar necesita argumentos
                className="contenedor-icono-eliminar px-3 px-lg-4"
              >
                <TiDeleteOutline className="icono-eliminar" />
              </div>
            </div>)}
          />
					<div className="pie-pagina pt-3 ps-3">{registro.length} items left</div>
        </div>
      </div>
		</div>	
	);
};

export default ListaDeTareas;