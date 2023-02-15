const fields = async (id) => {
    try {
        let response = await fetch(`http://localhost:3000/fields/${id}?_embed=sensors`,{
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
//   http://localhost:3000/fields/1?_embed=sensors
  const createField = async (field) => {
    try {
        let response = await fetch('http://64cb-197-156-111-234.ngrok.io/api/farmFields' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials.t
        },
            body: field
      })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  
  const updateField = async (field, id,credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/fields/'${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + credentials
        },
            body: JSON.stringify(field)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
        return {
            error:err.message
        }
    }
  }  
  
  const removeField = async (id, credentials) => {
    try {
        let response = await fetch(`http://localhost:3000/fields/'${id}`, {
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
  
  
  
  export {fields, createField, removeField, updateField }