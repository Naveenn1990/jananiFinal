import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Form, FloatingLabel, Row } from "react-bootstrap";
import { Checkbox } from "@mui/material";
import moment from "moment";
import axios from "axios";
import Select from "react-select";
import SignatureCanvas from "react-signature-canvas";
const DoctorForms = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };

  const formdata = new FormData();
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  const location = useLocation();
  const { item, causeId } = location.state;
  console.log("item", item, causeId);
  const dobString = item?.DOB;
  const dob = new Date(dobString);
  const currentDate = new Date();
  const differenceMs = currentDate - dob;
  const ageYears = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365.25));

  let ageOutput;
  if (ageYears < 1) {
    const ageMonths = Math.floor(ageYears * 12);
    ageOutput = `${ageMonths} months`;
  } else {
    ageOutput = `${ageYears} years`;
  }

  const [DoctorTreatmentSignature, setDoctorTreatmentSignature] = useState(null);
  const sigCanvas1 = useRef({});
  const clear1 = () => sigCanvas1.current.clear();
  const save1 = () => {
    const DoctorTreatmentSignature = sigCanvas1.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setDoctorTreatmentSignature(DoctorTreatmentSignature);
  };

  const [DoctorNotesSignature, setDoctorNotesSignature] = useState(null);
  const sigCanvas2 = useRef({});
  const clear2 = () => sigCanvas2.current.clear();
  const save2 = () => {
    const DoctorNotesSignature = sigCanvas2.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setDoctorNotesSignature(DoctorNotesSignature);
  };

  const [CauseDetails, setCauseDetails] = useState([]);
  const [PatientType, setPatientType] = useState("IPD");
  const [patientObj, setpatientObj] = useState("");
  const [causeid, setcauseid] = useState("");
  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [testDate, settestDate] = useState("");

  const [patientlist, setpatientlist] = useState([]);

  const [Labtests1, setLabtests1] = useState([]);
  const hasSelectedOptions = Labtests1 && Labtests1.length > 0;
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

  const bookLabTest = async () => {
    let obj;

    let patientObj1 = JSON.parse(
      JSON.stringify(
        patientlist?.find(
          (itemdata) =>
            itemdata?.registrationType === PatientType &&
            item?._id?.toString() === itemdata?._id?.toString()
        )
      )
    );

    const causeid1 = patientObj1?.cause?.find(
      (data) => data?._id?.toString() === CauseDetails?._id?.toString()
    )?._id;

    obj = {
      causeid: causeid1,
      patientid: patientObj1?._id,
      patientname: patientObj1?.Firstname,
      Phoneno: patientObj1?.PhoneNumber,
      email: patientObj1?.Email,
      testDate: testDate,
      Labtests: selectedOptions,
      hospitallabRefferedBy: `${doctorDetails?.Firstname} ${doctorDetails?.Lastname}`,
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
          url: "/addRecommendedLabReports",
          method: "put",
          baseURL: "http://localhost:8521/api/staff",
          headers: { "content-type": "application/json" },
          data: {
            patientId: item?._id,
            causeId: CauseDetails?._id,
            labTestBookingId: res.data?.bookingLabTest?._id,
            referredByDocName: `${doctorDetails?.Firstname} ${doctorDetails?.Lastname}`,
            referredByDocid: doctorDetails?._id,
          },
        };
        let res1 = await axios(config);
        if (res1.status === 200) {
          alert(res1.data.success);
        }
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getPatientlist();
    HospitallabListFn();
  }, []);

  useEffect(() => {
    const assignedPatients = item?.cause?.filter((val) => val._id === causeId);
    setCauseDetails(assignedPatients[0]);
  }, [item]);

  console.log("CauseDetails", CauseDetails);

  // DOCTORS TREATMENT CHART

  const [DTdate, setDTdate] = useState("");
  const [DTTime, setDTTime] = useState("");
  const [DTNotes, setDTNotes] = useState("");

  const [DoctorsTreatment, setDoctorsTreatment] = useState([]);
  const Adddoctorstreatment = async () => {
    const newNote = {
      doctorid: item?._id,
      DTdate: DTdate,
      DTTime: DTTime,
      DTNotes: DTNotes,
    };
    setDoctorsTreatment((prevDrug) => [...prevDrug, newNote]);
  };
  const deletedoctorstreatment = async (indexToDelete) => {
    const updatedDrugList = DoctorsTreatment.filter(
      (_, index) => index !== indexToDelete
    );
    setDoctorsTreatment(updatedDrugList);
  };

  const submitDoctorTreatment = async () => {
    if(!DTdate){
      return alert ("Please Select Date..")
    }
    if(!DTTime){
      return alert ("Please Select Time..")
    }
    if(!DTNotes){
      return alert ("Please Select Notes..")
    }
    if(!DoctorTreatmentSignature){
      return alert ("sign is pending..")
    }
    try {
      const DoctorTreatemntsign = await fetch(DoctorTreatmentSignature).then((res) => res.blob());
      formdata.set("patientId", item?._id);
      formdata.set("causeId", CauseDetails?._id);
      formdata.set("doctorid", doctorDetails?._id);
      formdata.set("DTdate", DTdate);
      formdata.set("DTTime", DTTime);
      formdata.set("DTNotes", DTNotes);
      formdata.set("doctortretmentSignature", DoctorTreatemntsign, "doctor-treatment-signature.png");
      const config = {
        url: "/adddoctorstreatment",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setDTdate("");
        setDTTime("");
        setDTNotes("");
        setDoctorTreatmentSignature(null);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [DocTreatChart, setDocTreatChart] = useState(true);
  const [DocNotes, setDocNotes] = useState(false);
  const [SurgeryReport, setSurgeryReport] = useState(false);
  const [LabTestsRequirements, setLabTestsRequirements] = useState(false);

  // DOCTORS NOTES

  const [DrugAllergies, setDrugAllergies] = useState("");
  const [Diagnosis, setDiagnosis] = useState("");

  const [DoctorsNotes, setDoctorsNotes] = useState([]);
  const [DNDate, setDNDate] = useState("");
  const [DNTime, setDNTime] = useState("");
  const [DNOtes, setDNOtes] = useState("");
  const Adddoctorsnotes = async () => {
    const newNote = {
      doctorid: item?._id,
      DNDate: DNDate,
      DNTime: DNTime,
      DNOtes: DNOtes,
    };
    setDoctorsNotes((prevDrug) => [...prevDrug, newNote]);
  };
  const deletedoctorsnote = async (indexToDelete) => {
    const updatedDrugList = DoctorsNotes.filter(
      (_, index) => index !== indexToDelete
    );
    setDoctorsNotes(updatedDrugList);
  };

  const submitDoctorNotes = async () => {
    if(!DNDate){
      return alert ("Please Select Date and Time ...!")
    }
    if(!DNOtes){
      return alert ("Please wirte notes ...!")
    }
    if(!DoctorNotesSignature){
      return alert ("sign is pending ...!")
    }
    try {
      const DoctorNotessign = await fetch(DoctorNotesSignature).then((res) => res.blob());
      formdata.set("patientId", item?._id);
      formdata.set("causeId", CauseDetails?._id);
      formdata.set("doctorid", doctorDetails?._id);
      formdata.set("DNDate", DNDate);
      formdata.set("DNOtes", DNOtes);
      formdata.set("doctornotesSignature", DoctorNotessign, "doctor-notes-signature.png");
      const config = {
        url: "/adddoctorsnotes",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "Content-Type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setDNDate("");
        setDNOtes("");
        setDoctorNotesSignature(null)
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  //SURGERY REPORT
  const [PreOperativeDiagnosis, setPreOperativeDiagnosis] = useState("");
  const [NameofOperation, setNameofOperation] = useState("");
  const [Procedure, setProcedure] = useState("");
  const [Findings, setFindings] = useState("");
  const [ReportCheck, setReportCheck] = useState("");
  const submitSurgeryReport = async () => {
    try {
      const config = {
        url: "/addsurgeryreport",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: item?._id,
          causeId: CauseDetails?._id,
          doctorid: item?._id,
          PreOperativeDiagnosis: PreOperativeDiagnosis,
          NameofOperation: NameofOperation,
          Procedure: Procedure,
          Findings: Findings,
          ReportCheck: ReportCheck,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setNameofOperation("");
        setProcedure("");
        setFindings("");
        setReportCheck("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // const addRecommendedLabTest = async () => {
  //   try {
  //     const config = {
  //       url: "/addRecommendedLabReports",
  //       method: "put",
  //       baseURL: "http://localhost:8521/api/staff",
  //       headers: { "content-type": "application/json" },
  //       data: {
  //         patientId: item?._id,
  //         causeId: CauseDetails?._id,
  //         labTestBookingId: labTestBookingId,
  //       },
  //     };
  //     let res = await axios(config);
  //     if (res.status === 200) {
  //       alert(res.data.success);
  //       setNameofOperation("");
  //       setProcedure("");
  //       setFindings("");
  //       setReportCheck("");
  //     }
  //   } catch (error) {
  //     alert(error.response.data.error);
  //   }
  // };

  return (
    <div>
      <div className="d-flex justify-content-around p-5">
        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(true);
            setDocNotes(false);
            setSurgeryReport(false);
            setLabTestsRequirements(false);
          }}
        >
          <div>
            {/* <RiBillFill style={{fontSize:"38px"}}/>   */}
            Doctor Treatment Chart
          </div>
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(true);
            setSurgeryReport(false);
            setLabTestsRequirements(false);
          }}
        >
          Doctors Notes
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          // onClick={() => navigate("/admin/SurgeryReport")}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(false);
            setSurgeryReport(true);
            setLabTestsRequirements(false);
          }}
        >
          Surgery Report
        </button>

        <button
          style={{
            padding: "6px",
            border: "1px solid white",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
          }}
          onClick={() => {
            setDocTreatChart(false);
            setDocNotes(false);
            setSurgeryReport(false);
            setLabTestsRequirements(true);
          }}
        >
          <div>
            {/* <RiBillFill style={{fontSize:"38px"}}/>   */}
            Lab Tests
          </div>
        </button>
      </div>

      <div className="container">
        <h3>
          Patient Cause :{" "}
          <span style={{ color: "red" }}>{CauseDetails?.CauseName}</span>
        </h3>
      </div>

      {DocTreatChart ? (
        <>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              DOCTORS TREATMENT CHART
            </h6>
          </div>
          <div
            id="pdf"
            style={{
              padding: "15px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "5px",
                border: "2px solid #20958C",
                margin: "auto",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
                <div className="d-flex align-items-center">
                  <img src="/img/logo.jpg" alt="" style={{ width: "100px" }} />
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
              <div className="text-center mt-1">
                {" "}
                <h6
                  className="fw-bold mt-2"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  DOCTORS TREATMENT CHART
                </h6>
              </div>
              <div
                style={{
                  paddingLeft: "42px",
                  paddingRight: "42px",
                  textAlign: "justify",
                }}
              >
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Name : {`${item?.Firstname} ${item?.Lastname}`}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Age : {ageOutput}
                      </td>
                      <td
                        style={{ width: "33%", border: "2px  solid #20958C" }}
                      >
                        Sex : {item?.Gender}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Pt ID : {item?.PatientId}
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        Ward :  {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                              (item) => {
                                return <span> {item?.bedName}</span>;
                              }
                            )}
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        style={{ width: "100%", border: "2px  solid #20958C" }}
                      >
                        Doctor Incharge :{" "}
                        {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                className="mt-2"
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    margin: "auto",
                  }}
                  bordered
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ width: "10%", border: "2px solid white" }}>
                        Date
                      </th>
                      <th style={{ width: "10%", border: "2px solid white" }}>
                        Time
                      </th>
                      <th style={{ width: "50%", border: "2px solid white" }}>
                        Notes
                      </th>
                      <th style={{ width: "20%", border: "2px solid white" }}>
                        Doctor's sign
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        {" "}
                        <input
                          type="date"
                          className="vi_0"
                          value={DTdate}
                          onChange={(e) => setDTdate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </td>
                      <td style={{ width: "10%", border: "2px solid #20958C" }}>
                        <input
                          type="time"
                          className="vi_0"
                          style={{ width: "86%" }}
                          onChange={(e) => setDTTime(e.target.value)}
                          value={DTTime}
                        />
                      </td>
                      <td style={{ width: "50%", border: "2px solid #20958C" }}>
                        <Form.Control
                          className="vi_0"
                          as="textarea"
                          rows={3}
                          onChange={(e) => setDTNotes(e.target.value)}
                          value={DTNotes}
                        />
                      </td>
                      <td
                        style={{ width: "20%", border: "2px  solid #20958C" }}
                      >
                        {!DoctorTreatmentSignature ? (
                          <div
                            style={{
                              border: "1px solid #dee2e6",
                              margin: "10px",
                            }}
                          >
                            <SignatureCanvas
                              ref={sigCanvas1}
                              penColor="black"
                              canvasProps={{
                                width: 180,
                                height: 100,
                                className: "sigCanvas",
                              }}
                            />
                            <div className="d-flex gap-3">
                              <button onClick={clear1}>Clear</button>
                              <button onClick={save1}>Save</button>
                            </div>
                          </div>
                        ) : (
                          <img src={DoctorTreatmentSignature} alt="Signature" />
                        )}
                      </td>
                    </tr>
                    {DoctorsTreatment?.map((item, i) => {
                      return (
                        <tr>
                          <td>{moment(item?.DTdate).format("DD-MM-YYYY")}</td>
                          <td>{item?.DTTime}</td>
                          <td>{item?.DTNotes}</td>
                          <td></td>
                          <td>
                            <MdDelete
                              onClick={() => deletedoctorstreatment(i)}
                              style={{
                                cursor: "pointer",
                                color: "red",
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="text-center mt-2 mb-2">
            <button className="btn btn-success" onClick={submitDoctorTreatment}>
              Submit
            </button>
          </div>
        </>
      ) : (
        <>
          {DocNotes ? (
            <>
              <div className="text-center mt-1">
                {" "}
                <h6
                  className="fw-bold mt-2"
                  style={{ color: "#20958C", fontSize: "30px" }}
                >
                  DOCTORS NOTES
                </h6>
              </div>
              <div
                id="pdf"
                style={{
                  padding: "15px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "5px",
                    border: "2px solid #20958C",
                    margin: "auto",
                    borderRadius: "20px",
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
                  <div className="text-center mt-1">
                    {" "}
                    <h6
                      className="fw-bold mt-2"
                      style={{ color: "#20958C", fontSize: "30px" }}
                    >
                      DOCTORS NOTES
                    </h6>
                  </div>
                  <div
                    style={{
                      paddingLeft: "42px",
                      paddingRight: "42px",
                      textAlign: "justify",
                    }}
                  >
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Name: {`${item?.Firstname} ${item?.Lastname}`}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Age: {ageOutput}
                          </td>
                          <td
                            style={{
                              width: "33%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Sex: {item?.Gender}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Pt ID: {item?.PatientId}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Ward :{" "}
                            {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                              (item) => {
                                return <span> {item?.bedName}</span>;
                              }
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Dept :
                            {CauseDetails?.causeBillDetails?.[0]?.BedBillDetails?.map(
                              (item) => {
                                return <span> {item?.wardtype}</span>;
                              }
                            )}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor :{" "}
                            {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            DOA : {moment(item?.createdAt).format("DD-MM-YYYY")}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div>Known Drug Allergies :{" "} </div>
                              <span>
                              {item?.patientAllergies}
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              width: "100%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div>Diagnosis : {" "}</div>
                              {CauseDetails?.CauseName}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table
                      style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "auto",
                      }}
                    >
                      <thead>
                        <tr style={{ textAlign: "center" }}>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Date / Time
                          </th>
                          
                          <th
                            style={{
                              width: "60%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Notes
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor's sign
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ textAlign: "center" }}>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="datetime-local"
                              className="vi_0"
                              value={DNDate}
                              onChange={(e) => setDNDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                            />
                          </td>
                          
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <Form.Control
                              className="vi_0"
                              as="textarea"
                              rows={3}
                              onChange={(e) => setDNOtes(e.target.value)}
                              value={DNOtes}
                            />
                          </td>
                          <td
                            style={{
                              width: "20%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            {!DoctorNotesSignature ? (
                            <div
                              style={{
                                border: "1px solid #dee2e6",
                                margin: "10px",
                              }}
                            >
                              <SignatureCanvas
                                ref={sigCanvas2}
                                penColor="black"
                                canvasProps={{
                                  width: 180,
                                  height: 100,
                                  className: "sigCanvas",
                                }}
                              />
                              <div className="d-flex gap-3">
                                <button onClick={clear2}>Clear</button>
                                <button onClick={save2}>Save</button>
                              </div>
                            </div>
                          ) : (
                            <img src={DoctorNotesSignature} alt="Signature" />
                          )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 mb-2">
                <button className="btn btn-success" onClick={submitDoctorNotes}>
                  Submit
                </button>
              </div>
            </>
          ) : (
            <>
              {SurgeryReport ? (
                <>
                  <div className="text-center mt-1">
                    {" "}
                    <h6
                      className="fw-bold mt-2"
                      style={{ color: "#20958C", fontSize: "30px" }}
                    >
                      SURGERY REPORT
                    </h6>
                  </div>
                  <div
                    id="pdf"
                    style={{
                      padding: "15px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "5px",
                        border: "2px solid #20958C",
                        margin: "auto",
                        borderRadius: "20px",
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
                          SURGERY REPORT
                        </h6>
                      </div>
                      <div
                        className="text-center"
                        style={{
                          borderBottom: "1px solid #20958C",
                          width: "100%",
                          textAlign: "center",
                        }}
                      ></div>
                      <div
                        className="mt-2"
                        style={{
                          paddingLeft: "42px",
                          paddingRight: "42px",
                          textAlign: "justify",
                        }}
                      >
                        <Table
                          style={{
                            borderCollapse: "collapse",
                            width: "100%",
                            margin: "auto",
                            marginBottom: "20px",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Name: {`${item?.Firstname} ${item?.Lastname}`}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Age: {ageOutput}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Sex: {item?.Gender}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Pt ID: {item?.PatientId}
                              </td>
                              <td
                                colSpan={3}
                                style={{
                                  width: "50%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Ward:
                                {/* {
                      SelectedCause?.[0]?.causeBillDetails?.[0]?.BedBillDetails?.map((item)=>{
                        return(
                         <span> {item?.bedName}</span>
                        )
                      })} */}
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                <div className="d-flex align-items-cemter">
                                  <div> Pre-Operative Diagnosis:</div>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    value={PreOperativeDiagnosis}
                                    onChange={(e) =>
                                      setPreOperativeDiagnosis(e.target.value)
                                    }
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Surgeon:{" "}
                                {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Assistant-1: Xyz1
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Assistant-2: Xyz2
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Anaesthetist: sadasdasddf
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Scrub Nurse:{" "}
                              </td>
                              <td
                                colSpan={2}
                                style={{
                                  width: "33%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Circ Nurse:{" "}
                              </td>
                            </tr>

                            <tr>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Skin Wound Condition:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Clean:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Slightly Contaminated:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              ></td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                Heavily COntaminated:{" "}
                              </td>
                              <td
                                style={{
                                  width: "16.6%",
                                  border: "2px  solid #20958C",
                                }}
                              ></td>
                            </tr>

                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                <div className="d-flex align-items-center">
                                  <div style={{ width: "20%" }}>
                                    Name of Operaton :
                                  </div>
                                  <input
                                    type="text"
                                    className="vi_0"
                                    value={NameofOperation}
                                    onChange={(e) =>
                                      setNameofOperation(e.target.value)
                                    }
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {/* Procedure:{" "} */}
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Procedure</Form.Label>
                                  <Form.Control
                                    value={Procedure}
                                    onChange={(e) =>
                                      setProcedure(e.target.value)
                                    }
                                    as="textarea"
                                    rows={3}
                                  />
                                </Form.Group>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={6}
                                style={{
                                  width: "100%",
                                  border: "2px  solid #20958C",
                                }}
                              >
                                {/* Findings :{" "} */}
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label>Findings</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    onChange={(e) =>
                                      setFindings(e.target.value)
                                    }
                                  />
                                </Form.Group>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                Swab / Instruments{" "}
                              </td>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                Checked :{" "}
                                <Checkbox
                                  onChange={(e) =>
                                    setReportCheck(
                                      e.target.checked ? "Checked" : ""
                                    )
                                  }
                                  checked={ReportCheck === "Checked"}
                                />
                                <hr />
                                Unchecked :{" "}
                                <Checkbox
                                  onChange={(e) =>
                                    setReportCheck(
                                      e.target.checked ? "Unchecked" : ""
                                    )
                                  }
                                  checked={ReportCheck === "Unchecked"}
                                />
                              </td>
                              <td
                                colSpan={2}
                                style={{ border: "2px  solid #20958C" }}
                              >
                                Doctor's Signature
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2 mb-2">
                    <button
                      className="btn btn-success"
                      onClick={submitSurgeryReport}
                    >
                      Submit
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {LabTestsRequirements ? (
                    <>
                      <div className="text-center mt-1">
                        {" "}
                        <h6
                          className="fw-bold mt-2"
                          style={{ color: "#20958C", fontSize: "30px" }}
                        >
                          RECOMMENDED LAB TEST
                        </h6>
                      </div>
                      <div
                        id="pdf"
                        style={{
                          padding: "15px",
                          // overflow: "scroll",
                        }}
                      >
                        <div
                          style={{
                            padding: "30px",
                            border: "2px solid #20958C",
                            margin: "auto",
                            borderRadius: "20px",
                          }}
                        >
                          <Row>
                            {/* <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Type"
                            >
                              <Form.Select
                                onChange={(e) => setPatientType(e.target.value)}
                              >
                                <option>Choose Options</option>
                                <option value={"IPD"}>IPD</option>
                                <option value={"OPD"}>OPD</option>
                                <option value={"GENERAL"}>General</option>
                              </Form.Select>
                            </FloatingLabel> */}

                            {/* <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Patient List"
                            >
                            

                              <Form.Control
                                type="text"
                                value={`${
                                  patientlist?.find(
                                    (itemdata) =>
                                      itemdata?.registrationType ===
                                        PatientType &&
                                      item?._id?.toString() ===
                                        itemdata?._id?.toString()
                                  )?.Firstname
                                } ${
                                  patientlist?.find(
                                    (itemdata) =>
                                      itemdata?.registrationType ===
                                        PatientType &&
                                      item?._id?.toString() ===
                                        itemdata?._id?.toString()
                                  )?.Lastname
                                }`}
                                placeholder="Name"
                                disabled
                                onChange={(e) =>
                                  setpatientObj(
                                    JSON.parse(
                                      JSON.stringify(
                                        patientlist?.find(
                                          (itemdata) =>
                                            itemdata?.registrationType ===
                                              PatientType &&
                                            item?._id?.toString() ===
                                              itemdata?._id?.toString()
                                        )
                                      )
                                    )
                                  )
                                }
                              />
                            </FloatingLabel> */}

                            {/* <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Cause"
                            >
                         

                              <Form.Control
                                type="text"
                                value={
                                  patientlist
                                    ?.find(
                                      (itemdata) =>
                                        itemdata?.registrationType ===
                                          PatientType &&
                                        item?._id?.toString() ===
                                          itemdata?._id?.toString()
                                    )
                                    ?.cause?.find(
                                      (data) =>
                                        data?._id?.toString() ===
                                        CauseDetails?._id?.toString()
                                    )?.CauseName
                                }
                                placeholder="Name"
                                disabled
                                onChange={() =>
                                  setcauseid(
                                    patientObj?.cause?.find(
                                      (data) =>
                                        data?._id?.toString() ===
                                        CauseDetails?._id?.toString()
                                    )?._id
                                  )
                                }
                              />
                            </FloatingLabel> */}

                            {/* <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Name"
                            >
                              <Form.Control
                                type="text"
                                value={patientObj?.Firstname}
                                placeholder="Name"
                                disabled
                                onChange={(e) => setpatientname(e.target.value)}
                              />
                            </FloatingLabel>
                            <FloatingLabel
                              className="  col-md-6 p-2"
                              controlId="floatingMobile"
                              label="Mobile"
                            >
                              <Form.Control
                                type="number"
                                value={patientObj?.PhoneNumber}
                                placeholder="Mobile"
                                disabled
                                onChange={(e) => setPhoneno(e.target.value)}
                              />
                            </FloatingLabel>

                            <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingEmail"
                              label="Email"
                            >
                              <Form.Control
                                type="email"
                                value={patientObj?.Email}
                                placeholder="Email"
                                disabled
                                onChange={(e) => setemail(e.target.value)}
                              />
                            </FloatingLabel> */}

                            <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label={
                                hasSelectedOptions ? "" : "Select Lab Tests"
                              }
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
                                ).padStart(2, "0")}-${String(
                                  new Date().getDate()
                                ).padStart(2, "0")}`}
                                onChange={(e) => settestDate(e.target.value)}
                              />
                            </FloatingLabel>
                          </Row>
                        </div>
                      </div>
                      <div className="text-center mt-2 mb-2">
                        <button
                          className="btn btn-success"
                          // onClick={submitSurgeryReport}
                          onClick={() => {
                            bookLabTest();
                          }}
                        >
                          Submit
                        </button>
                      </div>
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

export default DoctorForms;
