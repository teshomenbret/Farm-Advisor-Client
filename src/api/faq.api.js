    
  const faqsList = async () => {
    try {
        let response = await fetch('http://localhost:3000/faqs',{
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
  
  
  export {faqsList}