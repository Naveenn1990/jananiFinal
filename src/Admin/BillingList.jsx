import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Table, Modal, ProgressBar, Button } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function BillingList() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function validatename(inputtxt) {
    var phoneno = /^[a-zA-Z ]{2,30}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid name!");
      return false;
    }
  }

  function phonenumber(inputtxt) {
    var phoneno = /^[6-9]\d{9}$/; // var no = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      alert("You have entered an invalid mobile number!");
      return false;
    }
  }

  function CheckPassword(inputtxt) {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.match(decimal)) {
      return true;
    } else {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!"
      );
      return false;
    }
  }

  // Add Cause
  const [CauseCat, setCauseCat] = useState("");
  const [CauseCatlist, setCauseCatlist] = useState([]);
  const [CauseService, setCauseService] = useState("");
  const [CauseName, setCauseName] = useState("");

  const [medications, setmedications] = useState();

  const [patientfirstname, setpatientfirstname] = useState("");
  const [patientlastname, setpatientlastname] = useState("");
  const [gender, setgender] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState();
  const [Address, setAddress] = useState();
  const [Address1, setAddress1] = useState();
  const [City, setCity] = useState();

  const [State, setState] = useState();
  const [Zipcode, setZipcode] = useState();
  const [Marital, setMarital] = useState();

  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [BillDetailsList, setBillDetailsList] = useState([]);
  const signup = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      if (
        validatename(patientfirstname) &&
        ValidateEmail(email) &&
        phonenumber(mobileno) &&
        CheckPassword(password)
      ) {
        const config = {
          url: "/user/addPatient",
          method: "post",
          baseURL: "http://localhost:8521/api",
          headers: { "content-type": "application/json" },
          data: {
            Firstname: patientfirstname,
            Lastname: patientlastname,
            Gender: gender,
            DOB: DOB,
            PhoneNumber: mobileno,
            Email: email,
            Address1: Address,
            Address2: Address1,
            City: City,
            State: State,
            Zipcode: Zipcode,
            MaritalStatus: Marital,
            Password: password,
            ConfirmPassword: conpassword,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          alert("Signup Success");
          // window.location.assign("/patientPortal");
        }
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const getservicecategory = () => {
    axios
      .get("http://localhost:8521/api/admin/getServiceCat")
      .then(function (response) {
        // handle success
        setCauseCatlist(response.data.ServiceCat);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setCauseCatlist([]);
      });
  };

  const [category, setcategory] = useState([]);

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

  const [causeServiceList, setcauseServiceList] = useState([]);

  const getcauseServiceList = () => {
    axios
      .get("http://localhost:8521/api/admin/getService")
      .then(function (response) {
        // handle success
        setcauseServiceList(response.data.Service);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setcauseServiceList([]);
      });
  };

  const [hServiceList, sethServiceList] = useState([]);

  const getHServiceList = () => {
    axios
      .get("http://localhost:8521/api/admin/HospitalServicesList")
      .then(function (response) {
        // handle success
        sethServiceList(response.data.allHospitalServices);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setcauseServiceList([]);
      });
  };

  let [causeBillDetailsF, setcauseBillDetailsF] = useState([]);
  let [hospitalServicesF, sethospitalServicesF] = useState({});
  const [quantityF, setquantityF] = useState(1);
  const [amtStatusF, setamtStatusF] = useState("");
  let [PatientDetails, setPatientDetails] = useState({});

  // For the bill details in the frontend...
  function settingBillDetailsFn() {
    let obj = {
      hospitalServices: hospitalServicesF.hServiceTitle,
      quantity: quantityF,
      hospitalServicesAmt: totalPrice,
      amtStatus: amtStatusF,
    };

    setcauseBillDetailsF([...causeBillDetailsF, obj]);
  }

  //add the billing for the perticular disease...
  const [causeServiceid, setcauseServiceid] = useState("");
  const addBilling = async () => {
    try {
      const config = {
        url: `/addBillCauses/${PatientDetails._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api/user",
        headers: { "content-type": "application/json" },
        data: {
          causeServiceid: causeServiceid,
          causeServiceCat: CauseCat,
          causeServices: CauseService,
          CauseName: CauseName,
          causeBillDetails: causeBillDetailsF,
        },
      };
      console.log("config", config);
      let response = await axios(config);
      if (response.status === 200) {
        getcategory();
        setcauseServiceid("");
        setCauseCat("");
        setCauseService("");
        setCauseName("");
        setcauseBillDetailsF([]);
        alert(response.data.success);
        handleClose4("");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getcategory();
    getservicecategory();
    getcauseServiceList();
    getHServiceList();
  }, []);

  function selectChange(event) {
    const id = event.target.value;
    const selectedObj = hServiceList.find((val) => val._id === id);
    sethospitalServicesF(selectedObj);
  }

  function selectCauseServiceId(e) {
    const data = e.target.value;
    const Obj = causeServiceList.find((val) => val.ServiceTitle === data);
    setcauseServiceid(Obj._id);
  }

  // total prices for each hospital services used for the treatment
  // of that disease...
  let [totalPrice, settotalPrice] = useState();
  useEffect(() => {
    PatientDetails = JSON.parse(JSON.stringify(PatientDetails));
    totalPrice = PatientDetails.haveInsurance
      ? Number(hospitalServicesF.hServicePriceInsuredPeople) * Number(quantityF)
      : Number(hospitalServicesF.hServicePriceNonInsuredPeople) *
        Number(quantityF);
    settotalPrice(totalPrice);
  }, [hospitalServicesF, quantityF]);

  let [ClickedCancel, setClickedCancel] = useState("");
  let [IndexVal, setIndexVal] = useState();
  useEffect(() => {
    function cancelItemFn() {
      let valIndex = IndexVal - 1;
      console.log("valindexes: ", valIndex, IndexVal);
      if ((valIndex == 0 || valIndex) && IndexVal) {
        causeBillDetailsF.splice(valIndex, 1);
        console.log("causeBillDetailsF: ", causeBillDetailsF);
        setcauseBillDetailsF(causeBillDetailsF);
        setClickedCancel("");
        setIndexVal();
      }
    }
    cancelItemFn();
  }, [ClickedCancel, IndexVal]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2%",
        }}
      >
        <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Patient List
        </h6>
        {/* <AiOutlinePlusCircle
          className="AddIcon1"
          onClick={() => setShow2(true)}
        /> */}
        <input
          placeholder="Search In-Patient List"
          style={{
            padding: "5px 10px",
            border: "1px solid #20958c",
            borderRadius: "0px",
          }}
        />
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Billing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row" style={{ color: "white" }}>
            <div className="col-lg-4" style={{ padding: "10px" }}>
              <input
                placeholder="Billing Name"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  padding: "10px",
                  border: "none",
                }}
              ></input>
            </div>
            <div className="col-lg-4" style={{ padding: "10px" }}>
              <input
                placeholder="Billing details"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  padding: "10px",
                  border: "none",
                }}
              ></input>
            </div>

            <div className="col-lg-4" style={{ padding: "10px" }}>
              <input
                placeholder="Billing Amount"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  padding: "10px",
                  border: "none",
                }}
              ></input>
            </div>

            <div className="col-lg-4" style={{ padding: "10px" }}>
              <div
                className="row align-items-center"
                style={{ padding: "10px" }}
              >
                <div
                  className="col-lg-6 d-flex align-items-center"
                  style={{ padding: "10px" }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: "40%",
                      borderRadius: "20px",
                      padding: "10px",
                      border: "none",
                      height: "18px",
                    }}
                  ></input>
                  <span>PAID</span>
                </div>

                <div
                  className="col-lg-6 d-flex align-items-center"
                  style={{ padding: "10px" }}
                >
                  <input
                    type="checkbox"
                    style={{
                      width: "40%",
                      borderRadius: "20px",
                      padding: "10px",
                      border: "none",
                      height: "18px",
                    }}
                  ></input>
                  <span>UNPAID</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Billing Information modal */}
      <Modal size="lg" show={show3} onHide={handleClose3}>
        <Modal.Header>
          <Modal.Title>View Billing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>S.no.</th>
                <th>Hospital Services</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {BillDetailsList.map((val, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{++i}.</td>

                    <td>{val.hospitalServices}</td>
                    <td>{val.quantity}</td>
                    <td>{val.hospitalServicesAmt}</td>
                    <td>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                          color: `${
                            val.amtStatus === "UNPAID" ? "red" : "green"
                          }`,
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {val.amtStatus}
                        {/* <MdEdit
                          style={{ color: "#20958c", marginRight: "1%" }}
                        /> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header>
          <Modal.Title>Add In-Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 style={{ color: "white", margin: "0% 2% 2% 2%" }}>
            Personal Information
          </h6>
          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <input
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientfirstname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setpatientlastname(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setmobileno(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setemail(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-5">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Date of Birth :
                  </h6>
                </div>
                <div className="col-lg-7">
                  {" "}
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "4%",
                    }}
                    onChange={(e) => setDOB(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-3">
                  <h6 style={{ marginTop: "20px", color: "white" }}>
                    Address:
                  </h6>
                </div>
                <div className="col-lg-9">
                  {" "}
                  <input
                    type="text"
                    placeholder="Street Address"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                      marginTop: "6%",
                    }}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Street Address Line 2"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setAddress1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="City"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-3">
              <input
                placeholder="
                State / Province"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "8%",
                }}
                onChange={(e) => setState(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Postal / Zip Code"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setZipcode(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
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
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="ConfirmPassword"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setconpassword(e.target.value)}
              ></input>
            </div>

            {/* <div className="col-lg-6">
              <textarea
                placeholder="Address"
                cols={4}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
              ></textarea>
            </div> */}
          </div>

          {/* <h6 style={{ color: "white", margin: "2%" }}>In case of emergency</h6> */}
          {/* <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6">
              <input
                placeholder="First Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Last Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Relationship"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <input
                placeholder="Contact Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  marginTop: "4%",

                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
              ></input>
            </div>
          </div> */}

          <div
            className="row"
            style={{
              border: "1px solid white",
              padding: "2% 0%",
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6" style={{ color: "white" }}>
              Taking any medications, currently?
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <div className="row">
                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == true}
                    onChange={() => setmedications(true)}
                  ></input>{" "}
                  Yes
                </div>

                <div className="col-lg-3">
                  <input
                    type="checkbox"
                    checked={medications == false}
                    onChange={() => setmedications(false)}
                  ></input>{" "}
                  No
                </div>
              </div>
            </div>

            {medications ? (
              <>
                <label style={{ color: "white", marginTop: "4%" }}>
                  If yes, please list it here
                </label>
                <div
                  className="col-lg-12"
                  style={{ color: "white", textAlign: "center" }}
                >
                  <textarea
                    cols={6}
                    placeholder="Please list all medications"
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",

                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                  ></textarea>
                </div>
              </>
            ) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={() => {
                setShow2(false);
              }}
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={(e) => {
                setShow2(false);
                signup(e);
              }}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Add Cause  */}
      <Modal size="lg" show={show4} onHide={handleClose4}>
        <Modal.Header>
          <Modal.Title>
            Add Patient's New Disease & treatment charges
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="row"
            style={{
              margin: "0% 1%",
              borderRadius: "0px",
            }}
          >
            <div className="col-lg-6 mb-3">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setCauseCat(e.target.value)}
              >
                <option>Select Cause category</option>
                {CauseCatlist?.map((item) => {
                  return (
                    <option value={item.ServiceCategory}>
                      {item.ServiceCategory}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-lg-6 mb-3">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => {
                  setCauseService(e.target.value);
                  selectCauseServiceId(e);
                }}
              >
                <option>Select Cause Services</option>
                {causeServiceList
                  .filter((item) => item.ServiceCategory === CauseCat)
                  .map((val) => {
                    return (
                      <option value={val.ServiceTitle}>
                        {val.ServiceTitle}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="col-lg-6 mb-3">
              <input
                placeholder="Cause Name"
                style={{
                  width: "100%",
                  padding: "8px 22px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setCauseName(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-6 mb-3"></div>

            <div className="col-lg-6 mb-3">
              <select
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  backgroundColor: "#ebebeb",
                }}
                onChange={selectChange}
              >
                <option>Select Hospital Services</option>
                {hServiceList.map((item) => {
                  return (
                    <option value={item._id}>{item?.hServiceTitle}</option>
                  );
                })}
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <input
                placeholder="Quantity"
                style={{
                  width: "100%",
                  padding: "8px 22px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setquantityF(e.target.value)}
              ></input>
            </div>
            <div className="col-lg-6 mb-3">
              <div
                // placeholder="fdsfd"
                style={{
                  width: "100%",
                  padding: "8px 22px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                }}
                // onChange={(e) => setCauseName(e.target.value)}
              >
                {totalPrice}
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <select
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  backgroundColor: "#ebebeb",
                }}
                onChange={(e) => setamtStatusF(e.target.value)}
              >
                <option>Select Payment status</option>

                <option value="PAID">PAID</option>
                <option value="UNPAID">UNPAID</option>
              </select>
            </div>
            <div className="d-flex flex-row justify-content-end">
              <Button variant="warning" onClick={settingBillDetailsFn}>
                Save
              </Button>
            </div>
          </div>
          <div
            style={{
              margin: "1% 1%",
              borderRadius: "0px",
            }}
          >
            <Table>
              <thead>
                <th>S.no.</th>
                <th>Hospital Service</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Payment status</th>
                <th></th>
              </thead>
              <tbody>
                {causeBillDetailsF.map((item, index) => {
                  return (
                    <tr>
                      <td>{++index}</td>
                      <td>{item.hospitalServices}</td>
                      <td>{item.quantity}</td>
                      <td>{item.hospitalServicesAmt}</td>
                      <td>{item.amtStatus}</td>
                      <td>
                        <TiDeleteOutline
                          onClick={() => {
                            setClickedCancel("clickedCancel");
                            setIndexVal(index);
                          }}
                          style={{ color: "red", fontSize: "29px" }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ display: "flex" }}>
            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "600",
                marginRight: "20px",
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={handleClose4}
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
                border: "1px solid white",
                padding: "4px 10px",
              }}
              onClick={addBilling}
            >
              SUBMIT
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* View both bill and casuse info */}
      <Modal size="lg" show={show5} onHide={handleClose5}>
        <Modal.Header>
          <Modal.Title>View Billing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="md" bordered style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>S.No</th>
                <th>Cause Category</th>
                <th> Cause Service</th>
                <th>Cause Name</th>
                <th>Action</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {PatientDetails?.cause?.map((item, i) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{++i}.</td>

                    <td>{item.causeServiceCat}</td>
                    <td>{item.causeServices}</td>
                    <td>{item.CauseName}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                          color: "red",
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        <FaEye
                          onClick={() => {
                            setBillDetailsList(item.causeBillDetails);
                            handleShow3();
                          }}
                          style={{ color: "white", marginRight: "1%" }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex gap-3">
                        <button
                          onClick={() => {
                            navigate("/admin/patientbillinvoice", {
                              state: {
                                patientCauseInfo: item,
                                patientdetails: PatientDetails,
                              },
                            });
                          }}
                          className="fs-5"
                          style={{ border: "none" }}
                        >
                          <FaEye
                            style={{ color: "#20958c", marginRight: "1%" }}
                          />
                        </button>

                        {/* <button className="fs-5" style={{ border: "none" }}>
                      <FontAwesomeIcon
                        icon={faPrint}
                        style={{ color: "#5791f4" }}
                      />
                    </button> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <Table responsive="md" style={{ marginTop: "1%" }}>
        <thead>
          <tr style={{ fontSize: "15px", textAlign: "center" }}>
            {/* <th>Profile</th> */}
            <th>Patient-Id</th>

            <th> Name</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Add Cause</th>
            {/* <th>Add Billing</th> */}
            <th>View Billing</th>
          </tr>
        </thead>
        <tbody>
          {category
            // ?.filter((val) => val.registrationType === "IPD")
            ?.map((item) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  {/* <td>
                    <img
                      src="/Images/doctor1.jpg"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      alt="no-img"
                    />
                  </td> */}

                  <td>{item?.PatientId}</td>
                  <td>{item?.Firstname}</td>
                  <td>{item?.Gender}</td>

                  <td>{item?.Address1}</td>
                  <td>{item?.PhoneNumber}</td>
                  <td>{item?.DOB}</td>

                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => {
                        setPatientDetails(item);
                        setShow4(true);
                      }}
                    >
                      Add Cause
                    </button>
                  </td>

                  {/* <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                      }}
                      onClick={() => setShow(true)}
                    >
                      Add Billing
                    </button>
                  </td> */}

                  <td>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#20958c",
                        color: "white",
                        borderRadius: "0px",
                        marginLeft: "10px",
                      }}
                      onClick={() => {
                        setPatientDetails(item);
                        setShow5(true);
                      }}
                    >
                      View Billing
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
