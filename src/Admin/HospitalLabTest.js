import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlineBarcode } from "react-icons/ai";
import { BsEyeFill, BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { BiSolidFilePdf } from "react-icons/bi";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Barcode from "react-barcode";
import axios from "axios";
export default function Hospitallabtestlist() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  // =====================================================

  const [healthpkgName, sethealthpkgName] = useState("");
  const [healthpkgImg, sethealthpkgImg] = useState("");
  const [healthpkgPrice, sethealthpkgPrice] = useState("");
  const [testList, settestList] = useState([]);
  const [sampletestList, setsampletestList] = useState([]);
  const [selectedData, setselectedData] = useState({});

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          setHospitalLabList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };
  function addTestList() {
    setsampletestList((curr) => [...curr, selectedData]);
    settestList((curr) => [...curr, { testid: selectedData?._id }]);
  }

  const AddHospitalHealthPkg = async () => {
    const obj = {
      healthpkgName,
      healthpkgImg,
      healthpkgPrice,
      testList,
    };
    try {
      const config = {
        url: "/admin/AddHospitalHealthPkg",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        // HospitallabList();
        setShow(false);
        sethealthpkgName("");
        sethealthpkgImg("");
        sethealthpkgPrice("");
        settestList([]);
        setselectedData({});
      }
    } catch (err) {
      console.log(err);
      return alert(
        err.response.data.error
          ? err.response.data.error
          : "Something went wrong! Please try again!"
      );
    }
  };

  const [HospitalHealthPkgList, setHospitalHealthPkgList] = useState([]);
  const getHospitalHealthPkgList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalHealthPkg")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalHealthPkgs;
          setHospitalHealthPkgList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalHealthPkgList([]);
      });
  };
  // =======================================================

  const createPDF = async () => {
    // setRotate(360);
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Invoice.pdf");
  };

  const createPdf11 = () => {
    createPDF();
  };
  console.log("HospitalHealthPkgList: ", HospitalHealthPkgList);
  useEffect(() => {
    HospitallabList();
    getHospitalHealthPkgList();
  }, []);
  return (
    <div>
      <div style={{ padding: "1%" }}>
        {/* <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
          Hospital Lab
        </h6> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
          }}
        >
          <input
            placeholder="Search Lab Test"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Health Package</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Health Package Name
                </label>
                <input
                  placeholder="Health Package Name"
                  type="text"
                  value={healthpkgName}
                  onChange={(e) => sethealthpkgName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                ></input>
              </div>

              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Health Package Image
                </label>
                <input
                  placeholder="Health Package Image"
                  type="file"
                  id="cat-img"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  accept="image/*"
                  onChange={(e) => sethealthpkgImg(e.target.files[0])}
                ></input>
              </div>

              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Health Package Price
                </label>
                <input
                  placeholder="Health Package Price"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={healthpkgPrice}
                  onChange={(e) => sethealthpkgPrice(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Health Package Test List
                </label>
                <div className="d-flex">
                  <select
                    style={{
                      width: "100%",
                      padding: "8px 20px",
                      borderRadius: "0px",
                      border: "1px solid #ebebeb",
                      backgroundColor: "#ebebeb",
                    }}
                    onChange={(e) =>
                      setselectedData(JSON.parse(e.target.value))
                    }
                  >
                    <option>Choose Lab Category</option>
                    {HospitalLabList?.map((item) => {
                      return (
                        <option value={JSON.stringify(item)}>
                          {item?.testName}
                        </option>
                      );
                    })}
                  </select>
                  <button
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      border: "1px solid white",
                      fontWeight: "600",
                      marginRight: "20px",
                      marginLeft: "10px",
                      padding: "4px 10px",
                    }}
                    onClick={addTestList}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid white",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <Table>
                <thead>
                  <th>S.no.</th>
                  <th>Test Category</th>
                  <th>Test Image</th>
                  <th>Test Name</th>
                  <th>After Food Reference value</th>
                  <th>Before Food Reference value</th>
                  <th>General Reference value</th>
                  <th>Unit</th>
                </thead>
                <tbody>
                  {sampletestList?.map((val, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{val?.testCategory?.testCategory}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/HospitalLabTest/${val?.testImg}`}
                            style={{ width: "50px" }}
                            alt="no-img"
                          />
                        </td>
                        <td>{val?.testName}</td>
                        <td>{val?.afterFoodRefVal}</td>
                        <td>{val?.beforeFoodRefVal}</td>
                        <td>{val?.generalRefVal}</td>
                        <td>{val?.unit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
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
                onClick={AddHospitalHealthPkg}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Lab test Price</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab Test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div className="col-lg-6">
                <input
                  placeholder="Lab Test Price"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
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
                onClick={() => setShow1(false)}
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
                onClick={() => {
                  setShow1(false);
                  alert("lab test price added");
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Lab Total Revenue</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                >
                  <option>Select Lab test</option>
                  <option>Test-1</option>
                  <option>Test-2</option>
                </select>
              </div>

              <div
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#20958c",
                  color: "white",
                  margin: "5% 20% 2% 20%",
                  width: "60%",
                  padding: "4%",
                }}
              >
                <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                  Total Revenue
                </h6>
                <h6 style={{ textAlign: "center", fontSize: "30px" }}>
                  ₹ 12000
                </h6>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Body>
            <div id="pdf" style={{ padding: "4%" }}>
              <h5 style={{ textAlign: "center", marginBottom: "2%" }}>
                Lab Test Details
              </h5>
              <Table responsive="lg" style={{ marginTop: "1%" }}>
                <tbody>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Number :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>#20958c</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Patient Name :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      Anuj Kumar
                    </td>
                  </tr>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Gender :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>Male</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Date of birth :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      16/01/1999
                    </td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Mobile Number :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      1232123545
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Email :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      test@gmail.com
                    </td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Age :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>24</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Blood Group :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>AB+</td>
                  </tr>

                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Type :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>HS-1AS</td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        backgroundColor: "#20958c",
                        color: "white",
                        fontWeight: "600",
                      }}
                    >
                      Test Name :
                    </td>
                    <td style={{ border: "1px solid lightgrey" }}>
                      Blood Test
                    </td>
                  </tr>
                </tbody>
              </Table>
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
                onClick={() => setShow4(false)}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  border: "1px solid white",
                  fontWeight: "600",
                  padding: "4px 10px",
                }}
                onClick={createPDF}
              >
                PRINT PDF
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.NO</th>
              <th>Health Package Image</th>
              <th>Health Package Name</th>
              <th>Health Package Price</th>
            </tr>
          </thead>
          <tbody>
            {HospitalHealthPkgList?.map((val, index) => {
              return (
                <tr style={{ fontSize: "15px", textAlign: "center" }}>
                  <td>{index + 1}.</td>
                  <td>
                    <img
                      src={`http://localhost:8521/HospitalLabHealthPkg/${val?.healthpkgImg}`}
                      style={{ width: "100px" }}
                      alt="no-img"
                    />
                  </td>
                  <td>{val?.healthpkgName}</td>
                  <td>{val?.healthpkgPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
