import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";

const HourlyObservChart = ({hourlynote,patientdetail}) => {
  console.log("hourlynote",hourlynote);
  console.log("patientdetail",patientdetail);

  const [Doctor, setDoctor] = useState([])
  useEffect(() => {
    if(hourlynote){
      const selecteddoc = patientdetail?.assigndocts?.filter((ele)=>ele?.doctorsId?._id ===  hourlynote?.[0]?.doctorId)
      console.log("selecteddoc",selecteddoc);
      setDoctor(selecteddoc)
    }
  
  }, [hourlynote,patientdetail?.assigndocts])
  
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
    <hr
      style={{ color: "black", height: "3px", width: "100%", backgroundColor: "black", border: "none" }}
    />
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
          HOURLY OBSERVATION CHART
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
              HOUSLY OBSERVATION CHART
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <Table>
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    Name:{" "}{`${patientdetail?.Firstname} ${patientdetail?.Lastname}`}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    ID No :{" "}{patientdetail?.PatientId}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Sex : {patientdetail?.Gender}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={4}
                    style={{ width: "50%", border: "2px  solid #20958C" }}
                  >
                    DOA: {moment(patientdetail?.createdAt)?.format("DD-MM-YYYY")}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Age & Day : {ageOutput}
                  </td>
                  <td
                    colSpan={2}
                    style={{ width: "25%", border: "2px  solid #20958C" }}
                  >
                    Unit Dr. : {`${Doctor?.[0]?.doctorsId?.Firstname} ${Doctor?.[0]?.doctorsId?.Lastname}`}
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    Time
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    HR/MIN
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    RR/MIN
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    SPO2
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    BP
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    GRBS
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    O2
                  </th>
                  <th style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    Sign
                  </th>
                </tr>
                {hourlynote?.map((item)=>{
                  return(
                    <tr style={{ textAlign: "center" }}>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                     {item?.OTime}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.HRmin}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.RRmin}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.SPO2}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.BP}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.GRBs}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    {item?.O2}
                    </td>
                    <td style={{ width: "12.5%", border: "2px  solid #20958C" }}>
                    <img
                            alt="sign"
                            src={`http://localhost:8521/PatientREG/${item?.NurseSignature}`}
                          /> 
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

export default HourlyObservChart;
