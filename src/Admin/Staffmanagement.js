import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { FaUserNurse } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

import { HiCurrencyRupee } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { GiToken } from "react-icons/gi";
import axios from "axios";

export default function Staffmanagement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  // ========================================================================

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [Phone, setPhone] = useState();
  const [Designation, setDesignation] = useState();
  const [Address1, setAddress1] = useState();
  const [Department, setDepartment] = useState();

  const [Education, setEducation] = useState();
  const [ProfileImg, setProfileImg] = useState();
  const [Docs, setDocs] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [Description, setDescription] = useState("");
  const [Salary, setSalary] = useState("");
  const [SalaryDate, setSalaryDate] = useState("");
  const [Remark, setRemark] = useState("");
  const [View, setView] = useState({});
  const formdata = new FormData();

  // ========================================================================

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function validatename(inputtxt) {
    var nameReg = /^[a-zA-Z ]{2,30}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(nameReg)) {
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }

  function phonenumber(inputtxt) {
    var phoneno = /^[6-9]\d{9}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid mobile number!");
      return false;
    }
  }

  function CheckPassword(inputtxt) {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.match(decimal)) {
      return true;
    } else {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
      );
      return false;
    }
  }

  // ========================================================================

  const signup = async (event) => {
    event.preventDefault();
    if (
      validatename(fname) &&
      ValidateEmail(email) &&
      phonenumber(Phone) &&
      CheckPassword(password)
    ) {
      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("Gender", Gender);
      formdata.set("DOB", DOB);
      formdata.set("Phone", Phone);
      formdata.set("email", email);
      formdata.set("Designation", Designation);
      formdata.set("Department", Department);
      formdata.set("Address1", Address1);
      formdata.set("Education", Education);
      formdata.set("password", password);
      formdata.set("Description", Description);
      formdata.set("ProfileImg", ProfileImg);
      formdata.set("Docs", Docs);
      try {
        if (password !== conpassword) {
          alert("Password and confirm password fields are not matching!!!");
          return;
        }
        const config = {
          url: "/staff/addStaff",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "Content-Type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 201) {
          setShow(false);
          setfname("");
          setlname("");
          setGender("");
          setDOB("");
          setemail("");
          setPhone("");
          setDesignation("");
          setAddress1("");
          setDepartment("");
          setEducation("");
          setProfileImg();
          setDocs();
          setpassword("");
          setconpassword("");
          setDescription("");
          setSalary("");
          setSalaryDate("");
          setRemark("");
          getAllStaffs();
          alert("Signup Success");
          // window.location.assign("/patientPortal");
        }
      } catch (error) {
        console.log(error);
        // alert(error.response.data.error);
      }
    }
  };

  const [staffs, setStaffs] = useState([]);

  const getAllStaffs = () => {
    axios
      .get("http://localhost:8521/api/staff/getStaffsList")
      .then(function (response) {
        // handle success
        setStaffs(response.data.staffList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setStaffs(error.response.data.staffList);
      });
  };

  //=========================================================================================

  const editStaffDetails = async () => {
    try {
      if (fname) {
        validatename(fname);
      }
      if (email) {
        ValidateEmail(email);
      }
      if (Phone) {
        phonenumber(Phone);
      }
      if (password) {
        CheckPassword(password);
      }
      if (password && conpassword) {
        if (password !== conpassword) {
          alert("Password and confirm password fields are not matching!!!");
          return;
        }
      }
      if ((password && !conpassword) || (!password && conpassword)) {
        return alert(
          "password and confirm password both field must be filled if you want to update password!!!"
        );
      }
      formdata.set("fname", fname);
      formdata.set("lname", lname);
      formdata.set("Gender", Gender);
      formdata.set("DOB", DOB);
      formdata.set("Phone", Phone);
      formdata.set("email", email);
      formdata.set("Designation", Designation);
      formdata.set("Department", Department);
      formdata.set("Address1", Address1);
      formdata.set("Education", Education);
      formdata.set("password", password);
      formdata.set("Description", Description);
      formdata.set("ProfileImg", ProfileImg);
      formdata.set("Docs", Docs);
      formdata.set("Salary", Salary);
      formdata.set("SalaryDate", SalaryDate);
      formdata.set("Remark", Remark);

      const config = {
        url: `/staff/editStaffDetails/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        setShow1(false);
        setShow2(false);
        setfname("");
        setlname("");
        setGender("");
        setDOB("");
        setemail("");
        setPhone("");
        setDesignation("");
        setAddress1("");
        setDepartment("");
        setEducation("");
        setProfileImg();
        setDocs();
        setpassword("");
        setconpassword("");
        setDescription("");
        setSalary("");
        setSalaryDate("");
        setRemark("");
        getAllStaffs();
        alert(res.data.success);
        // window.location.assign("/patientPortal");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  //=========================================================================================

  useEffect(() => {
    getAllStaffs();
  }, []);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Staff
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Staff"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FaUserNurse className="AddIcon1" onClick={() => setShow(true)} />

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
              + MAKE A PAYMENT
            </button> */}
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Staff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  value={fname}
                  placeholder="First name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setfname(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  value={lname}
                  placeholder="Last Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setlname(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  value={email}
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  type="password"
                  value={conpassword}
                  placeholder="Confirm password"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setconpassword(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Designation"
                  value={Designation}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setDesignation(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select Department</option>
                  <option>Department-1</option>
                  <option>Department-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
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
                        marginTop: "4%",
                      }}
                      value={DOB}
                      onChange={(e) => setDOB(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Address"
                  rows="4"
                  cols="50"
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
                ></textarea>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Education"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Education}
                  onChange={(e) => setEducation(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Profile Image
                </label>
                <br></br>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setProfileImg(e.target.files[0])}
                ></input>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload document
                </label>
                <br></br>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocs(e.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-12">
                <textarea
                  placeholder="Description"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={(event) => {
                  signup(event);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Edit Staff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
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
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Last Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
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
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  type="password"
                  value={conpassword}
                  placeholder="Confirm password"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setconpassword(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Designation"
                  value={Designation}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setDesignation(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select Department</option>
                  <option>Department-1</option>
                  <option>Department-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Mobile number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
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
                        marginTop: "4%",
                      }}
                      value={DOB}
                      onChange={(e) => setDOB(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Address"
                  rows="4"
                  cols="50"
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
                ></textarea>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder="Education"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Education}
                  onChange={(e) => setEducation(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Profile Image
                </label>
                <br></br>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setProfileImg(e.target.files[0])}
                ></input>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload document
                </label>
                <br></br>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocs(e.target.files[0])}
                ></input>
              </div>
              <div className="col-lg-12">
                <textarea
                  placeholder="Description"
                  rows="4"
                  cols="50"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
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
                  setShow2(false);
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
                onClick={() => {
                  editStaffDetails();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Salary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                   borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Staff</option>
                  <option>John</option>
                  <option>John</option>
                </select>
              </div> */}

              <div className="col-lg-6">
                <input
                  placeholder="Salary amount"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={Salary}
                  onChange={(event) => setSalary(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    // marginTop: "4%",
                  }}
                  value={SalaryDate}
                  onChange={(event) => setSalaryDate(event.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <textarea
                  placeholder="Remark"
                  cols={4}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={Remark}
                  onChange={(event) => setRemark(event.target.value)}
                ></textarea>
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
                  border: "1px solid white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  editStaffDetails();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show5} onHide={handleClose5}>
          <Modal.Body style={{ padding: "0%" }}>
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={`http://localhost:8521/Staff/${View?.ProfileImg}`}
                  style={{ width: "100%", height: "260px" }}
                />
                <p
                  style={{
                    textAlign: "justify",
                    padding: "3% 3%",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  {View?.Description}
                </p>
              </div>

              <div className="col-lg-8">
                <div
                  style={{
                    margin: "2% 0%",
                    padding: "2% 0%",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <h6 style={{ fontSize: "18px", color: "lightgrey" }}>
                    PROFILE
                  </h6>
                  <h4>
                    {View?.fname} {View?.lname}
                  </h4>
                  <h5>{View?.Designation}</h5>
                  <h6>{View?.Department}</h6>
                  <span>{View?.Address1}</span>
                </div>

                <div>
                  <div className="row" style={{ color: "white" }}>
                    <div className="col-lg-3">
                      <HiCurrencyRupee
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Salary</span>
                      <h6 style={{ textAlign: "center" }}>
                        {View?.Salary}/month
                      </h6>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    margin: "3% 2%",

                    border: "1px solid white",
                  }}
                >
                  <h6
                    style={{
                      backgroundColor: "white",
                      padding: "2%",
                      color: "#20958c",
                    }}
                  >
                    Personal Details
                  </h6>

                  <div style={{ padding: "2%" }}>
                    <span>EMAIL : {View?.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl.No</th>
              <th>Profile</th>
              <th> Name</th>
              <th>Email-Id</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Contact</th>
              <th>D-O-B</th>
              <th>Document</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {staffs?.map((details, i) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{++i}</td>
                  <td>
                    <img
                      src={`http://localhost:8521/Staff/${details?.ProfileImg}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>
                    {details?.fname} {details?.lname}
                  </td>
                  <td>{details?.email}</td>
                  <td>{details?.Designation}</td>
                  <td>{details?.Department}</td>
                  <td>{details?.Phone}</td>
                  <td>{details?.DOB}</td>
                  <td>
                    <a
                      href={`http://localhost:8521/Staff/${details?.Docs}`}
                      target="blank"
                    >
                      <GrDocumentText />
                    </a>
                  </td>
                  <td>
                    <div class="btn-group pull-right">
                      <button
                        class="btn deepPink-bgcolor btn-circle btn-outline dropdown-toggle"
                        data-bs-toggle="dropdown"
                        style={{ backgroundColor: "#20958c", color: "white" }}
                      >
                        View
                        {/* <i class="fa fa-angle-down"style={{marginRight:"2%"}}></i> */}
                      </button>
                      <ul
                        class="dropdown-menu pull-right"
                        style={{
                          textAlign: "left",
                          padding: "14%",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#20958c",
                        }}
                      >
                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                            onClick={() => {
                              setView(details);
                              setShow5(true);
                            }}
                          >
                            <i
                              class="fa fa-user-circle"
                              style={{ marginRight: "2%" }}
                            ></i>
                            View Profile{" "}
                          </a>
                        </li>

                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                            onClick={() => {
                              setView(details);
                              setShow1(true);
                            }}
                          >
                            <i
                              class="fa fa-university"
                              style={{ marginRight: "2%" }}
                            ></i>{" "}
                            Add Salary{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                            onClick={() => setShow2(true)}
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              style={{ marginRight: "2%" }}
                            ></i>{" "}
                            Edit{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                          >
                            <i
                              class="fa fa-trash-o"
                              style={{ marginRight: "2%" }}
                            ></i>{" "}
                            Delete{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                          >
                            <i
                              class=" fa fa-unlock"
                              style={{ marginRight: "2%" }}
                            ></i>{" "}
                            Block{" "}
                          </a>
                        </li>

                        {/* <li>
                      <a
                        href="javascript:;"
                        style={{ textDecoration: "none", color: "#20958c" }}
                      >
                        <i class="fa fa-file-excel-o"style={{marginRight:"2%"}}></i> Export to Excel{" "}
                      </a>
                    </li> */}
                      </ul>
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
