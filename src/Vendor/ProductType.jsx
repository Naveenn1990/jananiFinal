import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Import Form and Form.Label
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import './ProductType.css';

const ProductType = () => {
  const [show, setShow] = useState(false); //for madal to hide and show 
  const [productTypes, setProductTypes] = useState([]);
  const [newProductType, setNewProductType] = useState('');  //takes the enter the product type data 

  const handleClose = () => {
    setShow(false);
    setNewProductType('');
  };

  const handleShow = () => setShow(true);

  const handleAddProductType = () => {
    if (newProductType.trim() !== '') {
      setProductTypes([...productTypes, newProductType.trim()]);
      handleClose();
    }
  };

  return (
    <>
      <div className='p-4 fw-bold h3'>Product Type</div>
      <div className="buttoncom d-flex justify-content-end p-3"> 
        <Button onClick={handleShow} variant="warning">Add Product</Button>
      </div>

      <div className='Product-Type'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productTypes.map((type, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{type}</td>
                <td>
                  <FaEdit className="edit-icon" />
                  <MdDelete className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label className='text-light'>Enter Product Type</Form.Label> {/* Use Form.Label here */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Type"
            value={newProductType}
            onChange={(e) => setNewProductType(e.target.value)}
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddProductType}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductType;
