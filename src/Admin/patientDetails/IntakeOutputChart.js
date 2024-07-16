import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const IntakeOutputChart = ({Intakeoutlist,patientdetail}) => {
  
  const [Doctor, setDoctor] = useState([])
  useEffect(() => {
    if(Intakeoutlist){
      const selecteddoc = patientdetail?.assigndocts?.filter((ele)=>ele?.doctorsId?._id ===  Intakeoutlist?.[0]?.doctorId)
      setDoctor(selecteddoc)
    }
  
  }, [Intakeoutlist,patientdetail?.assigndocts])
  
  console.log("Doctor",Doctor);

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

  const pdfdownload = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("AnesthesiaConsentForm.pdf");
  };

  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "hourlyobservationchat.pdf",
  });
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
          onClick={handleprint}
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
          INTAKE / OUTPUT CHART
        </h6>
      </div>
      <div
      ref={componentRef}
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
              style={{
                color: "#20958C",
                fontSize: "30px",
              }}
            >
              INTAKE / OUTPUT CHART
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
                border: "1px  solid #20958C",
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "", border: "2px  solid #20958C" }}
                  >
                    Name:{" "}{`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                  </td>
                  <td style={{ width: "", border: "2px  solid #20958C" }}>
                    Age:{" "}{ageOutput}
                  </td>
                  <td style={{ width: "", border: "2px  solid #20958C" }}>
                    Sex:{" "}{patientdetail?.Gender}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "15%", border: "2px  solid #20958C" }}
                  >
                    IP ID:{" "}{patientdetail?.PatientId}
                  </td>
                  <td style={{ width: "15%", border: "2px  solid #20958C" }}>
                    Ward:
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    style={{ width: "", border: "2px  solid #20958C" }}
                  >
                    Dept:{" "}
                  </td>
                  <td
                    colSpan={5}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Doctor:{" "}{`${Doctor?.[0]?.doctorsId?.Firstname} ${Doctor?.[0]?.doctorsId?.Lastname}`}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table
              style={{
                border: "1px  solid #20958C",
                borderCollapse: "collapse",
                width: "100%",
                margin: "auto",
              }}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "10%", border: "1px  solid black" }}>
                    Date
                  </th>
                  <th style={{ width: "10%", border: "1px  solid black" }}>
                    Time
                  </th>
                  <th
                    colSpan={4}
                    style={{ width: "40%", border: "1px  solid black" }}
                  >
                    Intake
                  </th>
                  <th
                    colSpan={4}
                    style={{ width: "40%", border: "1px  solid black" }}
                  >
                    Output
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                   
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                   
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                  Parenteral
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Quantity
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Oral/RT
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Quantity
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Urine
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Drainage
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Vomitus/ Bowels
                  </td>
                  <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    Ryle's Tube Aspiration
                  </td>
                </tr>
                {Intakeoutlist?.map((item)=>{
                  return(
                    <tr>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                      {item?.IODate}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.IOTime}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.Parental}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.Quantity1}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.OralRT}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.Quantity2}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.Urine}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.Drainage}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.VomitusBowels}
                    </td>
                    <td style={{ width: "10%", border: "2px  solid #20958C" }}>
                    {item?.RyTubeAspiration}
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

export default IntakeOutputChart;
