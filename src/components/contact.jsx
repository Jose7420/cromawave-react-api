import { useLocation, useParams } from "react-router-dom";


const Contact = () => {

    const url = useLocation();
    const { name } = useParams();
   
   
   
   
    return (
        <div className=" pt-4 h-75 offset-1 w-90 col-10 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
            <h1>vista Conact</h1>
             <p>La cadena de búsqueda actual es {url.search};</p>
             
                <p>El parámetro de ruta actual es {name}</p>
           
        </div>
    );

}
export default Contact;