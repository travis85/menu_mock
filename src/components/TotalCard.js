import React from 'react'
import './TotalCard.css'
import MenuTable from './MenuTable'


export default function TotalCard({total, items}) {
    
    
    
    return (
        <>
        <div>
            <MenuTable items={total, items}/>
        </div>
        <div>
            <p><strong>Total:</strong> $<span>{total}</span></p>
        </div>
        </>
    )
}