import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";
import exportFromJSON from "export-from-json";

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

  //For Block
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

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
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An unexpected error occurred.");
      }
    }
  };

  const [LabDetailsShow, setLabDetailsShow] = useState({});
  const UpdateClinicLab = async (e) => {
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
        url: `/ClinicLab/editClinicLabDetails/${LabDetailsShow?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };

      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
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
        handleClose4();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An unexpected error occurred.");
      }
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
        setPagination(res.data.ClinicalLabsInfo);
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

  const ClinicBlock = async () => {
    try {
      const config = {
        url: `/ClinicLab/blocklabdetails/${LabDetailsShow?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose6();
        getClinicalLabsList();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [SearchItem, setSearchItem] = useState("");

  useEffect(() => {
    getClinicalLabsList();
  }, []);

  // ==========================

  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Clinical-lab list");

  const ExportToExcel = () => {
    if (fileName) {
      if (clinicalLabs.length != 0) {
        exportFromJSON({
          data: JSON.parse(JSON.stringify(clinicalLabs)),
          fileName,
          exportType,
        });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  return (
    <div>
      <div style={{ padding: "1%" }}>
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
            value={SearchItem}
            onChange={(e) => setSearchItem(e.target.value)}
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => handleShow()}
            />
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Clinic Lab</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                />
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
                }}
                onClick={() => {
                  handleClose();
                }}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
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
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => handleClose()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
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

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Lab Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Modal.Body>
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
                    placeholder={LabDetailsShow?.ClinicLabName}
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
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder={LabDetailsShow?.Address1}
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
                    placeholder={LabDetailsShow?.Address2}
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
                    placeholder={LabDetailsShow?.City}
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
                    placeholder={LabDetailsShow?.state}
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
                    placeholder={LabDetailsShow?.zipcode}
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
                    <input
                      type="file"
                      id="file"
                      name="file"
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
                    placeholder={LabDetailsShow?.Firstname}
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
                    placeholder={LabDetailsShow?.Lastname}
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
                    placeholder={LabDetailsShow?.PhoneNumber}
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
                    placeholder={LabDetailsShow?.Email}
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
                  />
                </div>
              </div>
            </Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => handleClose4()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => UpdateClinicLab(e)}
              >
                UPDATE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show5} onHide={handleClose5}>
          <Modal.Header>
            <Modal.Title>Delete Lab Details</Modal.Title>
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
        <Modal size="md" show={show6} onHide={handleClose6}>
          <Modal.Header>
            <Modal.Title>
              {" "}
              {LabDetailsShow?.blocked === false ? "Block" : "Un-Block"} Lab
              Authentication
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ color: "white" }}>
              Are You sure , You want to{" "}
              {LabDetailsShow?.blocked === false ? "Block" : "Un-Block"} this
              Clinic's Lab information.
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={() => handleClose6()}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => ClinicBlock()}
              >
                {LabDetailsShow?.blocked === false ? "BLOCK" : "UN-BLOCK"}
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }} bordered>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Clinic-Id</th>
              <th>Clinic Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Status</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {clinicalLabs
              ?.slice(pagesVisited, pagesVisited + usersPerPage)
              ?.map((labinfo, i) => {
                if (
                  SearchItem === "" ||
                  Object.values(labinfo).some((value) =>
                    String(value)
                      .toLowerCase()
                      .includes(SearchItem.toLowerCase())
                  )
                )
                  return (
                    <tr style={{ fontSize: "15px", textAlign: "center" }}>
                      <td>{++i}</td>
                      <td>{labinfo?.ClinicLabId}</td>
                      <td>{labinfo?.ClinicLabName}</td>
                      <td>{labinfo?.Email}</td>
                      <td>{labinfo?.PhoneNumber}</td>
                      <td>
                        {labinfo?.blocked === false ? (
                          <>
                            <Button
                              style={{
                                fontSize: "12px",
                                border: "none",
                                backgroundColor: "#20958c",
                                color: "white",
                                fontWeight: "600",
                                borderRadius: "4px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleShow6();
                                setLabDetailsShow(labinfo);
                              }}
                            >
                              BLOCK
                            </Button>
                            <br />
                            <b style={{ color: "green" }}> User is UnBlock </b>
                          </>
                        ) : (
                          <>
                            <Button
                              style={{
                                fontSize: "12px",
                                border: "none",
                                color: "white",
                                fontWeight: "600",
                                borderRadius: "4px",
                                cursor: "pointer",
                              }}
                              variant="danger"
                              onClick={() => {
                                handleShow6();
                                setLabDetailsShow(labinfo);
                              }}
                            >
                              UNBLOCK
                            </Button>
                            <br />
                            <b style={{ color: "red" }}> User is Block </b>
                          </>
                        )}
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "space-evenly",
                            gap: "10px",
                          }}
                        >
                          <MdEdit
                            style={{
                              color: "#20958c",
                              marginRight: "1%",
                              cursor: "pointer",
                              fontSize: "20px",
                            }}
                            onClick={() => {
                              handleShow4();
                              setLabDetailsShow(labinfo);
                            }}
                          />
                          <AiFillDelete
                            style={{
                              color: "red",
                              cursor: "pointer",
                              fontSize: "20px",
                            }}
                            onClick={() => {
                              setView(labinfo);
                              handleShow5();
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
              })}
          </tbody>
        </Table>
        <div style={{ float: "left" }} className="my-3 d-flex justify-end">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={(event, value) => {
                changePage(value - 1);
              }}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
