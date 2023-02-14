
const farms = async () => {
    try {
        let response = await fetch('http://localhost:3000/farms?_embed=fields',{
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }
  
  const create = async (user) => {
    try {
        fetch('https://c1d9-149-36-50-138.ngrok.io/api/users' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials.t
        },
            body: user
      }).then((res) => res.json());
        // return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  
  const update = async (farm, id,credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/farms/'${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials
        },
            body: JSON.stringify(farm)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  const remove = async (id, credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/farms/'${id}`, {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + credentials.t
        }
        })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }
  
  
  
  export {farms, create ,remove, update }