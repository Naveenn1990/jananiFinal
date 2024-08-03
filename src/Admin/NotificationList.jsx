import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import exportFromJSON from "export-from-json";
import ReactPaginate from "react-paginate";
import {
  AiFillDelete,
  AiFillFileExcel,
  AiOutlinePlusCircle,
} from "react-icons/ai";

function NotificationList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [clinicalLabs, setclinicalLabs] = useState([]);
  const getClinicalLabsList = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/ClinicLab/getClinicLabList"
      );
      if (res.status === 200) {
        setclinicalLabs(res.data.ClinicalLabsInfo);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [ClinicDoctors, setClinicDoctors] = useState([]);
  const getClinicDoctors = () => {
    axios
      .get("http://localhost:8521/api/Clinic/getClinicList")
      .then(function (response) {
        setClinicDoctors(response.data.ClinicalDoctorsInfo);
      })
      .catch(function (error) {
        console.log(error);
        setClinicDoctors([]);
      });
  };

  const [VendorList, setVendorList] = useState([]);
  const getAllVendors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/vendor/getvendorList"
      );
      if (res.status === 200) {
        setVendorList(res.data.allVendors);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setdata] = useState([]);
  const getallNotification = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/notification/getnotification"
      );
      if (res.status === 200) {
        setdata(res.data.notification);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [SelectDepartment, setSelectDepartment] = useState(false);

  const [Message, setMessage] = useState("");
  const [ReferalLabId, setReferalLabId] = useState("");
  const [ReferalDoctorId, setReferalDoctorId] = useState("");
  const [VendorId, setVendorId] = useState("");
  const [selectedData, setselectedData] = useState({});

  useEffect(() => {
    if (ReferalLabId) {
      const xyz = clinicalLabs?.find((item) => item?._id === ReferalLabId);
      setselectedData(xyz);
    } else if (ReferalDoctorId) {
      const abc = ClinicDoctors?.find((item) => item?._id === ReferalDoctorId);
      setselectedData(abc);
    } else if (VendorId) {
      const srs = VendorList?.find((item) => item?._id === VendorId);
      setselectedData(srs);
    }
  }, [ReferalLabId, ReferalDoctorId, VendorId]);

  console.log(
    "selectedDoctor",
    ReferalLabId,
    ReferalDoctorId,
    VendorId,
    selectedData
  );

  const sendnotification = async () => {
    if (!SelectDepartment) {
      return alert("please Select Department");
    }
    if (!Message) {
      return alert("please Write Something");
    }
    try {
      const config = {
        url: "/sendnotification",
        method: "post",
        baseURL: "http://localhost:8521/api/notification",
        headers: { "content-type": "application/json" },
        data: {
          referallabid: ReferalLabId,
          referaldoctorid: ReferalDoctorId,
          vendorid: VendorId,
          message: Message,
          Department: SelectDepartment,
          Name: ReferalLabId
            ? selectedData?.ClinicLabName
            : ReferalDoctorId
            ? selectedData?.ClinicName
            : VendorId
            ? selectedData?.fname + " " + selectedData?.lname
            : "",
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setReferalLabId("");
        setMessage("");
        setReferalDoctorId("");
        handleClose();
        getallNotification();
        setVendorId("");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [ViewData, setViewData] = useState("");
  const deletenotification = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/notification/deletenotification/${ViewData?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        handleClose1();
        getallNotification();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  useEffect(() => {
    setMessage(ViewData?.message || "");
  }, [ViewData]);

  const editnotification = async () => {
    try {
      const config = {
        url: "/editnotification/" + ViewData?._id,
        method: "put",
        baseURL: "http://localhost:8521/api/notification",
        headers: { "content-type": "application/json" },
        data: {
          message: Message,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        setMessage("");
        handleClose2();
        getallNotification();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getClinicalLabsList();
    getClinicDoctors();
    getallNotification();
    getAllVendors();
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

  const [fileName, setfileName] = useState("Notification");

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
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold mt-4">
        Notification List
      </h4>
      <div className="container mb-3">
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <AiOutlinePlusCircle
              className="AddIcon1"
              onClick={() => handleShow()}
            />
          </div>
        </div>

        <Table bordered responsive>
          <thead>
            <tr className="admin-table-head">
              <th className="fw-bold">Sl.No</th>
              <th className="fw-bold">Department</th>
              <th className="fw-bold">Name</th>
              <th className="fw-bold">Message</th>
              <th className="fw-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? tableFilter
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{i + 1}</td>
                        <td>{item?.Department}</td>
                        <td>
                          {/* {item?.referallabid ? (
                            <p>{item?.referallabid?.ClinicLabName}</p>
                          ) : (
                            ""
                          )}
                          {item?.referaldoctorid ? (
                            <p>{item?.referaldoctorid?.ClinicName}</p>
                          ) : (
                            ""
                          )}
                          {item?.vendorid ? (
                            <p>
                              {item?.vendorid?.fname +
                                " " +
                                item?.vendorid?.lname}
                            </p>
                          ) : (
                            ""
                          )} */}
                          {item?.Name}
                        </td>
                        <td>{item?.message}</td>
                        <td>
                          <div className="d-flex gap-3">
                            <CiEdit
                              onClick={() => {
                                handleShow2();
                                setViewData(item);
                              }}
                              style={{
                                color: "green",
                                cursor: "pointer",
                                fontSize: "20px",
                              }}
                            />
                            <MdDelete
                              onClick={() => {
                                handleShow1();
                                setViewData(item);
                              }}
                              style={{
                                color: "red",
                                cursor: "pointer",
                                fontSize: "20px",
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
              : data
                  ?.slice(pagesVisited, pagesVisited + usersPerPage)
                  ?.map((item, i) => {
                    return (
                      <tr className="admin-table-row">
                        <td>{i + 1}</td>
                        <td>{item?.Department}</td>
                        <td>
                          {/* {item?.referallabid ? (
                            <p>{item?.referallabid?.ClinicLabName}</p>
                          ) : (
                            ""
                          )}
                          {item?.referaldoctorid ? (
                            <p>{item?.referaldoctorid?.ClinicName}</p>
                          ) : (
                            ""
                          )} */}
                          {item?.Name}
                        </td>
                        <td>{item?.message}</td>
                        <td>
                          <div className="d-flex gap-3">
                            <CiEdit
                              onClick={() => {
                                handleShow2();
                                setViewData(item);
                              }}
                              style={{
                                color: "green",
                                cursor: "pointer",
                                fontSize: "20px",
                              }}
                            />
                            <MdDelete
                              onClick={() => {
                                handleShow1();
                                setViewData(item);
                              }}
                              style={{
                                color: "red",
                                cursor: "pointer",
                                fontSize: "20px",
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
          </tbody>
        </Table>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Department</Form.Label>
              <Form.Select
                onChange={(e) => setSelectDepartment(e.target.value)}
              >
                <option>Select Department</option>
                <option value="Lab">Referal lab</option>
                <option value="Doctor">Referal Doctor</option>
                <option value="Vendor">Vendor</option>
              </Form.Select>
            </Form.Group>

            {SelectDepartment === "Lab" && (
              <Form.Group className="mb-3">
                <Form.Label>Select Referal Lab</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setReferalLabId(e.target.value);
                    setReferalDoctorId("");
                    setVendorId("");
                  }}
                >
                  <option>Select lab</option>
                  {clinicalLabs?.map((item) => {
                    return (
                      <option
                        value={item?._id}
                      >{`${item?.ClinicLabName} => ${item?.ClinicLabId}`}</option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            )}

            {SelectDepartment === "Doctor" && (
              <Form.Group className="mb-3">
                <Form.Label>Select Referal Doctor</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setReferalLabId("");
                    setReferalDoctorId(e.target.value);
                    setVendorId("");
                  }}
                >
                  <option>Select Doctor</option>
                  {ClinicDoctors?.map((item) => {
                    return (
                      <option
                        value={item?._id}
                      >{`${item?.ClinicName} => ${item?.ClinicDocId} (${item?.VendorType})`}</option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            )}

            {SelectDepartment === "Vendor" && (
              <Form.Group className="mb-3">
                <Form.Label>Select Vendor</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setReferalLabId("");
                    setReferalDoctorId("");
                    setVendorId(e.target.value);
                  }}
                >
                  <option>Select vendor</option>
                  {VendorList?.map((item) => {
                    return (
                      <option
                        value={item?._id}
                      >{`${item?.fname}${item?.lname}  => ${item?.vendorId}`}</option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={sendnotification}>
            Send Notification
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="md" show={show1} onHide={handleClose1}>
        <Modal.Header>
          <Modal.Title>Delete Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Are You sure , You want to Delete this Doctor Clinic information.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose1()}>
            No
          </Button>
          <Button variant="danger" onClick={() => deletenotification()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
                value={Message}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="success" onClick={editnotification}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotificationList;
