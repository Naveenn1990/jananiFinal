import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const ReferLabSettings = () => {
    const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));
    console.log("ReferalLAB",ReferalLAB);
    const formdata = new FormData();
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Address1, setAddress1] = useState("");
    const [City, setCity] = useState("");
    const [state, setstate] = useState("");
    const UpdateClinicLab = async (e) => {
        e.preventDefault();
        formdata.set("Firstname", Firstname);
        formdata.set("Lastname", Lastname);
        formdata.set("Email", Email);
        formdata.set("Address1", Address1);
        formdata.set("City", City);
        formdata.set("state", state);
        try {
          const config = {
             url: `/ClinicLab/editClinicLabDetails/${ReferalLAB?._id}`,
            method: "put",
            baseURL: "http://localhost:8521/api",
            headers: { "content-type": "multipart/form-data" },
            data: formdata,
          };
    
          const res = await axios(config);
          if (res.status === 200) {
            sessionStorage.setItem("RLabDetails",JSON.stringify(res.data.labdetails))
            alert(res.data.success);
            window.location.reload("")
            setFirstname("");
            setLastname("");
            setEmail("");
            setAddress1("");
            setCity("");
            setstate("");
          }
        } catch (error) {
          console.log(error);
          if (error.response) {
            alert(error.response.data.error);
          } else {
            alert("An unexpected error occurred.");
          }
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
              label={ReferalLAB?.Firstname} 
              className="mb-3"
            >
              <Form.Control 
              onChange={(e)=>setFirstname(e.target.value)}
              type="text"             
              />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingName"
              label={ReferalLAB?.Lastname}
            >
              <Form.Control 
              type="text" 
            
              onChange={(e)=>setLastname(e.target.value)}
              />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label={ReferalLAB?.Email}
          >
            <Form.Control 
            type="email" 
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
          </FloatingLabel>

          <div className="d-flex gap-2 mb-5">
            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingCity"
              label={ReferalLAB?.City}
            >
              <Form.Control 
              type="text" 
              placeholder="City"
              onChange={(e)=>setCity(e.target.value)}
               />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              controlId="floatingState"
              label={ReferalLAB?.state}
            >
              <Form.Control 
              type="text" 
              placeholder="State/Province"
              onChange={(e)=>setstate(e.target.value)}
              />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            controlId="floatingStreetAddress"
            label={ReferalLAB?.Address1}
          >
            <Form.Control 
            type="text" 
            placeholder="Street Address"
            onChange={(e)=>setAddress1(e.target.value)}
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
              onClick={(e)=>UpdateClinicLab(e)}
            >
             Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};
