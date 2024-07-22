import React from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const DoctorNotes = ({DoctorsNotes,patientdetail}) => {
  console.log("check",DoctorsNotes);
  const dobString = patientdetail?.DOB;
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
  return (
    <>
      <div className="mt-2 d-dlex text-end gap-2">
        <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
        >
          Print <FiDownload />
        </Button>
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
              <img src="/Images/logo.jpg" alt="" style={{ width: "100px" }} />
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
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Name:{`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Age:{ageOutput}
                  </td>
                  <td style={{ width: "33%", border: "2px  solid #20958C" }}>
                    Sex:{patientdetail?.Gender}
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
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Pt ID:{patientdetail?.PatientId}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Ward:
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Dept:{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Doctor:{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    DOA:{" "}
                  </td>
                  <td style={{ width: "50%", border: "2px  solid #20958C" }}>
                    Known Drug Allergies:{" "}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={2}
                    style={{ width: "100%", border: "2px  solid #20958C" }}
                  >
                    Diagnosis:
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
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Date & Time
                  </th>
                  <th style={{ width: "60%", border: "2px  solid #20958C" }}>
                    Notes
                  </th>
                  <th style={{ width: "20%", border: "2px  solid #20958C" }}>
                    Doctor's sign
                  </th>
                </tr>
              </thead>
              <tbody>
                {DoctorsNotes?.map((item)=>{
                  return(
                  <tr style={{ textAlign: "center" }}>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    {item?.DNDate} - {item?.DNTime}
                  </td>
                  <td style={{ width: "60%", border: "2px  solid #20958C" }}>
                    {item?.DNOtes}
                  </td>
                  <td style={{ width: "20%", border: "2px  solid #20958C" }}>
                    sign pending
                  </td>
                </tr>
                  )
                })}
                
              </tbody>
            </Table>          
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorNotes;
