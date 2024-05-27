import { useEffect, useState } from "react";


import { getAll } from "../../services/getAll";
import TarjetaUser from "../tarjetaUser/TarjetaUser";
import { useObeterDatos } from "../../hooks/useObtenerDatos";
import { useParams } from "react-router-dom";




export const ListarUser = (props) => {

    // const [listaUser, setlistaUser] = useState([]);
    // const [encontrado, setEncontrado] = useState(false);
    console.log("parametros" + props.parametros);
    console.log("busqueda: " + props.busqueda);
    let URL = "http://cromawave.com/api/user";

    const parametros = props.parametros;
    console.log("parametros" + parametros);

    if (parametros !== undefined) {

        
        URL = URL + "/" + props.parametros;
        
    }

    if (props.busqueda !== "") {
         URL = URL + props.busqueda;
    }

    
    console.log("URL: " + URL);

    // function obtenerUser() {
    //     setEncontrado(false);

    //     // Usamos el servicio de obtención de posts que hemos creado
    //     getAll(URL).then(posts => {

    //         //Cargamos los post en el estado del componente
    //         setlistaUser(posts);


    //         setEncontrado(true);
    //     });
    //     console.table(listaUser.data);

    // }
    const { obtenerObjetos, listaObjetos, encontrado } = useObeterDatos(URL);

    useEffect(obtenerObjetos, []);

    function mostrarProucto(obj) {
        //console.table(obj)


        return <TarjetaUser key={obj.id} obj={obj} ></TarjetaUser>
    }

    function ordenarnacion(a, b) {


        if (props.ordenar == true) {
            return a.title.localeCompare(b.title)
        }
        return b.title.localeCompare(a.title);

    }

    function filtroGenero(dato) {

        return (props.genero === 'Todos') ? true : dato.genre.includes(props.genero, 0);
    }


    function filtroPlaforma(dato) {
        return (props.plataforma === 'Todos') ? true : dato.platform.includes(props.plataforma, 0);
    }

    return (
        <>
            <div className="row">
                {encontrado ? listaObjetos.data.map(mostrarProucto)
                    : <h1 className="offset-3 col-4   align-middle text-center text-danger" >cargando ...</h1>}
            </div>

        </>


    )
}