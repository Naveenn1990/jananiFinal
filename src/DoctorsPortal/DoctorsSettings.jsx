import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const DoctorsSettings = () => {
    let doctorDetails = JSON.parse(sessionStorage.getItem("DoctorDetails"));
    console.log("doctorDetails",doctorDetails);

    const UpdateDoctorsProfile = async ()=>{
        try {
            
        } catch (error) {
            
        }
    }
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
              <Form.Control type="text" placeholder="First Name" />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingName"
              label="Last name"
            >
              <Form.Control type="text" placeholder="Last Name" />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label="Email"
          >
            <Form.Control type="Email" placeholder="Email" />
          </FloatingLabel>

          <div className="d-flex gap-2 mb-5">
            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingCity"
              label="City"
            >
              <Form.Control type="text" placeholder="City" />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingState"
              label="State/Province"
            >
              <Form.Control type="text" placeholder="State/Province" />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingStreetAddress"
            label="Street Address"
          >
            <Form.Control type="text" placeholder="Street Address" />
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
           
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};
