import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaBed, FaBuilding, FaEye } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function OPDtoIPDBedAssign() {
  const navigate = useNavigate();
  const loggedInSubAdmin = JSON.parse(sessionStorage.getItem("adminDetails"));
  const { state } = useLocation();
  const [BuildingList, setBuildingList] = useState([]);
  const [ViewFloors, setViewFloors] = useState(false);
  const [ViewRooms, setViewRooms] = useState(false);
  const [ViewBeds, setViewBeds] = useState(false);
  const [FlooridAssignBed, setFlooridAssignBed] = useState("");
  const [SelectedFloorId, setSelectedFloorId] = useState();
  const [allBedList99, setallBedList99] = useState([]);
  const [BedDetails98, setBedDetails98] = useState({});
  const [IpdCause, setIpdCause] = useState({});
  const [FloorNameData, setFloorNameData] = useState({});

  const [show99, setShow99] = useState(false);
  const handleClose99 = () => setShow99(false);
  const handleShow99 = () => setShow99(true);

  const [show97, setShow97] = useState(false);
  const handleClose97 = () => setShow97(false);
  const handleShow97 = () => setShow97(true);

  const [show96, setShow96] = useState(false);
  const handleClose96 = () => setShow96(false);
  const handleShow96 = () => setShow96(true);

  const [show98, setShow98] = useState(false);
  const handleClose98 = () => setShow98(false);
  const handleShow98 = () => setShow98(true);

  const [CheckAvailability, setCheckAvailability] = useState(false);
  const handleCloseCheckAvailability = () => setCheckAvailability(false);
  const handleShowCheckAvailability = () => setCheckAvailability(true);

  const [SelectedBuildingId, setSelectedBuildingId] = useState();
  const [CauseBillHospitalService, setCauseBillHospitalService] = useState();
  const [causeBillBuildingid, setcauseBillBuildingid] = useState();
  const CheckAvailabity = (item) => {
    setCauseBillHospitalService(item?.buildingName);
    setcauseBillBuildingid(item?._id);
    setCheckAvailability(true);
    setSelectedBuildingId(item?._id);
  };

  const [individualPatient, setindividualPatient] = useState({});

  function CheckShow97() {
    const details = IPDPatients.find(
      (obj) => obj._id.toString() === BedDetails98?.patientId?.toString()
    );
    setindividualPatient({ ...details });
  }

  const [IPDPatients, setIPDPatients] = useState([]);
  // const [updatedIPDPatients, setupdatedIPDPatients] = useState([]);
  const getPatients = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setIPDPatients(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "IPD"
          )
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getBuildingList = () => {
    axios
      .get("http://localhost:8521/api/admin/getBuildingList")
      .then(function (response) {
        // handle success
        setBuildingList(response.data.buildinglist);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getPatients();
    getBuildingList();
  }, []);

  const [FloorList, setFloorList] = useState([]);

  const getFloorList = () => {
    axios
      .get(
        "http://localhost:8521/api/admin/getFloorsList/" + SelectedBuildingId
      )
      .then(function (response) {
        // handle success
        setFloorList(response.data.buildinglist);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getFloorList();
  }, [SelectedBuildingId]);

  const addcauseBill = async () => {
    try {
      const config = {
        url: "/user/AddBedToTheBillOfPatient/" + state.PatientDetailsView?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          causeid: JSON.parse(IpdCause)?._id,
          bedAssignedBySubadmin: loggedInSubAdmin?._id,
          bedAssignedBySubadminName: loggedInSubAdmin?.name,
          bedName: BedDetails98?.bedName,
          buildingName: CauseBillHospitalService,
          floor: FloorNameData,
          wardName: allBedList99?.roomno,
          bedcostperday: state.PatientDetailsView?.haveInsurance
            ? BedDetails98?.bedCostInsurance
            : BedDetails98?.bedCostNonInsurance,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        handleClose98();
        handleClose99();
        handleCloseCheckAvailability();
        alert("Patient assigned");
        opdtoipdFn();
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const assignBedToPatient = () => {
    if (!Object.keys(IpdCause).length) {
      handleClose98();
      handleClose99();
      handleCloseCheckAvailability();
      return alert("Please choose the cause first");
    }
    try {
      const config = {
        url: `/admin/editBed`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          buildingid: causeBillBuildingid,
          floorid: FlooridAssignBed,
          roomid: allBedList99?._id,
          bedid: BedDetails98?._id,
          patientId: state.PatientDetailsView?._id,
        },
      };
      axios(config)
        .then(async (res) => {
          if (res.status === 200) {
            await addcauseBill();
            alert("Bed is assigned to the patient");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  async function opdtoipdFn() {
    try {
      const config = {
        url: `/user/makeOPDtoIPD`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          patientid: state.PatientDetailsView?._id,
          causeid: JSON.parse(IpdCause)?._id,
        },
      };
      let response = await axios(config);
      if (response.status === 200) {
        alert(response.data.success);
        navigate("/admin/opdtoipd");
        // getcategory();
        // handleClose1();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  }

  console.log("same: ", JSON.parse(IpdCause));

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          OPD TO IPD Transfer
        </h6>
      </div>
      <div>
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#20958c",
            padding: "10px",
            color: "white",
          }}
        >
          <b>Choose Cause</b>
        </div>
        <div>
          (Please add the cause if not available:{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate("/admin/opdtoipd")}
          >
            here
          </span>
          )
        </div>
        <div style={{ marginLeft: "20px" }}>
          {state?.PatientDetailsView?.cause?.map((item, i) => {
            return (
              <div className="d-flex mt-2">
                <div>
                  <input
                    type="radio"
                    name="fav_language"
                    id={`cause${i}`}
                    value="HTML"
                    onClick={() => setIpdCause(JSON.stringify(item))}
                  />
                </div>
                <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  {item?.CauseName}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#20958c",
            padding: "10px",
            color: "white",
          }}
        >
          <b>Recommendation By: </b>
        </div>
        <Table bordered style={{ marginTop: "1%" }}>
          <thead>
            <tr
              style={{
                fontSize: "15px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Designation</th>
              <th>Recommendation Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              <td>{state?.PatientDetailsView?.requestedDoc?.DoctorId}</td>
              <td>
                {state?.PatientDetailsView?.requestedDoc?.Firstname}{" "}
                {state?.PatientDetailsView?.requestedDoc?.Lastname}
              </td>
              <td>{state?.PatientDetailsView?.requestedDoc?.Designation}</td>
              <td>{`${new Date(
                state?.PatientDetailsView?.requestedDocDate
              ).getDate()}-${
                new Date(
                  state?.PatientDetailsView?.requestedDocDate
                ).getMonth() + 1
              }-${new Date(
                state?.PatientDetailsView?.requestedDocDate
              ).getFullYear()}`}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#20958c",
            padding: "10px",
            color: "white",
          }}
        >
          <b>Assign Bed: </b>
        </div>
        <div>
          <div className="row">
            {BuildingList?.map((item) => {
              return (
                <div className="col-lg-6">
                  <div
                    className="websiteMcards"
                    // onClick={() => {
                    //   setViewModal(<Subadmin />);
                    //   setView(true);
                    // }}
                  >
                    <FaBuilding className="WebMI" />
                    {item?.buildingName}
                    <div className="row" style={{ marginTop: "2%" }}>
                      <div
                        className="col-lg-6"
                        style={{ padding: "10px", border: "1px solid white" }}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <button
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                width: "100%",
                              }}
                              onClick={() => {
                                CheckAvailabity(item);
                              }}
                            >
                              Check Availability
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Modal
            size="lg"
            show={CheckAvailability}
            onHide={handleCloseCheckAvailability}
          >
            <Modal.Header>
              <Modal.Title>Check Availability </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  backgroundColor: "white",
                  height: "400px",
                  overflow: "hidden",
                  overflowY: "scroll",
                }}
              >
                {/* floor list */}
                {FloorList.map((floors) => {
                  return (
                    <div
                      style={{
                        border: "2px solid black",
                        textAlign: "center",
                        margin: "10px",
                      }}
                    >
                      <div
                        style={{ color: "white", backgroundColor: "#20958c" }}
                        onClick={() => setViewFloors(true)}
                      >
                        {floors?.floorName}
                      </div>
                      <div
                        className="row"
                        style={{ display: ViewFloors ? "" : "none" }}
                      >
                        <div
                          style={{
                            margin: "10px",
                            color: "#20958c",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          <b>Wards</b>
                        </div>
                        {floors?.Room?.map((item) => {
                          return (
                            <div className="col-lg-6">
                              <div
                                className="websiteMcards"
                                onClick={() => {
                                  // setViewFloors(false);
                                  setViewRooms(true);
                                  setViewBeds(false);
                                  setFloorNameData(floors?.floorName);
                                  setFlooridAssignBed(floors?._id);
                                  setSelectedFloorId(item._id);
                                  setallBedList99(item);
                                  handleShow99();
                                }}
                              >
                                <div className="d-flex justify-content-end">
                                  <div>
                                    <b>{item?.roomType}</b>
                                    <div>
                                      {/* only available beds will show here */}
                                      (
                                      {
                                        item?.bedsinfo?.filter(
                                          (data) =>
                                            data.bedOccupied === "available"
                                        )?.length
                                      }
                                      )
                                    </div>
                                  </div>
                                </div>
                                <FaBuilding className="WebMI" />
                                {item?.roomno}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  backgroundColor: "white",
                  color: "#20958c",
                  border: "none",
                  borderRadius: "0px",
                  marginRight: "10px",
                  height: "39px",
                  width: "121px",
                }}
                onClick={handleCloseCheckAvailability}
              >
                Close
              </button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={show99}
            size="lg"
            onHide={() => {
              handleClose99();
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Beds list</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ color: "White", textAlign: "center" }}>
                <b>
                  Ward no: {allBedList99?.roomno} ({allBedList99?.roomType})
                </b>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "5px", marginRight: "20px" }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: "#008000",
                    }}
                  ></div>
                  <div style={{ color: "white" }}>
                    <b>
                      Available(
                      {
                        allBedList99?.bedsinfo?.filter(
                          (val) => val.bedOccupied === "available"
                          //  ||
                          //   val.bedOccupied === "maintenance"
                        )?.length
                      }
                      )
                    </b>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "5px", marginRight: "20px" }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                    }}
                  ></div>
                  <div style={{ color: "white" }}>
                    <b>
                      Unavailable(
                      {
                        allBedList99?.bedsinfo?.filter(
                          (val) => val.bedOccupied === "unavailable"
                        )?.length
                      }
                      )
                    </b>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "5px", marginRight: "20px" }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: "blue",
                    }}
                  ></div>
                  <div style={{ color: "white" }}>
                    <b>
                      Maintenance(
                      {
                        allBedList99?.bedsinfo?.filter(
                          (val) => val.bedOccupied === "maintenance"
                        )?.length
                      }
                      )
                    </b>
                  </div>
                </div>
              </div>

              <div
                className="row text-center"
                style={{
                  height: "300px",
                  overflow: "hidden",
                  overflowY: "scroll",
                }}
              >
                {allBedList99?.bedsinfo?.map((val) => {
                  return (
                    <div
                      className="col-lg-6 denis-border"
                      style={{ backgroundColor: "white" }}
                      onClick={() => {
                        setBedDetails98(val);
                        if (val?.bedOccupied === "unavailable") {
                          CheckShow97();
                          handleShow97();
                        } else if (
                          val?.bedOccupied === "available" ||
                          val?.bedOccupied === "maintenance"
                        ) {
                          handleShow98();
                        }
                      }}
                    >
                      <div className="denis-borders">
                        <FaBed
                          style={{
                            color:
                              val?.bedOccupied === "available"
                                ? "green"
                                : val?.bedOccupied === "unavailable"
                                ? "red"
                                : val?.bedOccupied === "maintenance"
                                ? "blue"
                                : "orange",

                            fontSize: "70px",
                          }}
                        />{" "}
                        <span>
                          <b>{val?.bedName}</b>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose99();
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show96} size="lg" onHide={handleClose96}>
            <Modal.Header closeButton>
              <Modal.Title>Patients Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row" style={{ backgroundColor: "white" }}>
                <div className="col-md-6">
                  <label>Patient ID </label>
                  <span>
                    <b> {individualPatient?.PatientId}</b>
                  </span>
                </div>
                <div className="col-md-6">
                  <label>Patient Name </label>
                  <span>
                    <b> {individualPatient?.Firstname}</b>
                  </span>
                </div>
                <div className="col-md-6">
                  <label>Gender </label>
                  <span>
                    <b> {individualPatient?.Gender}</b>
                  </span>
                </div>
                <div className="col-md-6">
                  <label>Phone Number </label>
                  <span>
                    <b> {individualPatient?.PhoneNumber}</b>
                  </span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose96}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={assignBedToPatient}>
            Save Changes
          </Button> */}
            </Modal.Footer>
          </Modal>

          <Modal show={show97} size="lg" onHide={handleClose97}>
            <Modal.Header closeButton>
              <Modal.Title>Beds Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ backgroundColor: "white", textAlign: "center" }}>
                <Table>
                  <thead>
                    <th>Bed Name</th>
                    <th>Bed Occupied</th>
                    <th>Insurance amount</th>
                    <th>Non-insurance amount</th>
                    <th>Patient</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{BedDetails98?.bedName}</td>
                      <td>{BedDetails98?.bedOccupied}</td>
                      <td>₹{BedDetails98?.bedCostInsurance}</td>
                      <td>₹{BedDetails98?.bedCostNonInsurance}</td>

                      <td>
                        <FaEye onClick={handleShow96} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose97}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show98} size="lg" onHide={handleClose98}>
            <Modal.Header closeButton>
              <Modal.Title>Bed Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  border: "1px solid black",
                  margin: "10px",
                }}
              >
                <div>
                  <b>Update Information</b>
                </div>
                <div style={{ margin: "10px" }}>
                  <Table bordered>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <div>
                            <label>
                              <b>Bed Name</b>
                            </label>
                            <div>{BedDetails98?.bedName}</div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <label>
                              <b>Bed Status</b>
                            </label>
                            <div>{BedDetails98?.bedOccupied}</div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <label>
                              <b>Insurance amount</b>
                            </label>
                            <div>{BedDetails98?.bedCostInsurance}</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={{ margin: "10px" }}>
                  <Table bordered>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <label>
                              <b>Non-Insurance amount</b>
                            </label>
                            <div>{BedDetails98?.bedCostNonInsurance}</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={{ margin: "10px" }}>
                  <Table bordered>
                    <tbody>
                      <tr>
                        {/* {BedDetails98?.bedOccupied === "available" ? (
                          <td>
                            <div>
                              <label>
                                <b>Reason</b>
                              </label>
                              <div>
                                <select
                                  style={{ width: "220px", height: "42px" }}
                                  onChange={(e) => setIpdCause(e.target.value)}
                                >
                                  <option>Choose</option>
                                  {state.PatientDetailsView?.cause?.map(
                                    (item) => {
                                      return (
                                        <option value={JSON.stringify(item)}>
                                          {item?.CauseName}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>
                              </div>
                            </div>
                          </td>
                        ) : (
                          <></>
                        )} */}
                        {BedDetails98?.bedOccupied === "available" ? (
                          <td>
                            <Button
                              variant="primary"
                              onClick={assignBedToPatient}
                            >
                              Assign Patient
                            </Button>
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose98}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
