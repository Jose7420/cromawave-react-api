import { useState } from "react";
import { getAll } from "../services/getAll";

export const useObeterDatos =(url)=>{

    const [listaObjetos, setlistaObjetos] = useState([]);
    const [encontrado, setEncontrado] = useState(false);
     
   

    function obtenerObjetos() {
        setEncontrado(false);

        // Usamos el servicio de obtención de posts que hemos creado
        getAll(url).then(posts => {

            //Cargamos los post en el estado del componente
            setlistaObjetos(posts);


            setEncontrado(true);
        });
       // console.table(listaObjetos.data);
      
    }

   return {listaObjetos, encontrado, obtenerObjetos};


}


