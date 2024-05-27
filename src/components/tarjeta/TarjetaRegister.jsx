 import '../components/Tarjeta/tarjeta.css';
const TarjetaRegister = (props) => {

    // asignas las propiedades del objeto a variables
    const { id, name, email, } = props.obj;

    // funcion para cambiar el formato de la fecha
    function cambiarElFormatoDelaFecha(fecha) {

        let cambiarElFormatoDelaFecha = fecha.substr(8, 2) + "-" + fecha.substr(5, 2) + "-" + fecha.substr(0, 4);

        return cambiarElFormatoDelaFecha;
    }

    // retornar el componente
    return (

        // <div className="col-3"><p>{props.nombre}</p>
        // </div>

        // <div className="col-12 col-sm-6 col-md-4 col-lg-3  mb-3 mt-3   ml-3 ">
        //     <div className="card  color-letra sombras h-100 background " >
              
               
        //         <div className="card-body">
        //             <h2 className='card-text'>{name}</h2>
        //             <div className=" pt-4 h-75 offset-4 w-90 col-4 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
        //     <h1 className="mt-5">Register</h1>
        //     <form className="row g-3" onSubmit={submitForm}>
        //         <div className="col-8">
        //             <label htmlFor="name" className="form-label">Nombre</label>
        //             <input type="text" className="form-control" id="name" name="name" placeholder="Nombre"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)} />
        //         </div>
        //         <div className="col-md-8">
        //             <label htmlFor="email" className="form-label">Email</label>
        //             <input type="email" className="form-control" id="email" name="email" placeholder="Email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)} />
        //         </div>
        //         <div className="col-md-8">
        //             <label htmlFor="passowrd" className="form-label">Contraseña</label>
        //             <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)} />
        //         </div>

        //         <div className="col-md-8">
        //             <label htmlFor="password_confirmation" className="form-label">confirmar la contraseña</label>
        //             <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" placeholder="confirmar la contraseña"
        //                 value={password_confirmation}
        //                 onChange={(e) => setPasswordConfirmation(e.target.value)} />
        //         </div>



        //         <div className="offset-3 col-8">
        //             <button type="submit" className="btn btn-primary">Enviar</button>
        //         </div>
        //     </form>
        // </div>
                    
                    
                    
        //         </div>
        //     </div>
        // </div>
    );
}
export default TarjetaRegister;