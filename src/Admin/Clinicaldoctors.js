import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaUserMd } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";

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

  const signupdocclinic = async () => {
    if (
      validatename(doctorfirstname) &&
      ValidateEmail(email) &&
      phonenumber(mobileno) &&
      CheckPassword(password)
    ) {
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
          getClinicDoctors();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const [ClinicDoctors, setClinicDoctors] = useState([]);
  const getClinicDoctors = () => {
    axios
      .get("http://localhost:8521/api/Clinic/getClinicList")
      .then(function (response) {
        setClinicDoctors(response.data.ClinicalDoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
        setClinicDoctors([]);
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
        getClinicDoctors();
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
       handleClose2()
       getClinicDoctors();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
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
          getClinicDoctors();
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
   
  };
  useEffect(() => {
    getClinicDoctors();
    GetDepartment();
  }, []);

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
            placeholder="Search Clinical doctors"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  type="number"
                  placeholder="Mobile number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
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
              {ClinicDoctors?.map((item, index) => {
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
                      {item?.blocked === false ? (<>
                        <Button
                          onClick={() => {
                            handleShow1();
                            setView(item);
                          }}
                        >
                          Block
                        </Button>
                        <b style={{color:"green"}}> User is UnBlock </b>
                        </>) : (<>
                        <Button
                          onClick={() => {
                            handleShow1();
                            setView(item);
                          }}
                        >
                          Unblock
                        </Button>
                        <b style={{color:"red"}}> User is Block </b>
                      </>)}
                    </td>
                    <td>
                      <div className="d-flex gap-4">
                      <MdEdit 
                      style={{color:"green",fontSize:"20px",cursor:"pointer"}}
                      onClick={()=>{
                        handleShow3();
                        setView(item)
                      }}
                      />
                      <MdDelete 
                       style={{color:"red",fontSize:"20px",cursor:"pointer"}}
                       onClick={()=>{
                         handleShow2();
                         setView(item)
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
          <Button 
          variant="secondary"
          onClick={() => handleClose2()}
          >Close</Button>
          <Button 
          variant="danger"
          onClick={()=>deleteClinicalDoctor()}
          >Delete</Button>
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
                  placeholder={View?.ClinicName}
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
                  placeholder={View?.Firstname}
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
                  placeholder={View?.Lastname}
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
                  placeholder={View?.Email}
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
                  type="number"
                  placeholder={View?.PhoneNumber}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
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
          <Button variant="secondary"
          onClick={handleClose3}
          >Close</Button>
          <Button 
          variant="primary"
          onClick={()=>EditDocClinic()}
          >Edit</Button>
        </Modal.Footer>       
        </Modal>
      </div>
    </div>
  );
}
