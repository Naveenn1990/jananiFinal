import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faImage,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const PatientMedicalRecord = () => {
  const patientMedicalRecordObj = JSON.parse(
    sessionStorage.getItem("PatientUser")
  );
  const [patientHistoryList, setpatientHistoryList] = useState([]);
  async function historyList() {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/user/getHistoryList/" +
          patientMedicalRecordObj?._id
      );
      if (res.status === 200) {
        setpatientHistoryList(res.data.historylist);
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!!!");
    }
  }
  useEffect(() => {
    historyList();
  }, []);
  console.log(patientHistoryList, "patientHistoryList");
  return (
    <>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Medical Records
      </h4>
      <div style={{ overflow: "hidden", overflowX: "scroll" }}>
        <div className="wrapper ">
          <div className="center-line">
            <a href="#" className="scroll-icon">
              <i className="fas fa-caret-up"></i>
            </a>
          </div>

          {patientHistoryList?.medicalHistory?.map((item) => {
            return (
              <div className="row ">
                <section>
                  <p className="icon">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      src={`http://localhost:8521/Doctor/${item?.addedByDoctor?.ProfileImg}`}
                      alt=""
                    />
                  </p>
                  <div className="details">
                    <p>{item?.topic}</p>
                    <p>{item?.description}</p>
                    {item?.docs?.length ? (
                      item?.docs?.map((val, i) => {
                        return (
                          <p>
                            <a
                              href={`http://localhost:8521/PatientREG/${val}`}
                              target="blank_"
                            >
                              View Document
                            </a>
                          </p>
                        );
                      })
                    ) : (
                      <></>
                    )}

                    <div
                      className="text-end fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      <span>{moment(item?.currDate).format("DD/MM/YYYY")}</span>{" "}
                      <br />
                      <span>{item?.currTime}</span>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PatientMedicalRecord;
