import { useEffect } from "react";
import TarjetaUser from "../../components/tarjetaUser/TarjetaUser";
import { useParametros }  from "../../hooks/useParametros"

export const DetalleUser = (props) => {

    // const parametro = useParametros();
    console.log("esto es parametro en DetalleUser ..." + props.parametro);

    const URL = "http://cromawave.com/api/user/" + props.parametro;

    
    const { obj, encontrado } = useParametros(props.parametro);
    

    console.log("esto es dentro de DetalleUser ..." + obj);

    return (
        <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
            <TarjetaUser obj={obj} ></TarjetaUser>
            {/* {econtrado ?<h1>{obj.id}</h1> : <h1>Usuario no encontrado</h1>} */}
            
        </div>

    );
}






