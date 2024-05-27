import React from "react";
import { useLocation, useParams } from "react-router-dom";


import { ListarUser } from "./listarUser/ListarUser";

const User = () => {

    // const url = useLocation();
     const parametros  = useParams();
     const url = useLocation();
    let busqueda = "";

     if(url.search !== ""){
        console.log("parametros "+url.search);
        busqueda = url.search;

     }
     if (parametros.parametros !== undefined){
        console.log("busqueda paramn "+parametros.parametros);

     }

     
    


    return (
        <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
        <ListarUser parametros={parametros.parametros} busqueda ={busqueda}></ListarUser>
        
        </div>

    );

}
export default User;