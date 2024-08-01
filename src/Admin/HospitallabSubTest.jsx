import React, { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import axios from "axios";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function HospitallabSubTest() {
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

  useEffect(() => {
    HospitallabListFn();
  }, []);

  const [labtestid, setlabtestid] = useState("");
  const [subtestName, setsubtestName] = useState("");
  const [unit, setunit] = useState("");
  const [generalRefVal, setgeneralRefVal] = useState("");

  const AddHospitalSubLabTest = async () => {
    const obj = {
      labtestid,
      subtestName,
      unit,
      generalRefVal,
    };
    try {
      const config = {
        url: "/admin/HospitalLabSubTest",
        method: "post",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 201 || res.status === 200) {
        alert(res.data.success);
        HospitallabSubTestlist();
        handleClose();
        setlabtestid("");
        setsubtestName("");
        setunit("");
        setgeneralRefVal("");
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

  useEffect(() => {
    HospitallabSubTestlist();
  }, []);
  const [data, setdata] = useState([]);
  const HospitallabSubTestlist = () => {
    axios
      .get("http://localhost:8521/api/admin/getHospitalLabsubTestlist")
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          const data = response.data.HospitalLabSubTest;
          setdata(data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setdata([]);
      });
  };

  const UpdateHospitalLabSubTest = async () => {
    const obj = {
      labtestid,
      subtestName,
      unit,
      generalRefVal,
    };
    try {
      const config = {
        url: "/admin/editHospitalLabsubtestDetails/" + View?._id,
        method: "put",
        headers: { "content-type": "application/json" },
        baseURL: "http://localhost:8521/api",
        data: obj,
      };
      const res = await axios(config);

      if (res.status === 200) {
        alert(res.data.success);
        HospitallabSubTestlist();
        handleClose4();
        setlabtestid("");
        setsubtestName("");
        setunit("");
        setgeneralRefVal("");
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

  const [View, setView] = useState({});
  const deleteHospitallabSubTest = () => {
    axios
      .delete(
        "http://localhost:8521/api/admin/deleteHospitalLabsubtestDetails/" +
          View?._id
      )
      .then(function (response) {
        // handle success
        if (response.status === 200) {
          alert(response.data.success);
          handleClose1();
          HospitallabSubTestlist();
          setlabtestid("");
          setsubtestName("");
          setunit("");
          setgeneralRefVal("");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        return alert("Something is up with the server");
      });
  };

  // search
  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      settableFilter([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata([...data]);
    }
  };

  const exportType = "xls";

  const [fileName, setfileName] = useState("Hospital-Lab-Sub-Test");

  const ExportToExcel = () => {
    if (fileName) {
      if (data.length != 0) {
        exportFromJSON({ data, fileName, exportType });
        // setfileName("");
      } else {
        alert("There is no data to export");
        // setfileName("");
      }
    } else {
      alert("Enter file name to export");
    }
  };

  console.log("data", data);

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
            placeholder="Search"
            style={{
              padding: "5px 10px",
              border: "1px solid #20958c",
              borderRadius: "0px",
            }}
            onChange={handleFilter}
          />
          <button
            style={{
              backgroundColor: "#20958c",
              color: "white",
              border: "none",
              fontSize: "12px",
              borderRadius: "4px",
            }}
            onClick={ExportToExcel}
          >
            EXPORT <AiFillFileExcel />
          </button>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ImLab className="AddIcon1" onClick={() => setShow(true)} />
          </div>
        </div>

        <Modal size="md" show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add lab sub test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test
                </label>
                <select
                  placeholder="Test"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setlabtestid(e.target.value)}
                >
                  <option>Choose Test</option>
                  {HospitalLabList?.map((val) => {
                    return (
                      <option key={val?._id} value={val?._id}>
                        {val?.testName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Sub Test Name
                </label>
                <input
                  placeholder="Sub Test Name"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setsubtestName(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Unit
                </label>
                <input
                  placeholder="Unit"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setunit(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  General Reference value
                </label>
                <input
                  placeholder="General Reference value"
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setgeneralRefVal(e.target.value)}
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
                  AddHospitalSubLabTest();
                }}
              >
                SUBMIT
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal size="md" show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Delete Hospital Lab Test Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ color: "white" }}>
              Are You sure? You want to <b style={{ color: "red" }}>delete</b>{" "}
              the Sub Test details
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
                  border: "1px solid grey",
                  padding: "4px 10px",
                }}
                onClick={handleClose1}
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
                  border: "1px solid red",
                  padding: "4px 10px",
                }}
                onClick={deleteHospitallabSubTest}
              >
                Delete
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal
          size="md"
          show={show4}
          onHide={() => {
            handleClose4();
            setlabtestid("");
            setsubtestName("");
            setunit("");
            setgeneralRefVal("");
          }}
        >
          <Modal.Header>
            <Modal.Title>Edit lab sub test</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-12">
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Test : {labtestid ? "" : View?.labtestid?.testName}
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setlabtestid(e.target.value)}
                >
                  <option>Choose Test</option>
                  {HospitalLabList?.map((val) => {
                    return (
                      <option key={val?._id} value={val?._id}>
                        {val?.testName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Sub Test Name
                </label>
                <input
                  placeholder={View?.subtestName}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setsubtestName(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  Unit
                </label>
                <input
                  placeholder={View?.unit}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setunit(e.target.value)}
                ></input>
              </div>

              <div className="col-lg-12" style={{ marginTop: "4%" }}>
                <label
                  style={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                  htmlFor="cat-img"
                >
                  General Reference value
                </label>
                <input
                  placeholder={View?.generalRefVal}
                  style={{
                    width: "100%",
                    padding: "8px 20px",
                    borderRadius: "0px",
                    border: "1px solid #ebebeb",
                    backgroundColor: "#ebebeb",
                  }}
                  onChange={(e) => setgeneralRefVal(e.target.value)}
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
                onClick={() => {
                  handleClose4();
                  setlabtestid("");
                  setsubtestName("");
                  setunit("");
                  setgeneralRefVal("");
                }}
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
                onClick={UpdateHospitalLabSubTest}
              >
                Update
              </button>
            </div>
          </Modal.Footer>
        </Modal>

        <div style={{ overflow: "hidden", overflowX: "scroll" }}>
          <Table responsive="md" style={{ marginTop: "1%" }}>
            <thead>
              <tr style={{ fontSize: "15px", textAlign: "center" }}>
                <th>S.no.</th>
                <th>Test</th>
                <th>Sub Test</th>
                <th>Unit</th>
                <th>General Reference Value</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {search.length > 0
                ? tableFilter
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{index + 1}</td>
                          <td>{item?.labtestid?.testName}</td>
                          <td>{item?.subtestName}</td>
                          <td>{item?.unit}</td>
                          <td>{item?.generalRefVal}</td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "center",
                              }}
                            >
                              <MdEdit
                                style={{
                                  color: "#20958c",
                                  marginRight: "15px",
                                }}
                                onClick={() => {
                                  setView(item);
                                  handleShow4();
                                }}
                              />
                              <AiFillDelete
                                style={{ color: "red" }}
                                onClick={() => {
                                  setView(item);
                                  handleShow1();
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })
                : data
                    ?.slice(pagesVisited, pagesVisited + usersPerPage)
                    ?.map((item, index) => {
                      return (
                        <tr style={{ fontSize: "15px", textAlign: "center" }}>
                          <td>{index + 1}</td>
                          <td>{item?.labtestid?.testName}</td>
                          <td>{item?.subtestName}</td>
                          <td>{item?.unit}</td>
                          <td>{item?.generalRefVal}</td>

                          <td>
                            <div
                              style={{
                                display: "flex",
                                textAlign: "center",
                                justifyContent: "center",
                              }}
                            >
                              <MdEdit
                                style={{
                                  color: "#20958c",
                                  marginRight: "15px",
                                }}
                                onClick={() => {
                                  setView(item);
                                  handleShow4();
                                }}
                              />
                              <AiFillDelete
                                style={{ color: "red" }}
                                onClick={() => {
                                  setView(item);
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
        <div style={{ display: "flex" }}>
          <p style={{ width: "100%", marginTop: "20px" }}>
            Total Count: {data?.length}
          </p>
          <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}
