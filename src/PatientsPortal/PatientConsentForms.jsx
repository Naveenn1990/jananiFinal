import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table, Modal, ProgressBar, Button } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";

const PatientConsentForms = () => {
    const user = JSON.parse(sessionStorage.getItem("adminDetails"));
    const { id } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [btn1, setbtn1] = useState(true);
    const [btn2, setbtn2] = useState(true);
    const [btn3, setbtn3] = useState(true);
    const [btn4, setbtn4] = useState(true);
  
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
    const [medicinesTaking, setmedicinesTaking] = useState();
    let formdata = new FormData();
    const [patientfirstname, setpatientfirstname] = useState("");
    const [patientlastname, setpatientlastname] = useState("");
    const [gender, setgender] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setemail] = useState("");
    const [mobileno, setmobileno] = useState();
    const [alternatePhoneNumber, setalternatePhoneNumber] = useState();
    const [Address, setAddress] = useState();
    const [Address1, setAddress1] = useState();
    const [City, setCity] = useState();
  
    const [State, setState] = useState();
    const [Zipcode, setZipcode] = useState();
    const [Marital, setMarital] = useState();
  
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
  
    // function addPatientAllergies() {
    //   console.log(patientAllergies);
    //   patientAllergies.push(allergy);
    // }
  
    const [category, setcategory] = useState([]);
  
    const getcategory = () => {
      axios
        .get("http://localhost:8521/api/user/getPatientList")
        .then(function (response) {
          // handle success
          setcategory(response.data.UsersInfo);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
  
    const [HServicesList, setHServicesList] = useState([]);
  
    const getHospitalServiceList = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8521/api/admin/HospitalServicesList"
        );
        if (response.status === 200) {
          setHServicesList(response.data.allHospitalServices);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getcategory();
      getHospitalServiceList();
    }, []);
  
    // function addAllergy() {
    //   patientAllergies.push(allergy);
    //   // setpatientAllergies(patientAllergies);
    //   console.log(patientAllergies);
    // }
  
    useEffect(() => {
      setpatientAllergies(patientAllergies);
      setclickedAddAllergyBtn("");
      setallergy("");
    }, [clickedAddAllergyBtn]);
  
    console.log(category, "category");
    const [userdetail, setuserdetail] = useState([]);
    const getquestionbyid = async () => {
      try {
        let res = await axios.get(
          `http://localhost:8521/api/user/getPatientDetailByid/${id}`
        );
        if (res.status == 200) {
          setuserdetail(res.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getquestionbyid();
    }, []);
    console.log("userdetail", userdetail);
  
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
    const createPDF1 = async () => {
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
    const createPDF2 = async () => {
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
    const createPDF3 = async () => {
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
    const createPDF4 = async () => {
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
    const createPDF5 = async () => {
      // setRotate(360);
  
      // dynamic image is also adding in the PDF
      const pdf = new jsPDF("potrait", "pt", "a4");
      const data = await html2canvas(document.querySelector("#pdf"), {
        useCORS: true,
      });
      console.log("hhhh", data);
      const img = data.toDataURL("image/png");
      console.log("ddkd1", img);
      const imgProperties = pdf.getImageProperties(img);
      console.log("ddkd2", imgProperties);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      console.log("ddkd3", pdfWidth);
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
      console.log("ddkd4", pdfHeight);
      pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
  
      // const input = document.getElementById("pdf");
      // const options = { scrollY: -window.scrollY, useCORS: true };
      // const canvas = await html2canvas(input, options);
      // const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  
      pdf.save("Blueprint.pdf");
    };
  
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Consents Forms
          </h6>
          <div id="google_translate_element"></div>       
        </div>
  
        <div className="mt-3">
          <div className="d-flex gap-2">
            <button
              style={{
                padding: "6px",
                border: "none",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setbtn1(true);
                setbtn2(false);
                setbtn3(false);
                setbtn4(false);
              }}
            >
              General Consent Forms
            </button>
            <button
              style={{
                padding: "6px",
                border: "none",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setbtn1(false);
                setbtn2(true);
                setbtn3(false);
                setbtn4(false);
              }}
            >
              Hospitalized Estimated Charge Sheet Cum Consent Form
            </button>
            <button
              style={{
                padding: "6px",
                border: "none",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setbtn1(false);
                setbtn2(false);
                setbtn3(true);
                setbtn4(false);
              }}
            >
              Informed Consent for High risk Procedure
            </button>
            <button
              style={{
                padding: "6px",
                border: "none",
                backgroundColor: "#20958c",
                color: "white",
                borderRadius: "0px",
              }}
              onClick={() => {
                setbtn1(false);
                setbtn2(false);
                setbtn3(false);
                setbtn4(true);
              }}
            >
              Consent For Anesthesia / Sedation
            </button>
          </div>
        </div>
  
        {btn1 ? (
          <>
            <div className="mt-2 d-dlex text-end gap-2">
              <button
                style={{
                  padding: "6px",
                  border: "none",
                  backgroundColor: "#20958c",
                  color: "white",
                  borderRadius: "0px",
                }}
                onClick={createPDF}
              >
                Print <FiDownload />
              </button>
            </div>
            <div
              id="pdf"
              style={{ padding: "15px", overflow: "hidden", overflowX: "scroll" }}
            >
              <div
                style={{
                  padding: "5px",
                  border: "2px solid #20958C",
                  width: "1073px",
                  margin: "auto",
                  borderRadius: "20px",
                  height: "1235px",
                }}
              >
                <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/logo.jpg"
                      alt=""
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                      JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                    </h4>
                    <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                      Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                      Vijaypura-586109
                    </h6>
                    <h6 style={{ fontSize: "16px" }}>
                      Tel:08352-277077 Cell:9606031158, 7090831204
                      Email:jananihospital2018@gmail.com
                    </h6>
                  </div>
                </div>
                <div
                  className="text-center"
                  style={{
                    borderBottom: "1px solid #20958C",
                    width: "100%",
                    textAlign: "center",
                  }}
                ></div>
                <div className="text-center mt-1">
                  {" "}
                  <h6
                    className="fw-bold mt-2"
                    style={{ color: "#20958C", fontSize: "30px" }}
                  >
                    GENERAL CONSENT FORM
                  </h6>
                </div>
                <div
                  style={{
                    paddingLeft: "42px",
                    paddingRight: "42px",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, Want to
                    get myself/ my relative{" "}
                    <span style={{ borderBottom: "1px solid black" }}>
                      <input
                        type="text"
                        className="vi_0"
                        value={userdetail?.Firstname}
                        style={{ width: "490px" }}
                        readOnly
                      />
                    </span>{" "}
                    Admitted and treated in this hospital. The decision of coming
                    here is purely on my discretion.
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, am fully
                    aware with the facilities available for the care of myself/ my
                    relative and have full faith in the staff of this hospital/
                    Medical Establishment. I have been explained that admitted
                    Patients and Patients required emergency care take priority of
                    the Doctor. I fully agree and co-operate.{" "}
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, fully
                    understand and agree to pay the fees charged by the Doctor/
                    Hospital for the professional service rendered to me/ relative
                    during the illness regardies of the end result of the illness.
                    I promise not to misbehave either with Doctors or any of the
                    Hospital staff. I know that indecency on my part will lead to
                    explusion from the Hospital.{" "}
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I, hereby on
                    my own free will, authorize the hospital to admit myself/ my
                    relative.{" "}
                  </p>
                </div>
                {/* <div className="text-center mt-1">
                  {" "}
                  <h6
                    className="fw-bold mt-2"
                    style={{ color: "#20958C", fontSize: "30px" }}
                  >
                    ಸಾಮಾನ್ಯ ಒಪ್ಪಿಗೆ ಪತ್ರ
                  </h6>
                </div>
                <div
                  style={{
                    paddingLeft: "42px",
                    paddingRight: "42px",
                    textAlign: "justify",
                  }}
                >
                  <p style={{ fontSize: "18px" }}>
                    ಕೇಳಿಗಿನ ಸಹಿ ಮಾಡಿದ ನಾನು / ನನ್ನ ಸಂಬಂಧಿ{" "}
                    <span style={{ borderBottom: "1px solid black" }}>
                      <input
                        type="text"
                        className="vi_0"
                        style={{ width: "490px" }}
                        value={userdetail?.Firstname}
                        readOnly
                      />
                    </span>{" "}
                    ಗೆ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ದಾಖಲಿಸಲು ಅನುಮತಿ ಕೊಟ್ಟಿದ್ದೇನೆ.
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ನಾನು ಸ್ವೈಚ್
                    ಇಂದ ಈ ಆಸ್ಪತ್ರೆಗೆ ಬಂದಿದ್ದೇನೆ ಮತ್ತು ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಲಭ್ಯವಿರುವ
                    ವಿಶೇಷತೆಗಳ ಬಗ್ಗೆ ನನಗೆ ತಿಳಿಯಿಲ್ಲ ಮತ್ತು ನಾನು ತಿಳಿದಿಲ್ಲ. ಆಸ್ಪತ್ರೆಯ
                    ನಿಯಮಗಳನ್ನು ಸರಿಯಾಗಿ ಪಾಲಿಸುತ್ತೇನೆ ಮತ್ತು ನನ್ನಿಂದ ವೈದ್ಯರು,
                    ಆಸ್ಪತ್ರೆಯ ಸಿಬ್ಬಂದಿಗಳು ಮತ್ತು ಇತರ ರೋಗಿಗಳಿಗೆ ಯಾವ ತೊಂದರೆಯೂ
                    ಇಲ್ಲದಂತೆ ನನ್ನ ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತೇನೆ. ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ನಡೆಯುವ
                    ಸೇವೆಗಳ ಬಿಲಗಳನ್ನು ಪವತಿಸುತ್ತೇನೆ.{" "}
                  </p>
                </div> */}
                <div className="container">
                  <div className="row" style={{ border: "1px solid #20958C" }}>
                    <div
                      className="col-md-4"
                      style={{
                        paddingTop: "10px",
                        border: "1px solid #20958C",
                        paddingLeft: "unset",
                        paddingRight: "unset",
                      }}
                    >
                      <h6
                        style={{
                          borderBottom: "1px solid #20958C",
                          fontSize: "18px",
                        }}
                      >
                        Doctor :
                        <span style={{ borderBottom: "1px solid black" }}>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                          />
                        </span>{" "}
                      </h6>
                      <h6 style={{ fontSize: "18px" }}>Name : </h6>
                      <span style={{ borderBottom: "1px solid black" }}>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "344px" }}
                        />
                      </span>
                      <br />
                      <br />
                      <h6
                        style={{
                          borderTop: "1px solid #20958C",
                          fontSize: "18px",
                        }}
                      >
                        Sign :
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                          />
                        </span>
                      </h6>
                    </div>
                    <div
                      className="col-md-4"
                      style={{
                        paddingTop: "10px",
                        border: "1px solid #20958C",
                        paddingLeft: "unset",
                        paddingRight: "unset",
                      }}
                    >
                      <h6
                        style={{
                          borderBottom: "1px solid #20958C",
                          fontSize: "18px",
                        }}
                      >
                        Tenant/ Relative :
                        <span style={{ borderBottom: "1px solid black" }}>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                            value={userdetail?.relativeName}
                          />
                        </span>
                      </h6>
                      <h6 style={{ fontSize: "20px" }}>Name : </h6>
                      <span style={{ borderBottom: "1px solid black" }}>
                        <input
                          type="text"
                          className="vi_0"
                          style={{ width: "344px" }}
                          value={userdetail?.relativeName}
                        />
                      </span>
                      <br />
                      <br />
                      <h6
                        style={{
                          borderTop: "1px solid #20958C",
                          fontSize: "18px",
                        }}
                      >
                        Relationship :
                        <span style={{ borderBottom: "1px solid black" }}>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                            value={userdetail?.relationWithPatient}
                          />
                        </span>
                      </h6>
                    </div>
                    <div
                      className="col-md-4"
                      style={{
                        paddingTop: "10px",
                        border: "1px solid #20958C",
                        paddingLeft: "unset",
                        paddingRight: "unset",
                      }}
                    >
                      <h6
                        style={{
                          borderBottom: "1px solid #20958C",
                          fontSize: "18px",
                        }}
                      >
                        Patient :
                        <span style={{ borderBottom: "1px solid black" }}>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                            value={userdetail?.Firstname}
                          />
                        </span>
                      </h6>
                      <br />
                      <br />
                      <h6 style={{ fontSize: "18px" }}>
                        Sign :
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "344px" }}
                          />
                        </span>
                      </h6>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }}>
                    Date/ Time :{" "}
                    <span>
                      <input
                        type="text"
                        className="vi_0"
                        style={{ width: "500px" }}
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {btn2 ? (
              <>
                <div className="mt-2 d-dlex text-end gap-2">
                  <button
                    style={{
                      padding: "6px",
                      border: "none",
                      backgroundColor: "#20958c",
                      color: "white",
                      borderRadius: "0px",
                    }}
                    onClick={createPDF1}
                  >
                    Print <FiDownload />
                  </button>
                </div>
                <div
                  id="pdf"
                  style={{
                    padding: "15px",
                    overflow: "hidden",
                    overflowX: "scroll",
                  }}
                >
                  <div
                    style={{
                      padding: "5px",
                      border: "2px solid #20958C",
                      width: "1073px",
                      margin: "auto",
                      borderRadius: "20px",
                      height: "1700px",
                    }}
                  >
                    <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                      <div className="d-flex align-items-center">
                        <img
                          src="/img/logo.jpg"
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                          JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                        </h4>
                        <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                          Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                          Vijaypura-586109
                        </h6>
                        <h6 style={{ fontSize: "16px" }}>
                          Tel:08352-277077 Cell:9606031158, 7090831204
                          Email:jananihospital2018@gmail.com
                        </h6>
                      </div>
                    </div>
                    <div
                      className="text-center"
                      style={{
                        borderBottom: "1px solid #20958C",
                        width: "100%",
                        textAlign: "center",
                      }}
                    ></div>
                    <div className="text-center mt-1">
                      {" "}
                      <h6
                        className="fw-bold mt-2"
                        style={{ color: "#20958C", fontSize: "30px" }}
                      >
                        Hospitalization Estimated Charge sheet Cum Consent form
                      </h6>
                    </div>
                    <div
                      style={{
                        paddingLeft: "42px",
                        paddingRight: "42px",
                        textAlign: "justify",
                      }}
                    >
                      <p style={{ fontSize: "18px" }}>
                        1. Ward/ Room Charges
                        <div className="container">
                          <div
                            className="row"
                            style={{ border: "1px solid #20958C" }}
                          >
                            <div
                              className="col-md-4"
                              style={{
                                paddingTop: "10px",
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <textarea
                                name=""
                                id=""
                                cols="27"
                                rows="4"
                                className="vi_0"
                              ></textarea>
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                paddingTop: "10px",
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <h6
                                style={{
                                  fontSize: "17px",
                                  padding: "5px",
                                }}
                              >
                                Ward/ Room Category Charges per Day (Including
                                Room Rent, nursing Charges, Duty Doctor Charges,
                                Monitoring, charges, Primary Consultant Charges).
                              </h6>
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                paddingTop: "10px",
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <h6
                                style={{
                                  fontSize: "18px",
                                }}
                              >
                                Remark
                              </h6>
                              <textarea
                                name=""
                                id=""
                                cols="27"
                                rows="3"
                                className="vi_0"
                              ></textarea>
                            </div>
                            <div
                              className="col-md-12"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <textarea
                                name=""
                                id=""
                                cols="90"
                                rows="1"
                                className="vi_0"
                              ></textarea>
                            </div>
                            <div
                              className="col-md-12"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <textarea
                                name=""
                                id=""
                                cols="90"
                                rows="1"
                                className="vi_0"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        2. Surgery Package Charges
                        <div className="container">
                          <div
                            className="row"
                            style={{ border: "1px solid #20958C" }}
                          >
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Name of the Surgery/ Surgories
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Estimated Cost
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Remark
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                                <select
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                >
                                  <option value="">select the surgery</option>
                                  {HServicesList?.map((val) => {
                                    return (
                                      <option value={val?.hSurgeryService}>
                                        {val?.hSurgeryService}
                                      </option>
                                    );
                                  })}
                                </select>
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                {HServicesList.map((val) => {
                                  const isInsured =
                                    val?.hServicePriceInsuredPeople === "true" && val?.hSurgeryService; // Replace with your condition to check if the patient is insured
  
                                  return (
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "321px" }}
                                      value={
                                        isInsured
                                          ? val?.hServicePriceInsuredPeople
                                          : val?.hServicePriceNonInsuredPeople
                                      }
                                      readOnly // If you want the input to be non-editable
                                    />
                                  );
                                })}
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                                <select
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                >
                                  <option value="">select the surgery</option>
                                  {HServicesList?.map((val) => {
                                    return (
                                      <option value={val?.hSurgeryService}>
                                        {val?.hSurgeryService}
                                      </option>
                                    );
                                  })}
                                </select>
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        3.Special Procedure Charges
                        <div className="container">
                          <div
                            className="row"
                            style={{ border: "1px solid #20958C" }}
                          >
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Name of the Procedure/ Procedures
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Estimated Cost
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Remark
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        4. Special Investigation Charges
                        <div className="container">
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Name of the Surgery/ Surgories
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Estimated Cost
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                                fontSize: "18px",
                              }}
                            >
                              Remark
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                                <select
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                >
                                  <option value="">select the surgery</option>
                                  {HServicesList?.map((val) => {
                                    return (
                                      <option value={val?.hSurgeryService}>
                                        {val?.hSurgeryService}
                                      </option>
                                    );
                                  })}
                                </select>
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
  
                          <div className="row">
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                {/* <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                /> */}
                                <select
                                  name=""
                                  id=""
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                >
                                  <option value="">select the surgery</option>
                                  {HServicesList?.map((val) => {
                                    return (
                                      <option value={val?.hSurgeryService}>
                                        {val?.hSurgeryService}
                                      </option>
                                    );
                                  })}
                                </select>
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                            <div
                              className="col-md-4"
                              style={{
                                border: "1px solid #20958C",
                                paddingLeft: "unset",
                                paddingRight: "unset",
                              }}
                            >
                              <span style={{ borderBottom: "1px solid black" }}>
                                <input
                                  type="text"
                                  className="vi_0"
                                  style={{ width: "321px" }}
                                />
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        <span style={{ color: "#20958C", fontWeight: "600" }}>
                          Note
                        </span>{" "}
                        : The above stated details exclude charges for routine
                        procedure/ Investigation, Pharmacy / Medicine Specialists
                        and superSpecialists consultations, ventilator and oxygen,
                        Synringe pump, Patient transport and usages of any other
                        Equipments/ Materials as required.
                      </p>
                      <p
                        style={{
                          fontSize: "20px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: "#20958C",
                            fontWeight: "600",
                            justifyContent: "center",
                          }}
                        >
                          Declaration
                        </h4>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I,
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "490px" }}
                            value={user?.username}
                          />
                        </span>{" "}
                        have been explained in detail the above mentioned charges
                        in a language that I understand.
                        <br />
                        <br />
                        Patient/ Patient Relative Name & Signature :{" "}
                        <span>
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                            value={userdetail?.relativeName}
                          />
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                          />
                        </span>
                      </p>
  
                      <p style={{ fontSize: "18px" }}>
                        <span>
                          Witness-1/ Relative-1{" "}
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                          />
                          Witness-2/ Relative-2{" "}
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                          />
                        </span>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>
                          Phone No :{" "}
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone No
                          :{" "}
                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "270px" }}
                          />
                        </span>
                      </p>
                      <p style={{ fontSize: "18px" }}>
                        Name: Designation & Signature of the hospital staff
                        Explaining the Estinated Cost
                        <textarea
                          name=""
                          id=""
                          cols="90"
                          rows="2"
                          className="vi_0"
                        ></textarea>
                      </p>
                      <p style={{ fontSize: "18px", textAlignLast: "end" }}>
                        Signature
                        <input type="text" name="" id="" className="vi_0" />
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {btn3 ? (
                  <>
                    {/* English */}
                    <div className="mt-2 d-dlex text-end gap-2">
                      <button
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={createPDF2}
                      >
                        Print <FiDownload />
                      </button>
                    </div>
                    <div
                      id="pdf"
                      style={{
                        padding: "15px",
                        overflow: "hidden",
                        overflowX: "scroll",
                      }}
                    >
                      <div
                        style={{
                          padding: "5px",
                          border: "2px solid #20958C",
                          width: "1073px",
                          margin: "auto",
                          borderRadius: "20px",
                          height: "1700px",
                        }}
                      >
                        <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                          <div className="d-flex align-items-center">
                            <img
                              src="/img/logo.jpg"
                              alt=""
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                              JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
                            </h4>
                            <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                              Beside Canara Bank, Jalanagar Main Road, K. K.
                              Colony, Vijaypura-586109
                            </h6>
                            <h6 style={{ fontSize: "16px" }}>
                              Tel:08352-277077 Cell:9606031158, 7090831204
                              Email:jananihospital2018@gmail.com
                            </h6>
                          </div>
                        </div>
                        <div
                          className="text-center"
                          style={{
                            borderBottom: "1px solid #20958C",
                            width: "100%",
                            textAlign: "center",
                          }}
                        ></div>
                        <div className="text-center mt-1">
                          {" "}
                          <h6
                            className="fw-bold mt-2"
                            style={{ color: "#20958C", fontSize: "30px" }}
                          >
                            Informed Consent for High risk Procedure
                          </h6>
                        </div>
                        <div
                          style={{
                            paddingLeft: "42px",
                            paddingRight: "42px",
                            textAlign: "justify",
                          }}
                        >
                          <p style={{ fontSize: "18px" }}>
                            <div className="container">
                              <div
                                className="row"
                                style={{ border: "1px solid #20958C" }}
                              >
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Patient Name:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "190px" }}
                                      value={userdetail?.Firstname}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Date:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "269px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Age:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "274px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  OP No:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "252px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  IP No:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "262px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Sex:{" "}
                                  <span>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                    />
                                    Male &nbsp;&nbsp;&nbsp;
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                    />
                                    Female{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{
                                    padding: "20px",
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <p style={{ fontSize: "18px" }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; I/ We{" "}
                                    <span
                                      style={{ borderBottom: "1px solid black" }}
                                    >
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "301px" }}
                                        value={user?.username}
                                      />
                                    </span>
                                    have been explained about the medical
                                    condition and the prospered surgery by Dr.
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "680px" }}
                                      />
                                      <br />
                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                      &nbsp;Dr.
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "680px" }}
                                      />
                                    </span>{" "}
                                  </p>
  
                                  <p style={{ fontSize: "18px" }}>
                                    Medical Condition/Diagnosis :
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "670px" }}
                                      />
                                    </span>
                                    Proposed operative Procedure:
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "684px" }}
                                      />
                                    </span>{" "}
                                  </p>
                                  <p style={{ fontSize: "18px" }}>
                                    I/We, (the relatives/legal guardian of)
                                    Mr./Mrs
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "200px" }}
                                        value={userdetail?.relativeName}
                                      />
                                    </span>
                                    who is admitted on{" "}
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "200px" }}
                                      />
                                    </span>
                                    have been explained in the languages
                                    understood by me/us, about the pros & cons of
                                    the operation and risks involved during and
                                    after the surgery, and that the procedure
                                    carries a higher risk than the usual cases.
                                    <br />
                                    <br />
                                    I/We, have been explained in detail about the
                                    nature of the surgery/procedure, the possible
                                    benefits and complications. I/We have been
                                    explained that this case carries a higher risk
                                    than the usual and the reasons for the same.
                                    During the course of the surgical procedure,
                                    circumstances may arise or a condidtion may be
                                    found which may require suspension or
                                    extension of planned procedure or necessary
                                    performance of an alternative procedure.
                                    <br />
                                    <br />
                                    I/We, have been informed the high risk
                                    involved in medical procedures which might
                                    necessitate admission to ICU/NICU/Mecanial
                                    Ventilation/Endotracheal intubation Lumbar
                                    puncture/Bone marrow aspiration, Intercostal
                                    drainage, Arterial Central Dialysis, line,
                                    Exchange transfusion, FNAC Biopsy etc.
                                    <br />
                                    <br />
                                    I/We have beeen informed that the operation
                                    (s)/Procedures (s) involved the risk of
                                    unsuccessful result,complication,temporary or
                                    permanent injury or disability and even
                                    fatality form known or unforeseen causes. No
                                    guarantee or promises have been made to me/us
                                    concerning the results of the procedure or
                                    treatment.
                                    <br />
                                    <br />
                                    I/We, understood that I/We, have the right to
                                    withhold consent for the procedure/surgery
                                    I/We. also understand that I/We, have a right
                                    to obtain a second opinion transfer to a
                                    different centre and the risk involved in such
                                    a decision.
                                    <br />
                                    Knowing all the above mentioned facts / We,
                                    give my/our Risk Consent for the above
                                    mentioned surgery/Procedure.
                                    <br />
                                    <br />
                                    I/We also indemnify the hospital, the
                                    concerned doctors and the hospital staff in
                                    case of any adverse consequences arising from
                                    the surgery.
                                  </p>
                                  <p style={{ fontSize: "18px" }}>
                                    <div className="container"></div>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                ></div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Name
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Signature
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Date
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Time
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Patient/ Patient Surrogate
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Witness
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "18px",
                                  }}
                                >
                                  Doctor
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "16px",
                                  }}
                                >
                                  Relative/Legal_guardian (relationship with
                                  patient)
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* kannada */}
                    {/* <div className="mt-2 d-dlex text-end gap-2">
                      <button
                        style={{
                          padding: "6px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          borderRadius: "0px",
                        }}
                        onClick={createPDF3}
                      >
                        Print <FiDownload />
                      </button>
                    </div>
                    <div
                      id="pdf"
                      style={{
                        padding: "15px",
                        overflow: "hidden",
                        overflowX: "scroll",
                      }}
                    >
                      <div
                        style={{
                          padding: "5px",
                          border: "2px solid #20958C",
                          width: "1073px",
                          margin: "auto",
                          borderRadius: "20px",
                          height: "1700px",
                        }}
                      >
                        <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                          <div className="d-flex align-items-center">
                            <img
                              src="/Images/logo.jpg"
                              alt=""
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                              ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ
                            </h4>
                            <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                              "ಕನರಾ ಬ್ಯಾಂಕ್ ಪಕ್ಕ, ಜಾಲನಗರ್ ಮುಖ್ಯ ರಸ್ತೆ, ಕೆ.ಕೆ.
                              ಕಾಲೋನಿ, ವಿಜಯಪುರ-586109
                            </h6>
                            <h6 style={{ fontSize: "16px" }}>
                              ದೂರವಾಣಿ: 08352-277077, ಮೊಬೈಲ್: 9606031158,
                              7090831204 ಇಮೇಲ್: jananihospital2018@gmail.com
                            </h6>
                          </div>
                        </div>
                        <div
                          className="text-center"
                          style={{
                            borderBottom: "1px solid #20958C",
                            width: "100%",
                            textAlign: "center",
                          }}
                        ></div>
                        <div className="text-center mt-1">
                          {" "}
                          <h6
                            className="fw-bold mt-2"
                            style={{ color: "#20958C", fontSize: "30px" }}
                          >
                            ಅತಿದೊಡ್ಡ ಅಪಾಯದ ಕ್ರಮಕ್ಕಾಗಿ ತತ್ವಸೂಚನಾತ್ಮಕ ಒಪ್ಪಿಗೆ
                          </h6>
                        </div>
                        <div
                          style={{
                            paddingLeft: "42px",
                            paddingRight: "42px",
                            textAlign: "justify",
                          }}
                        >
                          <p style={{ fontSize: "20px" }}>
                            <div className="container">
                              <div
                                className="row"
                                style={{ border: "1px solid #20958C" }}
                              >
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ರೋಗಿಯ ಹೆಸರು:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "163px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ದಿನಾಂಕ:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "236px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ವಯಸ್ಸು:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "230px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಓಪಿ ಸಂಖ್ಯೆ:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "215px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಐಪಿ ಸಂಖ್ಯೆ:{" "}
                                  <span>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="vi_0"
                                      style={{ width: "214px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಲಿಂಗ :&nbsp;&nbsp;&nbsp;{" "}
                                  <span>
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      className="vi_0"
                                    />
                                    ಪುರುಷ &nbsp;&nbsp;&nbsp;
                                    <input
                                      type="radio"
                                      name=""
                                      id=""
                                      className="vi_0"
                                    />
                                    ಸ್ತ್ರೀ{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-12"
                                  style={{
                                    padding: "20px",
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <p style={{ fontSize: "18px" }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; ನಾನು/ನಾವು{" "}
                                    <span
                                      style={{ borderBottom: "1px solid black" }}
                                    >
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "301px" }}
                                      />
                                    </span>
                                    ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ನನಗೆ/ನಮಗೆ ವಿವರಿಸಲಾಗಿದೆ
                                    ಮತ್ತು ನಿಗದಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಡಾ.
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "680px" }}
                                      />
                                      <br />
                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                      &nbsp;ಡಾ.
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "680px" }}
                                      />
                                    </span>{" "}
                                  </p>
  
                                  <p style={{ fontSize: "18px" }}>
                                    ವೈದ್ಯಕೀಯ ಸ್ಥಿತಿ/ರೋಗನಿದಾನ :
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "670px" }}
                                      />
                                    </span>
                                    "ಪ್ರಸ್ತಾಪಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮ:
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "684px" }}
                                      />
                                    </span>{" "}
                                  </p>
                                  <p style={{ fontSize: "18px" }}>
                                    ನಾನು/ನಾವು, (ನಾತಿ/ಕಾನೂನು ಸಂರಕ್ಷಕ)
                                    ಶ್ರಿ./ಶ್ರಿಮತಿ, ಅವರು ವಾಸ್ತವ್ಯಕ್ಕೆ ಬರುವ ದಿನಾಂಕ
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "200px" }}
                                      />
                                    </span>
                                    ಅವರು ಪ್ರವೇಶಗೊಂಡ{" "}
                                    <span>
                                      <input
                                        type="text"
                                        className="vi_0"
                                        style={{ width: "200px" }}
                                      />
                                    </span>
                                    ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಭಾಷೆಯಲ್ಲಿ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                    ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಹಾನಿಗಳು ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                    ಸಮಯದಲ್ಲಿ ಮತ್ತು ನಂತರ ಉಂಟಾಗುವ ಅಪಾಯಗಳ ಬಗ್ಗೆ
                                    ವಿವರಿಸಲಾಗಿದೆ, ಮತ್ತು ಈ ಕ್ರಮವು ಸಾಮಾನ್ಯ
                                    ಪ್ರಕರಣಗಳಿಗಿಂತ ಹೆಚ್ಚು ಅಪಾಯವನ್ನು ಹೊಂದಿದೆ.
                                    <br />
                                    <br />
                                    ನಾವು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ/ಕ್ರಮದ ಸ್ವರೂಪ, ಸಾಧ್ಯವಾಗುವ
                                    ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಸಂಕೀರ್ಣತೆಗಳ ಬಗ್ಗೆ ವಿವರವಾಗಿ
                                    ವಿವರಿಸಲಾಗಿದೆ. ಈ ಪ್ರಕರಣವು ಸಾಮಾನ್ಯವಕ್ಕಿಂತ ಹೆಚ್ಚು
                                    ಅಪಾಯವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು ಅದಕ್ಕೆ ಕಾರಣಗಳನ್ನೂ
                                    ವಿವರಿಸಲಾಗಿದೆ. ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮದ ಅವಧಿಯಲ್ಲಿ,
                                    ಯೋಜಿತ ಕ್ರಮವನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲು ಅಥವಾ ವಿಸ್ತರಿಸಲು
                                    ಅಥವಾ ಬದಲ್ಮಾರ್ಗ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ನೆರವೇರಿಸಲು
                                    ಅಗತ್ಯವಿರುವ ಪರಿಸ್ಥಿತಿಗಳು ಅಥವಾ ಸ್ಥಿತಿಯನ್ನು
                                    ಕಂಡುಹಿಡಿಯಬಹುದು.
                                    <br />
                                    <br />
                                    ನಾವು ವೈದ್ಯಕೀಯ ಕ್ರಮಗಳಲ್ಲಿ ನಡೆಯಬಹುದಾದ ಹೆಚ್ಚಿನ
                                    ಅಪಾಯಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಲಾಗಿದೆ, ಇದು
                                    ICU/NICU/ಮೆಕಾನಿಕಲ್ ವೆಂಟಿಲೇಶನ್/ಎಂಡೋಟ್ರಾಕಿಯಲ್
                                    ಇಂಟ್ಯೂಬೇಷನ್, ಲಂಬಾರ್ ಪುಂಕ್ಚರ್/ಎಲುಬಿನ ಮಜ್ಜಿಗೆಯ
                                    ಆಕಾಂಕ್ಷೆ, ಇಂಟರ್ಕೋಸ್ಟಲ್ ಡ್ರೈನೆಜ್, ಅರೆರಿಯಲ್
                                    ಸೆಂಟ್ರಲ್ ಡಯಾಲಿಸಿಸ್, ಎಕ್ಸ್‌ಚೇಂಜ್
                                    ಟ್ರಾನ್ಸ್ಫ್ಯೂಷನ್, FNAC ಬಯೋಪ್ಸಿ ಮುಂತಾದವುಗಳಿಗೆ
                                    ಪ್ರವೇಶವನ್ನು ಅಗತ್ಯಗೊಳಿಸಬಹುದು.
                                    <br />
                                    <br />
                                    ನಾವು ತಿಳಿಸಲಾಗಿದೆ ಎಂಬ ಕಾರಣದಿಂದ ಈ
                                    ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ(ಗಳು)/ಕ್ರಮ(ಗಳು) ಅಸಾಧ್ಯ ಫಲಿತಾಂಶ,
                                    ಸಂಕೀರ್ಣತೆ, ತಾತ್ಕಾಲಿಕ ಅಥವಾ ಶಾಶ್ವತ ಗಾಯ ಅಥವಾ
                                    ಅಂಗವಿಕಲತೆ ಮತ್ತು ಅಜ್ಞಾತ ಅಥವಾ ಅಪ್ರತೀಕ್ಷಿತ
                                    ಕಾರಣಗಳಿಂದ ದಾರುಣಾವಳಿ ಸೇರಿದಂತೆ ಅಪಾಯವನ್ನು
                                    ಹೊಂದಿದೆ. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅಥವಾ ಚಿಕಿತ್ಸೆಯ
                                    ಫಲಿತಾಂಶಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಖಾತರಿಯಿಲ್ಲ ಅಥವಾ
                                    ನಮ್ಮಿಗೆ/ನಮಗೆ ಭರವಸೆ ನೀಡಿಲ್ಲ.
                                    <br />
                                    <br />
                                    ನಾನು/ನಾವು, ಈ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಶಸ್ತ್ರವೈದ್ಯಕೀಯ
                                    ಕ್ರಮಕ್ಕಾಗಿ ಒಪ್ಪಿಗೆಯನ್ನು ನಿರಾಕರಿಸಲು ಹಕ್ಕು
                                    ಹೊಂದಿದ್ದೇವೆ. ನಾನು/ನಾವು, ಎರಡನೇ ಅಭಿಪ್ರಾಯವನ್ನು
                                    ಪಡೆಯಲು, ಬೇರೆ ಕೇಂದ್ರಕ್ಕೆ ವರ್ಗಾವಣೆಗೊಳ್ಳಲು ಮತ್ತು
                                    ಅಂತಹ ನಿರ್ಣಯದಲ್ಲಿ ತೊಡಗಿರುವ ಅಪಾಯವನ್ನು
                                    ಹೊಂದಿದ್ದೇವೆ ಎಂಬುದನ್ನು ಕೂಡ ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ.
                                    <br />
                                    "ಎಲ್ಲಾ ಮೇಲ್ಕಂಡ ವಿಷಯಗಳನ್ನು ತಿಳಿದು, ನಾವು ಮೇಲ್ಕಂಡ
                                    ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮಕ್ಕಾಗಿ ಅಪಾಯದ ಒಪ್ಪಿಗೆ
                                    ನೀಡುತ್ತೇವೆ.
                                    <br />
                                    <br />
                                    ನಾವು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಿಂದ ಉಂಟಾಗುವ ಯಾವುದೇ
                                    ಹಾನಿಕಾರಕ ಪರಿಣಾಮಗಳ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಆಸ್ಪತ್ರೆ,
                                    ಸಂಬಂಧಿತ ವೈದ್ಯರು ಮತ್ತು ಆಸ್ಪತ್ರೆ ಸಿಬ್ಬಂದಿಯನ್ನು
                                    ರಕ್ಷಿಸಲು ಸಮ್ಮತಿಸುತ್ತೇವೆ..
                                  </p>
                                  <p style={{ fontSize: "18px" }}>
                                    <div className="container"></div>
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                ></div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಹೆಸರು
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಹಸ್ತಾಕ್ಷರ
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ದಿನಾಂಕ
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಸಮಯ
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ರೋಗಿ/ರೋಗಿಯ ಪ್ರತಿನಿಧಿ
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಸಾಕ್ಷಿ
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  ಡಾಕ್ಟರ್
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  className="col-md-4"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                    fontSize: "16px",
                                  }}
                                >
                                  ನಾತಿ/ಕಾನೂನು ಸಂರಕ್ಷಕ (ರೋಗಿಯೊಂದಿಗೆ ಸಂಬಂಧ)
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                                <div
                                  className="col-md-2"
                                  style={{
                                    border: "1px solid #20958C",
                                    paddingLeft: "unset",
                                    paddingRight: "unset",
                                  }}
                                >
                                  <span>
                                    <input
                                      type="text"
                                      className="vi_0"
                                      style={{ width: "161px" }}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </>
                ) : (
                  <>
                    {btn4 ? (
                      <>
                        {/* English */}
                        <div className="mt-2 d-dlex text-end gap-2">
                          <button
                            style={{
                              padding: "6px",
                              border: "none",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={createPDF4}
                          >
                            Print <FiDownload />
                          </button>
                        </div>
                        <div
                          id="pdf"
                          style={{
                            padding: "15px",
                            overflow: "hidden",
                            overflowX: "scroll",
                          }}
                        >
                          <div
                            style={{
                              padding: "5px",
                              border: "2px solid #20958C",
                              width: "1073px",
                              margin: "auto",
                              borderRadius: "20px",
                              height: "1700px",
                            }}
                          >
                            <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/img/logo.jpg"
                                  alt=""
                                  style={{ width: "100px" }}
                                />
                              </div>
                              <div className="text-center">
                                <h4
                                  className="fw-bold"
                                  style={{ fontSize: "25px" }}
                                >
                                  JANANI MULTISPECIALITY HOSPITAL AND RESEARCH
                                  CENTER
                                </h4>
                                <h6
                                  className="fw-bold"
                                  style={{ fontSize: "19px" }}
                                >
                                  Beside Canara Bank, Jalanagar Main Road, K. K.
                                  Colony, Vijaypura-586109
                                </h6>
                                <h6 style={{ fontSize: "16px" }}>
                                  Tel:08352-277077 Cell:9606031158, 7090831204
                                  Email:jananihospital2018@gmail.com
                                </h6>
                              </div>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                borderBottom: "1px solid #20958C",
                                width: "100%",
                                textAlign: "center",
                              }}
                            ></div>
                            <div className="text-center mt-1">
                              {" "}
                              <h6
                                className="fw-bold mt-2"
                                style={{ color: "#20958C", fontSize: "30px" }}
                              >
                                Consent For Anesthesia / Sedation
                              </h6>
                            </div>
                            <div
                              style={{
                                paddingLeft: "42px",
                                paddingRight: "42px",
                                textAlign: "justify",
                              }}
                            >
                              <p style={{ fontSize: "17px" }}>
                                <div className="container">
                                  <div
                                    className="row"
                                    style={{ border: "1px solid #20958C" }}
                                  >
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Patient Name:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "190px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Date:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "269px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Age:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "274px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      OP No:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "252px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      IP No:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "262px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Sex:{" "}
                                      <span>
                                        <input
                                          type="radio"
                                          name=""
                                          id=""
                                        />
                                        Male &nbsp;&nbsp;&nbsp;
                                        <input
                                          type="radio"
                                          name=""
                                          id=""
                                        />
                                        Female{" "}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Diagnosis :{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "845px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Operative Procedure/ Operation :{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "650px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
  
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Type of Anesthesia Local/ General/ Spinal/
                                      Epidural/ Never Block/ Combined/ MAC{" "}
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        padding: "6px",
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <p style={{ fontSize: "17px" }}>
                                        I,{" "}
                                        <span
                                          style={{
                                            borderBottom: "1px solid black",
                                          }}
                                        >
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "301px" }}
                                            value={userdetail?.Firstname}
                                          />
                                        </span>
                                        (Patient Name), give my full consent out
                                        of my own free will to undergo the
                                        following surgery / procedure
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "442px" }}
                                          />
                                          at Janani Multispeciality Hospital I
                                          understand that the above mentioned
                                          procedure necessitates the
                                          administration of local/sedation/
                                          regional/general anesthesia or any
                                          combination there of to provide the
                                          required anesthesia service.
                                        </span>{" "}
                                      </p>
  
                                      <p style={{ fontSize: "17px" }}>
                                        I, understand that anesthetic agent zould
                                        be administered by injecting in to the
                                        bloodstream (IV LINE), breathed in to the
                                        lungs, myected through a needle/catheter
                                        placed either directly in to the spinal
                                        canal er immediate outside the spinal
                                        canal block is achieved by injecting the
                                        anesthetic agent near the nerves.
                                      </p>
                                      <p style={{ fontSize: "17px" }}>
                                        I, undentand results and effects of
                                        anesthesia depends on the type
                                        administered and it decreasedless of
                                        feeling/numbness, loss of movement to
                                        tatal unconscious state. vary from
                                        temporary
                                        <br />
                                        <br />
                                        I, have been explained that all forms of
                                        anesthesia invalve some risks and no
                                        guarantees or promises can the results of
                                        the procedure/treatments, I understand
                                        that there of aesthesia Theses include
                                        Bruising, pain made concerning some
                                        infrequent complications that can occur
                                        due to use ome injuryst the side of
                                        injections, temporary breathing
                                        difficulties, temporary nerve damage
                                        muscle paint, asthmatic reactions,
                                        headaches, the possibility of sensation
                                        during the operation (especially with
                                        Caesarean section and some emergency
                                        procedures), damage to teeth and dental
                                        prostheses, lip and tongue, temperare, but
                                        nous complications including, heart
                                        attack, stroke, severe allergic ar
                                        sensitivity reactions, brain camage,
                                        kidney o failure, lung damage, paraplegia
                                        or quadriplegie, permanent nerve e or
                                        blood vessel damage, eye eye injury,
                                        damage, to the larynx Ivoice boa) and
                                        vocal cards perumania and infaction bom
                                        blood transfusion The possibility of more
                                        serious complications including death is
                                        quite remote, but it does exists.
                                        <br />
                                        <br />
                                        I, have been explained language known &
                                        understood by about the nature of the
                                        surgery/procedure, type of anarsthesia
                                        used, and it's benefits, and costs, inks
                                        associated with it, other alternatives and
                                        its prognosis. <br />
                                        <br />
                                        I, understand that local anaesthesia with
                                        or without sedation may not be successful
                                        and therefor an altenative method may be
                                        used as deemend necessary.
                                        <br />
                                        <br />I hereby absolve Janani
                                        Multispeciailty Hospital.
                                        <span>
                                        <select name="" id="" className="vi_0" style={{width:"331px"}}>
                                        <option value="">
                                        select the surgery
                                      </option>{HServicesList?.map((val) => {
  
                                    return (
                                      <option value={val?.hSurgeryService}>
                                        {val?.hSurgeryService}
                                      </option>
                                    );
                                  })}
                                  </select>
                                        </span>
                                        and its surgical team & hospital staff of
                                        anyliability for consequences arising
                                        because of the above-mentioned
                                        surgery/procedure.
                                        <br />
                                        Consent of Patient
                                        Rapresentative/Surrogate
                                        <br />
                                        The patient is unable to give consent
                                        because he/she is minor/Unconscious{" "}
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "331px" }}
                                            value={userdetail?.Firstname}
                                          />
                                        </span>
                                        hence I,{" "}
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "331px" }}
                                            value={userdetail?.relativeName}
                                          />
                                        </span>{" "}
                                        (Name /relationship with Patient)
                                        therefore give my consent an behalf of the
                                        patient after discussion with the Doctor
                                        for the above mentioned
                                        Surgery/operative/Invasive Proceudre
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    ></div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      Name
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      Signature
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      Date
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      Time
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Patient/ Patient Surrogate
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Witness
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "17px",
                                      }}
                                    >
                                      Doctor
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "16px",
                                      }}
                                    >
                                      Relative/Legal_guardian (relationship with
                                      patient)
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* kannada */}
                        {/* <div className="mt-2 d-dlex text-end gap-2">
                          <button
                            style={{
                              padding: "6px",
                              border: "none",
                              backgroundColor: "#20958c",
                              color: "white",
                              borderRadius: "0px",
                            }}
                            onClick={createPDF5}
                          >
                            Print <FiDownload />
                          </button>
                        </div>
                        <div
                          id="pdf"
                          style={{
                            padding: "15px",
                            overflow: "hidden",
                            overflowX: "scroll",
                          }}
                        >
                          <div
                            style={{
                              padding: "5px",
                              border: "2px solid #20958C",
                              width: "1073px",
                              margin: "auto",
                              borderRadius: "20px",
                              height: "1700px",
                            }}
                          >
                            <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/Images/logo.jpg"
                                  alt=""
                                  style={{ width: "100px" }}
                                />
                              </div>
                              <div className="text-center">
                                <h4
                                  className="fw-bold"
                                  style={{ fontSize: "25px" }}
                                >
                                  ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಸಂಶೋಧನಾ ಕೇಂದ್ರ
                                </h4>
                                <h6
                                  className="fw-bold"
                                  style={{ fontSize: "19px" }}
                                >
                                  "ಕನರಾ ಬ್ಯಾಂಕ್ ಪಕ್ಕ, ಜಾಲನಗರ್ ಮುಖ್ಯ ರಸ್ತೆ, ಕೆ.ಕೆ.
                                  ಕಾಲೋನಿ, ವಿಜಯಪುರ-586109
                                </h6>
                                <h6 style={{ fontSize: "16px" }}>
                                  ದೂರವಾಣಿ: 08352-277077, ಮೊಬೈಲ್: 9606031158,
                                  7090831204 ಇಮೇಲ್: jananihospital2018@gmail.com
                                </h6>
                              </div>
                            </div>
                            <div
                              className="text-center"
                              style={{
                                borderBottom: "1px solid #20958C",
                                width: "100%",
                                textAlign: "center",
                              }}
                            ></div>
                            <div className="text-center mt-1">
                              {" "}
                              <h6
                                className="fw-bold mt-2"
                                style={{ color: "#20958C", fontSize: "30px" }}
                              >
                                ನಿಷ್ಚೇತನ/ತಾತ್ಕಾಲಿಕ ನೆನೆಗುದಿಗೆ ಬಿತ್ತುವಿಕೆಗಾಗಿ
                                ಒಪ್ಪಿಗೆ
                              </h6>
                            </div>
                            <div
                              style={{
                                paddingLeft: "42px",
                                paddingRight: "42px",
                                textAlign: "justify",
                              }}
                            >
                              <p style={{ fontSize: "17px" }}>
                                <div className="container">
                                  <div
                                    className="row"
                                    style={{ border: "1px solid #20958C" }}
                                  >
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ರೋಗಿಯ ಹೆಸರು:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "186px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ದಿನಾಂಕ:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "249px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ವಯಸ್ಸು:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "245px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಓಪಿ ಸಂಖ್ಯೆ:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "231px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಐಪಿ ಸಂಖ್ಯೆ:{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "230px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಲಿಂಗ:{" "}
                                      <span>
                                        <input
                                          type="radio"
                                          name=""
                                          id=""
                                          className="vi_0"
                                        />
                                        ಪುರುಷ &nbsp;&nbsp;&nbsp;
                                        <input
                                          type="radio"
                                          name=""
                                          id=""
                                          className="vi_0"
                                        />
                                        ಸ್ತ್ರೀ{" "}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ರೋಗನಿದಾನ :{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "856px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಕ್ರಮ/ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ :{" "}
                                      <span>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          className="vi_0"
                                          style={{ width: "741px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
  
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ ಸ್ಥಳೀಯ/ ಸಾಮಾನ್ಯ/ ಸ್ಫೈನಲ್/
                                      ಎಪಿಡ್ಯುರಲ್/ ನರ್ವ್ ಬ್ಲಾಕ್/ ಸಂಯೋಜಿತ/ MAC{" "}
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-12"
                                      style={{
                                        padding: "6px",
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <p style={{ fontSize: "17px" }}>
                                        ನಾನು,{" "}
                                        <span
                                          style={{
                                            borderBottom: "1px solid black",
                                          }}
                                        >
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "301px" }}
                                          />
                                        </span>
                                        (ರೋಗಿಯ ಹೆಸರು), ನನಗೆ ಸ್ವಯಂಸ್ಪೂರ್ತದಿಂದ ಈ
                                        ಕೆಳಗಿನ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮವನ್ನು
                                        ತೆಗೆದುಕೊಳ್ಳಲು ಸಂಪೂರ್ಣ ಒಪ್ಪಿಗೆ ನೀಡುತ್ತೇನೆ
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "636px" }}
                                          />
                                          <br />
                                          ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ, ಮೇಲ್ಕಂಡ
                                          ಕ್ರಮವು ಅಗತ್ಯನಿಷ್ಚೇತನ ಸೇವೆಯನ್ನು ಒದಗಿಸಲು
                                          ಸ್ಥಳೀಯ/ಸೂಜಿಸೀಡಿಸುವಿಕೆ/ಪ್ರಾದೇಶಿಕ/ಸಾಮಾನ್ಯ
                                          ನಿಷ್ಚೇತನ ಅಥವಾ ಅವುಗಳಲ್ಲಿ ಯಾವುದಾದರೂ
                                          ಸಂಯೋಜನೆಯನ್ನು ನೀಡಬೇಕಾಗಿದೆ ಎಂಬುದನ್ನು ನಾನು
                                          ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.
                                        </span>{" "}
                                      </p>
  
                                      <p style={{ fontSize: "17px" }}>
                                        ನಾನು, ಅನಿಸ್ಥೆಟಿಕ್ ಏಜೆಂಟ್ ಅನ್ನು
                                        ರಕ್ತನಾಳದಲ್ಲಿ (IV ಲೈನ್) ಸಲ್ಲಿಸುವ ಮೂಲಕ,
                                        ಶ್ವಾಸಕೋಶಗಳಲ್ಲಿ ಉಸಿರಾಟ ಮಾಡುವ ಮೂಲಕ,
                                        ನೆಡ್ಲ್/ಕ್ಯಾಥೆಟರ್ ಅನ್ನು ನೇರವಾಗಿ ಸ್ಫೈನಲ್
                                        ಕಾಲಿನಲ್ಲಿ ಅಥವಾ ಸ್ಫೈನಲ್ ಕಾಲಿನ ಹೊರಗಡೆ
                                        ಪ್ರದರ್ಶಿಸುವ ಮೂಲಕ ನೀಡಬಹುದು, ಅಥವಾ ರೋಗಿಯ
                                        ಬ್ಲಾಕ್ ಅನ್ನು ಅನಿಸ್ಥೆಟಿಕ್ ಏಜೆಂಟ್ ಅನ್ನು ನರಗಳ
                                        ಹತ್ತಿರ ಇಂಜೆಕ್ಟ್ ಮಾಡುವ ಮೂಲಕ ಸಾಧಿಸಲಾಗುತ್ತದೆ.
                                      </p>
                                      <p style={{ fontSize: "17px" }}>
                                        ನಾನು, ಅನಿಸ್ಥೇಷಿಯಾದ ಫಲಿತಾಂಶಗಳು ಮತ್ತು
                                        ಪರಿಣಾಮಗಳು ನೀಡಿದ ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ
                                        ಅವಲಂಬಿಸಿವೆ ಮತ್ತು ಇದು
                                        ಸಂವೇದನೆ/ಅನುಭವ/ನಿರ್ಜೀವತೆ, ಚಲನಶೀಲತೆಯ
                                        ನಷ್ಟದಿಂದ ಸಂಪೂರ್ಣ ಅಜ್ಞಾತ ಸ್ಥಿತಿವರೆಗೆ
                                        ಅಂತರವಿರಬಹುದು ಎಂಬುದನ್ನು
                                        ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಈ ಪ್ರಭಾವಗಳು
                                        ತಾತ್ಕಾಲಿಕವಾಗಿದ್ದಿರಬಹುದು
                                        <br />
                                        <br />
                                        ನಾನು, ಎಲ್ಲ ರೀತಿಯ ನಿಷ್ಚೇತನವು ಕೆಲವು
                                        ಅಪಾಯಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ ಮತ್ತು ಯಾವುದೇ
                                        ಭರವಸೆಗಳನ್ನು ನೀಡುವಂತಿಲ್ಲ ಅಥವಾ
                                        ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಚಿಕಿತ್ಸೆಗಳ ಫಲಿತಾಂಶಗಳ
                                        ಭರವಸೆಯನ್ನು ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬುದನ್ನು
                                        ವಿವರಿಸಲಾಗಿದೆ. ನಿಷ್ಚೇತನದಿಂದ ಉಂಟಾಗಬಹುದಾದ
                                        ಕೆಲವು ಅಪರೂಪದ ಸಂಕೀರ್ಣತೆಗಳು ಒಳಗೊಂಡಿರುತ್ತವೆ
                                        ಎಂದು ನನಗೆ ತಿಳಿಸಲಾಗಿದೆ, ಉದಾಹರಣೆಗೆ,
                                        ಇಂಜೆಕ್ಷನ್‌ಗಳ ಸ್ಥಳದಲ್ಲಿ ರಕ್ತಗಾಯ, ನೋವು,
                                        ತಾತ್ಕಾಲಿಕ ಉಸಿರಾಟ ಸಮಸ್ಯೆಗಳು, ತಾತ್ಕಾಲಿಕ ನರ
                                        ಹಾನಿ, ಪೇಶಿ ನೋವು, ದೀರ್ಘಕಾಲೀನ
                                        ಪ್ರತಿಕ್ರಿಯೆಗಳು, ತಲೆ ನೋವು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ
                                        ಸಮಯದಲ್ಲಿ ಸಂವೇದನೆ (ವಿಶೇಷವಾಗಿ ಸೀಸೇರಿಯನ್
                                        ವಿಭಾಗ ಮತ್ತು ಕೆಲವು ತುರ್ತು ಕ್ರಮಗಳಲ್ಲಿ),
                                        ಹಲ್ಲುಗಳು ಮತ್ತು ಹಲ್ಲಿನ ಕೃತಕ ಮತ್ತು
                                        ತಾತ್ಕಾಲಿಕ, ಆದರೆ ನೋವುಸಂಕೀರ್ಣತೆಗಳು,
                                        ಹೃದಯಾಘಾತ, ಪಾಳುಕು, ಗಂಭೀರ ಅಲರ್ಜಿಕ್ ಅಥವಾ
                                        ಭಿನ್ನಪ್ರತ್ಯಯ ಪ್ರತಿಕ್ರಿಯೆಗಳು, ಮೆದುಳು ಹಾನಿ,
                                        ಮೂತ್ರಪಿಂಡ ವೈಫಲ್ಯ, ಉಸಿರಾಟದ ಹಾನಿ,
                                        ಪಾರಾಪ್ಲೆಜಿಯಾ ಅಥವಾ ಕ್ವಾಡ್ರಿಪ್ಲೆಜಿಯಾ, ಶಾಶ್ವತ
                                        ನರ ಅಥವಾ ರಕ್ತನಾಳದ ಹಾನಿ, ಕಣ್ಣು ಹಾನಿ,
                                        ಕಂಠಸ್ಥಳದ ಹಾನಿ, ಆವಾಜಿನ ತಂತಿಗಳು, ಶಾಶ್ವತ
                                        ಹಾನಿ, ಮತ್ತು ರಕ್ತಸಂಚಾರದ ಸಂಕ್ರಮಣಗಳಿಂದ
                                        ಉಂಟಾಗುವ ಶ್ವಾಸಕೋಶಗಳ ಬಹುಶಃ ಭೀಕರ
                                        ಸಂಕೀರ್ಣತೆಗಳನ್ನು ಒಳಗೊಂಡಿದೆ, ಇದರ ಹೊರತಾಗಿಯೂ
                                        ಅಪಾಯಗಳ ಸಾಧ್ಯತೆ ಇರುತ್ತದೆ.
                                        <br />
                                        <br />
                                        ನಾನು, ನನಗೆ ಪರಿಚಿತವಾದ ಭಾಷೆಯಲ್ಲಿ ಮತ್ತು
                                        ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ವಿಷಯಗಳ ಬಗ್ಗೆ ವಿವರಿಸಲಾಗಿದೆ:
                                        ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ/ಕ್ರಮದ ಸ್ವರೂಪ, ಬಳಸಲಾದ
                                        ನಿಷ್ಚೇತನದ ಪ್ರಕಾರ, ಅದರ ಪ್ರಯೋಜನಗಳು ಮತ್ತು
                                        ವೆಚ್ಚ, ಅದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಅಪಾಯಗಳು, ಇತರ
                                        ಪರ್ಯಾಯಗಳು, ಮತ್ತು ಅವರ ಸಾಂಖ್ಯಾತಿಕ ಲೆಕ್ಕಾಚಾರ
                                        <br />
                                        <br />
                                        ನಾನು, ಸ್ವಲ್ಪ ನಿಷ್ಚೇತನವು ಸೀಡಿಸಿದ ಅಥವಾ
                                        ಇಲ್ಲದೆ ಯಶಸ್ವಿಯಾಗದಿದ್ದರೆ, ಅಗತ್ಯವೆಂದು
                                        ಪರಿಗಣಿಸಿದಾಗ ಪರ್ಯಾಯ ವಿಧಾನವನ್ನು ಬಳಸಬಹುದು
                                        ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ.
                                        <br />
                                        <br />
                                        ನಾನು ಈ ಮೂಲಕ ಜನನಿ ಬಹು ವಿಶೇಷತೆಯ ಆಸ್ಪತ್ರೆಗೆ
                                        ಪೂರ್ತಿ ಉಲ್ಲೇಖಿಸುತ್ತೇನೆ
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "331px" }}
                                          />
                                        </span>
                                        ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಂಡ ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ
                                        ಅಧಿಕೃತ ಹೊಣೆಗಾರಿಕೆಗಳಿಲ್ಲ ಮೇಲ್ಕಂಡ
                                        ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರಮದಿಂದ ಉಂಟಾಗುವ
                                        ಪರಿಣಾಮಗಳಿಗೆ.
                                        <br />
                                        ರೋಗಿಯ ಪ್ರತಿನಿಧಿ/ಪ್ರತಿನಿಧಿಯ ಒಪ್ಪಿಗೆ
                                        <br />
                                        ರೋಗಿ ಒಪ್ಪಿಗೆ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ
                                        ಅವರು/ಅವರು ಅಪ್ರಾಪ್ತ/ಅಪಸ್ಮಾರದ
                                        ಸ್ಥಿತಿಯಲ್ಲಿದ್ದಾರೆ.{" "}
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "331px" }}
                                          />
                                        </span>
                                        ಹೀಗಾಗಿ ನಾನು,{" "}
                                        <span>
                                          <input
                                            type="text"
                                            className="vi_0"
                                            style={{ width: "300px" }}
                                          />
                                        </span>{" "}
                                        (ಹೆಸರು/ರೋಗಿಯೊಂದಿಗೆ ಸಂಬಂಧ) ಆದ್ದರಿಂದ ಮೇಲ್ಕಂಡ
                                        ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ/ಕ್ರೀಯಾತ್ಮಕ/ಆಕ್ರಮಣಕಾರಿ
                                        ಕ್ರಮಕ್ಕಾಗಿ ಡಾಕ್ಟರ್ ಜೊತೆ ಚರ್ಚಿಸಿದ ನಂತರ
                                        ರೋಗಿಯ ಪರವಾಗಿ ನನ್ನ ಒಪ್ಪಿಗೆ ನೀಡುತ್ತೇನೆ.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    ></div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಹೆಸರು
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಹಸ್ತಾಕ್ಷರ
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ದಿನಾಂಕ
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಸಮಯ
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ರೋಗಿ/ರೋಗಿಯ ಪ್ರತಿನಿಧಿ
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಸಾಕ್ಷಿ
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      ಡಾಕ್ಟರ್
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div
                                      className="col-md-4"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                        fontSize: "16px",
                                      }}
                                    >
                                      ನಾತಿ/ಕಾನೂನು ಸಂರಕ್ಷಕ (ರೋಗಿಯೊಂದಿಗೆ ಸಂಬಂಧ)
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                    <div
                                      className="col-md-2"
                                      style={{
                                        border: "1px solid #20958C",
                                        paddingLeft: "unset",
                                        paddingRight: "unset",
                                      }}
                                    >
                                      <span>
                                        <input
                                          type="text"
                                          className="vi_0"
                                          style={{ width: "161px" }}
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  };

export default PatientConsentForms