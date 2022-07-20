import React from 'react'
import Table from 'react-bootstrap/Table';
import './TotalCard.css'

function MenuTable({ items, handleDelete }) {
  
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th style={{color: 'green'}}>Your Order</th>
        </tr>
      </thead>
      <tbody id='table'>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.item} <button onClick={() =>handleDelete(item, item.price)} id='itemButton'>x</button></td>
            </tr>
            
          )
        })}
      </tbody>
    </Table>
  );
}

export default MenuTable