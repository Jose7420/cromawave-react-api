import React from "react";
import { useLocation, useParams } from "react-router-dom";


import { ListarUser } from "./listarUser/ListarUser";
import { useObeterDatos } from "../hooks/useObtenerDatos";
import TarjetaUser from "./tarjetaUser/TarjetaUser";

const UserParametros = (props) => {
    const parametros  = useParams();

    const {  } = useObeterDatos(parametros);

    

   // useEffect(obtenerObjetos, []);
    




    return (
        <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
        <TarjetaUser obj={obj} ></TarjetaUser>
        
        </div>

    );
    

}
export default UserParametros;