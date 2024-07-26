import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { Label } from "@material-ui/icons";

function ReferFromClinicPatientList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setdata] = useState([]);
  const getRefPatientList = () => {
    axios
      .get("http://localhost:8521/api/Clinic/allreferalpatientslist")
      .then(function (response) {
        setdata(
          response.data.refpatient?.filter((ele) => ele?.isRefer === true)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [PatientType, setPatientType] = useState("");
  const [PatientDetails, setPatientDetails] = useState("");
  const [medicinesTaking, setmedicinesTaking] = useState();
  const [medications, setmedications] = useState(false);
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [alternatePhoneNumber, setalternatePhoneNumber] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();

  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [PatientAge18, setPatientAge18] = useState("");
  const [relativeName, setrelativeName] = useState("");
  const [relationWithPatient, setrelationWithPatient] = useState("");
  const [relativePhone, setrelativePhone] = useState("");
  const [AdmitDate, setAdmitDate] = useState("");
  const [followUpsDate, setfollowUpsDate] = useState("");
  const [allergy, setallergy] = useState("");

  const [haveInsurance, sethaveInsurance] = useState("");
  const [insuranceDoc, setinsuranceDoc] = useState("");
  const [insuranceProviderCompany, setinsuranceProviderCompany] = useState("");
  const [insuranceAmt, setinsuranceAmt] = useState("");
  const [clickedAddAllergyBtn, setclickedAddAllergyBtn] = useState("");
  const [Aadharcard, setAadharcard] = useState("");
  const [Aadharno, setAadharno] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [patientAllergies, setpatientAllergies] = useState([]);

  useEffect(() => {
    if (PatientDetails) {
      setpatientfirstname(PatientDetails?.PatientsFname || "");
      setpatientlastname(PatientDetails?.PatientsLname || "");
      setgender(PatientDetails?.Gender || "");
      setmobileno(PatientDetails?.PhoneNumber || "");
      setemail(PatientDetails?.Email || "");
      setDOB(PatientDetails?.DOB || "");
    }
  }, [PatientDetails]);

  console.log("PatientDetails",PatientDetails);

    //Regex
    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const relativepattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    const mobilePattern = /^[0-9]{10}$/;
    const pincodePattern = /^[0-9]{6}$/;
    const aadharnoPattern = /^[0-9]{12}$/;
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const ReferpatientOPDregister = async (e) => {
    e.preventDefault();
    if (!patientfirstname) {
      return alert("Enter your first name");
    } else if (!namePattern.test(patientfirstname)) {
      return alert("Enter a valid first name (letters only)");
    }
    if (!patientlastname) {
      return alert("Enter your last name");
    } else if (!namePattern.test(patientlastname)) {
      return alert("Enter a valid last name  letters only)");
    }
    if (!gender) {
      return alert("Select Your gender..!");
    }
    if (!mobileno) {
      return alert("Enter mobile number..!");
    } else if (!mobilePattern.test(mobileno)) {
      return alert("Enter a valid 10-digit mobile number");
    }
    if (!alternatePhoneNumber) {
      return alert("Enter alternate mobile number..!");
    } else if (!mobilePattern.test(alternatePhoneNumber)) {
      return alert("Enter a valid 10-digit mobile number");
    }
    if (!email) {
      return alert("Enter Email Id");
    } else if (!emailPattern.test(email)) {
      return alert("Enter a valid Gmail address (e.g., example@gmail.com)");
    }
    if (!DOB) {
      return alert("Select Birth date and Year.!");
    }
    if (!Address) {
      return alert("Enter Street Address..!");
    }
    if (!City) {
      return alert("Enter City name..!");
    } else if (!namePattern.test(City)) {
      return alert(
        "Enter a valid City name (2-30 characters, letters only, optional hyphen or apostrophe)"
      );
    }
    if (!State) {
      return alert("Enter State name..!");
    } else if (!namePattern.test(State)) {
      return alert(
        "Enter a valid State name (2-30 characters, letters only, optional hyphen or apostrophe)"
      );
    }
    if (!Zipcode) {
      return alert("Enter Zipcode..!");
    } else if (!pincodePattern.test(Zipcode)) {
      return alert("Enter a valid 6-digit Indian Zipcode");
    }
    if (!password) {
      return alert("Enter password..!");
    } else if (!passwordPattern.test(password)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if (!conpassword) {
      return alert("Enter Confirm password..!");
    } else if (!passwordPattern.test(conpassword)) {
      return alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character, and be at least 8 characters long."
      );
    }
    if (password !== conpassword) {
      return alert("Passwords do not match. Please check again.");
    }
    if (!MaritalStatus) {
      return alert("Please Select Marital Status..!");
    }
    if (!PatientAge18) {
      return alert("Please Select and Confirm +18..!");
    }
    if (!Aadharcard) {
      return alert("Please Upload Aadhar Card..!");
    }
    if (!Aadharno) {
      return alert("Enter Aadharno..!");
    } else if (!aadharnoPattern.test(Aadharno)) {
      return alert("Enter a valid 12-digit Indian aadhar no");
    }
    if (!relationWithPatient) {
      return alert("Enter Relation with patient..!");
    } else if (!relativepattern.test(relationWithPatient)) {
      return alert("Enter a valid Relation with patient)");
    }
    if (!relativeName) {
      return alert("Enter Relative name..!");
    } else if (!relativepattern.test(relativeName)) {
      return alert("Enter a valid Relative name )");
    }
    if (!relativePhone) {
      return alert("Enter Relative mobile no..!");
    } else if (!mobilePattern.test(relativePhone)) {
      return alert("Enter a valid mobile no )");
    }
    if (!AdmitDate) {
      return alert("Select Admission Date..!");
    }
    if (!followUpsDate) {
      return alert("Select Follow-up Date..!");
    }
    if (!haveInsurance) {
      return alert("Select Insurance ");
    }
    if (haveInsurance === "yes") {
      if (!insuranceProviderCompany) {
        return alert("Enter Helth Insurance Company Name..!");
      }
      if (!insuranceAmt) {
        return alert("Enter Helth Insurance Amount..!");
      }
    }

    if (medications === true) {
      if (!medicinesTaking) {
        return alert("Please Enter medication name");
      }
    }
    try {
      const formdata =new FormData()
      formdata.set("Firstname", patientfirstname);
      formdata.set("Lastname", patientlastname);
      formdata.set("Gender", gender);
      formdata.set("DOB", DOB);
      formdata.set("profilepic", ProfilePic);
      formdata.set("PhoneNumber", mobileno);
      formdata.set("alternatePhoneNumber", alternatePhoneNumber);
      formdata.set("Email", email);
      formdata.set("Address1", Address);
      formdata.set("Address2", Address1);
      formdata.set("City1", City);
      formdata.set("State1", State);
      formdata.set("Zipcode", Zipcode);
      formdata.set("MaritalStatus", MaritalStatus);
      formdata.set("PatientAge18", PatientAge18);
      formdata.set("relativeName", relativeName);
      formdata.set("relationWithPatient", relationWithPatient);
      formdata.set("relativePhone", relativePhone);
      formdata.set("AdmitDate", AdmitDate);
      formdata.set("followUpsDate", followUpsDate);
      formdata.set("haveInsurance", haveInsurance);
      formdata.set("insuranceDoc", insuranceDoc);
      formdata.set("insuranceProviderCompany", insuranceProviderCompany);
      formdata.set("insuranceAmt", insuranceAmt);
      formdata.set("Password", password);
      formdata.set("ConfirmPassword", conpassword);
      formdata.set("registrationType", PatientType);
      formdata.set("registeredFrom", "staff");
      formdata.set("patientAllergies", patientAllergies);
      formdata.set("takingAnyMedication", medications);
      formdata.set("medicinesTaking", medicinesTaking);
      formdata.set("Aadharcard", Aadharcard);
      formdata.set("Aadharno", Aadharno);
      formdata.set("ReferClinicId", Aadharno);
      const config = {
        url: "/user/addPatient",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Refer Patient Successfully");
        handleClose();
        PatientApprove();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const PatientApprove = async () => {
    try {
      const config = {
        url: "/patientapproved/" + PatientDetails?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/Clinic",
      };
      const res = await axios(config);
      if (res.status === 200) {
        getRefPatientList();
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const [fileName, setfileName] = useState("Clinical-Patient-List");

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

  const uniqueDates = new Set();
  const [Department, setDepartment] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [DOA, setDOA] = useState("");
  const [TOA, setTOA] = useState("");

  // Get Hospital Department
  const [GetDepartmentData, setGetDepartmentData] = useState([]);
  const GetDepartment = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getDepartment"
      );
      if (res.status === 200) {
        setGetDepartmentData(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Doctors
  const [Doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        setDoctors(
          response.data.DoctorsInfo?.filter(
            (data) => data.DoctorType === "hospital"
          )
        );
      })
      .catch(function (error) {
        console.log(error);
        setDoctors(error.response.data.DoctorsInfo);
      });
  };

  const [selectedDoctorList1, setselectedDoctorList1] = useState([]);
  useEffect(() => {
    if (Department && Doctors?.length > 0) {
      const xyz = Doctors?.filter((doc) => doc?.Department === Department);
      setselectedDoctorList1(xyz);
      setTOA("");
    }
  }, [Department]);

  const [Doctorschedule, setDoctorschedule] = useState();
  useEffect(() => {
    setDoctorschedule(Doctors?.find((doc) => doc._id === Doctor));
    setTOA("");
  }, [Doctor, Department]);

  const [selecteTimearray, setselecteTimearray] = useState([]);
  useEffect(() => {
    if (DOA) {
      const asd = Doctorschedule?.scheduleList.filter(
        (item) => item.scheduleDate == DOA && item.bookingstatus === "Vacant"
      );
      setselecteTimearray(asd);
    }
  }, [DOA]);


  useEffect(() => {
    setpatientAllergies(patientAllergies);
    setclickedAddAllergyBtn("");
    setallergy("");
  }, [clickedAddAllergyBtn]);

  useEffect(() => {
    getRefPatientList();
    GetDepartment();
    getDoctors();
  }, []);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mb-4">
        Clinic-Doctor Refer Patient List
      </h4>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
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
          <Table bordered>
            <thead>
              <tr className="admin-table-head">
                <th className="fw-bold">Name</th>
                <th className="fw-bold">Gender</th>
                <th className="fw-bold">Address</th>
                <th className="fw-bold">Mobile</th>
                <th className="fw-bold">DOB</th>
                <th className="fw-bold">Blood Group </th>
                <th className="fw-bold">Diesease </th>
                <th className="fw-bold">Approve </th>
              </tr>
            </thead>

            <tbody>
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr className="admin-table-row">
                          <td>{`${item?.PatientsFname} ${item?.PatientsLname}`}</td>
                          <td>{item?.Gender}</td>
                          <td>{item?.Address1}</td>
                          <td>{item?.PhoneNumber}</td>
                          <td>{moment(item?.DOB).format("DD-MM-YYYY")}</td>
                          <td>{item?.BloodGroup}</td>
                          <td>
                            <div
                              className="Diseases-btn"
                              style={{
                                color: "red",
                                border: "1px solid green",
                              }}
                            >
                              {item?.InjuryCondition}
                            </div>
                          </td>
                          <td>
                            {item?.isApproved === false ? (
                              <Button
                                onClick={() => {
                                  handleShow();
                                  setPatientDetails(item);
                                }}
                                variant="success"
                              >
                                Approve
                              </Button>
                            ) : (
                              <p>Refer Approved</p>
                            )}
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr className="admin-table-row">
                          <td>{`${item?.PatientsFname} ${item?.PatientsLname}`}</td>
                          <td>{item?.Gender}</td>
                          <td>{item?.Address1}</td>
                          <td>{item?.PhoneNumber}</td>
                          <td>{moment(item?.DOB).format("DD-MM-YYYY")}</td>
                          <td>{item?.BloodGroup}</td>
                          <td>
                            <div
                              className="Diseases-btn"
                              style={{
                                color: "red",
                                border: "1px solid green",
                              }}
                            >
                              {item?.InjuryCondition}
                            </div>
                          </td>
                          <td>
                            {item?.isApproved === false ? (
                              <Button
                                onClick={() => {
                                  handleShow();
                                  setPatientDetails(item);
                                }}
                                variant="success"
                              >
                                Approve
                              </Button>
                            ) : (
                              <p>Refer Approved</p>
                            )}
                          </td>
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
      </div>
      <Modal 
      show={show} 
      onHide={handleClose} 
      size="lg"
      backdrop="static"
      keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Approve Referal Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="container"
            style={{ backgroundColor: "white", padding: "10px" }}
          >
            <div className="row">
              <div className="col-md-6">
                <Form.Label>
                  Patient Type <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setPatientType(e.target.value)}>
                  <option value="">Select Type</option>
                  <option value="OPD">OPD</option>
                  <option value="IPD">IPD</option>
                </Form.Select>
              </div>
            </div>
            {PatientType === "OPD" && (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">Department</label>
                      <br />
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option>select department</option>
                        {GetDepartmentData?.map((dep) => (
                          <option value={dep?.DepartmentName}>
                            {dep?.DepartmentName}
                          </option>
                        ))}
                      </Form.Select>
                    </Form>
                  </div>
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">Doctor</label>
                      <br />
                      <Form.Select onChange={(e) => setDoctor(e.target.value)}>
                        <option>Select</option>
                        {selectedDoctorList1?.map((doc) => (
                          <option value={doc?._id}>
                            {doc?.Firstname}&nbsp;{doc?.Lastname}
                          </option>
                        ))}
                      </Form.Select>
                    </Form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">Date of Appointment</label>
                      <br />
                      <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => setDOA(e.target.value)}
                      >
                        <option>select appointment</option>
                        {Doctorschedule?.scheduleList
                          ?.filter(
                            (schedd) =>
                              moment(schedd?.scheduleDate).isSameOrAfter(
                                moment(),
                                "day"
                              ) && schedd?.bookingstatus === "Vacant"
                          )
                          ?.map((shedul) => {
                            const formattedDate = moment(
                              shedul?.scheduleDate
                            ).format("DD-MM-YYYY");
                            if (!uniqueDates.has(formattedDate)) {
                              uniqueDates.add(formattedDate);
                              return (
                                <option
                                  value={shedul?.scheduleDate}
                                  key={shedul?.scheduleDate}
                                >
                                  {formattedDate}
                                </option>
                              );
                            }
                            return null; // Return null for duplicates, so they are not rendered
                          })}
                      </Form.Select>
                    </Form>
                  </div>
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">Time of Appointment</label>
                      <br />
                      <Form.Select onChange={(e) => setTOA(e.target.value)}>
                        <option>Select</option>
                        {selecteTimearray?.map((shedul) => (
                          <option
                            value={`${shedul?.startTime}-${shedul?.endTime}-${shedul?._id}`}
                          >
                            {shedul?.startTime}-{shedul?.endTime}
                          </option>
                        ))}
                      </Form.Select>
                    </Form>
                  </div>
                </div>
              </>
            )}

            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">First Name :</label>
                  <br />
                  <Form.Control
                  placeholder="first name"
                    type="text"
                    value={patientfirstname}
                    onChange={(e) => setpatientfirstname(e.target.value)}
                  />
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Last Name :</label>
                  <br />
                  <Form.Control
                  placeholder="last name"
                    type="text"
                    value={patientlastname}
                    onChange={(e) => setpatientlastname(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Gender :</label>
                  <br />
                  <Form.Select
                    type="text"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Mobile No :</label>
                  <br />
                  <Form.Control
                  placeholder="mobile no"
                    type="text"
                    value={mobileno}
                    maxLength={10}
                    onChange={(e) => setmobileno(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Alternative Mobile No :</label>
                  <br />
                  <Form.Control
                    placeholder="Alternative number..!"
                    maxLength={10}
                    type="text"
                    value={alternatePhoneNumber}
                    onChange={(e) => setalternatePhoneNumber(e.target.value)}
                  />
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Email Id :</label>
                  <br />
                  <Form.Control
                  placeholder="Enter Email Id...!"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Date of Birth :</label>
                  <br />
                  <Form.Control
                    type="date"
                    max={new Date().toISOString().split("T")[0]}
                    value={DOB}
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Profile Pic :</label>
                  <br />
                  <Form.Control
                    type="file"
                    value={email}
                    accept="image/*"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Address :</label>
                  <br />
                  <Form.Control
                    placeholder="Street Address"
                    type="text"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Street Address Line 2 :</label>
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Street Address Line 2"
                    value={Address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> City :</label>
                  <br />
                  <Form.Control
                    placeholder="City"
                    type="text"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">State :</label>
                  <br />
                  <Form.Control
                    placeholder=" State / Province"
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Zip Code :</label>
                  <br />
                  <Form.Control
                    placeholder="Postal / Zip Code"
                    maxLength={6}
                    type="text"
                    value={Zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Password :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      style={{ paddingRight: "30px" }} // Add padding to the right to make space for the icon
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? "🙈" : "🙉"}
                    </span>
                  </div>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Confirm Password :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      placeholder="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      value={conpassword}
                      onChange={(e) => setconpassword(e.target.value)}
                      style={{ paddingRight: "30px" }} // Add padding to the right to make space for the icon
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? "🙈" : "🙉"}
                    </span>
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Marrital Status :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Select
                      value={MaritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorce">Divorce</option>
                      <option value="Complicated">Complicated</option>
                    </Form.Select>
                  </div>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Age is 18+ :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Select
                      value={PatientAge18}
                      onChange={(e) => setPatientAge18(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1"> Aadhar Card :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) => setAadharcard(e.target.files[0])}
                    />
                  </div>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Aadhar No :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Select
                      placeholder="Enter Aadhar Card No"
                      maxLength={12}
                      value={Aadharno}
                      onChange={(e) => setAadharno(e.target.value)}
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Relation with patient :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      placeholder="Relation with patient"
                      type="text"
                      value={relationWithPatient}
                      onChange={(e) => setrelationWithPatient(e.target.value)}
                    />
                  </div>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Relative Name :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Select
                      placeholder="Relative Name"
                      value={relativeName}
                      onChange={(e) => setrelativeName(e.target.value)}
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Relation with patient :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      placeholder="Relative Mobileno."
                      type="text"
                      maxLength={10}
                      value={relativePhone}
                      onChange={(e) => setrelativePhone(e.target.value)}
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Admission Date :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      placeholder="Relative Mobileno."
                      type="date"
                      onChange={(e) => setAdmitDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </Form>
              </div>
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Follow-up Date :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Control
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setfollowUpsDate(e.target.value)}
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form>
                  <br />
                  <label className="mb-1">Health Insurance* :</label>
                  <br />
                  <div style={{ position: "relative" }}>
                    <Form.Select
                      placeholder="Relative Mobileno."
                      type="date"
                      value={haveInsurance}
                      onChange={(e) => sethaveInsurance(e.target.value)}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </div>
                </Form>
              </div>
              {haveInsurance === "yes" && (
                <>
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">
                        Health Insurance Doc(if available) :
                      </label>
                      <br />
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          type="file"
                          accept="image/*"
                          onChange={(e) => setinsuranceDoc(e.target.files[0])}
                        />
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">
                      Health Insurance Provider :
                      </label>
                      <br />
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          type="text"
                          placeholder="Insurance Provider Name.."
                          onChange={(e) =>
                            setinsuranceProviderCompany(e.target.value)
                          }
                        />
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-6">
                    <Form>
                      <br />
                      <label className="mb-1">
                      Health Insurance Amount :
                      </label>
                      <br />
                      <div style={{ position: "relative" }}>
                        <Form.Control
                          type="Number"
                          placeholder="Insurance Amount"
                          onChange={(e) => setinsuranceAmt(e.target.value)}
                        />
                      </div>
                    </Form>
                  </div>
                </>
              )}
            </div>
            <br/>
            <div className="row">
             
            <div className="col-lg-6">
              Taking any medications, currently?
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <div className="row">
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications === true}
                    onChange={() => setmedications(true)}
                  />
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications === false}
                    onChange={() => setmedications(false)}
                  />
                  No
                </div>
              </div>
            
            </div>
            {medications ? (
              <>
                <label style={{ marginTop: "4%" }}>
                  If yes, please list it here
                </label>
                <div
                  className="col-lg-12"
                  style={{ color: "white", textAlign: "center" }}
                >
                  <textarea
                    cols={6}
                    placeholder="Please list all medications"
                    value={medicinesTaking}
                    onChange={(e) => setmedicinesTaking(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                    }}
                  />
                </div>
              </>
            ) : null}
            </div>
            <div className="row">
            <div className="col-lg-6">
              <div
                className="row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "6%" }}>
                    Allergies:
                  </h6>
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    value={allergy}
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setallergy(e.target.value)}
                    placeholder="write allergy "
                  />
                </div>
                <div className="col-lg-3">
                  <Button
                    variant="warning"
                    onClick={() => {
                      patientAllergies.push(allergy);
                      setclickedAddAllergyBtn("clicked");
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3">
              <div style={{ padding: "5px", backgroundColor: "white" }}>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Allergies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientAllergies?.map((item, i) => {
                      return (
                        <tr>
                          <td>{++i}</td>
                          <td>{item}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            // onClick={(e) => ReferpatientOPDregister(e)}
          >
            <FontAwesomeIcon icon={faCheck} className="fs-5 me-2" />
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ReferFromClinicPatientList;
