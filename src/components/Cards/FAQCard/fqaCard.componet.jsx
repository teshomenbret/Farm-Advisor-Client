import React from 'react'


export default function FAQCard({faq}){
    return (
        <div>
            <p>{faq.question}</p>
            <p>{faq.ansower}</p>
        </div>
        
    )
}

