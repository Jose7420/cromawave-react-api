import { useState } from "react";
import { post } from "../../services/post";
import './login.css';



export const Login = () => {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    function limpiarCampos() {

        setEmail('');
        setPassword('');

    }

    // function submitForm(e) {
    //     e.preventDefault();
    //     console.log("enviando formulario");
    // }


    async function submitForm(event) {

        
        event.preventDefault();
        console.log("esto es dentro de login" + { email, password });
       
       
        // await fetch('http://cromawave.com/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json', // Laravel espera este encabezado
        //     },
        //     body: JSON.stringify({ 'email': email, 'password': password })
        // });
        
        // await fetch('http://cromawave.com/sanctum/csrf-cookie');
       const data = await post('http://cromawave.com/api/login', { email, password });
        // if(data.errors){
        //     setErrors(data.errors);
        //     console.log(data.errors);
            
        // }else{
        //     console.log(data.user.id + " " + data.token); 
        // }

        if(data.errors){
            console.log(data.errors.email);
            alert("algun dato introducido no es correcto");
        }else{
            console.log(data.user.id + " " + data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', JSON.stringify(data.token));
            window.location.href = '/';
        }
       

       

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
        <div className="  col-4   offset-4   ml-2   z-index-2  sombras background color-letra margin-top-login pt-2 pb-5 ">

            <form className="row g-3 justify-content-center " onSubmit={submitForm}>

                <div className="col-8 pt-2 pb-2">
                    <h1 className="">Login</h1>
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

                



                <div className="text-center pt-4">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

