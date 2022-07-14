import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

function MenuTable({ total, items }) {
  let [count, SetCount] = useState(1)

  // function countItems(accu, item){
  //   if (item in accu) {
  //       accu[item] += 1
  //   } else {
  //       accu[item] = 1
  //   }
  //   return accu
      
  // } 


  function add() {
    SetCount(count++)

  }
  
  function minus() {
    SetCount(count--)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <p>
                <button onClick={ add }>+</button>
                {count}
                <button onClick={ minus }>-</button>
              </p>
              
            </tr>
          )
        })}
      </tbody>
      
      
    </Table>
  );
}

export default MenuTable