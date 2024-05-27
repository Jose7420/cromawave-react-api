import { useEffect, useState } from "react";
import { post } from "../../services/post";


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
         post('http://cromawave.com/api/register', { name, email, password, password_confirmation});
       
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
        <div className=" pt-4 h-75 offset-4 w-90 col-4 ml-2 pt-0 position-abolute z-index-n2 mt-5 ">
            <h1 className="mt-5">Register</h1>
            <form className="row g-3" onSubmit={submitForm}>
                <div className="col-8">
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



                <div className="offset-3 col-8">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}

{/* <form className="row g-3">
<div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
</div>
<div className="col-md-6">
    <label for="passowrd" className="form-label">Contraseña</label>
    <input type="password" className="form-control" id="password" />
</div>
<div className="col-12">
    <label for="inputNombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
</div>
<div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
</div>
<div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" />
</div>
<div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
<div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
</div>
 <div className="col-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" for="gridCheck">
            Check me out
        </label>
    </div>
</div> 
<div className="col-12">
    <button type="submit" className="btn btn-primary">Enviar</button>
</div>
</form> 
*/}