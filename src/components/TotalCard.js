import React from 'react'
import './TotalCard.css'
import MenuTable from './MenuTable'
import { currencyFormatter } from '../assets/currencyFormatter'
import CheckOutCard from './CheckOutCard'

/**
 * Child of ItemCard.js to display all of the selected items and there total
 * @param {total , items, }
 * @returns 
 */
export default function TotalCard({ total, items, clearItemsFunction}) {

    return (
        <>
        <div>
            <MenuTable items={total, items}/>
        </div>
        <div>
            <p><strong>Total:</strong> <span>{currencyFormatter.format(total)}</span></p>
                <CheckOutCard
                    total={total}
                    clearItemsFunction={clearItemsFunction}

                />
        </div>
        </>
    )
}
