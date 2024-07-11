import { Checkbox, Pagination, Stack } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";
import { useReactToPrint } from "react-to-print";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function DoctorsAppointment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (item) => {
    setShow1(true);
    setAppointmentId(item);
  };

  const [ShowAppointmentDetails, setShowAppointmentDetails] = useState({});
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "invoice",
  });

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };

  const prefix = "JAN";
  const randomNumber = generateRandomNumber();
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");

  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [DocDept, setDocDept] = useState("");
  const [ConsultantDrInfo, setConsultantDrInfo] = useState();
  const [StatrtTime, setStatrtTime] = useState(null);

  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [ConsultantDr, setConsultantDr] = useState();
  const [DateofApp, setDateofApp] = useState();
  const [Time, setTime] = useState();
  const [Condition, setCondition] = useState();
  const [Note, setNote] = useState();
  const [Document, setDocument] = useState();
  const [medicalReason, setmedicalReason] = useState();

  function selectedDocOck(val) {
    let docInfo = Doctors.find((item) => item?._id === val);
    setConsultantDrInfo(docInfo);
  }
  const [SelectedTime, setSelectedTime] = useState({});
  useEffect(() => {
    if (StatrtTime) {
      setSelectedTime(JSON?.parse(StatrtTime));
    }
  }, [StatrtTime]);
  const formdata = new FormData();

  const BookAppointment = async (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!nameRegex.test(patientfirstname)) {
      return alert(
        "Invalid first name. Only letters are allowed, and it should be between 2 and 30 characters long."
      );
    }
    if (!nameRegex.test(patientlastname)) {
      return alert(
        "Invalid last name. Only letters are allowed, and it should be between 2 and 30 characters long."
      );
    }
    if (!emailRegex.test(email)) {
      return alert("Invalid email address.");
    }
    if (!DOB) {
      return alert("Please select date of birth.");
    }
    if (!gender) {
      return alert("Please select gender.");
    }
    if (!phoneRegex.test(mobileno)) {
      return alert(
        "Invalid phone number. It should be exactly 10 digits long."
      );
    }
    if (!DocDept) {
      return alert("Please Select Department");
    }
    if (!ConsultantDr) {
      return alert("Please Select Doctor");
    }
    if (!DateofApp) {
      return alert("Please Select Appointment Date");
    }
    if (!StatrtTime) {
      return alert("Please Select Appointment Time");
    }
    if (!medicalReason) {
      return alert("Please Enter Medical Reason");
    }
    if (!Condition) {
      return alert("Please Enter Patient Condition");
    }
    if (!Note) {
      return alert("Please Write Note about Patient");
    }
    if (!Document) {
      return alert("Please Upload Patient Medical Documnet");
    }
    formdata.append("token", prefix + randomNumber);
    formdata.append("PatientId", "Admin");
    formdata.append("Firstname", patientfirstname);
    formdata.append("Lastname", patientlastname);
    formdata.append("Email", email);
    formdata.append("DOB", DOB);
    formdata.append("Gender", gender);
    formdata.append("PhoneNumber", mobileno);
    formdata.append("ConsultantDoctor", ConsultantDr);
    formdata.append("Dateofappointment", DateofApp);
    formdata.append("starttime", SelectedTime?.startTime);
    formdata.append("endtime", SelectedTime?.endTime);
    formdata.append("medicalReason", medicalReason);
    formdata.append("Condition", Condition);
    formdata.append("Note", Note);
    formdata.append("Address1", Address);
    formdata.append("Document", Document);
    formdata.append("ScheduleId", SelectedTime?._id);
    try {
      const config = {
        url: "/user/addappointment",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        setShow(false);
        alert("Appointment Added");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [data, setdata] = useState([]);
  const getdata = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        setdata(response.data.Info);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("data", data);
  const [Doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [AppointmentId, setAppointmentId] = useState({});

  console.log("AppointmentId", AppointmentId);
  const UpdateBookingAppointment = async () => {
    try {
      const config = {
        url: "/user/rescheduleapp",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          AppointmentId: AppointmentId?._id,
          starttime: SelectedTime?.startTime,
          endtime: SelectedTime?.endTime,
          rescheduleId: SelectedTime?._id,

          doctorId: AppointmentId?.ConsultantDoctor?._id,
          bookedscheduleId: AppointmentId?.ScheduleId,
          Dateofappointment: DateofApp,
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getdata();
        handleClose1();
        window.location.assign("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [PaymentStatus, setPaymentStatus] = useState();
  console.log("PaymentStatus", PaymentStatus);
  const PaymentUpdate = async () => {
    if (!PaymentStatus) {
      return alert("Please check the paid box");
    }
    try {
      const config = {
        url: "/user/payment",
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          payment: PaymentStatus,
          appointmentid: ShowAppointmentDetails?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setPaymentStatus("");
        handleClose2();
        getdata();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  // Get Hospital Department
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
  const Doctorschedule = Doctors?.find((doc) => doc?._id === ConsultantDr);
  const uniqueDates = new Set();
  const [selecteTimearray, setselecteTimearray] = useState([]);
  useEffect(() => {
    if (DateofApp) {
      const asd = Doctorschedule?.scheduleList.filter(
        (item) =>
          item.scheduleDate == DateofApp && item.bookingstatus === "Vacant"
      );
      setselecteTimearray(asd);
    }
  }, [DateofApp]);

  //Reschedule Appointemnt
  const DoctorReschedule = Doctors?.find(
    (doc) => doc?._id === AppointmentId?.ConsultantDoctor?._id
  );
  const [selecteRescheduleTimearray, setselecteRescheduleTimearray] = useState(
    []
  );
  useEffect(() => {
    if (AppointmentId?.Dateofappointment) {
      const asd = DoctorReschedule?.scheduleList.filter(
        (item) =>
          item.scheduleDate == AppointmentId?.Dateofappointment &&
          item.bookingstatus === "Vacant"
      );
      setselecteRescheduleTimearray(asd);
    }
  }, [AppointmentId?.Dateofappointment]);

  useEffect(() => {
    getDoctors();
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

  const [fileName, setfileName] = useState("Appointments");

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Appointment's
          </h6>

          {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <RiStethoscopeLine
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
            <input
              placeholder="Search Appointment"
              style={{
                padding: "5px 10px",
                border: "1px solid #20958c",
                borderRadius: "0px",
              }}
              type="search"
              onChange={(e)=>setSearchItem(e.target.value)}
            />
          </div> */}
        </div>
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
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title> Add Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpatientfirstname(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpatientlastname(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="date"
                  placeholder="DOB"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setDOB(e.target.value)}
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
                    marginTop: "2%",
                  }}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Mobile"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "2%",
                  }}
                  onChange={(e) => setmobileno(e.target.value)}
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
                    marginTop: "2%",
                  }}
                  onChange={(e) => setDocDept(e.target.value)}
                >
                  <option value="">Select Deparment</option>
                  {/* {[...new Set(Doctors?.map((item) => item?.Department))]?.map(
                    (department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    )
                  )} */}
                  {GetDepartmentData?.map((dep) => (
                    <option value={dep?.DepartmentName}>
                      {dep?.DepartmentName}
                    </option>
                  ))}
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
                    marginTop: "2%",
                  }}
                  onChange={(e) => {
                    setConsultantDr(e.target.value);
                    selectedDocOck(e.target.value);
                  }}
                >
                  <option>Select Consulting Doctor</option>
                  {Doctors?.filter((ele) => ele.Department === DocDept)?.map(
                    (item) => {
                      return (
                        <option value={item?._id}>
                          {item?.Firstname}&nbsp;{item?.Lastname}
                        </option>
                      );
                    }
                  )}
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
                    marginTop: "2%",
                  }}
                  onChange={(e) => {
                    setDateofApp(e.target.value);
                  }}
                >
                  <option>Date of Appointment</option>
                  {/* {[
                    ...new Set(
                      Doctors.filter(
                        (ele) => ele?._id === ConsultantDr
                      ).flatMap((doctor) =>
                        doctor?.scheduleList?.map(
                          (scheduleItem) => scheduleItem?.scheduleDate
                        )
                      )
                    ),
                  ].map((uniqueDate, index) => (
                    <option key={index} value={uniqueDate}>
                      {uniqueDate}
                    </option>
                  ))} */}
                  {Doctorschedule?.scheduleList
                    ?.filter(
                      (schedd) =>
                        moment(schedd?.scheduleDate).isSameOrAfter(
                          moment(),
                          "day"
                        ) && schedd?.bookingstatus === "Vacant"
                    )
                    ?.map((shedul) => {
                      const formattedDate = moment(shedul?.scheduleDate).format(
                        "DD-MM-YYYY"
                      );
                      if (!uniqueDates.has(formattedDate)) {
                        uniqueDates.add(formattedDate);
                        return (
                          <option
                            value={shedul?.scheduleDate}
                            key={shedul?.scheduleDate}
                          >
                            {formattedDate}
                          </option>
                        );
                      }
                      return null; // Return null for duplicates, so they are not rendered
                    })}
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
                    marginTop: "2%",
                  }}
                  onChange={(e) => {
                    setStatrtTime(e.target.value);
                  }}
                >
                  <option>Select Time</option>
                  {/* {Doctors?.filter((ele) => ele?._id === ConsultantDr)?.flatMap(
                    (doctor) =>
                      doctor?.scheduleList
                        ?.filter((ele) => ele.scheduleDate === DateofApp)
                        ?.map((scheduleItem, index) => (
                          <option
                            key={index}
                            value={JSON.stringify(scheduleItem)}
                          >
                            {`${scheduleItem?.startTime} to ${scheduleItem?.endTime}`}
                          </option>
                        ))
                  )} */}
                  {selecteTimearray?.map((shedul) => (
                    <option value={JSON.stringify(shedul)}>
                      {/* <option value={shedul?._id}> */}
                      {shedul?.startTime}-{shedul?.endTime}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Medical-Reason/Disease"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setmedicalReason(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Injury/Condition"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setCondition(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <textarea
                  placeholder="Note"
                  cols={7}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder="Address"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Document
                </label>
                <br />
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: "2%",
                    border: "1px solid lightgrey",
                  }}
                  onChange={(e) => setDocument(e.target.files[0])}
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
                onClick={(e) => BookAppointment(e)}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title> Edit Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="Name"
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
                  }}
                ></input>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Date of Appointment :
                    </h6>
                  </div>
                  <div className="col-lg-6">
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
                <input
                  placeholder="Mobile"
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
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment From :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
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
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-lg-6">
                    <h6 style={{ marginTop: "20px", color: "white" }}>
                      Appointment To :
                    </h6>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <input
                      type="time"
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
                <input
                  placeholder="Consulting Doctor"
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
                  placeholder="Injury/Condition"
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
                onClick={() => {
                  setShow1(false);
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
                  setShow1(false);
                  alert("Appointment Updated");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal> */}
        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table responsive="md" style={{ marginTop: "1%" }} bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                {/* <th>Profile</th> */}
                <th> Sl.No</th>
                <th> Name</th>
                <th>Email-Id</th>
                <th>Date of Appointment</th>
                <th>Time</th>
                <th>Mobile</th>
                <th>Injury/Condition</th>
                <th>Token</th>
                <th>Status</th>
                <th>Invoice</th>
                <th>Reschedule</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, i) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          <td>{item?.Dateofappointment}</td>
                          <td>
                            {item?.starttime} to {item?.endtime}
                          </td>
                          <td>{item?.PhoneNumber}</td>

                          <td>{item?.medicalReason}</td>
                          <td>{item?.token}</td>
                          <td>
                            {item?.payment === "unpaid" ? (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow2();
                                    setShowAppointmentDetails(item);
                                  }}
                                >
                                  Payment
                                </Button>
                                <p>{item?.payment}</p>
                              </>
                            ) : (
                              <p>Payment Done</p>
                            )}
                          </td>
                          <td>
                            {item?.payment === "unpaid" ? (
                              <p>Payment is pending</p>
                            ) : (
                              <Button
                                onClick={() => {
                                  handleShow3();
                                  setShowAppointmentDetails(item);
                                }}
                              >
                                Invoice
                              </Button>
                            )}
                          </td>
                          <td>
                            {" "}
                            <p
                              style={{
                                color: "green",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            >
                              <FaEdit onClick={() => handleShow1(item)} />
                            </p>
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, i) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{i + 1}</td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          <td>{item?.Dateofappointment}</td>
                          <td>
                            {item?.starttime} to {item?.endtime}
                          </td>
                          <td>{item?.PhoneNumber}</td>

                          <td>{item?.medicalReason}</td>
                          <td>{item?.token}</td>
                          <td>
                            {item?.payment === "unpaid" ? (
                              <>
                                <Button
                                  onClick={() => {
                                    handleShow2();
                                    setShowAppointmentDetails(item);
                                  }}
                                >
                                  Payment
                                </Button>
                                <p>{item?.payment}</p>
                              </>
                            ) : (
                              <p>Payment Done</p>
                            )}
                          </td>
                          <td>
                            {item?.payment === "unpaid" ? (
                              <p>Payment is pending</p>
                            ) : (
                              <Button
                                onClick={() => {
                                  handleShow3();
                                  setShowAppointmentDetails(item);
                                }}
                              >
                                Invoice
                              </Button>
                            )}
                          </td>
                          <td>
                            {" "}
                            <p
                              style={{
                                color: "green",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            >
                              <FaEdit onClick={() => handleShow1(item)} />
                            </p>
                          </td>
                        </tr>
                      );
                    })}
            </tbody>
          </Table>
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
        </div>
      </div>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container" style={{ backgroundColor: "white" }}>
            <div className="d-flex align-items-center gap-4">
              <b>Doctor Name : </b>
              <p>{`${ShowAppointmentDetails?.ConsultantDoctor?.Firstname} ${ShowAppointmentDetails?.ConsultantDoctor?.Firstname} `}</p>
            </div>
            <div className="d-flex align-items-center gap-4">
              <b> Consultation fee : </b>
              <p>
                {ShowAppointmentDetails?.ConsultantDoctor?.appointmentcharge} /-
              </p>
            </div>
            <div className="d-flex align-items-center gap-4">
              <b> Payment : </b>
              <p>
                Paid
                <Checkbox
                  onChange={(e) =>
                    setPaymentStatus(e.target.checked ? "paid" : "")
                  }
                  checked={PaymentStatus === "paid"}
                />
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={PaymentUpdate}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef}>
            <div style={{ overflow: "hidden", overflowX: "scroll" }}>
              <div
                className="invoice-rspns"
                style={{
                  boxShadow: " 0px 8px 32px 0px rgba(19, 19, 20, 0.37)",
                  background: "#f5f6fa",
                  backdropFilter: "blur(4px)",
                  padding: "20px",
                }}
              >
                <div className="">
                  <div className="mb-5">
                    <img
                      style={{ width: "40px", height: "40px" }}
                      className="logo me-2 "
                      src="/img/logo.png"
                      alt="Logo"
                    />{" "}
                    <br />
                    <span
                      className="fw-bold fs-4"
                      style={{ color: "rgb(32 139 140)" }}
                    >
                      JANANI
                    </span>
                    <br />
                    <span>JananiPharmacy@gmail.com</span>
                    <br />
                    <span>+91 9989212993</span>
                    <br />
                    <span>Singapur Layout, Banglore</span>
                    <br />
                  </div>
                </div>

                <div
                  className="row"
                  style={{ border: "2px solid", padding: "0px" }}
                >
                  <div className="col-sm-4">
                    <div>
                      <b>Patient Name : </b>{" "}
                      {`${ShowAppointmentDetails?.Firstname} ${ShowAppointmentDetails?.Firstname}`}
                    </div>
                    <div>
                      <b>Patient DOB : </b> {ShowAppointmentDetails?.DOB}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div>
                      <b>Gender : </b> {ShowAppointmentDetails?.Gender}
                    </div>
                    <div>
                      <b>Time : </b> {ShowAppointmentDetails?.starttime}/{" "}
                      {ShowAppointmentDetails?.endtime}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div>
                      <b>Register Date : </b>
                      {moment(ShowAppointmentDetails?.createdAt).format(
                        "DD/MM/YYYY"
                      )}
                    </div>
                    <div>
                      <b>Doctor : </b>
                      {`${ShowAppointmentDetails?.ConsultantDoctor?.Firstname}
                        ${ShowAppointmentDetails?.ConsultantDoctor?.Lastname}
                        `}
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Medical Reason</th>
                        <th>Condition</th>
                        <th>Note</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{ShowAppointmentDetails?.medicalReason}</td>
                        <td>{ShowAppointmentDetails?.Condition}</td>
                        <td>{ShowAppointmentDetails?.Note}</td>
                        <td>{ShowAppointmentDetails?.Address1} </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div>
                  <p style={{ textAlign: "right" }}>
                    Amount Paid :{" "}
                    {
                      ShowAppointmentDetails?.ConsultantDoctor
                        ?.appointmentcharge
                    }{" "}
                    /-
                  </p>
                  <p style={{ textAlign: "right" }}>
                    Payment Status : {ShowAppointmentDetails?.payment}
                  </p>
                </div>
                <div>
                  <p style={{ textAlign: "center" }}>
                    ---------The end of Report---------
                  </p>
                </div>
                <hr />
                <div className="text-center text-dark ">
                  <p>
                    Invoice Generated By: Janani Hospital, Contact :
                    JananiHospital@gamil.com{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={handleprint}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reschedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>Date of Appointment</h6>
            <Form.Select
              className="width-respns width-respns-768px"
              style={{ width: "400px", marginBottom: "20px" }}
              aria-label="Default select example"
              onChange={(e) => setDateofApp(e.target.value)}
            >
              <option>Date of Appointment</option>
              {/* {[
                    ...new Set(
                      Doctors.filter(
                        (ele) => ele?._id === AppointmentId?.ConsultantDoctor?._id
                      ).flatMap((doctor) =>
                        doctor?.scheduleList?.map(
                          (scheduleItem) => scheduleItem?.scheduleDate
                        )
                      )
                    ),
                  ].map((uniqueDate, index) => (
                    <option key={index} value={uniqueDate}>
                      {uniqueDate}
                    </option>
                  ))} */}
              {DoctorReschedule?.scheduleList
                ?.filter(
                  (schedd) =>
                    moment(schedd?.scheduleDate).isSameOrAfter(
                      moment(),
                      "day"
                    ) && schedd?.bookingstatus === "Vacant"
                )
                ?.map((shedul) => {
                  const formattedDate = moment(shedul?.scheduleDate).format(
                    "DD-MM-YYYY"
                  );
                  if (!uniqueDates.has(formattedDate)) {
                    uniqueDates.add(formattedDate);
                    return (
                      <option
                        value={shedul?.scheduleDate}
                        key={shedul?.scheduleDate}
                      >
                        {formattedDate}
                      </option>
                    );
                  }
                  return null;
                })}
            </Form.Select>
          </div>
          <div>
            <h6>Time of Appointment</h6>
            <Form.Select
              className="width-respns width-respns-768px"
              style={{ width: "400px", marginBottom: "20px" }}
              aria-label="Default select example"
              onChange={(e) => setStatrtTime(e.target.value)}
            >
              <option>Time of Appointment</option>
              {selecteRescheduleTimearray?.map((shedul) => (
                <option value={JSON.stringify(shedul)}>
                  {shedul?.startTime}-{shedul?.endTime}
                </option>
              ))}
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button onClick={UpdateBookingAppointment} variant="success">
            Reschedule
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
