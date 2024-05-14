import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillEyeFill, BsImages } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoMdImages } from "react-icons/io";
import axios from "axios";
export default function AddClinicalExecellence() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  // Add
  const [FieldName1, setFieldName1] = useState("");
  const [FieldName2, setFieldName2] = useState("");
  const [FieldNumber, setFieldNumber] = useState("");
  const AddClinical = async () => {
    try {
      const config = {
        url: "/admin/addClinical",
        baseURL: "http://localhost:8521/api",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          FieldName1: FieldName1,
          FieldName2: FieldName2,
          FieldNumber: FieldNumber,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose();
        getClinical();
        setFieldName1("")
        setFieldName2("")
        setFieldNumber("")
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // edit
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (id) => {
    setShow1(true);
    setEditId(id);
  };
  const [EditId, setEditId] = useState("");
  const EditClinical = async () => {
    try {
      const config = {
        url: "/admin/editClinical/" + EditId,
        baseURL: "http://localhost:8521/api",
        method: "put",
        headers: { "Content-Type": "application/json" },
        data: {
          FieldName1: FieldName1,
          FieldName2: FieldName2,
          FieldNumber: FieldNumber,
        },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        handleClose1();
        getClinical();
        setFieldName1("")
        setFieldName2("")
        setFieldNumber("")
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // get
  const [getClinicaldata, setgetClinicaldata] = useState([]);
  const getClinical = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8521/api/admin/getClinical"
      );
      if (res.status === 200) {
        setgetClinicaldata(res.data.success);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  // delete
  const deleteClinical = async (id) => {
    try {
      const config = {
        url: "/admin/deleteClinical/" + id,
        baseURL: "http://localhost:8521/api",
        method: "delete",
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios(config);
      if (res.status === 200) {
        alert(res.data.success);
        getClinical();
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getClinical();
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
            Clinical Execellence
          </h6>

          {getClinicaldata?.length < 4 ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <AiOutlinePlusCircle
                className="AddIcon1"
                onClick={() => setShow(true)}
              />
            </div>
          ) : null}
        </div>

        <Table responsive="md" style={{ marginTop: "1%" }}>
          <thead>
            <tr style={{ fontSize: "15px", textAlign: "center" }}>
              <th>S.No</th>
              <th>Field Name 1</th>
              <th>Field Number</th>
              <th>Field Name 2</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {getClinicaldata?.map((item, i) => {
              return (
                <>
                  <tr style={{ fontSize: "15px", textAlign: "center" }}>
                    <td>{i + 1}</td>
                    <td>{item?.FieldName1}</td>
                    <td>{item?.FieldNumber}</td>
                    <td>{item?.FieldName2}</td>
                    <td>
                      <div className="d-flex gap-5 fs-5">
                        <MdEdit
                          style={{ color: "#20958c" }}
                          onClick={() => {
                            handleShow1(item?._id);
                          }}
                        />
                        <AiFillDelete
                          onClick={() => deleteClinical(item?._id)}
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
                placeholder="Field Name 1"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldName1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Field Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldNumber(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Field Name 2"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldName2(e.target.value)}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="warning" onClick={() => AddClinical()}>
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
              <input
                placeholder="Field Name 1"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldName1(e.target.value)}
              ></input>
            </div>

            <div className="col-lg-12">
              <input
                placeholder="Field Number"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldNumber(e.target.value)}
              ></input>
            </div>

            <div className="Field Name 2">
              <input
                type="text"
                placeholder="Field Name 2"
                style={{
                  width: "100%",
                  padding: "8px 20px",
                  borderRadius: "0px",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#ebebeb",
                  marginTop: "4%",
                }}
                onChange={(e) => setFieldName2(e.target.value)}
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={EditClinical}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
