import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Label from "react-bootstrap/FormLabel";
import { useNavigate } from "react-router-dom";

export const VendorNotification = () => {
  const navigate = useNavigate();

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
          <div
            style={{
              backgroundColor: "rgb(218, 225, 243)",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgb(218, 225, 243)",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "rgb(218, 225, 243)",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
