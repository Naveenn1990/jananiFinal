import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Adminpanel.css";
import axios from "axios";
import { BiSolidEdit } from "react-icons/bi";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import { AiFillFileExcel } from "react-icons/ai";

export default function ProductBrands() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  //  add product brands
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [EditData, setEditData] = useState({});
  const [showE, setShowE] = useState(false);
  const handleCloseE = () => setShowE(false);
  const handleShowE = (item) => {
    setShowE(true);
    setEditData(item);
  };

  const [deleteData, setdeleteData] = useState({});
  const [showdelete, setShowdelete] = useState(false);
  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = (data) => {
    setShowdelete(true);
    setdeleteData(data);
  };

  const [brandName, setbrandName] = useState("");
  const [brandName1, setbrandName1] = useState("");

  const addBrand = async (e) => {
    e.preventDefault();
    if (!brandName) {
      alert("Please Enter Brand Name");
    } else {
      try {
        const config = {
          url: "/admin/addBrand",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            brandName: brandName,
          },
        };
        await axios(config).then((res) => {
          if (res.status === 201) {
            alert(res.data.success);
            setbrandName("");
            listOfBrands();
            handleClose();
          }
        });
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const EditBrand = async (e) => {
    e.preventDefault();
    if (!brandName1) {
      alert("There is no Chnages to Update");
    } else {
      try {
        const config = {
          url: "/admin/editbrand/" + EditData?._id,
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            brandName: brandName1 ? brandName1 : EditData?.brandName,
          },
        };
        await axios(config).then((res) => {
          if (res.status === 200) {
            alert(res.data.success);
            setbrandName1("");
            listOfBrands();
            handleCloseE();
          }
        });
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const DeleteBrand = async () => {
    try {
      const config = {
        url: "/admin/deleteBrands/" + deleteData?._id,
        method: "delete",
        baseURL: "http://localhost:8521/api",
      };
      await axios(config).then((res) => {
        if (res.status === 200) {
          alert(res.data.success);
          listOfBrands();
          handleClosedelete();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [data, setdata] = useState([]);
  const listOfBrands = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/brandsList");
      if (res.status === 200) {
        setdata(res.data.list);
      }
    } catch (error) {
      console.log(error);
      setdata(error.response.data.list);
    }
  };

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      listOfBrands();
    }
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
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

  return (
    <div className="p-3">
      <h4 style={{ color: "#808080", fontWeight: "600", fontSize: "22px" }}>
        Brands
      </h4>
      <input
        placeholder="Search"
        style={{
          padding: "5px 10px",
          border: "1px solid #20958c",
          borderRadius: "0px",
        }}
        onChange={handleFilter}
      />
      <div className="mt-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, i) => {
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>{obj.brandName}</td>
                        <td>
                          <BiSolidEdit
                            style={{ color: "#1500ff" }}
                            onClick={() => handleShowE(obj)}
                          />
                          <AiFillDelete
                            style={{ color: "red" }}
                            onClick={() => handleShowdelete(obj)}
                          />
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((obj, i) => {
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>{obj.brandName}</td>
                        <td>
                          <BiSolidEdit
                            style={{ color: "#1500ff" }}
                            onClick={() => handleShowE(obj)}
                          />
                          <AiFillDelete
                            style={{ color: "red" }}
                            onClick={() => handleShowdelete(obj)}
                          />
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
      </div>
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

      <AiOutlinePlusCircle
        className="AddIcon1"
        // id="circleIcon"
        onClick={handleShow}
      />

      {/* model for adding the brands */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Brand Name"
              className="mb-2"
            >
              <Form.Control
                type="text"
                value={brandName}
                placeholder="Brand Name"
                onChange={(e) => setbrandName(e.target.value)}
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="brand-close-button"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="brand-save-button"
            variant="primary"
            onClick={(e) => addBrand(e)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit */}
      <Modal show={showE} onHide={handleCloseE} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label style={{ color: "white" }}>Brand Name</label>
            <FloatingLabel
              controlId="floatingInput"
              label={EditData?.brandName}
              className="mb-2"
            >
              <Form.Control
                type="text"
                value={brandName1}
                placeholder={EditData?.brandName}
                onChange={(e) => setbrandName1(e.target.value)}
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="brand-close-button"
            variant="secondary"
            onClick={handleCloseE}
          >
            Close
          </Button>
          <Button
            className="brand-save-button"
            variant="primary"
            onClick={(e) => EditBrand(e)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete */}
      <Modal show={showdelete} onHide={handleClosedelete}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p style={{ color: "white", textAlign: "center" }}>
            Are you sure you want to delete Brand
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={handleClosedelete}
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={DeleteBrand}
            >
              DELETE
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
