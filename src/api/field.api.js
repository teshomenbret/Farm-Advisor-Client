const fields = async () => {
    try {
        let response = await fetch(`http://localhost:3000/api/fields/`,{
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
  const createField = async (field) => {
    try {
        let response = await fetch('http://localhost:3000/api/farmFields' , {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
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
        let response = await fetch(`http://localhost:3000/api/fields/'${id}`, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
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
        let response = await fetch(`http://localhost:3000/api/fields`, {
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
  
  
  
  export {fields, createField, removeField, updateField }