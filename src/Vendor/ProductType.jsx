import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Import Form and Form.Label
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './ProductType.css';
import axios from 'axios';

const ProductType = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

const [producttype, setproducttype] = useState("")
  const handleAddProductType = async() => {
    let obj1 = {
      vendorid:Vendor?._id,
      Producttype:producttype
    };
   try {
    const config = {
      url: "/vendor/Addproducttype",
      method: "post",
      baseURL: "http://localhost:8521/api",
      headers: { "content-type": "application/json" },
      data: obj1,
    };
    let res = await axios(config);
    if (res.status === 201) {
      alert(res.data.success)
      setproducttype("")
      handleClose()
      getAllData()
      
    }
   } catch (error) {
    console.log(error);
   }
  };
  const [productTypes, setProductTypes] = useState([]);
  const getAllData = async()=>{
    try {
      const res = await axios.get("http://localhost:8521/api/vendor/producttype")
      setProductTypes(res.data.success)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllData()
  }, [])
  
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
            {productTypes?.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item?.Producttype}</td>
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
            value={producttype}
            onChange={(e) => setproducttype(e.target.value)}
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddProductType}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductType;
