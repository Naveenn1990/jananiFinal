import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SiYourtraveldottv } from "react-icons/si";
import { BsEyeFill, BsEyeSlashFill, BsFacebook } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

// import "./admin.css";
import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [view, setview] = useState(false);
  const [type, settype] = useState("password");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signin = async (e) => {
    if (!email | !password) {
      alert("Please Fill All The Field");
    } else {
      try {
        const config = {
          url: "/signin",
          method: "post",
          baseURL: "https://buddy.firm.in/api/user",
          headers: { "content-type": "application/json" },
          data: {
            email: email,
            password: password,
          },
        };
        let res = await axios(config);
        if (res.status === 200) {
          console.log(res.data);
          alert("Login Success");
          sessionStorage.setItem("admin", JSON.stringify(res.data.admin));
          window.location.assign("/admindashboard");
        }
      } catch (error) {
        console.log(error.response);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  return (
    <>
      <div className="Adminlogin" style={{ padding: "4% 2%" }}>
        <div
          style={{
            position: "relative",
            top: "25%",
            margin: " 0% 33%",
            padding: "2%",
            background:
              "linear-gradient(330deg, rgba(36,111,143,1) 0%, rgba(213,238,249,1) 63%, rgba(36,111,143,1) 100%)",
            backgroundColor: "white",
          }}
        >
          <h3 style={{ textAlign: "center" }}>ADMIN LOGIN</h3>
          {/* <label>Email</label> */}
          <br></br>
          <input
            placeholder="Enter Email here..."
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: "100%",
              padding: "2%",
              border: "1px solid white",
              //   borderRadius: "20px",
            }}
          ></input>
          <br></br>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid white",
              margin: "5% 0%",
            }}
          >
            <input
              type={type}
              placeholder="Enter Password here..."
              onChange={(e) => setpassword(e.target.value)}
              style={{
                width: "100%",
                padding: "2%",
                border: "1px solid white",

                //   borderRadius: "20px",
              }}
            ></input>
            {view ? (
              <BsEyeSlashFill
                BsEyeSlashFill
                style={{
                  margin: "0% 2%",
                  fontSize: "25px",
                }}
                onClick={() => {
                  setview(false);
                  settype("password");
                }}
              />
            ) : (
              <BsEyeFill
                style={{ margin: "0% 2%", fontSize: "25px" }}
                onClick={() => {
                  setview(true);
                  settype("text");
                }}
              />
            )}
          </div>

          <h5 style={{ textAlign: "center", fontSize: "15px" }}>
            <button
              style={{
                border: "none",
                padding: "10px 40px",
                margin: "2%",
                fontWeight: "500",
                borderRadius: "20px",
                backgroundColor: "#253238",
                color: "white",
                textAlign: "center",
              }}
              onClick={signin}
            >
              Login
            </button>
          </h5>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
