import React, { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const Bookappointment = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("PatientUser"));
  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [ConsultantDr, setConsultantDr] = useState();
  const [ConsultantDrInfo, setConsultantDrInfo] = useState();
  const [DateofApp, setDateofApp] = useState();
  const [StatrtTime, setStatrtTime] = useState(null);
  const [EndTime, setEndTime] = useState("");
  const [Condition, setCondition] = useState();
  const [Note, setNote] = useState();
  const [Document, setDocument] = useState();
  const [medicalReason, setmedicalReason] = useState();
  const [Others, setOthers] = useState(false);
  const [SelectedTime, setSelectedTime] = useState({});
  console.log("SelectedTime",SelectedTime);
  useEffect(() => {
    if (StatrtTime) {
      setSelectedTime(JSON?.parse(StatrtTime));
    }
  }, [StatrtTime]);

  console.log("DateofApp", DateofApp);
  console.log("StatrtTime", StatrtTime);

  function selectedDocOck(val) {
    let docInfo = Doctors.find((item) => item?._id === val);
    setConsultantDrInfo(docInfo);
  }

  console.log("ConsultantDr", ConsultantDr);
  console.log("ConsultantDrInfo", ConsultantDrInfo);

  const formdata = new FormData();
  const generateRandomNumber = () => {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };
  const prefix = "JAN";
  const randomNumber = generateRandomNumber();
  const [BookingStatus, setBookingStatus] = useState("");
  const [DocDept, setDocDept] = useState("");

  const BookAppointment = async (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
 
    if (Others) {
      if (!nameRegex.test(patientfirstname)) {
        return alert('Invalid first name. Only letters are allowed, and it should be between 2 and 30 characters long.');
      }
      if (!nameRegex.test(patientlastname)) {
        return alert('Invalid last name. Only letters are allowed, and it should be between 2 and 30 characters long.');
      }
      if (!gender) {
        return alert("Please select gender.");
      }
      if (!phoneRegex.test(mobileno)) {
        return alert('Invalid phone number. It should be exactly 10 digits long.');
      }
      if (!Address) {
        return alert("Please enter your address.");
      }
      if (!emailRegex.test(email)) {
        return alert('Invalid email address.');
      }
      if (!DOB) {
        return alert("Please select date of birth.");
      }
    }

    if (!DocDept) {
      return alert("Please Select Department");
    }
    if (!ConsultantDr) {
      return alert("Please Select Doctor");
    }
    if (!DateofApp) {
      return alert("Please Select Appointment Date");
    }
    if (!StatrtTime) {
      return alert("Please Select Appointment Time");
    }
    if (!medicalReason) {
      return alert("Please Enter Medical Reason");
    }
    if (!Condition) {
      return alert("Please Enter Patient Condition");
    }
    if (!Note) {
      return alert("Please Write Note about Patient");
    }
    if (!Document) {
      return alert("Please Upload Patient Medical Documnet");
    }

    formdata.append("token", prefix + randomNumber);
    formdata.append("PatientId", user?._id);
    formdata.append("patientDBId", user?._id);
    formdata.append("Firstname", Others ? patientfirstname : user?.Firstname);
    formdata.append("Lastname", Others ? patientlastname : user?.Lastname);
    formdata.append("Gender", Others ? gender : user?.Gender);
    formdata.append("DOB", Others ? DOB : user?.DOB);
    formdata.append("PhoneNumber", Others ? mobileno : user?.PhoneNumber);
    formdata.append("Email", Others ? email : user?.Email);
    formdata.append("Address1", Others ? Address : user?.Address1);
    formdata.append("ConsultantDoctor", ConsultantDr);
    formdata.append("Dateofappointment", DateofApp);
    formdata.append("starttime", SelectedTime?.startTime);
    formdata.append("endtime", SelectedTime?.endTime);
    formdata.append("Condition", Condition);
    formdata.append("Note", Note);
    formdata.append("Document", Document);
    formdata.append("medicalReason", medicalReason);
    formdata.append("ScheduleId", SelectedTime?._id);
    formdata.append("appointmentType", Others ? "OTHERS" : "SELF");
    try {
      const config = {
        url: "/user/addappointment",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert("Appointment Booked Successfully");
        navigate("/yourappointment");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [Doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    axios
      .get("http://localhost:8521/api/Doctor/getDoctorsList")
      .then(function (response) {
        // handle success
        setDoctors(response.data.DoctorsInfo);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

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

  const Doctorschedule = Doctors?.find((doc) => doc?._id === ConsultantDr);
  const uniqueDates = new Set();

  const [selecteTimearray, setselecteTimearray] = useState([]);
  useEffect(() => {
    if (DateofApp) {
      const asd = Doctorschedule?.scheduleList.filter(
        (item) => item.scheduleDate == DateofApp && item.bookingstatus === "Vacant"
      );
      setselecteTimearray(asd);
    }
  }, [DateofApp]);
  useEffect(() => {
    getDoctors();
    GetDepartment();
  }, []);

  return (
    <div>
      <div>
        <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-2">
          Book Appointment
        </h4>
        <Container className="">
          <div className="d-flex justify-content-center">
            <Form style={{ marginTop: "50px" }}>
              <div className="row" style={{ marginBottom: "2%" }}>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-2">
                          <input
                            type="checkbox"
                            checked={Others}
                            onChange={() => setOthers(!Others)}
                          ></input>
                        </div>
                        <div className="col-lg-10">Book for Others.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {Others ? (
                <>
                  <h4 className=" fw-bold">Enter Personal Details</h4>
                  <div className="d-flex justify-content-between gap-2 flex-1 mb-3">
                    <FloatingLabel
                      className="width-respns"
                      style={{ width: "400px", marginBottom: "10px" }}
                      controlId="floatingEmail"
                      label="First Name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setpatientfirstname(e.target.value)}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      className="width-respns"
                      style={{ width: "400px" }}
                      controlId="floatingPassword"
                      label="Last Name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setpatientlastname(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>
                  <div className="d-flex justify-content-between flex-1 mb-3">
                    <Form.Select
                      className="width-respns"
                      style={{ width: "400px", marginBottom: "10px" }}
                      aria-label="Default select example"
                      onChange={(e) => setgender(e.target.value)}
                    >
                      <option>Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Form.Select>

                    <FloatingLabel
                      className="width-respns"
                      style={{ width: "400px" }}
                      controlId="floatingNumber"
                      label="Phone Number"
                    >
                      <Form.Control
                        type="number"
                        placeholder="Phone Number"
                        onChange={(e) => setmobileno(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>
                  <FloatingLabel
                    className="mb-3 "
                    controlId="floatingStreetAddress"
                    label="Street Address"
                  >
                    <Form.Control
                      className="width-respns width-respns-768px"
                      style={{ width: "820px", height: "100px" }}
                      type="text"
                      placeholder="Street Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FloatingLabel>
                  <div className="d-flex justify-content-between flex-1 mb-3">
                    <FloatingLabel
                      className="width-respns"
                      style={{ width: "400px", marginBottom: "10px" }}
                      controlId="floatingEmail"
                      label="Email"
                    >
                      <Form.Control
                        type="Email"
                        placeholder="Email"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </FloatingLabel>

                    <FloatingLabel
                      className="width-respns"
                      style={{ width: "400px", marginBottom: "10px" }}
                      controlId="floatingEmail"
                      label="Birth Date"
                    >
                      <Form.Control
                        type="date"
                        placeholder="Birth Date"
                        onChange={(e) => setDOB(e.target.value)}
                      />
                    </FloatingLabel>
                  </div>{" "}
                </>
              ) : null}

              <h6 className="fw-bold">Appointment Details</h6>

              <div className="d-flex justify-content-between flex-1 mb-3">
                <div>
                  <Form.Select
                    className="width-respns"
                    style={{
                      width: "400px",
                      marginBottom: "10px",
                      height: "50px",
                    }}
                    aria-label="Default select example"
                    onChange={(e) => setDocDept(e.target.value)}
                  >
                    <option value="">Select department</option>
                    {/* {[
                      ...new Set(Doctors?.map((item) => item?.Department)),
                    ]?.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))} */}
                    {GetDepartmentData?.map((dep) => (
                      <option value={dep?.DepartmentName}>
                        {dep?.DepartmentName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    className="width-respns"
                    style={{
                      width: "400px",
                      marginBottom: "10px",
                      height: "50px",
                    }}
                    aria-label="Default select example"
                    onChange={(e) => {
                      setConsultantDr(e.target.value);
                      selectedDocOck(e.target.value);
                    }}
                  >
                    <option value="">Select Consulting Doctor</option>
                    {Doctors?.filter((ele) => ele.Department === DocDept)?.map(
                      (item) => {
                        return (
                          <option value={item?._id}>
                            {item?.Firstname}&nbsp;{item?.Lastname}
                          </option>
                        );
                      }
                    )}
                  </Form.Select>
                  <div>
                    <h6>Date of Appointment</h6>
                    <Form.Select
                      className="width-respns width-respns-768px"
                      style={{ width: "400px", marginBottom: "20px" }}
                      onChange={(e) => {
                        setDateofApp(e.target.value);
                      }}
                    >
                      <option>Select the date</option>
                      {/* {Doctors?.filter((ele) => ele?._id === ConsultantDr)?.map(
                        (doctor) =>
                          doctor?.scheduleList?.map((scheduleItem, index) => (
                            <option
                              key={index}
                              value={`${scheduleItem?.scheduleDate} ${scheduleItem?.bookingstatus}`}
                            >
                              {scheduleItem?.scheduleDate}
                            </option>
                          ))
                      )} */}

                      {/* {[
                        ...new Set(
                          Doctors.filter(
                            (ele) => ele?._id === ConsultantDr
                          ).flatMap((doctor) =>
                            doctor?.scheduleList?.map(
                              (scheduleItem) => scheduleItem?.scheduleDate
                            )
                          )
                        ),
                      ].map((uniqueDate, index) => (
                        <option key={index} value={uniqueDate}>
                          {uniqueDate}
                        </option>
                      ))} */}

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
                  </div>

                  <div>
                    <h6>Time of Appointment</h6>
                    {/* <Form.Select
                      className="width-respns width-respns-768px"
                      style={{ width: "400px", marginBottom: "20px" }}
                      aria-label="Default select example"
                      onChange={(e) => {
                      
                        setStatrtTime(e.target.value);

                      }}
                    >
                      <option>Select Time</option>
                      {Doctors?.filter((ele) => ele?._id === ConsultantDr)?.map(
                        (doctor) =>
                          doctor?.scheduleList?.filter((ele)=>ele.scheduleDate === DateofApp)?.map((scheduleItem, index) => (
                            <option key={index} value={scheduleItem?.startTime}>
                              {`${scheduleItem?.startTime} to ${scheduleItem?.endTime}`}
                            </option>
                          ))
                      )}
                    </Form.Select> */}
                    <Form.Select
                      className="width-respns width-respns-768px"
                      style={{ width: "400px", marginBottom: "20px" }}
                      aria-label="Default select example"
                      onChange={(e) => {
                        setStatrtTime(e.target.value);
                      }}
                    >
                      <option>Select Time</option>
                      {/* {Doctors?.filter(
                        (ele) => ele?._id === ConsultantDr || ele?.bookingstatus === "Vacant"
                      )?.flatMap((doctor) =>
                        doctor?.scheduleList
                          ?.filter((ele) => ele.scheduleDate === DateofApp)
                          ?.map((scheduleItem, index) => (
                            <option
                              key={index}
                              value={JSON.stringify(scheduleItem)}
                            >
                              {`${scheduleItem?.startTime} to ${scheduleItem?.endTime}`}
                            </option>
                          ))
                      )} */}

                      {selecteTimearray?.map((shedul) => (
                      <option
                      value={JSON.stringify(shedul)}
                      >
                        {/* <option value={shedul?._id}> */}
                        {shedul?.startTime}-{shedul?.endTime}
                      </option>
                    ))}
                    </Form.Select>
                  </div>
                  {/* <FloatingLabel
                    className="width-respns"
                    style={{ width: "400px" }}
                    controlId="floatingDate"
                    label="Date of Appointment"
                  >
                    <Form.Control
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      placeholder="Date of Appointment"
                      onChange={(e) => setDateofApp(e.target.value)}
                    />
                  </FloatingLabel> */}
                </div>

                {ConsultantDr && ConsultantDr !== "" && (
                  <div
                    style={{
                      border: "1px solid",
                      borderRadius: "10px",
                      padding: "8px",
                      background: "#008b8b",
                    }}
                  >
                    <div className="lord">
                      <div className="lord-image">
                        <img
                          style={{
                            width: "178px",
                            height: "140px",
                            imageRendering: "pixelated",
                          }}
                          src={`http://localhost:8521/Doctor/${ConsultantDrInfo?.ProfileImg}`}
                          alt=""
                        />
                      </div>
                      <div className="wategory">
                        {" "}
                        <span>Name:</span> {ConsultantDrInfo?.Firstname}{" "}
                      </div>
                      <div className="wategory">
                        {" "}
                        <span>Id:</span> {ConsultantDrInfo?.DoctorId}{" "}
                      </div>
                      <div className="wategory">
                        <span>Specialist:</span> {ConsultantDrInfo?.Department}
                      </div>
                    </div>
                  </div>
                )}

                {/* <div
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    padding: "8px",
                    background: '#008b8b'
                  }}
                >
                  <div class="lord">
                    <div class="lord-image">
                      <img style={{ width: '178px', height: '140px', imageRendering: 'pixelated' }} src={`http://localhost:8521/Doctor/${ConsultantDrInfo?.ProfileImg}`} alt="" />
                    </div>
                    <div class="wategory"> <span>Name:</span> {ConsultantDrInfo?.Firstname} </div>
                    <div class="wategory"> <span>Id:</span> {ConsultantDrInfo?.DoctorId} </div>
                    <div class="heading_0"><span>Specialist:</span> {ConsultantDrInfo?.Department}</div>
                  </div>
                </div> */}
              </div>

              <FloatingLabel className="mb-3" label="Medical-Reason/Disease">
                <Form.Control
                  className="width-respns width-respns-768px"
                  style={{ width: "820px", height: "100px" }}
                  type="text"
                  placeholder="Medical-Reason/Disease"
                  onChange={(e) => setmedicalReason(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Injury/Condition">
                <Form.Control
                  className="width-respns width-respns-768px"
                  style={{ width: "820px", height: "100px" }}
                  type="text"
                  placeholder="Injury/Condition"
                  onChange={(e) => setCondition(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel className="mb-3" label="Note">
                <Form.Control
                  className="width-respns width-respns-768px"
                  style={{ width: "820px", height: "100px" }}
                  type="text"
                  placeholder="Note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </FloatingLabel>

              <input
                type="file"
                className=" p-2 mb-4 width-respns width-respns-768px"
                style={{
                  border: "1px solid grey",
                  width: "820px",
                  height: "50px",
                }}
                onChange={(e) => setDocument(e.target.files[0])}
              />

              <div>
                <Button
                  className=" mb-4"
                  style={{
                    width: "auto",
                    height: "40px",
                    fontSize: "16px",
                    backgroundColor: "#208b8c",
                  }}
                  onClick={(e) => {
                    BookAppointment(e);
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};
