import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaUserMd } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function Clinicaldoctors() {
  const [View, setView] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

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
    var phoneno = /^[a-zA-Z ]{2,30}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
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
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character or should be length 8!"
      );
      return false;
    }
  }

  const [GetDepartmentData, setGetDepartmentData] = useState([]);
  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setGetDepartmentData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [ClinicName, setClinicName] = useState("");
  const [doctorfirstname, setdoctorfirstname] = useState("");
  const [doctorlastname, setdoctorlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [Department, setDepartment] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [Address1, setAddress1] = useState("");
  const [Education, setEducation] = useState("");
  const [ProfileImg, setProfileImg] = useState("");
  const [Description, setDescription] = useState();
  const [Docs, setDocs] = useState();
  const formdata = new FormData();
  const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  const emailPattern = /^[^\s@]+@gmail\.com$/;
  const mobilePattern = /^[0-9]{10}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const signupdocclinic = async () => {
    if(!ClinicName){
      return alert ("Enter Clinic Name...")
    }
    if (!doctorfirstname) {
      return alert("Enter first name");
    } else if (!nameRegex.test(doctorfirstname)) {
      return alert(
        "Enter a valid first name (letters only)"
      );
    }
    if (!doctorlastname) {
      return alert("Enter  last name");
    } else if (!nameRegex.test(doctorlastname)) {
      return alert(
        "Enter a valid last name (letters only)"
      );
    }
    if (!email) {
      return alert("Enter Email Id");
    } else if (!emailPattern.test(email)) {
      return alert("Enter a valid Gmail address (e.g., example@gmail.com)");
    }

    if (!mobileno) {
      return alert("Enter mobile number..!");
    } else if (!mobilePattern.test(mobileno)) {
      return alert("Enter a valid 10-digit mobile number");
    }

    if(!gender){
      return alert("Please Select gender..!")
    }
    if(!DOB){
      return alert("Please Select date of birth..!")
    }
    if(!Department){
      return alert("Please Select Department..!")
    }

    if (!password) {
      return alert("Enter password..!");
    } else if (!passwordPattern.test(password)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }

    if (!conpassword) {
      return alert("Enter confirm password..!");
    } else if (!passwordPattern.test(conpassword)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if(password !== conpassword){
      return alert("Passwords do not match. Please check again.");
    }

    if(!Address1){
      return alert ("Enter Address..!")
    }
    if(!Education){
      return alert ("Enter Education..!")
    }
    if(!ProfileImg){
      return alert ("Upload profile pic..!")
    }
    if(!Docs){
      return alert ("Upload Certificate ..!")
    }
    if(!Description){
      return alert ("Enter Description..!")
    }

      formdata.set("ClinicName", ClinicName);
      formdata.set("Firstname", doctorfirstname);
      formdata.set("Lastname", doctorlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("Email", email);
      formdata.set("Department", Department);
      formdata.set("Address1", Address1);
      formdata.set("Education", Education);
      formdata.set("Description", Description);
      formdata.set("Password", password);
      formdata.set("ConfirmPassword", conpassword);
      formdata.set("ProfileImg", ProfileImg);
      formdata.set("certificate", Docs);
      try {
        const config = {
          url: "/Clinic/addClinic",
          method: "post",
          baseURL: "http://localhost:8521/api",
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          getdata();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    
  };

  const [data, setdata] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:8521/api/Clinic/getClinicList")
      .then(function (response) {
        setdata(response.data.ClinicalDoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
        setdata([]);
      });
  };
  const ClinicDoctorBlock = async () => {
    try {
      const config = {
        url: `/Clinic/clinicdoctorblock/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose1();
        getdata();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  const deleteClinicalDoctor = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/Clinic/deleteclinicDetails/${View?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        handleClose2();
        getdata();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
<<<<<<< HEAD
  const EditDocClinic = async () => {
    formdata.set("ClinicName", ClinicName);
    formdata.set("Firstname", doctorfirstname);
    formdata.set("Lastname", doctorlastname);
    formdata.set("Gender", gender);
    formdata.set("DOB", DOB);
    formdata.set("PhoneNumber", mobileno);
    formdata.set("Email", email);
    formdata.set("Department", Department);
    formdata.set("Address1", Address1);
    formdata.set("Education", Education);
    formdata.set("Description", Description);
    formdata.set("Password", password);
    formdata.set("ConfirmPassword", conpassword);
    formdata.set("ProfileImg", ProfileImg);
    formdata.set("certificate", Docs);
    try {
      const config = {
        url: "/Clinic/editClinicDetails/" + View?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose3();
        getdata();
=======

  useEffect(() => {
    if(View){
      setClinicName(View?.ClinicName || "");
      setdoctorfirstname(View?.Firstname || "");
      setdoctorlastname(View?.Lastname || "");
      setemail(View?.Email || "");
      setmobileno(View?.PhoneNumber || "");
      setgender(View?.Gender || "");
      setDOB(View?.DOB || "");
      setDepartment(View?.Department || "");
      setDepartment(View?.Department || "");
    }
 
  }, [View])
  
  const EditDocClinic = async () => {  
    if (!nameRegex.test(doctorfirstname)) {
      return alert(
        "Enter a valid first name (letters only)"
      );
    }
  if (!nameRegex.test(doctorlastname)) {
      return alert(
        "Enter a valid last name (letters only)"
      );
    }

   if (!emailPattern.test(email)) {
      return alert("Enter a valid Gmail address (e.g., example@gmail.com)");
    }

   if (!mobilePattern.test(mobileno)) {
      return alert("Enter a valid 10-digit mobile number");
    }  

    if (!passwordPattern.test(password)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }

    if (!passwordPattern.test(conpassword)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if(password !== conpassword){
      return alert("Passwords do not match. Please check again.");
    }
      formdata.set("ClinicName", ClinicName);
      formdata.set("Firstname", doctorfirstname);
      formdata.set("Lastname", doctorlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("Email", email);
      formdata.set("Department", Department);
      formdata.set("Address1", Address1);
      formdata.set("Education", Education);
      formdata.set("Description", Description);
      formdata.set("Password", password);
      formdata.set("ConfirmPassword", conpassword);
      formdata.set("ProfileImg", ProfileImg);
      formdata.set("certificate", Docs);
      try {
        const config = {
          url: "/Clinic/editClinicDetails/" + View?._id,
          method: "put",
          baseURL: "http://localhost:8521/api",
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose3();
          getClinicDoctors();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    getdata();
    GetDepartment();
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

  const exportType = "xls";

  const [fileName, setfileName] = useState("Clinical-Doctors");

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
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Clinical doctors
        </h6>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search"
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

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Clinical doctors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
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
                  onChange={(e) => setClinicName(e.target.value)}
                />
              </div>
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
                  onChange={(e) => setdoctorfirstname(e.target.value)}
                />
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
                    marginTop: "4%",
                  }}
                  onChange={(e) => setdoctorlastname(e.target.value)}
                />
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
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Mobile number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  maxLength={10}
                  onChange={(e) => setmobileno(e.target.value)}
                />
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
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>Select Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
                    </h6>
                  </div>
                  <div className="col-lg-8">
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
                      max={new Date().toISOString().split('T')[0]} 
                      onChange={(e) => setDOB(e.target.value)}
                    />
                  </div>
                </div>
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
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select Department *</option>
                  {GetDepartmentData?.map((item) => (
                    <>
                      <option value={item?.DepartmentName}>
                        {item?.DepartmentName}
                      </option>
                    </>
                  ))}
                </select>
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
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
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
                />
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
                  onChange={(e) => setAddress1(e.target.value)}
                />
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
                  onChange={(e) => setEducation(e.target.value)}
                />
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
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  accept="image/*"
                  onChange={(e) => setProfileImg(e.target.files[0])}
                ></input>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload Clinic Certificate
                </label>
                <br/>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocs(e.target.files[0])}
                />
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
                  onChange={(e) => setDescription(e.target.value)}
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
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  signupdocclinic(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <div style={{ overflowX: "scroll" }}>
          <Table bordered style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Sl.No</th>
                <th>Profile</th>
                <th> Name</th>
                <th>Email-Id</th>
                <th>Department</th>
                <th>Contact</th>
                <th>D-O-B</th>
                <th>Document</th>
                <th>Status</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{++index}</td>
                          <td>
                            <img
                              src={`http://localhost:8521/Clinic/${item?.ProfileImg}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                              alt=""
                            />
                            {item?.ClinicDocId}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          <td>{item?.Department}</td>
                          <td>{item?.PhoneNumber}</td>
                          <td>{item?.DOB}</td>
                          <td>
                            <p>
                              <HiDocumentText
                                onClick={() => {
                                  setView(item);
                                }}
                                style={{ color: "#20958c", fontSize: "28px" }}
                              />
                            </p>
                          </td>
                          <td>
                            {item?.blocked === false ? (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow1();
                                    setView(item);
                                  }}
                                >
                                  Block
                                </Button>
                                <b style={{ color: "green" }}>
                                  {" "}
                                  User is UnBlock{" "}
                                </b>
                              </>
                            ) : (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow1();
                                    setView(item);
                                  }}
                                >
                                  Unblock
                                </Button>
                                <b style={{ color: "red" }}> User is Block </b>
                              </>
                            )}
                          </td>
                          <td>
                            <div className="d-flex gap-4">
                              <MdEdit
                                style={{
                                  color: "green",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleShow3();
                                  setView(item);
                                }}
                              />
                              <MdDelete
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleShow2();
                                  setView(item);
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{++index}</td>
                          <td>
                            <img
                              src={`http://localhost:8521/Clinic/${item?.ProfileImg}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                              alt=""
                            />
                            {item?.ClinicDocId}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          <td>{item?.Department}</td>
                          <td>{item?.PhoneNumber}</td>
                          <td>{item?.DOB}</td>
                          <td>
                            <p>
                              <HiDocumentText
                                onClick={() => {
                                  setView(item);
                                }}
                                style={{ color: "#20958c", fontSize: "28px" }}
                              />
                            </p>
                          </td>
                          <td>
                            {item?.blocked === false ? (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow1();
                                    setView(item);
                                  }}
                                >
                                  Block
                                </Button>
                                <b style={{ color: "green" }}>
                                  {" "}
                                  User is UnBlock{" "}
                                </b>
                              </>
                            ) : (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow1();
                                    setView(item);
                                  }}
                                >
                                  Unblock
                                </Button>
                                <b style={{ color: "red" }}> User is Block </b>
                              </>
                            )}
                          </td>
                          <td>
                            <div className="d-flex gap-4">
                              <MdEdit
                                style={{
                                  color: "green",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleShow3();
                                  setView(item);
                                }}
                              />
                              <MdDelete
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleShow2();
                                  setView(item);
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
        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Block Doctor Clinic Authentication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Are You sure , You want to Block this Doctor Clinic information.
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
                onClick={() => handleClose1()}
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
                onClick={() => ClinicDoctorBlock()}
              >
                BLOCK
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Delete Doctor Clinic Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Are You sure , You want to Delete this Doctor Clinic information.
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose2()}>
              Close
            </Button>
            <Button variant="danger" onClick={() => deleteClinicalDoctor()}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show3} onHide={handleClose3}>
          <Modal.Header>
            <Modal.Title>Edit Clinical Doctor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={ClinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input                 
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={doctorfirstname}
                  onChange={(e) => setdoctorfirstname(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={doctorlastname}
                  onChange={(e) => setdoctorlastname(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
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
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  value={mobileno}
                  onChange={(e) => setmobileno(e.target.value)}
                />
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
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>Select Gender*</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-4">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of birth :
                    </h6>
                  </div>
                  <div className="col-lg-8">
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
                    />
                  </div>
                </div>
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
                  <option>Select Department *</option>
                  {GetDepartmentData?.map((item) => (
                    <>
                      <option value={item?.DepartmentName}>
                        {item?.DepartmentName}
                      </option>
                    </>
                  ))}
                </select>
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
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
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
                />
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder={View?.Address1}
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
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder={View?.Education}
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
                  onChange={(e) => setEducation(e.target.value)}
                />
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
                  Upload Clinic Certificate
                </label>
                <br></br>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocs(e.target.files[0])}
                />
              </div>

              <div className="col-lg-12">
                <textarea
                  placeholder={View?.Description}
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
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
            <Button variant="primary" onClick={() => EditDocClinic()}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
