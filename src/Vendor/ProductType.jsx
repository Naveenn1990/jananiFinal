import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"; // Import Form and Form.Label
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ProductType.css";
import axios from "axios";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

const ProductType = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editData, seteditData] = useState({});
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    seteditData(item);
  };

  const [deleteData, setdeleteData] = useState({});
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (item) => {
    setShow2(true);
    setdeleteData(item);
  };

  const Vendor = JSON.parse(sessionStorage.getItem("VendorDetails"));

  const [producttype, setproducttype] = useState("");
  const handleAddProductType = async () => {
    if (!producttype) {
      alert("Please enter product type");
    } else {
      let obj1 = {
        vendorid: Vendor?._id,
        Producttype: producttype,
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
          alert(res.data.success);
          setproducttype("");
          handleClose();
          getAllData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [producttype1, setproducttype1] = useState("");

  const EditProductType = async () => {
    if (!producttype1) {
      alert("No changes found to update");
    } else {
      try {
        const config = {
          url: "/vendor/EditProductType",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: { Id: editData?._id, Producttype: producttype1 },
        };
        let res = await axios(config);
        if (res.status === 201) {
          alert(res.data.success);
          setproducttype1("");
          handleClose1();
          getAllData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const DeleteProductType = async () => {
    try {
      const config = {
        url: "/vendor/DeleteProductType",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: { Id: deleteData?._id },
      };
      let res = await axios(config);
      if (res.status === 201) {
        alert(res.data.success);
        handleClose2();
        getAllData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setdata] = useState([]);
  const getAllData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/producttype"
      );
      setdata(res.data.success);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
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

  const [fileName, setfileName] = useState("Product_type");

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

  console.log("data", data);

  return (
    <>
      <div className="p-4 fw-bold h3">Product Type</div>

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
        <div className="buttoncom ">
          <Button onClick={handleShow} variant="warning">
            Add Product
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            zIndex: "999",
          }}
        >
          <FaUserMd className="AddIcon1" onClick={() => handleShow()} />
        </div>
      </div>

      <div
        className="Product-Type"
        style={{ overflow: "hidden", margin: "10px", overflowX: "scroll" }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL.N.</th>
              <th>Product Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.Producttype}</td>
                      <td>
                        <button
                          onClick={() => handleShow1(item)}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <FaEdit className="edit-icon" />
                        </button>
                        <button
                          onClick={() => handleShow2(item)}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <MdDelete className="delete-icon" />
                        </button>
                      </td>
                    </tr>
                  ))
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.Producttype}</td>
                      <td>
                        <button
                          onClick={() => handleShow1(item)}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <FaEdit className="edit-icon" />
                        </button>
                        <button
                          onClick={() => handleShow2(item)}
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <MdDelete className="delete-icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
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
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label className="text-light">Enter Product Type</Form.Label>{" "}
          {/* Use Form.Label here */}
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProductType}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label className="text-light">Enter Product Type</Form.Label>{" "}
          {/* Use Form.Label here */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Type"
            value={producttype1}
            onChange={(e) => setproducttype1(e.target.value)}
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={EditProductType}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Hospital Service</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "white" }}>
          Are you sure! You wanted to delete
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="danger" onClick={DeleteProductType}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductType;
