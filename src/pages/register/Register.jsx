import { useEffect, useState } from "react";
import { post } from "../../services/post";
import './register.css';

export const Register = () => {

    //  const { register } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});

    function limpiarCampos() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
    }

    // async function register() {
    //     await axios.get('localhost:8000/sanctum/csrf-cookie');

    //     axios
    //         .post('http://cromawave.com/register', {
    //             name,
    //             email,
    //             password,
    //             password_confirmation
    //         })
    //         .then(() => mutate())
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error

    //             setErrors(error.response.data.errors)
    //         });
    // }

    function submitForm(event) {
        event.preventDefault();



        console.log(event.target.name.value);
        console.log({ name, email, password, password_confirmation, errors });
        // fetch('http://cromawave.com/sanctum/csrf-cookie');
        post('http://cromawave.com/api/register', { name, email, password, password_confirmation });

        // post('http://cromawave.com/register', { name, email, password, password_confirmation });
        console.log("enviando formulario");



    }

    //   async  function submitForm(event) {
    //         event.preventDefault();
    //         console.log({ name, email, password, password_confirmation, errors });
    //        // register(name, email, password, password_confirmation, setErrors);
    //        // limpiarCampos();
    //        await fetch('http://cromawave.com/sanctum/csrf-cookie');

    //          await fetch('http://cromawave.com/register',{
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //               'Accept': 'application/json', 

    //             },
    //             body: JSON.stringify({'name':name, 'email':email, 'password':password})        
    //           });
    //     }

    return (
        <div className="  col-4   offset-4   ml-2   z-index-2  sombras background color-letra margin-top pt-2 pb-5">

            <form className="row g-2 justify-content-center" onSubmit={submitForm}>

                <div className="col-8">
                    <h1 className="">Register</h1>
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
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

                <div className="col-md-8">
                    <label htmlFor="password_confirmation" className="form-label">confirmar la contraseña</label>
                    <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" placeholder="confirmar la contraseña"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)} />
                </div>



                <div className="text-center pt-4">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

