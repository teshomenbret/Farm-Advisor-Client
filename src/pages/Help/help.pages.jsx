import React, {useState, useEffect} from 'react'
import {faqsList} from '../../api/farm.api'
import FAQCard from '../../components/Cards/FAQCard/fqaCard.componet';

export default function  Help(){
    const [faqs,setData]=useState();
    useEffect(()=>{
        faqsList().then(faq =>setData(faq))
      },[])
    return(
        <div className='bg-gray-50 lg:mx-96 sm:mx-80 md:mx-10'>

            {   faqs&&faqs.map((faq,index ) =>( 
                    <div key={index} >
                        <FAQCard faq ={faq} />
                    </div>  
                    ))
            }

        </div>
    )
    
}
