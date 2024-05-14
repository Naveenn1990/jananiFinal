import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { useEffect } from "react";
import axios from "axios";

export default function Clinicallab() {
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

  // for delete
  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const formdata = new FormData();

  // Clinic lab variables
  const [ClinicLabName, setClinicLabName] = useState("");
  const [StartedAt, setStartedAt] = useState(new Date());
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Address2, setAddress2] = useState("");
  const [City, setCity] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ProfileImg, setProfileImg] = useState("");
  const [certificate, setcertificate] = useState("");
  const [View, setView] = useState("");

  const addClinicLab = async (e) => {
    e.preventDefault();
    formdata.set("ClinicLabName", ClinicLabName);
    formdata.set("StartedAt", StartedAt);
    formdata.set("Firstname", Firstname);
    formdata.set("Lastname", Lastname);
    formdata.set("PhoneNumber", PhoneNumber);
    formdata.set("Email", Email);
    formdata.set("Address1", Address1);
    formdata.set("Address2", Address2);
    formdata.set("City", City);
    formdata.set("state", state);
    formdata.set("zipcode", zipcode);
    formdata.set("Password", Password);
    formdata.set("ConfirmPassword", ConfirmPassword);
    formdata.set("ProfileImg", ProfileImg);
    formdata.set("certificate", certificate);
    try {
      const config = {
        url: "/ClinicLab/addClinicLab",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };

      const res = await axios(config);
      if (res.status === 201) {
        alert(res.data.Success);
        setClinicLabName("");
        setStartedAt("");
        setFirstname("");
        setLastname("");
        setPhoneNumber("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setstate("");
        setzipcode("");
        setPassword("");
        setConfirmPassword("");
        setProfileImg("");
        setcertificate("");
        getClinicalLabsList();
        handleClose();
      }
    } catch (error) {
      console.log(error);
      handleClose();
    }
  };

  const [clinicalLabs, setclinicalLabs] = useState([]);
  const getClinicalLabsList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/getClinicLabList"
      );
      if (res.status === 200) {
        setclinicalLabs(res.data.ClinicalLabsInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // =============== delete lab==================
  const deleteClinicalLabsList = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/ClinicLab/deleteclinicLabDetails/${View?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        handleClose5();
        getClinicalLabsList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClinicalLabsList();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Clinical Lab
        </h6> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Clinical Lab"
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
            </button>

            <button
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

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Clinic Lab</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <div className="row"></div>
            </div>
            <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
              Clinic Lab Information
            </h6>
            <div
              className="row"
              style={{
                border: "1px solid white",
                padding: "2% 0%",
                margin: "0% 1%",
                borderRadius: "0px",
              }}
            >
              <div className="col-lg-6">
                <input
                  placeholder="Clinic Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={ClinicLabName}
                  onChange={(e) => setClinicLabName(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Started at :
                    </h6>
                  </div>
                  <div className="col-lg-8">
                    {" "}
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                      }}
                      value={StartedAt}
                      onChange={(e) => setStartedAt(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    marginTop: "4%",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Contact Number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    marginTop: "4%",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div> */}

              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Street Address Line 1"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Address1}
                  onChange={(e) => setAddress1(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Street Address Line 2"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Address2}
                  onChange={(e) => setAddress2(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-3">
                <input
                  placeholder="City"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "8%",
                  }}
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-3">
                <input
                  placeholder="
                State / Province"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "8%",
                  }}
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Postal / Zip Code"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={zipcode}
                  onChange={(e) => setzipcode(e.target.value)}
                ></input>
              </div>

              <div className="row align-items-center mt-4">
                <label className="col-lg-3 text-light fw-semibold">
                  Upload Certificate
                </label>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    placeholder="Upload certificate"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                    onChange={(e) => setcertificate(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>

            <h6 style={{ color: "white", margin: "2%" }}>Personal Details</h6>
            <div
              className="row"
              style={{
                border: "1px solid white",
                padding: "2% 0%",
                margin: "0% 1%",
                borderRadius: "0px",
              }}
            >
              <div className="col-lg-6">
                <input
                  placeholder="First name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={Firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Last name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={Lastname}
                  onChange={(e) => setLastname(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Contact Number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Password"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Confirm Password"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="col-lg-3 mt-4 text-light fw-semibold">
                  Profile Image:
                </label>
                <input
                  className="col-lg-9"
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
                  onChange={(e) => setProfileImg(e.target.files[0])}
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addClinicLab(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Lab test Price</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab Test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Lab Test Price"
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow1(false);
                  alert("lab test price added");
                }}
              >
                SUBMIT
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
                  placeholder="Test title"
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
                  placeholder="Test subtitle"
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
                  border: "1px solid white",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => setShow4(false)}
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
                  setShow4(false);
                  alert("Clinical lab test Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show5} onHide={handleClose5}>
          <Modal.Header>
            <Modal.Title>Edit lab test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Are You sure , You want to delete this Clinic's Lab information.
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
                  border: "1px solid white",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => handleClose5()}
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
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => deleteClinicalLabsList()}
              >
                DELETE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Clinic-Id</th>
              <th>Clinic Name</th>
              <th> Email</th>
              <th>Contact</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {clinicalLabs.map((labinfo, i) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{++i}</td>

                  <td>{labinfo?.ClinicLabId}</td>
                  <td>{labinfo?.ClinicLabName}</td>
                  <td>{labinfo?.Email}</td>
                  <td>{labinfo?.PhoneNumber}</td>
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
                        onClick={() => setShow4(true)}
                      />
                      <AiFillDelete
                        style={{ color: "red" }}
                        onClick={() => {
                          setView(labinfo);
                          handleShow5();
                        }}
                      />
                      <button
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
                      </button>
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
