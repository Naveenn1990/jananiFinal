import {
  faCancel,
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Button,
  Container,
  FloatingLabel,
  FormLabel,
  Form,
  Table,
  Row,
  //   Dropdown,
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
// import { CkEditorComponent } from "../CkEditor/CkEditorComponent";
import axios from "axios";
import moment from "moment";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const DoctorsCaseStudy = () => {
  const navigate = useNavigate();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };
  const CaseStudy = sessionStorage.getItem("CaseStudy");
  const DoctorDetailsData = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [patientObj, setpatientObj] = useState("");
  const [TestView, setTestView] = useState({});
  const [causeid, setcauseid] = useState("");
  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [Labtests1, setLabtests1] = useState([]);
  const hasSelectedOptions = Labtests1 && Labtests1.length > 0;
  const [testDate, settestDate] = useState("");
  console.log("TestView: ", TestView);
  let [selectedOptions, setSelectedOptions] = useState([]);
  const AddLabTest = (Labtests) => {
    setSelectedOptions(
      Labtests?.map((val) => {
        return {
          testid: val._id,
          testName: val.testName,
          priceNonInsurance: val.priceNonInsurance,
          priceInsurance: val.priceInsurance,
          unit: val.unit,
          generalRefVal: val.generalRefVal,
        };
      })
    );
    setLabtests1(Labtests);
  };

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabListFn = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          data.forEach((item) => {
            item.label = item.testName;
            item.value = item.testName;
          });
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };

  const [AppointmentList, setAppointmentList] = useState({});
  const getAppointmentList = () => {
    axios
      .get("http://localhost:8521/api/user/getlist")
      .then(function (response) {
        const data = response.data.Info.filter(
          (item) => item?._id == CaseStudy
        );
        setAppointmentList(data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [ProductList, setProductList] = useState([]);
  const [updatedProductList, setupdatedProductList] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/inventoryList"
      );
      if (res.status === 200) {
        setProductList(res.data.inventoryList);
        const newArr = [
          ...res.data.inventoryList
            ?.filter((item) => item?.stock > 1)
            ?.map((val) => {
              return { ...val, label: val.productName };
            }),
        ];
        setupdatedProductList(newArr);
      }
    } catch (error) {
      console.log(error);
      setProductList(error.response.data.inventoryList);
    }
  };

  const [AllTestList, setAllTestList] = useState([]);
  const GetLabtestList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/getBookedHospitalLabTest"
      );
      setAllTestList(res.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  const bookLabTest = async () => {
    let obj;
    console.log(
      patientlist?.find(
        (item) =>
          item?.registrationType ===
            "OPD" &&
          item?.PatientId ===
            AppointmentList?.PatientId
      )
    );
    let patientObj1 = JSON.parse(
      JSON.stringify(
        patientlist?.find(
          (item) =>
            item?.registrationType ===
              "OPD" &&
            item?.PatientId ===
              AppointmentList?.PatientId
        )
      )
    );
    obj = {
      patientid: patientObj1?._id,
      patientname: patientObj1?.Firstname,
      Phoneno: patientObj1?.PhoneNumber,
      email: patientObj1?.Email,
      testDate: testDate,
      Labtests: selectedOptions,
      hospitallabRefferedBy: `${DoctorDetailsData?.Firstname} ${DoctorDetailsData?.Lastname}`,
    };

    try {
      const config = {
        url: "/user/bookHospitalLabTest",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200 || res.status === 201) {
        alert(res.data.success);
        const config = {
          url: "/user/addInvestigationInfo/" + AppointmentList?._id,
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            labid: res.data.bookingLabTest?._id,
          },
        };
        let res1 = await axios(config);
        if (res1.status === 200) {
          alert(res1.data.success);
          GetLabtestList();
        }

        // handleClose();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAppointmentList();
    HospitallabListFn();
    GetLabtestList();
  }, []);

  const [EditData, setEditData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setEditData(item);
  };

  const [deleteData, setdeleteData] = useState({});
  const [show1, setShow1] = useState(false);
  const deleteBtnClose = () => setShow1(false);
  const deleteBtnShow = (item) => {
    setShow1(true);
    setdeleteData(item);
  };

  // Available / Recommeded lab tests
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // Appointment completion
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [medicineName, setmedicineName] = useState("");
  const [genericName, setgenericName] = useState("");
  const [medicineType, setmedicineType] = useState("");
  const [dosage, setdosage] = useState("");
  const [morningDose, setmorningDose] = useState("");
  const [noonDose, setnoonDose] = useState();
  const [eveDose, seteveDose] = useState();
  const [nightDose, setnightDose] = useState();
  const [medicineTakefrquency, setmedicineTakefrquency] = useState();
  const [medicineTakingTime, setmedicineTakingTime] = useState();
  const [duration, setduration] = useState();
  const [days, setdays] = useState();
  const [result, setresult] = useState();
  const [Quantity, setQuantity] = useState(1);
  const [advise, setadvise] = useState();
  const [DocselectedMedicine, setDocSelectedMedicine] = useState(null);

  const handleDocMedicineChange = (event, value) => {
    setDocSelectedMedicine(value);
    // Do something with the selected medicine value
  };

  const Addmedicine = async (e) => {
    e.preventDefault();
    if (
      !DocselectedMedicine ||
      !morningDose ||
      !noonDose ||
      !eveDose ||
      !nightDose ||
      !medicineTakingTime
    ) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/user/addMedicineInfo/" + AppointmentList?._id,
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: {
            medicineName: DocselectedMedicine?.productName,
            // genericName: genericName,
            // medicineType: medicineType,
            // dosage: dosage,
            morningDose: morningDose,
            noonDose: noonDose,
            eveDose: eveDose,
            nightDose: nightDose,
            medicineTakefrquency: medicineTakefrquency,
            medicineTakingTime: medicineTakingTime,
            // duration: duration,
            // days: days,
            // result: result,
            Quantity: Quantity,
            totalAmtToPay: Number(
              (
                DocselectedMedicine?.productPrice -
                DocselectedMedicine?.productPrice *
                  (DocselectedMedicine?.discount / 100)
              ).toFixed(2)
            ),
            advise: advise,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getAppointmentList();
          alert(res.data.success);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const [DocselectedMedicine1, setDocSelectedMedicine1] = useState(null);

  const handleDocMedicineChange1 = (event, value) => {
    setDocSelectedMedicine1(value);
    // Do something with the selected medicine value
  };
  const [Quantity1, setQuantity1] = useState();
  const [morningDose1, setmorningDose1] = useState();
  const [noonDose1, setnoonDose1] = useState();
  const [eveDose1, seteveDose1] = useState();
  const [nightDose1, setnightDose1] = useState();
  const [medicineTakingTime1, setmedicineTakingTime1] = useState();

  console.log(
    "DocselectedMedicine1",
    DocselectedMedicine1,
    medicineTakingTime1
  );

  const Editmedicine = async (e) => {
    e.preventDefault();
    if (
      !DocselectedMedicine1 &&
      !morningDose1 &&
      !noonDose1 &&
      !eveDose1 &&
      !nightDose1 &&
      !medicineTakingTime1 &&
      !Quantity1
    ) {
      alert("There is no changes to Update");
    } else {
      try {
        const config = {
          url: "/user/editMedicine",
          method: "post",
          baseURL: "http://localhost:8521/api",
          // headers: { "content-type": "multipart/form-data" },
          data: {
            patientsId: AppointmentList?._id,
            MedicineId: EditData?._id,
            medicineName: DocselectedMedicine1
              ? DocselectedMedicine1?.productName
              : EditData?.medicineName,
            morningDose: morningDose1 ? morningDose1 : EditData?.morningDose,
            noonDose: noonDose1 ? noonDose1 : EditData?.noonDose,
            eveDose: eveDose1 ? eveDose1 : EditData?.eveDose,
            nightDose: nightDose1 ? nightDose1 : EditData?.nightDose,
            medicineTakingTime: medicineTakingTime1
              ? medicineTakingTime1
              : EditData?.medicineTakingTime,
            Quantity: Quantity1 ? Quantity1 : EditData?.Quantity,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          getAppointmentList();
          handleClose();
          setQuantity1();
          setmorningDose1();
          setnoonDose1();
          seteveDose1();
          setnightDose1();
          setmedicineTakingTime1();
          alert(res.data.success);
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const Deletemedicine = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/user/DeleteMedicine",
        method: "delete",
        baseURL: "http://localhost:8521/api",
        // headers: { "content-type": "multipart/form-data" },
        data: {
          patientsId: AppointmentList?._id,
          MedicineId: deleteData?._id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getAppointmentList();
        deleteBtnClose();
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [patientlist, setpatientlist] = useState([]);

  const getPatientlist = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setpatientlist(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPatientlist();
  }, []);

  const [investigationName, setinvestigationName] = useState();
  const [investigationDescription, setinvestigationDescription] = useState();
  const [investigationIncludeInReport, setinvestigationIncludeInReport] =
    useState("");

  const [notes, setnotes] = useState();

  const AddInvestigation = async (e) => {
    e.preventDefault();
    const obj = {
      investigationName: investigationName,
      investigationDescription: investigationDescription,
      notes: notes,
    };
    try {
      const config = {
        url: "/user/addInvestigationInfo/" + AppointmentList?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getAppointmentList();
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [height, setheight] = useState();
  const [Weight, setWeight] = useState();
  const [bmi, setbmi] = useState();
  const [temperature, settemperature] = useState();
  const [Pulserate, setPulserate] = useState();
  const [Bpressure, setBpressure] = useState();
  const [spo2, setspo2] = useState();
  const [sugar, setsugar] = useState();
  const [HeadCircumference, setHeadCircumference] = useState();

  const [Respiratorysystem, setRespiratorysystem] = useState();
  const [Cardiovascularsystem, setCardiovascularsystem] = useState();
  const [Centralnervoussystem, setCentralnervoussystem] = useState();
  const [Gastrointestinalsystem, setGastrointestinalsystem] = useState();

  const [generalexamination, setgeneralexamination] = useState();
  const [localexamination, setlocalexamination] = useState();
  const [isAppointmentCompleted, setisAppointmentCompleted] = useState(false);

  const AddExamination = async (e) => {
    e.preventDefault();
    if (!generalexamination || !localexamination) {
      alert("Please Enter General Examination and Local Examination");
    } else {
      try {
        const config = {
          url: "/user/addExaminationInfo/" + AppointmentList?._id,
          method: "put",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "multipart/form-data" },
          data: {
            height: height,
            weight: Weight,
            bmi: bmi,
            temperature: temperature,
            pulserate: Pulserate,
            bp: Bpressure,
            spo2: spo2,
            suger: sugar,
            headcircumference: HeadCircumference,
            rs: Respiratorysystem,
            cvs: Cardiovascularsystem,
            cns: Centralnervoussystem,
            pa: Gastrointestinalsystem,
            generalexamination: generalexamination,
            localexamination: localexamination,
            isAppointmentCompleted: isAppointmentCompleted,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          getAppointmentList();
          handleClose3();
          navigate("/appointmentlist");
        }
      } catch (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  const dobDate = new Date(AppointmentList?.DOB);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - dobDate.getFullYear();
  let months = currentDate.getMonth() - dobDate.getMonth();
  let day = currentDate.getDate() - dobDate.getDate();

  // Adjust the months and years if necessary
  if (day < 0) {
    months--;
    day += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  console.log("age", years, months, day);
  console.log("AppointmentList", AppointmentList);
  return (
    <div>
      <Container className="p-4">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="d-flex justify-content-evenly"
            style={{ backgroundColor: "#9ecbc2" }}
          >
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Details
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Prescription
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Investigation
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                eventKey="four"
                className="fw-bold"
                style={{
                  border: "1px solid #208b8c",
                  color: "#208b8c",
                  padding: "15px",
                }}
              >
                Examination
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <hr />

          <Tab.Content>
            <Tab.Pane eventKey="first" className="p-2">
              <h4 className="fw-bold text-dark p-2">Patient Details</h4>

              <div
                className="row justify-content-evenly mb-4"
                style={{ border: "1px solid black", padding: "5px" }}
              >
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Name</span> :{" "}
                  {AppointmentList?.Firstname} {AppointmentList?.Lastname}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">ID</span> :{" "}
                  {AppointmentList?.patientDBId?.PatientId
                    ? AppointmentList?.patientDBId?.PatientId
                    : "-"}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Age</span> :
                  {/* {moment().diff(AppointmentList?.DOB, "years", false)} */}
                  {years}.{months} Year's
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Gender</span> :{" "}
                  {AppointmentList?.Gender}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Mobile</span> :{" "}
                  {AppointmentList?.PhoneNumber}
                </p>
              </div>

              <div className="row justify-content-evenly">
                {/* TABLE PATIENT INFORMATION */}

                <table
                  className="table table-bordered col-lg-6 "
                  style={{ width: "500px" }}
                >
                  <thead className="table-secondary">
                    <tr>
                      <th style={{ color: "white", fontWeight: "bold" }}>
                        Patient Information
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-dark">
                        Date Of Appointment :{" "}
                      </td>
                      <td className="text-success fw-bold">
                        {AppointmentList?.Dateofappointment}
                      </td>
                    </tr>

                    {/* <tr>

                <td className='fw-bold text-dark'>ABHA</td>
                <td>Verify ABHA</td>

            </tr> */}

                    <tr>
                      <td className="fw-bold text-dark">Name :</td>
                      <td>
                        {AppointmentList?.Firstname} {AppointmentList?.Lastname}
                      </td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Email :</td>
                      <td>{AppointmentList?.Email}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Phone Number :</td>
                      <td className="text-danger fw-bold">
                        {AppointmentList?.PhoneNumber}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* TABLE MEDICAL HISTOR */}
                <table
                  className="table table-bordered col-lg-6"
                  style={{ width: "400px" }}
                >
                  <thead className="table-secondary">
                    <tr>
                      <th style={{ color: "white", fontWeight: "bold" }}>
                        Patient Information
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold text-dark">Gender :</td>
                      <td>{AppointmentList?.Gender}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Address :</td>
                      <td>
                        {AppointmentList?.patientDBId?.Address1
                          ? `${AppointmentList?.patientDBId?.Address1}, ${AppointmentList?.patientDBId?.Address2}, ${AppointmentList?.patientDBId?.City1}, ${AppointmentList?.patientDBId?.State1}, ${AppointmentList?.patientDBId?.Zipcode}`
                          : "Not Mentioned"}
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold text-dark">Aadhar Card : </td>
                      <td>
                        {AppointmentList?.patientDBId?.Aadharno
                          ? AppointmentList?.patientDBId?.Aadharno
                          : "Not Mentioned"}
                      </td>
                    </tr>

                    <tr>
                      <td className="fw-bold text-dark">Token :</td>
                      <td>{AppointmentList?.token}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>

            {/* SECOND TAB */}

            <Tab.Pane eventKey="second" className="p-2">
              <div
                className="row justify-content-evenly mb-4"
                style={{ border: "1px solid black", padding: "5px" }}
              >
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Name</span> :{" "}
                  {AppointmentList?.Firstname}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">ID</span> :{" "}
                  {/* {AppointmentList?.PatientId?.slice(0, 10)} */}
                  {AppointmentList?.patientDBId?.PatientId
                    ? AppointmentList?.patientDBId?.PatientId
                    : "-"}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Age</span> :
                  {/* {moment().diff(AppointmentList?.DOB, "years", false)} */}
                  {years}.{months} Year's
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Gender</span> :{" "}
                  {AppointmentList?.Gender}
                </p>
                <p className="col-lg-2">
                  <span className="fw-bold text-dark">Mobile</span> :{" "}
                  {AppointmentList?.PhoneNumber}
                </p>
              </div>

              <h4 className="fw-bold text-dark">Medicine Information</h4>
              <hr />
              <div className="row">
                <div className="col-lg-6 ">
                  <InputGroup className="mb-3">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={updatedProductList}
                      sx={{ width: 300 }}
                      value={DocselectedMedicine}
                      onChange={handleDocMedicineChange}
                      renderInput={(params) => (
                        <TextField {...params} label="Medicines" />
                      )}
                    />
                  </InputGroup>
                  <InputGroup className="">
                    <FormLabel className="fw-bold text-dark">
                      Quantity{" "}
                    </FormLabel>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="number"
                      value={Quantity}
                      placeholder="Quantity"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </InputGroup>

                  {/* <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Genric Name"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setgenericName(e.target.value)}
                    />
                  </InputGroup> */}

                  {/* <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    onChange={(e) => setmedicineType(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Cream">Cream</option>
                    <option value="Drops">Drops</option>
                    <option value="Gel">Gel</option>
                    <option value="Inhaler">Inhaler</option>
                    <option value="Injection">Injection</option>
                    <option value="Lotion">Lotion</option>
                    <option value="MotherTincture">Mother Tincture</option>
                    <option value="Mouthwash">Mouthwash</option>
                    <option value="Oil">Oil</option>
                    <option value="Ointment">Ointment</option>
                    <option value="Pills">Pills</option>
                    <option value="Powder">Powder</option>
                    <option value="Shampoo">Shampoo</option>
                    <option value="Spray">Spray</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Syringe">Syringe</option>
                    <option value="Syrup">Syrup</option>
                    <option value="Toothpaste">Toothpaste</option>
                  </Form.Select> */}

                  {/* <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Dosage"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setdosage(e.target.value)}
                    />
                  </InputGroup> */}
                </div>

                <div className="col-lg-6">
                  <td width="24%">
                    <table className="table table-striped table-bordered table-condensed">
                      <tbody>
                        <tr>
                          <td>Morn</td>
                          <td>Noon</td>
                          <td>Eve</td>
                          <td>Night</td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              maxLength={1}
                              id="morning"
                              name="morning"
                              className="input-md form-control "
                              onChange={(e) => setmorningDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              maxLength={1}
                              id="afternoon"
                              name="afternoon"
                              className="input-md form-control "
                              onChange={(e) => setnoonDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              maxLength={1}
                              id="evening"
                              name="evening"
                              className="input-md form-control "
                              onChange={(e) => seteveDose(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                  event.preventDefault();
                                }
                              }}
                              maxLength={1}
                              id="night"
                              name="night"
                              className="input-md form-control "
                              onChange={(e) => setnightDose(e.target.value)}
                            />
                          </td>
                        </tr>
                        {/* <tr>
                          <td colspan="4" align="center">
                            <strong>(or)</strong>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4">
                            <select
                              className="input-md form-control"
                              onChange={(e) =>
                                setmedicineTakefrquency(e.target.value)
                              }
                            >
                              <option>Select</option>
                              <option value="OO">Only Once</option>
                              <option value="OA">Only Afternoon</option>
                              <option value="1x">QD (Once a day)</option>
                              <option value="2x">BID (Twice a day)</option>
                              <option value="3x">
                                TID (Three times a day)
                              </option>
                              <option value="4x">QID (Four times a day)</option>
                              <option value="5x">FID (Five times a day)</option>
                              <option value="6x">Six times a day</option>
                              <option value="7x">Seven times a day</option>
                              <option value="8x">Eight times a day</option>
                              <option value="9x">Nine times a day</option>
                              <option value="10x">Ten times a day</option>
                              <option value="11x">Eleven times a day</option>
                              <option value="12x">Twelve times a day</option>
                              <option value="13x">Thirteen times a day</option>
                              <option value="14x">Fourteen times a day</option>
                              <option value="15x">Fifteen times a day</option>
                              <option value="Q4H">Q4H (Every 4 hours)</option>
                              <option value="Q6H">Q6H (Every 6 hours)</option>
                              <option value="Q2H">Q2H (Every 2 hours)</option>
                              <option value="QOD">
                                {" "}
                                QOD (Every other hour)
                              </option>
                              <option value="QH">QH (Every hour)</option>
                              <option value="QAM">QAM (Every morning)</option>
                              <option value="QN">QN (Every night)</option>
                              <option value="QWK">QWK (Every week)</option>
                              <option value="QWK2">
                                QWK2 (Every two weeks)
                              </option>
                              <option value="BIS in 7d">
                                {" "}
                                BIS in 7d (Twice a week){" "}
                              </option>
                              <option value="TIW">
                                TIW (Three times a week)
                              </option>
                              <option value="OM">OM (Once in a month)</option>
                              <option value="SOS">SOS (If Necessary)</option>
                              <option value="Frequently">Frequently</option>
                              <option value="Dieb. Alt.">
                                Dieb. Alt. (Alternate Days)
                              </option>
                              <option value="STAT">STAT</option>
                            </select>
                          </td>
                        </tr> */}

                        <tr className="text-dark">
                          <td colspan="4">
                            <input
                              type="radio"
                              id="beforefood"
                              name="beforeorafterfood"
                              value="Before Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            Before Food
                            <input
                              type="radio"
                              id="afterfood"
                              name="beforeorafterfood"
                              value="After Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            After Food
                            <br />
                            <input
                              type="radio"
                              id="withoutfood"
                              name="beforeorafterfood"
                              value="With Food"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            With Food
                            <input
                              type="radio"
                              id="nafood"
                              name="beforeorafterfood"
                              value="N/A"
                              onChange={(e) =>
                                setmedicineTakingTime(e.target.value)
                              }
                            />
                            N/A
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <div className="mb-2">
                    <Button
                      className="d-flex align-items-center gap-2 all-bg-green"
                      onClick={(e) => Addmedicine(e)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                      ADD MEDICINE
                    </Button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mt-4 mb-5 col-lg-12">
                  <h5 className="fw-bold text-dark">Medicine List</h5>
                  <hr />
                  <table className="table table-striped">
                    <thead className="all-bg-green">
                      <tr>
                        <th className="text-light fw-bold">S. No</th>

                        <th className="text-light fw-bold">Medicine Name</th>

                        <th className="text-light fw-bold">Frequency</th>
                        <th className="text-light fw-bold">Quantity</th>
                        <th className="text-light fw-bold">
                          Medicine Taking Time
                        </th>

                        <th className="text-light fw-bold" width="10%">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {AppointmentList?.medicineInfo?.map((item, index) => {
                        return (
                          <tr className="admin-table-row">
                            <td>{index + 1}</td>

                            <td>{item?.medicineName}</td>

                            <td>
                              {item?.morningDose}-{item?.noonDose}-
                              {item?.eveDose}-{item?.nightDose}
                            </td>

                            <td>{item?.Quantity}</td>
                            <td>{item?.medicineTakingTime}</td>

                            <td style={{ display: "flex", gap: "10px" }}>
                              <button
                                style={{
                                  border: "none",
                                  backgroundColor: "transparent",
                                }}
                                onClick={() => handleShow(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                  className="me-2"
                                  style={{
                                    color: "blue",
                                  }}
                                />
                              </button>
                              <button
                                style={{
                                  border: "none",
                                  backgroundColor: "transparent",
                                }}
                                onClick={() => deleteBtnShow(item)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="me-2"
                                  style={{
                                    color: "red",
                                  }}
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Tab.Pane>

            {/* THIRD TAB */}
            <Tab.Pane eventKey="third">
              <h5 className="fw-bold">Choose Lab Test</h5>

              <Row>
              <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingName"
                  label={hasSelectedOptions ? "" : "Select Lab Tests"}
                >
                  <Select
                    isMulti
                    name="labTests"
                    options={HospitalLabList}
                    className="basic-multi-select"
                    classNamePrefix=""
                    value={Labtests1}
                    onChange={AddLabTest}
                    styles={customStyles}
                    placeholder=""
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="col-md-6 p-2"
                  controlId="floatingEmail"
                  label=""
                >
                  <Form.Control
                    type="date"
                    placeholder=""
                    value={testDate}
                    min={`${new Date().getFullYear()}-${String(
                      new Date().getMonth() + 1
                    ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
                      2,
                      "0"
                    )}`}
                    onChange={(e) => settestDate(e.target.value)}
                  />
                </FloatingLabel>
                
              </Row>

              <div className="row gap-3 ms-2">
                {/* <Button
                  className="col-lg-2"
                  style={{ backgroundColor: "#008900" }}
                  onClick={(e) => AddInvestigation(e)}
                >
                  Add
                </Button> */}
                <button
                  style={{
                    backgroundColor: "#20958C",
                    color: "white",
                    width: "90px",
                    height: "40px",
                    border: "0px",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    bookLabTest();
                  }}
                >
                  Submit
                </button>
              </div>
              
            </Tab.Pane>

            <Tab.Pane eventKey="four" className="p-2">
              <h5 className="fw-bold">Vitals</h5>

              <hr />

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Height(cm) :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Height"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Weight(kg) :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Weight"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">BMI :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="BMI"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setbmi(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3 ">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Temperature :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Temperature"
                      aria-describedby="basic-addon1"
                      onChange={(e) => settemperature(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">Pulse Rate :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Pulse Rate"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPulserate(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Blood Pressure :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Blood Pressure"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setBpressure(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Spo2(% at RA) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Spo2(% at RA)"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setspo2(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Sugar(mg/dl) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Sugar"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setsugar(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-3 ">
                  <label className="fw-bold text-dark mb-1">
                    Head Circumference(cm) :
                  </label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Head Circumference"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setHeadCircumference(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <h5 className="fw-bold">Systemic Examination</h5>

              <hr />

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">RS :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Respiratory system"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setRespiratorysystem(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">CVS :</label>

                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Cardiovascular system"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCardiovascularsystem(e.target.value)}
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="row justify-content-evenly mb-3">
                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">CNS :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Centralnervoussystem"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCentralnervoussystem(e.target.value)}
                    />
                  </InputGroup>
                </div>

                <div className="col-lg-4 ">
                  <label className="fw-bold text-dark mb-1">PA :</label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Gastrointestinalsystem"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setGastrointestinalsystem(e.target.value)
                      }
                    />
                  </InputGroup>
                </div>
              </div>

              <h5 className="fw-bold"> Examination</h5>
              <hr />

              <label className="fw-bold mb-2">General Examination :</label>
              <div style={{ width: "800px" }}>
                <textarea
                  style={{ width: "800px" }}
                  onChange={(e) => setgeneralexamination(e.target.value)}
                />
              </div>

              <label className="fw-bold mb-2">Local Examination :</label>
              <div style={{ width: "800px" }}>
                <textarea
                  style={{ width: "800px" }}
                  onChange={(e) => setlocalexamination(e.target.value)}
                />
              </div>

              <div className="row gap-3 ms-2">
                <Button
                  className="col-lg-2"
                  style={{ backgroundColor: "#208b8c" }}
                  onClick={(e) => {
                    handleShow3();
                  }}
                >
                  Save
                </Button>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* EDIT MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-5 ">
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">
                Medicine Name*
              </FormLabel>
              <InputGroup>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={updatedProductList}
                  sx={{ width: 300, backgroundColor: "white" }}
                  value={DocselectedMedicine1}
                  onChange={handleDocMedicineChange1}
                  renderInput={(params) => (
                    <TextField {...params} label="Medicines" />
                  )}
                />
              </InputGroup>
            </div>
            <div className="col-lg-6">
              <FormLabel className="fw-bold text-dark">Quantity* </FormLabel>
              <FloatingLabel
                style={{ width: "300px" }}
                controlId="floatingName"
                label="Quantity"
              >
                <Form.Control
                  type="number"
                  value={Quantity1 ? Quantity1 : EditData?.Quantity}
                  placeholder={EditData?.Quantity}
                  onChange={(e) => setQuantity1(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-5 ">
            <div className="col-lg-3">
              <FormLabel className="fw-bold text-dark">Morning* </FormLabel>
              <FloatingLabel
                style={{ width: "100px" }}
                controlId="floatingName"
                label="Morning"
              >
                <Form.Control
                  type="number"
                  value={morningDose1 ? morningDose1 : EditData?.morningDose}
                  placeholder="Morning"
                  onChange={(e) => setmorningDose1(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-3">
              <FormLabel className="fw-bold text-dark">Noon* </FormLabel>
              <FloatingLabel
                style={{ width: "100px" }}
                controlId="floatingName"
                label="Noon"
              >
                <Form.Control
                  type="number"
                  value={noonDose1 ? noonDose1 : EditData?.noonDose}
                  placeholder="Noon"
                  onChange={(e) => setnoonDose1(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-3">
              <FormLabel className="fw-bold text-dark">Evening* </FormLabel>
              <FloatingLabel
                style={{ width: "100px" }}
                controlId="floatingName"
                label="Evening"
              >
                <Form.Control
                  type="number"
                  value={eveDose1 ? eveDose1 : EditData?.eveDose}
                  placeholder="Evening"
                  onChange={(e) => seteveDose1(e.target.value)}
                />
              </FloatingLabel>
            </div>
            <div className="col-lg-3">
              <FormLabel className="fw-bold text-dark">Night* </FormLabel>
              <FloatingLabel
                style={{ width: "100px" }}
                controlId="floatingName"
                label="Night"
              >
                <Form.Control
                  type="number"
                  value={nightDose1 ? nightDose1 : EditData?.nightDose}
                  placeholder="Night"
                  onChange={(e) => setnightDose1(e.target.value)}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="row mb-2 ">
            <div className="col-lg-3">
              <input
                type="radio"
                id="beforefood"
                name="beforeorafterfood"
                value="Before Food"
                onChange={(e) => setmedicineTakingTime1(e.target.value)}
              />
              Before Food
            </div>
            <div className="col-lg-3">
              <input
                type="radio"
                id="afterfood"
                name="beforeorafterfood"
                value="After Food"
                onChange={(e) => setmedicineTakingTime1(e.target.value)}
              />
              After Food
            </div>
            <div className="col-lg-3">
              <input
                type="radio"
                id="withoutfood"
                name="beforeorafterfood"
                value="With Food"
                onChange={(e) => setmedicineTakingTime1(e.target.value)}
              />
              With Food
            </div>
            <div className="col-lg-3">
              <input
                type="radio"
                id="nafood"
                name="beforeorafterfood"
                value="N/A"
                onChange={(e) => setmedicineTakingTime1(e.target.value)}
              />
              N/A
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={Editmedicine}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}

      <Modal
        show={show1}
        onHide={deleteBtnClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="Diseases-btn" style={{ color: 'green', border: '1px solid green' }}>Friend</div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="./img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={Deletemedicine}>
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delet
          </Button>
          <Button variant="success" onClick={deleteBtnClose}>
            Cancle
          </Button>

          {/* <Button variant="success"><FontAwesomeIcon icon={faCheck} className='fs-5 me-2' />Save</Button> */}
        </Modal.Footer>
      </Modal>

      {/* list booked / recommended lab tests */}
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Recommended Tests</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <Table>
              <thead>
                <th>S.no.</th>
                <th>Test</th>
                <th>Unit</th>
                <th>General Referece Value</th>
              </thead>
              <tbody style={{ backgroundColor: "white" }}>
                {TestView?.Labtests?.map((data, index) => {
                  return (
                    <tr>
                      <td>{index + 1}. </td>
                      <td>{data?.testName}</td>
                      <td>{data?.unit}</td>
                      <td>{data?.generalRefVal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose2}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Appointment completed : no test results checking, nothing is remaining */}
      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Appointment Completion</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <p style={{ fontWeight: "bold", color: "white" }}>
              Is appointment completed? All reports are reviewed?{" "}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="checkbox"
                onChange={() => {
                  setisAppointmentCompleted(!isAppointmentCompleted);
                }}
              />
              <div style={{ fontWeight: "bold", color: "white" }}>
                Completed
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Cancel
          </Button>
          <Button variant="success" onClick={(e) => AddExamination(e)}>
            Add Examination
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
