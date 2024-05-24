import React,{useState,useEffect} from 'react'
import {
    Button,
    Container,
    Dropdown,
    FloatingLabel,
    Form,
    FormLabel,
    Modal,
    Table,
    ProgressBar,
  } from "react-bootstrap";
  import axios from 'axios';


const VendorAddedProductCart = () => {

    const [ProductList, setProductList] = useState([]);

    const getProductList = () => {
        axios
          .get("http://localhost:8521/api/vendor/productList")
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
        <div className='Table-container'>
        <Table className="table " responsive style={{ width: "1500px" }}>
          <thead>
            <tr className="admin-table-head">
            <th className="fw-bold">Vendor Name</th>
            <th className="fw-bold">Product Image</th>
              <th className="fw-bold">Product Name</th>
              <th className="fw-bold">Product ID</th>
              <th className="fw-bold">Vendor Proposed Quantity</th>
              <th className="fw-bold">Vendor Proposed Price</th>
              <th className="fw-bold">Admin Requirement</th>
              <th className="fw-bold">Admin Proposed Price</th>
              <th className="fw-bold">BUY NOW </th>
            </tr>
          </thead>

          <tbody>
            {ProductList?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?.productName}</td>  {/*vendor name here */}
                  <td>
                    <div><img src="https://www.rajivdixits.com/cdn/shop/files/patanjali-chyawanprash-1-kg.png?v=1685692110" style={{height:"170px"}} /></div>
                  </td>
                  <td>{item?.productName}</td>
                  <td>Product id: -112</td>
{/* vendor price input */}
                
{/* vendor price input ends */}
                  <td>{item?.productPrice}</td>
                  {/* <td>{item?.currencyFormat}</td>
                  <td>{item?.productType}</td> */}
                  <td>{item?.manufacturingDate}</td>
                  <td>{item?.expiryDate}</td>
                  <td>{item?.discount}</td>
                  {/* <td>{item?.packSize}</td>
                  <td>{item?.colour}</td>
                  <td>{item?.flavour}</td>
                  <td>{item?.fragrance}</td>
                  <td>{item?.variant}</td> */}
                  <td><div className="p-2"  >dfgs</div></td>
                  {/* <td>{item?.brand}</td>
                  <td>{item?.countryOfOrigin}</td>
                  <td>{item?.manufacturercompanyname}</td>
                  <td>{item?.manufactureraddress}</td>
                  <td>{item?.stock}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
    </div>
  )
}

export default VendorAddedProductCart