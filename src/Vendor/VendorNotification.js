import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import { useNavigate } from "react-router-dom";

export const VendorNotification = () => {

  const VendorDetails = JSON.parse(sessionStorage.getItem("VendorDetails"));
  const [Notificationbyid, setNotificationbyid] = useState([]);
  const getNotificationbyid = async () => {
    try {
      const res = await axios.get(
       ` http://localhost:8521/api/notification/getnotificationvendorbyid/${VendorDetails?._id}`
      );
      if (res.status === 200) {
        setNotificationbyid(res.data.getdata);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Notificationbyid",Notificationbyid);

  useEffect(() => {
    getNotificationbyid();
  }, []);
  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        Notification
      </h4>
      <Container className="">
        <div
          style={{
            borderColor: "rgb(218, 225, 243)",
            border: "1px solid",
            borderRadius: "10px",
          }}
        >
          {Notificationbyid?.map((item)=>{
            return(
              <div
              style={{
                backgroundColor: "rgb(218, 225, 243)",
                margin: "10px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <p>
               {item?.message}
              </p>
            </div>
            )
          })}
        </div>
      </Container>
    </div>
  );
};
