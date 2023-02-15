
const farms = async () => {
    try {
        let response = await fetch('http://localhost:3000/farms/api/farms',{
                headers : { 
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
        let response = await fetch('http://localhost:3000/farms/api/farms' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
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