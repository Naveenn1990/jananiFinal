import { faFilter } from "@fortawesome/free-solid-svg-icons";
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
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import moment from "moment";

const VendorAddedProducts = () => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  const [SelectedProduct, setSelectedProduct] = useState({});
  const [show, setShow] = useState(false);
  const ReadMoreClose = (item) => {
    setShow(true);
    setSelectedProduct(item);
  };
  const handleClose = () => setShow(false);

  const [ProductList, setProductList] = useState([]);
  const getProductList = () => {
    axios
      .get("http://localhost:8521/api/vendor/productList")
      .then(function (response) {
        setProductList(response.data.allProducts);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  const [qnty, setqnty] = useState(1);

  function addqantity() {
    setqnty(qnty + 1);
  }

  function subqantity() {
    if (qnty > 1) {
      setqnty(qnty - 1);
    }
  }

  const AddToCart = async (item) => {
    try {
      const config = {
        url: "/vendor/adminaddtocart",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          productid: item?._id,
          quantity: 1,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getProductList();
        getaddtocart();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [getAddtocart, setgetAddtocart] = useState([]);
  const getaddtocart = () => {
    axios
      .get("http://localhost:8521/api/vendor/getaddtocartdata")
      .then(function (response) {
        setgetAddtocart(response.data.addtocart);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductList();
    getaddtocart();
  }, []);

  console.log("SelectedProduct", SelectedProduct);
  return (
    <div className="Vatsal">
      <div>
        <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
          Add Products
        </h4>

        <Container>
          <div className="row mb-3">
            <div className="col-lg-8  d-flex gap-2">
              <Form className="">
                <Form.Control
                  style={{ width: "400px" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FontAwesomeIcon icon={faFilter} /> Filtered By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Tablet</Dropdown.Item>
                  <Dropdown.Item href="#">Syrup</Dropdown.Item>
                  <Dropdown.Item href="#">Other Drugs</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button className="all-bg-green">Search Product</Button>

              <div className="cart-badge holder col-lg-2 d-flex gap-2  justify-content-end px-2">
                <Link to="../admin/VendorAddedProductCart">
                  <IconButton aria-label="cart">
                    <StyledBadge
                      badgeContent={getAddtocart?.length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>

          <Table
            className="table "
            responsive
            style={{ width: "1500px" }}
            bordered
          >
            <thead>
              <tr className="admin-table-head">
                <th className="fw-bold">
                  <div style={{ width: "20%" }}>productName</div>
                </th>
                <th className="fw-bold">manufacturingDate</th>

                <th className="fw-bold">expiryDate</th>
                <th className="fw-bold">Quantity(Stock)</th>
                <th className="fw-bold">productPrice</th>
                <th className="fw-bold">Selling Price</th>
                <th className="fw-bold">Add To Cart </th>
                <th className="fw-bold">description </th>
              </tr>
            </thead>

            <tbody>
              {ProductList?.map((item) => {
                return (
                  <tr className="admin-table-row">
                    <td>
                      <div style={{ width: "" }}>{item?.productName}</div>
                    </td>
                    <td>
                      {moment(item?.manufacturingDate).format("DD/MM/YYYY")}
                    </td>
                    <td>{moment(item?.expiryDate).format("DD/MM/YYYY")}</td>
                    <td>{item?.stock}</td>
                    <td>
                      <div style={{ width: "110px" }}>
                        <p>A.Price = ₹{item?.productPrice} </p>
                        <p>Discount = {item?.discount}% </p>
                      </div>
                    </td>

                    <td>
                      <p>
                        ₹{" "}
                        {Number(item?.productPrice) -
                          (Number(item?.productPrice) *
                            Number(item?.discount)) /
                            100}
                      </p>
                    </td>
                    <td>
                      <div className="p-2">
                        <Button
                          variant="success"
                          onClick={() => AddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </td>
                    <td>
                      <div className="p-2" onClick={() => ReadMoreClose(item)}>
                        <InfoIcon />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>

        {/* INfo icon modal */}
        <Modal size="lg" show={show} onHide={ReadMoreClose}>
          <Modal.Header className="all-bg-green text-light">
            <Modal.Title>Product Details</Modal.Title>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body className="all-bg-green ">
            <div className="row" style={{ color: "white" }}>
              <div className="col-lg-4">
                <img
                  alt=""
                  src={`http://localhost:8521/Vendor/${SelectedProduct?.vendorid?.profilePic}`}
                  style={{ width: "50%" }}
                />
                <div style={{ border: "1px solid lightgrey" }}>
                  <h6
                    style={{
                      textAlign: "center",
                      padding: "4% 0%",
                      backgroundColor: "lightblue",
                    }}
                  >
                    ABOUT VENDOR
                  </h6>

                  <h6
                    style={{
                      paddingLeft: "4%",
                      fontSize: "14px",
                      marginTop: "2%",
                    }}
                  >
                    <b>NAME</b> :{SelectedProduct?.vendorid?.fname}&nbsp;
                    {SelectedProduct?.vendorid?.lname}
                  </h6>
                  <h6
                    style={{
                      paddingLeft: "4%",
                      fontSize: "14px",
                      marginTop: "2%",
                    }}
                  >
                    <b>EmailID</b> : {SelectedProduct?.vendorid?.email}
                  </h6>
                  <h6
                    style={{
                      paddingLeft: "4%",
                      fontSize: "14px",
                      marginTop: "2%",
                    }}
                  >
                    <b>Mobile</b> : {SelectedProduct?.vendorid?.phone}
                  </h6>
                  <h6
                    style={{
                      paddingLeft: "4%",
                      fontSize: "14px",
                      marginTop: "2%",
                    }}
                  >
                    <b>vendor Id</b> : {SelectedProduct?.vendorid?.vendorId}
                  </h6>
                  <h6
                    style={{
                      paddingLeft: "4%",
                      fontSize: "14px",
                      marginTop: "2%",
                    }}
                  >
                    <b>Address</b> : {SelectedProduct?.vendorid?.address1},
                    {SelectedProduct?.vendorid?.city} -{" "}
                    {SelectedProduct?.vendorid?.pincode}
                  </h6>
                </div>
              </div>
              <div className="col-lg-8">
                <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                  <Row>
                    {SelectedProduct?.productImgs?.length > 0 ? (
                      <Col md={2}>
                        <img
                          alt=""
                          src={`http://localhost:8521/VendorProduct/${SelectedProduct?.productImgs[0]}`}
                          style={{ width: "100%" }}
                        />
                      </Col>
                    ) : (
                      ""
                    )}
                    <Col md={10}>
                      <p
                        style={{
                          fontSize: "14px",
                          textAlign: "justify",
                          fontWeight: "600",
                        }}
                      >
                        {SelectedProduct?.productName}
                      </p>
                      <p>
                        ({SelectedProduct?.categoryid?.categoryName} -{" "}
                        {SelectedProduct?.subcategoryid?.subcategoryName})
                      </p>
                    </Col>
                  </Row>

                  <hr></hr>
                  <p style={{ textAlign: "justify" }}>
                    {SelectedProduct?.description}
                  </p>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Manufacturer company name :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.manufacturercompanyname}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Manufacturer company Address :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.manufactureraddress}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Manufacturing Date :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.manufacturingDate}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Brand:
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.brand}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Colour :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.colour}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Country Of Origin :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.countryOfOrigin}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Flavour :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.flavour}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Fragrance :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.fragrance}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Colour :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.colour}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Colour :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.colour}</Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Colour :
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.colour}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                          <span style={{ fontSize: "14px", fontWeight: "600" }}>
                            Product Price :
                          </span>
                        </Col>
                        <Col md={6}>
                          {SelectedProduct?.productPrice} &nbsp;
                          {SelectedProduct?.currencyFormat}
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                          <span style={{ fontSize: "14px", fontWeight: "600" }}>
                            Discount :
                          </span>
                        </Col>
                        <Col md={6}>
                          {SelectedProduct?.discount}&nbsp;
                          {SelectedProduct?.currencyFormat}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default VendorAddedProducts;
