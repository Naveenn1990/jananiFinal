import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export const ReferSettings = () => {
  const ReferralDocDetails = JSON?.parse(sessionStorage?.getItem("RDoctorDetails"));

  const [doctorfirstname, setdoctorfirstname] = useState("");
  const [doctorlastname, setdoctorlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [Address1, setAddress1] = useState("");
  const [ProfileImg, setProfileImg] = useState("");

  const formdata = new FormData();

  useEffect(() => {
   
      setdoctorfirstname(ReferralDocDetails?.Firstname || "");
      setdoctorlastname(ReferralDocDetails?.Lastname || "");
      setemail(ReferralDocDetails?.Email || "");
      setAddress1(ReferralDocDetails?.Address1 || "");
      setProfileImg(ReferralDocDetails?.ProfileImg || "");
   
  
  }, []);
  const nameRegex = /^[A-Za-z]+$/;
  const EditDocClinic = async () => {
    // if (!nameRegex.test(doctorfirstname)) {
    //   return alert("Name can only contain alphabetic characters.");
    // }
    // if (!nameRegex.test(doctorlastname)) {
    //   return alert("Name can only contain alphabetic characters.");
    // }
    // if (!nameRegex.test(email)) {
    //   return alert("Name can only contain alphabetic characters.");
    // }
    // if (!nameRegex.test(Address1)) {
    //   return alert("Name can only contain alphabetic characters.");
    // }
    // if (!password) {
    //   return alert("Enter Password.....");
    // }
    // if (!nameRegex.test(conpassword)) {
    //   return alert("Name can only contain alphabetic characters.");
    // }

    try {
      formdata.set("Firstname", doctorfirstname);
      formdata.set("Lastname", doctorlastname);
      formdata.set("Email", email);
      formdata.set("Address1", Address1);
      formdata.set("Password", password);
      formdata.set("ConfirmPassword", conpassword);
      formdata.set("ProfileImg", ProfileImg);
      const config = {
        url: "/Clinic/editClinicDetails/" + ReferralDocDetails?._id,
        method: "put",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "multipart/form-data" },
        data: formdata,
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem("RDoctorDetails",JSON.stringify(res.data.DoctorDetails))
        alert(res.data.success);
        window.location.reload("")      
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
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
          <h4 className=" fw-bold mb-4">Password Update</h4>

          <FloatingLabel
            className="mb-4"
            style={{ width: "600px" }}
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              className="create-account-password-1"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              className="password-eye-1"
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
              onChange={(e) => setconpassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ?  faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              className="password-eye-2"
            />
          </FloatingLabel>

          <div>          

            {(password || conpassword) && (
        <Button
          className="mb-4"
          style={{
            width: "20%",
            height: "40px",
            fontSize: "16px",
            backgroundColor: "rgb(32 139 140)",
          }}
          onClick={() => {
            EditDocClinic();
          }}
        >
          Update
        </Button>
      )}
          </div>
        </Form>

        <Form style={{ marginLeft: "100px", marginTop: "50px" }}>
          <h4 className=" mb-4 fw-bold">Profile Update</h4>
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
                onChange={(e) => setdoctorfirstname(e.target.value)}
                value={doctorfirstname}
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
                onChange={(e) => setdoctorlastname(e.target.value)}
                value={doctorlastname}
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
              onChange={(e) => setemail(e.target.value)}
              value={email}
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
              onChange={(e) => setAddress1(e.target.value)}
              value={Address1}
            />
          </FloatingLabel>
          <div className="mb-5">
            <Form.Control
              style={{ width: "600px" }}
              type="file"
              accept="image/*"
              placeholder="Street Address"
              onChange={(e) => setProfileImg(e.target.files[0])}
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
              onClick={() => {
                EditDocClinic()
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
