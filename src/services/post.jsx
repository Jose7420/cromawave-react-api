export const post = async (url, data) => {
    console.log("Datos enviados", data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'X-CSRF-TOKEN': csrf_token,
        },
        body: JSON.stringify(data)
    }
    try {
        return fetch(url, options)
            .then(response => {

               
                //const data = response.json();
                if (response.status === 401) {
                    console.log("Usuario no autorizado");
                    
                } else if(response.status === 200) {
                    console.log("Usuario autorizado");
                   
                    
                    
                }
                //return data;
                 return response.json();
                

            });
           
    } catch (error) {
        console.error(error);
    }

    // if(!response.ok){
    //     const {message} = await response.json();
    //     throw Error(message);

    // }else{
    //     const user = await response.json();
    //     localStorage.setItem('user', JSON.stringify(user));
    //     console.log(user);
    // }

   // console.log(user);
}