import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiOutlineOrderedList,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsFillPlusCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";

export default function AddproductCategory() {
  const formdata = new FormData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // subcategory
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // subcategory list
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // category hooks
  const [categoryName, setcategoryName] = useState("");
  const [categoryid, setcategoryid] = useState("");
  const [subcategoryName, setsubcategoryName] = useState("");
  const [catImg, setcatImg] = useState(false);

  const [View, setView] = useState({});

  const addProductCategory = async (e) => {
    e.preventDefault();
    try {
      formdata.set("categoryName", categoryName);
      formdata.set("catImg", catImg);
      const config = {
        url: "/admin/addCategory",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      await axios(config).then((res) => {
        if (res.status === 201) {
          alert(res.data.success);
          setcategoryName("");
          getAllCategory();
          getAllSubCategory();
          handleClose();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const addProductsubCategory = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/admin/addsubCategory",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          categoryid: categoryid,
          subcategoryName: subcategoryName,
        },
      };
      await axios(config).then((res) => {
        if (res.status === 201) {
          alert(res.data.success);
          setcategoryid("");
          getAllCategory();
          getAllSubCategory();
          handleClose2();
        }
      });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [categoryList, setcategoryList] = useState([]);
  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getcategoryList"
      );
      if (res.status === 200) {
        setcategoryList(res.data.allcategory);
      }
    } catch (error) {
      console.log(error);
      setcategoryList(error.response.data.allcategory);
    }
  };

  const [subcategoryList, setsubcategoryList] = useState([]);
  const getAllSubCategory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getsubcategoryList"
      );
      if (res.status === 200) {
        setsubcategoryList(res.data.allsubcategory);
      }
    } catch (error) {
      console.log(error);
      setsubcategoryList(error.response.data.allsubcategory);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Add Product Category
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Product Category"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
            <Button
              style={{
                backgroundColor: "#20958c",
                border: "1px solid #20958c",
              }}
              onClick={() => handleShow2()}
            >
              Subcategory{" "}
            </Button>
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Product Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Product Category Name"
                  value={categoryName}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setcategoryName(event.target.value)}
                ></input>
              </div>
              <div className="col-lg-12 mt-2">
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setcatImg(event.target.files[0])}
                ></input>
              </div>
            </div>
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
                  padding: "4px 10px",
                  border: "1px solid white",
                }}
                onClick={() => setShow(false)}
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
                onClick={(e) => {
                  addProductCategory(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Product Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Product Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>
            </div>
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
                onClick={() => setShow1(false)}
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
                onClick={() => {
                  setShow1(false);
                  alert("Product Category updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Add Sub-Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  placeholder="Product Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(event) => setcategoryid(event.target.value)}
                >
                  <option>Choose Category</option>
                  {categoryList.map((obj) => {
                    return <option value={obj._id}>{obj.categoryName}</option>;
                  })}
                </select>
              </div>
              <div className="col-lg-12 mt-2">
                <input
                  placeholder="Product Sub-Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={subcategoryName}
                  onChange={(event) => setsubcategoryName(event.target.value)}
                ></input>
              </div>
            </div>
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
                onClick={() => setShow1(false)}
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
                onClick={(e) => {
                  addProductsubCategory(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show3} onHide={handleClose3}>
          <Modal.Header>
            <Modal.Title>Product Subcategory list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <th>Product SubCategory</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {subcategoryList
                  .filter((val) => val.categoryid._id === View._id)
                  .map((obj) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{obj.subcategoryName}</td>

                        <td>
                          <div
                            style={{
                              display: "flex",
                              textAlign: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <MdEdit
                              style={{ color: "#20958c", marginRight: "1%" }}
                              onClick={() => setShow1(true)}
                            />
                            <AiFillDelete style={{ color: "red" }} />
                            {/* <button
                              style={{
                                fontSize: "12px",
                                border: "none",
                                backgroundColor: "#20958c",
                                color: "white",
                                fontWeight: "600",
                                borderRadius: "4px",
                              }}
                            >
                              BLOCK
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
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
                onClick={() => setShow3(false)}
              >
                CANCEL
              </button>

              {/* <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addProductsubCategory(e);
                }}
              >
                SUBMIT
              </button> */}
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Product Category Image</th>
              <th>Product Category</th>
              <th>Product SubCategory</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((obj) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>
                    <img
                      src={`http://localhost:8521/ProductCategory/${obj.catImg}`}
                      alt="no-img"
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{obj.categoryName}</td>
                  <td>
                    <AiOutlineOrderedList
                      onClick={() => {
                        setView(obj);
                        handleShow3();
                      }}
                    />
                  </td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MdEdit
                        style={{ color: "#20958c", marginRight: "1%" }}
                        onClick={() => setShow1(true)}
                      />
                      <AiFillDelete style={{ color: "red" }} />
                      {/* <button
                        style={{
                          fontSize: "12px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "4px",
                        }}
                      >
                        BLOCK
                      </button> */}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
