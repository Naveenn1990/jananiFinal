import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { CkEditorComponent } from "../CkEditor/CkEditorComponent";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";

export const ReferLabTest = () => {
  const ReferalLAB = JSON.parse(sessionStorage.getItem("RLabDetails"));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
    setLabTestCat("");
  };
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => {
    setShow3(false);
    setLabTestCat("");
  };
  const handleShow3 = () => setShow3(true);

  const [LabTestCat, setLabTestCat] = useState("");

  const AddLabTestCategory = async () => {
    if (!LabTestCat) {
      return alert("Enter Lab-Test Category");
    }
    try {
      const config = {
        url: "/addtestcategory",
        method: "post",
        baseURL: "http://localhost:8521/api/ClinicLab",
        // headers: { "content-type": "appliaction/json" },
        data: {
          LabId: ReferalLAB?._id,
          testcatname: LabTestCat,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setLabTestCat("");
        alert(res.data.success);
        getTestCategory();
        handleClose();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const [TestCategoryList, setTestCategoryList] = useState([]);
  const getTestCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8521/api/ClinicLab/gettestcategory/${ReferalLAB?._id}`
      );
      setTestCategoryList(res.data.getdata);
      setPagination(res.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  const [DataView, setDataView] = useState("");
  const deletetestcategory = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8521/api/ClinicLab/deletetestcategory/${DataView?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        handleClose1();
        getTestCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLabTestCat(DataView?.testcatname || "");
  }, [DataView]);

  const EditTestCat = async () => {
    try {
      const config = {
        url: "/edittestcategory",
        method: "put",
        baseURL: "http://localhost:8521/api/ClinicLab",
        // headers: { "content-type": "appliaction/json" },
        data: {
          testid: DataView?._id,
          testcatname: LabTestCat,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        setLabTestCat("");
        alert(res.data.success);
        getTestCategory();
        handleClose2();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const Availability = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8521/api/ClinicLab/availabletestcategory/${DataView?._id}`
      );
      if (res.status === 200) {
        alert(res.data.success);
        handleClose3();
        getTestCategory();
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  const [SearchItem, setSearchItem] = useState("");
  //Pagination
  const [pagination, setPagination] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(pagination?.length / usersPerPage);
  const changePage = (selected) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getTestCategory();
  }, []);

  return (
    <div>
      <h4 style={{ backgroundColor: "#dae1f3" }} className="p-4 fw-bold">
        {" "}
        Add Lab Test
      </h4>

      <div className="container">
        <div>
          <div className="col-lg-8  d-flex gap-2 mb-4">
            <Form className="">
              <Form.Control
                style={{ width: "400px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </Form>
            <Button className="" onClick={() => handleShow()}>
              Add Category
            </Button>
          </div>
        </div>
        <Table bordered>
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Test Name</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {TestCategoryList?.slice(
              pagesVisited,
              pagesVisited + usersPerPage
            )?.map((item, i) => {
              if (
                SearchItem === "" ||
                Object.values(item).some((value) =>
                  String(value).toLowerCase().includes(SearchItem.toLowerCase())
                )
              )
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.testcatname}</td>
                    <td>
                      {item?.isavailable === false ? (
                        <>
                          <div className="d-flex gap-3 align-items-center">
                            <Button
                              onClick={() => {
                                handleShow3();
                                setDataView(item);
                              }}
                              variant="danger"
                            >
                              Block
                            </Button>
                            <p style={{ color: "green", textAlign: "center" }}>
                              Yes it's Available
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="d-flex gap-3 align-items-center">
                            <Button
                              onClick={() => {
                                handleShow3();
                                setDataView(item);
                              }}
                              variant="success"
                            >
                              UnBlock
                            </Button>
                            <p style={{ color: "red", textAlign: "center" }}>
                              No it's not Available
                            </p>
                          </div>
                        </>
                      )}
                    </td>
                    <td>
                      <div className="d-flex gap-4 ">
                        <MdDelete
                          style={{
                            color: "red",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => {
                            setDataView(item);
                            handleShow1();
                          }}
                        />
                        <CiEdit
                          style={{
                            color: "green",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => {
                            setDataView(item);
                            handleShow2();
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
            })}
          </tbody>
        </Table>
        <div style={{float:"right"}} className="my-3 d-flex justify-end">
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              onChange={(event, value) => {
                changePage(value - 1);
              }}
              color="primary"
            />
          </Stack>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Test Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Test Category</Form.Label>
              <Form.Control
                onChange={(e) => setLabTestCat(e.target.value)}
                value={LabTestCat}
                type="text"
                placeholder="test category"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={AddLabTestCategory} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <img
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              src="./img/delete-btn.png"
              alt=""
            />
            <h4 className="fw-bold text-dark mb-2">Are You Sure</h4>
            <p>This event data will be removed permanently</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose1}>
            Cancle
          </Button>
          <Button variant="danger" onClick={deletetestcategory}>
            <FontAwesomeIcon icon={faCancel} className=" me-2" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Test Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Test Category</Form.Label>
              <Form.Control
                onChange={(e) => setLabTestCat(e.target.value)}
                type="text"
                value={LabTestCat}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={EditTestCat}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show3}
        onHide={handleClose3}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h5>
              Are You Sure About <b>{DataView?.testcatname}</b> Category...
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="success" onClick={Availability}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
