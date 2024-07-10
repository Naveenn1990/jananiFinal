import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Hospitallab() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  // ================ delete Hospital lab test =======================
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  // ================ show Hospital lab test description=======================
  const [showTestDetails, setShowTestDetails] = useState("");
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [vialneededArr, setvialneededArr] = useState([]);
  const [ShowvialDetailsModal, setShowvialDetailsModal] = useState(false);
  const handleClosevialDetailsModal = () => setShowvialDetailsModal(false);
  const handleShowvialDetailsModal = () => setShowvialDetailsModal(true);

  const [HospitalLabCatList, setHospitalLabCatList] = useState([]);
  const HospitallabCategories = () => {
    axios
      .get("http://localhost:8521/api/admin/HospitalLabTestCategoryList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.list;
          setHospitalLabCatList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabCatList([]);
      });
  };
  const [View, setView] = useState({});
  const [testCategory, settestCategory] = useState("");
  const [testName, settestName] = useState("");
  const [priceNonInsurance, setpriceNonInsurance] = useState(null);
  const [priceInsurance, setpriceInsurance] = useState(null);
  const [unit, setunit] = useState("");
  // const [beforeFoodRefVal, setbeforeFoodRefVal] = useState("");
  // const [afterFoodRefVal, setafterFoodRefVal] = useState("");
  const [generalRefVal, setgeneralRefVal] = useState("");
  const [testDescription, settestDescription] = useState("");
  const [tat, settat] = useState("");
  const [testImg, settestImg] = useState({});
  const [vialsneeded, setvialsneeded] = useState([]);
  const [showvialsneeded, setshowvialsneeded] = useState([]);
  const [addedVialObj, setaddedVialObj] = useState("");
  function vialsAddedFn() {
    setvialsneeded([
      ...vialsneeded,
      {
        vialid: addedVialObj?._id,
      },
    ]);
    setshowvialsneeded([
      ...showvialsneeded,
      {
        vialid: addedVialObj?._id,
        vial: addedVialObj?.vial,
      },
    ]);
  }

  function vialRemFn(id) {
    setvialsneeded([
      ...vialsneeded.filter((val) => val.vialid?.toString() !== id?.toString()),
    ]);
    setshowvialsneeded([
      ...showvialsneeded.filter(
        (val) => val.vialid?.toString() !== id?.toString()
      ),
    ]);
  }

  const AddHospitalLabTest = async () => {
    const obj = {
      testCategory,
      testName,
      priceNonInsurance,
      priceInsurance,
      unit,
      // beforeFoodRefVal,
      // afterFoodRefVal,
      generalRefVal,
      testImg,
      vialsneeded: JSON.stringify(vialsneeded),
      tat,
      testDescription,
    };
    try {
      const config = {
        url: "/admin/HospitalLabTest",
        method: "post",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        HospitallabList();
        setShow(false);
        settestCategory("");
        settestName("");
        setpriceNonInsurance(null);
        setpriceInsurance(null);
        setunit("");
        settat("");
        // setbeforeFoodRefVal("");
        // setafterFoodRefVal("");
        setgeneralRefVal("");
        settestImg({});
        setvialsneeded([]);
        setshowvialsneeded([]);
        setaddedVialObj("");
        settestDescription("");
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

  const editHospitalLabTestDetails = async () => {
    const obj = {
      testCategory,
      testName,
      priceNonInsurance,
      priceInsurance,
      unit,
      generalRefVal,
      testImg,
      tat,
      testDescription,
    };
    try {
      const config = {
        url: "/admin/editHospitalLabtestDetails/" + View?._id,
        method: "put",
        headers: { "content-type": "multipart/form-data" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 200) {
        alert(res.data.success);
        HospitallabList();
        handleClose4();
        settestCategory("");
        settestName("");
        setpriceNonInsurance(null);
        setpriceInsurance(null);
        setunit("");
        settat("");
        setgeneralRefVal("");
        settestImg({});
        setvialsneeded([]);
        setshowvialsneeded([]);
        setaddedVialObj("");
        settestDescription("");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        return alert(error.response.data.error);
      }
      return alert("Server is not responding!");
    }
  };

  const deleteHospitalLabTestDetails = async () => {
    try {
      const config = {
        url: "/admin/deleteHospitalLabtestDetails/" + View?._id,
        method: "delete",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
      };
      const res = await axios(config);

      if (res.status === 200) {
        alert(res.data.success);
        HospitallabList();
        handleClose6();
        settestCategory("");
        settestName("");
        setpriceNonInsurance(null);
        setpriceInsurance(null);
        setunit("");
        settat("");
        setgeneralRefVal("");
        settestImg({});
        setvialsneeded([]);
        setshowvialsneeded([]);
        setaddedVialObj("");
        settestDescription("");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        return alert(error.response.data.error);
      }
      return alert("Server is not responding!");
    }
  };

  const AddVialDetails = async () => {
    try {
      const config = {
        url: "/admin/addVialInTest",
        method: "put",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: {
          vialObjectid: addedVialObj?._id,
          labtestid: View?._id,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        HospitallabList();
        alert(res.data.success);
        setView(res.data.view);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        return alert(error.response.data.error);
      }
      return alert("server is not responding!");
    }
  };

  const deleteVialDetails = async (id) => {
    try {
      const config = {
        url: "/admin/deleteVialFromTest",
        method: "put",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: {
          vialObjectid: id,
          labtestid: View?._id,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        HospitallabList();
        alert(res.data.success);
        setView(res.data.view);
      }
    } catch (error) {
      console.log(error);
      alert("Not deleted successfully!");
    }
  };

  const [HospitalLabList, setHospitalLabList] = useState([]);
  const [HospitalLabListImmutable, setHospitalLabListImmutable] = useState([]);
  const HospitallabList = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabTests;
          setHospitalLabList(data);
          setHospitalLabListImmutable(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setHospitalLabList([]);
      });
  };

  //lab vials
  const [vialList, setvialList] = useState([]);
  const getHospitalVials = () => {
    axios
      .get("http://localhost:8521/api/admin/vialList")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.viallist;
          setvialList(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setvialList([]);
      });
  };

  // search
  const [search, setSearch] = useState("");
  function handleFilter() {
    if (search != "") {
      // setSearch(search);
      const filterTable = HospitalLabList.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(search.toLowerCase())
        )
      );
      setHospitalLabList([...filterTable]);
    } else {
      setHospitalLabList([...HospitalLabListImmutable]);
    }
  }

  useEffect(() => {
    handleFilter();
  }, [search]);

  useEffect(() => {
    HospitallabCategories();
    HospitallabList();
    getHospitalVials();
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
          <input
            value={search}
            placeholder="Search Hospital Lab test"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={handleShow} />
          </div>
        </div>

        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add lab test</Modal.Title>
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
                  Test Category
                </label>

                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestCategory(e.target.value)}
                >
                  <option>Choose Lab Category</option>
                  {HospitalLabCatList?.map((catitem) => {
                    return (
                      <option value={catitem?._id}>
                        {catitem?.testCategory}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test Name
                </label>
                <input
                  placeholder="Test Name"
                  type="text"
                  value={testName}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestName(e.target.value)}
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
                  Test Image
                </label>
                <input
                  placeholder="Test Category"
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
                  onChange={(e) => settestImg(e.target.files[0])}
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
                  price Non Insurance
                </label>
                <input
                  placeholder="Non-insurance Price"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={priceNonInsurance}
                  onChange={(e) => setpriceNonInsurance(e.target.value)}
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
                  price Insurance
                </label>
                <input
                  placeholder="Insurance Price"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={priceInsurance}
                  onChange={(e) => setpriceInsurance(e.target.value)}
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
                  Unit
                </label>
                <input
                  placeholder="Unit"
                  type="string"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={unit}
                  onChange={(e) => setunit(e.target.value)}
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
                  General Reference Value
                </label>
                <input
                  placeholder="General Reference Value"
                  type="string"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={generalRefVal}
                  onChange={(e) => setgeneralRefVal(e.target.value)}
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
                  Turn Around Time(TAT)
                </label>
                <input
                  placeholder="Turn Around Time (In Hours)"
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={tat}
                  onChange={(e) => settat(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test Description
                </label>
                <textarea
                  cols={5}
                  rows={5}
                  placeholder="Test Description"
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={testDescription}
                  onChange={(e) => settestDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Vials
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
                      setaddedVialObj(JSON.parse(e.target.value))
                    }
                  >
                    <option>Choose Vial</option>
                    {vialList?.map((val) => {
                      return (
                        <option value={JSON.stringify(val)}>{val?.vial}</option>
                      );
                    })}
                  </select>
                  <button
                    style={{
                      marginLeft: "10px",
                      border: "0px",
                      backgroundColor: "#ebebeb",
                      color: "#20958C",
                      borderRadius: "10px ",
                    }}
                    onClick={vialsAddedFn}
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
                <Table>
                  <thead>
                    <td>S.no.</td>
                    <td>Vials</td>
                    <td>Action</td>
                  </thead>
                  <tbody>
                    {showvialsneeded?.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}. </td>
                          <td>{item?.vial} </td>
                          <td>
                            <AiFillDelete
                              style={{ color: "red" }}
                              onClick={() => vialRemFn(item?.vialid)}
                            />{" "}
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
                onClick={() => {
                  AddHospitalLabTest();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          show={ShowvialDetailsModal}
          onHide={handleClosevialDetailsModal}
        >
          <Modal.Header>
            <Modal.Title>Vial Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive>
              <thead>
                <th>S.no.</th>
                <th>Vial</th>
                <th>Vial Description</th>
                <th>Image</th>
              </thead>
              <tbody style={{ backgroundColor: "#F5F5F5" }}>
                {vialneededArr?.map((val, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{val?.vialid?.vial}</td>
                      <td>{val?.vialid?.vialDescription}</td>
                      <td>
                        <img
                          src={`http://localhost:8521/Vials/${val?.vialid?.vialImg}`}
                          style={{ width: "100px" }}
                          alt="no-img"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
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
              onClick={handleClosevialDetailsModal}
            >
              CANCEL
            </button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show4} onHide={handleClose4}>
          <Modal.Header>
            <Modal.Title>Edit lab test</Modal.Title>
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
                  Test Category: {View?.testCategory?.testCategory}
                </label>

                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestCategory(e.target.value)}
                >
                  <option>Choose Lab Category</option>
                  {HospitalLabCatList?.map((catitem) => {
                    return (
                      <option value={catitem?._id}>
                        {catitem?.testCategory}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-lg-6" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test Name
                </label>
                <input
                  placeholder={View?.testName}
                  type="text"
                  value={testName}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => settestName(e.target.value)}
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
                  Test Image:{" "}
                  <Link
                    to={`http://localhost:8521/HospitalLabTest/${View?.testImg}`}
                    target="blank_"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    Test Image
                  </Link>
                </label>
                <input
                  placeholder="Test Category"
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
                  onChange={(e) => settestImg(e.target.files[0])}
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
                  price Non Insurance
                </label>
                <input
                  placeholder={View?.priceNonInsurance}
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpriceNonInsurance(e.target.value)}
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
                  price Insurance
                </label>
                <input
                  placeholder={View?.priceInsurance}
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setpriceInsurance(e.target.value)}
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
                  Unit
                </label>
                <input
                  placeholder={View?.unit}
                  type="string"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={unit}
                  onChange={(e) => setunit(e.target.value)}
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
                  General Reference Value
                </label>
                <input
                  placeholder={View?.generalRefVal}
                  type="string"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={generalRefVal}
                  onChange={(e) => setgeneralRefVal(e.target.value)}
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
                  Turn Around Time(TAT)
                </label>
                <input
                  placeholder={`${View?.tat} Hours`}
                  type="number"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={tat}
                  onChange={(e) => settat(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test Description
                </label>
                <textarea
                  cols={5}
                  rows={5}
                  placeholder={`${View?.testDescription}`}
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  value={testDescription}
                  onChange={(e) => settestDescription(e.target.value)}
                >
                  {View?.testDescription}
                </textarea>
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
                    <td>S.no.</td>
                    <td>Vials</td>
                  </thead>
                  <tbody>
                    {View?.vialsneeded?.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}. </td>
                          <td>{item?.vialid?.vial} </td>
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
                onClick={handleClose4}
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
                  editHospitalLabTestDetails();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={show5} onHide={handleClose5}>
          <Modal.Header>
            <Modal.Title>Edit Available Vials</Modal.Title>
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
                  Vials
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
                      setaddedVialObj(JSON.parse(e.target.value))
                    }
                  >
                    <option>Choose Vial</option>
                    {vialList?.map((val) => {
                      return (
                        <option value={JSON.stringify(val)}>{val?.vial}</option>
                      );
                    })}
                  </select>
                  <button
                    style={{
                      marginLeft: "10px",
                      border: "0px",
                      backgroundColor: "#ebebeb",
                      color: "#20958C",
                      borderRadius: "10px ",
                    }}
                    onClick={AddVialDetails}
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
                <Table>
                  <thead>
                    <td>S.no.</td>
                    <td>Vials</td>
                    <td>Action</td>
                  </thead>
                  <tbody>
                    {View?.vialsneeded?.map((item, i) => {
                      return (
                        <tr>
                          <td>{i + 1}. </td>
                          <td>{item?.vialid?.vial} </td>
                          <td>
                            <AiFillDelete
                              style={{ color: "red" }}
                              onClick={() => deleteVialDetails(item?._id)}
                            />{" "}
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
                onClick={handleClose5}
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

        {/* =========================== delete hospital lab test ===================== */}

        <Modal size="lg" show={show6} onHide={handleClose6}>
          <Modal.Header>
            <Modal.Title>Delete Hospital lab test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "white" }}>
              Are You sure! you want to <b style={{ color: "red" }}>DELETE </b>{" "}
              this entry?
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
                onClick={handleClose6}
              >
                No
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
                onClick={deleteHospitalLabTestDetails}
              >
                Yes
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* =========================== show hospital lab test description ===================== */}

        <Modal size="lg" show={show7} onHide={handleClose7}>
          <Modal.Header>
            <Modal.Title> Hospital lab test Description</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "white" }}>{showTestDetails}</p>
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
                onClick={handleClose7}
              >
                close
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <div style={{ overflowX: "scroll", overflowY: "scroll" }}>
          <Table responsive="md" style={{ marginTop: "1%" }} bordered>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>S.no.</th>
                <th>Lab Category</th>
                <th>Lab Test</th>
                <th>Lab Test Image</th>
                <th>Non-Insurance Price</th>
                <th>Insurance Price</th>
                <th>Unit</th>
                {/* <th>Before Food Reference value</th>
              <th>After Food Reference value</th> */}
                <th>General Reference value</th>
                <th>Turn Around Time(TAT)</th>
                <th>Description</th>
                <th>Vial Availability</th>

                <th>Edit Vials</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {HospitalLabList?.map((valitem, index) => {
                return (
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{index + 1}</td>
                    <td>{valitem?.testCategory?.testCategory}</td>
                    <td>{valitem?.testName}</td>
                    <td>
                      <img
                        src={`http://localhost:8521/HospitalLabTest/${valitem?.testImg}`}
                        style={{ width: "100px" }}
                        alt="no-img"
                      />
                    </td>
                    <td>{valitem?.priceNonInsurance}</td>
                    <td>{valitem?.priceInsurance}</td>
                    <td>{valitem?.unit}</td>
                    {/* <td>{valitem?.beforeFoodRefVal}</td>
                  <td>{valitem?.afterFoodRefVal}</td> */}
                    <td>{valitem?.generalRefVal}</td>
                    <td>{valitem?.tat} Hr.</td>
                    <td>
                      {!valitem?.testDescription ? (
                        "--/--"
                      ) : (
                        <IoEye
                          style={{ fontSize: "20px", color: "#20958c" }}
                          onClick={() => {
                            setShowTestDetails(valitem?.testDescription);
                            handleShow7();
                          }}
                        />
                      )}{" "}
                    </td>
                    <td>
                      <IoEye
                        style={{ fontSize: "20px", color: "#20958c" }}
                        onClick={() => {
                          setvialneededArr(valitem?.vialsneeded);
                          handleShowvialDetailsModal();
                        }}
                      />
                    </td>
                    <td>
                      <MdEdit
                        style={{ color: "#20958c", marginRight: "1%" }}
                        onClick={() => {
                          setView(valitem);
                          handleShow5();
                        }}
                      />
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <MdEdit
                          style={{ color: "#20958c", marginRight: "1%" }}
                          onClick={() => {
                            setView(valitem);
                            handleShow4();
                          }}
                        />
                        <AiFillDelete
                          style={{ color: "red" }}
                          onClick={() => {
                            setView(valitem);
                            handleShow6();
                          }}
                        />
                        {/* <button
                        style={{
                          fontSize: "12px",
                          border: "none",
                          backgroundColor: "#20958c",
                          color: "white",
                          fontWeight: "600",
                          borderRadius: "4px",
                        }}
                      >
                        BLOCK
                      </button> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
