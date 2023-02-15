
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
        fetch('http://4ec9-2a0d-5600-42-00-5be7.ngrok.io/api/users' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials.t
        },
            body: user
      }).then((res) => {
        console.log("res",res)
        res.json()});
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