export const getParametro = (parametro) => {

    const url = `http://localhost:3001/parametro/${parametro}`;   
    
    const id =  JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    console.log("esto es la url : " + url);
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
    }
  
    try {
        return fetch(url, options)
            .then(response => response.json());
            

    }catch (error) {    
        console.error(error);
    }
   
}