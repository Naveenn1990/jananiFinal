import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CiBarcode } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { LuView } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function IPD_PatientList() {
  const navigate = useNavigate();
  const [PatientDetailsView, setPatientDetailsView] = useState("");
  const [ShowReferDetails, setShowReferDetails] = useState(false);
  const [PatientVisitId, setPatientVisitId] = useState("");
  const [EditPatientDetails, setEditPatientDetails] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show10, setShow10] = useState(false);
  const [ViewBarcode, setViewBarcode] = useState({});
  const handleClose10 = () => setShow10(false);
  const handleShow10 = (item) => {
    setShow10(true);
    setViewBarcode(item);
  };
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);

  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);

  const [AdmissionForm, setAdmissionForm] = useState("");
  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [ViewCause, setViewCause] = useState({});
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);

  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  const [IPDPatientList, setIPDPatientList] = useState([]);
  const getipdpatients = () => {
    axios
      .get("http://localhost:8521/api/user/getPatientList")
      .then(function (response) {
        setIPDPatientList(response.data.UsersInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getipdpatients();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h6 
        style={{ 
            fontSize: "22px", 
            fontWeight: "600", 
            color: "grey",    
             }}>
         IPD Patient List :
        </h6>
      </div>

      <div style={{ overflowX: "scroll" }}>
        <Table responsive="md" style={{ marginTop: "1%" }} bordered>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>Profile</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Sex</th>
              <th>Address</th>
              <th>D.O.B</th>
              <th>Add-Cause</th>
              <th>Admission Form</th>
              <th>Visitors</th>
              <th>Consent Forms</th>
              <th>Patient Forms</th>
              <th>Assign Doctor</th>
              <th>Read More</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {IPDPatientList?.filter(
              (val) => val?.registrationType === "IPD"
            )?.map((item) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>
                    <img
                      alt="profile-img"
                      src={`http://localhost:8521/PatientREG/${item?.profilepic}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    {item?.PatientId}
                    {item?.cause[item?.cause?.length - 1]?.docReqToIPDCause ? (
                      <Link
                        style={{
                          color: "red",
                        }}
                      >
                        <div
                          onClick={() => {
                            setPatientDetailsView(item);
                            setShowReferDetails(true);
                          }}
                        >
                          Referred
                        </div>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </td>
                  <td>
                    <div>
                        <p><span>Name :</span>  {`${item?.Firstname} ${item?.Lastname}`}</p>
                    </div>
                  </td>
                  <td>{item?.PhoneNumber}</td>
                  <td>{item?.Gender}</td>
                  <td>{item?.Address1}</td>
                  <td>
                    <div style={{ width: "80px", fontWeight: "bold" }}>
                      {item?.DOB}
                    </div>
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
                        handleShow9();
                        setAdmissionForm(item);
                      }}
                    >
                      Admission From
                    </Button>
                  </td>

                  <td>
                    {item?.visitor?.length === 4 ? (
                      <p style={{ color: "red" }}>
                        Four (4) visitors are allowed
                      </p>
                    ) : (
                      <>
                        <button
                          style={{
                            padding: "6px",
                            border: "none",
                            backgroundColor: "#20958c",
                            color: "white",
                            borderRadius: "0px",
                          }}
                          onClick={() => {
                            handleShow3();
                            setPatientVisitId(item?._id);
                          }}
                        >
                          Add Visitors
                        </button>
                      </>
                    )}
                    <br />
                    <button
                      style={{
                        padding: "6px",
                        border: "1px solid white",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => {
                        handleShow4();
                        setPatientVisitId(item);
                      }}
                    >
                      View Visitors
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() =>
                        navigate(
                          `/admin/InpatientlistConsentForms/${item?._id}`
                        )
                      }
                    >
                      Consent Forms
                    </button>
                  </td>
                  <td>
                    <button
                      style={{
                        padding: "6px",
                        border: "1px solid white",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => {
                        handleShow6();
                        setViewCause(item);
                      }}
                    >
                      View Forms
                    </button>
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
                      onClick={() => {
                        handleShow7();
                        setViewCause(item);
                      }}
                    >
                      Assign
                    </button>
                    <button
                      className="mt-2"
                      style={{
                        padding: "6px",
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        handleShow8();
                        setViewCause(item);
                      }}
                    >
                      View List
                    </button>
                  </td>

                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() =>
                        navigate(`/admin/patientdetails/${item?._id}`)
                      }
                    >
                      Read More
                    </button>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <MdEdit
                        style={{
                          color: "#20958c",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow14();
                          setEditPatientDetails(item);
                        }}
                      />
                      <AiFillDelete
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow13();
                          setPatientDetailsView(item);
                        }}
                      />
                    </div>
                    <hr />
                    <div className="">
                      <p
                        style={{
                          color: "green",
                          fontWeight: "bold",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleShow();
                          setPatientDetailsView(item);
                        }}
                      >
                        <LuView />
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IPD_PatientList;
