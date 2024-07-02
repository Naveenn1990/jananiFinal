import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
    const [Profileimage, setProfileimage] = useState("");
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
      setFirstname(ReferalLAB?.Firstname || "");
      setLastname(ReferalLAB?.Lastname || "");
      setEmail(ReferalLAB?.Email || "");
      setCity(ReferalLAB?.City || "");
      setstate(ReferalLAB?.state || "");
      setAddress1(ReferalLAB?.Address1 || "");
      setProfileimage(ReferalLAB?.ProfileImg || "");
    }, [])
    const firstNameRegex = /^[A-Za-z]{2,30}$/;
    const lastNameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressRegex = /^[A-Za-z0-9\s,.'-]{5,100}$/;
    const cityRegex = /^[A-Za-z\s]{2,50}$/;
    const stateRegex = /^[A-Za-z\s]{2,50}$/;
    const UpdateClinicLab = async (e) => {
        e.preventDefault();
        if (!Firstname || !firstNameRegex.test(Firstname)) {
          alert('Invalid first name. Only letters are allowed, and it should be between 2 and 30 characters long.');
          return;
        }
        if (!Lastname || !lastNameRegex.test(Lastname)) {
          alert('Invalid last name. Only letters are allowed, and it should be between 2 and 30 characters long.');
          return;
        }
        if (!Email || !emailRegex.test(Email)) {
          alert('Invalid email address.');
          return;
        }
        if (!Address1 || !addressRegex.test(Address1)) {
          alert('Invalid address. Only alphanumeric characters, spaces, commas, periods, and dashes are allowed, and it should be between 5 and 100 characters long.');
          return;
        }
        if (!City || !cityRegex.test(City)) {
          alert('Invalid city name. Only letters and spaces are allowed, and it should be between 2 and 50 characters long.');
          return;
        }
        if (!state || !stateRegex.test(state)) {
          alert('Invalid state name. Only letters and spaces are allowed, and it should be between 2 and 50 characters long.');
          return;
        }
        formdata.set("Firstname", Firstname);
        formdata.set("Lastname", Lastname);
        formdata.set("Email", Email);
        formdata.set("Address1", Address1);
        formdata.set("City", City);
        formdata.set("state", state);
        formdata.set("ProfileImg", Profileimage);
        formdata.set("Password", Password);
        formdata.set("ConfirmPassword", ConfirmPassword);
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

      const [showPassword, setShowPassword] = useState(false);

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Settings
      </h4>
      <Container className="">
        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" fw-bold mb-4">Password Change</h4>

          {/* <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingEmail"
            label="Username"
          >
            <Form.Control type="text" placeholder="Username" />
          </FloatingLabel> */}

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            label="Password"
          >
            <Form.Control
              className="create-account-password-1"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FontAwesomeIcon
             icon={showPassword ? faEyeSlash : faEye} 
             className="password-eye-1" 
             onClick={togglePasswordVisibility}
             />
          </FloatingLabel>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Confirm Password"
          >
            <Form.Control
              className="create-account-password-2"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon 
             icon={showPassword ? faEyeSlash : faEye} 
             onClick={togglePasswordVisibility}
            className="password-eye-2"
            
            />
          </FloatingLabel>

          <div>
          {(Password || ConfirmPassword) && (
        <Button
          className="mb-4"
          style={{
            width: "20%",
            height: "40px",
            fontSize: "16px",
            backgroundColor: "rgb(32 139 140)",
          }}
          type="submit"
        >
          Update
        </Button>
      )}
          </div>
        </Form>

        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" mb-4 fw-bold">Account Settings</h4>

          <div className="d-flex gap-4 mb-4">
            <FloatingLabel
              style={{ width: "290px" }}
              label="First Name" 
              className="mb-3"
            >
              <Form.Control 
              onChange={(e)=>setFirstname(e.target.value)}
              type="text"  
              value={Firstname}           
              />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              label="Last Name"
            >
              <Form.Control 
              type="text" 
            
              onChange={(e)=>setLastname(e.target.value)}
              value={Lastname}
              />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            label="Email"
          >
            <Form.Control 
            type="email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={Email}
            />
          </FloatingLabel>

          <div className="d-flex gap-2 mb-5">
            <FloatingLabel
              style={{ width: "290px" }}
              label="City"
            >
              <Form.Control 
              type="text" 
              onChange={(e)=>setCity(e.target.value)}
              value={City}
               />
            </FloatingLabel>

            <FloatingLabel
              style={{ width: "290px" }}
              label="State"
            >
              <Form.Control 
              type="text" 
              placeholder="State/Province"
              onChange={(e)=>setstate(e.target.value)}
              value={state}
              />
            </FloatingLabel>
          </div>

          <FloatingLabel
            className="mb-5"
            style={{ width: "600px" }}
            label="Address 1"
          >
            <Form.Control 
            type="text" 
            placeholder="Street Address"
            onChange={(e)=>setAddress1(e.target.value)}
            value={Address1}
             />
          </FloatingLabel>
          <div className="mb-5">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control           
          style={{ width: "600px" }}
            type="file" 
            accept="image/*"
            onChange={(e)=>setProfileimage(e.target.files[0])}      
             />
          </div>
          

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
