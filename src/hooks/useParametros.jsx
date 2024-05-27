import { useState } from "react";
import { getParametro } from "../services/getParametro";


export const useParametros = (url) => {
    
        // const url = `http://localhost:3001/parametro/${parametro}`;
    
        const [obj, setObj] = useState([]);
        const [encontrado, setEncontrado] = useState(false);
        console.log("dentro de useParametros" + url);
    
        function obtenerObjeto() {
            setEncontrado(false);
    
            // Usamos el servicio de obtención de posts que hemos creado
            getParametro(url).then(posts => {
    
                //Cargamos los post en el estado del componente
                setObj(posts);   
                setEncontrado(true);
            }
            );
        }
        return {obj, encontrado, obtenerObjeto};
    
    }