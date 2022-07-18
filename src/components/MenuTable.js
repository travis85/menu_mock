import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

function MenuTable({ items }) {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default MenuTable