import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect, CSSProperties } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
// import { MdDelete } from "react-icons/md";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import moment from "moment-timezone";
import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export const StaffHeader = () => {
  let staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
  const formdata = new FormData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaStreamRef = useRef(null); // To store the reference to the media stream.
  const [imageData, setImageData] = useState(null);
  const [showCam, setshowCam] = useState(false);
  const [attendanceImage, setattendanceImage] = useState("");
  const [staffVal, setstaffVal] = useState({});

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");
  let [pacLoader, setpacLoader] = useState(false);

  function dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  const startCamera = async () => {
    try {
      const constraints = { video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      videoRef.current.srcObject = stream;
      videoRef.current.play();

      // Store the reference to the media stream
      mediaStreamRef.current = stream;
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the captured frame to a data URL (base64-encoded image)
    const capturedData = canvas.toDataURL("image/png");

    // You can now use imageData as needed, e.g., display it in your app or send it to a server.
    console.log("Captured image:", capturedData);
    // Set the captured image data for download
    setImageData(capturedData);
    const blob = dataURLtoBlob(capturedData);
    const file = new File([blob], "attendanceImg.png", { type: "image/png" });
    console.log("tththtth", file);
    setattendanceImage(file);
  };

  const stopCamera = () => {
    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();

      tracks.forEach((track) => track.stop());

      if (videoRef.current) {
        // Release the video stream
        videoRef.current.srcObject = null;
      }
    }
  };

  //   const downloadImage = () => {
  //     if (imageData) {
  //       const a = document.createElement("a");
  //       a.href = imageData;
  //       a.download = "captured_image.png"; // You can specify the filename here
  //       a.click();
  //     }
  //   };

  // punching time
  const punchingTime = async () => {
    formdata.set("attendanceImg", attendanceImage);
    if (!attendanceImage) {
      alert("Please provide your current photo!!! It is mandatory!!!");
      return;
    }
    try {
      const config = {
        url: `/staff/addAttendance/${staffDetails?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      const res = await axios(config);
      if (res.status === 200) {
        setImageData(null);
        setshowCam(false);
        setpacLoader(false);
        setattendanceImage("");
        staffById(staffDetails?._id);
        alert(res.data.success);
        return;
      }
    } catch (error) {
      console.log(error);
      setpacLoader(false);
      alert(error.response.data.error);
      return;
    }
  };

  // Punching out time
  const punchingOutTime = async (id) => {
    try {
      const config = {
        url: `/staff/punchout/${staffDetails?._id}`,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          attendanceid: id,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        setImageData(null);
        setshowCam(false);
        setattendanceImage("");
        staffById(staffDetails?._id);
        alert(res.data.success);
        return;
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
      return;
    }
  };

  const staffById = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/staff/getStaffById/" + id
      );
      if (res.status === 200) {
        setstaffVal(res.data.staffDetails);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    staffDetails = JSON.parse(sessionStorage.getItem("StaffDetails"));
    if (!staffDetails) {
      window.location.assign("/loginforeveryone");
    }
    staffById(staffDetails?._id);
  }, []);
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex m-auto  ">
              <Form.Control
                type="search"
                placeholder="Search"
                style={{ width: "600px", borderRadius: "30px" }}
                // style={{marginLeft:"-200px"}}
                aria-label="Search"
              />
              <a href="#">
                <Button className="red-btn-7"></Button>
              </a>
            </Form>

            {/* Add Attendance Button */}
            <Button
              onClick={() => {
                // startCamera();
                handleShow1();
              }}
            >
              Attendance
            </Button>

            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <FontAwesomeIcon icon={faBell} className="notification-icon" />
              <div className="dropdown">
                <button className="dropbtn navigation-all fs-6">
                  {staffDetails?.fname} {staffDetails?.lname}
                  <img
                    style={{
                      width: "40px ",
                      marginLeft: "10px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={`http://localhost:8521/Staff/${staffDetails?.ProfileImg}`}
                    alt="img"
                  />
                </button>

                <div className="dropdown-content">
                  {/* <a href="#">Account</a>
                                    <a href="#">Settings</a> */}
                  <a href="/loginforeveryone">Logout</a>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal for attendance */}
      {/* <Modal
        show={show}
        onHide={() => {
          stopCamera();
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <video ref={videoRef} width="480" height="480" />
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <button onClick={captureImage}>Capture Image</button>
            <button onClick={downloadImage}>Download Image</button>
            {imageData && (
              <img src={imageData} alt="Captured" width="300" height="225" />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              stopCamera();
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* ganesh  */}
      <Modal
        show={show1}
        onHide={() => {
          handleClose1();
          setImageData(null);
          setshowCam(false);
          stopCamera();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {staffVal?.attendance?.filter(
            (val) =>
              moment(val.date).format("DD-MM-YYYY") ===
              moment(new Date()).format("DD-MM-YYYY")
          ).length ? (
            <></>
          ) : (
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>
                    <div className="text-center fs-1">
                      <AiOutlineCamera
                        onClick={() => {
                          startCamera();
                          setshowCam(true);
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="text-center">
                      {imageData ? (
                        <div
                          class="d-flex justify-content-sm-between"
                          style={{ alignItems: "end" }}
                        >
                          <img
                            src={imageData}
                            alt="Captured"
                            height="120"
                            width="120"
                          ></img>
                          <Button
                            style={{ height: "40px" }}
                            onClick={() => {
                              setpacLoader(true);
                              punchingTime();
                            }}
                          >
                            Punching Time
                          </Button>
                        </div>
                      ) : (
                        <img
                          src="/img/profile.png"
                          alt="Captured"
                          height="120"
                          width="120"
                        ></img>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
          {pacLoader ? (
            <div className="pacClass">
              <PacmanLoader
                className="pac-load-class"
                color={color}
                loading={loading}
                cssOverride={override}
                size={50}
                // background="blur()"
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <></>
          )}
          <div>
            {showCam ? (
              <>
                <div style={{ position: "relative" }}>
                  <video ref={videoRef} width="470" height="480" />
                  <canvas ref={canvasRef} style={{ display: "none" }} />
                  <img
                    src="/img/diaphragm.png"
                    alt="capture Image"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      bottom: "80px",
                      right: "219px",
                    }}
                    onClick={() => {
                      captureImage();
                      setshowCam(false);
                      stopCamera();
                    }}
                  />
                </div>
                {/* <button
                  onClick={() => {
                    captureImage();
                    setshowCam(false);
                    stopCamera();
                  }}
                >
                  Capture Image
                </button> */}
              </>
            ) : (
              <></>
            )}
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.no.</th>
                <th>Date</th>
                <th>Punching In</th>
                <th>Punching Out</th>
              </tr>
            </thead>
            <tbody>
              {staffVal?.attendance
                ?.filter(
                  (val) =>
                    moment(val.date).format("DD-MM-YYYY") ===
                    moment(new Date()).format("DD-MM-YYYY")
                )
                ?.map((item, i) => {
                  return (
                    <tr>
                      <td>{++i}</td>
                      <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                      <td>{item?.punchIn}</td>
                      <td>
                        {item?.punchOut ? (
                          item?.punchOut
                        ) : (
                          <Button onClick={() => punchingOutTime(item?._id)}>
                            Punching Out
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose1();
              setImageData(null);
              setshowCam(false);
              stopCamera();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};