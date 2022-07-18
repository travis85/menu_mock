import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Menu } from '../assets/Menu.js'
import TotalCard from './TotalCard.js'
import './ItemCard.css'

/**
 * list of all menu items
*/
export default function ItemCard() {
  let [items, setItems] = useState([])
  let [total, setTotal] = useState(0)

  function addToTable(number, item) {
    setItems([...items, item])
    setTotal(total += Number(number))
  }

  function clearItemsFromCheckOut() {
    setItems([])
    setTotal(0)
  }
  // function subtract(number) {
  //   setItems([...items, item])
  //   setTotal(total -= Number(number))
      
  // }

  return (
    <>
      <div id='mainDiv'>
        <div id='itemDiv'>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco1.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco1.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco1.price}
              <Button id='button' variant="primary" onClick={()=>addToTable(Menu[0].taco1.price, Menu[0].taco1.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco2.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco2.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco2.price}
              <Button id='button' variant="primary" onClick={()=>addToTable(Menu[0].taco2.price, Menu[0].taco2.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco3.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco3.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco3.price}
              <Button id='button' variant="primary" onClick={()=>addToTable(Menu[0].taco3.price, Menu[0].taco3.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco4.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco4.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco4.price}
              <Button id='button' variant="primary" onClick={()=>addToTable(Menu[0].taco4.price, Menu[0].taco4.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco5.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco5.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco5.price}
              <Button id='button' variant="primary" onClick={()=>addToTable(Menu[0].taco5.price, Menu[0].taco5.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
          <Card.Body>
          <Card.Title id='title'>{Menu[0].taco6.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco6.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco6.price}
              <Button id='button' variant="primary" onClick={() => addToTable(Menu[0].taco6.price, Menu[0].taco6.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card id='card'>
        <Card.Body>
          <Card.Title id='title'>{Menu[0].taco1.name}</Card.Title>
          <Card.Text id='desc'>{Menu[0].taco1.desc}</Card.Text>
            <Card.Text>
              ${Menu[0].taco1.price}
              <Button id='button'  onClick={()=>addToTable(Menu[0].taco1.price, Menu[0].taco1.name)}>Add Item</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div>
          <TotalCard
            items={items}
            total={total}
            clearItemsFunction ={clearItemsFromCheckOut}
          />
        </div>  
      </div>
    </>
  )
}
