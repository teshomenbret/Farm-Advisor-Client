const sensors = async () => {
    try {
        let response = await fetch('http://localhost:3000/sensors',{
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
  
  const create = async (sensor) => {
    try {
        let response = await fetch('http://localhost:3000/sensors' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials.t
        },
            body: JSON.stringify(sensor)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  
  const updateSensor = async (sensor, id,credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/sensors/'${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials
        },
            body: JSON.stringify(sensor)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  const removeSensor = async (id, credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/sensors/'${id}`, {
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
  
  
  
  export {sensors, create, updateSensor, removeSensor}