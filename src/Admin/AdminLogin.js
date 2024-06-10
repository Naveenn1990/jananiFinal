import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function AdminLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginAdmin = async () => {
    try {
      const config = {
        url: "/admin/subadminLogin",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          email: email,
          password: password,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        sessionStorage.setItem(
          "adminDetails",
          JSON.stringify(res.data.subadmindata)
        );
        alert("Login successful");
        window.location.assign("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      return alert(error.response.data.error);
    }
  };
  return (
    <div>
      <div
        className="row"
        style={{
          height: "300px",
          width: "500px",
          border: "1px solid aliceblue",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "aliceblue",
        }}
      >
        <div className="col-md-6 d-flex justify-content-center align-item-center">
          <img
            src="/Images/logo.png"
            alt="no-image"
            style={{ width: "236px" }}
          />
        </div>
        <div className="col-md-6 p-3">
          <div style={{ marginTop: "36px" }}>
            <h4
              style={{
                fontFamily: "monospace",
                fontWeight: "600",
                fontSize: "30px",
              }}
            >
              Admin Login
            </h4>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            {/* <input
            type="password"
            placeholder="Enter Password"
            style={{ marginTop: "6px", padding: "10px" }}
          /> */}
            <div className="d-flex justify-content-center">
              <Button onClick={loginAdmin}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
