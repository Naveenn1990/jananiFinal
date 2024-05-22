import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import GeneralConsent from "./GeneralConsent";
import EstimatedCharge from "./EstimatedCharge";
import InformedConsent from "./InformedConsent";
import AnesthesiaConsent from "./AnesthesiaConsent";
import Badge from "react-badges";

const ConsentView = ({SelectCause}) => {
let generalcform = "GeneralConsentForms";
let Hospitalizedcform = "HospitalizedConsentForms";
let Highriskcform = "HighriskConsentForms";
let Anesthesiacform = "AnesthesiaConsentForms";
const [GeneralCForm, setGeneralCForm] = useState([])
console.log("GeneralCForm",GeneralCForm);
const [HospitalizedCForm, setHospitalizedCForm] = useState([])
const [HighRiskCForm, setHighRiskCForm] = useState([])
const [AnesthesiaCForm, setAnesthesiaCForm] = useState([])
useEffect(() => {
  if(SelectCause){
    const generalCFLen = SelectCause?.consentform?.filter((ele)=>ele.formname == generalcform)
    setGeneralCForm(generalCFLen)


    const HospitalizedCFLen = SelectCause?.consentform?.filter((ele)=>ele.formname == Hospitalizedcform)
    setHospitalizedCForm(HospitalizedCFLen)

    const HighRiskCFLen = SelectCause?.consentform?.filter((ele)=>ele.formname == Highriskcform)
    setHighRiskCForm(HighRiskCFLen)

    const AnesthesiaCFLen = SelectCause?.consentform?.filter((ele)=>ele.formname == Anesthesiacform)
    setAnesthesiaCForm(AnesthesiaCFLen)
   
  }

}, [SelectCause])


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
           {GeneralCForm?.length} 
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
             {HospitalizedCForm?.length}
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
              {HighRiskCForm?.length}
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
             {AnesthesiaCForm?.length}
            </Badge>
          </button>
        </div>
      </div>
      {generalConsent ? (
       
        <GeneralConsent viewGeneralConsentform = {GeneralCForm}/>
      ) : hospitalizedConsent ? (
        <EstimatedCharge  HospitalizedCForm = {HospitalizedCForm}/>
      ) : informedConsent ? (
        <InformedConsent HighRiskCForm = {HighRiskCForm}/>
      ) : anesthesiaConsent ? (
        <AnesthesiaConsent AnesthesiaCForm = {AnesthesiaCForm} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ConsentView;
