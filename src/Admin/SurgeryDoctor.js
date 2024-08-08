import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import {
  BsFillCalendar2PlusFill,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { HiCurrencyRupee, HiDocumentText } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { GiToken } from "react-icons/gi";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function SurgeryDoctor() {
  const Input = styled("input")({
    display: "none",
  });

  const allTimes = [
    { settime: "12:00 AM", gettime: "12:30 AM" },
    { settime: "12:30 AM", gettime: "1:00 AM" },
    { settime: "1:00 AM", gettime: "1:30 AM" },
    { settime: "1:30 AM", gettime: "2:00 AM" },
    { settime: "2:00 AM", gettime: "2:30 AM" },
    { settime: "2:30 AM", gettime: "3:00 AM" },
    { settime: "3:00 AM", gettime: "3:30 AM" },
    { settime: "3:30 AM", gettime: "4:00 AM" },
    { settime: "4:00 AM", gettime: "4:30 AM" },
    { settime: "4:30 AM", gettime: "5:00 AM" },
    { settime: "5:00 AM", gettime: "5:30 AM" },
    { settime: "5:30 AM", gettime: "6:00 AM" },
    { settime: "6:00 AM", gettime: "6:30 AM" },
    { settime: "6:30 AM", gettime: "7:00 AM" },
    { settime: "7:00 AM", gettime: "7:30 AM" },
    { settime: "7:30 AM", gettime: "8:00 AM" },
    { settime: "8:00 AM", gettime: "8:30 AM" },
    { settime: "8:30 AM", gettime: "9:00 AM" },
    { settime: "9:00 AM", gettime: "9:30 AM" },
    { settime: "9:30 AM", gettime: "10:00 AM" },
    { settime: "10:00 AM", gettime: "10:30 AM" },
    { settime: "10:30 AM", gettime: "11:00 AM" },
    { settime: "11:00 AM", gettime: "11:30 AM" },
    { settime: "11:30 AM", gettime: "12:00 PM" },
    { settime: "12:00 PM", gettime: "12:30 PM" },
    { settime: "12:30 PM", gettime: "1:00 PM" },
    { settime: "1:00 PM", gettime: "1:30 PM" },
    { settime: "1:30 PM", gettime: "2:00 PM" },
    { settime: "2:00 PM", gettime: "2:30 PM" },
    { settime: "2:30 PM", gettime: "3:00 PM" },
    { settime: "3:00 PM", gettime: "3:30 PM" },
    { settime: "3:30 PM", gettime: "4:00 PM" },
    { settime: "4:00 PM", gettime: "4:30 PM" },
    { settime: "4:30 PM", gettime: "5:00 PM" },
    { settime: "5:00 PM", gettime: "5:30 PM" },
    { settime: "5:30 PM", gettime: "6:00 PM" },
    { settime: "6:00 PM", gettime: "6:30 PM" },
    { settime: "6:30 PM", gettime: "7:00 PM" },
    { settime: "7:00 PM", gettime: "7:30 PM" },
    { settime: "7:30 PM", gettime: "8:00 PM" },
    { settime: "8:00 PM", gettime: "8:30 PM" },
    { settime: "8:30 PM", gettime: "9:00 PM" },
    { settime: "9:00 PM", gettime: "9:30 PM" },
    { settime: "9:30 PM", gettime: "10:00 PM" },
    { settime: "10:00 PM", gettime: "10:30 PM" },
    { settime: "10:30 PM", gettime: "11:00 PM" },
    { settime: "11:00 PM", gettime: "11:30 PM" },
    { settime: "11:30 PM", gettime: "12:00 AM" },
  ];
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

  const [selectedDoctor, setselectedDoctor] = useState({});
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = (item) => {
    setShow4(true);
    setselectedDoctor(item);
  };

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

  const [deleteData, setdeleteData] = useState({});
  const [showdelete, setShowdelete] = useState(false);
  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = (data) => {
    setShowdelete(true);
    setdeleteData(data);
  };

  const [BlockData, setBlockData] = useState({});
  const [showBlock, setShowBlock] = useState(false);
  const handleCloseBlock = () => setShowBlock(false);
  const handleShowBlock = (data) => {
    setShowBlock(true);
    setBlockData(data);
  };

  const [UnblockData, setUnblockData] = useState({});
  const [showUnblock, setShowUnblock] = useState(false);
  const handleCloseUnblock = () => setShowUnblock(false);
  const handleShowUnblock = (data) => {
    setShowUnblock(true);
    setUnblockData(data);
  };

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
    if (inputtxt?.match(nameReg)) {
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

  const [doctorfirstname, setdoctorfirstname] = useState("");
  const [doctorlastname, setdoctorlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  // const [Designation, setDesignation] = useState();
  const [Address1, setAddress1] = useState();
  const [Department, setDepartment] = useState();
  const [Education, setEducation] = useState();
  const [Description, setDescription] = useState();
  const [ProfileImg, setProfileImg] = useState();
  const [Docs, setDocs] = useState();
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const [doctorfirstname1, setdoctorfirstname1] = useState();
  const [doctorlastname1, setdoctorlastname1] = useState();
  const [gender1, setgender1] = useState();
  const [DOB1, setDOB1] = useState();
  const [email1, setemail1] = useState();
  const [mobileno1, setmobileno1] = useState();
  const [Address11, setAddress11] = useState();
  const [Department1, setDepartment1] = useState();
  const [Education1, setEducation1] = useState();
  const [Description1, setDescription1] = useState();
  const [password1, setpassword1] = useState();
  const [conpassword1, setconpassword1] = useState();
  const [Editprofile, setEditprofile] = useState();
  const [EditDoc, setEditDoc] = useState();

  const formdata = new FormData();

  const signup = async () => {
    if (
      !doctorfirstname ||
      !doctorlastname ||
      !gender ||
      !DOB ||
      !mobileno ||
      !email ||
      !Department ||
      !Address1 ||
      !Education ||
      !Description ||
      !password ||
      !conpassword ||
      !ProfileImg ||
      !Docs
    ) {
      alert("Please fill all the fields");
    } else if (
      validatename(doctorfirstname) &&
      ValidateEmail(email) &&
      phonenumber(mobileno) &&
      CheckPassword(password)
    ) {
      formdata.set("DoctorType", "Surgery");
      formdata.set("Firstname", doctorfirstname);
      formdata.set("Lastname", doctorlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("Email", email);
      // formdata.set("Designation", Designation);
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
          alert("Doctor Register Successfully");
          // window.location.assign("/patientPortal");
        }
      } catch (error) {
        console.log(error?.response?.data?.error);
        alert(error.response.data.error);
      }
    }
  };

  const Editdoctorprofile = async () => {
    if (
      doctorfirstname1
        ? validatename(doctorfirstname1)
        : 1 && email1
        ? ValidateEmail(email1)
        : 1 && mobileno1
        ? phonenumber(mobileno1)
        : 1 && password1
        ? CheckPassword(password1)
        : 1
    ) {
      formdata.set(
        "Firstname",
        doctorfirstname1 ? doctorfirstname1 : selectedDoctor?.doctorfirstname
      );
      formdata.set(
        "Lastname",
        doctorlastname1 ? doctorlastname1 : selectedDoctor?.doctorlastname
      );
      formdata.set("Gender", gender1 ? gender1 : selectedDoctor?.gender);
      formdata.set("DOB", DOB1 ? DOB1 : selectedDoctor?.DOB);
      formdata.set(
        "PhoneNumber",
        mobileno1 ? mobileno1 : selectedDoctor?.mobileno
      );
      formdata.set("Email", email1 ? email1 : selectedDoctor?.email);
      // formdata.set("Designation", Designation);
      formdata.set(
        "Department",
        Department1 ? Department1 : selectedDoctor?.Department
      );
      formdata.set("Address1", Address1 ? Address11 : selectedDoctor?.Address1);
      formdata.set(
        "Education",
        Education1 ? Education1 : selectedDoctor?.Education
      );
      formdata.set(
        "Description",
        Description1 ? Description1 : selectedDoctor?.Description
      );
      formdata.set(
        "Password",
        password1 ? password1 : selectedDoctor?.password
      );
      formdata.set(
        "ConfirmPassword",
        conpassword1 ? conpassword1 : selectedDoctor?.conpassword
      );
      formdata.set(
        "ProfileImg",
        Editprofile ? Editprofile : selectedDoctor?.ProfileImg
      );
      formdata.set("Docs", EditDoc ? EditDoc : selectedDoctor?.Docs);

      console.log("formdata", formdata);
      try {
        const config = {
          url: "/Doctor/editDoctorDetails/" + selectedDoctor?._id,
          method: "put",
          baseURL: "http://localhost:8521/api",
          // headers: { "Content-Type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        console.log("config", config);
        if (res.status === 200) {
          setShow4(false);
          getDoctors();
          alert("Doctor's details updated successfully");
          // window.location.assign("/patientPortal");
        }
      } catch (error) {
        console.log(error?.response?.data?.error);
        alert(error.response.data.error);
      }
    }
  };

  const deleteDoctor = async () => {
    try {
      const config = {
        url: "/Doctor/deleteDoctorDetails/" + deleteData?._id,
        method: "delete",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Doctor deleted successfully");
        getDoctors();
        handleClosedelete();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const blockDoctor = async () => {
    try {
      const config = {
        url: "/Doctor/blockorunblockDoctor",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
        data: {
          Id: BlockData?._id,
          Blockstatus: true,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Doctor blocked successfully");
        getDoctors();
        handleCloseBlock();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const UnblockDoctor = async () => {
    try {
      const config = {
        url: "/Doctor/blockorunblockDoctor",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "application/json" },
        data: {
          Id: UnblockData?._id,
          Blockstatus: false,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Doctor unblocked successfully");
        getDoctors();
        handleCloseUnblock();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [data, setdata] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setdata(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "Surgery"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
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

  const addAppoinbtmentSchedule = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/Doctor/addappointmentschedule/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          scheduleList: scheduleList,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getDoctors();
        setShow6(false);
        alert(res.data.success);
        // setScheduleList("");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const addAppointmentCharge = async (e) => {
    e.preventDefault();
    if (!appointmentcharge) {
      alert("Please enter charges");
    } else {
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
          alert(`Add Successfully ${appointmentcharge} Charges..`);
          setappointmentcharge("");
          getDoctors();
          setShow2(false);
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.error);
      }
    }
  };

  const addSalary = async (e) => {
    e.preventDefault();
    if (!salary || !salaryDate) {
      alert("Please enter salary and salary date");
    } else {
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

  useEffect(() => {
    getDoctors();
    GetDepartment();
  }, []);

  const [scheduleDate, setScheduleDate] = useState("");
  const [timeInterval, settimeInterval] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  //   const [endTime, startTime] = timeInterval.split(" - ");
  const handleTimeChange = (e, setTime) => {
    const [hours, minutes] = e.target.value.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${String(formattedHours).padStart(
      2,
      "0"
    )}:${minutes} ${period}`;
    setTime(formattedTime);
    console.log(formattedTime); // Here you can send the formatted time to your database
  };
  const [scheduleList, setScheduleList] = useState([]);
  const AddSchedule = () => {
    if (!scheduleDate) {
      return alert("Select date..!");
    }
    if (!startTime) {
      return alert("Select start time..!");
    }
    if (!endTime) {
      return alert("Select end time..!");
    }
    const newSchedule = {
      scheduleDate,
      startTime,
      endTime,
      bookingstatus: "Vacant",
    };
    // Temporarily add to the list, then update state and alert
    const updatedList = [...scheduleList, newSchedule];
    setScheduleList(updatedList);
    alert("Added successfully..!");

    // Clear the input fields after state update
    setScheduleDate("");
    settimeInterval("");
  };
  // console.log("SeheduleList", scheduleList);
  const deleteSchedule = (indexToDelete) => {
    const updatedScheduleList = scheduleList.filter(
      (_, index) => index !== indexToDelete
    );
    setScheduleList(updatedScheduleList);
  };

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

  const [fileName, setfileName] = useState("Doctors");

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
          Surgery doctors
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
            marginBottom: "2%",
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
            <Modal.Title>Hospital doctors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="First name *"
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
                  placeholder="Last Name *"
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
                  placeholder="Email *"
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
                  placeholder="Password *"
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
                  placeholder="Confirm password *"
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

              {/* <div className="col-lg-6">
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
              </div> */}

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
                  <option>Select Gender *</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="Mobile number *"
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
                  placeholder="Address *"
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
                  placeholder="Education *"
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
                  Profile Image *
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
                  Upload document *
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
                  placeholder={selectedDoctor?.Firstname}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setdoctorfirstname1(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-6">
                <input
                  placeholder={selectedDoctor?.Lastname}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setdoctorlastname1(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder={selectedDoctor?.Email}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setemail1(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="*********"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setpassword1(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="*********"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setconpassword1(e.target.value)}
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
                  onChange={(e) => setDepartment1(e.target.value)}
                >
                  <option>{selectedDoctor?.Department}</option>
                  {GetDepartmentData?.filter(
                    (dep) =>
                      dep?.Department?.toLowerCase() !==
                      selectedDoctor?.Department?.toLowerCase()
                  )?.map((item) => (
                    <>
                      <option value={item?.DepartmentName}>
                        {item?.DepartmentName}
                      </option>
                    </>
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
                    marginTop: "4%",
                  }}
                  onChange={(e) => setgender1(e.target.value)}
                >
                  <option>{selectedDoctor?.Gender}</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder={selectedDoctor?.PhoneNumber}
                  maxLength={10}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setmobileno1(e.target.value)}
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
                      onChange={(e) => setDOB1(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder={selectedDoctor?.Address1}
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
                  onChange={(e) => setAddress11(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <textarea
                  placeholder={selectedDoctor?.Education}
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
                  onChange={(e) => setEducation1(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Profile Image
                </label>
                <br></br>
                <label htmlFor="pro" style={{ marginLeft: "9%" }}>
                  <Input
                    accept="image/*"
                    id="pro"
                    type="file"
                    onChange={(e) => setEditprofile(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <img
                      src={
                        Editprofile
                          ? URL.createObjectURL(Editprofile)
                          : `http://localhost:8521/Doctor/${selectedDoctor?.ProfileImg}`
                      }
                      alt="avathar"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50px",
                      }}
                    />
                    <PhotoCamera
                      style={{
                        color: "black",
                        margin: "40px 0px 0px -20px",
                      }}
                    />
                  </IconButton>
                </label>
              </div>

              <div className="col-lg-6">
                <label
                  style={{ fontWeight: "500", marginTop: "4%", color: "white" }}
                >
                  Upload document
                </label>
                <br></br>
                <label htmlFor="doc" style={{ marginLeft: "9%" }}>
                  <Input
                    accept="image/*"
                    id="doc"
                    type="file"
                    onChange={(e) => setEditDoc(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <img
                      src={
                        EditDoc
                          ? URL.createObjectURL(EditDoc)
                          : `http://localhost:8521/Doctor/${selectedDoctor?.Docs}`
                      }
                      alt="avathar"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50px",
                      }}
                    />
                    <PhotoCamera
                      style={{
                        color: "black",
                        margin: "40px 0px 0px -20px",
                      }}
                    />
                  </IconButton>
                </label>
              </div>
              <div className="col-lg-12">
                <textarea
                  placeholder={selectedDoctor?.Description}
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
                  onChange={(e) => setDescription1(e.target.value)}
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
                onClick={handleClose4}
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
                onClick={Editdoctorprofile}
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
                  placeholder="Salary amount *"
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
                  placeholder="Appoinment Charge *"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => setappointmentcharge(e.target.value)}
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
                  setShow2(false);
                }}
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
                  {/* <h5>{View?.Designation}</h5> */}
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
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={handleClose5}
              >
                OKAY
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show6} onHide={handleClose6}>
          <Modal.Header>
            <Modal.Title>Add Doctor Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ padding: "10px", backgroundColor: "white" }}>
              <Table bordered>
                <thead>
                  <tr>
                    <th> Date </th>
                    <th> Start Time </th>
                    <th> End Time </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Group className="mb-3">
                        <Form.Control
                          onChange={(e) => setScheduleDate(e.target.value)}
                          className="vi_0"
                          type="date"
                          value={scheduleDate}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group className="mb-3">
                        {/* <Form.Control
                        className="vi_0"
                        type="time"
                        onChange={(e) => handleTimeChange(e, setStartTime)}
                      /> */}
                        <Form.Select
                          value={startTime}
                          className="vi_0"
                          onChange={(e) => setStartTime(e.target.value)}
                        >
                          <option value="">Select Time</option>
                          {allTimes?.map((item) => {
                            return (
                              <option value={item?.settime}>
                                {item?.settime}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group className="mb-3">
                        {/* <Form.Control
                        className="vi_0"
                        type="time"
                        onChange={(e) => handleTimeChange(e, setEndTime)}
                      /> */}
                        {/* <Form.Control className="vi_0" value={endTime} /> */}
                        <Form.Select
                          value={endTime}
                          className="vi_0"
                          onChange={(e) => setEndTime(e.target.value)}
                        >
                          <option value="">Select Time</option>
                          {allTimes?.map((item) => {
                            return (
                              <option value={item?.settime}>
                                {item?.settime}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </td>
                    <td>
                      <Button onClick={AddSchedule}>Add</Button>
                    </td>
                  </tr>
                  {scheduleList?.map((item, i) => {
                    return (
                      <tr>
                        <td>{item?.scheduleDate}</td>
                        <td>{item?.startTime}</td>
                        <td>{item?.endTime}</td>
                        <td>
                          <MdDelete
                            onClick={() => deleteSchedule(i)}
                            style={{ color: "red" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
                  setShow6(false);
                }}
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
                onClick={(e) => {
                  addAppoinbtmentSchedule(e);
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
            <Table style={{ backgroundColor: "white" }} bordered>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Start Time </th>
                  <th>End Time</th>
                  <th>Schedule</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {View?.scheduleList?.map((item, i) => {
                  return (
                    <tr>
                      <td>{item?.scheduleDate}</td>
                      <td>{item?.startTime}</td>
                      <td>{item?.endTime}</td>
                      <td>
                        {item?.bookingstatus === "Vacant" ? (
                          <>
                            <b style={{ color: "green" }}>
                              {item?.bookingstatus}
                            </b>
                          </>
                        ) : (
                          <>
                            <b style={{ color: "red", fontSize: "20px" }}>
                              {item?.bookingstatus}
                            </b>
                          </>
                        )}
                      </td>
                      <td>
                        <MdDelete style={{ color: "red" }} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose7}>
              Close
            </Button>
          </Modal.Footer>
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

        <Modal show={showdelete} onHide={handleClosedelete}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to delete Doctor
            </p>
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
                onClick={handleClosedelete}
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
                  padding: "4px 10px",
                }}
                onClick={deleteDoctor}
              >
                DELETE
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showBlock} onHide={handleCloseBlock}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to Block Doctor
            </p>
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
                onClick={handleCloseBlock}
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
                  padding: "4px 10px",
                }}
                onClick={blockDoctor}
              >
                BLOCK
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={showUnblock} onHide={handleCloseUnblock}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <p style={{ color: "white", textAlign: "center" }}>
              Are you sure you want to Un-Block Doctor
            </p>
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
                onClick={handleCloseUnblock}
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
                  padding: "4px 10px",
                }}
                onClick={UnblockDoctor}
              >
                UN-BLOCK
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table style={{ marginTop: "1%" }} bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Sl.No</th>
                <th>Profile</th>
                <th> Name</th>
                <th>Email-Id</th>
                <th>Department</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>Document</th>
                <th>Schedule</th>
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
                              alt=""
                              src={`http://localhost:8521/Doctor/${item?.ProfileImg}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                            {item?.DoctorId}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          {/* <td>{item?.Designation}</td> */}
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
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
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
                                style={{
                                  backgroundColor: "#20958c",
                                  color: "white",
                                }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => {
                                      setView(item);
                                      setShow2(true);
                                    }}
                                  >
                                    <i
                                      class=" fa fa-database"
                                      style={{ marginRight: "2%" }}
                                    ></i>{" "}
                                    Add Charge{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:;"
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => handleShow4(item)}
                                  >
                                    <i
                                      class="fas fa-edit"
                                      style={{ marginRight: "2%" }}
                                    ></i>
                                    Edit{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:;"
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => handleShowdelete(item)}
                                  >
                                    <i
                                      class="fas fa-trash"
                                      style={{ marginRight: "2%" }}
                                    ></i>
                                    Delete{" "}
                                  </a>
                                </li>
                                {item?.blocked ? (
                                  <li>
                                    <a
                                      href="javascript:;"
                                      style={{
                                        textDecoration: "none",
                                        color: "#20958c",
                                      }}
                                      onClick={() => handleShowUnblock(item)}
                                    >
                                      <i
                                        class=" fa fa-unlock"
                                        style={{ marginRight: "2%" }}
                                      ></i>{" "}
                                      Un-Block{" "}
                                    </a>
                                  </li>
                                ) : (
                                  <li>
                                    <a
                                      href="javascript:;"
                                      style={{
                                        textDecoration: "none",
                                        color: "#20958c",
                                      }}
                                      onClick={() => handleShowBlock(item)}
                                    >
                                      <i
                                        class="fas fa-lock"
                                        style={{ marginRight: "2%" }}
                                      ></i>
                                      Block{" "}
                                    </a>
                                  </li>
                                )}

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
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{++index}</td>
                          <td>
                            <img
                              alt=""
                              src={`http://localhost:8521/Doctor/${item?.ProfileImg}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                            {item?.DoctorId}
                          </td>
                          <td>
                            {item?.Firstname} {item?.Lastname}
                          </td>
                          <td>{item?.Email}</td>
                          {/* <td>{item?.Designation}</td> */}
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
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
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
                                style={{
                                  backgroundColor: "#20958c",
                                  color: "white",
                                }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => {
                                      setView(item);
                                      setShow2(true);
                                    }}
                                  >
                                    <i
                                      class=" fa fa-database"
                                      style={{ marginRight: "2%" }}
                                    ></i>{" "}
                                    Add Charge{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:;"
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
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
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => handleShow4(item)}
                                  >
                                    <i
                                      class="fas fa-edit"
                                      style={{ marginRight: "2%" }}
                                    ></i>
                                    Edit{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:;"
                                    style={{
                                      textDecoration: "none",
                                      color: "#20958c",
                                    }}
                                    onClick={() => handleShowdelete(item)}
                                  >
                                    <i
                                      class="fas fa-trash"
                                      style={{ marginRight: "2%" }}
                                    ></i>
                                    Delete{" "}
                                  </a>
                                </li>
                                {item?.blocked ? (
                                  <li>
                                    <a
                                      href="javascript:;"
                                      style={{
                                        textDecoration: "none",
                                        color: "#20958c",
                                      }}
                                      onClick={() => handleShowUnblock(item)}
                                    >
                                      <i
                                        class=" fa fa-unlock"
                                        style={{ marginRight: "2%" }}
                                      ></i>{" "}
                                      Un-Block{" "}
                                    </a>
                                  </li>
                                ) : (
                                  <li>
                                    <a
                                      href="javascript:;"
                                      style={{
                                        textDecoration: "none",
                                        color: "#20958c",
                                      }}
                                      onClick={() => handleShowBlock(item)}
                                    >
                                      <i
                                        class="fas fa-lock"
                                        style={{ marginRight: "2%" }}
                                      ></i>
                                      Block{" "}
                                    </a>
                                  </li>
                                )}

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
  );
}
