import { useEffect, useState } from "react";
import Tarjeta from "../Tarjeta/Tarjeta";

import { getAll } from "../../services/getAll";
import { useObeterDatos } from "../../hooks/useObtenerDatos";



export const ListarProducto = (props) => {

    // const [listaProducto, setlistaProducto] = useState([]);
    // const [encontrado, setEncontrado] = useState(false);
     const URL = 'http://cromawave.com/api/producto?page=2';
     const {obtenerObjetos,listaObjetos,encontrado} = useObeterDatos(URL);

    // function obtenerProducto() {
    //     setEncontrado(false);

    //     // Usamos el servicio de obtención de posts que hemos creado
    //     getAll(URL).then(posts => {

    //         //Cargamos los post en el estado del componente
    //         setlistaProducto(posts);


    //         setEncontrado(true);
    //     });
    //     console.table(listaProducto.data);
      
    // }

    useEffect(obtenerObjetos, []);

    function mostrarProucto(obj) {
      //  console.table(obj)

        
        return <Tarjeta key={obj.id} obj={obj} ></Tarjeta>
    }

    function ordenarnacion(a, b){
       
       
        if(props.ordenar == true){
            return a.title.localeCompare(b.title)
        }
        return b.title.localeCompare(a.title);

    }

    function filtroGenero(dato){
        
        return (props.genero ==='Todos') ?  true:  dato.genre.includes(props.genero,0);
    }


    function filtroPlaforma(dato){
        return (props.plataforma ==='Todos') ?  true:  dato.platform.includes(props.plataforma,0);
    }

    return (
        <>
            <div className="row">
               {encontrado ? listaObjetos.data.map(mostrarProucto) 
                :<h1 className="offset-3 col-4  align-middle text-center text-danger" >cargando ...</h1> }             
            </div>

        </>


    )
}