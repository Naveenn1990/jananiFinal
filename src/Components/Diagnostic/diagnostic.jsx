import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, FloatingLabel, Form, Modal, Col } from "react-bootstrap";
import { Card, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import LabCard from "./labCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

export const Diagnostic = () => {
  const navigate = useNavigate();

  // Select width
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      // Adjust the width here
      minHeight: "60px", // Adjust the height here
    }),
  };

  const labUserDetails = sessionStorage.getItem("labUser");

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const thankyouClose = () => setShow1(false);
  const thankyouShow = () => setShow1(true);
  //date logic
  const [minDate, setMinDate] = useState(getTodayDate());

  function getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
  // date logic

  const [HospitalLabCatList, setHospitalLabCatList] = useState([]);
  const HospitallabCategories = () => {
    axios
      .get("http://localhost:8521/api/admin/HospitalLabTestCategoryList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.list;
          setHospitalLabCatList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabCatList([]);
      });
  };

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const getHospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          data.forEach((item) => {
            item.label = item.testName;
            item.value = item.testName;
          });

          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };

  useEffect(() => {
    HospitallabCategories();
    getHospitallabList();
  }, []);

  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [testDate, settestDate] = useState("");
  const [causeid, setcauseid] = useState("");
  const [Labtests, setLabtests] = useState([]);
  const hasSelectedOptions = Labtests && Labtests.length > 0;

  const [testid, settestid] = useState("");
  const [testName, settestName] = useState("");
  const [priceNonInsurance, setpriceNonInsurance] = useState("");
  const [priceInsurance, setpriceInsurance] = useState("");
  const [unit, setunit] = useState("");
  const [beforeFoodRefVal, setbeforeFoodRefVal] = useState("");
  const [afterFoodRefVal, setafterFoodRefVal] = useState("");
  const [generalRefVal, setgeneralRefVal] = useState("");
  const [patientReportVal, setpatientReportVal] = useState("");
  let [selectedOptions, setSelectedOptions] = useState([]);
  const AddLabTest = (Labtests) => {
    setSelectedOptions(
      Labtests?.map((val) => {
        return {
          testid: val._id,
          testName: val.testName,
          priceNonInsurance: val.priceNonInsurance,
          priceInsurance: val.priceInsurance,
          unit: val.unit,
          // beforeFoodRefVal: val.beforeFoodRefVal,
          // afterFoodRefVal: val.afterFoodRefVal,
          generalRefVal: val.generalRefVal,
        };
      })
    );
    setLabtests(Labtests);
  };

  const bookLabTest = async () => {
    let obj;
    if (
      labUserDetails &&
      JSON.parse(labUserDetails)?.registrationType === "IPD"
    ) {
      obj = {
        causeid: causeid,
        patientid: JSON.parse(labUserDetails)?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
      };
    } else if (
      labUserDetails &&
      JSON.parse(labUserDetails)?.registrationType === "OPD"
    ) {
      obj = {
        patientid: JSON.parse(labUserDetails)?._id,
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
      };
    } else if (!labUserDetails) {
      obj = {
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: selectedOptions,
      };
    }
    try {
      const config = {
        url: "/user/bookHospitalLabTest",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: obj,
      };
      let res = await axios(config);
      if (res.status === 200 || res.status === 201) {
        alert("Lab test booked");
        thankyouShow();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  return (
    <div>
      <h1
        className=" fw-bold p-3 text-center"
        style={{ color: "rgb(32 139 140)" }}
      >
        DIAGNOSTIC
      </h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 lab-carousel"
            style={{ height: "450px" }}
            src="./img/diagnostic-slide-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className=" diagnostic-slide">
            <Container>
              <div>
                <div className=" me-auto text-light fw-bold  lab-carousel-text  ">
                  <h3 className="fs-1 fw-bold">
                    {" "}
                    TAKE CARE OF <br /> YOUR HEALTH
                  </h3>
                  <p className="mb-3">
                    At Hospital, We are dedicated to dignosing all kind of
                    diseases
                  </p>
                  <Button onClick={handleShow} className="green-btn-2"></Button>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 lab-carousel "
            style={{ height: "450px" }}
            src="./img/diagnostic-slide-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className=" diagnostic-slide">
            <Container>
              <div className="row">
                <div className="m-auto text-light fw-bold  lab-carousel-text  ">
                  <h3 className="fs-1 fw-bold ">YEARS OF EXPRERIENCE</h3>
                  <p className="mb-3">
                    Since our foundation, we've been <br />
                    delivering diagnostic solutions
                  </p>
                  <Button onClick={handleShow} className="green-btn-2"></Button>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 lab-carousel"
            style={{ height: "450px" }}
            src="./img/diagnostic-slide-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className=" diagnostic-slide">
            <Container>
              <div className="">
                <div className=" me-auto text-light fw-bold  lab-carousel-text ">
                  <h3 className="fs-1 fw-bold ">
                    {" "}
                    TAKE CARE OF <br /> YOUR HEALTH
                  </h3>
                  <p className="mb-3">
                    At Hospital, We are dedicated to dignosing all kind of
                    diseases
                  </p>
                  <Button onClick={handleShow} className="green-btn-2"></Button>
                </div>
              </div>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="margin-top align-items-center justify-content-center">
        <h1 className="text-dark fw-light back-img-head">Test Categories</h1>
        <div className="row text-center  mb-5">
          {/* <div className="col-md-3"> */}
          {HospitalLabCatList?.map((catitem) => {
            return (
              <div
                className="text-decoration-none text-dark col-lg-3 appointment-icon m-auto mb-3"
                style={{ width: "230px" }}
              >
                <div
                  onClick={() =>
                    navigate("/hospital-lab-test-list", {
                      state: {
                        categoryState: catitem,
                      },
                    })
                  }
                >
                  <img
                    className="mb-3"
                    style={{ width: "70px", height: "70px" }}
                    src={`http://localhost:8521/HospitalLabTest/${catitem?.testCategoryImg}`}
                    alt="appointment-icon"
                  />
                  <p style={{ fontSize: "19px" }}>{catitem?.testCategory}</p>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </div>

        {/* <Container>
          <div>
            <LabCard />{" "}
          </div>
        </Container> */}

        <Container className="margin-top">
          <div>
            <h4
              className="text-center fw-bold mb-5"
              style={{ color: "rgb(32 139 140)" }}
            >
              OUR SERVICES
            </h4>
            <div className="row">
              <Card
                className=" col-md-6 col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-1.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Nephrologist Care
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="col-md-6 col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-2.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Eye Care
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="col-md-6 col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-3.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Pediatrician Clinic
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className="col-md-6 col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-4.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Prenatal Care
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="row mt-5">
              <Card
                className=" col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-4.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Medical Counseling
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className=" col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-3.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Elder Care
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className=" col-lg-3 m-auto mb-3 "
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-2.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Competetive Doctors
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                className=" col-lg-3 m-auto mb-3 p-0"
                style={{ width: "15rem" }}
              >
                <Card.Img
                  variant="top"
                  src="./img/service-img-1.jpg"
                  alt="service-img"
                />
                <Card.Body>
                  <Card.Title>
                    <a
                      className="fw-semibold"
                      style={{
                        textDecoration: "none",
                        color: "rgb(32 139 140)",
                      }}
                      href="#"
                    >
                      Rehabilation Center
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis,
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>

        <Container className="margin-top">
          <h4
            className="text-center fw-bold mb-5"
            style={{ color: "rgb(32 139 140)" }}
          >
            OUR DOCTORS
          </h4>
          <div className="row ">
            <Card className="col-lg-3 m-auto  mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" />
              <a href="/drNamee">
                <img
                  style={{ width: "100%", height: "200px" }}
                  src="./img/Our-doctors-img-1.jpg"
                  alt="Doctor-img"
                />
              </a>
              <Card.Body>
                <Card.Title className="text-center">
                  <a
                    className="fw-semibold "
                    style={{ textDecoration: "none", color: "rgb(32 139 140)" }}
                    href="/drNamee"
                  >
                    Dr.Veranda Tanum
                  </a>
                </Card.Title>
                <p className="text-center fw-bold">"Pulomanry"</p>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus adfaa inventore necessitatibus dolorem odit
                  recusandae earum?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-lg-3 m-auto  mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" />
              <a href="/drName2">
                <img
                  style={{ width: "100%", height: "200px" }}
                  src="./img/Our-doctors-img-2.jpg"
                  alt="Doctor-img"
                />
              </a>
              <Card.Body>
                <Card.Title className="text-center">
                  <a
                    className="fw-semibold"
                    style={{ textDecoration: "none", color: "rgb(32 139 140)" }}
                    href="/drName2"
                  >
                    Dr. Kathryn Wood
                  </a>
                </Card.Title>
                <p className="text-center fw-bold">"Cardiology"</p>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus adfaa inventore necessitatibus dolorem odit
                  recusandae earum?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-lg-3 m-auto mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" />
              <a href="/drName3">
                <img
                  style={{ width: "100%", height: "200px" }}
                  src="./img/Our-doctors-img-3.jpg"
                  alt="Doctor-img"
                />
              </a>
              <Card.Body>
                <Card.Title className="text-center">
                  <a
                    className="fw-semibold"
                    style={{ textDecoration: "none", color: "rgb(32 139 140)" }}
                    href="/drName3"
                  >
                    Dr. Hooman Azmi
                  </a>
                </Card.Title>
                <p className="text-center fw-bold">"Dental"</p>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus adfaa inventore necessitatibus dolorem odit
                  recusandae earum?
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-lg-3 m-auto mb-3" style={{ width: "17rem" }}>
              <Card.Img variant="top" />
              <a href="/drName4">
                <img
                  style={{ width: "100%", height: "200px" }}
                  src="./img/Our-doctors-img-4.jpg"
                  alt="Doctor-img"
                />
              </a>
              <Card.Body>
                <Card.Title className="text-center">
                  <a
                    className="fw-semibold"
                    style={{ textDecoration: "none", color: "rgb(32 139 140)" }}
                    href="/drName4"
                  >
                    Dr. Peter Parker
                  </a>
                </Card.Title>
                <p className="text-center fw-bold">"Neurologist"</p>
                <Card.Text style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus adfaa inventore necessitatibus dolorem odit
                  recusandae earum?
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <a href="/doctors">
            <Button className="mt-5 m-auto d-flex justify-content-center all-bg-green">
              MORE DOCTORS
            </Button>
          </a>
        </Container>
      </Container>

      {/* ==================================================== */}

      {/* BOOK TEST MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#20958C",
            color: "white",
            borderBottom: "1px solid white",
          }}
        >
          <Modal.Title
            style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}
          >
            Book Your Test
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: "20px", borderTop: "2px solid white" }}>
          <div
            className="white-border "
            style={{
              border: "2px solid white",
              padding: "20px",
              margin: "10px",
            }}
          >
            <Row>
              <Col md={6} className="p-2">
                <FloatingLabel controlId="floatingName" label="Patient Name">
                  <Form.Control
                    type="text"
                    value={patientname}
                    placeholder="Enter your name"
                    onChange={(e) => setpatientname(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6} className="p-2">
                <FloatingLabel controlId="floatingMobile" label="Mobile">
                  <Form.Control
                    type="tel"
                    value={Phoneno}
                    placeholder="Enter your mobile number"
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col md={6} className="p-2">
                <FloatingLabel controlId="floatingEmail" label="Email">
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter your email address"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6} className="p-2">
                <FloatingLabel
                  controlId="floatingLabTests"
                  label={hasSelectedOptions ? "" : "Select Lab Tests"}
                >
                  <Select
                    isMulti
                    name="labTests"
                    options={HospitalLabList}
                    className="basic-multi-select"
                    classNamePrefix=""
                    value={Labtests}
                    onChange={AddLabTest}
                    styles={customStyles}
                    placeholder=""
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="d-flex mt-2 justify-content-center mb-3">
              <Col md={6} className="p-2">
                <FloatingLabel controlId="floatingTestDate" label="Test Date">
                  <Form.Control
                    type="date"
                    min={minDate}
                    value={testDate}
                    onChange={(e) => settestDate(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              {labUserDetails &&
                JSON.parse(labUserDetails)?.registrationType === "IPD" && (
                  <Col md={6} className="p-2">
                    <FloatingLabel controlId="floatingCause" label="Cause">
                      <Form.Select
                        value={causeid}
                        onChange={(e) => setcauseid(e.target.value)}
                      >
                        <option value="">Select Cause</option>
                        {JSON.parse(labUserDetails)?.cause?.map((itemdata) => (
                          <option key={itemdata?._id} value={itemdata?._id}>
                            {itemdata?.CauseName}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                )}
            </Row>
          </div>

          <Button
            onClick={bookLabTest}
            className="col-md-12"
            style={{
              backgroundColor: "#ffa500", // Set button background color to orange
              color: "white",
              borderRadius: "10px",
              padding: "10px 20px",
              fontSize: "12px",
              fontWeight: "bold",
              border: "none",
              marginTop: "20px",
            }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>

      {/* THANK YOU MODAL */}

      <Modal show={show1} onHide={thankyouClose} keyboard={false}>
        <Modal.Header>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <h2
                style={{
                  color: "white",
                  fontFamily: "Bricolage_Grotesque variant0",
                }}
              >
                THANK YOU !
              </h2>
              <p
                className="mb-3"
                style={{
                  color: "white",
                }}
              >
                We have received your booking request
              </p>
              <h6
                className="fw-semibold"
                style={{
                  color: "white",
                  fontFamily: "Bricolage_Grotesque variant0",
                }}
              >
                Our medical experts will get in touch with you shortly.....
              </h6>
            </div>
            <div className="col-lg-6">
              <img
                style={{ width: "100%", height: "150px" }}
                src="./img/Thankyou-image.png"
                alt=""
              />
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={thankyouClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
      </Modal>
    </div>
  );
};
