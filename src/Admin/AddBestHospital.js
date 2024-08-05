import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
import exportFromJSON from "export-from-json";

export default function AddBestHospital() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const [Header, setHeader] = useState("");
  const [Description, setDescription] = useState("");
  const [Icon, setIcon] = useState("");
  // Add
  const AddBestHospitalTown = async () => {
    if (!Header || !Description || !Icon) {
      alert("Please fill all the fields");
    } else {
      try {
        const config = {
          url: "/admin/addbestHospital",
          baseURL: "http://localhost:8521/api",
          method: "post",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            Header: Header,
            Description: Description,
            Icon: Icon,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose();
          getBestHospitalTown();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // edit
  const [editdata, seteditdata] = useState({});
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    seteditdata(id);
  };

  const [Header1, setHeader1] = useState("");
  const [Description1, setDescription1] = useState("");
  const [Icon1, setIcon1] = useState("");

  const editBestHospitalTown = async () => {
    if (!Header1 && !Description1 && !Icon1) {
      alert("There is no changes to update");
    } else {
      try {
        const config = {
          url: "/admin/editbestHospital/" + editdata?._id,
          baseURL: "http://localhost:8521/api",
          method: "put",
          headers: { "Content-Type": "multipart/form-data" },
          data: {
            Header: Header1 ? Header1 : editdata?.Header,
            Description: Description1 ? Description1 : editdata?.Description,
            Icon: Icon1 ? Icon1 : editdata?.Icon,
          },
        };
        const res = await axios(config);
        if (res.status === 200) {
          alert(res.data.success);
          handleClose1();
          getBestHospitalTown();
        }
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  };

  // get
  const [data, setdata] = useState([]);
  const getBestHospitalTown = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getbestHospital"
      );
      if (res.status === 200) {
        setdata(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // delete
  const deleteBestHospitalTown = async (id) => {
    try {
      const config = {
        url: "/admin/deletebestHospital/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getBestHospitalTown();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getBestHospitalTown();
  }, []);

  const [search, setSearch] = useState("");
  const [tableFilter, settableFilter] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = data?.filter((o) =>
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

  const [fileName, setfileName] = useState("Best-Hospital");

  const ExportToExcel = () => {
    if (fileName) {
      if (data?.length != 0) {
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
          <h6 style={{ fontSize: "22px", fontWeight: "600", color: "grey" }}>
            Best Hospital In Town
          </h6>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2%",
            marginBottom: "2%",
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
          {data?.length < 6 ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <AiOutlinePlusCircle
                  className="AddIcon1"
                  onClick={() => setShow(true)}
                />
              </div>
            </>
          ) : null}
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Header</th>
              <th width="500px">Description</th>
              <th>Icon</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter?.map((item, i) => {
                  return (
                    <>
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{i + 1}</td>
                        <td>{item?.Header}</td>
                        <td>{item?.Description}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/BestHospital/${item?.Icon}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              imageRendering: "pixelated",
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-5 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => deleteBestHospitalTown(item?._id)}
                              style={{ color: "red" }}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })
              : data?.map((item, i) => {
                  return (
                    <>
                      <tr style={{ fontSize: "15px", textAlign: "center" }}>
                        <td>{i + 1}</td>
                        <td>{item?.Header}</td>
                        <td>{item?.Description}</td>
                        <td>
                          <img
                            src={`http://localhost:8521/BestHospital/${item?.Icon}`}
                            style={{
                              width: "50px",
                              height: "50px",
                              imageRendering: "pixelated",
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex gap-5 fs-5">
                            <MdEdit
                              style={{ color: "#20958c" }}
                              onClick={() => {
                                handleShow1(item);
                              }}
                            />
                            <AiFillDelete
                              onClick={() => deleteBestHospitalTown(item?._id)}
                              style={{ color: "red" }}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
          </tbody>
        </Table>
      </div>

      {/* Add Modal */}
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <input
                placeholder="Header"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setHeader(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Description"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12" htmlFor="upload">
              <input
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setIcon(e.target.files[0])}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={AddBestHospitalTown}>
              Add
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <label style={{ color: "white" }}>Header</label>
              <input
                placeholder={editdata?.Header}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setHeader1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <label style={{ color: "white" }}>Description</label>
              <input
                placeholder={editdata?.Description}
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setDescription1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12" htmlFor="upload">
              <label style={{ color: "white" }}>Icon</label>
              <input
                type="file"
                accept="image/*"
                id="upload"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setIcon1(e.target.files[0])}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={editBestHospitalTown}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
