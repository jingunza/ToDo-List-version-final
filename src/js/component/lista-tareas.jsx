import React from "react";
import '../../styles/lista-tareas.css';
import { AiFillCloseCircle } from "react-icons/ai";

//create your first component
const Lista = () => {
  //const [registro, setRegistro] = useState([]);
  let arrayList = [{key: 123, tarea: 'lavar'},{key: 223, tarea: 'estudiar'},{key: 323, tarea: 'correr'}];
	return (
		<div className="body-hijo row justify-content-center">
			<div className="cuaderno col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 py-5 px-0 mt-5">
				<h1 className="titulo-lista text-center mt-0 mb-4">todos</h1>
        <div className="zona-rayada">
          <div className="contenedor-form">
            <input
              className="entrada-tarea px-3 px-lg-5"
              onKeyDown={(e)=>(e.key==='Enter')? console.log('preparado para insertar') : ''}
              type="text"
              placeholder="What needs to be done?"
            />
          </div>
          <div>
            {arrayList.map((item)=>
              <div className="lista-elemento d-flex align-items-center justify-content-between">
                <div
                  className="lista-texto px-3 px-lg-5"
                  key={item.key} 
                >
                  {item.tarea}
                </div>
                <div
                  onClick = {(e)=> console.log('preparado para eliminar')}
                  className="contenedor-icono-eliminar px-3 px-lg-5"
                >
                  <AiFillCloseCircle className="icono-eliminar" />
                </div>
              </div>
              )
            }
          </div>
        </div>
			</div>
		</div>	
	);
};

export default Lista;

//<input type="text" onKeyDown={(e)=>{if(e.key==='Enter'){setRegistro(registro.push(e.target.value))}}} />