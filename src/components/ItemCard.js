import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Menu } from '../assets/Menu.js'

import { useState } from 'react'
import TotalCard from './TotalCard.js'
import './ItemCard.css'

export default function ItemCard() {
  let [items, setItems] = useState([])
  let [total, setTotal] = useState(0)

  function add(number,item) {
    setTotal = total += number
    setItems([...items, item])
        
    }
    function subtract(number) {
      setTotal = total -= number
        
    }

  

  return (
    <>
      <div id='mainDiv'>
        <ul>
        {Menu.map((item) => {
          return (
            <li key={item.id}>
              <Card id='card' key={item.id}>
                <Card.Img variant="top" src={item.pic} />
                <Card.Body>
                <Card.Title>{item.name }</Card.Title>
                  <Card.Text>
                    ${item.price}
                  </Card.Text>
                  <Button variant="primary" onClick={()=>add(item.price, item)}>Add Item</Button>
                </Card.Body>
              </Card>
            </li>
          )
        })}
          </ul>
        <div>
          <TotalCard
            items={items}
            total ={total}
          />
        </div>  
      </div>
      
     
      
   
    </>
    
  )
}
