import React from "react";
import { Table, Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const AnesthesiaConsent = ({AnesthesiaCForm}) => {
  return (
    <>

      <div
        className="mt-2 d-flex text-end gap-2"
        style={{ alignItems: "right", justifyContent: "right" }}
      >
        <Button
          style={{
            padding: "6px",
            border: "none",
            backgroundColor: "#20958c",
            color: "white",
            borderRadius: "0px",
            marginRight: "20px",
          }}
        >
          Print <FiDownload />
        </Button>
      </div>
      <div
        id="pdf"
        style={{
          padding: "15px",
          overflow: "hidden",
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            padding: "5px",
            border: "2px solid #20958C",
            // width: "1073px",
            margin: "auto",
            borderRadius: "20px",
            // height: "1700px",
          }}
        >
          <div className="d-flex align-items-center mb-1 justify-content-around ps-5 pe-5 pt-4">
            <div className="d-flex align-items-center">
              <img src="/Images/logo.jpg" alt="" style={{ width: "100px" }} />
            </div>
            <div className="text-center">
              <h4 className="fw-bold" style={{ fontSize: "25px" }}>
                JANANI MULTISPECIALITY HOSPITAL AND RESEARCH CENTER
              </h4>
              <h6 className="fw-bold" style={{ fontSize: "19px" }}>
                Beside Canara Bank, Jalanagar Main Road, K. K. Colony,
                Vijaypura-586109
              </h6>
              <h6 style={{ fontSize: "16px" }}>
                Tel:08352-277077 Cell:9606031158, 7090831204
                Email:jananihospital2018@gmail.com
              </h6>
            </div>
          </div>
          <div
            className="text-center"
            style={{
              borderBottom: "1px solid #20958C",
              width: "100%",
              textAlign: "center",
            }}
          ></div>
          <div className="text-center mt-1">
            {" "}
            <h6
              className="fw-bold mt-2"
              style={{ color: "#20958C", fontSize: "30px" }}
            >
              Consent For Anesthesia / Sedation
            </h6>
          </div>
          <div
            style={{
              paddingLeft: "42px",
              paddingRight: "42px",
              textAlign: "justify",
            }}
          >
            <div className="patientViewtable">
              <Table
                className=""
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Patient Name:{" "}
                    <span style={{ fontWeight: "bold" }}>{AnesthesiaCForm[0]?.patientname}</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Date: <span style={{ fontWeight: "bold" }}>02/05/2024</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Age: <span style={{ fontWeight: "bold" }}>25 years</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    OP No: <span style={{ fontWeight: "bold" }}>DFV12RFE</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    IP No: <span style={{ fontWeight: "bold" }}>FR234DF</span>{" "}
                  </td>
                  <td style={{ width: "33%", border: "1.5px  solid #20958C" }}>
                    Sex: <span style={{ fontWeight: "bold" }}>Male</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Diagnosis :{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {AnesthesiaCForm[0]?.Diagnosis}
                    </span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Operative Procedure/ Operation :{" "}
                    <span style={{ fontWeight: "bold" }}> {AnesthesiaCForm[0]?.OperativeProce}</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    Type of Anesthesia Local/ General/ Spinal/ Epidural/ Never
                    Block/ Combined/ MAC :{" "}
                    <span style={{ fontWeight: "bold" }}>Spinal</span>{" "}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ border: "1.5px  solid #20958C" }}>
                    <p>
                      I, <span style={{ fontWeight: "bold" }}> {AnesthesiaCForm[0]?.patientname}</span>{" "}
                      (Patient Name), give my full consent out of my own free
                      will to undergo the following surgery / procedure{" "}
                      <span style={{ fontWeight: "bold" }}>{AnesthesiaCForm[0]?.NameOfSurgery}</span> at Janani
                      Multispeciality Hospital I understand that the above
                      mentioned procedure necessitates the administration of
                      local/sedation/ regional/general anesthesia or any
                      combination there of to provide the required anesthesia
                      service.
                      <br />
                      <br />
                      I, understand that anesthetic agent zould be administered
                      by injecting in to the bloodstream (IV LINE), breathed in
                      to the lungs, myected through a needle/catheter placed
                      either directly in to the spinal canal er immediate
                      outside the spinal canal block is achieved by injecting
                      the anesthetic agent near the nerves.
                      <br />
                      <br />
                      I, undentand results and effects of anesthesia depends on
                      the type administered and it decreasedless of
                      feeling/numbness, loss of movement to tatal unconscious
                      state. vary from temporary.
                      <br />
                      <br />
                      I, have been explained that all forms of anesthesia
                      invalve some risks and no guarantees or promises can the
                      results of the procedure/treatments, I understand that
                      there of aesthesia Theses include Bruising, pain made
                      concerning some infrequent complications that can occur
                      due to use ome injuryst the side of injections, temporary
                      breathing difficulties, temporary nerve damage muscle
                      paint, asthmatic reactions, headaches, the possibility of
                      sensation during the operation (especially with Caesarean
                      section and some emergency procedures), damage to teeth
                      and dental prostheses, lip and tongue, temperare, but nous
                      complications including, heart attack, stroke, severe
                      allergic ar sensitivity reactions, brain camage, kidney o
                      failure, lung damage, paraplegia or quadriplegie,
                      permanent nerve e or blood vessel damage, eye eye injury,
                      damage, to the larynx Ivoice boa and vocal cards perumania
                      and infaction bom blood transfusion The possibility of
                      more serious complications including death is quite
                      remote, but it does exists.
                      <br />
                      <br />
                      I, have been explained language known & understood by
                      about the nature of the surgery/procedure, type of
                      anarsthesia used, and it's benefits, and costs, inks
                      associated with it, other alternatives and its prognosis.
                      <br />
                      <br />
                      I, understand that local anaesthesia with or without
                      sedation may not be successful and therefor an altenative
                      method may be used as deemend necessary. I hereby absolve
                      Janani Multispeciailty Hospital
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {AnesthesiaCForm[0]?.NameOfSurgery}
                      </span>
                      and its surgical team & hospital staff of anyliability for
                      consequences arising because of the above-mentioned
                      surgery/procedure.
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                        Consent of Patient Rapresentative/Surrogate{" "}
                      </span>
                      <br />
                      The patient is unable to give consent because he/she is
                      minor/Unconscious hence I,{" "}
                      <span style={{ fontWeight: "bold" }}>
                      {AnesthesiaCForm[0]?.patientname}
                      </span>{" "}
                      (Name /relationship with Patient) therefore give my
                      consent an behalf of the patient after discussion with the
                      Doctor for the above mentioned Surgery/operative/Invasive
                      Proceudre
                    </p>
                  </td>
                </tr>
              </Table>

              <Table
                style={{
                  border: "1px  solid #20958C",
                  borderCollapse: "collapse",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}></th>
                    <th style={{ width: "20%" }}>Name</th>
                    <th style={{ width: "20%" }}>Signature</th>
                    <th style={{ width: "20%" }}>Date</th>
                    <th style={{ width: "20%" }}>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Patient/Patirnt Surrogate
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.PatientSurrogate}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    > </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    > {AnesthesiaCForm[0]?.Date2}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    > {AnesthesiaCForm[0]?.Time1}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Witness
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Witness1}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Date3}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Time2}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Doctor
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Doctor2}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Date4}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Time3}</td>
                  </tr>
                  <tr>
                    <td style={{ width: "20%", border: "1px solid #20958C" }}>
                      Relative/Legal_guardian(relationship with patient)
                    </td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Guardian1}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    ></td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Date5}</td>
                    <td
                      style={{ width: "20%", border: "1px solid #20958C" }}
                    >{AnesthesiaCForm[0]?.Time4}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default AnesthesiaConsent;
