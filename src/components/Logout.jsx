export const Logout = () => {

// function logout() {
       
        //fetch('http://cromawave.com/sanctum/csrf-cookie');
       fetch ('http://cromawave.com/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
            }
        });

        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';

    // }
    // return (
    //     <div>
    //         <h1>Logout</h1>
    //         <button className="btn btn-primary" onClick={logout}>Logout</button>
    //     </div>
    // )
}