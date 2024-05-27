import '../Tarjeta/tarjeta.css';
const TarjetaUser = (props) => {

    // asignas las propiedades del objeto a variables
    const { id, name, email } = props.obj;
    console.log("esto es dentro de TarjetaUser" + props);

    // funcion para cambiar el formato de la fecha
    function cambiarElFormatoDelaFecha(fecha) {

        let cambiarElFormatoDelaFecha = fecha.substr(8, 2) + "-" + fecha.substr(5, 2) + "-" + fecha.substr(0, 4);

        return cambiarElFormatoDelaFecha;
    }

    // retornar el componente
    return (

        // <div className="col-3"><p>{props.nombre}</p>
        // </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-3 mt-3   ml-3 ">
            <div className="card  color-letra sombras h-100 background " >
              
               
                <div className="card-body">
                    <h2 className='card-text'>{name}</h2>
                    {/* <p className="card-text">{nombre}</p> */}
                    
                    <p className='card-text'>Nombre:  <span>{name}</span></p>
                    <p className='card-text'>Email:  <span  >{email}</span></p>                

                    
                </div>
            </div>
        </div>
    );
}
export default TarjetaUser;