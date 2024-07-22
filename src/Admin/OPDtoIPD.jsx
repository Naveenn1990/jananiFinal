import axios from "axios";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Button, Table, Modal } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
=======
import { Button, Table, Modal, Form } from "react-bootstrap";
import { LuView } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f

export default function OPDtoIPD() {
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [ChoosedCause, setChoosedCause] = useState({});

  const handleClose1 = () => {
    setShow1(false);
  };
  const handleShow1 = () => {
    setShow1(true);
  };
<<<<<<< HEAD
  const [data, setdata] = useState([]);
=======

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  const [PatientDetailsView, setPatientDetailsView] = useState("");
  // for adding the cause...
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  //  showing the cause...
  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);
  // adding and showing cause modal

  const [View, setView] = useState({});
  const [category, setcategory] = useState([]);
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f
  const [selectedPatientid, setselectedPatientid] = useState("");
  const getdata = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        // handle success
        setdata(
          response.data.UsersInfo?.filter(
            (val) => val?.registrationType === "OPD" && val?.docReqToIPD
          )
        );
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
        getdata();
        handleClose1();
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong!");
    }
  }

  // Add Cause
  const [CauseName, setCauseName] = useState("");
  const AddpatientCause = async () => {
    if (!CauseName) {
      alert("Please Enter Patient Cause");
    }
    try {
      const config = {
        url: "/addcause/" + PatientDetailsView?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          CauseName: CauseName,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose11();
        getcategory();
        setCauseName("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const DeleteCause = async (id) => {
    try {
      const config = {
        url: "/deletecause/" + PatientDetailsView?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          causeid: id,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getcategory();
        handleClose12();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

<<<<<<< HEAD
  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("OPD-IPD-Conversion");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);

=======
  console.log("PatientDetailsView: ", PatientDetailsView);
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f
  return (
    <div>
      <h6
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "grey",
          marginTop: "2%",
        }}
      >
        OPD to IPD Conversion
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        <input
          placeholder="Search"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
          onChange={handleFilter}
        />
        <button
          style={{
            backgroundColor: "#20958c",
            color: "white",
            border: "none",
            fontSize: "12px",
            borderRadius: "4px",
          }}
          onClick={ExportToExcel}
        >
          EXPORT <AiFillFileExcel />
        </button>
      </div>
      <div style={{ overflow: "hidden", overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Patient-Id</th>

<<<<<<< HEAD
              <th> Name</th>
              <th>Sex</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Action</th>
              {/* <th>Action</th>
            <th>Read More</th> */}
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        <td>
                          <img
                            src="/Images/doctor1.jpg"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
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
=======
            <th> Name</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Date Of Birth</th>
            <th>Reason</th>
            <th>Add-Cause</th>
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
                        handleShow11();
                        setPatientDetailsView(item);
                      }}
                    >
                      <FaPlus /> Cause{" "}
                    </Button>
                    <div
                      style={{
                        backgroundColor: "#20958c",
                        padding: "5px",
                        marginTop: "14px",
                        borderRadius: "6px",
                      }}
                    >
                      <GrView
                        style={{
                          cursor: "pointer",
                          fontSize: "28px",
                          color: "white",
                        }}
                        onClick={() => {
                          handleShow12();
                          setPatientDetailsView(item);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setPatientDetailsView(item);
                        setselectedPatientid(item?._id);
                        // handleShow1();
                        navigate("/admin/opdtoipdconfirmation", {
                          state: { PatientDetailsView: item },
                        });
                      }}
                      style={{ backgroundColor: "#20958C" }}
                    >
                      OPD to IPD
                    </Button>
                  </td>
                  {/* <td>
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f
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
<<<<<<< HEAD
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, index) => {
                    return (
                      <tr
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        <td>
                          <img
                            src="/Images/doctor1.jpg"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </td>
                        <td>{item?.PatientId}</td>
                        <td>{item?.Firstname}</td>
                        <td>{item?.Gender}</td>
                        <td>{item?.Address1}</td>
                        <td>{item?.PhoneNumber}</td>
                        <td>{item?.DOB}</td>
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
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ width: "100%", marginTop: "20px" }}>
          Total Count: {data?.length}
        </p>
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      <Modal show={show1} onHide={handleClose1}>
=======
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Modal show={show1} size="lg" onHide={handleClose1}>
>>>>>>> f232eba0eaa38cbf480115a19d513f07f09b664f
        <Modal.Header closeButton>
          <Modal.Title>OPD To IPD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ color: "white" }}>
            <b>Are you sure, you want to change OPD to IPD?</b>
          </div>
          <div style={{ color: "white" }}>
            <label style={{ marginTop: "10px" }}>
              <b>Choose Cause</b>
            </label>
            <div style={{ marginLeft: "20px" }}>
              {PatientDetailsView?.cause?.map((item, i) => {
                return (
                  <div className="d-flex mt-2">
                    <div>
                      <input
                        type="radio"
                        name="fav_language"
                        id={`cause${i}`}
                        value="HTML"
                        // checked={ChoosedCause}
                        onClick={() => setChoosedCause(item)}
                      />
                    </div>
                    <div style={{ marginLeft: "10px" }}>{item?.CauseName}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ color: "white", marginTop: "10px" }}>
            <label>
              <b>Recommendation By: </b>
            </label>
            <Table bordered>
              <thead>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Designation</th>
                <th>Recommendation Date</th>
              </thead>
              <tbody>
                <tr>
                  <td>{PatientDetailsView?.requestedDoc?.DoctorId}</td>
                  <td>
                    {PatientDetailsView?.requestedDoc?.Firstname}{" "}
                    {PatientDetailsView?.requestedDoc?.Lastname}
                  </td>
                  <td>{PatientDetailsView?.requestedDoc?.Designation}</td>
                  <td>{`${new Date(
                    PatientDetailsView?.requestedDocDate
                  ).getDate()}-${
                    new Date(PatientDetailsView?.requestedDocDate).getMonth() +
                    1
                  }-${new Date(
                    PatientDetailsView?.requestedDocDate
                  ).getFullYear()}`}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div style={{ color: "white", marginTop: "10px" }}>
            <label>
              <b>Assign Bed: </b>
            </label>
            <Table bordered>
              <thead>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Designation</th>
                <th>Recommendation Date</th>
              </thead>
              <tbody>
                <tr>
                  <td>{PatientDetailsView?.requestedDoc?.DoctorId}</td>
                  <td>
                    {PatientDetailsView?.requestedDoc?.Firstname}{" "}
                    {PatientDetailsView?.requestedDoc?.Lastname}
                  </td>
                  <td>{PatientDetailsView?.requestedDoc?.Designation}</td>
                  <td>{`${new Date(
                    PatientDetailsView?.requestedDocDate
                  ).getDate()}-${
                    new Date(PatientDetailsView?.requestedDocDate).getMonth() +
                    1
                  }-${new Date(
                    PatientDetailsView?.requestedDocDate
                  ).getFullYear()}`}</td>
                </tr>
              </tbody>
            </Table>
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
        </Modal.Footer>
      </Modal>

      <Modal show={show11} onHide={handleClose11}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add{" "}
            <span style={{ color: "red" }}>
              "
              {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`}
              "
            </span>{" "}
            Causes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  color: "white",
                }}
              >
                Patient Cause
                <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                onChange={(e) => setCauseName(e.target.value)}
                type="text"
                placeholder="Cause..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
          <Button variant="primary" onClick={() => AddpatientCause()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show12} onHide={handleClose12}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit{" "}
            <span style={{ color: "red" }}>
              "
              {`${PatientDetailsView?.Firstname} ${PatientDetailsView?.Lastname}`}
              " S
            </span>{" "}
            Causes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: "5px", backgroundColor: "white" }}>
            <Table bordered>
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Cause Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {PatientDetailsView?.cause?.map((item, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.CauseName}</td>
                      <td>
                        <div className="d-flex gap-3">
                          <MdDelete
                            onClick={() => {
                              DeleteCause(item?._id);
                            }}
                            style={{
                              color: "red",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose12}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
