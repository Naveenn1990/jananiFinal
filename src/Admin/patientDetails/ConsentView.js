import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GeneralConsent from "./GeneralConsent";
import EstimatedCharge from "./EstimatedCharge";
import InformedConsent from "./InformedConsent";
import AnesthesiaConsent from "./AnesthesiaConsent";
import Badge from "react-badges";

const ConsentView = () => {
  const [generalConsent, setGeneralConsent] = useState(false);
  const [hospitalizedConsent, setHospitalizedConsent] = useState(false);
  const [informedConsent, setInformedConsent] = useState(false);
  const [anesthesiaConsent, setAnesthesiaConsent] = useState(false);
  return (
    <div className="consent">
      <div className="mt-3">
        <div className="d-flex gap-2">
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setGeneralConsent(true);
              setAnesthesiaConsent(false);
              setHospitalizedConsent(false);
              setInformedConsent(false);
            }}
          >
            General Consent Forms{" "}
            <Badge className="m-3" overlap="circle">
              5
            </Badge>
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setGeneralConsent(false);
              setAnesthesiaConsent(false);
              setHospitalizedConsent(true);
              setInformedConsent(false);
            }}
          >
            Hospitalized Estimated Charge Sheet Cum Consent Form{"  "}
            <Badge className="m-3" overlap="circle">
              5
            </Badge>
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setGeneralConsent(false);
              setAnesthesiaConsent(false);
              setHospitalizedConsent(false);
              setInformedConsent(true);
            }}
          >
            Informed Consent for High risk Procedure{" "}
            <Badge className="m-3" overlap="circle">
              5
            </Badge>
          </button>
          <button
            style={{
              padding: "6px",
              border: "none",
              backgroundColor: "#20958c",
              color: "white",
              borderRadius: "0px",
            }}
            onClick={() => {
              setGeneralConsent(false);
              setAnesthesiaConsent(true);
              setHospitalizedConsent(false);
              setInformedConsent(false);
            }}
          >
            Consent For Anesthesia / Sedation{" "}
            <Badge className="m-3" overlap="circle">
              5
            </Badge>
          </button>
        </div>
      </div>
      {generalConsent ? (
        <GeneralConsent />
      ) : hospitalizedConsent ? (
        <EstimatedCharge />
      ) : informedConsent ? (
        <InformedConsent />
      ) : anesthesiaConsent ? (
        <AnesthesiaConsent />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConsentView;
