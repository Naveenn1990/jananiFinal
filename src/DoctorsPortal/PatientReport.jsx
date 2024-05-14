import React, { useEffect, useState } from "react";
import { Container, Navbar, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { FaEye } from "react-icons/fa";
const PatientReport = () => {
  const navigate = useNavigate();
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));

  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    getPatientList();
    cousebyid();
  }, []); // Run once when component mounts
  const [Patientdetailsnew, setPatientdetailsnew] = useState([]);
  const getPatientList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8521/api/user/getPatientList"
      );
      setPatientList(response.data.UsersInfo);
      setPatientdetailsnew(response.data.UsersInfo);
    } catch (error) {
      console.error("Error fetching patient list:", error);
    }
  };

  const [Cause, setCause] = useState([]);
  const cousebyid = async () => {
    try {
      const resv = await axios.get(
        "http://localhost:8521/api/user/causebypatientid"
      );
      setCause(resv.data.cause);
    } catch (error) {
      console.error("Error fetching cause list:", error);
    }
  };

  console.log("Cause",Cause);

  const [AssignedPatientList, setAssignedPatientList] = useState([]);
  const [selectedcauseid, setselectedcauseid] = useState("");
  useEffect(() => {
    const assignedPatients = patientList?.filter((val) => {
      const data = val?.assigndocts?.filter((patient) => {
         if(patient.doctorsId?._id.toString() === doctorDetails?._id.toString()){
          setselectedcauseid(patient.causeId);
          return true;
         }return false;
      });

      if (data.length) {
        return val;
      }
    });
    setAssignedPatientList(assignedPatients);
  }, [patientList]);

  console.log("selectedcauseid: ", selectedcauseid)

  // const [PatientCauseIDs, setPatientCauseIDs] = useState([]);
  // useEffect(() => {
  //   const assignedPatients = patientList?.filter((val) =>
  //     val?.assigndocts.some((doctorsid) => doctorsid.doctorsId?._id === doctorDetails?._id)
  //   );
  //   const causeIds = assignedPatients.map(patient => patient.assigndocts.map(doctorsid => doctorsid.causeId));
  //   const flattenedCauseIds = causeIds.flat();
  //   setPatientCauseIDs(flattenedCauseIds);
  // }, []);

  // console.log("PatientCauseIDsss", PatientCauseIDs);

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#dae1f3" }}>
        <Container fluid>
          <Navbar.Brand className="fw-bold" href="#">
            Patients
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Table className="table text-center" bordered >
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold"> Patient ID </th>
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Age</th>
              <th className="fw-bold">Sex</th>
              <th className="fw-bold">Address</th>
              <th className="fw-bold">Report</th>
             <th className="fw-bold">View Reports </th> 
            </tr>
          </thead>
          <tbody>
            {AssignedPatientList?.map((item, i) => {
              return (
                <tr className="admin-table-row">
                  <td>{item?.PatientId}</td>
                  <td>{`${item?.Firstname} ${item?.Lastname}`} </td>
                  <td>
                    {Math.floor(
                      (new Date() - new Date(item?.DOB)) /
                        (1000 * 60 * 60 * 24 * 365.25)
                    )}{" "}
                    years
                  </td>
                  <td>{item?.Gender}</td>
                  <td>
                    {item?.Address1} , {item?.Address2} , {item?.Zipcode}
                  </td>
                  <td>
                    <button
                      style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={() => navigate(`/doctorforms`, { state: { item, causeId: selectedcauseid } })}
                    >
                      Report
                    </button>
                  </td>
                  <td>
                    <div 
                     onClick={() => navigate(`/doctorsviewforms`, { state: { item, causeId: selectedcauseid } })}
                    style={{color:"green",cursor:"pointer"}}>
                    <FaEye 
                    style={{fontSize:"30px"}}
                    />

                    </div>
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
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PatientReport;
