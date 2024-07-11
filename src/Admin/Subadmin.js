import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { TbView360 } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import { Pagination, Stack } from "@mui/material";

import Modal from "react-bootstrap/Modal";
import { MdEdit } from "react-icons/md";
import { AiFillDelete, AiFillFileExcel } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import exportFromJSON from "export-from-json";

export default function Subadmin() {
  const isAdminlogin = sessionStorage.getItem("adminDetails");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [passwordView, setpasswordView] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [subadmin, setsubadmin] = useState(false);
  const [doctorManagement, setdoctorManagement] = useState(false);
  const [staffManagement, setstaffManagement] = useState(false);
  const [patientManagement, setpatientManagement] = useState(false);
  const [docAppointment, setdocAppointment] = useState(false);
  const [labManagement, setlabManagement] = useState(false);
  const [labReceptionist, setlabReceptionist] = useState(false);
  const [labSampleCollector, setlabSampleCollector] = useState(false);
  const [labTechnician, setlabTechnician] = useState(false);
  const [pharmacyManagement, setpharmacyManagement] = useState(false);
  // const [vendorManagement, setvendorManagement] = useState(false);
  const [websiteManagement, setwebsiteManagement] = useState(false);
  const [serviceManagement, setserviceManagement] = useState(false);
  const [hospitalManagement, sethospitalManagement] = useState(false);
  const [bedManagement, setbedManagement] = useState(false);
  const [billing, setbilling] = useState(false);

  const [accounts, setaccounts] = useState(false);
  const [enqAndComplaints, setenqAndComplaints] = useState(false);
  const [subadminlist, setsubadminlist] = useState([]);
  const [subadminlistImmutable, setsubadminlistImmutable] = useState([]);
  const [View, setView] = useState({});
  const [subadminChanged, setsubadminChanged] = useState("");
  const [doctorManagementChanged, setdoctorManagementChanged] = useState("");
  const [staffManagementChanged, setstaffManagementChanged] = useState("");
  const [patientManagementChanged, setpatientManagementChanged] = useState("");
  const [docAppointmentChanged, setdocAppointmentChanged] = useState("");
  const [labManagementChanged, setlabManagementChanged] = useState("");
  const [labTechnicianChanged, setlabTechnicianChanged] = useState("");
  const [labReceptionistChanged, setlabReceptionistChanged] = useState("");
  const [labSampleCollectorChanged, setlabSampleCollectorChanged] =
    useState("");
  const [pharmacyManagementChanged, setpharmacyManagementChanged] =
    useState("");
  // const [vendorManagementChanged, setvendorManagementChanged] = useState("");
  const [websiteManagementChanged, setwebsiteManagementChanged] = useState("");
  const [serviceManagementChanged, setserviceManagementChanged] = useState("");
  const [hospitalManagementChanged, sethospitalManagementChanged] =
    useState("");
  const [bedManagementChanged, setbedManagementChanged] = useState("");
  const [billingChanged, setbillingChanged] = useState("");
  const [accountsChanged, setaccountsChanged] = useState("");
  const [enqAndComplaintsChanged, setenqAndComplaintsChanged] = useState("");

  const registerSubadmin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/admin/addsubadmin`,
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          name: name,
          email: email,
          password: password,
          subadmin: subadmin,
          doctorManagement: doctorManagement,
          staffManagement: staffManagement,
          patientManagement: patientManagement,
          docAppointment: docAppointment,
          labManagement: labManagement,
          labTechnician: labTechnician,
          labReceptionist: labReceptionist,
          labSampleCollector: labSampleCollector,
          pharmacyManagement: pharmacyManagement,
          // vendorManagement: vendorManagement,
          websiteManagement: websiteManagement,
          serviceManagement: serviceManagement,
          hospitalManagement: hospitalManagement,
          bedManagement: bedManagement,
          billing: billing,
          accounts: accounts,
          enqAndComplaints: enqAndComplaints,
        },
      };
      let res = await axios(config);
      if (res.status === 200 || res.status === 201) {
        subadminList();
        setname("");
        setemail("");
        setpassword("");
        setsubadmin(false);
        setdoctorManagement(false);
        setstaffManagement(false);
        setpatientManagement(false);
        setdocAppointment(false);
        setlabManagement(false);
        setlabTechnician(false);
        setlabReceptionist(false);
        setlabSampleCollector(false);
        setpharmacyManagement(false);
        // setvendorManagement(false);
        setwebsiteManagement(false);
        setserviceManagement(false);
        sethospitalManagement(false);
        setbedManagement(false);
        setbilling(false);
        setaccounts(false);
        setenqAndComplaints(false);
        setsubadminChanged("");
        setdoctorManagementChanged("");
        setstaffManagementChanged("");
        setpatientManagementChanged("");
        setdocAppointmentChanged("");
        setlabManagementChanged("");
        setlabTechnicianChanged("");
        setlabReceptionistChanged("");
        setlabSampleCollectorChanged("");
        setpharmacyManagementChanged("");
        // setvendorManagementChanged("");
        setwebsiteManagementChanged("");
        setserviceManagementChanged("");
        setbedManagementChanged("");
        setbillingChanged("");
        sethospitalManagementChanged("");
        setaccountsChanged("");
        setenqAndComplaintsChanged("");
        setShow(false);
        alert(res.data.Success);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const subadminList = () => {
    try {
      axios
        .get("http://localhost:8521/api/admin/getSubadminList")
        ?.then((res) => {
          if (res.status === 200) {
            setsubadminlist([...res.data.subadminList]);
            setFilteredCatList(res.data.subadminList);
            setPagination(res.data.subadminList);
          }
        })
        ?.catch((err) => {
          console.log(err);
          setsubadminlist(err.response.data.subadminList);
        });
    } catch (error) {
      console.log(error);
      setsubadminlist(error.response.data.subadminList);
    }
  };

  const editSubadminDetails = () => {
    try {
      const config = {
        url: `/admin/editSubadminDetails/${View?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
        data: {
          name: name,
          email: email,
          password: password,
          subadmin: subadminChanged ? subadmin : "",
          subadminChanged: subadminChanged,
          doctorManagement: doctorManagementChanged ? doctorManagement : "",
          doctorManagementChanged: doctorManagementChanged,
          staffManagement: staffManagementChanged ? staffManagement : "",
          staffManagementChanged: staffManagementChanged,
          patientManagement: patientManagementChanged ? patientManagement : "",
          patientManagementChanged: patientManagementChanged,
          docAppointment: docAppointmentChanged ? docAppointment : "",
          docAppointmentChanged: docAppointmentChanged,
          labManagement: labManagementChanged ? labManagement : "",
          labManagementChanged: labManagementChanged,
          labTechnician: labTechnicianChanged ? labTechnician : "",
          labTechnicianChanged: labTechnicianChanged,
          labReceptionist: labReceptionistChanged ? labReceptionist : "",
          labReceptionistChanged: labReceptionistChanged,
          labSampleCollector: labSampleCollectorChanged
            ? labSampleCollector
            : "",
          labSampleCollectorChanged: labSampleCollectorChanged,
          pharmacyManagement: pharmacyManagementChanged
            ? pharmacyManagement
            : "",
          pharmacyManagementChanged: pharmacyManagementChanged,
          // vendorManagement: vendorManagementChanged ? vendorManagement : "",
          // vendorManagementChanged: vendorManagementChanged,
          websiteManagement: websiteManagementChanged ? websiteManagement : "",
          websiteManagementChanged: websiteManagementChanged,
          serviceManagement: serviceManagementChanged ? serviceManagement : "",
          serviceManagementChanged: serviceManagementChanged,
          hospitalManagement: hospitalManagementChanged
            ? hospitalManagement
            : "",
          hospitalManagementChanged: hospitalManagementChanged,
          bedManagement: bedManagementChanged ? bedManagement : "",
          bedManagementChanged: bedManagementChanged,
          billing: billingChanged ? billing : "",
          billingChanged: billingChanged,
          accounts: accountsChanged ? accounts : "",
          accountsChanged: accountsChanged,
          enqAndComplaints: enqAndComplaintsChanged ? enqAndComplaints : "",
          enqAndComplaintsChanged: enqAndComplaintsChanged,
        },
      };
      axios(config)
        ?.then((res) => {
          if (res.status === 200) {
            // sessionStorage.setItem(
            //   "adminDetails",
            //   JSON.stringify(res.data.subadmin)
            // );
            subadminList();
            setname("");
            setemail("");
            setpassword("");
            setsubadmin(false);
            setdoctorManagement(false);
            setstaffManagement(false);
            setpatientManagement(false);
            setdocAppointment(false);
            setlabManagement(false);
            setlabReceptionist(false);
            setlabSampleCollector(false);
            setlabTechnician(false);
            setpharmacyManagement(false);
            // setvendorManagement(false);
            setwebsiteManagement(false);
            setserviceManagement(false);
            sethospitalManagement(false);
            setbedManagement(false);
            setbilling(false);
            setaccounts(false);
            setenqAndComplaints(false);
            setsubadminChanged("");
            setdoctorManagementChanged("");
            setstaffManagementChanged("");
            setpatientManagementChanged("");
            setdocAppointmentChanged("");
            setlabManagementChanged("");
            setlabTechnicianChanged("");
            setlabReceptionistChanged("");
            setlabSampleCollectorChanged("");
            setpharmacyManagementChanged("");
            // setvendorManagementChanged("");
            setwebsiteManagementChanged("");
            setserviceManagementChanged("");
            sethospitalManagementChanged("");
            setbedManagementChanged("");
            setbillingChanged("");
            setaccountsChanged("");
            setenqAndComplaintsChanged("");
            setShow4(false);
            alert(res.data.success);
          }
        })
        ?.catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const blockStatusSubadminDetails = (val) => {
    try {
      const config = {
        url: `/admin/blockSubadminDetails/${val?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "Content-Type": "application/json" },
      };
      axios(config)
        ?.then((res) => {
          if (res.status === 200) {
            subadminList();
          }
        })
        ?.catch((error) => {
          alert(error.response.data.error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubadminDetails = () => {
    try {
      axios
        .delete(
          `http://localhost:8521/api/admin/deletesubadminDetails/${View?._id}`
        )
        ?.then((res) => {
          if (res.status === 200) {
            subadminList();
            alert(res.data.success);
            setShow2(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [search, setSearch] = useState("");
  let [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = subadminlist.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // subadminList();
      setFilteredCatList([...subadminlist]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  useEffect(() => {
    if (!isAdminlogin) {
      alert("Authorization Denied");
      navigate("/admin");
    } else {
      subadminList();
    }
  }, [isAdminlogin, navigate]);

  //===================

  // Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Subadmin-list");

  const ExportToExcel = () => {
    if (fileName) {
      if (subadminlist.length != 0) {
        exportFromJSON({
          data: JSON.parse(JSON.stringify(subadminlist)),
          fileName,
          exportType,
        });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };
  console.log("subadminlist9098: ", subadminlist);

  return (
    <div style={{ padding: "1%" }}>
      {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
        Subadmin
      </h6> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <input
          placeholder="Search Subadmin"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
          onChange={(e) => setSearch(e.target.value)}
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

        <BiSolidUserCircle className="AddIcon" onClick={() => setShow(true)} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Add new subadmin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Name"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
            }}
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>

          <input
            placeholder="Password"
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>

          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={subadmin}
                    onChange={(e) => setsubadmin(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={doctorManagement}
                    onChange={(e) => setdoctorManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={staffManagement}
                    onChange={(e) => setstaffManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={patientManagement}
                    onChange={(e) => setpatientManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={docAppointment}
                    onChange={(e) => setdocAppointment(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={labManagement}
                    onChange={(e) => setlabManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={labReceptionist}
                    onChange={(e) => setlabReceptionist(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Receptionist
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={labSampleCollector}
                    onChange={(e) => setlabSampleCollector(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Sample Collector
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={labTechnician}
                    onChange={(e) => setlabTechnician(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Technician
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={pharmacyManagement}
                    onChange={(e) => setpharmacyManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={vendorManagement}
                    onChange={(e) => setvendorManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div> */}

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={websiteManagement}
                    onChange={(e) => setwebsiteManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={serviceManagement}
                    onChange={(e) => setserviceManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={hospitalManagement}
                    onChange={(e) => sethospitalManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={bedManagement}
                    onChange={(e) => setbedManagement(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Bed Management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={billing}
                    onChange={(e) => setbilling(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Billing
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={accounts}
                    onChange={(e) => setaccounts(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={enqAndComplaints}
                    onChange={(e) => setenqAndComplaints(e.target.checked)}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <div style={{ backgroundColor: "#20958c", color: "white" }}>
          <div
            style={{
              margin: "2% 2%",
              borderTop: "1px solid lightgrey",
              padding: "4% 4% 2% 4%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "6px 12px",
                border: "1px solid white",
              }}
              onClick={handleClose}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "6px 12px",
                border: "1px solid white",
              }}
              onClick={(e) => registerSubadmin(e)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Delete subadmin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Are you sure? You want to perform delete operation...</h6>
        </Modal.Body>
        <div style={{ backgroundColor: "#20958c", color: "white" }}>
          <div
            style={{
              margin: "2% 2%",
              borderTop: "1px solid lightgrey",
              padding: "4% 4% 2% 4%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "6px 12px",
                border: "1px solid white",
              }}
              onClick={(e) => handleClose2()}
            >
              CANCEL
            </button>

            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                padding: "6px 12px",
                border: "1px solid white",
              }}
              onClick={(e) => deleteSubadminDetails()}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Edit subadmin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder={View?.name}
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
            }}
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>

          <input
            placeholder={View?.email}
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>

          <input
            placeholder={View?.password}
            style={{
              width: "100%",
              padding: "8px 20px",
              borderRadius: "0px",
              border: "1px solid #ebebeb",
              backgroundColor: "#ebebeb",
              marginTop: "4%",
            }}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          ></input>

          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={subadminChanged ? subadmin : View?.subadmin}
                    onChange={(e) => {
                      setsubadminChanged("changed");
                      setsubadmin(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      doctorManagementChanged
                        ? doctorManagement
                        : View?.doctorManagement
                    }
                    onChange={(e) => {
                      setdoctorManagementChanged("changed");
                      setdoctorManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      staffManagementChanged
                        ? staffManagement
                        : View?.staffManagement
                    }
                    onChange={(e) => {
                      setstaffManagementChanged("changed");
                      setstaffManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      patientManagementChanged
                        ? patientManagement
                        : View?.patientManagement
                    }
                    onChange={(e) => {
                      setpatientManagementChanged("changed");
                      setpatientManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      docAppointmentChanged
                        ? docAppointment
                        : View?.docAppointment
                    }
                    onChange={(e) => {
                      setdocAppointmentChanged("changed");
                      setdocAppointment(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      labManagementChanged ? labManagement : View?.labManagement
                    }
                    onChange={(e) => {
                      setlabManagementChanged("changed");
                      setlabManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      labReceptionistChanged
                        ? labReceptionist
                        : View?.labReceptionist
                    }
                    onChange={(e) => {
                      setlabReceptionistChanged("changed");
                      setlabReceptionist(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Receptionist
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      labSampleCollectorChanged
                        ? labSampleCollector
                        : View?.labSampleCollector
                    }
                    onChange={(e) => {
                      setlabSampleCollectorChanged("changed");
                      setlabSampleCollector(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Sample Collector
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      labTechnicianChanged ? labTechnician : View?.labTechnician
                    }
                    onChange={(e) => {
                      setlabTechnicianChanged("changed");
                      setlabTechnician(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Technician
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      pharmacyManagementChanged
                        ? pharmacyManagement
                        : View?.pharmacyManagement
                    }
                    onChange={(e) => {
                      setpharmacyManagementChanged("changed");
                      setpharmacyManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      vendorManagementChanged
                        ? vendorManagement
                        : View?.vendorManagement
                    }
                    onChange={(e) => {
                      setvendorManagementChanged("changed");
                      setvendorManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div> */}

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      websiteManagementChanged
                        ? websiteManagement
                        : View?.websiteManagement
                    }
                    onChange={(e) => {
                      setwebsiteManagementChanged("changed");
                      setwebsiteManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      serviceManagementChanged
                        ? serviceManagement
                        : View?.serviceManagement
                    }
                    onChange={(e) => {
                      setserviceManagementChanged("changed");
                      setserviceManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      hospitalManagementChanged
                        ? hospitalManagement
                        : View?.hospitalManagement
                    }
                    onChange={(e) => {
                      sethospitalManagementChanged("changed");
                      sethospitalManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      bedManagementChanged ? bedManagement : View?.bedManagement
                    }
                    onChange={(e) => {
                      setbedManagementChanged("changed");
                      setbedManagement(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Bed management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={billingChanged ? billing : View?.billing}
                    onChange={(e) => {
                      setbillingChanged("changed");
                      setbilling(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Billing
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={accountsChanged ? accounts : View?.accounts}
                    onChange={(e) => {
                      setaccountsChanged("changed");
                      setaccounts(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      enqAndComplaintsChanged
                        ? enqAndComplaints
                        : View?.enqAndComplaints
                    }
                    onChange={(e) => {
                      setenqAndComplaintsChanged("changed");
                      setenqAndComplaints(e.target.checked);
                    }}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <div
          style={{
            margin: "2% 2%",
            borderTop: "1px solid lightgrey",
            padding: "4% 4% 2% 4%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "600",
              border: "1px solid white",
              padding: "6px 12px",
            }}
            onClick={() => handleClose4()}
          >
            CANCEL
          </button>

          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontWeight: "600",
              border: "1px solid white",
              padding: "6px 12px",
            }}
            onClick={() => editSubadminDetails()}
          >
            SUBMIT
          </button>
        </div>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "30px", fontWeight: "400" }}>
            {" "}
            Assigned Modules
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "#ebebeb",
              color: "grey",
              padding: "4%",
              marginTop: "4%",
              borderRadius: "0px",
            }}
          >
            <label style={{ fontWeight: "500", marginTop: "2%" }}>
              Assigned Modules
            </label>
            <div className="row">
              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.subadmin}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Subadmin
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.doctorManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctor management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.staffManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Staff management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.patientManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Patient management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.docAppointment}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Doctors appointment
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.labManagement}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.labReceptionist}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Receptionist
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.labSampleCollector}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Sample Collector
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.labTechnician}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Lab Technician
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.pharmacyManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Pharmacy management
                  </label>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.vendorManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Vendor management
                  </label>
                </div>
              </div> */}

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.websiteManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Website management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.serviceManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Service management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.hospitalManagement}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Hospital management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.bedManagement}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Bed management
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.billing}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Billing
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" checked={View?.accounts}></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Accounts
                  </label>
                </div>
              </div>

              <div className="col-lg-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={View?.enqAndComplaints}
                  ></input>
                  <label
                    style={{
                      fontWeight: "500",
                      marginTop: "2%",
                      marginLeft: "2%",
                    }}
                  >
                    Enquiries & Complaints
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Table style={{ marginTop: "1%" }}>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            <th>Sl.No</th>
            <th>Subadmin Name</th>
            <th>Email-Id</th>
            <th>Assigned Modules</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {FilteredCatList?.slice(
            pagesVisited,
            pagesVisited + usersPerPage
          )?.map((details, i) => {
            return (
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <td>{++i}</td>
                <td>{details?.name}</td>
                <td>{details?.email}</td>
                <td style={{ textAlign: "center" }}>
                  <TbView360
                    onClick={() => {
                      setView(details);
                      setShow1(true);
                    }}
                    style={{ color: "#20958c", fontSize: "24px" }}
                  />
                </td>
                <td>
                  {passwordView ? (
                    <>
                      <h6
                        style={{
                          alignItems: "center",
                          color: "#20958c",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        Password{" "}
                        <span style={{ color: "orange" }}>
                          {details?.password}
                        </span>
                      </h6>
                      <ImCancelCircle
                        style={{ color: "#20958c", fontSize: "24px" }}
                        onClick={() => setpasswordView(!passwordView)}
                      />
                    </>
                  ) : (
                    <FaEye
                      style={{ color: "#20958c", fontSize: "24px" }}
                      onClick={() => setpasswordView(!passwordView)}
                    />
                  )}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <MdEdit
                    style={{
                      color: "white",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#20958c",
                      padding: "2px",
                      fontSize: "50px",
                      borderRadius: "4px",
                    }}
                    onClick={() => {
                      setView(details);
                      setShow4(true);
                    }}
                  />
                  <AiFillDelete
                    style={{
                      color: "white",
                      marginRight: "4px",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "red",
                      padding: "2px",
                      fontSize: "50px",
                      borderRadius: "4px",
                    }}
                    onClick={() => {
                      setView(details);
                      handleShow2();
                    }}
                  />

                  {details?.blocked ? (
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                      onClick={() => {
                        blockStatusSubadminDetails(details);
                      }}
                    >
                      UNBLOCK
                    </button>
                  ) : (
                    <button
                      style={{
                        fontSize: "12px",
                        border: "none",
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "600",
                        borderRadius: "4px",
                      }}
                      onClick={() => {
                        blockStatusSubadminDetails(details);
                      }}
                    >
                      BLOCK
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div style={{ float: "left" }} className="my-3 d-flex justify-end">
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            onChange={(event, value) => {
              changePage(value - 1);
            }}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}
