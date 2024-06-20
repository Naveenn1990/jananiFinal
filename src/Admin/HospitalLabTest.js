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
import { Link } from "react-router-dom";
export default function Hospitallabtestlist() {
  // =============== Add Health Package =====================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // =============== Edit Health Package =====================
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // =============== Edit Health Package tests =====================
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // =============== delete Health Package =====================
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // =====================================================

  const [healthpkgName, sethealthpkgName] = useState("");
  const [healthpkgImg, sethealthpkgImg] = useState("");
  const [healthpkgPrice, sethealthpkgPrice] = useState("");
  const [testList, settestList] = useState([]);
  const [sampletestList, setsampletestList] = useState([]);
  const [selectedData, setselectedData] = useState({});
  const [View, setView] = useState({});

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const HospitallabListFn = () => {
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

  function removeTestList(id) {
    setsampletestList([
      ...sampletestList.filter((val) => val._id.toString() !== id.toString()),
    ]);
    settestList([
      ...testList.filter((val) => val.testid.toString() !== id.toString()),
    ]);
  }

  const AddHospitalHealthPkg = async () => {
    const obj = {
      healthpkgName,
      healthpkgImg,
      healthpkgPrice,
      testList: JSON.stringify(testList),
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
        getHospitalHealthPkgList();
        alert(res.data.success);
        handleClose();
        sethealthpkgName("");
        sethealthpkgImg("");
        sethealthpkgPrice("");
        settestList([]);
        setselectedData({});
        setView({});
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
          setFilteredCatList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalHealthPkgList([]);
      });
  };

  // =========== Edit Health package ===============
  const EditHospitalHealthPkg = async () => {
    const obj = {
      healthpkgName,
      healthpkgImg,
      healthpkgPrice,
    };
    try {
      const config = {
        url: "/admin/editHospitalLabHealthPkg/" + View?._id,
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        getHospitalHealthPkgList();
        alert(res.data.success);
        handleClose1();
        sethealthpkgName("");
        sethealthpkgImg("");
        sethealthpkgPrice("");
        settestList([]);
        setselectedData({});
        setView({});
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

  // =========== Delete Health package ===============
  const DeleteHospitalHealthPkg = async () => {
    try {
      const config = {
        url: "/admin/deleteHospitalHealthPkg/" + View?._id,
        method: "delete",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
      };
      const res = await axios(config);

      if (res.status === 200) {
        getHospitalHealthPkgList();
        alert(res.data.success);
        handleClose3();
        sethealthpkgName("");
        sethealthpkgImg("");
        sethealthpkgPrice("");
        settestList([]);
        setselectedData({});
        setView({});
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

  // =========== add available Health pkg ===========
  const AddAvailableHealthPkgTest = async () => {
    try {
      const config = {
        url: "/admin/addIntoHealthPkgTestList",
        method: "put",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: {
          Healthpkgid: View?._id,
          testobjid: selectedData?._id,
        },
      };
      const res = await axios(config);

      if (res.status === 200) {
        getHospitalHealthPkgList();
        alert(res.data.success);
        setView(res.data.view);
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

  // =========== delete available Health pkg ===========
  const DeleteAvailableHealthPkgTest = async (id) => {
    try {
      const config = {
        url: "/admin/removeHealthPkgTestList",
        method: "put",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: {
          Healthpkgid: View?._id,
          testobjid: id,
        },
      };
      const res = await axios(config);

      if (res.status === 200) {
        getHospitalHealthPkgList();
        alert(res.data.success);
        setView(res.data.view);
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

  // =========== Hospital Lab Health package search ================
  // search
  const [search, setSearch] = useState("");
  const [FilteredCatList, setFilteredCatList] = useState([]);
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = HospitalHealthPkgList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredCatList([...filterTable]);
    } else {
      // setSearch(search);
      // vialList();
      setFilteredCatList([...HospitalHealthPkgList]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

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
  useEffect(() => {
    HospitallabListFn();
    getHospitalHealthPkgList();
  }, []);
  console.log("View: ", View);
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={handleShow} />
          </div>
        </div>

        {/* ============== Add Health package Modal================== */}
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
              <Table bordered>
                <thead>
                  <th>S.no.</th>
                  <th>Test Category</th>
                  <th>Test Image</th>
                  <th>Test Name</th>
                  {/* <th>After Food Reference value</th>
                  <th>Before Food Reference value</th> */}
                  <th>General Reference value</th>
                  <th>Unit</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {sampletestList?.map((val, index) => {
                    return (
                      <tr style={{ backgroundColor: "#EBEBEB" }}>
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
                        {/* <td>{val?.afterFoodRefVal}</td>
                        <td>{val?.beforeFoodRefVal}</td> */}
                        <td>{val?.generalRefVal}</td>
                        <td>{val?.unit}</td>
                        <td>
                          <AiFillDelete
                            style={{ color: "red" }}
                            onClick={() => removeTestList(val?._id)}
                          />
                        </td>
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

        {/* ============== Edit Health Package Modal ================ */}
        <Modal size="lg" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Edit Health Package</Modal.Title>
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
                  placeholder={View?.healthpkgName}
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
                  Health Package Image:
                  <Link
                    to={`http://localhost:8521/HospitalLabHealthPkg/${View?.healthpkgImg}`}
                    target="blank_"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    Health Package Image
                  </Link>
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
                  placeholder={View?.healthpkgPrice}
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
            </div>
            <div
              style={{
                border: "1px solid white",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "white" }}>
                <b>Available Tests In Package:</b>
              </p>
              <Table bordered>
                <thead>
                  <th>S.no.</th>
                  <th>Test Name</th>

                  <th>General Reference value</th>
                  <th>Turn Around Time(TAT)</th>
                  <th>Unit</th>
                </thead>
                <tbody>
                  {View?.testList?.map((val, index) => {
                    return (
                      <tr style={{ backgroundColor: "#EBEBEB" }}>
                        <td>{index + 1}</td>

                        <td>{val?.testid?.testName}</td>

                        <td>{val?.testid?.generalRefVal}</td>
                        <td>{val?.testid?.tat}</td>
                        <td>{val?.testid?.unit}</td>
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
                onClick={handleClose1}
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
                onClick={EditHospitalHealthPkg}
              >
                Update
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* ============== Delete Health Package Modal ================ */}
        <Modal size="lg" show={show3} onHide={handleClose3}>
          <Modal.Header>
            <Modal.Title>Delete Health Package</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "white" }}>
              Are You sure! You want to <b style={{ color: "red" }}>DELETE</b>{" "}
              the entry?
            </p>
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
                onClick={handleClose3}
              >
                CANCEL
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                  border: "1px solid white",
                  padding: "4px 10px",
                }}
                onClick={DeleteHospitalHealthPkg}
              >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* ============== Edit Health Package tests Modal ================ */}
        <Modal size="lg" show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Edit Health package Tests</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12" style={{ marginTop: "4%" }}>
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
                    <option>Choose Lab Test List</option>
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
                    onClick={AddAvailableHealthPkgTest}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div
                className="col-lg-12"
                style={{
                  marginTop: "4%",
                  backgroundColor: "#ebebeb",
                  textAlign: "center",
                }}
              >
                <Table bordered>
                  <thead>
                    <th>S.no.</th>
                    <th>Test Name</th>
                    <th>General Reference value</th>
                    <th>Turn Around Time(TAT)</th>
                    <th>Unit</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {View?.testList?.map((val, index) => {
                      return (
                        <tr style={{ backgroundColor: "#EBEBEB" }}>
                          <td>{index + 1}</td>
                          <td>{val?.testid?.testName}</td>
                          <td>{val?.testid?.generalRefVal}</td>
                          <td>{val?.testid?.tat}</td>
                          <td>{val?.testid?.unit}</td>
                          <td>
                            <AiFillDelete
                              style={{ color: "red" }}
                              onClick={() =>
                                DeleteAvailableHealthPkgTest(val?.testid?._id)
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
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
                  border: "1px solid white",
                  fontWeight: "600",
                  marginRight: "20px",
                  padding: "4px 10px",
                }}
                onClick={handleClose2}
              >
                CANCEL
              </button>

              {/* <button
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
                  AddHospitalLabTest();
                }}
              >
                SUBMIT
              </button> */}
            </div>
          </Modal.Footer>
        </Modal>

        <Table responsive="md" bordered style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.NO</th>
              <th>Health Package Image</th>
              <th>Health Package Name</th>
              <th>Health Package Price</th>
              <th>Edit Package Tests</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {FilteredCatList?.map((val, index) => {
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
                  <td>
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "6%" }}
                      onClick={() => {
                        setView(val);
                        handleShow2();
                      }}
                    />
                  </td>
                  <td>
                    <MdEdit
                      style={{ color: "#20958c", marginRight: "6%" }}
                      onClick={() => {
                        setView(val);
                        handleShow1();
                      }}
                    />
                    <AiFillDelete
                      style={{ color: "red" }}
                      onClick={() => {
                        setView(val);
                        handleShow3();
                      }}
                    />
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
