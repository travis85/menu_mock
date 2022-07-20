
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './checkOutCard.css'

/**
 * child of TotalCard.js to handle checkout 
 * @param {total} 
 * @returns 
 */
function CheckOutCard({total, clearItemsFunction}) {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false)
    clearItemsFunction()
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id='checkOutButton'>
        Check Out
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id='model'
        >
        <Modal.Header >
            <Modal.Title>Your Total is { total }</Modal.Title>
        </Modal.Header>
        <Form style={{padding:"2px"}}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Credit Card#</Form.Label>
            <Form.Control type="text" placeholder="Credit Card" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Check type="checkbox" label="Visa" />
            <Form.Check type="checkbox" label="Master Card" />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Purchase</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckOutCard