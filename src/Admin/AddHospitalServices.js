import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";

export default function AddHospitalServices() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [hServiceTitle, sethServiceTitle] = useState("");
  const [hSurgeryService, sethSurgeryService] = useState("");
  const [hServicePriceInsuredPeople, sethServicePriceInsuredPeople] =
    useState("");
  const [hServicePriceNonInsuredPeople, sethServicePriceNonInsuredPeople] =
    useState("");
  const [hsid, sethsid] = useState("");

  const AddHospitalService = async (e) => {
    e.preventDefault();
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/admin/addHospitalServices",
        method: "post",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
        data: {
          hSurgeryService:hSurgeryService,
          hServiceTitle: hServiceTitle,
          hServicePriceInsuredPeople: hServicePriceInsuredPeople,
          hServicePriceNonInsuredPeople: hServicePriceNonInsuredPeople,
        },
      };
      let res = await axios(config);
      if (res.status === 201) {
        alert(res.data.success);
        getHospitalServiceList();
        handleClose();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [HServicesList, setHServicesList] = useState([]);

  const getHospitalServiceList = async () => {
    try {
      let response = await axios.get(
        "http://localhost:8521/api/admin/HospitalServicesList"
      );
      if (response.status === 200) {
        setHServicesList(response.data.allHospitalServices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHService = async () => {
    // if (!patientfirstname | !patientlastname | !conpassword | !gender | !DOB | !) {
    //   alert("Please Fill All The Field");
    // } else if (password !== conpassword) {
    //   alert("Password and ConfirmPassword should be same");
    // } else {
    try {
      const config = {
        url: "/admin/deleteHospitalServices/" + hsid,
        method: "delete",
        baseURL: "http://localhost:8521/api",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(config);
      if (res.status === 200) {
        getHospitalServiceList();
        alert(res.data.success);
        handleClose1();
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  useEffect(() => {
    getHospitalServiceList();
  }, []);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Add Hospital Service
          </h6>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => setShow(true)}
            />
          </div>
          <input
            placeholder="Search Service"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Hospital Services </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <input
                  placeholder="Hospital Service Title"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => sethServiceTitle(e.target.value)}
                ></input>
              </div>
              <div className="col-lg-12">
                <input
                  placeholder="Hospital Surgery Title"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) => sethSurgeryService(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Hospital Service Charges for Insurance"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) =>
                    sethServicePriceInsuredPeople(e.target.value)
                  }
                ></input>
              </div>

              <div className="col-lg-12">
                <input
                  placeholder="Hospital Service Charges for Non-insurance"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                    marginTop: "4%",
                  }}
                  onChange={(e) =>
                    sethServicePriceNonInsuredPeople(e.target.value)
                  }
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginRight: "20px",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={() => setShow(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={(e) => {
                  AddHospitalService(e);
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* delete model */}
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Hospital Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure! You wanted to delete the info parmanently
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteHService}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.no.</th>
              <th>Hospital Service Title</th>
              <th>Surgery Title</th>
              <th>
                Hospital Service Price
                <Table>
                  <thead>
                    <th>Insurance</th>
                    <th>Non-Insurance</th>
                  </thead>
                </Table>
              </th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {HServicesList?.map((item, i) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{++i}</td>
                  <td>{item?.hServiceTitle}</td>
                  <td>{item?.hSurgeryService}</td>
                  <td>
                    <Table>
                      <tbody>
                        <tr>
                          <td>{item?.hServicePriceInsuredPeople}</td>
                          <td>{item?.hServicePriceNonInsuredPeople}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <AiFillDelete
                        style={{ color: "red" }}
                        onClick={() => {
                          sethsid(item._id);
                          handleShow1();
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
