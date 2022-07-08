import React, {useState} from "react";
import '../../styles/lista-tareas.css';
import ElementsFromArray from './elementsFromArray.jsx';
import Formulario from './formulario.jsx';
import { TiDeleteOutline } from "react-icons/ti";

const ListaDeTareas = () => {
  
  /* --------------datos originales de la lista ------------------------------------ */
  const dataServidor = [{id: '10935lavar', text: 'lavar'}, {id : '20940estudiar', text: 'estudiar'}, {id : '30945planchar', text: 'planchar'}];
  const [registro, setRegistro] = useState(dataServidor);

  /*---------------funcion para eliminar elemento de lista con click ----------------*/
  const eliminarTarea = (id) => {
    setRegistro(registro.filter((item)=>item.id!==id)); //como referencio al id del div que voya a eliminar?
  };

  /*---------------funcion para insertar elemento con click ------------------------- */
  let currentTime = new Date();
  let hora = currentTime.getHours().toString();
  let minuto = currentTime.getMinutes().toString();
  let segundo = currentTime.getSeconds().toString();
  const insertarTarea = (e) =>{
    if(e.key==='Enter'){
      setRegistro([...registro, {id: hora+minuto+segundo, text: e.target.value}]);
    };
    pivot++;
  };

  /*----------------------------------------------------------------------------------*/
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
                onClick = {()=> eliminarTarea(item.id)}
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