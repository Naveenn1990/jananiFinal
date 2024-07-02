import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Form, FloatingLabel, Row } from "react-bootstrap";
import { Checkbox } from "@mui/material";
import moment from "moment";
import axios from "axios";
import Select from "react-select";

const DoctorForms = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };
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

    obj = {
      causeid: causeid,
      patientid: patientObj?._id,
      patientname: patientObj?.Firstname,
      Phoneno: patientObj?.PhoneNumber,
      email: patientObj?.Email,
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
        console.log("res.data76ty67: ", res.data);
        const config = {
          url: "/addRecommendedLabReports",
          method: "put",
          baseURL: "http://localhost:8521/api/staff",
          headers: { "content-type": "application/json" },
          data: {
            patientId: item?._id,
            causeId: CauseDetails?._id,
            labTestBookingId: res.data?.bookingLabTest?._id,
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
    try {
      const config = {
        url: "/adddoctorstreatment",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: item?._id,
          causeId: CauseDetails?._id,
          DoctorsTreatment: DoctorsTreatment,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setDTdate("");
        setDTTime("");
        setDTNotes("");
        setDoctorsNotes([]);
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
    try {
      const config = {
        url: "/adddoctorsnotes",
        method: "put",
        baseURL: "http://localhost:8521/api/staff",
        headers: { "content-type": "application/json" },
        data: {
          patientId: item?._id,
          causeId: CauseDetails?._id,
          doctorid: item?._id,
          DNDate: DNDate,
          DNTime: DNTime,
          DNOtes: DNOtes,
          DrugAllergies: DrugAllergies,
          Diagnosis: Diagnosis,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setDrugAllergies("");
        setDiagnosis("");
        setDNDate("");
        setDNTime("");
        setDNOtes("");
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
                        Ward : 26/32
                      </td>
                    </tr>
                    <tr>
                      <td
                        colSpan={2}
                        style={{ width: "100%", border: "2px  solid #20958C" }}
                      >
                        {/* <div className="d-flex align-items-center">
                          <div style={{ width: "12%" }}>
                            {" "}
                            Doctor Incharge :{" "}
                          </div>

                          <input
                            type="text"
                            className="vi_0"
                            style={{ width: "90%" }}
                          />
                        </div> */}
                        Doctor Incharge :{" "}
                        {`${doctorDetails?.Firstname} ${doctorDetails?.Lastname} `}
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
                  bordered
                >
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Date
                      </th>
                      <th style={{ width: "10%", border: "2px solid #20958C" }}>
                        Time
                      </th>
                      <th style={{ width: "50%", border: "2px solid #20958C" }}>
                        Notes
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Doctor's sign
                      </th>
                      <th style={{ width: "20%", border: "2px solid #20958C" }}>
                        Action
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
                        <input type="text" className="vi_0" />
                      </td>
                      <td
                        style={{ width: "10%", border: "2px  solid #20958C" }}
                      >
                        <Button onClick={Adddoctorstreatment}>
                          <IoMdAdd />
                        </Button>
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
                            Ward: 32/23
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Dept: {doctorDetails?.Department}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Doctor:{" "}
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
                            DOA: {moment(item?.createdAt).format("DD-MM-YYYY")}
                          </td>
                          <td
                            style={{
                              width: "50%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <div className="d-flex align-items-center">
                              <div>Known Drug Allergies : </div>
                              <span>
                                <input
                                  type="text"
                                  className="vi_0"
                                  value={DrugAllergies}
                                  onChange={(e) =>
                                    setDrugAllergies(e.target.value)
                                  }
                                />
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
                              <div>Diagnosis:</div>
                              <input
                                type="text"
                                className="vi_0"
                                value={Diagnosis}
                                onChange={(e) => setDiagnosis(e.target.value)}
                              />
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
                            Date
                          </th>
                          <th
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            Time
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
                              type="date"
                              className="vi_0"
                              value={DNDate}
                              onChange={(e) => setDNDate(e.target.value)}
                              min={new Date().toISOString().split("T")[0]}
                            />
                          </td>
                          <td
                            style={{
                              width: "10%",
                              border: "2px  solid #20958C",
                            }}
                          >
                            <input
                              type="time"
                              className="vi_0"
                              value={DNTime}
                              onChange={(e) => setDNTime(e.target.value)}
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
                            <input
                              type="file"
                              className="vi_0"
                              style={{ width: "100%" }}
                            />
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
                                Ward: 33
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
                          LAB TEST
                        </h6>
                      </div>
                      <div
                        id="pdf"
                        style={{
                          padding: "15px",
                          overflow: "scroll",
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

                            <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Patient List"
                            >
                              <Form.Select
                                onChange={(e) =>
                                  setpatientObj(JSON.parse(e.target.value))
                                }
                              >
                                <option>Choose Options</option>
                                {patientlist
                                  ?.filter(
                                    (itemdata) =>
                                      itemdata?.registrationType ===
                                        PatientType &&
                                      item?._id?.toString() ===
                                        itemdata?._id?.toString()
                                  )
                                  ?.map((val) => {
                                    return (
                                      <option value={JSON.stringify(val)}>
                                        {val?.Firstname} {val?.Lastname}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                              className="col-md-6 p-2"
                              controlId="floatingName"
                              label="Cause"
                            >
                              <Form.Select
                                onChange={(e) => setcauseid(e.target.value)}
                              >
                                <option>Choose Options</option>
                                {patientObj?.cause
                                  ?.filter(
                                    (data) =>
                                      data?._id?.toString() ===
                                      CauseDetails?._id?.toString()
                                  )
                                  ?.map((val) => {
                                    return (
                                      <option value={val?._id}>
                                        {val?.CauseName}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
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
                            </FloatingLabel>
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
