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
  ProgressBar,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";

const Labvendorproducts = () => {
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
        setProductList(
          response.data.allProducts?.filter(
            (item) => item?.vendorid?.vendorId === SelectedVendor
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [VendorList, setVendorList] = useState([]);
  const [SelectedVendor, setSelectedVendor] = useState("");
  const getAllVendors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/getvendorList"
      );
      if (res.status === 200) {
        setVendorList(
          res.data.allVendors?.filter((item) => item?.VendorType === "Lab")
        );
      }
    } catch (error) {
      console.log(error);
      // setVendorList(error.response.data.allVendors);
    }
  };

  useEffect(() => {
    getAllVendors();
    getaddtocart();
  }, []);

  useEffect(() => {
    if (SelectedVendor) {
      getProductList();
    }
  }, [SelectedVendor]);

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
    const Tamount =
      item?.productType?.toLowerCase() === "tablet" ? (
        <>
          {Number(item?.productPrice * item?.No_of_Strips) +
            (Number(item?.productPrice * item?.No_of_Strips) *
              Number(item?.CGST)) /
              100 +
            (Number(item?.productPrice * item?.No_of_Strips) *
              Number(item?.SGST)) /
              100 -
            (Number(item?.productPrice * item?.No_of_Strips) *
              Number(item?.discount)) /
              100}
        </>
      ) : (
        <>
          {Number(item?.productPrice) +
            (Number(item?.productPrice) * Number(item?.CGST)) / 100 +
            (Number(item?.productPrice) * Number(item?.SGST)) / 100 -
            (Number(item?.productPrice) * Number(item?.discount)) / 100}
        </>
      );
    try {
      const config = {
        url: "/admin/addtoLabcart",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          productid: item?._id,
          quantity: 1,
          totalamount: Tamount?.props?.children,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
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
      .get("http://localhost:8521/api/admin/getLabcart")
      .then(function (response) {
        setgetAddtocart(response.data.addtocart);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log("SelectedProduct", ProductList);
  console.log("VendorList", VendorList);
  console.log("SelectedVendor", SelectedVendor);
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
                <Link to="../admin/Labvendorproductcart">
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
          <div className="row">
            <p
              style={{ color: "#20958c", fontSize: "20px", fontWeight: "bold" }}
            >
              Select Vendor
            </p>
            <select
              className="me-2"
              style={{
                width: "400px",
                margin: "10px",
                padding: "10px",
                borderColor: "#bdbdbd",
                borderRadius: "5px",
              }}
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option>Select</option>
              {VendorList?.map((vendor) => (
                <option value={vendor?.vendorId}>
                  {vendor?.fname}&nbsp;{vendor?.lname} - ({vendor?.vendorId})
                </option>
              ))}
            </select>
          </div>
          {SelectedVendor ? (
            <Table
              className="table "
              responsive
              style={{ width: "1500px" }}
              bordered
            >
              <thead>
                <tr className="admin-table-head">
                  <th className="fw-bold">HSN No.</th>
                  <th className="fw-bold">Batch No.</th>
                  <th className="fw-bold">
                    <div style={{ width: "20%" }}>Product Name</div>
                  </th>
                  <th className="fw-bold">Manufacturing Date</th>

                  <th className="fw-bold">Expiry Date</th>
                  <th className="fw-bold">Scheme</th>
                  <th className="fw-bold">Product Price</th>
                  <th className="fw-bold">Selling Price</th>
                  {/* <th className="fw-bold">Admin Price </th>
                <th className="fw-bold">Quantity </th>
                <th className="fw-bold">Admin Final Price </th> */}
                  <th className="fw-bold">Add To Cart </th>
                  <th className="fw-bold">Description </th>
                </tr>
              </thead>

              <tbody>
                {ProductList?.map((item) => {
                  return (
                    <tr className="admin-table-row">
                      <td>{item?.HSN}</td>
                      <td>{item?.Batch}</td>
                      <td>
                        <div style={{ width: "" }}>{item?.productName}</div>
                      </td>
                      <td>
                        {moment(item?.manufacturingDate).format("DD/MM/YYYY")}
                      </td>
                      <td>{moment(item?.expiryDate).format("DD/MM/YYYY")}</td>
                      <td>{item?.Scheme ? item?.Scheme : "-"}</td>
                      <td>
                        <div style={{ width: "110px" }}>
                          <p>
                            A.Price = ₹
                            {item?.productType?.toLowerCase() === "tablet"
                              ? item?.productPrice * item?.No_of_Strips
                              : item?.productPrice}
                          </p>
                          <p>CGST = {item?.CGST}% </p>
                          <p>SGST = {item?.SGST}% </p>
                          <p>Discount = {item?.discount}% </p>
                        </div>
                      </td>

                      <td>
                        <p>
                          Selling Price = ₹{" "}
                          {item?.productType?.toLowerCase() === "tablet" ? (
                            <>
                              {Number(item?.productPrice * item?.No_of_Strips) +
                                (Number(
                                  item?.productPrice * item?.No_of_Strips
                                ) *
                                  Number(item?.CGST)) /
                                  100 +
                                (Number(
                                  item?.productPrice * item?.No_of_Strips
                                ) *
                                  Number(item?.SGST)) /
                                  100 -
                                (Number(
                                  item?.productPrice * item?.No_of_Strips
                                ) *
                                  Number(item?.discount)) /
                                  100}
                            </>
                          ) : (
                            <>
                              {Number(item?.productPrice) +
                                (Number(item?.productPrice) *
                                  Number(item?.CGST)) /
                                  100 +
                                (Number(item?.productPrice) *
                                  Number(item?.SGST)) /
                                  100 -
                                (Number(item?.productPrice) *
                                  Number(item?.discount)) /
                                  100}
                            </>
                          )}
                        </p>
                        <p>MRP = {item?.MRP} </p>
                      </td>

                      {/* <td>
                      <div style={{ width: "141px" }}>
                        <input
                          className="vi_0"
                          type="number"
                          placeholder="Enter Your Price"
                        />
                      </div>
                    </td>

                    <td>
                      <td className="d-flex rounded-pill border border-dark p-2 m-2">
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={subqantity}
                        >
                          <RemoveIcon />
                        </button>
                        <Form.Group
                          className="mb-1"
                          controlId="exampleForm.ControlInput1"
                        >
                          {qnty}
                        </Form.Group>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          onClick={addqantity}
                        >
                          <AddIcon />
                        </button>
                      </td>
                    </td>
                    <td>3000</td> */}
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
                        <div
                          className="p-2"
                          onClick={() => ReadMoreClose(item)}
                        >
                          <InfoIcon />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            ""
          )}
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
                    <Col md={6}>
                      {moment(SelectedProduct?.manufacturingDate)?.format(
                        "DD-MM-YYYY"
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        HSN No.:
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.HSN}</Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Batch No.:
                      </span>
                    </Col>
                    <Col md={6}>{SelectedProduct?.Batch}</Col>
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

                  {SelectedProduct?.productType?.toLowerCase() === "tablet" ? (
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={9}>
                            <span
                              style={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              Number of Strips/Box :
                            </span>
                          </Col>
                          <Col md={3}>{SelectedProduct?.No_of_Strips}</Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={9}>
                            <span
                              style={{ fontSize: "14px", fontWeight: "600" }}
                            >
                              Number of Tablets/strips :
                            </span>
                          </Col>
                          <Col md={3}>{SelectedProduct?.No_Tablets_strips}</Col>
                        </Row>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}

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
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                          <span style={{ fontSize: "14px", fontWeight: "600" }}>
                            CGST :
                          </span>
                        </Col>
                        <Col md={6}>
                          {SelectedProduct?.CGST} &nbsp;
                          {SelectedProduct?.currencyFormat}
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                          <span style={{ fontSize: "14px", fontWeight: "600" }}>
                            SGST :
                          </span>
                        </Col>
                        <Col md={6}>
                          {SelectedProduct?.SGST}&nbsp;
                          {SelectedProduct?.currencyFormat}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                          <span style={{ fontSize: "14px", fontWeight: "600" }}>
                            MRP :
                          </span>
                        </Col>
                        <Col md={6}>
                          {SelectedProduct?.MRP} &nbsp;
                          {SelectedProduct?.currencyFormat}
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}></Col>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col md={6}>
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Total Price :
                      </span>
                    </Col>
                    <Col md={6}>
                      {SelectedProduct?.productType?.toLowerCase() ===
                      "tablet" ? (
                        <>
                          {Number(
                            SelectedProduct?.productPrice *
                              SelectedProduct?.No_of_Strips
                          ) +
                            (Number(
                              SelectedProduct?.productPrice *
                                SelectedProduct?.No_of_Strips
                            ) *
                              Number(SelectedProduct?.CGST)) /
                              100 +
                            (Number(
                              SelectedProduct?.productPrice *
                                SelectedProduct?.No_of_Strips
                            ) *
                              Number(SelectedProduct?.SGST)) /
                              100 -
                            (Number(
                              SelectedProduct?.productPrice *
                                SelectedProduct?.No_of_Strips
                            ) *
                              Number(SelectedProduct?.discount)) /
                              100}
                        </>
                      ) : (
                        <>
                          {Number(SelectedProduct?.productPrice) +
                            (Number(SelectedProduct?.productPrice) *
                              Number(SelectedProduct?.CGST)) /
                              100 +
                            (Number(SelectedProduct?.productPrice) *
                              Number(SelectedProduct?.SGST)) /
                              100 -
                            (Number(SelectedProduct?.productPrice) *
                              Number(SelectedProduct?.discount)) /
                              100}
                        </>
                      )}
                    </Col>
                  </Row>

                  {/* <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Heart Beat
                  </span>
                  <ProgressBar
                    variant="success"
                    style={{ height: "6px" }}
                    now={40}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Blood Pressure
                  </span>
                  <ProgressBar
                    variant="info"
                    style={{ height: "6px" }}
                    now={60}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Sugar
                  </span>
                  <ProgressBar
                    variant="warning"
                    style={{ height: "6px" }}
                    now={60}
                  />

                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    Haemoglobin
                  </span>
                  <ProgressBar
                    variant="danger"
                    style={{ height: "6px" }}
                    now={60}
                  /> */}
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
                alert("Doctor Added");
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer> */}
        </Modal>
        {/* info icon modal */}

        {/* VIEW MODAL */}

        {/* Delete Modal */}
      </div>
    </div>
  );
};

export default Labvendorproducts;
