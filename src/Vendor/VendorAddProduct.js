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
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

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

  const [data, setdata] = useState([]);

  const getProductList = () => {
    axios
      .get("http://localhost:8521/api/vendor/productList")
      .then(function (response) {
        // handle success
        setdata(
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

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Products");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("ProductList", data);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Add Products
      </h4>

      <Container>
        {/* <div className="row mb-3">
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
        </div> */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2%",
          }}
        >
          <input
            placeholder="Search Hospital doctors"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>

          <Button
            className="all-bg-green"
            onClick={() => navigate("/VendorAddProductsModal")}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Product
          </Button>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              zIndex: "999",
            }}
          >
            <FaUserMd className="AddIcon1" onClick={() => handleShow()} />
          </div> */}
        </div>
        <Table className="table " responsive style={{ width: "1500px" }}>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Product Name</th>
              <th className="fw-bold">Currency Format</th>
              <th className="fw-bold">Product Type</th>
              <th className="fw-bold">Manufacturing Date</th>
              <th className="fw-bold">Expiry Date</th>
              <th className="fw-bold">Product Price</th>
              <th className="fw-bold">Discount </th>
              <th className="fw-bold">CGST </th>
              <th className="fw-bold">SGST </th>
              <th className="fw-bold">MRP </th>
              <th className="fw-bold">Total Amount </th>
              <th className="fw-bold">Product Size </th>
              <th className="fw-bold">Pack Size </th>
              <th className="fw-bold">Colour </th>
              <th className="fw-bold">Flavour </th>
              <th className="fw-bold">Fragrance </th>
              <th className="fw-bold">Variant </th>
              <th className="fw-bold">Description </th>
              <th className="fw-bold">Brand </th>
              <th className="fw-bold">Country Of Origin </th>
              <th className="fw-bold">Manufacturer company name </th>
              <th className="fw-bold">Manufacturer address </th>
              <th className="fw-bold">Stock </th>
            </tr>
          </thead>

          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{item?.productName}</td>

                        <td>{item?.currencyFormat}</td>
                        <td>{item?.productType}</td>
                        <td>{item?.manufacturingDate}</td>
                        <td>{item?.expiryDate}</td>
                        <td>{item?.productPrice}</td>
                        <td>{item?.discount}</td>
                        <td>{item?.CGST}</td>
                        <td>{item?.SGST}</td>
                        <td>{item?.MRP}</td>
                        <td>
                          {item?.productPrice +
                            (item?.productPrice * item?.CGST) / 100 +
                            (item?.productPrice * item?.SGST) / 100 -
                            (item?.productPrice * item?.discount) / 100}
                        </td>
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
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{item?.productName}</td>

                        <td>{item?.currencyFormat}</td>
                        <td>{item?.productType}</td>
                        <td>{item?.manufacturingDate}</td>
                        <td>{item?.expiryDate}</td>
                        <td>{item?.productPrice}</td>
                        <td>{item?.discount}</td>
                        <td>{item?.CGST}</td>
                        <td>{item?.SGST}</td>
                        <td>{item?.MRP}</td>
                        <td>
                          {item?.productPrice +
                            (item?.productPrice * item?.CGST) / 100 +
                            (item?.productPrice * item?.SGST) / 100 -
                            (item?.productPrice * item?.discount) / 100}
                        </td>
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
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
          <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
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
