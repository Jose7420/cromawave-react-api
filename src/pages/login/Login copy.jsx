import { useState } from "react";
import { post } from "../../services/post";

export const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    function limpiarCampos() {

        setEmail('');
        setPassword('');

    }

    function submitForm(e) {
        e.preventDefault();
        console.log("enviando formulario");
    }


    async function submitForm(event) {


        event.preventDefault();
        console.log("esto es dentro de login" + { email, password });
        fetch('http://cromawave.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // Laravel espera este encabezado
            },
            body: JSON.stringify({ 'email': email, 'password': password })
        });
        
        // await fetch('http://cromawave.com/sanctum/csrf-cookie');
        // await post('http://cromawave.com/api/login', { email, password });

        // // register( email, password);
        // // limpiarCampos();
        // await fetch('http://cromawave.com/sanctum/csrf-cookie');

        // await fetch('http://cromawave.com/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json', // Laravel espera este encabezado
               
        //     },
        //     body: JSON.stringify({ 'email': email, 'password': password })
        // });
    }

    return (
        <div className=" pt-4 h-75 offset-4 w-90 col-4 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
            <h1 className="mt-5">Login</h1>
            <form className="row g-3" onSubmit={submitForm}>

                <div className="col-md-8">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-8">
                    <label htmlFor="passowrd" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>




                <div className="offset-3 col-8">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>

        </div>
    )
}

