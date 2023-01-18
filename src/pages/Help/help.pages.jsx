import React, {useState, useEffect} from 'react'
import {faqsList} from '../../api/farm.api'
import FAQCard from '../../components/Cards/FAQCard/fqaCard.componet';

export default function  Help(){
    const [faqs,setData]=useState();
    useEffect(()=>{
        faqsList().then(faq =>setData(faq))
      },[])
    return(
        <div>

            {   faqs&&faqs.map((faq,index ) =>( 
                    <div key={index}>
                        <FAQCard faq ={faq} />
                    </div>  
                    ))
            }

        </div>
    )
    
}
