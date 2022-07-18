
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * child of TotalCard.js to handle checkout 
 * @param {total} 
 * @returns 
 */
function CheckOutCard({total}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Check Out
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Trav's Taco Truck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your purchase your total is ${total}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Purchase</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckOutCard