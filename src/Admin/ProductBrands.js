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

export default function ProductBrands() {
  let adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));

  //  add product brands
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brandName, setbrandName] = useState("");

  const addBrand = async (e) => {
    e.preventDefault();
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
  };

  const [brandList, setbrandList] = useState([]);
  const listOfBrands = async () => {
    try {
      const res = await axios.get("http://localhost:8521/api/admin/brandsList");
      if (res.status === 200) {
        setbrandList(res.data.list);
      }
    } catch (error) {
      console.log(error);
      setbrandList(error.response.data.list);
    }
  };

  useEffect(() => {
    adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
    if (!adminDetails) {
      return alert("Access Denied!!!");
    } else {
      listOfBrands();
      //   getAllVendors();
      //   getAllCategory();
      //   getAllSubCategory();
      //   listOfOrderedProducts();
    }
  }, []);
  return (
    <div className="p-3">
      <h4 style={{ color: "#808080", fontWeight: "600", fontSize: "22px" }}>
        Brands
      </h4>
      <input
        type="text"
        placeholder="search"
        style={{ padding: "6px", marginBottom: "11px", marginTop: "12px" }}
      />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brandList.map((obj, i) => {
              return (
                <tr>
                  <td>{++i}</td>
                  <td>{obj.brandName}</td>
                  <td>
                    <BiSolidEdit style={{ color: "#1500ff" }} />
                    <AiFillDelete style={{ color: "red" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
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
    </div>
  );
}
