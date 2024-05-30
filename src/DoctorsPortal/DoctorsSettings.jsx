import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const DoctorsSettings = () => {
  let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
  console.log("doctorDetails", doctorDetails);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  useEffect(() => {
    setFirstname(doctorDetails?.Firstname || "");
    setLastname(doctorDetails?.Lastname || "");
    setEmail(doctorDetails?.Email || "");
    setAddress(doctorDetails?.Address1 || "");
  }, []);

  const UpdateDoctorsProfile = async () => {
    try {
      const config = {
        url: "/editDoctorDetails",
        method: "put",
        baseURL: "http://localhost:8521/api/Doctor/",
        headers: { "content-type": "application/json" },
        data: {
          dictorid: doctorDetails?._id,
          Firstname: Firstname,
          Lastname: Lastname,
          Email: Email,
          Address1: Address,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Settings
      </h4>
      <Container className="">
        {/* <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" fw-bold mb-4">Security Settings</h4>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label="Username"
          >
            <Form.Control type="text" placeholder="Username" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              className="create-account-password-1"
              type="password"
              placeholder="Password"
            />
            <FontAwesomeIcon icon={faEye} className="password-eye-1" />
          </FloatingLabel>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Confirm Password"
          >
            <Form.Control
              className="create-account-password-2"
              type="password"
              placeholder="Confirm Password"
            />
            <FontAwesomeIcon icon={faEye} className="password-eye-2" />
          </FloatingLabel>

          <div>
            <Button
              className=" mb-4"
              style={{
                width: "20%",
                height: "40px",
                fontSize: "16px",
                backgroundColor: "rgb(32 139 140)",
              }}
              onClick={() => {
                navigate("#");
              }}
            >
              Save
            </Button>
          </div>
        </Form> */}

        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" mb-4 fw-bold">Account Settings</h4>

          <div className="d-flex gap-4 mb-4">
            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingInput"
              label="First name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingName"
              label="Last name"
            >
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control
              type="Email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingStreetAddress"
            label="Street Address"
          >
            <Form.Control
              type="text"
              placeholder="Street Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FloatingLabel>
          <div>
            <Button
              className=" mb-4"
              style={{
                width: "20%",
                height: "40px",
                fontSize: "16px",
                backgroundColor: "rgb(32 139 140)",
              }}
              onClick={() => UpdateDoctorsProfile()}
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};
