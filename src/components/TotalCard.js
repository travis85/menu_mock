import React from 'react'
import './TotalCard.css'
import MenuTable from './MenuTable'
import { currencyFormatter } from '../assets/currencyFormatter'

export default function TotalCard({total, items}) {
        
    return (
        <>
        <div>
            <MenuTable items={total, items}/>
        </div>
        <div>
            <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
        </div>
        </>
    )
}
