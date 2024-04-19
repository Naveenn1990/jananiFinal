import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import {
  BsFillCalendar2PlusFill,
  BsFillCalendarCheckFill,
  BsFillEyeFill,
} from "react-icons/bs";
import { MdEdit, MdOutlineCancel } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { GrDocument, GrDocumentText } from "react-icons/gr";
import { HiCurrencyRupee, HiDocumentText } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { GiToken } from "react-icons/gi";
import { IoMdCalendar } from "react-icons/io";
import axios from "axios";
import moment from "moment/moment";

export default function Hospitaldoctors() {
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

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

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
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
      );
      return false;
    }
  }

  const [medications, setmedications] = useState();

  const [doctorfirstname, setdoctorfirstname] = useState("");
  const [doctorlastname, setdoctorlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Designation, setDesignation] = useState();
  const [Address1, setAddress1] = useState();
  const [Department, setDepartment] = useState();

  const [Education, setEducation] = useState();
  const [Description, setDescription] = useState();
  const [ProfileImg, setProfileImg] = useState();
  const [Docs, setDocs] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const formdata = new FormData();

  //  const addbanner = async (e) => {
  //   e.preventDefault();
  //   if (!Advertiseimg) {
  //     alert("Please Select Advertise Image");
  //   } else {
  //     formdata.append("Advertiseimage", Advertiseimg);
  //     formdata.append("Link", AdvertiseLink);
  //     formdata.append("Text", AdvertiseText);

  //     formdata.append("category", category);
  //     try {
  //       const config = {
  //         url: "/addAdvertise",
  //         method: "post",
  //         baseURL: "https://nalaa.mobi/api/admin",
  //         data: formdata,
  //       };
  //       await axios(config).then(function (res) {
  //         if ((res.status = 200)) {
  //           console.log("success");
  //           alert("Advertise Added");
  //           window.location.reload();
  //         }
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       alert("Advertise not added");
  //     }
  //   }
  // };

  const signup = async () => {
    if (
      validatename(doctorfirstname) &&
      ValidateEmail(email) &&
      phonenumber(mobileno) &&
      CheckPassword(password)
    ) {
      formdata.set("Firstname", doctorfirstname);
      formdata.set("Lastname", doctorlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("Email", email);
      formdata.set("Designation", Designation);
      formdata.set("Department", Department);
      formdata.set("Address1", Address1);
      formdata.set("Education", Education);
      formdata.set("Description", Description);
      formdata.set("Password", password);
      formdata.set("ConfirmPassword", conpassword);
      formdata.set("ProfileImg", ProfileImg);
      formdata.set("Docs", Docs);
      try {
        const config = {
          url: "/Doctor/addDoctor",
          method: "post",
          baseURL: "http://localhost:8521/api",
          // headers: { "Content-Type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        console.log("fjfjd", res);
        if (res.status === 200) {
          // console.log(res.data);
          // console.log(res.data.Success);
          setShow(false);
          getDoctors();
          alert("Signup Success");
          // window.location.assign("/patientPortal");
        }
      } catch (error) {
        console.log(error);
        // alert(error.response.data.error);
      }
    }
  };

  const [Doctors, setDoctors] = useState([]);

  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  // ======================================================

  const [mondayweekoff, setmondayweekoff] = useState("false");
  const [mondayweekstatus, setmondayweekstatus] = useState("");
  const [mondaystartingtime, setmondaystartingtime] = useState("");
  const [mondayendingtime, setmondayendingtime] = useState("");
  const [tuesdayweekoff, settuesdayweekoff] = useState("false");
  const [tuesdayweekstatus, settuesdayweekstatus] = useState("");
  const [tuesdaystartingtime, settuesdaystartingtime] = useState("");
  const [tuesdayendingtime, settuesdayendingtime] = useState("");
  const [wednesdayweekoff, setwednesdayweekoff] = useState("false");
  const [wednesdayweekstatus, setwednesdayweekstatus] = useState("");
  const [wednesdaystartingtime, setwednesdaystartingtime] = useState("");
  const [wednesdayendingtime, setwednesdayendingtime] = useState("");
  const [thrusdayweekoff, setthrusdayweekoff] = useState("false");
  const [thrusdayweekstatus, setthrusdayweekstatus] = useState("");
  const [thrusdaystartingtime, setthrusdaystartingtime] = useState("");
  const [thrusdayendingtime, setthrusdayendingtime] = useState("");
  const [fridayweekoff, setfridayweekoff] = useState("false");
  const [fridayweekstatus, setfridayweekstatus] = useState("");
  const [fridaystartingtime, setfridaystartingtime] = useState("");
  const [fridayendingtime, setfridayendingtime] = useState("");
  const [saturdayweekoff, setsaturdayweekoff] = useState("false");
  const [saturdayweekstatus, setsaturdayweekstatus] = useState("");
  const [saturdaystartingtime, setsaturdaystartingtime] = useState("");
  const [saturdayendingtime, setsaturdayendingtime] = useState("");
  const [sundayweekoff, setsundayweekoff] = useState("false");
  const [sundayweekstatus, setsundayweekstatus] = useState("");
  const [sundaystartingtime, setsundaystartingtime] = useState("");
  const [sundayendingtime, setsundayendingtime] = useState("");
  const [appointmentcharge, setappointmentcharge] = useState("");
  const [salary, setsalary] = useState("");
  const [salaryDate, setsalaryDate] = useState("");
  const [remark, setremark] = useState("");

  function ScheduleValidation() {
    if (
      (mondayweekoff === false || mondayweekoff === "false") &&
      !(mondaystartingtime && mondayendingtime)
    ) {
      return "Please add scheduled time for monday";
    }
    if (
      (tuesdayweekoff === false || tuesdayweekoff === "false") &&
      !(tuesdaystartingtime && tuesdayendingtime)
    ) {
      return "Please add scheduled time for tuesday";
    }
    if (
      (wednesdayweekoff === false || wednesdayweekoff === "false") &&
      !(wednesdaystartingtime && wednesdayendingtime)
    ) {
      return "Please add scheduled time for wednesday";
    }
    if (
      (thrusdayweekoff === false || thrusdayweekoff === "false") &&
      !(thrusdaystartingtime && thrusdayendingtime)
    ) {
      return "Please add scheduled time for thrusday";
    }
    if (
      (fridayweekoff === false || fridayweekoff === "false") &&
      !(fridaystartingtime && fridayendingtime)
    ) {
      return "Please add scheduled time for friday";
    }
    if (
      (saturdayweekoff === false || saturdayweekoff === "false") &&
      !(saturdaystartingtime && saturdayendingtime)
    ) {
      return "Please add scheduled time for saturday";
    }
    if (
      (sundayweekoff === false || sundayweekoff === "false") &&
      !(sundaystartingtime && sundayendingtime)
    ) {
      return "Please add scheduled time for sunday";
    }
    return false;
  }

  const addSchedule = async (e) => {
    e.preventDefault();
    try {
      const validationVal = ScheduleValidation();
      if (validationVal) {
        return alert(validationVal);
      }
      const config = {
        url: `/Doctor/editDoctorDetails/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          mondayweekoff: mondayweekoff,
          mondaystartingtime: mondaystartingtime,
          mondayendingtime: mondayendingtime,
          tuesdayweekoff: tuesdayweekoff,
          tuesdaystartingtime: tuesdaystartingtime,
          tuesdayendingtime: tuesdayendingtime,
          wednesdayweekoff: wednesdayweekoff,
          wednesdaystartingtime: wednesdaystartingtime,
          wednesdayendingtime: wednesdayendingtime,
          thrusdayweekoff: thrusdayweekoff,
          thrusdaystartingtime: thrusdaystartingtime,
          thrusdayendingtime: thrusdayendingtime,
          fridayweekoff: fridayweekoff,
          fridaystartingtime: fridaystartingtime,
          fridayendingtime: fridayendingtime,
          saturdayweekoff: saturdayweekoff,
          saturdaystartingtime: saturdaystartingtime,
          saturdayendingtime: saturdayendingtime,
          sundayweekoff: sundayweekoff,
          sundaystartingtime: sundaystartingtime,
          sundayendingtime: sundayendingtime,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setmondayweekoff("false");
        setmondaystartingtime("");
        setmondayendingtime("");
        settuesdayweekoff("false");
        settuesdaystartingtime("");
        settuesdayendingtime("");
        setwednesdayweekoff("false");
        setwednesdaystartingtime("");
        setwednesdayendingtime("");
        setthrusdayweekoff("false");
        setthrusdaystartingtime("");
        setthrusdayendingtime("");
        setfridayweekoff("false");
        setfridaystartingtime("");
        setfridayendingtime("");
        setsaturdayweekoff("false");
        setsaturdaystartingtime("");
        setsaturdayendingtime("");
        setsundayweekoff("false");
        setsundaystartingtime("");
        setsundayendingtime("");
        setmondayweekstatus("");
        settuesdayweekstatus("");
        setwednesdayweekstatus("");
        setthrusdayweekstatus("");
        setfridayweekstatus("");
        setsaturdayweekstatus("");
        setsundayweekstatus("");
        getDoctors();
        setShow6(false);
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const addAppointmentCharge = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/Doctor/editDoctorDetails/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          appointmentcharge: appointmentcharge,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setappointmentcharge("");
        getDoctors();
        setShow2(false);
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const addSalary = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/Doctor/editDoctorDetails/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          salary: salary,
          salaryDate: salaryDate,
          remark: remark,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setsalary("");
        setsalaryDate("");
        setremark("");
        getDoctors();
        setShow1(false);
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [allAppointments, setallAppointments] = useState([]);
  const getDoctorsAllAppointment = async (val) => {
    axios
      .get(`http://localhost:8521/api/Doctor/appointmentList/${val?._id}`)
      .then(function (response) {
        // handle success
        setallAppointments(response.data.appointmentList);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setallAppointments(error.response.data.appointmentList);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div>
      <div style={{ padding: "1%" }}>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Hospital doctors
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Hospital doctors"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <FaUserMd className="AddIcon1" onClick={() => setShow(true)} />

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
              + ADD APPOINTMENT CHARGE
            </button> */}
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Hospital doctors</Modal.Title>
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
                  onChange={(e) => setdoctorfirstname(e.target.value)}
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
                  onChange={(e) => setdoctorlastname(e.target.value)}
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
                  onChange={(e) => setemail(e.target.value)}
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
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
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
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Designation"
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
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>Select Department</option>
                  <option value="oooo">Department-1</option>
                  <option value="oooo">Department-2</option>
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
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>Select Gender</option>
                  <option value="oooo">Male</option>
                  <option value="oooo">Female</option>
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
                  onChange={(e) => setmobileno(e.target.value)}
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
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  signup(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit Hospital doctors</Modal.Title>
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
                ></input>
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
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Designation"
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
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
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
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
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
                  border: "1px solid white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={() => {
                  setShow(false);
                  alert("Doctor Updated");
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
                  <option>Select doctor</option>
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
                  onChange={(e) => setsalary(e.target.value)}
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
                    marginTop: "4%",
                  }}
                  onChange={(e) => setsalaryDate(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Remark"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setremark(e.target.value)}
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
                  border: "1px solid white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addSalary(e);
                  setShow1(false);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Appointment Charge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {/* <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select doctor</option>
                  <option>John</option>
                  <option>John</option>
                </select>
              </div> */}

              <div className="col-lg-12">
                <input
                  placeholder="Appoinment Charge"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setappointmentcharge(e.target.value)}
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
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  addAppointmentCharge(e);
                  setShow2(false);
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
                  src={`http://localhost:8521/Doctor/${View?.ProfileImg}`}
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
                    Dr. {View?.Firstname} {View?.Lastname}
                  </h4>
                  <h5>{View?.Designation}</h5>
                  <h6>
                    {View?.Education}({View?.Department})
                  </h6>
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
                        {View?.salary}/month
                      </h6>
                    </div>
                    <div className="col-lg-4">
                      {" "}
                      <TbBrandBooking
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Total Appointment</span>
                      <h6 style={{ textAlign: "center" }}>
                        {allAppointments?.length} Appointment
                      </h6>
                    </div>
                    <div className="col-lg-5">
                      <GiToken
                        style={{ fontSize: "25px", marginRight: "1%" }}
                      />
                      <span>Appointment Charge</span>
                      <h6 style={{ textAlign: "center" }}>
                        {View?.appointmentcharge} / person
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
                    <span>EMAIL : {View?.Email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal size="lg" show={show6} onHide={handleClose6}>
          <Modal.Header>
            <Modal.Title>Add Doctor Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <th>WeekOff</th>
                  <th>Day</th>
                  <th>Starting time</th>
                  <th>Ending time</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={
                        mondayweekstatus ? mondayweekoff : View?.mondayweekoff
                      }
                      onChange={(event) => {
                        setmondayweekstatus("changed");
                        setmondayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Monday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        mondaystartingtime
                          ? mondaystartingtime
                          : View?.mondaystartingtime
                      }
                      onChange={(event) =>
                        setmondaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        mondayendingtime
                          ? mondayendingtime
                          : View?.mondayendingtime
                      }
                      onChange={(event) =>
                        setmondayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={
                        tuesdayweekstatus
                          ? tuesdayweekoff
                          : View?.tuesdayweekoff
                      }
                      onChange={(event) => {
                        settuesdayweekstatus("changed");
                        settuesdayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Tuesday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        tuesdaystartingtime
                          ? tuesdaystartingtime
                          : View?.tuesdaystartingtime
                      }
                      onChange={(event) =>
                        settuesdaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        tuesdayendingtime
                          ? tuesdayendingtime
                          : View?.tuesdayendingtime
                      }
                      onChange={(event) =>
                        settuesdayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={View?.wednesdayweekoff}
                      checked={
                        wednesdayweekstatus
                          ? wednesdayweekoff
                          : View?.wednesdayweekoff
                      }
                      onChange={(event) => {
                        setwednesdayweekstatus("changed");
                        setwednesdayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Wednesday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        wednesdaystartingtime
                          ? wednesdaystartingtime
                          : View?.wednesdaystartingtime
                      }
                      onChange={(event) =>
                        setwednesdaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        wednesdayendingtime
                          ? wednesdayendingtime
                          : View?.wednesdayendingtime
                      }
                      onChange={(event) =>
                        setwednesdayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={View?.thrusdayweekoff}
                      checked={
                        thrusdayweekstatus
                          ? thrusdayweekoff
                          : View?.thrusdayweekoff
                      }
                      onChange={(event) => {
                        setthrusdayweekstatus("changed");
                        setthrusdayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Thursday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        thrusdaystartingtime
                          ? thrusdaystartingtime
                          : View?.thrusdaystartingtime
                      }
                      onChange={(event) =>
                        setthrusdaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        thrusdayendingtime
                          ? thrusdayendingtime
                          : View?.thrusdayendingtime
                      }
                      onChange={(event) =>
                        setthrusdayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={View?.fridayweekoff}
                      checked={
                        fridayweekstatus ? fridayweekoff : View?.fridayweekoff
                      }
                      onChange={(event) => {
                        setfridayweekstatus("changed");
                        setfridayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Friday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        fridaystartingtime
                          ? fridaystartingtime
                          : View?.fridaystartingtime
                      }
                      onChange={(event) =>
                        setfridaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        fridayendingtime
                          ? fridayendingtime
                          : View?.fridayendingtime
                      }
                      onChange={(event) =>
                        setfridayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={View?.saturdayweekoff}
                      checked={
                        saturdayweekstatus
                          ? saturdayweekoff
                          : View?.saturdayweekoff
                      }
                      onChange={(event) => {
                        setsaturdayweekstatus("changed");
                        setsaturdayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Saturday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        saturdaystartingtime
                          ? saturdaystartingtime
                          : View?.saturdaystartingtime
                      }
                      onChange={(event) =>
                        setsaturdaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        saturdayendingtime
                          ? saturdayendingtime
                          : View?.saturdayendingtime
                      }
                      onChange={(event) =>
                        setsaturdayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
                <tr
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "#20958c",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      // checked={View?.sundayweekoff}
                      checked={
                        sundayweekstatus ? sundayweekoff : View?.sundayweekoff
                      }
                      onChange={(event) => {
                        setsundayweekstatus("changed");
                        setsundayweekoff(event.target.checked);
                      }}
                    ></input>
                  </td>
                  <td>Sunday</td>
                  <td>
                    <input
                      type="time"
                      value={
                        sundaystartingtime
                          ? sundaystartingtime
                          : View?.sundaystartingtime
                      }
                      onChange={(event) =>
                        setsundaystartingtime(event.target.value)
                      }
                    ></input>
                  </td>
                  <td>
                    <input
                      type="time"
                      value={
                        sundayendingtime
                          ? sundayendingtime
                          : View?.sundayendingtime
                      }
                      onChange={(event) =>
                        setsundayendingtime(event.target.value)
                      }
                    ></input>
                  </td>
                </tr>
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
                onClick={() => {
                  setShow6(false);
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
                onClick={(e) => {
                  addSchedule(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show7} onHide={handleClose7}>
          <Modal.Header>
            <Modal.Title>Doctor Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive="md" style={{ marginTop: "1%" }}>
              <thead>
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <th>WeekOff</th>
                  <th>Day</th>
                  <th>Starting time</th>
                  <th>Ending time</th>
                </tr>
              </thead>
              <tbody>
                {Doctors?.filter((val) => val._id === View?._id)?.map(
                  (item) => {
                    return (
                      <>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.mondayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.mondayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Monday
                              </span>
                            ) : (
                              <>Monday</>
                            )}
                          </td>
                          <td>
                            {item?.mondayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.mondaystartingtime ? (
                              <>
                                {moment(
                                  item?.mondaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.mondayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.mondayendingtime ? (
                              <>
                                {moment(item?.mondayendingtime, "HH:mm").format(
                                  "h:mm A"
                                )}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.tuesdayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.tuesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Tuesday
                              </span>
                            ) : (
                              <>Tuesday</>
                            )}
                          </td>
                          <td>
                            {item?.tuesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.tuesdaystartingtime ? (
                              <>
                                {moment(
                                  item?.tuesdaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.tuesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.tuesdayendingtime ? (
                              <>
                                {moment(
                                  item?.tuesdayendingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.wednesdayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.wednesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Wednesday
                              </span>
                            ) : (
                              <>Wednesday</>
                            )}
                          </td>
                          <td>
                            {item?.wednesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.wednesdaystartingtime ? (
                              <>
                                {moment(
                                  item?.wednesdaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.wednesdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.wednesdayendingtime ? (
                              <>
                                {moment(
                                  item?.wednesdayendingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.thrusdayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.thrusdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Thrusday
                              </span>
                            ) : (
                              <>Thrusday</>
                            )}
                          </td>
                          <td>
                            {item?.thrusdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.thrusdaystartingtime ? (
                              <>
                                {moment(
                                  item?.thrusdaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.thrusdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.thrusdayendingtime ? (
                              <>
                                {moment(
                                  item?.thrusdayendingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.fridayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.fridayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Friday
                              </span>
                            ) : (
                              <>Friday</>
                            )}
                          </td>
                          <td>
                            {item?.fridayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.fridaystartingtime ? (
                              <>
                                {moment(
                                  item?.fridaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.fridayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.fridayendingtime ? (
                              <>
                                {moment(item?.fridayendingtime, "HH:mm").format(
                                  "h:mm A"
                                )}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.saturdayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.saturdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Saturday
                              </span>
                            ) : (
                              <>Saturday</>
                            )}
                          </td>
                          <td>
                            {item?.saturdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.saturdaystartingtime ? (
                              <>
                                {moment(
                                  item?.saturdaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.saturdayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.saturdayendingtime ? (
                              <>
                                {moment(
                                  item?.saturdayendingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                        <tr
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#20958c",
                          }}
                        >
                          <td>
                            {item?.sundayweekoff ? (
                              <MdOutlineCancel
                                style={{
                                  color: "orange",
                                  fontSize: "24px",
                                }}
                              />
                            ) : (
                              <AiOutlineCheckCircle
                                style={{ color: "#20958c", fontSize: "22px" }}
                              />
                            )}
                          </td>
                          <td>
                            {item?.sundayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                Sunday
                              </span>
                            ) : (
                              <>Sunday</>
                            )}
                          </td>
                          <td>
                            {item?.sundayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.sundaystartingtime ? (
                              <>
                                {moment(
                                  item?.sundaystartingtime,
                                  "HH:mm"
                                ).format("h:mm A")}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                          <td>
                            {item?.sundayweekoff ? (
                              <span
                                style={{
                                  color: "orange",
                                }}
                              >
                                WeekOff
                              </span>
                            ) : item?.sundayendingtime ? (
                              <>
                                {moment(item?.sundayendingtime, "HH:mm").format(
                                  "h:mm A"
                                )}
                              </>
                            ) : (
                              <>--:--</>
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  }
                )}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>

        <Modal show={show8} onHide={handleClose8}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <object
                  width="100%"
                  height="400"
                  data={`http://localhost:8521/Doctor/${View?.Docs}`}
                  type={
                    "image/png" ||
                    "application/pdf" ||
                    "image/jpg" ||
                    "image/jpeg"
                  }
                >
                  {" "}
                </object>
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
              <th>Schedule</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {Doctors?.map((item, index) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{++index}</td>
                  <td>
                    <img
                      src={`http://localhost:8521/Doctor/${item?.ProfileImg}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>
                    {item?.Firstname} {item?.Lastname}
                  </td>
                  <td>{item?.Email}</td>
                  <td>{item?.Designation}</td>
                  <td>{item?.Department}</td>
                  <td>{item?.PhoneNumber}</td>
                  <td>{item?.DOB}</td>
                  <td>
                    <a>
                      <HiDocumentText
                        onClick={() => {
                          setView(item);
                          handleShow8();
                        }}
                        style={{ color: "#20958c", fontSize: "28px" }}
                      />
                    </a>
                  </td>
                  {/* <td>
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
                  <AiFillDelete style={{ color: "red" }} />
                  <br></br>
                </div>
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
              </td> */}

                  <td
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <BsFillCalendar2PlusFill
                      style={{
                        color: "#20958c",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setView(item);
                        setShow6(true);
                      }}
                    />
                    <BsFillCalendarCheckFill
                      style={{
                        color: "#20958c",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setView(item);
                        setShow7(true);
                      }}
                    />
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
                              getDoctorsAllAppointment(item);
                              setView(item);
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
                              setView(item);
                              setShow2(true);
                            }}
                          >
                            <i
                              class="	fa fa-database"
                              style={{ marginRight: "2%" }}
                            ></i>{" "}
                            Add Charge{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            style={{ textDecoration: "none", color: "#20958c" }}
                            onClick={() => {
                              setView(item);
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
                            onClick={() => setShow4(true)}
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
                              class="	fa fa-unlock"
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
