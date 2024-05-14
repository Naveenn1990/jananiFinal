import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";

export default function HospitallabCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [testCategory, settestCategory] = useState("");
  const [testCategoryImg, settestCategoryImg] = useState("");

  const AddHospitalLabCategory = async () => {
    const obj = {
      testCategory,
      testCategoryImg,
    };
    try {
      const config = {
        url: "/admin/createHospitalLabTestCategory",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        setShow(false);
      }
    } catch (err) {
      console.log(err);
      return alert(
        err.response.data.error
          ? err.response.data.error
          : "Something went wrong! Please try again!"
      );
    }
  };

  const [HospitalLabCatList, setHospitalLabCatList] = useState([]);
  const HospitallabCategories = () => {
    axios
      .get("http://localhost:8521/api/admin/HospitalLabTestCategoryList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.list;
          setHospitalLabCatList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabCatList([]);
      });
  };

  const [View, setView] = useState({});
  const deleteHospitallabCategory = () => {
    axios
      .delete("http://localhost:8521/api/admin/deleteHospitalLabTestCat", {
        headers: { "content-type": "application/json" },
        data: {
          catid: View?._id,
        },
      })
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          alert(response.data.success);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return alert("Something is up with the server");
      });
  };

  useEffect(() => {
    HospitallabCategories();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Hospital Lab
          </h6> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Hospital Lab"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />

            {/* <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                margin: "0px 10px",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow1(true)}
            >
              {" "}
              + ADD LAB PRICE
            </button> */}

            {/* <button
              style={{
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                backgroundColor: "#20958c",
                borderRadius: "4px",
                color: "white",
              }}
              onClick={() => setShow2(true)}
            >
              {" "}
              + LAB TOTAL REVENUE
            </button> */}
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add lab test Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test Category
                </label>
                <input
                  placeholder="Test Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestCategory(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Test Category Image
                </label>
                <input
                  placeholder="Test Category"
                  type="file"
                  id="cat-img"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  accept="image/*"
                  onChange={(e) => settestCategoryImg(e.target.files[0])}
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
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
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
                onClick={() => {
                  AddHospitalLabCategory();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Delete Hospital Lab Test Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ color: "white" }}>
              Are You sure? You want to <b style={{ color: "red" }}>delete</b>{" "}
              the category
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
                  border: "1px solid grey",
                  padding: "4px 10px",
                }}
                onClick={() => setShow1(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid red",
                  padding: "4px 10px",
                }}
                onClick={deleteHospitallabCategory}
              >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Lab Total Revenue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#20958c",
                  color: "white",
                  margin: "5% 20% 2% 20%",
                  width: "60%",
                  padding: "4%",
                }}
              >
                <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                  Total Revenue
                </h6>
                <h6 style={{ textAlign: "center", fontSize: "30px" }}>
                  ₹ 12000
                </h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal size="md" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit lab test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Test Category"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-2" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    marginTop: "14%",
                    marginLeft: "25%",
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Image
                </label>
              </div>
              <div className="col-lg-10" style={{ marginTop: "4%" }}>
                <input
                  placeholder="Test Category"
                  type="file"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Test Type"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Sub-Test"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Hospital lab test Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Test Category</th>
              <th>Image</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {HospitalLabCatList?.map((val, index) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{val?.testCategory}</td>
                  <td>
                    <img
                      src={`http://localhost:8521/HospitalLabTest/${val?.testCategoryImg}`}
                      style={{ width: "100px" }}
                      alt="no-img"
                    />
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MdEdit
                        style={{ color: "#20958c", marginRight: "15px" }}
                        onClick={() => setShow4(true)}
                      />
                      <AiFillDelete
                        style={{ color: "red" }}
                        onClick={() => {
                          setView(val);
                          handleShow1();
                        }}
                      />
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
