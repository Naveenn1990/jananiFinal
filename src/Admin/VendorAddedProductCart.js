import React, { useState, useEffect } from 'react';
import { Button, Modal, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VendorAddedProductCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); // Function to open the modal

  const [buyingPrice, setBuyingPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [actualPrice, setActualPrice] = useState(0);

  const handleBuyingPriceChange = (e) => {
    setBuyingPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const calculateTotalAmount = () => {
    return buyingPrice * quantity;
  };

  const handleAccept = (item) => {
    // Calculate actual price based on item data
    const actualPrice = 4000; // Example: Set actual price to 4000, you can replace it with the actual logic
    setActualPrice(actualPrice);

    // Update the state to show modal and set total amount
    handleShow();
    setTotalAmount(calculateTotalAmount());
  };

  const [ProductList, setProductList] = useState([]);

  const getProductList = () => {
    axios
      .get('http://localhost:8521/api/vendor/productList')
      .then(function (response) {
        // handle success
        setProductList(response.data.allProducts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className='p-5'>
      <h4 style={{ backgroundColor: '#dae1f3' }} className='p-4 fw-bold mb-4'>
        Admin Cart
      </h4>
      <div className='py-3 py-1'>
        <Link to='/admin/VendorAddedProduct'>
          <Button variant='primary'>Go back</Button>
        </Link>
      </div>

      <div className='Table-container'>
        <Table className='table' responsive>
          <thead>
            <tr className='admin-table-head'>
              <th className='fw-bold'>Product ID</th>
              <th className='fw-bold'>Vendor Name</th>
              <th className='fw-bold'>Vendor Proposed Price</th>
              <th className='fw-bold'>Vendor Proposed Quantity</th>
              <th className='fw-bold'>Admin Final Price</th>
              <th className='fw-bold'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ProductList?.map((item, index) => {
              return (
                <tr className='admin-table-row' key={index}>
                  <td>Product id: -112</td>
                  <td>{item?.productName}</td>
                  <td>{item?.productPrice}</td>
                  <td>{item?.vendorProposedQuantity}</td>
                  <td>3000</td>
                  <td>
                    <div className='d-flex'>
                      {/* Pass the item to handleAccept function */}
                      <Button className='me-2' variant='success' onClick={() => handleAccept(item)}>
                        Accept
                      </Button>
                      <Button variant='secondary'>Cancel</Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* Info icon modal */}
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header className='all-bg-green text-light'>
            <Modal.Title>Buy Product</Modal.Title>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body className='all-bg-green'>
            <Table className='table' responsive>
              <thead>
                <tr className='admin-table-head'>
                  <th className='fw-bold'>Product ID</th>
                  <th className='fw-bold'>Vendor Name</th>
                  <th className='fw-bold'>Vendor Proposed Price</th>
                  <th className='fw-bold'>Buying Price</th>
                  <th className='fw-bold'>Vendor Proposed Quantity</th>
                  <th className='fw-bold'>Quantity</th>
                  <th className='fw-bold'>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {ProductList?.map((item, index) => {
                  return (
                    <tr className='admin-table-row' key={index}>
                      <td>Product id: -112</td>
                      <td>{item?.productName}</td>
                      <td>{item?.productPrice}</td>
                      <td>
                        <Form.Control type='number' value={buyingPrice} onChange={handleBuyingPriceChange} />
                      </td>
                      <td>{item?.vendorProposedQuantity}</td>
                      <td>
                        <Form.Control type='number' value={quantity} onChange={handleQuantityChange} />
                      </td>
                      <td>Rupees {calculateTotalAmount()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
        {/* Info icon modal */}
      </div>
    </div>
  );
};

export default VendorAddedProductCart;
