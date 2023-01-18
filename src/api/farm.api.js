const farms = async () => {
  try {
      let response = await fetch('farm.json',{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            })
      return await response.json()
  } catch(err) {
      console.log(err)
  }
}


export {farms}