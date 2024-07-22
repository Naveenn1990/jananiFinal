import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Barcode from "react-barcode";
import { Table, Modal, ProgressBar, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { MdEdit } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { useReactToPrint } from "react-to-print";
import Form from "react-bootstrap/Form";
import moment from "moment";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

export default function Outpatientlist() {
  const [View, setView] = useState({});
  const [billing, setbilling] = useState({});
  const [show, setShow] = useState(false);

  const [ReadmoreData, setReadmoreData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setReadmoreData(item);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [EditData, setEditData] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (item) => {
    setShowEdit(true);
    setEditData(item);
  };

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = (item) => {
    setShow3(true);
    setViewBarcode(item);
  };

  const [BookAppointmentData, setBookAppointmentData] = useState({});
  const [showBook, setShowBook] = useState(false);
  const handleCloseBook = () => setShowBook(false);
  const handleShowBook = (item) => {
    setShowBook(true);
    setBookAppointmentData(item);
  };

  const [ViewBarcode, setViewBarcode] = useState({});
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
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
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, should be total 8 character!"
      );
      return false;
    }
  }
  const uniqueDates = new Set();
  const [medications, setmedications] = useState(false);
  const [medicinesTaking, setmedicinesTaking] = useState();
  let formdata = new FormData();
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [alternatePhoneNumber, setalternatePhoneNumber] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();

  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Marital, setMarital] = useState();
  const [ConsultationFee, setConsultationFee] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");

  const [MaritalStatus, setMaritalStatus] = useState("");
  const [PatientAge18, setPatientAge18] = useState("");
  const [relativeName, setrelativeName] = useState("");
  const [relationWithPatient, setrelationWithPatient] = useState("");
  const [relativePhone, setrelativePhone] = useState("");
  const [AdmitDate, setAdmitDate] = useState("");
  const [followUpsDate, setfollowUpsDate] = useState("");
  const [allergy, setallergy] = useState("");

  const [haveInsurance, sethaveInsurance] = useState("");
  const [insuranceDoc, setinsuranceDoc] = useState("");
  const [insuranceProviderCompany, setinsuranceProviderCompany] = useState("");
  const [insuranceAmt, setinsuranceAmt] = useState("");
  let [patientAllergies, setpatientAllergies] = useState([]);
  const [clickedAddAllergyBtn, setclickedAddAllergyBtn] = useState("");
  const [Aadharcard, setAadharcard] = useState("");
  const [Aadharno, setAadharno] = useState("");

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

  // For Token Generation
  const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };
  const prefix = "JAN";
  const randomNumber = generateRandomNumber();

  const [Doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "hospital"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  const [Department, setDepartment] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [DOA, setDOA] = useState("");
  const [TOA, setTOA] = useState("");

  const [selectedDoctorList1, setselectedDoctorList1] = useState([]);
  useEffect(() => {
    if (Department && Doctors?.length > 0) {
      const xyz = Doctors?.filter((doc) => doc?.Department === Department);
      setselectedDoctorList1(xyz);
    }
  }, [Department]);

  const [Doctorschedule, setDoctorschedule] = useState();
  useEffect(() => {
    setDoctorschedule(Doctors?.find((doc) => doc._id === Doctor));
  }, [Doctor, selectedDoctorList1, DOA, TOA]);

  const [uniqueSchedules, setUniqueSchedules] = useState([]);

  useEffect(() => {
    if (Doctorschedule && Doctorschedule.scheduleList) {
      const filteredSchedules = Doctorschedule.scheduleList.filter(
        (schedd) =>
          moment(schedd?.scheduleDate).isSameOrAfter(moment(), "day") &&
          schedd?.bookingstatus === "Vacant"
      );

      const uniqueDatesSet = new Set();
      const uniqueSchedulesArray = filteredSchedules.filter((sched) => {
        const formattedDate = moment(sched?.scheduleDate).format("DD-MM-YYYY");
        if (!uniqueDatesSet.has(formattedDate)) {
          uniqueDatesSet.add(formattedDate);
          return true;
        }
        return false;
      });

      setUniqueSchedules(uniqueSchedulesArray);
    }
  }, [Doctorschedule]);

  const [selecteTimearray, setselecteTimearray] = useState([]);
  useEffect(() => {
    if (DOA) {
      const asd = Doctorschedule?.scheduleList.filter(
        (item) => item.scheduleDate == DOA && item.bookingstatus === "Vacant"
      );
      setselecteTimearray(asd);
    }
  }, [DOA]);

  // const signup = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (
  //       validatename(patientfirstname) &&
  //       ValidateEmail(email) &&
  //       phonenumber(mobileno) &&
  //       CheckPassword(password)
  //     ) {
  //       formdata.set("Firstname", patientfirstname);
  //       formdata.set("Lastname", patientlastname);
  //       formdata.set("Gender", gender);
  //       formdata.set("DOB", DOB);
  //       formdata.set("profilepic", ProfilePic);
  //       formdata.set("PhoneNumber", mobileno);
  //       formdata.set("alternatePhoneNumber", alternatePhoneNumber);
  //       formdata.set("Email", email);
  //       formdata.set("Address1", Address);
  //       formdata.set("Address2", Address1);
  //       formdata.set("City1", City);
  //       formdata.set("State1", State);
  //       formdata.set("Zipcode", Zipcode);
  //       formdata.set("MaritalStatus", MaritalStatus);
  //       formdata.set("PatientAge18", PatientAge18);
  //       formdata.set("relativeName", relativeName);
  //       formdata.set("relationWithPatient", relationWithPatient);
  //       formdata.set("relativePhone", relativePhone);
  //       formdata.set("AdmitDate", AdmitDate);
  //       formdata.set("followUpsDate", followUpsDate);
  //       formdata.set("haveInsurance", haveInsurance);
  //       formdata.set("insuranceDoc", insuranceDoc);
  //       formdata.set("insuranceProviderCompany", insuranceProviderCompany);
  //       formdata.set("insuranceAmt", insuranceAmt);
  //       formdata.set("Password", password);
  //       formdata.set("ConsultationFee", ConsultationFee);
  //       formdata.set("ConfirmPassword", conpassword);
  //       formdata.set("registrationType", "OPD");
  //       formdata.set("registeredFrom", "staff");
  //       formdata.set("patientAllergies", patientAllergies);
  //       formdata.set("takingAnyMedication", medications);
  //       formdata.set("medicinesTaking", medicinesTaking);
  //       formdata.set("Aadharcard", Aadharcard);
  //       formdata.set("Aadharno", Aadharno);
  //       const config = {
  //         url: "/user/addPatient",
  //         method: "post",
  //         baseURL: "http://localhost:8521/api",
  //         headers: { "content-type": "multipart/form-data" },
  //         data: formdata,
  //       };
  //       let res = await axios(config);
  //       if (res.status === 200) {
  //         console.log(res.data);
  //         console.log(res.data.success);
  //         setmedicinesTaking("");
  //         setpatientAllergies([]);
  //         alert("Signup Success");
  //         getdata();
  //         // window.location.assign("/patientPortal");
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error.response.data.error);
  //     if (error.response) {
  //       alert(error.response.data.error);
  //     }
  //   }
  // };

  const signup = async (e) => {
    e.preventDefault();
    if (!patientfirstname || !patientlastname) {
      return alert("Please enter First and Last Name");
    }
    if (!gender) {
      return alert("Please select Gender");
    }
    if (!mobileno) {
      return alert("Please enter mobile No.");
    }
    if (!email) {
      return alert("Please enter email Id");
    }
    if (!DOB) {
      return alert("Please enter Date of Birth");
    }
    if (!Address || !Address1 || !City || !State) {
      return alert("Please enter complete address");
    }
    if (!Zipcode) {
      return alert("Please enter Pincode");
    }
    if (!password || !conpassword) {
      return alert("Please enter Password and Confirm Password");
    }
    if (password !== conpassword) {
      return alert("Password and Confirm Password should be the same");
    }
    if (!MaritalStatus) {
      return alert("Please select Marital Status");
    }
    if (!AdmitDate) {
      return alert("Please select Admission Date");
    }
    if (!haveInsurance) {
      return alert("Please select Health Insurance");
    }
    if (!Department) {
      return alert("Please select Department");
    }
    if (!Doctor) {
      return alert("Please select Doctor");
    }
    if (!DOA) {
      return alert("Please select Date of Appointment");
    }
    if (!TOA) {
      return alert("Please select Time of Appointment");
    }
    try {
      if (
        validatename(patientfirstname) &&
        ValidateEmail(email) &&
        phonenumber(mobileno) &&
        CheckPassword(password)
      ) {
        const srt = TOA?.split("-");

        formdata.set("Firstname", patientfirstname);
        formdata.set("Lastname", patientlastname);
        formdata.set("Gender", gender);
        formdata.set("DOB", DOB);
        formdata.set("profilepic", ProfilePic);
        formdata.set("PhoneNumber", mobileno);
        formdata.set("alternatePhoneNumber", alternatePhoneNumber);
        formdata.set("Email", email);
        formdata.set("Address1", Address);
        formdata.set("Address2", Address1);
        formdata.set("City1", City);
        formdata.set("State1", State);
        formdata.set("Zipcode", Zipcode);
        formdata.set("MaritalStatus", MaritalStatus);
        formdata.set("PatientAge18", PatientAge18);
        formdata.set("relativeName", relativeName);
        formdata.set("relationWithPatient", relationWithPatient);
        formdata.set("relativePhone", relativePhone);
        formdata.set("AdmitDate", AdmitDate);
        formdata.set("followUpsDate", followUpsDate);
        formdata.set("haveInsurance", haveInsurance);
        formdata.set("insuranceDoc", insuranceDoc);
        formdata.set("insuranceProviderCompany", insuranceProviderCompany);
        formdata.set("insuranceAmt", insuranceAmt);
        formdata.set("Password", password);
        formdata.set("ConsultationFee", Doctorschedule?.appointmentcharge);
        formdata.set("ConfirmPassword", conpassword);
        formdata.set("registrationType", "OPD");
        formdata.set("registeredFrom", "staff");
        formdata.set("patientAllergies", patientAllergies);
        formdata.set("takingAnyMedication", medications);
        formdata.set("medicinesTaking", medicinesTaking);
        formdata.set("Aadharcard", Aadharcard);
        formdata.set("Aadharno", Aadharno);
        // For Booking Appointment
        formdata.set("token", prefix + randomNumber);
        formdata.set("ConsultantDoctor", Doctor);
        formdata.set("Dateofappointment", DOA);
        formdata.set("starttime", srt[0]);
        formdata.set("endtime", srt[1]);
        formdata.set("ScheduleId", srt[2]);

        const config = {
          url: "/user/addPatient",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: formdata,
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data.success);
          setmedicinesTaking("");
          setpatientAllergies([]);
          alert("Signup Success");
          getdata();
        }
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const BookAppointmentForExixtingPatients = async (e) => {
    e.preventDefault();

    if (!Department) {
      return alert("Please select Department");
    }
    if (!Doctor) {
      return alert("Please select Doctor");
    }
    if (!DOA) {
      return alert("Please select Date of Appointment");
    }
    if (!TOA) {
      return alert("Please select Time of Appointment");
    }
    try {
      const srt = TOA?.split("-");
      const config = {
        url: "/user/BookAppointmentForExixtingPatients",
        method: "post",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "multipart/form-data" },
        data: {
          PatientId: BookAppointmentData?.PatientId,
          Firstname: BookAppointmentData?.Firstname,
          Lastname: BookAppointmentData?.Lastname,
          Gender: BookAppointmentData?.Gender,
          DOB: BookAppointmentData?.DOB,
          PhoneNumber: BookAppointmentData?.PhoneNumber,
          alternatePhoneNumber: BookAppointmentData?.alternatePhoneNumber,
          Email: BookAppointmentData?.Email,
          ConsultationFee: Doctorschedule?.appointmentcharge,
          token: prefix + randomNumber,
          ConsultantDoctor: Doctor,
          Dateofappointment: DOA,
          starttime: srt[0],
          endtime: srt[1],
          ScheduleId: srt[2],
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        alert("Appointment Booked Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const MakePayment = async (
    PatientId,
    BillingId,
    consultationDate,
    DoctorId
  ) => {
    try {
      const config = {
        url: "/user/MakeAppointmentPayment",
        method: "post",
        baseURL: "http://localhost:8521/api",
        data: {
          PatientId: PatientId,
          ConsultaionBillId: BillingId,
          PaymentId: "Paymentdetailspending",
          consultationDate: consultationDate,
          DoctorId: DoctorId,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        alert("Appointment Booked Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [data, setdata] = useState([]);

  const getdata = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setdata(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "OPD"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
    getDoctors();
    GetDepartment();
  }, []);
  const createPDF = async () => {
    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });

    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);

    // Calculate the scaling factor to fit the image on A4 paper
    const scaleFactor = pdf.internal.pageSize.getWidth() / imgProperties.width;

    // Calculate the height after scaling
    const pdfHeight = imgProperties.height * scaleFactor;

    // Add the image to PDF with the calculated dimensions
    pdf.addImage(img, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdfHeight);

    // Save the PDF
    pdf.save("ServiceInvoice.pdf");
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [FirstName1, setFirstName1] = useState("");
  const [LastName1, setLastName1] = useState("");
  const [Gender1, setGender1] = useState("");
  const [ContactNumber1, setContactNumber1] = useState();
  const [AlternativeContactNumber1, setAlternativeContactNumber1] = useState();
  const [Email1, setEmail1] = useState("");
  const [DoB1, setDoB1] = useState();
  const [ProfilePic1, setProfilePic1] = useState("");
  const [Address111, setAddress111] = useState("");
  const [Address222, setAddress222] = useState("");
  const [City11, setCity11] = useState("");
  const [State11, setState11] = useState("");
  const [Pincode1, setPincode1] = useState();
  const [Password11, setPassword11] = useState("");
  const [ConfirmPassword11, setConfirmPassword11] = useState("");
  const [MarritalStatus1, setMarritalStatus1] = useState("");
  const [Age11, setAge11] = useState("");
  const [Adharcard11, setAdharcard11] = useState("");
  const [AdharNumber11, setAdharNumber11] = useState("");
  const [RelativeName1, setRelativeName1] = useState("");
  const [RelativeRelation, setRelativeRelation] = useState("");
  const [RelativeNumber, setRelativeNumber] = useState("");
  const [AdmissionDate1, setAdmissionDate1] = useState("");
  const [FollowupDate1, setFollowupDate1] = useState("");
  const [HealthInsurance, setHealthInsurance] = useState("");
  const [HealthInsuranceDoc, setHealthInsuranceDoc] = useState();
  const [HealthInsuranceProvider, setHealthInsuranceProvider] = useState("");
  const [HealthInsuranceAmount, setHealthInsuranceAmount] = useState();
  const formd = new FormData();
  const EditPatient = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        Firstname: FirstName1
          ? FirstName1
          : EditData?.Firstname
          ? EditData?.Firstname
          : "",
        Lastname: LastName1
          ? LastName1
          : EditData?.Lastname
          ? EditData?.Lastname
          : "",
        Gender: Gender1 ? Gender1 : EditData?.Gender ? EditData?.Gender : "",
        DOB: DoB1 ? DoB1 : EditData?.DOB ? EditData?.DOB : "",
        profilepic: ProfilePic1
          ? ProfilePic1
          : EditData?.profilepic
          ? EditData?.profilepic
          : "",
        PhoneNumber: ContactNumber1
          ? ContactNumber1
          : EditData?.PhoneNumber
          ? EditData?.PhoneNumber
          : "",
        alternatePhoneNumber: AlternativeContactNumber1
          ? AlternativeContactNumber1
          : EditData?.alternatePhoneNumber
          ? EditData?.alternatePhoneNumber
          : "",
        Email: Email1 ? Email1 : EditData?.Email ? EditData?.Email : "",
        Address1: Address111
          ? Address111
          : EditData?.Address1
          ? EditData?.Address1
          : "",
        Address2: Address222
          ? Address222
          : EditData?.Address2
          ? EditData?.Address2
          : "",
        City1: City11 ? City11 : EditData?.City1 ? EditData?.City1 : "",
        State1: State11 ? State11 : EditData?.State1 ? EditData?.State1 : "",
        Zipcode: Pincode1
          ? Pincode1
          : EditData?.Zipcode
          ? EditData?.Zipcode
          : "",
        MaritalStatus: MarritalStatus1
          ? MarritalStatus1
          : EditData?.MaritalStatus
          ? EditData?.MaritalStatus
          : "",
        PatientAge18: Age11
          ? Age11
          : EditData?.PatientAge18
          ? EditData?.PatientAge18
          : "",
        relativeName: RelativeName1
          ? RelativeName1
          : EditData?.relativeName
          ? EditData?.relativeName
          : "",
        relationWithPatient: RelativeRelation
          ? RelativeRelation
          : EditData?.relationWithPatient
          ? EditData?.relationWithPatient
          : "",
        relativePhone: RelativeNumber
          ? RelativeNumber
          : EditData?.relativePhone
          ? EditData?.relativePhone
          : "",
        AdmitDate: AdmissionDate1
          ? AdmissionDate1
          : EditData?.AdmitDate
          ? EditData?.AdmitDate
          : "",
        followUpsDate: FollowupDate1
          ? FollowupDate1
          : EditData?.followUpsDate
          ? EditData?.followUpsDate
          : "",
        haveInsurance: HealthInsurance
          ? HealthInsurance
          : EditData?.haveInsurance
          ? EditData?.haveInsurance
          : "",
        insuranceDoc: HealthInsuranceDoc
          ? HealthInsuranceDoc
          : EditData?.insuranceDoc
          ? EditData?.insuranceDoc
          : "",
        insuranceProviderCompany: HealthInsuranceProvider
          ? HealthInsuranceProvider
          : EditData?.insuranceProviderCompany
          ? EditData?.insuranceProviderCompany
          : "",
        insuranceAmt: HealthInsuranceAmount
          ? HealthInsuranceAmount
          : EditData?.insuranceAmt
          ? EditData?.insuranceAmt
          : "",
        Password: Password11
          ? Password11
          : EditData?.Password
          ? EditData?.Password
          : "",
        ConfirmPassword: ConfirmPassword11
          ? ConfirmPassword11
          : EditData?.ConfirmPassword
          ? EditData?.ConfirmPassword
          : "",
        Aadharcard: Adharcard11
          ? Adharcard11
          : EditData?.Aadharcard
          ? EditData?.Aadharcard
          : "",
        Aadharno: AdharNumber11
          ? AdharNumber11
          : EditData?.Aadharno
          ? EditData?.Aadharno
          : "",
      };

      const config = {
        url: "/user/editPatientDetails/" + EditData?.PatientId,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: obj,
      };

      console.log("Config:", config);
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        alert("Data updated successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
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

  const [fileName, setfileName] = useState("Out-Patient-List");

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

  console.log("ReadmoreData", ReadmoreData);
  return (
    <div>
      <h6
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "grey",
          marginTop: "20px",
        }}
      >
        Out-Patient List
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <AiOutlinePlusCircle
          className="AddIcon1"
          onClick={() => handleShow2(true)}
        />

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
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Patient Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              {ReadmoreData?.profilepic ? (
                <img
                  alt=""
                  src={`http://localhost:8521/PatientREG/${ReadmoreData?.profilepic}`}
                  style={{
                    width: "100%",
                    height: "200px",
                  }}
                />
              ) : (
                <img
                  src="/img/dummyprofile.png"
                  style={{ width: "100%", height: "200px" }}
                />
              )}
            </div>
            <div className="col-lg-8">
              <div style={{ border: "1px solid lightgrey", padding: "2%" }}>
                <h6
                  style={{
                    textAlign: "center",
                    padding: "4% 0%",
                    backgroundColor: "lightblue",
                  }}
                >
                  ABOUT PATIENT
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>NAME</b> : {ReadmoreData?.Firstname}&nbsp;
                  {ReadmoreData?.Lastname}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>EmailID</b> : {ReadmoreData?.Email}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>Mobile</b> : {ReadmoreData?.PhoneNumber}
                </h6>
                <h6
                  style={{
                    paddingLeft: "4%",
                    fontSize: "14px",
                    marginTop: "2%",
                  }}
                >
                  <b>DOB</b> : {ReadmoreData?.DOB}
                </h6>
              </div>
            </div>
          </div>
          <h6 style={{ marginTop: "4%" }}>Past Visit History</h6>
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>Date</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Charges</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ReadmoreData?.consultationBillDetails?.map((billing) => (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{billing?.consultationDate}</td>
                  <td>{billing?.Doctor?.Department}</td>
                  <td>
                    {billing?.Doctor?.Firstname}&nbsp;
                    {billing?.Doctor?.Lastname}
                  </td>
                  <td>
                    {billing?.consulationStartTime}-
                    {billing?.consultationEndTime}
                  </td>
                  <td>{billing?.consulationFees}</td>
                  {billing?.PaymentStatus === "Pending" ? (
                    <td>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "red",
                          color: "white",
                        }}
                        onClick={() =>
                          MakePayment(
                            ReadmoreData?.PatientId,
                            billing?._id,
                            billing?.consultationDate,
                            billing?.Doctor?._id
                          )
                        }
                      >
                        Make Payment
                      </button>
                    </td>
                  ) : (
                    <td>
                      {billing?.PaymentStatus}
                      <button
                        style={{ border: "none" }}
                        onClick={() => {
                          handleShow3();
                          setView(ReadmoreData);
                          setbilling(billing);
                        }}
                      >
                        Reciept
                      </button>
                    </td>
                  )}
                </tr>
              ))}
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
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow(false);
              }}
            >
              CANCEL
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>Add Out-Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
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
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientlastname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
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
                onChange={(e) => setmobileno(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Alternate Phone Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setalternatePhoneNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
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
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
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
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-4">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Profile Pic :
                  </h6>
                </div>
                <div className="col-lg-8">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Address:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </div>
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
                onChange={(e) => setAddress1(e.target.value)}
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
                onChange={(e) => setState(e.target.value)}
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
                onChange={(e) => setZipcode(e.target.value)}
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
                placeholder="ConfirmPassword"
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
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <select
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Age is 18+:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <select
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setPatientAge18(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar Card:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharcard(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar No:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharno(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Relative / next to kin*</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder="Relation with patient"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelationWithPatient(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Name"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelativeName(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Mobileno."
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setrelativePhone(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Admission Information</h6>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Admission Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setAdmitDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Follow-up Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setfollowUpsDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance*:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <select
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => sethaveInsurance(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Doc(if available):
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="file"
                        accept="image/*"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceDoc(e.target.files[0])}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Provider:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="test"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) =>
                          setinsuranceProviderCompany(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Amount:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="Number"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceAmt(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

              
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Consulation Fee</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder="Consulation Fee"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setConsultationFee(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
           
          </div>

        

          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6" style={{ color: "white" }}>
              Taking any medications, currently?
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <div className="row">
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == true}
                    onChange={() => setmedications(true)}
                  ></input>{" "}
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == false}
                    onChange={() => setmedications(false)}
                  ></input>{" "}
                  No
                </div>
              </div>
            </div>

            {medications ? (
              <>
                <label style={{ color: "white", marginTop: "4%" }}>
                  If yes, please list it here
                </label>
                <div
                  className="col-lg-12"
                  style={{ color: "white", textAlign: "center" }}
                >
                  <textarea
                    cols={6}
                    placeholder="Please list all medications"
                    value={medicinesTaking}
                    onChange={(e) => setmedicinesTaking(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",

                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                  ></textarea>
                </div>
              </>
            ) : null}

            <div className="col-lg-6">
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <div className="col-lg-3">
                  <h6 style={{ color: "white", marginTop: "6%" }}>
                    Allergies:
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="text"
                    value={allergy}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setallergy(e.target.value)}
                  ></input>
                </div>
                <div className="col-lg-3">
                  <Button
                    variant="warning"
                    onClick={() => {
                      patientAllergies.push(allergy);
                      console.log(patientAllergies);
                      setclickedAddAllergyBtn("clicked");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <Table responsive>
                <thead>
                  <th>S.no.</th>
                  <th>Allergies</th>
                </thead>
                <tbody>
                  {patientAllergies.map((item, i) => {
                    console.log("patientAllergies", patientAllergies);
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>{item}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
              onClick={(e) => {
                setShow2(false);
                signup(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal> */}

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>Add Out-Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
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
                placeholder="First Name *"
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
                placeholder="Last Name *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientlastname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Select Gender *</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setmobileno(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Alternate Phone Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setalternatePhoneNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Email *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth *:
                  </h6>
                </div>
                <div className="col-lg-7">
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
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-4">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Profile Pic :
                  </h6>
                </div>
                <div className="col-lg-8">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Address *:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Street Address *"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Street Address Line 2 *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAddress1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="City *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="
                State / Province *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setState(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Postal / Zip Code *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="tele"
                maxLength={6}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setZipcode(e.target.value)}
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
                placeholder="ConfirmPassword *"
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
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status *:
                  </h6>
                </div>
                <div className="col-lg-9">
                  <select
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Age is 18+:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <select
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setPatientAge18(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar Card:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharcard(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar No:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAadharno(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Relative / next to kin</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder="Relation with patient"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelationWithPatient(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Name"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setrelativeName(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder="Relative Mobileno."
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    type="tele"
                    maxLength={10}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(e) => setrelativePhone(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Admission Information</h6>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Admission Date *: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setAdmitDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Follow-up Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setfollowUpsDate(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance*:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <select
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => sethaveInsurance(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Doc(if available):
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="file"
                        accept="image/*"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceDoc(e.target.files[0])}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Provider:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="test"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) =>
                          setinsuranceProviderCompany(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Amount:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="Number"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setinsuranceAmt(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Doctor Details</h6>

              <div className="row">
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="name">
                      Department *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option>Select</option>
                      {GetDepartmentData?.map((dep) => (
                        <option value={dep?.DepartmentName}>
                          {dep?.DepartmentName}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3 mb-2">
                  <form className="">
                    <label className="mb-1 text-light" for="name">
                      Doctor *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDoctor(e.target.value)}
                    >
                      <option>Select</option>
                      {selectedDoctorList1?.map((doc) => (
                        <option value={doc?._id}>
                          {doc?.Firstname}&nbsp;{doc?.Lastname}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Date of Appointment *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDOA(e.target.value)}
                    >
                      <option>Select</option>

                      {/* {Doctorschedule?.scheduleList
                        ?.filter(
                          (schedd) =>
                            moment(schedd?.scheduleDate).isSameOrAfter(
                              moment(),
                              "day"
                            ) && schedd?.bookingstatus === "Vacant"
                        )
                        ?.map((shedul) => {
                          const formattedDate = moment(
                            shedul?.scheduleDate
                          ).format("DD-MM-YYYY");
                          if (!uniqueDates.has(formattedDate)) {
                            uniqueDates.add(formattedDate);
                            console.log("formattedDate", formattedDate);
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
                        })} */}

                      {uniqueSchedules.map((shedul) => (
                        <option
                          value={shedul?.scheduleDate}
                          key={shedul?.scheduleDate}
                        >
                          {moment(shedul?.scheduleDate).format("DD-MM-YYYY")}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Time of Appointment *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setTOA(e.target.value)}
                    >
                      <option>Select</option>

                      {selecteTimearray?.map((shedul) => (
                        <option
                          value={`${shedul?.startTime}-${shedul?.endTime}-${shedul?._id}`}
                        >
                          {/* <option value={shedul?._id}> */}
                          {shedul?.startTime}-{shedul?.endTime}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Appointment Charges
                    </label>
                    <br />
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "6%",
                      }}
                      value={Doctorschedule?.appointmentcharge}
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6" style={{ color: "white" }}>
              Taking any medications, currently?
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <div className="row">
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == true}
                    onChange={() => setmedications(true)}
                  ></input>{" "}
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == false}
                    onChange={() => setmedications(false)}
                  ></input>{" "}
                  No
                </div>
              </div>
            </div>

            {medications ? (
              <>
                <label style={{ color: "white", marginTop: "4%" }}>
                  If yes, please list it here
                </label>
                <div
                  className="col-lg-12"
                  style={{ color: "white", textAlign: "center" }}
                >
                  <textarea
                    cols={6}
                    placeholder="Please list all medications"
                    value={medicinesTaking}
                    onChange={(e) => setmedicinesTaking(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",

                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                  ></textarea>
                </div>
              </>
            ) : null}

            <div className="col-lg-6">
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <div className="col-lg-3">
                  <h6 style={{ color: "white", marginTop: "6%" }}>
                    Allergies:
                  </h6>
                </div>
                <div className="col-lg-6">
                  {" "}
                  <input
                    type="text"
                    value={allergy}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setallergy(e.target.value)}
                  ></input>
                </div>
                <div className="col-lg-3">
                  <Button
                    variant="warning"
                    onClick={() => {
                      patientAllergies.push(allergy);
                      console.log(patientAllergies);
                      setclickedAddAllergyBtn("clicked");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <Table responsive>
                <thead>
                  <th>S.no.</th>
                  <th>Allergies</th>
                </thead>
                <tbody>
                  {patientAllergies.map((item, i) => {
                    console.log("patientAllergies", patientAllergies);
                    return (
                      <tr>
                        <td>{++i}</td>
                        <td>{item}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
              onClick={(e) => {
                setShow2(false);
                signup(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>Edit / Update Out-Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
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
                placeholder={EditData?.Firstname}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setFirstName1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.Lastname}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setLastName1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setGender1(e.target.value)}
              >
                <option>{EditData?.Gender}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.PhoneNumber}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setContactNumber1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.alternatePhoneNumber}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                type="tele"
                maxLength={10}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setAlternativeContactNumber1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.Email}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setEmail1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth *:
                  </h6>
                </div>
                <div className="col-lg-7">
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
                    onChange={(e) => setDoB1(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-4">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Profile Pic :
                  </h6>
                </div>
                <div className="col-lg-8">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setProfilePic1(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Address *:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    placeholder={EditData?.Address1}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAddress111(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.Address2}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAddress222(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder={EditData?.City1}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setCity11(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder={EditData?.State1}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setState11(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder={EditData?.Zipcode}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                type="tele"
                maxLength={6}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setPincode1(e.target.value)}
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
                onChange={(e) => setPassword11(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="ConfirmPassword *"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setConfirmPassword11(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Marrital Status *:
                  </h6>
                </div>
                <div className="col-lg-9">
                  <select
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setMarritalStatus1(e.target.value)}
                  >
                    <option value="">{EditData?.MaritalStatus}</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Age is 18+:
                  </h6>
                </div>
                <div className="col-lg-9">
                  <select
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAge11(e.target.value)}
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar Card:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="file"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAdharcard11(e.target.files[0])}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Aadhar No:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    placeholder={EditData?.Aadharno}
                    onChange={(e) => setAdharNumber11(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Relative / next to kin</h6>

              <div className="row">
                <div className="col-lg-6">
                  <input
                    placeholder={EditData?.relationWithPatient}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setRelativeRelation(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder={EditData?.relativeName}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "2%",
                    }}
                    onChange={(e) => setRelativeName1(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-6">
                  <input
                    placeholder={EditData?.relativePhone}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    type="tele"
                    maxLength={10}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={(e) => setRelativeNumber(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
                marginTop: "4%",
              }}
            >
              <h6 style={{ color: "white" }}>Admission Information</h6>

              <div className="row">
                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Admission Date *: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setAdmissionDate1(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-lg-3">
                      <h6 style={{ color: "white" }}>Follow-up Date: </h6>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "2%",
                        }}
                        onChange={(e) => setFollowupDate1(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance*:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <select
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) => setHealthInsurance(e.target.value)}
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Doc(if available):
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="file"
                        accept="image/*"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        onChange={(e) =>
                          setHealthInsuranceDoc(e.target.files[0])
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Provider:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="test"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        placeholder={EditData?.insuranceProviderCompany}
                        onChange={(e) =>
                          setHealthInsuranceProvider(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <div className="col-lg-3">
                      <h6 style={{ color: "white", marginTop: "6%" }}>
                        Health Insurance Amount:
                      </h6>
                    </div>
                    <div className="col-lg-9">
                      {" "}
                      <input
                        type="Number"
                        style={{
                          width: "100%",
                          padding: "8px 20px",
                          borderRadius: "0px",
                          border: "1px solid #ebebeb",
                          backgroundColor: "#ebebeb",
                          marginTop: "6%",
                        }}
                        placeholder={EditData?.insuranceAmt}
                        onChange={(e) =>
                          setHealthInsuranceAmount(e.target.value)
                        }
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
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
                setShowEdit(false);
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
              onClick={(e) => EditPatient(e)}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show3} onHide={handleClose3}>
        <Modal.Header>
          <Modal.Title>Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="pdf" style={{ padding: "15px" }}>
            <div
              style={{
                padding: "5px",
                border: "2px solid #20958C",
                width: "733px",
                margin: "auto",
                borderRadius: "7px",
                height: "530px",
                backgroundColor: "white",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="/Images/logo.jpg"
                          alt=""
                          style={{ width: "80px" }}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="fw-bold" style={{ fontSize: "16px" }}>
                          JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                        </h4>
                        <h6 className="fw-bold" style={{ fontSize: "14px" }}>
                          Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                          Vijaypura-586109
                        </h6>
                        <h6 style={{ fontSize: "14px" }}>
                          Tel:08352-277077 Cell:9606031158, 7090831204
                          Email:jananihospital2018@gmail.com
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <div className="text-center mt-1 d-flex align-items-center">
                        {" "}
                        <h6
                          className="fw-bold mt-2"
                          style={{
                            color: "#20958C",
                            fontSize: "20px",
                          }}
                        >
                          RECIEPT/ PATIENT COPY
                        </h6>
                      </div>
                      <div>
                        <Barcode
                          // value={`${View?.Firstname} ${View?.Lastname}`}
                          value={View?._id}
                          width={1}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12"
                    style={{ border: "1px solid #20958C" }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            UHID No.
                          </span>
                          : {View?.PatientId}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            PT. NAME
                          </span>{" "}
                          : {View?.Firstname}&nbsp;{View?.Lastname}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            ADDRESS
                          </span>{" "}
                          : {View?.Address1}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            Phone No
                          </span>{" "}
                          : {View?.PhoneNumber}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            SEX
                          </span>{" "}
                          : {View?.Gender}
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "unset" }}>
                          <span style={{ color: "#20958C", fontWeight: "600" }}>
                            DOB
                          </span>{" "}
                          : {View?.DOB}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 mt-3">
                    <div className="row">
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        SL.No
                      </div>
                      <div
                        className="col-md-8"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Description
                      </div>
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Amount
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        1.
                      </div>
                      <div
                        className="col-md-8"
                        style={{ border: "1px solid #20958C" }}
                      >
                        Consultation
                      </div>
                      <div
                        className="col-md-2"
                        style={{ border: "1px solid #20958C" }}
                      >
                        ₹ {billing?.consulationFees}/-
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="row">
                      <div className="col-md-10">Total</div>
                      <div className="col-md-2">
                        ₹ {billing?.consulationFees}/-
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-2">
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="row">
                      <div className="col-md-6">
                        <p style={{ fontSize: "11px", marginBottom: "unset" }}>
                          Paid Amount : ( ₹ {billing?.consulationFees}/-)
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          *This is a Computerised Bill/Receipt
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          Wish you speedy Recovery....
                        </p>
                      </div>
                      <div className="col-md-6 text-end">
                        <p style={{ fontSize: "11px", marginBottom: "unset" }}>
                          For JANANI MULTISPECIALITY HOSPITAL AND RESEARCH
                          CENTRE
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          BHIMU {moment(View?.createdAt)?.format("DD-MM-YYYY")}
                        </p>
                        <p style={{ fontSize: "12px", marginBottom: "unset" }}>
                          Authorised Signatory *
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              onClick={handleClose3}
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
              onClick={createPDF}
            >
              Download
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal size="md" show={show10} onHide={handleClose10}>
        <Modal.Header>
          <Modal.Title>
            Barcode{" "}
            <span>
              ({ViewBarcode?.Firstname} {ViewBarcode?.Lastname} )
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef} className="d-flex justify-content-center">
            <Barcode
              // value={`${ViewBarcode?.Firstname} ${ViewBarcode?.Lastname}`}
              value={ViewBarcode?._id}
              width={1}
              height={50}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose10}>
            Close
          </Button>

          <Button variant="primary" onClick={handlePrint}>
            print
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={showBook} onHide={handleCloseBook}>
        <Modal.Header>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Doctor Details
          </h6>
          <div
            className="row"
            style={{
              border: "1px solid white",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "0px",
                borderTop: "1px solid #ebebeb",
              }}
            >
              <div className="row">
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="name">
                      Department *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option>Select</option>
                      {GetDepartmentData?.map((dep) => (
                        <option value={dep?.DepartmentName}>
                          {dep?.DepartmentName}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3 mb-2">
                  <form className="">
                    <label className="mb-1 text-light" for="name">
                      Doctor *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDoctor(e.target.value)}
                    >
                      <option>Select</option>
                      {selectedDoctorList1?.map((doc) => (
                        <option value={doc?._id}>
                          {doc?.Firstname}&nbsp;{doc?.Lastname}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Date of Appointment *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setDOA(e.target.value)}
                    >
                      <option>Select</option>

                      {/* {Doctorschedule?.scheduleList
                        ?.filter(
                          (schedd) =>
                            moment(schedd?.scheduleDate).isSameOrAfter(
                              moment(),
                              "day"
                            ) && schedd?.bookingstatus === "Vacant"
                        )
                        ?.map((shedul) => {
                          const formattedDate = moment(
                            shedul?.scheduleDate
                          ).format("DD-MM-YYYY");
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
                        })} */}
                      {uniqueSchedules.map((shedul) => (
                        <option
                          value={shedul?.scheduleDate}
                          key={shedul?.scheduleDate}
                        >
                          {moment(shedul?.scheduleDate).format("DD-MM-YYYY")}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Time of Appointment *
                    </label>
                    <br />
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setTOA(e.target.value)}
                    >
                      <option>Select</option>

                      {selecteTimearray?.map((shedul) => (
                        <option
                          value={`${shedul?.startTime}-${shedul?.endTime}-${shedul?._id}`}
                        >
                          {/* <option value={shedul?._id}> */}
                          {shedul?.startTime}-{shedul?.endTime}
                        </option>
                      ))}
                    </Form.Select>
                  </form>
                </div>
                <div className="col-lg-3">
                  <form>
                    <label className="mb-1 text-light" for="email">
                      Appointment Charges
                    </label>
                    <br />
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        padding: "8px 20px",
                        borderRadius: "0px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#ebebeb",
                        marginTop: "6%",
                      }}
                      value={Doctorschedule?.appointmentcharge}
                    ></input>
                  </form>
                </div>
              </div>
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
                handleCloseBook();
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
                BookAppointmentForExixtingPatients(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <div style={{ overflow: "hidden", overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Sl. No.</th>
              <th>Profile</th>
              <th>Patient-Id</th>
              <th> Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>DOB</th>
              {/* <th>Reciept</th> */}
              <th>Bar-Code</th>
              <th>Appointment</th>
              <th>Edit/Update</th>
              <th>Read More</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>
                          {item?.profilepic ? (
                            <img
                              alt=""
                              src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          ) : (
                            <img
                              src="/img/dummyprofile.png"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
                        {/* <td>
                      <button
                        style={{
                          padding: "6px",
                          border: "1px solid white",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={() => {
                          handleShow3();
                          setView(item);
                        }}
                      >
                        Consultaion Reciept
                      </button>
                    </td> */}
                        <td>
                          <CiBarcode
                            style={{ cursor: "pointer", fontSize: "35px" }}
                            onClick={() => handleShow10(item)}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              padding: "6px",
                              border: "1px solid white",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={() => {
                              handleShowBook(item);
                            }}
                          >
                            Book
                          </button>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              textAlign: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <button
                              onClick={() => handleShowEdit(item)}
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <MdEdit
                                style={{ color: "#20958c", marginRight: "1%" }}
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={() => handleShow(item)}
                          >
                            Read More
                          </button>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{index + 1}</td>
                        <td>
                          {item?.profilepic ? (
                            <img
                              alt=""
                              src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          ) : (
                            <img
                              src="/img/dummyprofile.png"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
                        {/* <td>
                    <button
                      style={{
                        padding: "6px",
                        border: "1px solid white",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => {
                        handleShow3();
                        setView(item);
                      }}
                    >
                      Consultaion Reciept
                    </button>
                  </td> */}
                        <td>
                          <CiBarcode
                            style={{ cursor: "pointer", fontSize: "35px" }}
                            onClick={() => handleShow10(item)}
                          />
                        </td>
                        <td>
                          <button
                            style={{
                              padding: "6px",
                              border: "1px solid white",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={() => {
                              handleShowBook(item);
                            }}
                          >
                            Book
                          </button>
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              textAlign: "center",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <button
                              onClick={() => handleShowEdit(item)}
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <MdEdit
                                style={{ color: "#20958c", marginRight: "1%" }}
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={() => handleShow(item)}
                          >
                            Read More
                          </button>
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
  );
}
