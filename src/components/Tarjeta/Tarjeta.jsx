import './tarjeta.css';
const Tarjeta = (props) => {

    // asignas las propiedades del objeto a variables
    const { id, nombre, descripcion, precio, imagen } = props.obj;

    // funcion para cambiar el formato de la fecha
    function cambiarElFormatoDelaFecha(fecha) {

        let cambiarElFormatoDelaFecha = fecha.substr(8, 2) + "-" + fecha.substr(5, 2) + "-" + fecha.substr(0, 4);

        return cambiarElFormatoDelaFecha;
    }

    // retornar el componente
    return (

        // <div className="col-3"><p>{props.nombre}</p>
        // </div>

        <div className="col-12 col-sm-6 col-md- col-lg-3  mb-3 mt-3   ml-3 ">
            <div className="card  color-letra sombras h-100 background " >
                {/* <img src={imagen} className="card-img-top  w-75 text-align-center p-4 m-4 " alt="..." /> */}
                <img src={imagen} className="card-img-top   text-align-center  imgProducto " alt="Imagen del producto" />
                <div className="card-body">
                    <h2 className='card-text'>{nombre}</h2>
                    {/* <p className="card-text">{nombre}</p> */}
                    
                    <p className='card-text'>Nombre. <span>{nombre}</span></p>
                    <p className='card-text'>descripcion. <span  >{descripcion}</span></p>
                    <p className='card-text'>precio. <span  >{precio}</span></p>

                    <p className='card-text'><span ><a  alt=""> Añadir al carrito</a></span></p>
                </div>
            </div>
        </div>
    );
}
export default Tarjeta;