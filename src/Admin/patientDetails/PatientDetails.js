import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConsentView from "./ConsentView";
import PatientView from "./PatientView";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DrawIcon from "@mui/icons-material/Draw";
import { Button, Container} from "react-bootstrap";
import axios from "axios";
import Barcode from "react-barcode";

const PatientDetails = () => {
  const { id } = useParams();
  const [consentform, setConsentForm] = useState(false);
  const [patientform, setPatientForm] = useState(false);
  const [patientdetail, setpatientdetail] = useState([]);

  const dobString = patientdetail?.DOB;
  const dob = new Date(dobString);
  const currentDate = new Date();
  const differenceMs = currentDate - dob;
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  const msInMonth = msInYear / 12;
  let ageOutput;
  if (differenceMs < msInYear) {
    const ageMonths = Math.floor(differenceMs / msInMonth);
    ageOutput = `${ageMonths} months`;
  } else {
    const ageYears = Math.floor(differenceMs / msInYear);
    ageOutput = `${ageYears} years`;
  }

  const getpatientbyid = async () => {
    try {
      let res = await axios.get(
        `http://localhost:8521/api/user/getPatientDetailByid/${id}`
      );
      if (res.status === 200) {
        setpatientdetail(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpatientbyid();
  }, []);
  const [SelectCause, setSelectCause] = useState({});
  const handleSelect = (event) => {
    setSelectCause(JSON.parse(event.target.value));
  };
  return (
    <>
      <div
        className="details"
        style={{
          border: "2px  solid #20958C",
          borderRadius: "20px",
          marginTop: "10px",
        }}
      >
        <h6
          className="ihie"
          style={{
            fontSize: "33px",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          Patients Details
        </h6>

        <Container style={{padding:"36px"}}>
          <div
            className="row"
            style={{
              border: "1px solid #1F938A",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <div className="col-md-12 text-center" >
              <div
                className="fw-bold"
                style={{
                  color: "#1F938A",
                  fontSize: "1.5rem",
                  position: "absolute",
                  top: "-20px",
                  left: "10px",
                  backgroundColor: "white",
                }}
              >
                {patientdetail.Firstname} {patientdetail.Lastname}
              </div>
            </div>

            <div className="col-md-3 text-start mt-4">
              <p>Patient Id : {patientdetail.PatientId}</p>
              <p>Mobile : {patientdetail.PhoneNumber}</p>
              <p>Email : {patientdetail.Email}</p>
            </div>
            <div className="col-md-3 text-start mt-4">
              <p>Sex : {patientdetail.Gender}</p>
              <p>DOB : {patientdetail.DOB}</p>
              <p>Age : {ageOutput}</p>
            </div>
            <div className="col-md-3 text-start mt-4">
              <img
                src={`http://localhost:8521/PatientREG/${patientdetail?.profilepic}`}
                alt=""
                style={{
                  height: "118px",
                  width: "157px",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div className="col-md-3 text-start mt-4">
              <div>
                <Barcode
                  value={patientdetail?.PatientId}
                  width={1}
                  height={50}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <hr />
      <div className="col2" style={{ display: "flex",justifyContent:"center" }}>
        <div
          className="patientForm"
          style={{
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
          }}
          onClick={() => {
            setPatientForm(true);
            setConsentForm(false);
          }}
        >
          <ChecklistIcon />
          <Button
            style={{
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
          >
            Patient form
          </Button>
        </div>
        <div
          className="consentForm"
          style={{
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "10px",
            marginLeft: "10px",
            padding: "10px",
          }}
          onClick={() => {
            setPatientForm(false);
            setConsentForm(true);
          }}
        >
          <DrawIcon />
          <Button
            style={{
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
          >
            Consent form
          </Button>
        </div>
      </div>

      {consentform ? (
        <>
          <div className="m-3 d-flex align-items-center" >
            <div style={{width:"16%"}}>Please Select Cause : </div> 
            <select
            style={{width:"36%"}}
              className="vi_0"
              value={JSON.stringify(SelectCause)}
              onChange={handleSelect}
            >
              <option>Select The Cause</option>
              {patientdetail?.cause?.map((item) => {
                return (
                  <option value={JSON.stringify(item)}>
                    {item?.CauseName}
                  </option>
                );
              })}
            </select>
          </div>
          <ConsentView SelectCause={SelectCause} />
        </>
      ) : patientform ? (
        <>
          <div className="m-3 d-flex align-items-center" >
            <div style={{width:"16%"}}>Please Select Cause : </div> 
            <select
            style={{width:"36%"}}
              className="vi_0"
              value={JSON.stringify(SelectCause)}
              onChange={handleSelect}
            >
              <option>Select The Cause</option>
              {patientdetail?.cause?.map((item) => {
                return (
                  <option value={JSON.stringify(item)}>
                    {item?.CauseName}
                  </option>
                );
              })}
            </select>
          </div>
          <PatientView SelectCause={SelectCause} patientdetail={patientdetail}/>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PatientDetails;
