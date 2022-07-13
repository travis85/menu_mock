import { Toast } from 'bootstrap'
import React, { useState } from 'react'
import './TotalCard.css'


export default function TotalCard({items , total}) {
    
    
    console.log(items,total )
    return (
        <>
            
        <div>
                <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        { total}
                            
                    </li>
                )
            })}
        </ul>
        </div>
        </>
        
        
    )
}
