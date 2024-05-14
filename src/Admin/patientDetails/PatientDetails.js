import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConsentView from "./ConsentView";
import PatientView from "./PatientView";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DrawIcon from "@mui/icons-material/Draw";
import { Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import { CiBarcode } from "react-icons/ci";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const PatientDetails = () => {
  const { id } = useParams();
  const [consentform, setConsentForm] = useState(false);
  const [patientform, setPatientForm] = useState(false);
  const [patientdetail, setpatientdetail] = useState([]);

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

  console.log("patientdetail:", patientdetail);
  const navigate = useNavigate();

  const [SelectCause, setSelectCause] = useState({});
  console.log("SelectCause", SelectCause);

  const handleSelect = (event) => {
    setSelectCause(JSON.parse(event.target.value));
  };

  let generalConsent = 0;

  // let count = SelectCause.consentform.map((i) => {
  //   if (i.formname === "GeneralConsentForms") {
  //     generalConsent++;
  //   }
  // });
  const [first, setfirst] = useState([]);
  console.log(SelectCause.consentform);
  // SelectCause.consentform.map((item) => {
  //   if (item.forname === "GeneralConsentForms") {

  //     generalConsent++;
  //   }
  //   return generalConsent;
  // });
  console.log("general consent form:", generalConsent);

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
            fontSize: "22px",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "15px",
          }}
        >
          Patients Details
        </h6>

        <Table>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>
                {" "}
                <img
                  src={`http://localhost:8521/PatientREG/${patientdetail?.profilepic}`}
                  alt=""
                  style={{
                    height: "75px",
                    width: "75px",
                    borderRadius: "100%",
                  }}
                />{" "}
              </td>
              <td>Patient Id</td>
              <td>Mobile </td>
              <td>Email</td>
              <td>Sex</td>
              <td>Age</td>
              <td>Barcode</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>
                {patientdetail.Firstname} {patientdetail.Lastname}
              </td>
              <td>{patientdetail.PatientId}</td>
              <td>{patientdetail.PhoneNumber}</td>
              <td>{patientdetail.Email}</td>
              <td>{patientdetail.Gender}</td>
              <td>{patientdetail.DOB}</td>
              <td>
                <CiBarcode style={{ cursor: "pointer", fontSize: "35px" }} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
      <div className="col2" style={{ display: "flex" }}>
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
          <div className="m-3">
            <label>Please Select Cause</label> <br />
            <select
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
          <ConsentView />
        </>
      ) : patientform ? (
        <>
          <PatientView />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PatientDetails;
