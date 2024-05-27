import { useLocation, useParams } from "react-router-dom";

import { ListarProducto } from "../../components/listaProducto/ListarProducto";

const Producto = () => {

    // const url = useLocation();
    // const { name } = useParams();




    return (
        <div className="offset-1 col-10  pt-4 h-75  w-90 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
        <ListarProducto>  </ListarProducto>
        </div>

    );

}
export default Producto;