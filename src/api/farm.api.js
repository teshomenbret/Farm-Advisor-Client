
const farms = async () => {
    try {
        let response = await fetch('https://64cb-197-156-111-234.ngrok.io/api/farms',{
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
  
  const create = async (farm) => {
    try {
        let response = await fetch('https://64cb-197-156-111-234.ngrok.io/api/farms' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data; boundary=something',
            // 'Authorization': 'Bearer ' + credentials.t
        },
            body: farm
      })
        return await response.json()
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