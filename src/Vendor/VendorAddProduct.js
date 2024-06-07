import {
  faCancel,
  faDownload,
  faFilter,
  faPlus,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const VendorAddProducts = () => {
  const navigate = useNavigate();
  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const [show, setShow] = useState(false);
  // const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const viewClose = () => setShow(false);
  const viewShow = () => setShow(true);

  // const handleClose = () => setShow1(false);
  // const handleShow = () => setShow1(true);

  const deleteBtnClose = () => setShow2(false);
  const deleteBtnShow = () => setShow2(true);

  const [ProductList, setProductList] = useState([]);

  const getProductList = () => {
    axios
      .get("http://localhost:8521/api/vendor/productList")
      .then(function (response) {
        // handle success
        setProductList(
          response.data.allProducts?.filter(
            (item) => item?.vendorid?.vendorId === Vendor?.vendorId
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  console.log("ProductList", ProductList);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Add Products
      </h4>

      <Container>
        <div className="row mb-3">
          <div className="col-lg-4 d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <FontAwesomeIcon icon={faUpload} /> Export
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Export CSV</Dropdown.Item>
                <Dropdown.Item href="#">Export JSON</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <p>
              <Button variant="danger" size="md" active>
                <FontAwesomeIcon icon={faDownload} /> Import
              </Button>
            </p>
          </div>

          <div className="col-lg-8  d-flex gap-2">
            <Form className="">
              <Form.Control
                style={{ width: "400px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-primary">Search</Button> */}
            </Form>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FontAwesomeIcon icon={faFilter} /> Filtered By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Last 1 Month</Dropdown.Item>
                <Dropdown.Item href="#">Last 6 Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button
              className="all-bg-green"
              onClick={() => navigate("/VendorAddProductsModal")}
            >
              <FontAwesomeIcon icon={faPlus} /> Add Product
            </Button>
          </div>
        </div>

        <Table className="table " responsive style={{ width: "1500px" }}>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">productName</th>
              <th className="fw-bold">productPrice</th>
              <th className="fw-bold">currencyFormat</th>
              <th className="fw-bold">productType</th>
              <th className="fw-bold">manufacturingDate</th>
              <th className="fw-bold">expiryDate</th>
              <th className="fw-bold">discount </th>
              <th className="fw-bold">productSize </th>
              <th className="fw-bold">packSize </th>
              <th className="fw-bold">colour </th>
              <th className="fw-bold">flavour </th>
              <th className="fw-bold">fragrance </th>
              <th className="fw-bold">variant </th>
              <th className="fw-bold">description </th>
              <th className="fw-bold">brand </th>
              <th className="fw-bold">countryOfOrigin </th>
              <th className="fw-bold">manufacturercompanyname </th>
              <th className="fw-bold">manufactureraddress </th>
              <th className="fw-bold">stock </th>
            </tr>
          </thead>

          <tbody>
            {ProductList?.map((item) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?.productName}</td>
                  <td>{item?.productPrice}</td>
                  <td>{item?.currencyFormat}</td>
                  <td>{item?.productType}</td>
                  <td>{item?.manufacturingDate}</td>
                  <td>{item?.expiryDate}</td>
                  <td>{item?.discount}</td>
                  <td>{item?.productSize}</td>
                  <td>{item?.packSize}</td>
                  <td>{item?.colour}</td>
                  <td>{item?.flavour}</td>
                  <td>{item?.fragrance}</td>
                  <td>{item?.variant}</td>
                  <td>
                    <p style={{ height: "100px", overflowX: "scroll" }}>
                      {item?.description}
                    </p>
                  </td>
                  <td>{item?.brand}</td>
                  <td>{item?.countryOfOrigin}</td>
                  <td>{item?.manufacturercompanyname}</td>
                  <td>{item?.manufactureraddress}</td>
                  <td>{item?.stock}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>

      {/* VIEW MODAL */}

      <Modal
        show={show}
        onHide={viewClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold " style={{ color: "#208b8c" }}>
            Investigation Equipment Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              <tr>
                <td className="col-md-2">
                  <strong>Category:</strong>
                </td>
                <td className="col-md-3">Radiology</td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Test Name:</strong>
                </td>
                <td className="col-md-3">
                  ERYTHROCYTE SEDIMENTATION RATE - ESR
                </td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Department:</strong>
                </td>
                <td className="col-md-3">Biochemistry</td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Sample:</strong>
                </td>
                <td className="col-md-3">BLOOD (EDTA)</td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Method:</strong>
                </td>
                <td className="col-md-3">Westergren Method</td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Price:</strong>
                </td>
                <td className="col-md-3">40.00</td>
              </tr>
              <tr>
                <td className="col-md-2">
                  <strong>Description:</strong>
                </td>
                <td className="col-md-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, neque.
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="fw-bold text-dark">Result :</h4>

          <table class="table table-bordered">
            <thead class="bg-md-default">
              <tr>
                <th
                  width="20%"
                  style={{ color: "#208b8c", fontWeight: "bold" }}
                >
                  Result Name
                </th>
                <th
                  width="10%"
                  style={{ color: "#208b8c", fontWeight: "bold" }}
                >
                  Order
                </th>
                <th
                  width="10%"
                  style={{ color: "#208b8c", fontWeight: "bold" }}
                >
                  Unit
                </th>
                <th
                  width="10%"
                  style={{ color: "#208b8c", fontWeight: "bold" }}
                >
                  Formula
                </th>
                <th
                  width="40%"
                  style={{ color: "#208b8c", fontWeight: "bold" }}
                >
                  Normal Values
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ERYTHROCYTE SEDIMENTATION RATE - ESR</td>
                <td>1</td>
                <td>mg/day</td>
                <td>--</td>
                <td>500 - 2000 mg/day</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={viewClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}

      <Modal
        show={show2}
        onHide={deleteBtnClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="./img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delet
          </Button>
          <Button variant="success" onClick={deleteBtnClose}>
            Cancle
          </Button>

          {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
