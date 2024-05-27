export function getAll(url) {
    console.log("esto es dentro de getall" + localStorage.getItem('token'));
    
    const id =  JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));

    //const URL = url + '/' + id.id;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token //localStorage.getItem('token').replace(/['"]+/g, ''),
                   }
    }
  
    try {
        return fetch(url, options)
            .then(response => {
                const data = response.json();
                // console.log(data);
                return data;
            });

    } catch (error) {
        console.error(error);
    }

}