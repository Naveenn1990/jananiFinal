import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Card from 'react-bootstrap/Card';
import {
  Container,
  Modal,
  Row,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Aos from "aos";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Select from "react-select";
// import { useNavigate } from 'react-router-dom';

export const Gastroenterology = () => {
  const labUserDetails = sessionStorage.getItem("labUser");
  const location = useLocation();
  const catdata = location?.state?.categoryState;
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const getHospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          let data = response.data.HospitalLabTests?.filter(
            (val) => val?.testCategory?._id === catdata?._id
          );
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
    getHospitallabList();
  }, []);

  const [patientname, setpatientname] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [email, setemail] = useState("");
  const [testDate, settestDate] = useState("");
  const [causeid, setcauseid] = useState("");
  const [Labtests, setLabtests] = useState([]);
  let [selectedOptions, setSelectedOptions] = useState([]);

  function SetFn(val) {
    let obj = {
      testid: val._id,
      testName: val.testName,
      priceNonInsurance: val.priceNonInsurance,
      priceInsurance: val.priceInsurance,
      unit: val.unit,
      // beforeFoodRefVal: val.beforeFoodRefVal,
      // afterFoodRefVal: val.afterFoodRefVal,
      generalRefVal: val.generalRefVal,
    };
    setLabtests(obj);
  }
  // const AddLabTest = (Labtests) => {
  //   setSelectedOptions(
  //     Labtests?.map((val) => {
  //       return {
  //         testid: val._id,
  //         testName: val.testName,
  //         priceNonInsurance: val.priceNonInsurance,
  //         priceInsurance: val.priceInsurance,
  //         unit: val.unit,
  //         // beforeFoodRefVal: val.beforeFoodRefVal,
  //         // afterFoodRefVal: val.afterFoodRefVal,
  //         generalRefVal: val.generalRefVal,
  //       };
  //     })
  //   );
  //   setLabtests(Labtests);
  // };

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
        Labtests: Labtests,
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
        Labtests: Labtests,
      };
    } else if (!labUserDetails) {
      obj = {
        patientname: patientname,
        Phoneno: Phoneno,
        email: email,
        testDate: testDate,
        Labtests: Labtests,
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
        // thankyouShow();
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };

  console.log("HospitalLabList6767676: ", HospitalLabList);

  return (
    <div>
      <div
        className="head-back-img"
        style={{
          backgroundImage: "url(./img/all-department-img.jpg)",
          width: "100%",
          height: "150px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <h1 className="text-dark pt-5 fw-light back-img-head">
            {catdata?.testCategory}
          </h1>
        </Container>
      </div>

      <Container className="mt-5">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/hospital-lab-test-list">
              Test
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row text-center  mb-5 random">
          {HospitalLabList?.map((val) => {
            return (
              <div className="card jgjhk">
                <div className="">
                  <img
                    src={`http://localhost:8521/HospitalLabTest/${val?.testImg}`}
                    alt=""
                    className="p-2"
                    style={{ height: "90px", width: "90px" }}
                  />
                  <p style={{ gap: "1px" }}>{val?.testName}</p>
                  <button
                    className="mt-2"
                    style={{
                      backgroundColor: "rgb(32 139 140)",
                      border: "none",
                      borderRadius: "5px",
                      color: "white",
                    }}
                    onClick={() => {
                      SetFn(val);
                      // setObj(val);
                      setShow(true);
                    }}
                  >
                    Book Now{" "}
                  </button>
                </div>
              </div>
            );
          })}
          {/* <div className="card jgjhk">
            <div className="">
              <img
                src="/img/phospholipid.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p>Phospholipid Antibodies</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/Anti-Cardiolipin-Antibody-Test.png"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p>Hydroxy Progesteron</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/cd-3.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>Cannabis Marijuana</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/mri.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>Cardiac Enzymes</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/Anti-Cardiolipin-Antibody-Test.png"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>CD-3</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/cd-3.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>Dengue Screen Elisa-NSI</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/Anti-Cardiolipin-Antibody-Test.png"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>ER</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/mri.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>FSH</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="card jgjhk">
            <div className="">
              <img
                src="/img/cd-3.jpg"
                alt=""
                className="p-2"
                style={{ height: "90px", width: "90px" }}
              />
              <p style={{ gap: "1px" }}>Thyroid Profile</p>
              <button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(32 139 140)",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={() => setShow(true)}
              >
                Book Now{" "}
              </button>
            </div>
          </div> */}
        </div>
      </Container>
      {/* BOOK TEST MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white", fontWeight: "bold" }}>
            Book Your Test
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <FloatingLabel
              className="col-md-6 p-2"
              controlId="floatingName"
              label="Name"
            >
              <Form.Control
                type="text"
                value={patientname}
                placeholder="Name"
                onChange={(e) => setpatientname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              className="  col-md-6 p-2"
              controlId="floatingMobile"
              label="Mobile"
            >
              <Form.Control
                type="number"
                value={Phoneno}
                placeholder="Mobile"
                onChange={(e) => setPhoneno(e.target.value)}
              />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel
              className="col-md-6 p-2"
              controlId="floatingEmail"
              label="Email"
            >
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              className="col-md-6 p-2"
              controlId="floatingEmail"
              label=""
            >
              <Form.Control
                type="date"
                placeholder=""
                value={testDate}
                onChange={(e) => settestDate(e.target.value)}
              />
            </FloatingLabel>

            {/* <FloatingLabel className="col-md-6 p-1" controlId="floatingName">
              <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                isMulti
                name="colors"
                options={HospitalLabList}
                className="basic-multi-select"
                classNamePrefix="select"
                value={Labtests}
                onChange={AddLabTest}
              />
            </FloatingLabel> */}
          </Row>
          <Row className="d-flex mt-2 justify-content-center mb-3">
            {labUserDetails &&
            JSON.parse(labUserDetails)?.registrationType === "IPD" ? (
              <FloatingLabel
                className="col-md-6 p-2"
                controlId="floatingCause"
                label="Cause"
              >
                <Form.Select
                  type="text"
                  value={causeid}
                  placeholder="Cause"
                  onChange={(e) => setcauseid(e.target.value)}
                >
                  <option>Open this select menu</option>
                  {JSON.parse(labUserDetails)?.cause?.map((itemdata) => {
                    return (
                      <option value={itemdata?._id}>
                        {itemdata?.CauseName}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            ) : (
              <></>
            )}
          </Row>

          <Button
            onClick={bookLabTest}
            onHide={handleClose}
            className="col-md-12"
            style={{ backgroundColor: "white", color: "#20958C" }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

{
  /* /* <div data-aos="fade-right" className='row mb-2 ' >
                    <div className='col-lg-4  mb-3'>
                        <img className='img-fluid  mt-2' style={{ width: "100%", height: "280px", borderRadius: '10px' }} src="./img/department-img-1.jpg" alt="department-img" />
                    </div>
                    <div className='col-lg-4  m-auto mb-3'>
                        <h3 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }} >Gastroenterology</h3>
                        <p style={{ textAlign: 'justify' }}>"Here's the story of a lovely lady, who was bringing up three very lovely girls. All of them had hair of gold, like their mother, the youngest one in curls. Here's the store, of a man named Brady, who was busy with three boys of his own. They were four men, living all together, yet they were all alone. 'Til the one day when the lady met this fellow. And they knew it was much more than a hunch, that this group would somehow form a family".</p>
                    </div>
                    <div className='col-lg-4  ms-auto mb-2'>
                        <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Other Deaprtments</h5>
                        <ul>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Gastroenterology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Orthopedic</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Surgery</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Urology</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />MRI Testing</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list">  <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Neurosurgery</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Blood Test</li></a>
                            <a style={{ listStyle: "none", color: "black" }} href="/hospital-lab-test-list"> <li><FontAwesomeIcon icon={faAnglesRight} style={{ marginRight: "10px" }} />Cardiology</li></a>
                        </ul>
                    </div>
                </div>

                <div className='mb-4'>
                    <h5 className='fw-bold mb-2' style={{ color: "rgb(32 139 140)" }}>Contact Details</h5>
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faEnvelope} beatFade /> Gastroenterology@hospital.com</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a> <br />
                    <a className='text-dark' href="/contact"> <FontAwesomeIcon icon={faPhoneVolume} beatFade /> +1 600 200 999</a>
                </div>
 */
}
