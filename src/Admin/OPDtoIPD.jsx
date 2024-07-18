import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { LuView } from "react-icons/lu";

export default function OPDtoIPD() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => {
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(true);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };
  const [View, setView] = useState({});
  const [category, setcategory] = useState([]);
  const [selectedPatientid, setselectedPatientid] = useState("");
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

  async function opdtoipdFn() {
    try {
      const config = {
        url: `/user/makeOPDtoIPD`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: selectedPatientid,
        },
      };
      console.log("config", config);
      let response = await axios(config);
      if (response.status === 200) {
        alert(response.data.success);
        getcategory();
        handleClose1();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  }

  useEffect(() => {
    getcategory();
  }, []);
  return (
    <div>
      <Table responsive="md" style={{ marginTop: "1%" }}>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <th>Profile</th>
            <th>Patient-Id</th>

            <th> Name</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Date Of Birth</th>
            <th>Reason</th>
            <th>Action</th>
            {/* <th>Action</th>
            <th>Read More</th> */}
          </tr>
        </thead>
        <tbody>
          {category
            ?.filter(
              (val) => val?.registrationType === "OPD" && val?.docReqToIPD
            )
            ?.map((item) => {
              return (
                <tr
                  style={{
                    fontSize: "15px",
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {/* D:\hospital_final_27-2-24\j-f-final\jananiFinal\public\img\unknown-img.png */}
                  <td>
                    <img
                      src={
                        item?.profilepic
                          ? `http://localhost:8521/PatientREG/${item?.profilepic}`
                          : `/img/unknown-img.png`
                      }
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt="no-data"
                    />
                  </td>
                  <td>{item?.PatientId}</td>
                  <td>{item?.Firstname}</td>
                  <td>{item?.Gender}</td>
                  <td>{item?.Address1}</td>
                  <td>{item?.PhoneNumber}</td>
                  <td>{item?.DOB}</td>
                  <td>
                    <LuView
                      style={{
                        color: "green",
                        fontWeight: "bold",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setView(item);
                        handleShow2();
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setselectedPatientid(item?._id);
                        handleShow1();
                      }}
                      style={{ backgroundColor: "#20958C" }}
                    >
                      OPD to IPD
                    </Button>
                  </td>
                  {/* <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <MdEdit style={{ color: "#20958c", marginRight: "1%" }} />
                      <AiFillDelete style={{ color: "red" }} />
                    </div>
                  </td>
                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Read More
                    </button>
                  </td> */}
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>OPD To IPD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "white" }}>
            <b>Are you sure, you want to change OPD to IPD?</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="success" onClick={opdtoipdFn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Reason</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <b style={{ color: "white" }}>
              {View?.reasonForRecommendationOfIPD}
            </b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="success" onClick={opdtoipdFn}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
